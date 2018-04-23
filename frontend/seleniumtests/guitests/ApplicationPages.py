from selenium import webdriver
import time
import random

global browser

class Browser:
    def gotoMusepy(self):
        global browser
        browser = webdriver.Chrome()
        browser.get("http://musepy.me/")

    def close(self):
        browser.close()

    def back(self):
        browser.back()

    def forward(self):
        browser.forward()

class Navigation:
    def isHomePage(self):
        if(browser.find_element_by_class_name("navbar").find_element_by_class_name("active").text == "Home"):
            return True
        print(browser.find_element_by_class_name("navbar").find_element_by_class_name("active").tag_name)

    def isSongsPage(self):
        if(browser.find_element_by_class_name("navbar").find_element_by_class_name("active").text == "Songs"):
            return True
        print(browser.find_element_by_class_name("navbar").find_element_by_class_name("active").tag_name)

    def isArtistsPage(self):
        if(browser.find_element_by_class_name("navbar").find_element_by_class_name("active").text == "Artists"):
            return True
        print(browser.find_element_by_class_name("navbar").find_element_by_class_name("active").tag_name)

    def isAlbumsPage(self):
        if(browser.find_element_by_class_name("navbar").find_element_by_class_name("active").text == "Albums"):
            return True
        print(browser.find_element_by_class_name("navbar").find_element_by_class_name("active").tag_name)

    def isCitiesPage(self):
        if(browser.find_element_by_class_name("navbar").find_element_by_class_name("active").text == "Cities"):
            return True
        print(browser.find_element_by_class_name("navbar").find_element_by_class_name("active").tag_name)

    def isAboutPage(self):
        if(browser.find_element_by_class_name("navbar").find_element_by_class_name("active").text == "About"):
            return True
        print(browser.find_element_by_class_name("navbar").find_element_by_class_name("active").tag_name)

    def isSearchResultsPage(self):
        if(browser.find_element_by_xpath("//h1[text() = 'Search']")):
            return True

    def gotoHome(self):
        homelink = browser.find_element_by_xpath("//li/a[text() = 'Home']")
        homelink.click()

    def gotoSongs(self):
        songslink = browser.find_element_by_xpath("//li/a[text() = 'Songs']")
        songslink.click()
        time.sleep(2)

    def gotoArtists(self):
        artistslink = browser.find_element_by_xpath("//li/a[text() = 'Artists']")
        artistslink.click()
        time.sleep(2)

    def gotoAlbums(self):
        albumslink = browser.find_element_by_xpath("//li/a[text() = 'Albums']")
        albumslink.click()
        time.sleep(2)

    def gotoCities(self):
        citieslink = browser.find_element_by_xpath("//li/a[text() = 'Cities']")
        citieslink.click()
        time.sleep(2)

    def gotoAbout(self):
        aboutlink = browser.find_element_by_xpath("//li/a[text() = 'About']")
        aboutlink.click()

    def isSongInstancePage(self):
        if browser.find_element_by_xpath("//h3[text() = 'Lyrics']"):
            return True

    def isArtistInstancePage(self):
        if browser.find_element_by_xpath("//h2[text() = 'Albums']"):
            return True

    def isAlbumInstancePage(self):
        if browser.find_element_by_xpath("//p[text() = 'Song List']"):
            return True

    def isCityInstancePage(self):
        if browser.find_element_by_xpath("//*[contains(text(), 'The Sound of')]"):
            return True

    def hasSearchFunction(self):
        if browser.find_element_by_xpath("//button[text() = 'Search']"):
            return True
    def inputSearchQuery(self, str):
        inputQuery = browser.find_element_by_class_name("form-control")
        inputQuery.send_keys(str)
        searchBtn = browser.find_element_by_xpath("//button[text() = 'Search']")
        searchBtn.click()
        time.sleep(2)


