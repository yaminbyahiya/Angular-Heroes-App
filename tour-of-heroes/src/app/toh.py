from flask import jsonify, request, Flask
from flask_cors import CORS
app = Flask(__name__)
app.config["DEBUG"] = True
CORS(app)

all_heroes=[
    { 'id': 1, 'name': 'Iron Man' },
    { 'id': 2, 'name': 'Spider Man' },
    { 'id': 3, 'name': 'Black Panther' },
    { 'id': 4, 'name': 'Hulk' },
    { 'id': 5, 'name': 'Wolverine' },
    { 'id': 6, 'name': 'DareDevil' },
    { 'id': 7, 'name': 'Punisher' },
    { 'id': 8, 'name': 'Doctor Strange' },
    { 'id': 9, 'name': 'Thor' }
]

@app.route('/heroes', methods=['GET'])
def heroes():
    return jsonify(all_heroes)

@app.route('/detail/<id>', methods=['GET'])
def detail(id):
    for x in all_heroes:
        if int(x['id']) == int(id):
            return jsonify(x)
    return 0

app.run()
