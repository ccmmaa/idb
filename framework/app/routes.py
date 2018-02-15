from flask import render_template
from app import app
import requests

@app.route('/')
@app.route('/index')
def index():
    #git_commit_info = requests.get()
    #git_issue_info = requests.get()
    return render_template('index.html')
