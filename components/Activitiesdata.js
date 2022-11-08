const data = [
  {
    id: 1,
    heading: "Skiing & Snowboarding in Gulmarg",
    address: "Gulmarg, Baramulla",
    img: "http://www.gulmargski.in/wp-content/uploads/2018/10/Gulmarg-4-Days-Skiing-Package.jpg",
    overview:
      "Gulmarg Ski Resort is located in Jammu and Kashmir (India). For skiing and snowboarding, there are 30 kms of slope available along with cable cars (gondola) and lifts. The winter sports area is situated between the elevations of 2,600 and 3,950 m above sea level. Rated one of the Top Tier Ski Resorts in the world, because of good reasons, Gulmarg Ski Resort offers you flexible Skiing & Snowboarding Packages so that you focus on your sport while we take care of:",
    list: [
      "Skiing in Gulmarg",
      "Air Ticketing",
      "Car Rentals",
      "Hotels",
      "Ski Pass",
      "Ski Gear Rentals",
      "Instructors",
      "Guides",
      "Coffee Shops",
      "Personal Assistance",
    ],
    included: [
      "Hotel",
      "Ski Pass",
      "Gondola Pass",
      "Cab Transfers (Hotel - Destination)",
    ],
    excluded: ["Airfare", "Lunch", "Pony Ride", "Guide", "Entrance Tickets"],
    questions: {
      question: "What if I don't know how to Ski and don't own any Ski Gear?",
      question: "Is Skiing in Gulmarg safe?",
    },

    answer: [
      {
        answer:
          "Ski Instructors in Gulmarg hand walk you through different steps of training while ensuring your safety at every point. Also, Ski Gear of different sizes and preferences is readily available for renting and purchasing.",
        answer:
          "Skiing in Gulmarg is Safe as Heavens with our Ski Patrol officers taking extra measures round the clock for Skiers safety.",
      },
    ],
  },

  {
    id: 2,
    heading: "River Rafting",
    address: "Kashmir, India",
    overview:
      "anyGET ALL THE INFORMATION YOU NEED ABOUT RIVER RAFTING IN KASHMIR AND ADD IT TO YOUR TOUR OR BOOK DIRECTLY. RIVER RAFTING IN PAHALGAM River rafting in Pahalgam is popular in the River Lider that stretches from Langabal to Ganeshpora covering approximately 12 kms and having rapids ranging from Grade I to Grade IV. The stretch is further divided into three lengths.",
    img: "data:image/jpeg;base64,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",

    list: [
      "The Lider Joy Ride, 2.5 kms, having rapids ranging up to III, is ideal for beginners and amateurs.",
      " The Lider Long Ride, 5 kms, having rapids ranging up to III, is also ideal for beginners.",
      "The Lider Xtra Long Ride, 12 kms, having rapids ranging up to IV, is perfect for experts.",
    ],
    overview:
      "RIVER RAFTING IN SONMARG River Sind in Sonmarg is another destination where one can go for white water river rafting in Kashmir. The untamed river Sind that gushes past spectacular mountains is having rapids ranging from II to IV and is also divided into three lengths.",
    list: [
      "The Sind Joy Ride, 3.5 kms, having rapids ranging up to II, is ideal for beginners and amateurs.",
      "The Sindh Long Ride, 7 kms, having rapids ranging up to II, is ideal for beginners and amateurs.",
      "Sind Extra Long Ride, 24 kms, is having rapids ranging from II to IV and thus perfect for experts.",
    ],
    included: ["Safety Gear", "Instructor"],
    excluded: ["Go-Pro & Drone Footage (book separately)"],
    questions: {
      question: "Is river rafting in kashmir safe??",
    },

    answer: [
      {
        answer:
          "Kashmir Tourism has posted experienced patrol officers along the route to ensure safety of tourists and each ride is accompanied by a rafting expert who is the captain of your adventure boat that twists and turns in whirlpools of the river.",
      },
    ],
  },

  {
    id: 3,
    heading: "Hiking & Camping Trips",
    address: "Jammu & Kashmir, India",
    overview:
      "You think it’s noisy out there in the city and your soul is yearning for a Outdoor Adventure in Kashmir & Ladakh. We’ll put all of that noise on a mute and take you away to the roads less travelled. Camping, Hiking, and Trekking go hand in hand with our diverse Adventure Trips. We take you to mountains, trials, meadows, rivers, lakes, and forests of different tastes. Tour durations ranging from 2 day short trips to 3 months meditation stays. Yes, you read that right, Multi Destinations will arrange a 3 months stay for you in the middle of mountains. So you are far away from civilisation and we make all the essentials available to you. Choose from our popular Offbeat Adventure Trips:",
    img: "https://www.tourmyindia.com/states/jammu-kashmir/image/camping-jk.jpg",
    list: [
      " Kashmir Great Lakes Trek: 40 kms trek taking you through Trund Kul – Nund Kul – Haramuk – Gadsar – Vishansar – Kishansar – Sonmarg for a week long hike.",
      "Gangbal Lake Trek: 2o kms trek taking you through Naranaag – Trund Kull – Nund Kul – Gangbal for 5 days.",
      "Tarsar Marsar Lakes: the distance depends on the routes customers choose and the trek takes you through Aru Valley – Laderwath, Shekwas – Tarsar – Marsar for 4 days trek.",
      "VishanSar KishanSar Hike: 16 kms trek taking you through Sonmarg – Nichnai – VishanSar – KishanSar for a 3 day short trek.",
    ],
    included: [
      "camps",
      "sleeping bags",
      "food & water ",
      "trek guide",
      "porters",
      "personal assistance",
      "first aid",
    ],
    excluded: [
      "rucksack",
      "hiking shoes",
      "rain gear",
      "warm layers of clothes (base layer and jacket)",
      "sunscreen & mosquito repellent",
      "headlamps",
      "water bottle for refilling",
      "fishing rods",
      "towels and personal hygiene essentials",
    ],
    questions: {},

    answer: [{}],
  },

  {
    id: 4,
    heading: "Motor Cycle Diaries",
    address: "Jammu & kashmir, India",
    overview:
      "Bike Riding in Ladakh has gained popularity among bike fanatics around the globe and we help you experience that. Let us know that you wish you conquer the great Himalayan terrains on a motorcycle and document it while on the run. Multi Destinations is at your service to help you rent Motorcycles (Muscle or Sports). You can also rent image and video recording devices like Go Pro and Drones. Handcraft a Motor Cycle voyage that makes you a complete rider. For every rider who wants to challenge their own limits, none but Ladakh appeals them. Also called the ‘Land of High Passes’, because this part of the country is bestowed with towering mountains, fascinating peaks, extremely rugged terrains, barren meadows, and lot more. Owing to all these, Bike Riding in Ladakh proves to be a paradise for those who craves for throttle, dreams for the maximum torque and yearns for a tryst with the exhilarating riding trails. Bikers will find everything that inspires them to ride unitedly. A hand-picked biking expedition. The biking tour passes through some of the most enthralling passes, scenic lakes, magnificent valleys, and remote areas. Bikers will definitely feel the difference between riding through usual terrains and the enchanting locales of Kashmir & Ladakh! Check our Go Pro Video in muddy offroad tracks in Ladakh",
    list: [],
    included: [
      "Hotels at different resting destinations",
      "Bike Rentals",
      "First Aid",
      "Mechanical gear",
    ],
    excluded: [
      "Travel Gear",
      "Travel Utility",
      "Water Proof Clothing",
      "Wind Breaking Jackets",
      "Food & Water",
      "Fuel Supplies",
    ],
    questions: {},

    answer: [{}],
  },

  {
    id: 5,
    heading: "SShikara Ride",
    address: "Srinagar, Jammu & Kashmir, India",
    overview:
      "GA dreamland for everyone who has been lusting for some relaxing moments amidst the breathtaking panorama of nature, Kashmir undeniably comes out on top. And Srinagar is the perfect place to start your trip. Dotted with numerous beautiful sights, the city looks amazing in a canopy of landscaped flowering gardens, crystal clear lakes, magnificent structures and bustling market. Amidst this colourful world lies something sensuous and swift. Shikara, the small wooden carved boat, usually seen at Dal Lake and Nagin Lake of Srinagar, is one of the mesmerizing attractions of the city. Regaining the old world charm, the swift movement of a Shikara provides a unique way to experience the eternal beauty of Kashmir. Considered as a cultural symbol of the region along with houseboats, Shikara rides in Kashmir are one of the most captivating aspects of Jammu and Kashmir tourism. A relaxing ride while enjoying the surrounding views around Dal Lake and Nagin Lake is truly a worthful pleasure. Shikara boat rides are also used for sightseeing attractions that are located close to Dal Lake like Nishat Garden, Shalimar Garden",
    list: [],
    included: [],
    excluded: [],
    questions: {},

    answer: [{}],
  },

  {
    id: 6,
    heading: "Horse Riding",
    address: "Kashmir, India",
    overview:
      "Kashmir, the dazzling beauty of India, is known world-wide for its breathtaking blend of emerald allure (meadows) and soothing white (snow-capped peaks). Casting a spell of magic over this blend are the crystal clear lakes that has propelled Kashmir tourism to new heights. Sightseeing in Kashmir is a major activity that travellers usually prefer to do in the region, but other adventurous and recreational activities offered by the region are also on rise with numerous options available like skiing, trekking, water skiing, fishing, angling, golfing and horse riding. Among all the activities, horse riding in Kashmir is something that is enjoyed by almost all travellers. Exploring the beautiful mountain passes and eye-catching countryside on a horse back is a popular activity in the region. Kashmir region of Jammu and Kashmir State is blessed with various pristine destinations like Pahalgam, Srinagar, Gulmarg, Yusmarg, Kokernag and Lolab Valley where tourists can enjoy horse rides.",
    list: [],
    included: [],
    excluded: ["Airfare", "Lunch", "Pony Ride", "Guide", "Entrance Tickets"],
    questions: {},

    answer: [{}],
  },

  {
    id: 7,
    heading: "Jeep Safari",
    address: "Jammu & Kashmir, India",
    overview:
      "To best explore and get a step closer to nature, Jeep Safari in Kashmir is an apt method. It lets one to explore the wilds and trudge to remote yet beautiful places in the valley. In fact it proffers a good opportunity to explore the vast topography and get to the dense forests regions. Kashmir Jeep Safari tour offers adventure seekers a better way to discover the mysteries of the Himalayan region, ranging from the small temples perched upon hill tops to distinct wildlife in dense lush green forests. Where trekking is confined to physically fit people, Jeep Safari enables everyone to enjoy their share of adventure expedition. Jeep Safari holidays solicitadventure and knowledge. Sonmarg, Srinagar Gulmarg, Pahalgam and Yusmarg are the primary destinations that can be covered through Jeep Safari.",
    list: [],
    included: [],
    excluded: ["Airfare", "Lunch", "Pony Ride", "Guide", "Entrance Tickets"],
    questions: {},

    answer: [{}],
  },

  {
    id: 8,
    heading: "Paragliding",
    address: "Srinagar, Jammu & Kashmir, India",
    overview:
      "Paragliding in Kashmir Aero sports activities really are a rage among these going to the Kashmir valley. Among the many aero sports activities, paragliding is probably the most common in Kashmir. Also, it’s 1 of your newest journey sports activities which are choosing up quick within the Kashmir valley. Paragliding normally requires you on the tour of your green valleys and majestic mountains of Kashmir. Searching from over, you’ll locate the sight of your valley virtually breathtaking. You can find several journey clubs in Jammu, Sanasar and Batote that provide paraglidingamenities. paragliding in Kashmir is a popular adventure sport that attracts tourists to Kashmir .At Jammu and Sanasar, correct instruction camps for each paraglidingalso as parasailing are organized. Paragliding equipments are simply offered on the tourist workplace in Jammu as well as the regional companies in Jammu and Sanasar. The very best time forparagliding, specifically in Sanasar, will be the interval of May-June and September-October. Aero sports are a rage amongst those visiting the Kashmir valley. Amongst the numerous aero sports, paragliding is the most popular in Kashmir. Also, it is one of the latest adventure sports that are picking up fast in the Kashmir valley. Paragliding takes you on a tour of the green valleys and majestic mountains of Kashmir. Looking from above, you will find the sight of the valley almost breathtaking. There are a number of adventure clubs in Jammu, Sanasar and Batote that offer paragliding facilities. At Jammu and Sanasar, proper training camps for both paragliding as well as parasailing are organized. Paragliding equipments are easily available at the tourist office in Jammu and the local agencies in Jammu and Sanasar. The best time for paragliding, especially in Sanasar, is the period of May-June and September-October.Paragliding is the latest among the long line of adventure sports facilities to be made available in Kashmir.We offer various kashmir tour package and kashmir budget tours to enjoy paragliding.",
    list: [],
    included: [
      "Instructor",
      "Safety Equipment",
      "Safety measures briefing before paragliding",
    ],
    excluded: ["Go-Pro & Drone footage"],
    questions: {},

    answer: [{}],
  },

  {
    id: 9,
    heading: "Scuba Diving in Andaman Islands",
    address: "Andaman and Nicobar Islands, India",
    overview:
      "Scuba diving is the greatest action on the Andaman & Nicobar Isles other than relaxing around and tasting the delicacy of seafood. The best year for diving in Andaman & Nicobar Isles is from Nov to April. However, one can indulge in a diving experience all throughout the year. This is one activity in Andaman, that is operational throughout the year. One can see the amazing sea life among the world of awesome water bodies, vibrant fish, and awesome corals. The Indian government takes a serious approach to defend its sea resources. There are many experienced and PADI-certified instructors who can help the divers in exploring various dive sites in the Andaman archipelago. Most of the diving happens in North Bay Island, Port Blair, and Havelock Island. Neil island has started picking up slowly. You also have an option to dive near Barren island, the only active volcano in India. For Advanced diving experience, you need to be open water certified. We have covered various open water courses later in this article. The superior Indian ocean native shorelines promise wonderful scuba diving and scuba diving locations that will leave you completely captivated. The sport of scuba diving can be easily put with actions like marine digital cameras and fish recognition. We do not recommend scuba diving to people with high or low hypertension, pregnant women, heart patient, and others who are under regular doctors advice. You may check with your doctor before availing of Scuba Diving. In India, the experience is a serious business with certification of various levels for the scuba divers. Moving on the steps with route and dedication you can increase from being a beginner scuba diver to a master. Andaman is absolutely wonderful in terms of its diving experience, and we will educate you where to get indulge in your diving experience during your period of stay in the islands. Beginners Diving Experience For Scuba Diving is listed below Now, those who are looking into becoming a professional diver have to go through various certification courses before becoming a professional diver. To start with firstly you will have to certify yourself with an open watercourse. This could be from either of the schools such as PADI/SSI. Both the certifications are valid all throughout the globe with PADI having more precedence over SSI. Once you have completed the Open water course, you can successfully dive at most parts of the globe with the diving card you get after you have cleared the certification. Those who are looking for more advanced experience can indulge in the Advanced Open water course in the Andamans which gives you a certificate to dive freely up to a depth of 30 Metres. You can continue this course further indulge in Emergency First Responder and Later do a Padi Rescue Diver course before you become a Dive Master. A Dive Master is certified to assist any new diver when they dive into open water or when they are doing shore diving.",
    list: [],
    included: [
      "Instructor",
      "Safety Equipment",
      "Safety measures briefing before scuba diving",
    ],
    excluded: [],
    questions: {},

    answer: [{}],
  },

  {
    id: 10,
    heading: "Parasailing in Andaman Islands",
    address: "Andaman and Nicobar Islands, India",
    overview:
      "Parasailing is one of the most thrilling and awaited activities in Andamans. Parasailing in the Andaman Islands first started its operations at Corbyn’s Cove Beach, Port Blair, and also at North Bay Island. This activity gives you a chance to look at the beautiful island from an excellent perspective. All the safety measures to keep you safe and sound during the trip are looked into carefully by the experts. During Parasailing in Andaman, you first get on a boat either at Carbyns or at North Bay. The boat starts its journey and your gear up on the boat with the necessary safety harness. Next, you are slowly let on the sail and in no time you are up in the air witnessing magnificent views on the islands. Parasailing is worth it and you will surely love your experience. Parasailing can also be done at Havelock Island as well. The equipment used during parasailing are well maintained and tested for you to have a smooth time while you are gliding in the air. Once you get up high in the air you get an opportunity to witness the stunning shoreline of the beach and all the attractions that surround you! It is an amazing adrenaline rush activity that you would surely love if you are an adventure buff. Parasailing is safe and all safety aspects are seen before the trip begins. The trip lasts for approximately 30 minutes. Note: This activity is subject to availability and can change based upon weather conditions. This activity is currently operational in Port Blair and Havelock Island.",
    list: [],
    included: [
      "Instructor",
      "Safety Equipment",
      "Safety measures briefing before parasailing",
    ],
    excluded: [],
    questions: {},

    answer: [{}],
  },

  {
    id: 11,
    heading: "Skiing & Snowboarding in Gulmarg",
    address: "Andaman and Nicobar Islands, India",
    overview:
      "Uncover the beauty of the underwater kingdom lying beneath the Andaman Sea, without getting your toes wet. Andaman Dolphin glass-bottom boat ride provides a luxurious window into the mesmerizing world of corals and marine life of Port Blair, from within the comfort  & safety of an international quality speedboat. The Andaman Dolphin glass boat ride experience is very different where you glide with us over the Andaman Sea, explore, and get enchanted by the exotic corals and the rich life underwater. These trips are for those people who do not want to indulge in adventure watersports such as Scuba Diving and Sea Walking. From the Andaman Dolphin boat, you can sit and easily enjoy the beauty of the underwater corals. This trip begins after you arrive at the Andaman water sports complex where you board this high-speed Glass bottom boat to experience the thrilling journey of the Andaman Islands. Board the glass boat and enjoy the ride for 60 minutes before returning to the Andaman water sports complex. Explore the underwater reef without getting wet. This trip can also be done after you reach North Bay Island. We recommend you book this trip in advance as many travelers who don’t wish to do Scuba Diving and Snorkeling are interested in this tour. The activity of Andaman Dolphin is recommended for children and elders.",

    included: ["Guide", "Equipment"],
  },
];
