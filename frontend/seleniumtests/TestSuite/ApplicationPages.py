from selenium import webdriver
import time
import random

global browser

class Browser:
    def gotoMusepy(self):
        global browser
        browser = webdriver.Chrome()
        browser.get("http://localhost:3000/")

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

    def gotoHome(self):
        homelink = browser.find_element_by_xpath("//li/a[text() = 'Home']")
        homelink.click()

    def gotoSongs(self):
        songslink = browser.find_element_by_xpath("//li/a[text() = 'Songs']")
        songslink.click()

    def gotoArtists(self):
        artistslink = browser.find_element_by_xpath("//li/a[text() = 'Artists']")
        artistslink.click()

    def gotoAlbums(self):
        albumslink = browser.find_element_by_xpath("//li/a[text() = 'Albums']")
        albumslink.click()

    def gotoCities(self):
        citieslink = browser.find_element_by_xpath("//li/a[text() = 'Cities']")
        citieslink.click()

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
        countinstances = len(browser.find_elements_by_class_name("modelCard"))
        instance = browser.find_elements_by_xpath("//p/a[text() = 'View »']")
        instance.__getitem__(random.randint(0, countinstances-1)).click()

class ArtistsPage:
    def selectInstance(self):
        countinstances = len(browser.find_elements_by_class_name("modelCard"))
        instance = browser.find_elements_by_xpath("//p/a[text() = 'View »']")
        instance.__getitem__(random.randint(0, countinstances-1)).click()

class AlbumsPage:
    def selectInstance(self):
        countinstances = len(browser.find_elements_by_class_name("modelCard"))
        instance = browser.find_elements_by_xpath("//p/a[text() = 'View »']")
        instance.__getitem__(random.randint(0, countinstances-1)).click()

class CitiesPage:
    def selectInstance(self):
        countinstances = len(browser.find_elements_by_class_name("modelCard"))
        instance = browser.find_elements_by_xpath("//p/a[text() = 'View »']")
        instance.__getitem__(random.randint(0, countinstances-1)).click()

class SongInstancePage:
    def selectArtist(self):
        viewArtistBtn = browser.find_element_by_xpath("//p/a[text() = 'View this Artist »']")
        viewArtistBtn.click()

    def selectAlbum(self):
        viewAlbumBtn = browser.find_element_by_xpath("//p/a[text() = 'View this Album »']")
        viewAlbumBtn.click()

class ArtistInstancePage:
    def selectAlbum(self):
        countalbums = len(browser.find_elements_by_xpath("//div/div/img[@class = 'rounded-0']"))
        albums = browser.find_elements_by_xpath("//div/div/h4/a")
        albums.__getitem__(random.randint(0, countalbums-1)).click()

    def selectSong(self):
        countsongs = len(browser.find_elements_by_xpath("//p[text() = 'Popular Songs']/../ul/li/a"))
        songs = browser.find_elements_by_xpath("//p[text() = 'Popular Songs']/../ul/li/a")
        songs.__getitem__(random.randint(0, countsongs-1)).click()

    def selectCity(self):
        countcities = len(browser.find_elements_by_xpath("//p[text() = 'Upcoming Concerts']/../ul/li/a"))
        city = browser.find_elements_by_xpath("//p[text() = 'Upcoming Concerts']/../ul/li/a")
        city.__getitem__(random.randint(0, countcities-1)).click()

class AlbumInstancePage:
    def selectArtist(self):
        artist = browser.find_element_by_xpath("//p[@class = 'h3']/a")
        artist.click()

    def selectSong(self):
        countsongs = len(browser.find_elements_by_xpath("//p[text() = 'Song List']/../ul/li/a"))
        songs = browser.find_elements_by_xpath("//p[text() = 'Song List']/../ul/li/a")
        songs.__getitem__(random.randint(0, countsongs-1)).click()

class CityInstancePage:
    def selectSong(self):
        countsongs = len(browser.find_elements_by_xpath("//div[@id = 'playlist']/ul/li/a"))
        print(countsongs)
        songs = browser.find_elements_by_xpath("//div[@id = 'playlist']/ul/li/a")
        songs.__getitem__(random.randint(0, countsongs-1)).click()

    def selectArtist(self):
        countartists = len(browser.find_elements_by_xpath("//p[text() = 'Upcoming Concerts']/../ul/li/p/a"))
        artists = browser.find_elements_by_xpath("//p[text() = 'Upcoming Concerts']/../ul/li/p/a")
        artists.__getitem__(random.randint(0, countartists-1)).click()

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





