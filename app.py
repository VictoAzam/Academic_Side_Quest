from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def start_acess():
    #  acessando
    return 

@app.route('/login', methods=['GET', 'POST'])
def login_account():
    email = request.form['email']
    senha = request.form['senha']
    return 

if __name__ == "__main__":
    app.run(debug=True, port="2000", host="0.0.0.0")
