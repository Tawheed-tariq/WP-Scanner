from marshmallow import Schema, fields

class ActiveScanSchema(Schema):
    target = fields.String(required=True)

class ScanResultsSchema(Schema):
    scan_id = fields.String(required=True)

class SaveScanSchema(Schema):
    name = fields.String(required=True)
    target = fields.String(required=True)
    time = fields.String(required=True)
    status = fields.String(required=True)
    scan_id = fields.String(required=True)

class DeleteScanSchema(Schema):
    scan_id = fields.String(required=True)

