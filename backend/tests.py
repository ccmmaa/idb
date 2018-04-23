
from musixmatch import Musixmatch
import spotipy
from spotipy import oauth2
import json
import requests
from unittest import TestCase, main



cred = oauth2.SpotifyClientCredentials(client_id='6fdfc639b23a4f5aa33d52dbb1832d73', client_secret='f8b5055e9e89439a9b65897cd75e8477')
access_token = cred.get_access_token()

spotify = spotipy.Spotify(auth=access_token)


class MyUnitTests (TestCase):

    def test_song(self):
        song_id = '3nWzRkoCa44adZZ00li9sF'
        track = spotify.track(song_id)

        track_name = track['name']

        musixmatch = Musixmatch('a4eb641afe366d7ce6d2013779c11916')

        lyrics_res = musixmatch.matcher_lyrics_get(q_artist='Big Sean', q_track=track_name)['message']
        if lyrics_res['header']['status_code'] == 200:
            lyrics = lyrics_res['body']['lyrics']['lyrics_body']
        else:
            lyrics = 'Lyrics Not Available for This Song'

        cor_song_res = ['Go Legend (& Metro Boomin)',
                        "If young Metro don't trust you, I'm gon' shoot you\nDo you know where you're going to?\nDo you like the things that life is showing you?\nWhere are you going to? (straight)\nDo you know?\n\n[Chorus: Travis Scott & Big Sean]\nMe and my best friend, 7-Eleven (yeah)\nWe go legend, we go legend (yeah, yeah)\nWe go legend, we go legend (alright)\nWe go legend, we go legend, yeah\nMe and my best friend, 7-Eleven, yeah\nWe go legend (go), we go legend (go), yeah (yeah)\nWe go legend (go), we go legend (go legend)\nWe go legend, we go legend, yeah\nWith my best friend (alright), 7-Eleven (whoa)\nWe go legend, (yeah) we can go legend\nCodeine legend (yeah, yeah), microphone legend\nWe go legend, yeah\n\n\nIn my house, yeah, hear alarms\nRingin' through my house (through my house), got 'em goin'\nClimbing in and out (in and out)\nWhat you knowin'? Never run your mouth (never run your mouth)\n \n\nLook, bitch, this not a drill, this the real thing (whoa)\nI do what the fuck I feel, fuck your feelings, yeah\nMade my blueprints, so my life got no ceilings (I don't see 'em)\nI create the energy that they keep stealing, yeah\n...\n\n******* This Lyrics is NOT for Commercial use *******\n(1409617537910)"]

        self.assertEqual( [track_name, lyrics] , cor_song_res )

    def test_album(self):
        album_id = '39GpWKBd1t2qY4b9FWjS9J'
        album = spotify.album(album_id)

        album_name = album['name']
        album_art = album['images'][0]['url']
        genre = album['genres'] if len(album['genres']) > 0 else ['']
        release_date = album['release_date'][:4]
        label = album['label']

        cor_album_res = ['Double Or Nothing (& Metro Boomin)', 'https://i.scdn.co/image/47ae26c405a4725fd72190bb02955ba617622c1e', [''], '2017', 'Universal Music Group']

        self.assertEqual( [album_name, album_art, genre, release_date, label], cor_album_res)

    def test_artist(self):
        artist_id = '0c173mlxpT3dSFRgMO8XPh'
        artist = spotify.artist(artist_id)

        artist_name = artist['name']
        genres = artist['genres'] if len(artist['genres']) > 0 else ['']
        img_url = artist['images'][0]['url'] if len(artist['images']) > 0 else ''

        cor_artist_res = ['Big Sean',
                  ['detroit hip hop',
                   'hip hop',
                   'pop',
                   'pop rap',
                   'rap',
                   'southern hip hop',
                   'trap music'],'https://i.scdn.co/image/7af4c101861c482e6fdd9f33f73d037f136afe36']

        self.assertEqual([artist_name, genres, img_url], cor_artist_res )

if __name__ == '__main__':
    main()
