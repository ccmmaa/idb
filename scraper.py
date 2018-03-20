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
cities = ['Austin, Texas', 'Houston, Texas', 'Dallas, Texas', 'Atlanta, Georgia', 'Minneapolis, Minnesota', 'San Diego, California',
          'Los Angeles, California', 'Boston, Massachusetts', 'San Antonio, Texas', 'Denver, Colorado',
          'Jacksonville, Florida', 'Indianapolis, Indiana', 'Seattle, Washington', 'Columbus, Ohio',
          'Memphis, Tennessee', 'Philadelphia, Pennsylvania', 'Phoenix, Arizona', 'Miami, Florida',
          'Chicago, Illinois', 'Portland, Oregon', 'Charlotte, North Carolina', 'Oakland, California']

for city in cities:

    print(city)
    #gets event data for concerts for a certain city, spaces have to be replaced with %20
    e_res_city = requests.get(
        'http://api.eventful.com/rest/events/search?app_key=9Vr6nJfN7b7p9dJp&category=music&location=' + city.replace(
            ' ', '%20')).content
    # convert response to json format since data comes as xml
    e_res_json_city = (bf.data(fromstring(e_res_city)))['search']['events']
    events_data_city = ''
    # print(e_res_json_city)
    # goes through events and puts neccessary data into a string
    if e_res_json_city.get('event'):
        events_json_city = e_res_json_city['event']
        # print(events_json_city)
        for event in events_json_city:
            events_data_city += event['title']['$']
            events_data_city += '\t'
            events_data_city += event['url']['$']
            events_data_city += '\t'
            if event['description'].get('$'):
                events_data_city += event['description']['$']
            events_data_city += '\t'
            try:
                events_data_city += event['venue_name']['$']
            except:
                events_data_city += ''
            events_data_city += '\t'
            try:
                events_data_city += event['venue_address']['$']
            except:
                events_data_city += ''
            events_data_city += '\t'
            events_data_city += str(city)
            events_data_city += '\n'

    # print(events_data_city)

    # search for the cities playlist with Spotify API
    results = spotify.search('The Sound Of ' + city, type='playlist')
    playlist_id = results['playlists']['items'][0]['uri'].split(':')[-1]
    res = spotify.user_playlist('thesoundsofspotify', playlist_id=playlist_id)

    cities_artists = set()

    #Find all artists and songs in the playlist
    song_connections = ''
    for track in res['tracks']['items']:
        artists = track['track']['artists']
        for artist in artists:
            cities_artists.add(artist['name'])
        song_connections += track['track']['name']
        song_connections += '\t'

    cities_artists = list(cities_artists)
    # cities_artists.sort()
    city_artists = ''
    # only get top 8 artists of a city because then program gets too slow
    for a in cities_artists[:8]:
        city_artists += a
        city_artists += '\t'

    print('ADD City:' + city + '\n' + repr(song_connections) + '\n' + repr(city_artists) + '\n' + repr(events_data_city) + '\n\n')


    # only get top 8 artists of a city because then program gets too slow
    for artist in cities_artists[:8]:
        #search for artist and get their spotify id
        r = spotify.search(artist, type='artist')
        artist_id = r['artists']['items'][0]['uri'].split(':')[-1]
        cur_artist = spotify.artist(artist_id)

        name = cur_artist['name']

        #get events with the artists name in search
        e_res = requests.get('http://api.eventful.com/rest/events/search?app_key=9Vr6nJfN7b7p9dJp&category=music&keywords=' + name.replace(' ', '%20')).content
        e_res_json = (bf.data(fromstring(e_res)))
        events_data = ''
        events_json = e_res_json['search']['events']
        # doing the same thing as above here
        if events_json.get('event'):
            events_json = events_json['event']
            # print(events_json)
            for event in events_json:
                try:
                    if event['title'].get('$'):
                        events_data += event['title']['$']
                except:
                    events_data += 'N/A'
                events_data += '\t'
                try:
                    events_data += event['url']['$']
                except:
                    events_data += ''
                events_data += '\t'
                try:
                    if event['description'].get('$'):
                        events_data += event['description']['$']
                except:
                    events_data += ''
                events_data += '\t'
                try:
                    events_data += event['venue_name']['$']
                except:
                    events_data += ''
                events_data += '\t'
                try:
                    events_data += event['venue_address']['$']
                except:
                    events_data += ''
                events_data += '\t'
                events_data += city
                events_data += '\n'


        # use last_fm to get the bio of an artist
        last_fm_api = '728b78b68a19a955765dd280c899c1f3'
        last_fm_res = json.loads(requests.get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' +
                                   name.replace(' ', '+') + '&api_key=' + last_fm_api + '&format=json').content)
        bio = ''

        # some artists not present in last_fm so default to no bio available
        if last_fm_res.get('error'):
            if last_fm_res.get('error') != 6:
                bio = last_fm_res['artist']['bio']['content']
        bio = 'Bio Not Available' if len(bio) == 0 else bio
        # get info
        genres = cur_artist['genres'] if len(cur_artist['genres']) > 0 else ['']
        img_url = cur_artist['images'][0]['url'] if len(cur_artist['images']) > 0 else ''
        top_tracks = spotify.artist_top_tracks(artist_id)['tracks']
        related_artists = spotify.artist_related_artists(artist_id)['artists']
        albums = spotify.artist_albums(artist_id)['items']
        album_conn = ''

        for a in albums[:5]:
            album_conn += a['name']
            album_conn += '\t'

        top_track_str = ''
        for t in top_tracks:
            top_track_str += t['name']
            top_track_str += '\t'

        related_artists_str = ''
        for ra in related_artists:
            related_artists_str += ra['name']
            related_artists_str += '\t'

        print('ADD Artist: ' + name + '\n' + bio + '\n' + img_url + '\n' + album_conn + '\n' + events_data + '\n' + top_track_str + '\n' + genres[0] + '\n' + related_artists_str)

        # Choose 5 albums too prevent too much data slowing the program
        for album in albums[:5]:

            #getting the spotify id of an album
            album_id = album['uri'].split(':')[-1]
            cur_album = spotify.album(album_id)


            album_name = cur_album['name']
            artist_name = name

            album_songs = cur_album['tracks']['items']
            album_songs_str = ''
            for s in album_songs:
                album_songs_str += s['name']
                album_songs_str += '\t'

            #getting other data required for the model
            album_art = cur_album['images'][0]['url']
            genre = cur_album['genres'] if len(cur_album['genres']) > 0 else ['']
            print(genre)
            # sliced :4 to get year only
            release_date = cur_album['release_date'][:4]
            label = cur_album['label']

            print('ADD Album:' + album_name + '\n' + album_art + '\n' + album_songs_str + '\n' + artist_name + '\n' + genre[0] + '\n' + release_date + '\n' + label)


            for song in album_songs:
                track_id = song['uri'].split(':')[-1]

                track = spotify.track(track_id)
                # print track
                track_name = track['name']


                musixmatch_api = 'a4eb641afe366d7ce6d2013779c11916'
                m_res = json.loads(requests.get('http://api.musixmatch.com/ws/1.1/track.search?apikey=' + musixmatch_api + '&q_artist=' + artist_name.replace(' ', '%20') + '&q_track=' + track_name.replace(' ', '%20')).content)
                # try to read response from musixmatch to see if lyrics are retrieveable.
                try:
                    mm_tracklist = m_res['message']['body']['track_list']
                except:
                    mm_tracklist = []
                lyrics = 'Lyrics Not Available for This Song.'

                # See if lyrics are available for the song and info change lyrics variable
                if len(mm_tracklist) > 0:
                    mm_track = mm_tracklist[0]['track']
                    # print mm_track
                    if mm_track['has_lyrics'] == 1:
                        mm_track_id = mm_track['track_id']
                        print(mm_track_id)
                        mm_lyrics = json.loads(requests.get('https://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=' + musixmatch_api + '&format=jsonp&callback=callback&track_id=' + str(mm_track_id)).content[9:-2])
                        print(mm_lyrics)
                        lyrics = mm_lyrics['message']['body']['lyrics']['lyrics_body']

                # print(lyrics)
                song_artist = artist_name
                from_album = album_name
                embedded_link = 'https://open.spotify.com/embed?uri=' + song['uri']

                from_city = city

                print('ADD SONG: ' + track_name + '\n' + lyrics + '\n' + song_artist + '\n' + from_album + '\n' + from_city + '\n' + embedded_link)
                # break


            # break

        # break
