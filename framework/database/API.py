from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://master:musepy.me@musepy.cmlur1dhu2fc.us-east-2.rds.amazonaws.com/test'
db = SQLAlchemy(app)
ma = Marshmallow(app)



class Artist(db.Model):
    # Don't really have to set tablename because default is class name converted to lowercase
    __tableame__ = 'artist'
    artist_id = db.Column("id",db.Integer, primary_key = True, nullable = False)
    name = db.Column(db.String(500), nullable = False)  
    bio = db.Column(db.String(5000),nullable = False)
    image = db.Column(db.String(500),nullable = False)
    genre = db.Column(db.String(500),nullable = False)
    # songs = db.relationship('Song', backref = 'artist', lazy = True)
    # albums = db.relationship('Album', backref = 'artist', lazy = True)
    # concerts = db.relationship('concerts', back_populates ='artists')

    def __init__(self, name, bio, image, genre):#, songs, albums, concerts):
        self.name = name
        self.bio = bio
        self.image = image
        self.genre = genre
        # self.songs = songs
        # self.albums = albums
        # self.concerts = concerts

class ArtistSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ('name', 'bio', 'image', 'genre')#, 'songs', 'albums', 'concerts')

artist_schema = ArtistSchema()
artists_schema = ArtistSchema(many=True)

db.create_all()

# class Album(db.Model):
#     __tableame__ = 'album' 
#     id = db.Column('id', db.Integer, primary_key = True, nullable = False)
#     artwork = db.Column(db.String(500), nullable = False)
#     genre = db.Column(db.String(500), nullable = False)
#     year = db.Column(db.String(4), nullable = False)
#     producer = db.Column(db.String(500), nullable = False)
#     artist_id = db.Column(db.Integer, db.ForeignKey('artist.id'), nullable = False)
#     songs = db.relationship('Song', backref = 'album', lazy = True)

#     def __init__(self, artwork, genre, year, producer, artist_id, songs):
#         self.artwork = artwork
#         self.genre = genre
#         self.year = year
#         self.producer = producer
#         self.artist_id = artist_id
#         self.songs = songs

# class ALbumSchema(ma.Schema):
#     class Meta:
#         # Fields to expose
#         fields = ('artwork', 'genre', 'year', 'producer', 'artist_id', 'songs')

# class Song(db.Model):
#     __tableame__ = 'song'
#     id = db.Column('id', db.Integer, primary_key = True, nullable = False)
#     lyrics = db.Column(db.String(5000), nullable = False)
#     link = db.Column(db.String(500), nullable = False) #link to buy
#     preview = db.Column(db.String(500), nullable = False) #embed info 
#     artist_id = db.Column(db.Integer, db.ForeignKey('artist.id'), nullable = False)
#     album_id = db.Column(db.Integer, db.ForeignKey('album.id'), nullable = False) 
#     concerts = db.relationship('playlist', back_populates ='songs')

#     def __init__(self, lyrics, link, preview, artist_id, album_id, concerts):
#         self.lyrics = lyrics
#         self.link = link
#         self.preview = preview
#         self.artist_id = artist_id
#         self.album_id = album_id
#         self.concerts = concerts

# class SongSchema(ma.Schema):
#     class Meta:
#         # Fields to expose
#         fields = ('lyrics', 'link', 'preview', 'artist_id', 'album_id', 'concerts')

# class City(db.Model):
#     __tableame__ = 'city'
#     id = db.Column('id', db.Integer, primary_key = True, nullable = False)
#     name = db.Column(db.String(500), nullable = False)    
#     map = db.Column(db.String(5000), nullable = False)   #embed info
#     image = db.Column(db.String(500), nullable = False)
#     concerts = db.relationship('concerts', back_populates ='cities')
#     playlist = db.relationship('playlist', back_populates ='cities')

#     def __init__(self, name, map, image, concerts, playlist):
#         self.name = name
#         self.map = map
#         self.image = image
#         self.concerts = concerts
#         self.playlist = playlist

