from database import app
from database.models import Artist, Album, Song, City, Concert, Playlist


artist_api_blueprint = manager.create_api_blueprint(Artist,
        methods=['GET', 'PATCH', 'POST', 'DELETE'])
album_api_blueprint = manager.create_api_blueprint(Album,
        methods=['GET', 'PATCH', 'POST', 'DELETE'])
song_api_blueprint = manager.create_api_blueprint(Song,
        methods=['GET', 'PATCH', 'POST', 'DELETE'])
city_api_blueprint = manager.create_api_blueprint(City,
        methods=['GET', 'PATCH', 'POST', 'DELETE'])
concert_api_blueprint = manager.create_api_blueprint(Concert,
        methods=['GET', 'PATCH', 'POST', 'DELETE'])
playlist_api_blueprint = manager.create_api_blueprint(Playlist,
        methods=['GET', 'PATCH', 'POST', 'DELETE'])