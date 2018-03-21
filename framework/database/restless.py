from flask import Flask, request, jsonify
from flask.ext.restless import APIManager
from flask.ext.sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://master:musepy.me@musepy.cmlur1dhu2fc.us-east-2.rds.amazonaws.com/test'
db = SQLAlchemy(app)
manager = APIManager(app, flask_sqlalchemy_db=db)


class Artist(db.Model):
    # Don't really have to set tablename because default is class name converted to lowercase
    __tableame__ = 'artist'
    artist_id = db.Column(db.Integer, primary_key = True, nullable = False)
    name = db.Column(db.String(500), nullable = False)  
    bio = db.Column(db.String(5000),nullable = False)
    image = db.Column(db.String(500),nullable = False)
    genre = db.Column(db.String(500),nullable = False)
    songs = db.relationship('Song', backref = 'artist', lazy = True)
    albums = db.relationship('Album', backref = 'artist', lazy = True)
    concerts = db.relationship('concerts', back_populates ='artists')

class Album(db.Model):
    __tableame__ = 'album' 
    album_id = db.Column(db.Integer, primary_key = True, nullable = False)
    name = db.Column(db.String(500), nullable = False)
    artwork = db.Column(db.String(500), nullable = False)
    genre = db.Column(db.String(500), nullable = False)
    year = db.Column(db.String(4), nullable = False)
    producer = db.Column(db.String(500), nullable = False)
    artist_id = db.Column(db.Integer, db.ForeignKey('artist.artist_id'), nullable = False)
    songs = db.relationship('Song', backref = 'album', lazy = True)

class Song(db.Model):
    __tableame__ = 'song'
    song_id = db.Column(db.Integer, primary_key = True, nullable = False)
    name = db.Column(db.String(500), nullable = False)
    lyrics = db.Column(db.String(5000), nullable = False)
    itunes = db.Column(db.String(500), nullable = False) #link to buy
    spotify = db.Column(db.String(500), nullable = False) #embed info 
    artist_id = db.Column(db.Integer, db.ForeignKey('artist.artist_id'), nullable = False)
    album_id = db.Column(db.Integer, db.ForeignKey('album.album_id'), nullable = False) 

class City(db.Model):
    __tableame__ = 'city'
    city_id = db.Column(db.Integer, primary_key = True, nullable = False)
    name = db.Column(db.String(500), nullable = False)    
    state = db.Column(db.String(500), nullable = False)    
    playlist = db.Column(db.String(500), nullable = False)
    map = db.Column(db.String(5000), nullable = False)   #embed info
    image = db.Column(db.String(500), nullable = False)
    concerts = db.relationship('concerts', back_populates ='cities')

# association objects to hold the addition information for the many to many relationships
class Concert(db.Model):
    __tableame__ = 'concert'
    city_id = db.Column(db.Integer, db.ForeignKey('city.city_id'), primary_key = True)
    artist_id = db.Column(db.Integer, db.ForeignKey('artist.artist_id'), primary_key = True)
    time = db.Column(db.DateTime, nullable = False)
    tickets = db.Column(db.String(500), nullable = False)
    venue = db.Column(db.String(500), nullable = False)
    cities = db.relationship('cities', back_populates = 'artists')    
    artists = db.relationship('artists', back_populates = 'cities')



db.create_all()

manager.create_api(Artist)
manager.create_api(Album)
manager.create_api(Song)
manager.create_api(City)


if __name__ == '__main__':
    app.run(debug=True)







        
