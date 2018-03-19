from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE-URI'] = 'mysql://master:musepy.me@musepy.cmlur1dhu2fc.us-east-2.rds.amazonaws.com/musepy'
db = SQLAlchemy(app)


class Artist(db.Model):
    # Don't really have to set tablename because default is class name converted to lowercase
    __tableame__ = 'artist'
    id = db.Column('id', db.Integer, primary_key = True, nullable = False)
    bio = db.Column(db.String(5000),nullable = False)
    image = db.Column(db.String(500),nullable = False)
    genre = db.Column(db.String(500),nullable = False)
    songs = db.relationship('Song', backref = 'artist', lazy = True, nullable = False)
    albums = db.relationship('Album', backref = 'artist', lazy = True, nullable = False)
    concerts = db.relationship('concerts', backpopulates ='artists')

class Album(db.Model):
    __tableame__ = 'album' 
    id = db.Column('id', db.Integer, primary_key = True, nullable = False)
    artwork = db.Column(db.String(500), nullable = False)
    genre = db.Column(db.String(500), nullable = False)
    year = db.Column(db.String(4), nullable = False)
    producer = db.Column(db.String(500), nullable = False)
    artist_id = db.Column(db.Integer, db.ForeignKey(artist.id), nullable = False)
    songs = db.relationship('Song', backref = 'album', lazy = True, nullable = False)

class Song(db.Model):
    __tableame__ = 'song'
    id = db.Column('id', db.Integer, primary_key = True, nullable = False)
    lyrics db.Column(db.String(5000), nullable = False)
    link = db.Column(db.String(500), nullable = False) #link to buy
    preview = db.Column(db.String(500), nullable = False) #embed info 
    artist_id = db.Column(db.Integer, db.ForeignKey(artist.id), nullable = False)
    album_id = db.Column(db.Integer, db.ForeignKey(album.id), nullable = False) 
    concerts = db.relationship('playlist', backpopulates ='songs')

class City(db.Model):
    __tableame__ = 'city'
    id = db.Column('id', db.Integer, primary_key = True, nullable = False)
    name = db.Column(db.String(500), nullable = False)    
    map = db.Column(db.String(5000), nullable = False)   #embed info
    image = db.Column(db.String(500), nullable = False)
    name = db.Column(db.String(500), nullable = False)
    concerts = db.relationship('concerts', backpopulates ='cities')
    playlist = db.relationship('playlist', backpopulates ='cities')

# association objects to hold the addition information for the many to many relationships
class Concert(db.Model):
    __tableame__ = 'concert'
    city_id = db.Column(db.Integer, db.ForeignKey(city.id), primary_key = True)
    artist_id = db.Column(db.Integer, db.ForeignKey(artist.id), primary_key = True)
    time = db.Column(db.DateTime, nullable = False)
    venue = db.Column(db.String(500), nullable = False)
    cities = db.relationship('cities', backpopulates = 'artists')    
    artists = db.relationship('artists', backref=db.backref('cities', lazy=True))

class Playlist()
    __tableame__ = 'playlist'
    city_id = db.Column(db.Integer, db.ForeignKey(city.id), primary_key = True)
    song_id = db.Column(db.Integer, db.ForeignKey(song.id), primary_key = True)
    link = db.Column(db.String(500), nullable = False)
    cities = db.relationship('cities', backpopulates = 'songs')    
    songs = db.relationship('songs', backref=db.backref('cities', lazy=True))


        
