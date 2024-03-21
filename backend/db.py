from pymongo import MongoClient

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
