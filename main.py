from flask import Flask,render_template,request



app = Flask(__name__)



@app.route("/" )
def index():
    return render_template("index.html")

@app.route("/hakkinda" , methods = ['GET'])
def index():
    return render_template("hakkinda.html" , methods = ['GET'])

@app.route("/iletisim" )
def index():
    return render_template("iletisim.html" , methods = ['GET'])



if __name__ == '__main__':
    app.run(debug=True)
    