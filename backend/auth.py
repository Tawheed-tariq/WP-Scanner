from flask import Blueprint, request, jsonify
from werkzeug.security import check_password_hash, generate_password_hash
from db import create_user, get_user
import logging

auth = Blueprint('auth', __name__)

@auth.route('/signup', methods=['POST'])
def signup():
    data = request.json

    if not data:
        logging.error("No data received")
        return jsonify({'message': 'No data received', 'status': False}), 400

    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        logging.error("Username or password missing")
        return jsonify({'message': 'Username and password are required', 'status': False}), 400

    try:
        existing_user = get_user(username)
        if existing_user:
            logging.warning("Username already exists: %s", username)
            return jsonify({'message': 'Username already exists', 'status': False}), 409

        hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
        create_user(username, hashed_password)
        logging.info("User created successfully: %s", username)
        return jsonify({'status': True, 'username': username}), 201

    except Exception as e:
        logging.exception("An error occurred during signup")
        return jsonify({'message': 'An error occurred', 'status': False, 'error': str(e)}), 500

@auth.route('/login', methods=['POST'])
def login():
    data = request.json

    if not data:
        logging.error("No data received")
        return jsonify({'message': 'No data received', 'status': False}), 400

    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        logging.error("Username or password missing")
        return jsonify({'message': 'Username and password are required', 'status': False}), 400

    try:
        user = get_user(username)
        if user and check_password_hash(user['password'], password):
            logging.info("User logged in successfully: %s", username)
            return jsonify({'username': username, 'status': True}), 200
        else:
            logging.warning("Invalid username or password for user: %s", username)
            return jsonify({'message': 'Invalid username or password', 'status': False}), 401

    except Exception as e:
        logging.exception("An error occurred during login")
        return jsonify({'message': 'An error occurred', 'status': False, 'error': str(e)}), 500
