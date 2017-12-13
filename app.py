from flask import Flask, render_template

app = Flask(__name__)
app.config['DEBUG'] = True

@app.route('/')
def home():
    return 'Hello, World!'

@app.route('/<string:page_name>/')
def static_page(page_name):
    return render_template('{}.html'.format(page_name))

if __name__ == '__main__':
    app.run()
