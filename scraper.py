import spotipy
from spotipy import oauth2
import requests
import json
from xmljson import badgerfish as bf
from xml.etree.ElementTree import fromstring

#creating access token for spotify
cred = oauth2.SpotifyClientCredentials(client_id='6fdfc639b23a4f5aa33d52dbb1832d73', client_secret='f8b5055e9e89439a9b65897cd75e8477')
access_token = cred.get_access_token()

spotify = spotipy.Spotify(auth=access_token)

#hardcoded list of cities we are using
cities = ['Austin']

for city in cities:

    #TODO GET EVENTS

    results = spotify.search('The Sound Of ' + city, type='playlist')
    playlist_id = results['playlists']['items'][0]['uri'].split(':')[-1]
    res = spotify.user_playlist('thesoundsofspotify', playlist_id=playlist_id)

    cities_artists = set()

    for track in res['tracks']['items']:
        artists = track['track']['artists']
        for artist in artists:
            cities_artists.add(artist['name'])

    # print cities_artists

    for artist in cities_artists:
        r = spotify.search(artist, type='artist')
        artist_id = r['artists']['items'][0]['uri'].split(':')[-1]
        cur_artist = spotify.artist(artist_id)

        name = cur_artist['name']

        e_res = requests.get('http://api.eventful.com/rest/events/search?app_key=9Vr6nJfN7b7p9dJp&category=music&keywords=' + name.replace(' ', '%20')).content
        e_res_json = (bf.data(fromstring(e_res)))
        events_data = ''
        print e_res_json['search']['events']['event']
        break

        last_fm_api = '728b78b68a19a955765dd280c899c1f3'
        last_fm_res = json.loads(requests.get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' +
                                   name.replace(' ', '+') + '&api_key=' + last_fm_api + '&format=json').content)

        bio = last_fm_res['artist']['bio']['content']
        bio = 'Bio Not Available' if len(bio) == 0 else bio
        genres = cur_artist['genres']
        img_url = cur_artist['images'][0]['url']
        top_tracks = spotify.artist_top_tracks(artist_id)['tracks']
        related_artists = spotify.artist_related_artists(artist_id)['artists']
        albums = spotify.artist_albums(artist_id)['items']

        for album in albums:
            album_id = album['uri'].split(':')[-1]
            cur_album = spotify.album(album_id)

            print cur_album

            album_name = cur_album['name']
            artist_name = name

            album_songs = cur_album['tracks']['items']
            album_art = cur_album['images'][0]['url']
            genre = cur_album['genres']
            release_date = cur_album['release_date']
            label = cur_album['label']

            for song in album_songs:
                track_id = song['uri'].split(':')[-1]

                track = spotify.track(track_id)
                # print track
                track_name = track['name']


                musixmatch_api = 'a4eb641afe366d7ce6d2013779c11916'
                m_res = json.loads(requests.get('http://api.musixmatch.com/ws/1.1/track.search?apikey=' + musixmatch_api + '&q_artist=' + artist_name.replace(' ', '%20') + '&q_track=' + track_name.replace(' ', '%20')).content)
                mm_tracklist = m_res['message']['body']['track_list']
                lyrics = 'Lyrics Not Available for This Song.'

                if len(mm_tracklist) > 0:
                    mm_track = mm_tracklist[0]['track']
                    # print mm_track
                    if mm_track['has_lyrics'] == 1:
                        mm_track_id = mm_track['track_id']
                        mm_lyrics = json.loads(requests.get('https://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=' + musixmatch_api + '&format=jsonp&callback=callback&track_id=' + str(mm_track_id)).content[9:-2])
                        lyrics = mm_lyrics['message']['body']['lyrics']['lyrics_body']

                print lyrics
                song_artist = artist_name
                from_album = album_name
                embedded_link = 'https://open.spotify.com/embed?uri=' + song['uri']

                from_city = city


            break

        break
