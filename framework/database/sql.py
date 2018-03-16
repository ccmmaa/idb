from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE-URI'] = 'mysql:test.cmlur1dhu2fc.us-east-2.rds.amazonaws.com'
db = SQLAlchemy(app)

class Concert(db.Model):
    # Don't really have to set tablename because default is class name converted to lowercase
    __tableame__ = 'concert'
    id = db.Column('id', db.Integer, primary_key = True)
    time = db.Column(db.DateTime)
    venue = db.Column(db.String(500))

class Artist(db.Model):
    __tableame__ = 'artist'
    id = db.Column('id', db.Integer, primary_key = True)
    bio = db.Column(db.String(5000))
    image = db.Column(db.String(500))
    genre = db.Column(db.String(500))
    songs = db.relationship('Song', backref = 'artist', lazy = True)
    albums = db.relationship('Album', backref = 'artist', lazy = True)

class Album(db.Model):
    __tableame__ = 'album' 
    id = db.Column('id', db.Integer, primary_key = True)
    artwork = db.Column(db.String(500))
    genre = db.Column(db.String(500))
    year = db.Column(db.String(4))
    producer = db.Column(db.String(500))
    artist_id = db.Column(db.Integer, db.ForeignKey(artist.id), nullable = False)
    songs = db.relationship('Song', backref = 'album', lazy = True)

class Song(db.Model):
    __tableame__ = 'song'
    id = db.Column('id', db.Integer, primary_key = True)
    lyrics db.Column(db.String(5000))
    link = db.Column(db.String(500))
    preview = db.Column(db.String(500))
    artist_id = db.Column(db.Integer, db.ForeignKey(artist.id), nullable = False)
    album_id = db.Column(db.Integer, db.ForeignKey(album.id), nullable = False) 

class City(db.Model):
    __tableame__ = 'city'
    id = db.Column('id', db.Integer, primary_key = True)
    name = db.Column(db.String(500))    
    map = db.Column(db.String(5000))   
    image = name = db.Column(db.String(500))
