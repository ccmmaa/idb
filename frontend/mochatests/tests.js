import 'jsdom-global/register';
import React from 'react'
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
{/*import Index from '../src/Home/Index';*/}
import Header from '../src/HeaderAndFooter/Navigation';
import Footer from '../src/HeaderAndFooter/Footer';
import Songs from '../src/Songs/Songs';
import Artists from '../src/Artists/Artists';
import Albums from '../src/Albums/Albums';
import Cities from '../src/Cities/Cities';
import About from '../src/About/About';
import SongInstance from '../src/Songs/SongInstance';
import ArtistInstance from '../src/Artists/ArtistInstance';
import AlbumInstance from '../src/Albums/AlbumInstance';
import CityInstance from '../src/Cities/CityInstance';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("MusePy unit tests", function() {
  {/*it("should create Index object", function() {
    const wrapper = mount(<Index />);
    expect(Index.prototype).to.not.be.null;
  });*/}
  it("should create Header object", function() {
    const wrapper = mount(<Header />);
    expect(Header.prototype).to.not.be.null;
  });
  it("should create Footer object", function() {
    const wrapper = mount(<Footer />);
    expect(Footer.prototype).to.not.be.null;
  });
  it("should create Songs object", function() {
    const wrapper = mount(<Songs />);
    expect(Songs.prototype).to.not.be.null;
  });
  it("should create Artists object", function() {
    const wrapper = mount(<Artists />);
    expect(Artists.prototype).to.not.be.null;
  });
  it("should create Albums object", function() {
    const wrapper = mount(<Albums />);
    expect(Albums.prototype).to.not.be.null;
  });
  it("should create Cities object", function() {
    const wrapper = mount(<Cities />);
    expect(Cities.prototype).to.not.be.null;
  });
  it("should create About object", function() {
    const wrapper = mount(<About />);
    expect(About.prototype).to.not.be.null;
  });
  it("should create Song Instance object", function() {
    const wrapper = mount(<SongInstance />);
    expect(SongInstance.prototype).to.not.be.null;
  });
  it("should create Artist Instance object", function() {
    const wrapper = mount(<ArtistInstance />);
    expect(ArtistInstance.prototype).to.not.be.null;
  });
  it("should create Album Instance object", function() {
    const wrapper = mount(<AlbumInstance />);
    expect(AlbumInstance.prototype).to.not.be.null;
  });
  it("should create City Instance object", function() {
    const wrapper = mount(<CityInstance />);
    expect(CityInstance.prototype).to.not.be.null;
  });
  {/*it('should have a carousel', function () {
    const wrapper = shallow(<Index />);
    expect(wrapper.contains(<MyCarousel />)).to.equal(true);
  });
  it('should have marketing and featurettes', function () {
    const wrapper = shallow(<Index />);
    expect(wrapper.find('.container marketing')).to.have.length(1);
    expect(wrapper.find('.row featurette index_descriptions')).to.have.length(3);
  });*/}
  it('Songs page should load a list of song instances', function () {
    const wrapper = shallow(<Songs />);
    expect(wrapper.find('.pageLoadingIndicator')).to.have.length(1);
  });
  it('Artists page should load a list of artist instances', function () {
    const wrapper = shallow(<Artists />);
    expect(wrapper.find('.pageLoadingIndicator')).to.have.length(1);
  });
  it('Albums page should load a list of album instances', function () {
    const wrapper = shallow(<Albums />);
    expect(wrapper.find('.pageLoadingIndicator')).to.have.length(1);
  });
  it('Cities page should load a list of city instances', function () {
    const wrapper = shallow(<Cities />);
    expect(wrapper.find('.pageLoadingIndicator')).to.have.length(1);
  });
  it('Song instance should have a view artist and view album button', function () {
    const wrapper = shallow(<SongInstance />);
    expect(wrapper.find('a.btn-secondary')).to.have.length(2);
  });
  it('Song instance should have lyrics', function () {
    const wrapper = shallow(<SongInstance />);
    expect(wrapper.find('div.lyricsCol')).to.have.length(1);
  });
  it('Song instance should have Spotify preview', function () {
    const wrapper = shallow(<SongInstance />);
    expect(wrapper.find('.songPlayer')).to.have.length(1);
  });
  it('Artist instance should have artist image', function () {
    const wrapper = shallow(<ArtistInstance />);
    expect(wrapper.find('.artistImage')).to.have.length(1);
  });
  it('Artist instance should have genre', function () {
    const wrapper = shallow(<ArtistInstance />);
    expect(wrapper.find('div.text-right')).to.have.length(1);
  });
  it('Artist instance should have bio', function () {
    const wrapper = shallow(<ArtistInstance />);
    expect(wrapper.find('div.containerArtistBio')).to.have.length(1);
  });
  it('Artist instance should have albums generated', function () {
    const wrapper = shallow(<ArtistInstance />);
    expect(wrapper.find('h2.orange')).to.have.length(1);
  });
  it('Artist instance should have popular songs generated', function () {
    const wrapper = shallow(<ArtistInstance />);
    expect(wrapper.find('ul.list-group-flush')).to.have.length(1);
  });
  it('Artist instance should have upcoming concerts generated', function () {
    const wrapper = shallow(<ArtistInstance />);
    expect(wrapper.find('ul.list-group')).to.have.length(2);
  });
  it('Album instance should have album image', function () {
    const wrapper = shallow(<AlbumInstance />);
    expect(wrapper.find('img.img-thumbnail')).to.have.length(1);
  });
  it('Album instance should have genre and release date', function () {
    const wrapper = shallow(<AlbumInstance />);
    expect(wrapper.find('p.h6')).to.have.length(2);
  });
  it('Album instance should have song list generated', function () {
    const wrapper = shallow(<AlbumInstance />);
    expect(wrapper.find('ul.list-group')).to.have.length(1);
  });
  it('City instance should have a map', function () {
    const wrapper = shallow(<CityInstance />);
    expect(wrapper.find('#map')).to.have.length(1);
  });
  it('City instance should have a city song list', function () {
    const wrapper = shallow(<CityInstance />);
    expect(wrapper.find('.citySongList')).to.have.length(1);
  });
  it('City instance should have an upcoming concerts list', function () {
    const wrapper = shallow(<CityInstance />);
    expect(wrapper.find('#concerts')).to.have.length(1);
  });
  it('About page should have About this Site, Disparate Data, Total Statistics, Data Sources, Tools Used sections', function () {
    const wrapper = shallow(<About />);
    expect(wrapper.find('div.featurette')).to.have.length(5);
  });
  it('About page should have Team section', function () {
    const wrapper = shallow(<About />);
    expect(wrapper.find('#our-team')).to.have.length(1);
  });

});
