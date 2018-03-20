import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import $ from 'jquery';
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
import '../assets/css/modelpage.css';


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
    var slides = this.state.carouselItems.map((item) => {
      if(item.model === "Songs")
        return (
            <div className="carousel-item active">
              <img className="first-slide" src={item.image} alt="First slide"/>
              <div className="container">
                <div className="carousel-caption text-left">
                  <h1><span>{item.first}</span> {item.description}</h1>
                  <p><a className="btn btn-lg btn-primary" href={item.model}  role="button">{item.model}</a></p>
                </div>
              </div>
            </div>
        );
      else if(item.model === "Cities")
        return (
          <div className="carousel-item">
            <img className="fourth-slide" src={item.image} alt="Fourth slide"/>
            <div className="container">
              <div className="carousel-caption text-right">
                <h1><span>{item.first}</span> {item.description}</h1>
                <p><a className="btn btn-lg btn-primary" href={item.model} role="button">{item.model}</a></p>
              </div>
            </div>
          </div>
        );
      else if(item.model === "Albums" || item.model === "Artists" )
        return (
          <div className="carousel-item">
            <img className="second-slide" src={item.image} alt="Second slide"/>
            <div className="container">
              <div className="carousel-caption">
                <h1><span>{item.first}</span> {item.description}</h1>
                <p><a className="btn btn-lg btn-primary" href={item.model}  role="button">{item.model}</a></p>
              </div>
            </div>
          </div>
        );
    });

    const marketing = this.state.centerfoldItems.map((item) => {
      return (
        <div className="col-lg-3">
					<img className="rounded-circle" src={item.image} alt="Generic placeholder image" width="140" height="140"/>
					<h2>{item.model}</h2>
					<p><a className="btn btn-secondary" href={item.model}  role="button">{item.description}</a></p>
				</div>
      );
    });

    const featurettes = this.state.bottomItems.map((item) => {
      if(item.key % 2 !== 0)
        return (
          <div className="row featurette">
  					<div className="col-md-7">
  						<h2 className="featurette-heading-orange">{item.title}<span className="text-muted">{item.titleend}</span></h2>
  						<p className="lead">{item.description}</p>
  					</div>
  					<div className="col-md-5">
  						<img className="featurette-image img-fluid mx-auto" src={item.image} alt="Generic placeholder image"/>
  					</div>
				</div>
        );
      return (
        <div className="row featurette">
					<div className="col-md-7 order-md-2">
						<h2 className="featurette-heading-orange">{item.title} <span className="text-muted">{item.titleend}</span></h2>
						<p className="lead">{item.description}</p>
					</div>
					<div className="col-md-5 order-md-1">
						<img height={300} width={450} clasName="featurette-image img-fluid mx-auto" src={item.image} alt="Generic placeholder image"/>
					</div>
				</div>
      );
    });


    return (
      <div className="pageContent">
        <Navigation activeTab={"index"}/>
        <main role="main">

          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
              <li data-target="#myCarousel" data-slide-to="3"></li>
            </ol>

            <div className="carousel-inner">
              {slides}
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

          <div class="container marketing">
            <div class="row">
              {marketing}
            </div>
          </div>

          {featurettes}

        </main>

        <Footer />

      </div>
    );
  }
}

export default Home;
