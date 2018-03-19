import flask
import flask_restless
from sqlalchemy.ext.declarative import declarative_base, declared_attr
from sqlalchemy.orm import sessionmaker, scoped_session
from sqlalchemy import *

app = flask.Flask(__name__)

# Create our SQLAlchemy DB engine
engine = create_engine('mysql://master:musepy.me@musepy.cmlur1dhu2fc.us-east-2.rds.amazonaws.com/musepy')
Session = sessionmaker(bind=engine, autocommit=False, autoflush=False)
s = scoped_session(Session)

Base = declarative_base()
Base.metadata.bind = engine

# Import all models to add them to Base.metadata
from models import Artist, Album, Song, City, Concert, Playlist

Base.metadata.create_all()

manager = flask_restless.APIManager(app, session=s)
# Register flask-restless blueprints to instantiate CRUD endpoints
from controllers import artist_api_blueprint, album_api_blueprint, song_api_blueprint, city_api_blueprint, concert_api_blueprint, playlist_api_blueprint 
app.register_blueprint(artist_api_blueprint)
app.register_blueprint(album_api_blueprint)
app.register_blueprint(song_api_blueprint)
app.register_blueprint(city_api_blueprint)
app.register_blueprint(concert_api_blueprint)
app.register_blueprint(playlist_api_blueprint)
