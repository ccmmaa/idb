from flask import Flask, request
from flask_restless import APIManager
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin
import requests

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://master:musepy.me@musepy.cmlur1dhu2fc.us-east-2.rds.amazonaws.com/musepydb'
CORS(app)
db = SQLAlchemy(app)
manager = APIManager(app, flask_sqlalchemy_db=db)


class Artist(db.Model):
   __tableame__ = 'artist'
   artist_id = db.Column(db.Integer, primary_key = True, nullable = False)
   name = db.Column(db.String(500), nullable = False)  
   bio = db.Column(db.String(5000),nullable = False)
   image = db.Column(db.String(500),nullable = False)
   genre = db.Column(db.String(500),nullable = False)
   gen_genre = db.Column(db.String(500))
   songs = db.relationship('Song', backref = 'artist', lazy = True)
   albums = db.relationship('Album', backref = 'artist', lazy = True)
   concerts = db.relationship('Concert', back_populates ='artists')

class Album(db.Model):
   __tableame__ = 'album'
   album_id = db.Column(db.Integer, primary_key = True, nullable = False)
   name = db.Column(db.String(500), nullable = False)
   artwork = db.Column(db.String(500), nullable = False)
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
   city_id = db.Column(db.Integer, db.ForeignKey('city.city_id'))

class City(db.Model):
   __tableame__ = 'city'
   city_id = db.Column(db.Integer, primary_key = True, nullable = False)
   name = db.Column(db.String(500), nullable = False)    
   state = db.Column(db.String(500), nullable = False)    
   playlist = db.Column(db.String(500), nullable = False)
   image = db.Column(db.String(500), nullable = False)
   concerts = db.relationship('Concert', back_populates ='cities')
   songs = db.relationship('Song', backref = 'city', lazy = True)

# association object to hold the addition information for the many to many relationships
class Concert(db.Model):
   __tableame__ = 'concert'
   concert_id = db.Column(db.Integer, primary_key = True, nullable = False)
   city_id = db.Column(db.Integer, db.ForeignKey('city.city_id'))
   artist_id = db.Column(db.Integer, db.ForeignKey('artist.artist_id'))
   time = db.Column(db.DateTime, nullable = False)
   tickets = db.Column(db.String(500), nullable = False)
   venue = db.Column(db.String(500), nullable = False)
   cities = db.relationship('City', back_populates = 'concerts')    
   artists = db.relationship('Artist', back_populates = 'concerts')


# Creates the tables in the specified database using the models 
db.create_all()

# Created the basic API calls for each model 
manager.create_api(Artist, methods=['GET'], url_prefix=None)
manager.create_api(Album, methods=['GET'], url_prefix=None)
manager.create_api(Song, methods=['GET'], url_prefix=None)
manager.create_api(City, methods=['GET'], url_prefix=None)

# Create API calls for reduced info
manager.create_api(Artist, methods=['GET'], url_prefix="/grid",include_columns=['artist_id','name','gen_genre','genre','image'])
manager.create_api(Album, methods=['GET'], url_prefix="/grid",include_columns=['album_id','name','artwork','year','producer',
   'artist','artist.name','artist.artist_id', 'artist.genre'])
manager.create_api(Song, methods=['GET'], url_prefix="/grid",include_columns=['song_id','name',
   'artist','artist.artist_id','artist.name','artist.genre','artist.gen_genre',
   'album_id','album','album.artwork','album.name','album.year',
   'city','city.name','city.city_id'])
manager.create_api(City, methods=['GET'], url_prefix="/grid",include_columns=['city_id','name','state','image'])


if __name__ == '__main__':
   app.run(debug=True, host='0.0.0.0', port=80)