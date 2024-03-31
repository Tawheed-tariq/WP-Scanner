from flask import Blueprint, request, jsonify
from werkzeug.security import check_password_hash
from db import create_user, get_user

auth = Blueprint('auth', __name__)

@auth.route('/signup', methods=['POST'])
def signup():
    try:
        data = request.json
        username = data.get('username')
        password = data.get('password')

        if not username or not password:
            return jsonify({'message': 'Username and password are required', 'status' : False}), 400

        existing_user = get_user(username)
        if existing_user:
            return jsonify({'message': 'Username already exists', 'status' : False}), 409
        create_user(username, password)
        return jsonify({'status' : True, 'username' : username}), 201
    except :
        print("error")

@auth.route('/login', methods=['POST'])
def login():
    try:
        data = request.json
        username = data.get('username')
        password = data.get('password')
        if not username or not password:
            return jsonify({'message': 'Username and password are required', 'status' : False}), 400

        user = get_user(username)
        if user and check_password_hash(user['password'], password):
            return jsonify({'username': username, 'status' : True}), 200
        else:
            return jsonify({'message': 'Invalid username or password', 'status' : False})
    except:
        print('error')