class HomePage:

    class Carousel:
        def clickCarouselBtn(self):
            activeslide = browser.find_element_by_class_name("carousel-button")
            activeslide.click()

        def clickCarouselLeftBtn(self):
            leftbtn = browser.find_element_by_class_name("carousel-control-prev")
            leftbtn.click()
            time.sleep(2)

        def clickCarouselRightBtn(self):
            rightbtn = browser.find_element_by_class_name("carousel-control-next")
            rightbtn.click()
            time.sleep(2)

    class Marketing:
        def viewSongs(self):
            viewSongsBtn = browser.find_element_by_xpath("//p/a[text() = 'View songs »']")
            viewSongsBtn.click()

        def viewArtists(self):
            viewArtistsBtn = browser.find_element_by_xpath("//p/a[text() = 'View artists »']")
            viewArtistsBtn.click()

        def viewAlbums(self):
            viewAlbumsBtn = browser.find_element_by_xpath("//p/a[text() = 'View albums »']")
            viewAlbumsBtn.click()

        def viewCities(self):
            viewCitiesBtn = browser.find_element_by_xpath("//p/a[text() = 'View cities »']")
            viewCitiesBtn.click()

class SongsPage:
    def selectInstance(self):
        time.sleep(2)
        countinstances = len(browser.find_elements_by_class_name("modelCard"))
        instance = browser.find_elements_by_xpath("//p/a[text() = 'View »']")
        instance.__getitem__(random.randint(0, countinstances-1)).click()

    def selectSortBy(self, str):
        time.sleep(2)
        sortDropdown = browser.find_element_by_class_name("sort-drop-down").click()
        sortType = browser.find_element_by_xpath("//option[text() = '" + str + "']")
        sortType.click()
        time.sleep(2)

    def selectFilter(self):
        time.sleep(2)
        filter = browser.find_element_by_xpath("//input[@type = 'checkbox']")
        filter.click()
        time.sleep(1)

    def selectPagination(self, str):
        time.sleep(2)
        page = browser.find_element_by_xpath("//p/span/span[text() = '" + str + "']")
        page.click()
        time.sleep(1)

class ArtistsPage:
    def selectInstance(self):
        time.sleep(2)
        countinstances = len(browser.find_elements_by_class_name("modelCard"))
        instance = browser.find_elements_by_xpath("//p/a[text() = 'View »']")
        instance.__getitem__(random.randint(0, countinstances-1)).click()

    def selectSortBy(self, str):
        time.sleep(2)
        sortDropdown = browser.find_element_by_class_name("sort-drop-down").click()
        sortType = browser.find_element_by_xpath("//option[text() = '" + str + "']")
        sortType.click()
        time.sleep(2)

    def selectFilter(self):
        time.sleep(2)
        filter = browser.find_element_by_xpath("//input[@type = 'checkbox']")
        filter.click()
        time.sleep(2)

    def selectPagination(self, str):
        time.sleep(2)
        page = browser.find_element_by_xpath("//p/span/span[text() = '" + str + "']")
        page.click()
        time.sleep(1)

class AlbumsPage:
    def selectInstance(self):
        time.sleep(2)
        countinstances = len(browser.find_elements_by_class_name("modelCard"))
        instance = browser.find_elements_by_xpath("//p/a[text() = 'View »']")
        instance.__getitem__(random.randint(0, countinstances-1)).click()

    def selectSortBy(self, str):
        time.sleep(2)
        sortDropdown = browser.find_element_by_class_name("sort-drop-down").click()
        sortType = browser.find_element_by_xpath("//option[text() = '" + str + "']")
        sortType.click()
        time.sleep(2)

    def selectFilter(self):
        time.sleep(2)
        filter = browser.find_element_by_xpath("//input[@type = 'checkbox']")
        filter.click()
        time.sleep(2)

    def selectPagination(self, str):
        time.sleep(2)
        page = browser.find_element_by_xpath("//p/span/span[text() = '" + str + "']")
        page.click()
        time.sleep(1)

class CitiesPage:
    def selectInstance(self):
        time.sleep(2)
        countinstances = len(browser.find_elements_by_class_name("modelCard"))
        instance = browser.find_elements_by_xpath("//p/a[text() = 'View »']")
        instance.__getitem__(random.randint(0, countinstances-1)).click()

    def selectSortBy(self, str):
        time.sleep(2)
        sortDropdown = browser.find_element_by_class_name("sort-drop-down").click()
        sortType = browser.find_element_by_xpath("//option[text() = '" + str + "']")
        sortType.click()
        time.sleep(2)

    def selectFilter(self):
        time.sleep(2)
        filter = browser.find_element_by_xpath("//input[@type = 'checkbox']")
        filter.click()
        time.sleep(2)

    def selectPagination(self, str):
        time.sleep(2)
        page = browser.find_element_by_xpath("//p/span/span[text() = '" + str + "']")
        page.click()
        time.sleep(1)

