import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import PageNotFound from '../PageNotFound';
import '../assets/css/modelpage.css';
import SongSlide from '../assets/images/songmodel.jpg';
import URL from '../URLSpaceUnderscore';
import Loading from '../assets/images/loadingHorizontal.gif';
import $ from 'jquery';


class Songs extends Component {

	constructor() {
		super();
		this.state = {
			doneLoading: false,
			page: 1,
			allSongs:[
				{
					"name": "goosebumps",
					"length": "4:03",
					"genre": "hip hop", 
					"artist": "Travis Scott", 
					"producer": [
						"Cardo", 
						"Yung Exclusive", 
						"Cubeatz", 
						"Dean"
					],
					"release date": "December 13, 2016", 
					"album": "Birds in the Trap Sing McKnight", 
					"album art": "https://i.scdn.co/image/2f91c3cace3c5a6a48f3d0e2fd21364d4911b332",
					"artist image": "https://i.scdn.co/image/eb266625dab075341e8c4378a177a27370f91903",
					"lyrics": "[Intro: Travis Scott]\n	Yeah\n	7:30 in the night\n	Ooooh ooh\n	\n	[Hook: Travis Scott]\n	I get those goosebumps every time, yeah, you come around, yeah\n	You ease my mind, you make everything feel fine\n	Worry about those comments\n	I'm way too numb, yeah, it's way too dumb, yeah\n	I get those goosebumps every time, I need the Heimlich\n	Throw that to the side, yeah\n	I get those goosebumps every time, yeah, when you're not around\n	When you throw that to the side, yeah\n	I get those goosebumps every time, yeah\n	\n	[Verse 1: Travis Scott]\n	7-1-3 to the 2-8-1, yeah I'm riding\n	Why they on me? Why they on me? I'm flyin'\n	Sippin' lowkey I'm sipping lowkey in Onyx\n	Rider, rider when I'm pullin' up right beside ya\n	Popstar, lil' Mariah\n	When I text a cute game, wildness\n	Throw a stack on the Bible\n	Never Snapchat or took molly\n	She fall through plenty, her and all her ginnies\n	Yeah, we at the top floor, right there off Doheny\n	Oh no, I can't fuck with y'all\n	Yea, when I'm with my squad I cannot do no wrong\n	Yeah, saucing in the city, don't get misinformed, yea\n	They gon' pull up on you (brr, brr, brr)\n	Yeah, we gon' do some things, some things you can't relate\n	Yeah, cause we from a place, a place you cannot stay\n	Oh, you can't go, oh, I don't know\n	Oh, back the fuck up off me (brr, brr, brr)\n	\n	[Hook: Travis Scott]\n	I get those goosebumps every time, yeah, you come around, yeah\n	You ease my mind, you make everything feel fine\n	Worry about those comments\n	I'm way too numb, yeah, it's way too dumb, yeah\n	I get those goosebumps every time, I need the Heimlich\n	Throw that to the side, yeah\n	I get those goosebumps every time, yeah, when you're not around\n	When you throw that to the side, yeah\n	I get those goosebumps every time\n	\n	[Verse 2: Kendrick Lamar]\n	I want to press my like, yeah, I wanna press my\n	I want a green light, I wanna be like\n	I wanna press my line, yeah\n	I want to take that ride, yeah\n	I’m gonna press my line\n	I wanna green light, I wanna be like, I wanna press my\n	Mama, dear, spare your feelings\n	I'm reliving moments, peeling more residual\n	(I can) buy the building, burn the building, take your bitch, rebuild the building just to fuck some more\n	(I can) justify my love for you and touch the sky for God to stop, debating war\n	Put the pussy on a pedestal\n	Put the pussy on a high horse\n	That pussy to die for\n	That pussy to die for\n	Peter, piper, picked a pepper\n	So I could pick your brain and put your heart together\n	We depart the shady parts and party hard, the diamonds yours\n	The coupe forever\n	My best shots might shoot forever like (brr)\n	\n	[Hook: Travis Scott]\n	I get those goosebumps every time, yeah, you come around, yeah\n	You ease my mind, you make everything feel fine\n	Worry about those comments\n	I'm way too numb, yeah, it's way too dumb, yeah\n	I get those goosebumps every time, I need the Heimlich\n	Throw that to the side, yeah\n	I get those goosebumps every time, yeah, when you're not around\n	When you throw that to the side, yeah\n	I get those goosebumps every time\n",
					"country of origin": "USA",
					"features": [
						"Kendrick Lamar"
					],
					"popular cities": [
						"Austin", 
						"Dallas", 
						"Florida", 
						"Houston", 
						"New York"
					]
				},
				{
					"name": "goosebumps",
					"length": "4:03",
					"genre": "hip hop", 
					"artist": "Travis Scott", 
					"producer": [
						"Cardo", 
						"Yung Exclusive", 
						"Cubeatz", 
						"Dean"
					],
					"release date": "December 13, 2016", 
					"album": "Birds in the Trap Sing McKnight", 
					"album art": "https://i.scdn.co/image/2f91c3cace3c5a6a48f3d0e2fd21364d4911b332",
					"artist image": "https://i.scdn.co/image/eb266625dab075341e8c4378a177a27370f91903",
					"lyrics": "[Intro: Travis Scott]\n	Yeah\n	7:30 in the night\n	Ooooh ooh\n	\n	[Hook: Travis Scott]\n	I get those goosebumps every time, yeah, you come around, yeah\n	You ease my mind, you make everything feel fine\n	Worry about those comments\n	I'm way too numb, yeah, it's way too dumb, yeah\n	I get those goosebumps every time, I need the Heimlich\n	Throw that to the side, yeah\n	I get those goosebumps every time, yeah, when you're not around\n	When you throw that to the side, yeah\n	I get those goosebumps every time, yeah\n	\n	[Verse 1: Travis Scott]\n	7-1-3 to the 2-8-1, yeah I'm riding\n	Why they on me? Why they on me? I'm flyin'\n	Sippin' lowkey I'm sipping lowkey in Onyx\n	Rider, rider when I'm pullin' up right beside ya\n	Popstar, lil' Mariah\n	When I text a cute game, wildness\n	Throw a stack on the Bible\n	Never Snapchat or took molly\n	She fall through plenty, her and all her ginnies\n	Yeah, we at the top floor, right there off Doheny\n	Oh no, I can't fuck with y'all\n	Yea, when I'm with my squad I cannot do no wrong\n	Yeah, saucing in the city, don't get misinformed, yea\n	They gon' pull up on you (brr, brr, brr)\n	Yeah, we gon' do some things, some things you can't relate\n	Yeah, cause we from a place, a place you cannot stay\n	Oh, you can't go, oh, I don't know\n	Oh, back the fuck up off me (brr, brr, brr)\n	\n	[Hook: Travis Scott]\n	I get those goosebumps every time, yeah, you come around, yeah\n	You ease my mind, you make everything feel fine\n	Worry about those comments\n	I'm way too numb, yeah, it's way too dumb, yeah\n	I get those goosebumps every time, I need the Heimlich\n	Throw that to the side, yeah\n	I get those goosebumps every time, yeah, when you're not around\n	When you throw that to the side, yeah\n	I get those goosebumps every time\n	\n	[Verse 2: Kendrick Lamar]\n	I want to press my like, yeah, I wanna press my\n	I want a green light, I wanna be like\n	I wanna press my line, yeah\n	I want to take that ride, yeah\n	I’m gonna press my line\n	I wanna green light, I wanna be like, I wanna press my\n	Mama, dear, spare your feelings\n	I'm reliving moments, peeling more residual\n	(I can) buy the building, burn the building, take your bitch, rebuild the building just to fuck some more\n	(I can) justify my love for you and touch the sky for God to stop, debating war\n	Put the pussy on a pedestal\n	Put the pussy on a high horse\n	That pussy to die for\n	That pussy to die for\n	Peter, piper, picked a pepper\n	So I could pick your brain and put your heart together\n	We depart the shady parts and party hard, the diamonds yours\n	The coupe forever\n	My best shots might shoot forever like (brr)\n	\n	[Hook: Travis Scott]\n	I get those goosebumps every time, yeah, you come around, yeah\n	You ease my mind, you make everything feel fine\n	Worry about those comments\n	I'm way too numb, yeah, it's way too dumb, yeah\n	I get those goosebumps every time, I need the Heimlich\n	Throw that to the side, yeah\n	I get those goosebumps every time, yeah, when you're not around\n	When you throw that to the side, yeah\n	I get those goosebumps every time\n",
					"country of origin": "USA",
					"features": [
						"Kendrick Lamar"
					],
					"popular cities": [
						"Austin", 
						"Dallas", 
						"Florida", 
						"Houston", 
						"New York"
					]
				},
				{
					"name": "goosebumps",
					"length": "4:03",
					"genre": "hip hop", 
					"artist": "Travis Scott", 
					"producer": [
						"Cardo", 
						"Yung Exclusive", 
						"Cubeatz", 
						"Dean"
					],
					"release date": "December 13, 2016", 
					"album": "Birds in the Trap Sing McKnight", 
					"album art": "https://i.scdn.co/image/2f91c3cace3c5a6a48f3d0e2fd21364d4911b332",
					"artist image": "https://i.scdn.co/image/eb266625dab075341e8c4378a177a27370f91903",
					"lyrics": "[Intro: Travis Scott]\n	Yeah\n	7:30 in the night\n	Ooooh ooh\n	\n	[Hook: Travis Scott]\n	I get those goosebumps every time, yeah, you come around, yeah\n	You ease my mind, you make everything feel fine\n	Worry about those comments\n	I'm way too numb, yeah, it's way too dumb, yeah\n	I get those goosebumps every time, I need the Heimlich\n	Throw that to the side, yeah\n	I get those goosebumps every time, yeah, when you're not around\n	When you throw that to the side, yeah\n	I get those goosebumps every time, yeah\n	\n	[Verse 1: Travis Scott]\n	7-1-3 to the 2-8-1, yeah I'm riding\n	Why they on me? Why they on me? I'm flyin'\n	Sippin' lowkey I'm sipping lowkey in Onyx\n	Rider, rider when I'm pullin' up right beside ya\n	Popstar, lil' Mariah\n	When I text a cute game, wildness\n	Throw a stack on the Bible\n	Never Snapchat or took molly\n	She fall through plenty, her and all her ginnies\n	Yeah, we at the top floor, right there off Doheny\n	Oh no, I can't fuck with y'all\n	Yea, when I'm with my squad I cannot do no wrong\n	Yeah, saucing in the city, don't get misinformed, yea\n	They gon' pull up on you (brr, brr, brr)\n	Yeah, we gon' do some things, some things you can't relate\n	Yeah, cause we from a place, a place you cannot stay\n	Oh, you can't go, oh, I don't know\n	Oh, back the fuck up off me (brr, brr, brr)\n	\n	[Hook: Travis Scott]\n	I get those goosebumps every time, yeah, you come around, yeah\n	You ease my mind, you make everything feel fine\n	Worry about those comments\n	I'm way too numb, yeah, it's way too dumb, yeah\n	I get those goosebumps every time, I need the Heimlich\n	Throw that to the side, yeah\n	I get those goosebumps every time, yeah, when you're not around\n	When you throw that to the side, yeah\n	I get those goosebumps every time\n	\n	[Verse 2: Kendrick Lamar]\n	I want to press my like, yeah, I wanna press my\n	I want a green light, I wanna be like\n	I wanna press my line, yeah\n	I want to take that ride, yeah\n	I’m gonna press my line\n	I wanna green light, I wanna be like, I wanna press my\n	Mama, dear, spare your feelings\n	I'm reliving moments, peeling more residual\n	(I can) buy the building, burn the building, take your bitch, rebuild the building just to fuck some more\n	(I can) justify my love for you and touch the sky for God to stop, debating war\n	Put the pussy on a pedestal\n	Put the pussy on a high horse\n	That pussy to die for\n	That pussy to die for\n	Peter, piper, picked a pepper\n	So I could pick your brain and put your heart together\n	We depart the shady parts and party hard, the diamonds yours\n	The coupe forever\n	My best shots might shoot forever like (brr)\n	\n	[Hook: Travis Scott]\n	I get those goosebumps every time, yeah, you come around, yeah\n	You ease my mind, you make everything feel fine\n	Worry about those comments\n	I'm way too numb, yeah, it's way too dumb, yeah\n	I get those goosebumps every time, I need the Heimlich\n	Throw that to the side, yeah\n	I get those goosebumps every time, yeah, when you're not around\n	When you throw that to the side, yeah\n	I get those goosebumps every time\n",
					"country of origin": "USA",
					"features": [
						"Kendrick Lamar"
					],
					"popular cities": [
						"Austin", 
						"Dallas", 
						"Florida", 
						"Houston", 
						"New York"
					]
				},
				{
					"name": "goosebumps",
					"length": "4:03",
					"genre": "hip hop", 
					"artist": "Travis Scott", 
					"producer": [
						"Cardo", 
						"Yung Exclusive", 
						"Cubeatz", 
						"Dean"
					],
					"release date": "December 13, 2016", 
					"album": "Birds in the Trap Sing McKnight", 
					"album art": "https://i.scdn.co/image/2f91c3cace3c5a6a48f3d0e2fd21364d4911b332",
					"artist image": "https://i.scdn.co/image/eb266625dab075341e8c4378a177a27370f91903",
					"lyrics": "[Intro: Travis Scott]\n	Yeah\n	7:30 in the night\n	Ooooh ooh\n	\n	[Hook: Travis Scott]\n	I get those goosebumps every time, yeah, you come around, yeah\n	You ease my mind, you make everything feel fine\n	Worry about those comments\n	I'm way too numb, yeah, it's way too dumb, yeah\n	I get those goosebumps every time, I need the Heimlich\n	Throw that to the side, yeah\n	I get those goosebumps every time, yeah, when you're not around\n	When you throw that to the side, yeah\n	I get those goosebumps every time, yeah\n	\n	[Verse 1: Travis Scott]\n	7-1-3 to the 2-8-1, yeah I'm riding\n	Why they on me? Why they on me? I'm flyin'\n	Sippin' lowkey I'm sipping lowkey in Onyx\n	Rider, rider when I'm pullin' up right beside ya\n	Popstar, lil' Mariah\n	When I text a cute game, wildness\n	Throw a stack on the Bible\n	Never Snapchat or took molly\n	She fall through plenty, her and all her ginnies\n	Yeah, we at the top floor, right there off Doheny\n	Oh no, I can't fuck with y'all\n	Yea, when I'm with my squad I cannot do no wrong\n	Yeah, saucing in the city, don't get misinformed, yea\n	They gon' pull up on you (brr, brr, brr)\n	Yeah, we gon' do some things, some things you can't relate\n	Yeah, cause we from a place, a place you cannot stay\n	Oh, you can't go, oh, I don't know\n	Oh, back the fuck up off me (brr, brr, brr)\n	\n	[Hook: Travis Scott]\n	I get those goosebumps every time, yeah, you come around, yeah\n	You ease my mind, you make everything feel fine\n	Worry about those comments\n	I'm way too numb, yeah, it's way too dumb, yeah\n	I get those goosebumps every time, I need the Heimlich\n	Throw that to the side, yeah\n	I get those goosebumps every time, yeah, when you're not around\n	When you throw that to the side, yeah\n	I get those goosebumps every time\n	\n	[Verse 2: Kendrick Lamar]\n	I want to press my like, yeah, I wanna press my\n	I want a green light, I wanna be like\n	I wanna press my line, yeah\n	I want to take that ride, yeah\n	I’m gonna press my line\n	I wanna green light, I wanna be like, I wanna press my\n	Mama, dear, spare your feelings\n	I'm reliving moments, peeling more residual\n	(I can) buy the building, burn the building, take your bitch, rebuild the building just to fuck some more\n	(I can) justify my love for you and touch the sky for God to stop, debating war\n	Put the pussy on a pedestal\n	Put the pussy on a high horse\n	That pussy to die for\n	That pussy to die for\n	Peter, piper, picked a pepper\n	So I could pick your brain and put your heart together\n	We depart the shady parts and party hard, the diamonds yours\n	The coupe forever\n	My best shots might shoot forever like (brr)\n	\n	[Hook: Travis Scott]\n	I get those goosebumps every time, yeah, you come around, yeah\n	You ease my mind, you make everything feel fine\n	Worry about those comments\n	I'm way too numb, yeah, it's way too dumb, yeah\n	I get those goosebumps every time, I need the Heimlich\n	Throw that to the side, yeah\n	I get those goosebumps every time, yeah, when you're not around\n	When you throw that to the side, yeah\n	I get those goosebumps every time\n",
					"country of origin": "USA",
					"features": [
						"Kendrick Lamar"
					],
					"popular cities": [
						"Austin", 
						"Dallas", 
						"Florida", 
						"Houston", 
						"New York"
					]
				},
				{
					"name": "goosebumps",
					"length": "4:03",
					"genre": "hip hop", 
					"artist": "Travis Scott", 
					"producer": [
						"Cardo", 
						"Yung Exclusive", 
						"Cubeatz", 
						"Dean"
					],
					"release date": "December 13, 2016", 
					"album": "Birds in the Trap Sing McKnight", 
					"album art": "https://i.scdn.co/image/2f91c3cace3c5a6a48f3d0e2fd21364d4911b332",
					"artist image": "https://i.scdn.co/image/eb266625dab075341e8c4378a177a27370f91903",
					"lyrics": "[Intro: Travis Scott]\n	Yeah\n	7:30 in the night\n	Ooooh ooh\n	\n	[Hook: Travis Scott]\n	I get those goosebumps every time, yeah, you come around, yeah\n	You ease my mind, you make everything feel fine\n	Worry about those comments\n	I'm way too numb, yeah, it's way too dumb, yeah\n	I get those goosebumps every time, I need the Heimlich\n	Throw that to the side, yeah\n	I get those goosebumps every time, yeah, when you're not around\n	When you throw that to the side, yeah\n	I get those goosebumps every time, yeah\n	\n	[Verse 1: Travis Scott]\n	7-1-3 to the 2-8-1, yeah I'm riding\n	Why they on me? Why they on me? I'm flyin'\n	Sippin' lowkey I'm sipping lowkey in Onyx\n	Rider, rider when I'm pullin' up right beside ya\n	Popstar, lil' Mariah\n	When I text a cute game, wildness\n	Throw a stack on the Bible\n	Never Snapchat or took molly\n	She fall through plenty, her and all her ginnies\n	Yeah, we at the top floor, right there off Doheny\n	Oh no, I can't fuck with y'all\n	Yea, when I'm with my squad I cannot do no wrong\n	Yeah, saucing in the city, don't get misinformed, yea\n	They gon' pull up on you (brr, brr, brr)\n	Yeah, we gon' do some things, some things you can't relate\n	Yeah, cause we from a place, a place you cannot stay\n	Oh, you can't go, oh, I don't know\n	Oh, back the fuck up off me (brr, brr, brr)\n	\n	[Hook: Travis Scott]\n	I get those goosebumps every time, yeah, you come around, yeah\n	You ease my mind, you make everything feel fine\n	Worry about those comments\n	I'm way too numb, yeah, it's way too dumb, yeah\n	I get those goosebumps every time, I need the Heimlich\n	Throw that to the side, yeah\n	I get those goosebumps every time, yeah, when you're not around\n	When you throw that to the side, yeah\n	I get those goosebumps every time\n	\n	[Verse 2: Kendrick Lamar]\n	I want to press my like, yeah, I wanna press my\n	I want a green light, I wanna be like\n	I wanna press my line, yeah\n	I want to take that ride, yeah\n	I’m gonna press my line\n	I wanna green light, I wanna be like, I wanna press my\n	Mama, dear, spare your feelings\n	I'm reliving moments, peeling more residual\n	(I can) buy the building, burn the building, take your bitch, rebuild the building just to fuck some more\n	(I can) justify my love for you and touch the sky for God to stop, debating war\n	Put the pussy on a pedestal\n	Put the pussy on a high horse\n	That pussy to die for\n	That pussy to die for\n	Peter, piper, picked a pepper\n	So I could pick your brain and put your heart together\n	We depart the shady parts and party hard, the diamonds yours\n	The coupe forever\n	My best shots might shoot forever like (brr)\n	\n	[Hook: Travis Scott]\n	I get those goosebumps every time, yeah, you come around, yeah\n	You ease my mind, you make everything feel fine\n	Worry about those comments\n	I'm way too numb, yeah, it's way too dumb, yeah\n	I get those goosebumps every time, I need the Heimlich\n	Throw that to the side, yeah\n	I get those goosebumps every time, yeah, when you're not around\n	When you throw that to the side, yeah\n	I get those goosebumps every time\n",
					"country of origin": "USA",
					"features": [
						"Kendrick Lamar"
					],
					"popular cities": [
						"Austin", 
						"Dallas", 
						"Florida", 
						"Houston", 
						"New York"
					]
				},
				{
					"name": "goosebumps",
					"length": "4:03",
					"genre": "hip hop", 
					"artist": "Travis Scott", 
					"producer": [
						"Cardo", 
						"Yung Exclusive", 
						"Cubeatz", 
						"Dean"
					],
					"release date": "December 13, 2016", 
					"album": "Birds in the Trap Sing McKnight", 
					"album art": "https://i.scdn.co/image/2f91c3cace3c5a6a48f3d0e2fd21364d4911b332",
					"artist image": "https://i.scdn.co/image/eb266625dab075341e8c4378a177a27370f91903",
					"lyrics": "[Intro: Travis Scott]\n	Yeah\n	7:30 in the night\n	Ooooh ooh\n	\n	[Hook: Travis Scott]\n	I get those goosebumps every time, yeah, you come around, yeah\n	You ease my mind, you make everything feel fine\n	Worry about those comments\n	I'm way too numb, yeah, it's way too dumb, yeah\n	I get those goosebumps every time, I need the Heimlich\n	Throw that to the side, yeah\n	I get those goosebumps every time, yeah, when you're not around\n	When you throw that to the side, yeah\n	I get those goosebumps every time, yeah\n	\n	[Verse 1: Travis Scott]\n	7-1-3 to the 2-8-1, yeah I'm riding\n	Why they on me? Why they on me? I'm flyin'\n	Sippin' lowkey I'm sipping lowkey in Onyx\n	Rider, rider when I'm pullin' up right beside ya\n	Popstar, lil' Mariah\n	When I text a cute game, wildness\n	Throw a stack on the Bible\n	Never Snapchat or took molly\n	She fall through plenty, her and all her ginnies\n	Yeah, we at the top floor, right there off Doheny\n	Oh no, I can't fuck with y'all\n	Yea, when I'm with my squad I cannot do no wrong\n	Yeah, saucing in the city, don't get misinformed, yea\n	They gon' pull up on you (brr, brr, brr)\n	Yeah, we gon' do some things, some things you can't relate\n	Yeah, cause we from a place, a place you cannot stay\n	Oh, you can't go, oh, I don't know\n	Oh, back the fuck up off me (brr, brr, brr)\n	\n	[Hook: Travis Scott]\n	I get those goosebumps every time, yeah, you come around, yeah\n	You ease my mind, you make everything feel fine\n	Worry about those comments\n	I'm way too numb, yeah, it's way too dumb, yeah\n	I get those goosebumps every time, I need the Heimlich\n	Throw that to the side, yeah\n	I get those goosebumps every time, yeah, when you're not around\n	When you throw that to the side, yeah\n	I get those goosebumps every time\n	\n	[Verse 2: Kendrick Lamar]\n	I want to press my like, yeah, I wanna press my\n	I want a green light, I wanna be like\n	I wanna press my line, yeah\n	I want to take that ride, yeah\n	I’m gonna press my line\n	I wanna green light, I wanna be like, I wanna press my\n	Mama, dear, spare your feelings\n	I'm reliving moments, peeling more residual\n	(I can) buy the building, burn the building, take your bitch, rebuild the building just to fuck some more\n	(I can) justify my love for you and touch the sky for God to stop, debating war\n	Put the pussy on a pedestal\n	Put the pussy on a high horse\n	That pussy to die for\n	That pussy to die for\n	Peter, piper, picked a pepper\n	So I could pick your brain and put your heart together\n	We depart the shady parts and party hard, the diamonds yours\n	The coupe forever\n	My best shots might shoot forever like (brr)\n	\n	[Hook: Travis Scott]\n	I get those goosebumps every time, yeah, you come around, yeah\n	You ease my mind, you make everything feel fine\n	Worry about those comments\n	I'm way too numb, yeah, it's way too dumb, yeah\n	I get those goosebumps every time, I need the Heimlich\n	Throw that to the side, yeah\n	I get those goosebumps every time, yeah, when you're not around\n	When you throw that to the side, yeah\n	I get those goosebumps every time\n",
					"country of origin": "USA",
					"features": [
						"Kendrick Lamar"
					],
					"popular cities": [
						"Austin", 
						"Dallas", 
						"Florida", 
						"Houston", 
						"New York"
					]
				}


			]
		}
	}

