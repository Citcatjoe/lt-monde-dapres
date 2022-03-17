(function($, videojs){

	



	// 1 SMARTPHONE_EMOI
	data = [	
				{ 
					hasQuote: 'Pierre Lelièvre',
					quoteAuth: 'Restaurateur, Lucinges (France voisine)',
					picture: 'apres/lelievre.jpg',
					isVideo: true,
					sourcev: 'https://player.vimeo.com/progressive_redirect/download/688295263/rendition/360p/lelievre_full_v%20%28360p%29.mp4?loc=external&signature=46be9bf5df937705735a1e197fba1924dc7472261b950b903f73ff9146116913', 
					//sourceh: 'https://player.vimeo.com/progressive_redirect/download/688295805/rendition/1080p/lelievre_full%20%281080p%29.mp4?loc=external&signature=5e2d602ae0c51b6ee5c9827d71a22544c7837d7f2a8dae8ea18cdc0d5ec2a54b',
					vimeo: 'https://player.vimeo.com/video/688295805?h=3d5dc93f09',
					controls: true,
					overlay: false,
					hidden: false
				},
				{ 
					hasQuote: 'Gaëlle Rapillard',
					quoteAuth: 'Infirmière, Champlan',
					picture: 'apres/gaelle.jpg',
					isVideo: true,
					sourcev: "https://player.vimeo.com/progressive_redirect/download/686722477/rendition/360p/gaelle_full_v%20%28360p%29.mp4?loc=external&signature=d51fc2b0639c3646c143d8ff7a8d67b9cc05cd251b3a610c534b93aac209234c", 
					//sourceh: "https://player.vimeo.com/progressive_redirect/download/686743154/rendition/1080p/gaelle_full%20%281080p%29.mp4?loc=external&signature=1879d25b93980c24649c5a30326e826a2409fee0a16b5e19454c664d88e30a5d",
					vimeo: 'https://player.vimeo.com/video/686743154?h=d8639e189a',
					controls: true,
					overlay: false,
					hidden: false,
				},
				{ 
					hasQuote: 'Sara Oswald',
					quoteAuth: 'Violoncelliste, Leysin',	
					picture: 'apres/sara.jpg',
					isVideo: true,
					sourcev: "https://player.vimeo.com/progressive_redirect/download/686723062/rendition/360p/sara_full_v%20%28360p%29.mp4?loc=external&signature=f2a4377aa152fb1d7f8e39db575289d689abf5486ef396434052c992f9929256", 
					//sourceh: "https://player.vimeo.com/progressive_redirect/download/686723751/rendition/1080p/sara_full%20%281080p%29.mp4?loc=external&signature=d6f6bfbb1ffc3af9eb834296bc22a73ad8e27c67b4f844bc3c5e599c52f86ba0",
					vimeo: 'https://player.vimeo.com/video/686723751?h=e27b9888f1',
					controls: true,	
					overlay: false,
					hidden: false
				},
				{ 
					hasQuote: 'Loïc Wiesmann',
					quoteAuth: 'Croque-mort, Cossonay',
					picture: 'apres/loic.jpg',
					isVideo: true,
					sourcev: "https://player.vimeo.com/progressive_redirect/download/686724465/rendition/360p/loic_full_v%20%28360p%29.mp4?loc=external&signature=a80d06599684dca0592a5110daeb04a343c052d00715b9c7c0a31ee8953ea21f", 
					//sourceh: "https://player.vimeo.com/progressive_redirect/download/686721723/rendition/1080p/loic_full%20%281080p%29.mp4?loc=external&signature=c827c071a6b632d624c10d4cd90001311e68a9ef0dd214fd91bac357510f015b",
					vimeo: 'https://player.vimeo.com/video/686721723?h=ebada027ea',
					controls: true,
					overlay: false,
					hidden: false
				},
				{ 
					hasQuote: 'Frédérique Beauvois',
					quoteAuth: 'Cofondatrice du collectif #quivapayerladdition, Renens',
					picture: 'apres/frederique.jpg',
					isVideo: true,
					sourcev: "https://player.vimeo.com/progressive_redirect/download/688297946/rendition/360p/frederique_full_v%20%28360p%29.mp4?loc=external&signature=91f3065fd1cc11308b10de33d57f375fb7c11a12d1139fb0d2302bdd5459d879", 
					//sourceh: 'https://player.vimeo.com/progressive_redirect/download/688297482/rendition/1080p/frederique_full%20%281080p%29.mp4?loc=external&signature=b3574b315a52f88893345e293068951d26be4832b49488fcfc70d96cebf94bda',
					vimeo: 'https://player.vimeo.com/video/688297482?h=c1aa9b4dc9',
					controls: true,
					overlay: false,
					hidden: false
				},
				{ 
					hasQuote: 'Guy Parmelin',
					quoteAuth: 'Conseiller fédéral, Berne',
					picture: 'apres/guy.jpg',
					isVideo: true,
					sourcev: "https://player.vimeo.com/progressive_redirect/download/688296910/rendition/360p/guy_full_v%20%28360p%29.mp4?loc=external&signature=0e82f576e6c29959f0bbebb070dec85eb1de265f6b371792800b4f262aad5dc8", 
					//sourceh: 'https://player.vimeo.com/progressive_redirect/download/688296300/rendition/1080p/guy_full%20%281080p%29.mp4?loc=external&signature=d88ec58f5135dce4442d97ea9e0ba33d72a0ddd4080ce4ceaad133e73698dff8',
					vimeo: 'https://player.vimeo.com/video/688296300?h=593f1d8f91',
					controls: true,
					overlay: false,
					hidden: false
				},
				{ 
					hasQuote: 'Tania Zerbini',
					quoteAuth: 'Enseignante, Genève',
					picture: 'apres/tania.jpg',
					isVideo: true,
					sourcev: 'https://player.vimeo.com/progressive_redirect/download/687072868/rendition/360p/tania_full_v%20%28360p%29.mp4?loc=external&signature=c4e1ed5afdebf2cc129242e6ea505128804c8087833e35cc2bc7c15f644ef721', 
					//sourceh: "https://player.vimeo.com/progressive_redirect/playback/686773543/rendition/1080p?loc=external&signature=46be253a9f0c90238c4e8b0a5af911951202a09e1dca75f93e7c87697480c9e2",
					vimeo: 'https://player.vimeo.com/video/686773543?h=09bf05c5cd',
					controls: true,
					overlay: false,
					hidden: false
				},
				{ 
					hasQuote: 'Jacques Gerber',
					quoteAuth: "ministre jurassien de l'Économie et de la Santé, Delémont",
					picture: 'apres/jacques.jpg',
					isVideo: true,
					sourcev: "https://player.vimeo.com/progressive_redirect/download/688387060/rendition/360p/jacques_full_v%20%28360p%29.mp4?loc=external&signature=f74eff142c6f7681f333470daecde6c1d75676ab3292f1491d4af97bc4a1ca24", 
					//sourceh: null,
					vimeo: 'https://player.vimeo.com/video/688386366?h=5384f46e46',
					controls: true,
					overlay: false,
					hidden: false
				},
				{ 
					hasQuote: 'Samia Hurst',
					quoteAuth: 'Bioéthicienne, Genève',
					picture: 'apres/samia.jpg',
					isVideo: true,
					sourcev: "https://player.vimeo.com/progressive_redirect/download/688294442/rendition/360p/samia_full_v%20%28360p%29.mp4?loc=external&signature=7f020a67021a6c15f53636e0f4e276b14ccf8bbbefd9032dd7a85a8de6687f33", 
					//sourceh: 'https://player.vimeo.com/progressive_redirect/download/688294816/rendition/1080p/samia_full%20%281080p%29.mp4?loc=external&signature=c9077c3adf351ab6026e3d5b64d28b2bd110b63619b59ab5dbd666c0d4cbed31',
					vimeo: 'https://player.vimeo.com/video/688294816?h=7ab8ad4786',
					controls: true,
					overlay: false,
					hidden: false
				},
				{ 
					hasQuote: 'Claudia Giorgis',
					quoteAuth: 'Épicière, Cortaillod',
					picture: 'apres/giorgis.jpg',
					isVideo: true,
					sourcev: "https://player.vimeo.com/progressive_redirect/download/687037127/rendition/360p/giorgis_full_v%20%28360p%29.mp4?loc=external&signature=5300cfb78c4c9a83ca81bcb20916ae44057c6b6f3dc2098b2ecbdf33fd436baa", 
					//sourceh: "https://player.vimeo.com/progressive_redirect/download/685779538/rendition/1080p/giorgis_full%20%281080p%29.mp4?loc=external&signature=0756177c42be35d4aa91fd02b7a67c13fbf1910d7c2ffa5906ce0a6caab7c15a",
					vimeo: 'https://player.vimeo.com/video/685779538?h=2afe540713',
					controls: true,
					overlay: false,
					hidden: false,
				}
				
			
				
	];

	


	


	//.prop('disabled', true);


	//console.log(data);

    buildMainSlider(data);
    function buildMainSlider(data){
        var source   = $("#slide-template").html();
        var template = Handlebars.compile(source);
        var html = template({'slide':data});
        $(".swiper-wrapper").html(html); 

  //       $('.swiper-slide').on('mouseenter', function(){
		// 	$(this).find('.videothumb').get(0).play();
		// });

		// $('.swiper-slide').on('mouseout', function(){
		// 	$(this).find('.videothumb').get(0).pause();
		// });
    }


    

    if ($(window).width() > 1215)
	{
		
		// const test = 'pd';
		// var inited = 'connard';
		//console.log('1215' + $(window).width());
		// console.log(test);
		// console.log(inited);
		
		videoOverlay = $('.video-overlay');
		//iframe = videoOverlay.find('iframe');
		// var video = videoOverlay.find('video').get(0);
		// video.play(); 

		$('.swiper-slide').on('click', function(){
			$('iframe').attr('src', $(this).attr('data-vimeo'));
			videoOverlay.show();
				
		});

		$(videoOverlay).on('click', function(){
		
			videoOverlay.hide();
			$('iframe').attr('src', null);
			// video.pause(); 
				
		});



		 // POUR LE DESKTOP
	    var swiper = new Swiper(".swiper-main", {
	        slidesPerView: 5,
	        grid: {
	          rows: 2,
	        },
	        spaceBetween: 30,
	        pagination: {
	          el: ".swiper-pagination",
	          clickable: true,
	        },
	    });
	}   
	if ($(window).width() < 1215)
	{
		$('.swiper-container').hide();
		
		//console.log('pas 1215' + $(window).width());
		
		// POUR LE MOBILE
		const swiper = new Swiper('.swiper-main', {
		  direction: 'horizontal',
		  slidesPerView: "auto",
	      centeredSlides: true,
	      paceBetween: 300,
	      loop: true,
		  loop: false,
		  pagination: {
		    el: '.swiper-pagination',
		  },
		  navigation: {
		    nextEl: '.swiper-button-next',
		    prevEl: '.swiper-button-prev',
		  },
		  scrollbar: {
		    el: '.swiper-scrollbar',
		  },
		  mousewheel: {
		    invert: false,
		  },
		  on: {
		    activeIndexChange: function () {
		    	stopTheVid(swiper.previousIndex);
		    	activateTheVid(swiper.activeIndex);
		    	
		    	//console.log(swiper.activeIndex);
		    },
		  },
		});

		activateTheVid(swiper.activeIndex); 
	} 
   

    


	


	function stopTheVid(previousIndex) {
		if(previousIndex >= 0) {
			var slide = $('#slide' + previousIndex);
			var video = slide.find('video').get(0);
			var playBtnBig = slide.find('.picto-play-big');
			var picture = slide.find('.picture');
			var blockquote = slide.find('blockquote');
			var btnPlay = slide.find('.btn-play');

			$('#slide' + previousIndex).unbind();

			if (video){
				var player = videojs(video);
				player.currentTime(0);
				player.pause();
				playBtnBig.hide();
				//player.muted(true);
				picture.fadeIn();
				blockquote.fadeIn();
				btnPlay.fadeIn();
			}
		}
		$('.picture').fadeIn(1000);

	}

	function activateTheVid(activeIndex){
		var slide = null;
		var slide = $('#slide' + activeIndex);
		var video = slide.find('video').get(0);
		var playBtn = slide.find('.btn-play');
		var playBtnBig = slide.find('.picto-play-big');
		var picture = slide.find('.picture');
		var blockquote = slide.find('blockquote');
		var btnPlay = slide.find('.btn-play');
		var isPlaying = false;

		var vjsTech = slide.find('.vjs-tech');

		//console.log(video);

		if(video) {
			var player = videojs(video);
			//player.play();
			//console.log('lol');
			slide.on('touchstart', function(e){
				//console.log('isPlaying:' + isPlaying);
				//console.log('index:' + activeIndex);
				if (isPlaying)
				{
					player.pause();
					isPlaying = false;
					playBtnBig.show();
				}
				else
				{
					player.play();
					isPlaying = true;
					//pictureOut(swiper.previousIndex);
					picture.fadeOut();
					blockquote.fadeOut();
					btnPlay.fadeOut();
					playBtnBig.hide();


					// vjsTech.on('click', function(){

					// 	alert('coucou');
					// });

				}
				
			});



			var btnSound = slide.find('.btn-sound');
			var btnReset = slide.find('.btn-reset');

			if (!btnSound.hasClass('already-fixed')) {
				btnSound.addClass('already-fixed');
				btnSound.on('click', function(){
					if (player.muted()) {
						player.muted(false);
					}else{
						player.muted(true);
					}
				});
			}

			if (!btnReset.hasClass('already-fixed')) {
				btnReset.addClass('already-fixed');
				btnReset.on('click', function(){
					player.currentTime(0);
					player.play();
				});
			}
		}
	}

	$('.credits').hide();

	$('.btn-credits.visible-m').on('touchstart', function(){
		$(this).fadeOut();
		$('.credits').fadeIn();
		$('.btn-credits-visible-m').fadeOut();
		$('.swiper-container').fadeOut();
	});

	$('.btn-close-credits.visible-m').on('touchstart', function(){
		$('.credits').fadeOut();
		$('.swiper-container').fadeIn();
		$('.btn-credits.visible-m').fadeIn();
		e.preventDefault();	
	});



	$('.btn-credits.visible-d').on('click', function(){
		$(this).fadeOut();
		$('.credits').fadeIn();
		$('.swiper-container').fadeOut();
	});

	

	$('.btn-close-credits.visible-d').on('click', function(){
		$('.credits').fadeOut();
		$('.swiper-container').fadeIn();
		$('.btn-credits').fadeIn();
		e.preventDefault();	
	});
	
	$('.btn-close-intro').on('touchstart', function(){
		$('.intro').fadeOut();
		$('.swiper-container').fadeIn();
			
	});


	// var swiper2 = new Swiper(".swipper-nina-horizontal2", {
	//         direction: "horizontal",
	//         spaceBetween: 0,
	//         pagination: {
	//           el: ".swiper-pagination",
	//           clickable: true,
	//         },
	// });

	// var swiper3 = new Swiper(".mySwiper", {
	//         slidesPerView: 3,
	//         spaceBetween: 30,
	//         freeMode: true,
	//         pagination: {
	//           el: ".swiper-pagination",
	//           clickable: true,
	//         },
	// });

	setTimeout(function() { 
        $('.overlay').fadeOut();
    }, 3000);
	

})(jQuery, videojs);