# class CitySchema(ma.Schema):
#     class Meta:
#         # Fields to expose
#         fields = ('name', 'map', 'image', 'concerts', 'playlist')

# # association objects to hold the addition information for the many to many relationships
# class Concert(db.Model):
#     __tableame__ = 'concert'
#     city_id = db.Column(db.Integer, db.ForeignKey('city.id'), primary_key = True)
#     artist_id = db.Column(db.Integer, db.ForeignKey('artist.id'), primary_key = True)
#     time = db.Column(db.DateTime, nullable = False)
#     venue = db.Column(db.String(500), nullable = False)
#     cities = db.relationship('cities', back_populates = 'artists')    
#     artists = db.relationship('artists', back_populates = 'cities')

#     def __init__(self, city_id, artist_id, time, venue, cities, artists):
#         self.city_id = city_id
#         self.artist_id = artist_id
#         self.time = time
#         self.venue = venue
#         self.cities = cities
#         self.artists = artists

# class ConcertSchema(ma.Schema):
#     class Meta:
#         # Fields to expose
#         fields = ('city_id', 'artist_id', 'time', 'venue', 'cities', 'artists')

# class Playlist(db.Model):
#     __tableame__ = 'playlist'
#     city_id = db.Column(db.Integer, db.ForeignKey('city.id'), primary_key = True)
#     song_id = db.Column(db.Integer, db.ForeignKey('song.id'), primary_key = True)
#     link = db.Column(db.String(500), nullable = False)
#     cities = db.relationship('cities', back_populates = 'songs')    
#     songs = db.relationship('songs', back_populates = 'cities')

#     def __init__(self, city_id, song_id, link, cities, songs):
#         self.city_id = city_id
#         self.song_id = song_id
#         self.link = link
#         self.cities = cities
#         self.songs = songs

# class PlaylistSchema(ma.Schema):
#     class Meta:
#         # Fields to expose
#         fields = ('city_id', 'song_id', 'link', 'cities', 'songs')














# endpoint to create new artist
@app.route("/artist", methods=["POST"])
def add_artist():
    # 'bio', 'image', 'genre', 'songs', 'albums', 'concerts'
    name = request.json['name']
    bio = request.json['bio']
    image = request.json['image']
    genre = request.json['genre']
    # songs = request.json['songs']
    # albums = request.json['albums']
    # concerts = request.json['concerts']
    
    new_artist = Artist(name, bio, image, genre)#, songs, albums, concerts)

    db.session.add(new_artist)
    db.session.commit()

    return artist_schema.jsonify(new_artist)



    # return jsonify(name=new_artist.name)


# endpoint to show all users
@app.route("/artist", methods=["GET"])
def get_artist():
    all_artists = Artist.query.all()
    result = artists_schema.dump(all_artists)
    return jsonify(result.data)


# endpoint to get user detail by id
@app.route("/artist/<id>", methods=["GET"])
def artist_detail(id):
    artist = Artist.query.get(id)

    return artist_schema.jsonify(artist)


# endpoint to update user
@app.route("/artist/<id>", methods=["PUT"])
def artist_update(id):
    artist = Artist.query.get(id)
    name = request.json['name']
    bio = request.json['bio']
    image = request.json['image']
    genre = request.json['genre']
    # songs = request.json['songs']
    # albums = request.json['albums']
    # concerts = request.json['concerts']

    artist.name = name
    artist.bio = bio
    artist.image = image
    artist.genre = genre
    # artist.songs = songs
    # artist.albums = albums
    # artist.concerts = concerts

    db.session.commit()
    return artist_schema.jsonify(artist)


# endpoint to delete user
@app.route("/artist/<id>", methods=["DELETE"])
def artist_delete(id):
    artist = Artist.query.get(id)
    db.session.delete(artist)
    db.session.commit()

    return artist_schema.jsonify(artist)


if __name__ == '__main__':
    app.run(debug=True)








        
