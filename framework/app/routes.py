from flask import render_template
from app import app
import requests

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
	cris_commits = requests.get(_url_commits('?author=ccmmaa'))
	cris_issues = requests.get(_url_issues('?creator=ccmmaa;state=all'))
	cris_commits_num = len(cris_commits.json())
	cris_issues_num = len(cris_issues.json())
	
	chia_commits = requests.get(_url_commits('?author=chiahualu'))
	chia_issues = requests.get(_url_issues('?creator=chiahualu;state=all'))
	chia_commits_num = len(chia_commits.json())
	chia_issues_num = len(chia_issues.json())
	
	faiz_commits = requests.get(_url_commits('?author=faizmerchant@fma.local'))
	faiz_issues = requests.get(_url_issues('?creator=Faiz-Merchant;state=all'))
	faiz_commits_num = len(faiz_commits.json())
	faiz_issues_num = len(faiz_issues.json())
	
	laur_commits = requests.get(_url_commits('?author=Laurencez'))
	laur_issues = requests.get(_url_issues('?creator=Laurencez;state=all'))
	laur_commits_num = len(laur_commits.json())
	laur_issues_num = len(laur_issues.json())
	
	sabr_commits = requests.get(_url_commits('?author=SabrinaHerrero'))
	sabr_issues = requests.get(_url_issues('?creator=SabrinaHerrero;state=all'))
	sabr_commits_num = len(sabr_commits.json())
	sabr_issues_num = len(sabr_issues.json())
	
	total_commits = cris_commits_num + chia_commits_num + faiz_commits_num + laur_commits_num + sabr_commits_num
	total_issues = cris_issues_num + chia_issues_num + faiz_issues_num + laur_issues_num + sabr_issues_num
	
	commits = {'cris' : cris_commits_num, 'chia' : chia_commits_num, 'faiz' : faiz_commits_num, 'laur' : laur_commits_num, 'sabr' : sabr_commits_num, 'total' : total_commits}
	issues = {'cris' : cris_issues_num, 'chia' : chia_issues_num, 'faiz' : faiz_issues_num, 'laur' : laur_issues_num, 'sabr' : sabr_issues_num, 'total' : total_issues}
	
	return render_template('about.html', commits=commits, issues=issues)
  
def _url_commits(path):
	return 'https://api.github.com/repos/ccmmaa/idb/commits' + path
	
def _url_issues(path):
	return 'https://api.github.com/repos/ccmmaa/idb/issues' + path