	componentWillMount() {
		$.ajax({
			url: 'http://api.musepy.me/song?results_per_page=12&page=' + this.state.page,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({"allSongs": data["objects"], "doneLoading": true, "page": this.state.page});
			}.bind(this),
			error: function(xhr, status, error) {
				// console.log("Get ERROR: " + error);
			}
		});
	}

	nextPage() {
		$.ajax({
			url: 'http://api.musepy.me/api/song?results_per_page=12&page=' + (this.state.page + 1),
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({"allSongs": data["objects"], "doneLoading": true, "page": (this.state.page+1)});
			}.bind(this),
			error: function(xhr, status, error) {
				// console.log("Get ERROR: " + error);
			}
		});
	}

	render() {

		var allSongs = <center><img src={Loading} className="pageLoadingIndicator" /></center>;
		if (this.state.doneLoading) {
			allSongs = this.state.allSongs.map(song => {
				return(
					<div className="card-shadows-orange model-cards modelCard">
						<div className="ingrid" text-align="center">
						  <img className="rounded-circle" src={song["Album"]["artwork"]} alt="Generic placeholder image" width="140" height="140" />
						  <h2>{song["name"]}</h2><h6>by {song["artist"]["name"]}</h6><br />
						  <p><a className="btn btn-secondary" href={"/songs/" + song["song_id"]} role="button">View &raquo;</a></p>
						</div>
					</div>
				);
			});
		}
		

		/*

		*/
		return(
			<div className="pageContent">
				<Navigation activeTab={"songs"}/> 

				<main role="main">
					<div align="center">
						
						<div className="carousel-item titleImage active">
							<img className="first-slide" src={SongSlide} alt="First slide" />
							<div className="container">
								<div className="carousel-caption text-left">
									<h1><span>Search</span> your city's top songs.</h1>
								</div>
							</div>
						</div>
					</div>
					
					<div className="container">
						<hr />
						<center><h1>Songs</h1></center>
						<hr />
					</div>
					<div className="container2 marketing">
						<div className="row">
							
							<center>
								{allSongs}
							</center>
							<button onClick={this.nextPage.bind(this)}>NEXT</button>
						</div>
					</div>


					<div className="container">
						<hr />
					</div>

				
				</main>


				<Footer />

			</div>
		);
	}
} 
export default Songs;