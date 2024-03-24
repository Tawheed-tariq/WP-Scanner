from pymongo import MongoClient
from werkzeug.security import generate_password_hash


client = MongoClient('mongodb://127.0.0.1:27017/')
db = client.scan_results_db

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