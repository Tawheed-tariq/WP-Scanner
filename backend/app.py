from flask import Flask
from flask_cors import CORS
from auth import auth
from flask_smorest import Api
from resources.scans import blp as scans_blp
from resources.reports import blp as reports_blp

app = Flask(__name__)
CORS(app)

app.config["PROPAGATE_EXCEPTIONS"] = True
app.config["API_TITLE"] = "VulnScanner API"
app.config["API_VERSION"] = "v1"
app.config["OPENAPI_VERSION"] = "3.0.3"
app.config["OPENAPI_URL_PREFIX"] = "/"
app.config["OPENAPI_SWAGGER_UI_PATH"] = "/swagger-ui"
app.config["OPENAPI_SWAGGER_UI_URL"] = "https://cdn.jsdelivr.net/npm/swagger-ui-dist/"

api = Api(app)

app.register_blueprint(auth, url_prefix='/auth')
app.register_blueprint(scans_blp)
app.register_blueprint(reports_blp)
