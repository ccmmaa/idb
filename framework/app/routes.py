from flask import render_template, url_for, request
from app import app
import requests



@app.route('/')

@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/songs')
def songsPage():
    return render_template('songs/songmodel.html')

@app.route('/songs/<song>')
def song(song):
    return render_template('songs/' + song)

@app.route('/artists')
def artistsPage():
    return render_template('artists/artistmodel.html')

@app.route('/artists/<artist>')
def artist(artist):
    return render_template('artists/'+ artist)

@app.route('/albums')
def albumsPage():
    return render_template('albums/albummodel.html')

@app.route('/albums/<album>')
def album(album):
    return render_template('albums/'+ album)
    
@app.route('/cities')
def citiesPage():
    return render_template('cities/citymodel.html')

@app.route('/cities/<city>')
def city(city):
    return render_template('cities/'+ city)
    
    
    
@app.route('/navigation.html')
def header():
    return render_template('navigation.html')

@app.route('/footer.html')
def footer():
    return render_template('footer.html')

@app.route('/assets/css/<style>')
def stylesheet(style):
    return render_template('assets/css/' + style)

@app.route('/images/<image>')
def image(image):
    return render_template('images/' + image)

@app.route('/images/portraits/<portrait>')
def portraits(portrait):
    return render_template('images/portraits/' + portrait)



@app.route('/about')
def about():
	cris_commits_1 = requests.get(_url_commits('author=ccmmaa'))
	cris_commits_2 = requests.get(_url_commits('author=ccmmaa@cs.utexas.edu'))
	cris_issues = requests.get(_url_issues('creator=ccmmaa;state=all'))
	cris_commits_num = len(cris_commits_1.json()) + len(cris_commits_2.json())
	cris_issues_num = len(cris_issues.json())
	
	chia_commits_1 = requests.get(_url_commits('author=chiahualu'))
	chia_commits_2 = requests.get(_url_commits('author=noreply@github.com'))
	chia_issues = requests.get(_url_issues('creator=chiahualu;state=all'))
	chia_commits_num = len(chia_commits_1.json()) +len(chia_commits_2.json())
	chia_issues_num = len(chia_issues.json())
	
	faiz_commits_1 = requests.get(_url_commits('author=faizm123'))
	faiz_commits_2 = requests.get(_url_commits('author=faizmerchant@wireless-10-145-231-18.public.utexas.edu'))
	faiz_commits_3 = requests.get(_url_commits('author=faizmerchant@wireless-10-147-115-189.public.utexas.edu'))
	faiz_commits_4 = requests.get(_url_commits('author=faizmerchant@fma.local'))
	faiz_issues = requests.get(_url_issues('creator=Faiz-Merchant;state=all'))
	faiz_commits_num = len(faiz_commits_1.json()) + len(faiz_commits_2.json()) + len(faiz_commits_3.json()) + len(faiz_commits_4.json())
	faiz_issues_num = len(faiz_issues.json())
	
	laur_commits = requests.get(_url_commits('author=Laurencez'))
	laur_issues = requests.get(_url_issues('creator=Laurencez;state=all'))
	laur_commits_num = len(laur_commits.json())
	laur_issues_num = len(laur_issues.json())
	
	sabr_commits = requests.get(_url_commits('author=SabrinaHerrero'))
	sabr_issues = requests.get(_url_issues('creator=SabrinaHerrero;state=all'))
	sabr_commits_num = len(sabr_commits.json())
	sabr_issues_num = len(sabr_issues.json())
	
	total_commits = cris_commits_num + chia_commits_num + faiz_commits_num + laur_commits_num + sabr_commits_num
	total_issues = cris_issues_num + chia_issues_num + faiz_issues_num + laur_issues_num + sabr_issues_num
	
	commits = {'cris' : cris_commits_num, 'chia' : chia_commits_num, 'faiz' : faiz_commits_num, 'laur' : laur_commits_num, 'sabr' : sabr_commits_num, 'total' : total_commits}
	issues = {'cris' : cris_issues_num, 'chia' : chia_issues_num, 'faiz' : faiz_issues_num, 'laur' : laur_issues_num, 'sabr' : sabr_issues_num, 'total' : total_issues}
	
	return render_template('about.html', commits=commits, issues=issues)
  
  
  
def _url_commits(path):
	return 'https://api.github.com/repos/ccmmaa/idb/commits?client_id=a08ccbc00587ed5ca731;client_secret=13e2285176b791bc3ebed203d4c627fa6f2d3d80;' + path
	
def _url_issues(path):
	return 'https://api.github.com/repos/ccmmaa/idb/issues?client_id=a08ccbc00587ed5ca731;client_secret=13e2285176b791bc3ebed203d4c627fa6f2d3d80;' + path


#### API Calls ####

@app.route('/<model>')#, subdomain="api")
def all_api(model):
    both = False
    requestString = 'http://localhost:5000/' + model
    if(request.args.get('page') is not None):
        requestString += '?page='+request.args.get('page')
        both = True

    if(request.args.get('results_per_page') is not None):
        if(both):
            requestString += '&'
        else:
            requestString += '?'
        requestString += 'results_per_page='+request.args.get('results_per_page')

    response = requests.get(requestString)
    return response.content

@app.route('/<model>/<id_num>')#, subdomain="api")
def instance_api(model,id_num):
    both = False
    requestString = 'http://localhost:5000/' + model + '/' + id_num
    if(request.args.get('page') is not None):
        requestString += '?page='+request.args.get('page')
        both = True

    if(request.args.get('results_per_page') is not None):
        if(both):
            requestString += '&'
        else:
            requestString += '?'
        requestString += 'results_per_page='+request.args.get('results_per_page')

    response = requests.get(requestString)
    return response.content



