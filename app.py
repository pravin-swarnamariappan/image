from flask import Flask, render_template

# app
app = Flask(__name__)

# main page
@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')




if __name__ == "__main__":
	app.config['TEMPLATES_AUTO_RELOAD'] = True
	app.run()