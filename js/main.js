(function($, videojs){

	// NINA
	// data = [
	// 				{ 
	// 					isCredits: true,
	// 					hSliderChildren :
	// 					[
	// 						{
	// 							text: 'Nina',
	// 							img: 'nina-others.png'
	// 						},
	// 						{
	// 							text: 'Nina',
	// 							img: 'nina-others.png'
	// 						},
	// 						{
	// 							text: 'Nina',
	// 							img: 'nina-others.png'
	// 						},
	// 						{
	// 							text: 'Nina',
	// 							img: 'nina-others.png'
	// 						}
							
	// 					]						
	// 				},
	// 				{ 
	// 				hasEpTitle: '- Episode 1 -',
	// 				hasBigTitle: 'Nina',
	// 				hasText: "12 ans, collégienne, Lausanne",
	// 				isVideo: true,
	// 				autoplay: true,
	// 				loop: true,
	// 				source: "https://player.vimeo.com/external/560832546.sd.mp4?s=7d7fcaf1b012d2d749f62bb927b1670a2d1b1ba3&profile_id=164",
	// 				sourceHd: "https://player.vimeo.com/external/560832546.hd.mp4?s=dea3d2289de7499bddf74c812eb3221642a48862&profile_id=174", 
	// 				controls: false,
	// 				overlay: true ,
	// 			},
	// 			{ 
	// 				hasQuote: 'Moi ce que jaime bien des fois, cest aller manger des glaces',
	// 				quoteAuth: '- Nina',
	// 				hasGradient: true,
	// 			},
	// 			{ 
	// 				hasQuote: 'Moi ce que jaime bien des fois, cest aller manger des glaces',
	// 				quoteAuth: '- Nina',
	// 				hasImgBg: 'placeholder-ice.jpg',
	// 				overlay: true
	// 			},
	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/555710878.sd.mp4?s=898e1aff51e841b9cecd071cfb8be9c9100ec9f7&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/555710878.hd.mp4?s=8ac4e00239f9845a96b4134ea2891678a6e939bc&profile_id=174",
	// 				controls: true,
	// 				overlay: false,
	// 			},
	// 			{ 
	// 				hasChapterNo: '- Chapitre 1 -',
	// 				hasChapterTitle: "L'amitié",
	// 				hasText: false,
	// 				isVideo: true,
	// 				autoplay: true,
	// 				loop: true,
	// 				source: "https://player.vimeo.com/external/559844885.sd.mp4?s=5b93967d16736c7800272fc12937879b2ef543c4&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/559844885.hd.mp4?s=e5ecadad4e95fc717ab69db16829e8866cfd8cd6&profile_id=174",
	// 				overlay: true,
	// 			},
	// 			{ 
	// 				hasText: 'Echange whatsapp ici a accepté de payer <span>11 millions de dollars</span> pour se débarrasser d’un «ransomware»',
	// 				hasImgBg: 'placeholder.jpg'
	// 			},
	// 			{ 
	// 				hasText: "Alors que l’hésitation vaccinale touche 30 et 40% de la population, les nouveaux vaccins tendent parfois les conversations entre proches.",
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/559844537.sd.mp4?s=bfaea2d66b65a8d86fb38008a5c9ab420b3f51f5&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/559844537.hd.mp4?s=a28869aabc1277f16674beb6ccaf422fe3a434aa&profile_id=174",
	// 				controls: true
	// 			},
	// 			{ 
	// 				hasText: "nina-copines.mp4",
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/559844498.sd.mp4?s=83a82e9a56f29233a482861427895c2c3befaff0&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/559844498.hd.mp4?s=4680ca841031826feb11aa40eb3a663c9bd7ee66&profile_id=174"
	// 			},
	// 			{ 
	// 				hasText: "nina-vocaux.mp4",
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/559844399.sd.mp4?s=49bce8ec98a6a049fc5a1a9ae563aa89d344ee4f&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/559844399.hd.mp4?s=7fbd1d84dcc6625946d284f7757fdf83edbe6f8d&profile_id=174",
	// 				controls: true
	// 			},
	// 			{ 
	// 				hasText: "Séquence vocaux ??",
	// 				hasImgBg: 'placeholder.jpg'
	// 			},
	// 			{ 
	// 				hasText: "nina-cousin.jpg et TITRE LAMOUR",
	// 				hasImgBg: 'nina-cousin.jpg',

	// 			},
	// 			{ 
	// 				hasText: "nina-amour-intro.mp4",
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/559844300.sd.mp4?s=70cc9f946edb35d7d28b138deda82c0bfd4cc493&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/559844300.hd.mp4?s=534c26b1f5fe8ba45de8f2524cf82d27ad8da07d&profile_id=174"
	// 			},
	// 			{ 
	// 				hasText: "nina-amour-cousin.jpg",
	// 				hasImgBg: 'nina-amour-cousin.jpg',
	// 				imgContained: true
	// 			},
	// 			{ 
	// 				hasText: "nina-amour-suite.mp4",
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/559844125.sd.mp4?s=95b0824ef04ee59a09e58366efa567bcaabd40c3&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/559844125.hd.mp4?s=de567e962cc2aef0edddf3aa68f88d2de46a5ea7&profile_id=174",
	// 				controls: true
	// 			},
	// 			{ 
	// 				hasText: "nina-lena-situation-nb-final.mp4",
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/559844023.sd.mp4?s=983312747bd5106a8f0d2d81a1a7a9ac217e25bb&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/559844023.hd.mp4?s=014baa5aa1a363942f4ba7449e23190f5bbaf751&profile_id=174",
	// 				controls: true
	// 			},
	// 			{ 
	// 				isHSlider: true,
	// 				hSliderChildren :
	// 					[
	// 						{
	// 							text: 'Pinterest1',
	// 							img: 'nina-pinterest-1.jpg'
	// 						},
	// 						{
	// 							text: 'Pinterest2',
	// 							img: 'nina-pinterest-2.jpg'
	// 						},
	// 						{
	// 							text: 'Pinterest3',
	// 							img: 'nina-pinterest-3.jpg'
	// 						},
	// 						{
	// 							text: 'Pinterest4',
	// 							img: 'nina-pinterest-4.jpg'
	// 						},
	// 						{
	// 							text: 'Pinterest5',
	// 							img: 'nina-pinterest-5.jpg'
	// 						},
	// 					]
	// 			},
	// 			{ 
	// 				isHSlider: true,
	// 				hSliderChildren :
	// 					[
	// 						{
	// 							text: 'Pinterest1',
	// 							img: 'nina-pinterest-1.jpg'
	// 						},
	// 						{
	// 							text: 'Pinterest2',
	// 							img: 'nina-pinterest-2.jpg'
	// 						},
	// 						{
	// 							text: 'Pinterest3',
	// 							img: 'nina-pinterest-3.jpg'
	// 						},
	// 						{
	// 							text: 'Pinterest4',
	// 							img: 'nina-pinterest-4.jpg'
	// 						},
	// 						{
	// 							text: 'Pinterest5',
	// 							img: 'nina-pinterest-5.jpg'
	// 						},
	// 					]
	// 			},
	// 			{ 
	// 				hasText: "nina-youlookcutie.mp4",
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/560846998.sd.mp4?s=01c2912ccfe64834dbed1ef77b612952b847d907&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/560846998.sd.mp4?s=01c2912ccfe64834dbed1ef77b612952b847d907&profile_id=164",
	// 				controls: true
	// 			},
	// 			{ 
	// 				hasText: "nina-routine.mp4",
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/559843880.sd.mp4?s=3ffae248fa82273ba1e7269e6e12c8f0587cb437&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/559843880.hd.mp4?s=250e10d0f4791fbd9245e4918eec2ca7d4f1daa1&profile_id=174",
	// 				controls: true
	// 			},
	// 			{ 
	// 				hasText: "video whatsapp maman",
	// 				hasImgBg: 'placeholder.jpg'
	// 			},
	// 			{ 
	// 				hasText: "Selfie papa/maman TITRE LES PARENTS",
	// 				hasImgBg: 'placeholder.jpg'
	// 			},
	// 			{ 
	// 				hasText: "nina-parents.mp4",
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/559843645.sd.mp4?s=ea560bc157905aa31b6d9de19aa5b6b67287c0c5&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/559843645.hd.mp4?s=bd53b98edbca5e965ddeaf17d550de17e2ca174a&profile_id=174",
	// 				controls: true				
	// 			}		
	// ];



	// 1 SMARTPHONE_EMOI
	data = [
				{ 
					hasQuote: 'Belle Riose',
					quoteAuth: '42 ans, infirmière au CHUV',
					picture: 'apres/miss.png',
					isVideo: true,
					source: "https://player.vimeo.com/progressive_redirect/download/684690844/rendition/540p/2_ga%C3%ABlle_vertical%20%28540p%29.mp4?loc=external&signature=a054df3db78f5484292b84c213279d2f2fc0aa50c4f8ce9253762575f4d2d955", 
					controls: true,
					overlay: false,
					hidden: false,
					lightbox: 'https://vimeo.com/VIDEO'
				},
				{ 
					hasQuote: 'Belle Riose',
					quoteAuth: '42 ans, infirmière au CHUV',
					picture: 'apres/miss.png',
					isVideo: true,
					source: "https://player.vimeo.com/progressive_redirect/download/684690844/rendition/540p/2_ga%C3%ABlle_vertical%20%28540p%29.mp4?loc=external&signature=a054df3db78f5484292b84c213279d2f2fc0aa50c4f8ce9253762575f4d2d955", 
					controls: true,
					overlay: false,
					hidden: false,
					lightbox: 'https://vimeo.com/VIDEO'
				},
				{ 
					hasQuote: 'Belle Riose',
					quoteAuth: '42 ans, infirmière au CHUV',
					picture: 'apres/miss.png',
					isVideo: true,
					source: "https://player.vimeo.com/progressive_redirect/download/684690844/rendition/540p/2_ga%C3%ABlle_vertical%20%28540p%29.mp4?loc=external&signature=a054df3db78f5484292b84c213279d2f2fc0aa50c4f8ce9253762575f4d2d955", 
					controls: true,
					overlay: false,
					hidden: false
				},
				{ 
					hasQuote: 'Belle Riose',
					quoteAuth: '42 ans, infirmière au CHUV',
					picture: 'apres/miss.png',
					isVideo: true,
					source: "https://player.vimeo.com/progressive_redirect/download/684690844/rendition/540p/2_ga%C3%ABlle_vertical%20%28540p%29.mp4?loc=external&signature=a054df3db78f5484292b84c213279d2f2fc0aa50c4f8ce9253762575f4d2d955", 
					controls: true,
					overlay: false,
					hidden: false
				},
				{ 
					hasQuote: 'Belle Riose',
					quoteAuth: '42 ans, infirmière au CHUV',
					picture: 'apres/miss.png',
					isVideo: true,
					source: "https://player.vimeo.com/progressive_redirect/download/684690844/rendition/540p/2_ga%C3%ABlle_vertical%20%28540p%29.mp4?loc=external&signature=a054df3db78f5484292b84c213279d2f2fc0aa50c4f8ce9253762575f4d2d955", 
					controls: true,
					overlay: false,
					hidden: false
				},
				{ 
					hasQuote: 'Belle Riose',
					quoteAuth: '42 ans, infirmière au CHUV',
					picture: 'apres/miss.png',
					isVideo: true,
					source: "https://player.vimeo.com/progressive_redirect/download/684690844/rendition/540p/2_ga%C3%ABlle_vertical%20%28540p%29.mp4?loc=external&signature=a054df3db78f5484292b84c213279d2f2fc0aa50c4f8ce9253762575f4d2d955", 
					controls: true,
					overlay: false,
					hidden: false
				},
				{ 
					hasQuote: 'Belle Riose',
					quoteAuth: '42 ans, infirmière au CHUV',
					picture: 'apres/miss.png',
					isVideo: true,
					source: "https://player.vimeo.com/progressive_redirect/download/684690844/rendition/540p/2_ga%C3%ABlle_vertical%20%28540p%29.mp4?loc=external&signature=a054df3db78f5484292b84c213279d2f2fc0aa50c4f8ce9253762575f4d2d955", 
					controls: true,
					overlay: false,
					hidden: false
				},
				{ 
					hasQuote: 'Belle Riose',
					quoteAuth: '42 ans, infirmière au CHUV',
					picture: 'apres/miss.png',
					isVideo: true,
					source: "https://player.vimeo.com/progressive_redirect/download/684690844/rendition/540p/2_ga%C3%ABlle_vertical%20%28540p%29.mp4?loc=external&signature=a054df3db78f5484292b84c213279d2f2fc0aa50c4f8ce9253762575f4d2d955", 
					controls: true,
					overlay: false,
					hidden: false
				},
				{ 
					hasQuote: 'Belle Riose',
					quoteAuth: '42 ans, infirmière au CHUV',
					picture: 'apres/miss.png',
					isVideo: true,
					source: "https://player.vimeo.com/progressive_redirect/download/684690844/rendition/540p/2_ga%C3%ABlle_vertical%20%28540p%29.mp4?loc=external&signature=a054df3db78f5484292b84c213279d2f2fc0aa50c4f8ce9253762575f4d2d955", 
					controls: true,
					overlay: false,
					hidden: false
				},
				{ 
					hasQuote: 'Belle Riose',
					quoteAuth: '42 ans, infirmière au CHUV',
					picture: 'apres/miss.png',
					isVideo: true,
					source: "https://player.vimeo.com/progressive_redirect/download/684690844/rendition/540p/2_ga%C3%ABlle_vertical%20%28540p%29.mp4?loc=external&signature=a054df3db78f5484292b84c213279d2f2fc0aa50c4f8ce9253762575f4d2d955", 
					controls: true,
					overlay: false,
					hidden: false
				}
				// { 
				// 	isVideo: true,
				// 	autoplay: true,
				// 	source: "https://player.vimeo.com/external/636026760.sd.mp4?s=3ac84ba9307dbc52110345cda004e1e23b0f5dff&profile_id=164", 
				// 	sourceHd: "https://player.vimeo.com/external/636026760.sd.mp4?s=3ac84ba9307dbc52110345cda004e1e23b0f5dff&profile_id=164",
				// 	controls: true,
				// 	overlay: false,
				// },
				// { 
				// 	isVideo: true,
				// 	autoplay: true,
				// 	source: "https://player.vimeo.com/external/636027301.sd.mp4?s=ee8abdb0a9aacb87aa36890bde25e171ab0ea3bc&profile_id=164", 
				// 	sourceHd: "https://player.vimeo.com/external/636027301.sd.mp4?s=ee8abdb0a9aacb87aa36890bde25e171ab0ea3bc&profile_id=164",
				// 	controls: true,
				// 	overlay: false,
				// },
				// { 
				// 	isVideo: true,
				// 	autoplay: true,
				// 	source: "https://player.vimeo.com/external/636027839.sd.mp4?s=1a1e3636f170f85901918a19440a68e52af25acf&profile_id=164", 
				// 	sourceHd: "https://player.vimeo.com/external/636027839.sd.mp4?s=1a1e3636f170f85901918a19440a68e52af25acf&profile_id=164",
				// 	controls: true,
				// 	overlay: false,
				// },
				// { 
				// 	isVideo: true,
				// 	autoplay: true,
				// 	source: "https://player.vimeo.com/external/636028211.sd.mp4?s=fc767a38f0d3ae9271528bc3c2a24a7dcf63f72d&profile_id=164", 
				// 	sourceHd: "https://player.vimeo.com/external/636028211.sd.mp4?s=fc767a38f0d3ae9271528bc3c2a24a7dcf63f72d&profile_id=164",
				// 	controls: true,
				// 	overlay: false,
				// },
				// { 
				// 	isVideo: true,
				// 	autoplay: true,
				// 	source: "https://player.vimeo.com/external/636028496.sd.mp4?s=487665c03360ce36b22f5afe758e40137b0da7ff&profile_id=164", 
				// 	sourceHd: "https://player.vimeo.com/external/636028496.sd.mp4?s=487665c03360ce36b22f5afe758e40137b0da7ff&profile_id=164",
				// 	controls: true,
				// 	overlay: false,
				// },
				// { 
				// 	isVideo: true,
				// 	autoplay: true,
				// 	source: "https://player.vimeo.com/external/636028516.sd.mp4?s=0dec0b228cd3358e6ea31f3eedc7478c401123f3&profile_id=164", 
				// 	sourceHd: "https://player.vimeo.com/external/636028516.sd.mp4?s=0dec0b228cd3358e6ea31f3eedc7478c401123f3&profile_id=164",
				// 	controls: true,
				// 	overlay: false,
				// },
				// { 
				// 	hasQuote: 'Ici mon titre',
				// 	quoteAuth: '- Nom',
				// 	hasImgBg: '0_3_4_Lara_Emma_screen.jpeg',
				// 	overlay: true
				// },
				// { 
				// 	isVideo: true,
				// 	autoplay: true,
				// 	source: "https://player.vimeo.com/external/636028585.sd.mp4?s=f069522a2567eeb1a81f3f48429346dd018363d5&profile_id=164", 
				// 	sourceHd: "https://player.vimeo.com/external/636028585.sd.mp4?s=f069522a2567eeb1a81f3f48429346dd018363d5&profile_id=164",
				// 	controls: true,
				// 	overlay: false,
				// },
				// { 
				// 	isVideo: true,
				// 	autoplay: true,
				// 	source: "https://player.vimeo.com/external/636028896.sd.mp4?s=4b71da699a73b24e0ee7994deda4695d4008d57d&profile_id=164", 
				// 	sourceHd: "https://player.vimeo.com/external/636028896.sd.mp4?s=4b71da699a73b24e0ee7994deda4695d4008d57d&profile_id=164",
				// 	controls: true,
				// 	overlay: false,
				// },
				// { 
				// 	hasQuote: 'Ici mon titre',
				// 	quoteAuth: '- Nom',
				// 	hasImgBg: '0_3_8_victor_smartphone_bureau.jpg',
				// 	overlay: true
				// },
				// { 
				// 	isVideo: true,
				// 	autoplay: true,
				// 	source: "https://player.vimeo.com/external/636029730.sd.mp4?s=b11e561ac44ae5bf650ebcd13258aac3a46aba7e&profile_id=164", 
				// 	sourceHd: "https://player.vimeo.com/external/636029730.sd.mp4?s=b11e561ac44ae5bf650ebcd13258aac3a46aba7e&profile_id=164",
				// 	controls: true,
				// 	overlay: false,
				// },
				// { 
				// 	isVideo: true,
				// 	autoplay: true,
				// 	source: "https://player.vimeo.com/external/636029848.sd.mp4?s=95edc55e9bc5510f693b807989c7c370484a4ab2&profile_id=164", 
				// 	sourceHd: "https://player.vimeo.com/external/636029848.sd.mp4?s=95edc55e9bc5510f693b807989c7c370484a4ab2&profile_id=164",
				// 	controls: true,
				// 	overlay: false,
				// },
	];


	// 1 SMARTPHONE_EMOI


	// 2 INSTA & TIKTOK
	// data = [
	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636045879.sd.mp4?s=e3e323301983b74c2b0400d708ca9f60929cd5e8&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636045879.sd.mp4?s=e3e323301983b74c2b0400d708ca9f60929cd5e8&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			},
	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636045978.sd.mp4?s=94f796cf3169981d057978ead1b6f8d898abf6ed&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636045978.sd.mp4?s=94f796cf3169981d057978ead1b6f8d898abf6ed&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			},
	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636046731.sd.mp4?s=68552c417e27a87a4261819c14a01a287245b859&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636046731.sd.mp4?s=68552c417e27a87a4261819c14a01a287245b859&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			},
	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636046736.sd.mp4?s=41caa1f5b6962485dc2f18f97452bccaa644fb25&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636046736.sd.mp4?s=41caa1f5b6962485dc2f18f97452bccaa644fb25&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			},
	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636046932.sd.mp4?s=07533141e01b2942c4d4cf24a5b98ef86e59344f&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636046932.sd.mp4?s=07533141e01b2942c4d4cf24a5b98ef86e59344f&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			},
	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636047337.sd.mp4?s=4521ae6e30df47c1c702080856aaf773c2a89e4d&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636047337.sd.mp4?s=4521ae6e30df47c1c702080856aaf773c2a89e4d&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			},

	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636047607.sd.mp4?s=148e02f792a6fe1ad828177c56f93da1d9e3dfe7&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636047607.sd.mp4?s=148e02f792a6fe1ad828177c56f93da1d9e3dfe7&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			},

	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636048316.sd.mp4?s=e43a542ebb7b1d0ee085ae5013a24a9169299e2b&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636048316.sd.mp4?s=e43a542ebb7b1d0ee085ae5013a24a9169299e2b&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			},
	// ];

	// 3 R U IN LOVE ?
	// data = [
	// 			{ 
	// 				hasQuote: 'Ici mon titre',
	// 				quoteAuth: '- Nom',
	// 				hasImgBg: '3_0_0_titre_chapitre.jpg',
	// 				overlay: true
	// 			},
	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636056993.sd.mp4?s=85c4b65765b7e3762e6e1e12f56808be1099955b&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636056993.sd.mp4?s=85c4b65765b7e3762e6e1e12f56808be1099955b&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			},
	// 			{ 
	// 				hasQuote: 'Ici mon titre',
	// 				quoteAuth: '- Nom',
	// 				hasImgBg: '3_0_2_amour_cousin.jpg',
	// 				overlay: true
	// 			},
	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636057563.sd.mp4?s=c707a27aedefca5004bf51c516b86893bc8624fc&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636057563.sd.mp4?s=c707a27aedefca5004bf51c516b86893bc8624fc&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			},
	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636058688.sd.mp4?s=75952aafea3efd3f26455a1930cabe3962d682d0&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636058688.sd.mp4?s=75952aafea3efd3f26455a1930cabe3962d682d0&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			},
	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636058821.sd.mp4?s=03da622b5231fc9c82c949d4222345789db97531&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636058821.sd.mp4?s=03da622b5231fc9c82c949d4222345789db97531&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			},
	// 			{ 
	// 				hasQuote: 'Ici mon titre',
	// 				quoteAuth: '- Nom',
	// 				hasImgBg: '3_1_2_whatsapp.jpeg',
	// 				overlay: true
	// 			}
	// ];

	// 4 TUER LE TEMPS
	// data = [
	// 			{ 
	// 				hasQuote: 'Ici mon titre',
	// 				quoteAuth: '- Nom',
	// 				hasImgBg: '4_0_0_Victor_smartphone_homescreen2.jpg',
	// 				overlay: true
	// 			},
	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636067763.sd.mp4?s=ffd3c7c2d1a90d395ab8235937bb072d6bd7ffaf&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636067763.sd.mp4?s=ffd3c7c2d1a90d395ab8235937bb072d6bd7ffaf&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			},
	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636068230.sd.mp4?s=3f380700ffcc7db3e7b73dffc8197c01b8146bc3&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636068230.sd.mp4?s=3f380700ffcc7db3e7b73dffc8197c01b8146bc3&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			},
	// 			{ 
	// 				hasQuote: 'Ici mon titre',
	// 				quoteAuth: '- Nom',
	// 				hasImgBg: '4_1_0_0_Alicia_calendar.jpeg',
	// 				overlay: true
	// 			},
	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636070176.sd.mp4?s=213ba6c2bba0d453010b7db7f792cc7b84b2ab53&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636070176.sd.mp4?s=213ba6c2bba0d453010b7db7f792cc7b84b2ab53&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			},
	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636070501.sd.mp4?s=8e79c47011dcc84bf1d6a9679d222201fb0e4f6c&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636070501.sd.mp4?s=8e79c47011dcc84bf1d6a9679d222201fb0e4f6c&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			},
	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636071206.sd.mp4?s=558c32cd6ba7c82e0b1e171e58575be8029112f1&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636071206.sd.mp4?s=558c32cd6ba7c82e0b1e171e58575be8029112f1&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			},
	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636071749.sd.mp4?s=551f1e8e370014eb2bdcfae2e6378bc99eb6f4bb&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636071749.sd.mp4?s=551f1e8e370014eb2bdcfae2e6378bc99eb6f4bb&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			},
	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636072146.sd.mp4?s=14b3c0ba63efc3f3d163d0af5ce6d67fccfbeb40&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636072146.sd.mp4?s=14b3c0ba63efc3f3d163d0af5ce6d67fccfbeb40&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			},
	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636072670.sd.mp4?s=dfe0c7bf6032620a09e6ea04884c096772d9c0bf&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636072670.sd.mp4?s=dfe0c7bf6032620a09e6ea04884c096772d9c0bf&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			}
	// ];

	// 5 LES VOCAUX
	// data = [
				
	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636082103.sd.mp4?s=81e58087b76a5ad408a66ed7ca9cd3bcfaa758ed&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636082103.sd.mp4?s=81e58087b76a5ad408a66ed7ca9cd3bcfaa758ed&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			},
	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636082738.sd.mp4?s=13a30c46150203857c44d0cd65fcf686f5108b7f&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636082738.sd.mp4?s=13a30c46150203857c44d0cd65fcf686f5108b7f&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			},
	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636083542.sd.mp4?s=85c8c47b1e1ef6c9919a5e15cf08955eebe999f4&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636083542.sd.mp4?s=85c8c47b1e1ef6c9919a5e15cf08955eebe999f4&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			},
	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636083640.sd.mp4?s=feb1c9d8b5784c9e23de7e4376615085e36091b3&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636083640.sd.mp4?s=feb1c9d8b5784c9e23de7e4376615085e36091b3&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			},
	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636083842.sd.mp4?s=d0d2fa27c358a13c5f2cb74f3d45b0a1394e4c8e&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636083842.sd.mp4?s=d0d2fa27c358a13c5f2cb74f3d45b0a1394e4c8e&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			},
	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636084770.sd.mp4?s=455a84cfdbdcecda07cbccd607311f19528675dd&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636084770.sd.mp4?s=455a84cfdbdcecda07cbccd607311f19528675dd&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			}
	// ];

	// 6 MES DARONS
	// data = [
				
	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636092122.sd.mp4?s=6bc219ca62e4a645d33866a543ecd794f711214b&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636092122.sd.mp4?s=6bc219ca62e4a645d33866a543ecd794f711214b&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			},
	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636092229.sd.mp4?s=c4178fcf46bddaac7c0bdb8a8ac53ce7a157d4ac&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636092229.sd.mp4?s=c4178fcf46bddaac7c0bdb8a8ac53ce7a157d4ac&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			},
	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636092545.sd.mp4?s=c5b07d521c0e2c633db41984d77268424ab0bec2&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636092545.sd.mp4?s=c5b07d521c0e2c633db41984d77268424ab0bec2&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			},
	// 			{ 
	// 				isVideo: true,
	// 				autoplay: true,
	// 				source: "https://player.vimeo.com/external/636093807.sd.mp4?s=86415f80553f148fb4f13ee47699656fa605e137&profile_id=164", 
	// 				sourceHd: "https://player.vimeo.com/external/636093807.sd.mp4?s=86415f80553f148fb4f13ee47699656fa605e137&profile_id=164",
	// 				controls: true,
	// 				overlay: false,
	// 			}			
	// ];


	


	//.prop('disabled', true);


	console.log(data);

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

    if ($(window).width() > 1600)
	{

		videoOverlay = $('.video-overlay');
		// var video = videoOverlay.find('video').get(0);
		// video.play(); 

		$('.swiper-slide').on('click', function(){
			$('iframe').attr('src', 'https://player.vimeo.com/video/684690844?h=cae35233af');
			videoOverlay.show();
				
		});

		$(videoOverlay).on('click', function(){
		
			videoOverlay.hide();
			$('iframe').attr('src', 'null');
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
	else
	{

		activateTheVid(swiper.activeIndex);
		// POUR LE MOBILE
		const swiper = new Swiper('.swiper-main', {
		  direction: 'horizontal',
		  slidesPerView: "auto",
	      centeredSlides: true,
	      paceBetween: 300,
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
		    	
		    	console.log(swiper.activeIndex);
		    },
		  },
		});
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



		if(video) {
			var player = videojs(video);
			//player.play();
			slide.on('click', function(){
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


	

})(jQuery, videojs);