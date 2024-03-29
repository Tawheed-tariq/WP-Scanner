from pymongo import MongoClient
from werkzeug.security import generate_password_hash


client = MongoClient('mongodb://127.0.0.1:27017/')
db = client.scan_results_db


def save_scan_results(scan_id, scan_data):
    """Save scan results to MongoDB."""
    scans_collection = db.scans
    scan_data['_id'] = scan_id
    scans_collection.insert_one(scan_data)

def get_scan_results(scan_id):
    """Retrieve scan results from MongoDB."""
    scans_collection = db.scans
    return scans_collection.find_one({'_id': scan_id})

def save_processed_results(scan_id, processed_data):
    """Save processed scan results to MongoDB."""
    processed_scans_collection = db.processed_scans
    processed_data['_id'] = scan_id
    processed_scans_collection.insert_one(processed_data)

def get_processed_results(scan_id):
    """Retrieve processed scan results from MongoDB."""
    processed_scans_collection = db.processed_scans
    return processed_scans_collection.find_one({'_id': scan_id})

def create_user(username, password):
    """Create a new user with hashed password."""
    users_collection = db.users
    hashed_password = generate_password_hash(password)
    users_collection.insert_one({'_id': username, 'password': hashed_password})

def get_user(username):
    """Retrieve a user by username."""
    users_collection = db.users
    return users_collection.find_one({'_id': username})

def save_scan_data(scan_data):
    """Save scan data to MongoDB."""
    saved_scans_collection = db.saved_scans
    saved_scans_collection.insert_one(scan_data)

def get_saved_scans():
    """Retrieve all scans from MongoDB."""
    saved_scans_collection = db.saved_scans
    cursor = saved_scans_collection.find()
    return [document for document in cursor]

def change_scan_status(scan_id):
    """Change status of scan after completed"""
    saved_scans_collection = db.saved_scans
    result = saved_scans_collection.update_one(
        {'_id': scan_id},
        {'$set': {'status': 'completed'}}
    )
    
    if result.modified_count > 0:
        print("Scan status updated successfully.")
    else:
        print("Scan not found.")
    