class SongInstancePage:
    def selectArtist(self):
        time.sleep(2)
        viewArtistBtn = browser.find_element_by_xpath("//p/a[text() = 'View this Artist »']")
        viewArtistBtn.click()

    def selectAlbum(self):
        time.sleep(2)
        viewAlbumBtn = browser.find_element_by_xpath("//p/a[text() = 'View this Album »']")
        viewAlbumBtn.click()

class ArtistInstancePage:
    def selectAlbum(self):
        time.sleep(2)
        countalbums = len(browser.find_elements_by_xpath("//div/div/img[@class = 'rounded-0']"))
        albums = browser.find_elements_by_xpath("//div/div/h4/a")
        albums.__getitem__(random.randint(0, countalbums-1)).click()

    def selectSong(self):
        time.sleep(2)
        countsongs = len(browser.find_elements_by_xpath("//p[text() = 'Popular Songs']/../ul/li/a"))
        songs = browser.find_elements_by_xpath("//p[text() = 'Popular Songs']/../ul/li/a")
        songs.__getitem__(random.randint(0, countsongs-1)).click()

    def selectCity(self):
        time.sleep(2)
        countcities = len(browser.find_elements_by_xpath("//p[text() = 'Upcoming Concerts']/../ul/li/a"))
        city = browser.find_elements_by_xpath("//p[text() = 'Upcoming Concerts']/../ul/li/a")
        city.__getitem__(random.randint(0, countcities-1)).click()

class AlbumInstancePage:
    def selectArtist(self):
        time.sleep(2)
        artist = browser.find_element_by_xpath("//p[@class = 'h3']/a")
        artist.click()

    def selectSong(self):
        time.sleep(2)
        countsongs = len(browser.find_elements_by_xpath("//p[text() = 'Song List']/../ul/li/a"))
        songs = browser.find_elements_by_xpath("//p[text() = 'Song List']/../ul/li/a")
        songs.__getitem__(random.randint(0, countsongs-1)).click()

class CityInstancePage:
    def selectSong(self):
        time.sleep(2)
        countsongs = len(browser.find_elements_by_xpath("//div[@id = 'playlist']/ul/li/a"))
        print(countsongs)
        songs = browser.find_elements_by_xpath("//div[@id = 'playlist']/ul/li/a")
        songs.__getitem__(random.randint(0, countsongs-1)).click()

    def selectArtist(self):
        time.sleep(2)
        countartists = len(browser.find_elements_by_xpath("//p[text() = 'Upcoming Concerts']/../ul/li/p/a"))
        artists = browser.find_elements_by_xpath("//p[text() = 'Upcoming Concerts']/../ul/li/p/a")
        artists.__getitem__(random.randint(0, countartists-1)).click()

class SearchResultsPage:
    def selectAlbumInstance(self):
        time.sleep(2)
        albumResults = browser.find_elements_by_xpath("//h3[text() = 'Album Results']/../../*[@class = 'card-shadows-orange model-cards modelCard']")
        albumResults.__getitem__(0).find_element_by_xpath("//h2/a").click()

    def selectArtistInstance(self):
        time.sleep(2)
        artistResults = browser.find_elements_by_xpath("//h3[text() = 'Artist Results']/../../*[@class = 'card-shadows-orange model-cards modelCard']")
        artistResults.__getitem__(0).find_element_by_xpath("//h2/a").click()

    def selectSongInstance(self):
        time.sleep(2)
        songResults = browser.find_elements_by_xpath("//h3[text() = 'Song Results']/../../*[@class = 'card-shadows-orange model-cards modelCard']")
        songResults.__getitem__(0).find_element_by_xpath("//h2/a").click()

    def selectCityInstance(self):
        time.sleep(2)
        cityResults = browser.find_elements_by_xpath("//h3[text() = 'City Results']/../../*[@class = 'card-shadows-orange model-cards modelCard']")
        cityResults.__getitem__(0).find_element_by_xpath("//h2/a").click()

class Footer:
    def gotoGitHubRepo(self):
        link = browser.find_element_by_xpath("//a[text() = ' GitHub Repository ']")
        link.click()

    def gotoGitBook(self):
        link = browser.find_element_by_xpath("//a[text() = ' GitBook Report ']")
        link.click()

    def isGitHubRepo(self):
        if browser.find_elements_by_class_name("header-logo-invertocat"):
            return True

    def isGitBook(self):
        if browser.find_elements_by_class_name("book"):
            return True
