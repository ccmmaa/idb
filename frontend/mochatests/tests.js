import 'jsdom-global/register';
import React from 'react'
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Index from '../src/Home/Index';
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
  it("should create Index object", function() {
    const wrapper = mount(<Index />);
    expect(Index.prototype).to.not.be.null;
  });
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

  it('should have a carousel', function () {
    const wrapper = shallow(<Index />);
    expect(wrapper.find('img')).to.have.length(1);
  });

  it('should have props for email and src', function () {
    const wrapper = shallow(<Avatar/>);
    expect(wrapper.props().email).to.be.defined;
    expect(wrapper.props().src).to.be.defined;
  });


});
