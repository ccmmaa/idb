from TestSuite.ApplicationPages import *
import unittest

class GuiTests(unittest.TestCase):


    def test_loadWebApp(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Browser().close()

    def test_navigateToSongs(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Navigation().gotoSongs()
        self.assertTrue(Navigation().isSongsPage())
        Browser().close()

    def test_navigateToArtists(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Navigation().gotoArtists()
        self.assertTrue(Navigation().isArtistsPage())
        Browser().close()

    def test_navigateToAlbums(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Navigation().gotoAlbums()
        self.assertTrue(Navigation().isAlbumsPage())
        Browser().close()

    def test_navigateToCities(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Navigation().gotoCities()
        self.assertTrue(Navigation().isCitiesPage())
        Browser().close()

    def test_navigateToAbout(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Navigation().gotoAbout()
        self.assertTrue(Navigation().isAboutPage())
        Browser().close()

    def test_homePageMarketingNavigation(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        HomePage().Marketing().viewSongs()
        self.assertTrue(Navigation().isSongsPage())
        Navigation().gotoHome()
        self.assertTrue(Navigation().isHomePage())
        HomePage().Marketing().viewArtists()
        self.assertTrue(Navigation().isArtistsPage())
        Navigation().gotoHome()
        self.assertTrue(Navigation().isHomePage())
        HomePage().Marketing().viewAlbums()
        self.assertTrue(Navigation().isAlbumsPage())
        Navigation().gotoHome()
        self.assertTrue(Navigation().isHomePage())
        HomePage().Marketing().viewCities()
        self.assertTrue(Navigation().isCitiesPage())
        Browser().close()

    def test_selectSongInstance(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Navigation().gotoSongs()
        self.assertTrue(Navigation().isSongsPage())
        SongsPage().selectInstance()
        self.assertTrue(Navigation().isSongInstancePage())
        Browser().close()

    def test_selectArtistInstance(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Navigation().gotoArtists()
        self.assertTrue(Navigation().isArtistsPage())
        ArtistsPage().selectInstance()
        self.assertTrue(Navigation().isArtistInstancePage())
        Browser().close()

    def test_selectAlbumInstance(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Navigation().gotoAlbums()
        self.assertTrue(Navigation().isAlbumsPage())
        AlbumsPage().selectInstance()
        self.assertTrue(Navigation().isAlbumInstancePage())
        Browser().close()

    def test_selectCityInstance(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Navigation().gotoCities()
        self.assertTrue(Navigation().isCitiesPage())
        CitiesPage().selectInstance()
        self.assertTrue(Navigation().isCityInstancePage())
        Browser().close()

    def test_songInstanceLinkArtist(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Navigation().gotoSongs()
        self.assertTrue(Navigation().isSongsPage())
        SongsPage().selectInstance()
        self.assertTrue(Navigation().isSongInstancePage())
        SongInstancePage().selectArtist()
        self.assertTrue(Navigation().isArtistInstancePage())
        Browser().close()

    def test_songInstanceLinkAlbum(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Navigation().gotoSongs()
        self.assertTrue(Navigation().isSongsPage())
        SongsPage().selectInstance()
        self.assertTrue(Navigation().isSongInstancePage())
        SongInstancePage().selectAlbum()
        self.assertTrue(Navigation().isAlbumInstancePage())
        Browser().close()

    def test_artistInstanceLinkAlbum(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Navigation().gotoArtists()
        self.assertTrue(Navigation().isArtistsPage())
        ArtistsPage().selectInstance()
        self.assertTrue(Navigation().isArtistInstancePage())
        ArtistInstancePage().selectAlbum()
        self.assertTrue(Navigation().isAlbumInstancePage())
        Browser().close()

    def test_artistInstanceLinkSong(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Navigation().gotoArtists()
        self.assertTrue(Navigation().isArtistsPage())
        ArtistsPage().selectInstance()
        self.assertTrue(Navigation().isArtistInstancePage())
        ArtistInstancePage().selectSong()
        self.assertTrue(Navigation().isSongInstancePage())
        Browser().close()

    def test_footerLinkGitHub(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Footer().gotoGitHubRepo()
        self.assertTrue(Footer().isGitHubRepo())
        Browser().close()

    def test_footerLinkGitBook(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Footer().gotoGitBook()
        self.assertTrue(Footer().isGitBook())
        Browser().close()

    def test_searchAlbum(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        self.assertTrue(Navigation().hasSearchFunction())
        Navigation().inputSearchQuery("hi")
        self.assertTrue(Navigation().isSearchResultsPage())
        SearchResultsPage().selectAlbumInstance()
        self.assertTrue(Navigation().isAlbumInstancePage())
        Browser().close()

    def test_searchArtist(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        self.assertTrue(Navigation().hasSearchFunction())
        Navigation().inputSearchQuery("robert")
        self.assertTrue(Navigation().isSearchResultsPage())
        SearchResultsPage().selectArtistInstance()
        self.assertTrue(Navigation().isArtistInstancePage())
        Browser().close()

    def test_searchSong(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        self.assertTrue(Navigation().hasSearchFunction())
        Navigation().inputSearchQuery("hello")
        self.assertTrue(Navigation().isSearchResultsPage())
        SearchResultsPage().selectSongInstance()
        self.assertTrue(Navigation().isSongInstancePage())
        Browser().close()

    def test_searchCity(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        self.assertTrue(Navigation().hasSearchFunction())
        Navigation().inputSearchQuery("seattle")
        self.assertTrue(Navigation().isSearchResultsPage())
        SearchResultsPage().selectCityInstance()
        self.assertTrue(Navigation().isCityInstancePage())
        Browser().close()

    def test_sortArtistPage(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Navigation().gotoArtists()
        self.assertTrue(Navigation().isArtistsPage())
        ArtistsPage().selectSortBy("Name")
        self.assertTrue(Navigation().isArtistsPage())
        Browser().close()

    def test_sortAlbumPage(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Navigation().gotoAlbums()
        self.assertTrue(Navigation().isAlbumsPage())
        AlbumsPage().selectSortBy("Album Name")
        self.assertTrue(Navigation().isAlbumsPage())
        Browser().close()

    def test_sortSongPage(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Navigation().gotoSongs()
        self.assertTrue(Navigation().isSongsPage())
        SongsPage().selectSortBy("Title")
        self.assertTrue(Navigation().isSongsPage())
        Browser().close()

    def test_sortCityPage(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Navigation().gotoCities()
        self.assertTrue(Navigation().isCitiesPage())
        CitiesPage().selectSortBy("City Name")
        self.assertTrue(Navigation().isCitiesPage())
        Browser().close()


    def test_filterArtistPage(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Navigation().gotoArtists()
        self.assertTrue(Navigation().isArtistsPage())
        ArtistsPage().selectFilter()
        self.assertTrue(Navigation().isArtistsPage())
        Browser().close()

    def test_filterAlbumPage(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Navigation().gotoAlbums()
        self.assertTrue(Navigation().isAlbumsPage())
        AlbumsPage().selectFilter()
        self.assertTrue(Navigation().isAlbumsPage())
        Browser().close()

    def test_filterSongPage(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Navigation().gotoSongs()
        self.assertTrue(Navigation().isSongsPage())
        SongsPage().selectFilter()
        self.assertTrue(Navigation().isSongsPage())
        Browser().close()

    def test_filterCityPage(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Navigation().gotoCities()
        self.assertTrue(Navigation().isCitiesPage())
        CitiesPage().selectFilter()
        self.assertTrue(Navigation().isCitiesPage())
        Browser().close()

    def test_filterAndSortArtistPage(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Navigation().gotoArtists()
        self.assertTrue(Navigation().isArtistsPage())
        ArtistsPage().selectFilter()
        self.assertTrue(Navigation().isArtistsPage())
        ArtistsPage().selectSortBy("Name")
        self.assertTrue(Navigation().isArtistsPage())
        Browser().close()

    def test_filterAndSortAlbumPage(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Navigation().gotoAlbums()
        self.assertTrue(Navigation().isAlbumsPage())
        AlbumsPage().selectFilter()
        self.assertTrue(Navigation().isAlbumsPage())
        AlbumsPage().selectSortBy("Album Name")
        self.assertTrue(Navigation().isAlbumsPage())
        Browser().close()

    def test_filterSongPage(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Navigation().gotoSongs()
        self.assertTrue(Navigation().isSongsPage())
        SongsPage().selectFilter()
        self.assertTrue(Navigation().isSongsPage())
        SongsPage().selectSortBy("Title")
        self.assertTrue(Navigation().isSongsPage())
        Browser().close()

    def test_filterCityPage(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Navigation().gotoCities()
        self.assertTrue(Navigation().isCitiesPage())
        CitiesPage().selectFilter()
        self.assertTrue(Navigation().isCitiesPage())
        CitiesPage().selectSortBy("City Name")
        self.assertTrue(Navigation().isCitiesPage())
        Browser().close()
    

    def test_paginationArtistPage(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Navigation().gotoArtists()
        self.assertTrue(Navigation().isArtistsPage())
        ArtistsPage().selectPagination("2")
        self.assertTrue(Navigation().isArtistsPage())
        ArtistsPage().selectPagination("<< First")
        self.assertTrue(Navigation().isArtistsPage())
        ArtistsPage().selectPagination("Next >")
        self.assertTrue(Navigation().isArtistsPage())
        ArtistsPage().selectPagination("Last >>")
        self.assertTrue(Navigation().isArtistsPage())
        ArtistsPage().selectPagination("< Previous")
        self.assertTrue(Navigation().isArtistsPage())
        Browser().close()

    def test_paginationAlbumPage(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Navigation().gotoAlbums()
        self.assertTrue(Navigation().isAlbumsPage())
        AlbumsPage().selectPagination("2")
        self.assertTrue(Navigation().isAlbumsPage())
        AlbumsPage().selectPagination("<< First")
        self.assertTrue(Navigation().isAlbumsPage())
        AlbumsPage().selectPagination("Next >")
        self.assertTrue(Navigation().isAlbumsPage())
        AlbumsPage().selectPagination("Last >>")
        self.assertTrue(Navigation().isAlbumsPage())
        AlbumsPage().selectPagination("< Previous")
        self.assertTrue(Navigation().isAlbumsPage())
        Browser().close()

    def test_paginationSongPage(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Navigation().gotoSongs()
        self.assertTrue(Navigation().isSongsPage())
        SongsPage().selectPagination("2")
        self.assertTrue(Navigation().isSongsPage())
        SongsPage().selectPagination("<< First")
        self.assertTrue(Navigation().isSongsPage())
        SongsPage().selectPagination("Next >")
        self.assertTrue(Navigation().isSongsPage())
        SongsPage().selectPagination("Last >>")
        self.assertTrue(Navigation().isSongsPage())
        SongsPage().selectPagination("< Previous")
        self.assertTrue(Navigation().isSongsPage())
        Browser().close()

    def test_paginationCityPage(self):
        Browser().gotoMusepy()
        self.assertTrue(Navigation().isHomePage())
        Navigation().gotoCities()
        self.assertTrue(Navigation().isCitiesPage())
        CitiesPage().selectPagination("2")
        self.assertTrue(Navigation().isCitiesPage())
        CitiesPage().selectPagination("<< First")
        self.assertTrue(Navigation().isCitiesPage())
        CitiesPage().selectPagination("Next >")
        self.assertTrue(Navigation().isCitiesPage())
        CitiesPage().selectPagination("Last >>")
        self.assertTrue(Navigation().isCitiesPage())
        CitiesPage().selectPagination("< Previous")
        self.assertTrue(Navigation().isCitiesPage())
        Browser().close()

if __name__ == '__main__':
    unittest.main()
