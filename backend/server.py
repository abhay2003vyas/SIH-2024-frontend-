from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/process', methods=['POST'])
def process_file():
    data = request.json
    file_path = data.get("filePath")
    results = {"detectedObjects": ["car", "person"], "timestamps": [5, 15, 30]}
    return jsonify(results)

if __name__ == "__main__":
    app.run(port=8000)
