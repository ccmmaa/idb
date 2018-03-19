import React, { Component } from 'react';
import $ from 'jquery';
import MyCarousel from './HomeComponents/MyCarousel';
import Centerfold from './HomeComponents/Centerfold';
import Bottom from './HomeComponents/Bottom';
import carousel1 from '../assets/images/carousel1.jpg';
import carousel2 from '../assets/images/carousel2.jpg';
import carousel3 from '../assets/images/carousel3.jpg';
import carousel4 from '../assets/images/carousel4.jpg';
import middle1 from '../assets/images/middle1.jpg';
import middle2 from '../assets/images/middle2.jpg';
import middle3 from '../assets/images/middle3.jpg';
import middle4 from '../assets/images/middle4.jpg';
import bottom1 from '../assets/images/bottom1.jpg';
import bottom2 from '../assets/images/bottom2.jpg';
import bottom3 from '../assets/images/bottom3.jpg';



class Home extends Component {
  constructor(){
    super();
    this.state = {
      carouselItems: [],
      centerfoldItems: [],
      bottomItems: [],
      todosAPI: []
    }
  }

  getHomePageItems(){
    this.setState({carouselItems: [
      {
        model: 'Songs',
        first: 'Search',
        description: 'your city\'s top songs.',
        image: carousel1
      },
      {
        model: 'Artists',
        first: 'Explore',
        description: 'your favorite artists.',
        image: carousel2
      },
      {
        model: 'Albums',
        first: 'Discover',
        description: 'new albums.',
        image: carousel3
      },
      {
        model: 'Cities',
        first: 'Connect',
        description: 'with your city.',
        image: carousel4
      }
    ],
    centerfoldItems: [
      {
        model: 'Songs',
        description: 'View songs »',
        image: middle1
      },
      {
        model: 'Artists',
        description: 'View artists »',
        image: middle2
      },
      {
        model: 'Albums',
        description: 'View albums »',
        image: middle3
      },
      {
        model: 'Cities',
        description: 'View cities »',
        image: middle4
      }
    ],
    bottomItems: [
      {
        key: 1,
        title: 'Search a song or artist.',
        titleend: 'Get custom playlists.',
        description: 'Look through our library of songs and find a great new artist to listen to. Or look through your favorite artists. Maybe you\'ll find a song of theirs you haven\'t heard before. Listen to your songs right on our website through Spotify and read along with lyrics while you do.',
        image: bottom1
      },
      {
        key: 2,
        title: 'Find local concerts.',
        titleend: 'By your favorite artists.',
        description: 'Once you find that great new artist, take a look at their bio, albums, and songs. But don\'t forget to find out where their upcoming concerts are happening; it\'s right there on their page. Maybe they\'ll be playing near you...',
        image: bottom2
      },
      {
        key: 3,
        title: 'Enter a city.',
        titleend: 'Discover what\'s hot in your hometown.',
        description: 'Everyone\'s got their favorite city, whether it\'s windy Chicago or busy New York. Take a look at what concerts are happening there and listen to a playlist crafted especially for you and your favorite place in the world.',
        image: bottom3
      }
    ]});
  }

  getStuffFromAPI(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({todosAPI: data}, function(){
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    })
  }

  componentWillMount(){
    this.getHomePageItems();
    //this.getStuffFromAPI();
  }

  componentDidMount(){
    //this.getStuffFromAPI();
  }

  render() {
    return (
      <div className="Home">
        <MyCarousel carouselItems={this.state.carouselItems} />
        <Centerfold centerfoldItems={this.state.centerfoldItems} />
        <Bottom bottomItems={this.state.bottomItems} />
      </div>
    );
  }
}

export default Home;
