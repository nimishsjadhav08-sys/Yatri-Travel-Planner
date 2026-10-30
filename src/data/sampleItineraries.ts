import { Itinerary } from '../types';

export const SAMPLE_ITINERARIES: Record<string, Itinerary> = {
  jaipur: {
    id: 'sample-jaipur',
    cityName: 'Jaipur',
    country: 'India',
    tagline: 'The Pink City: Royal Palaces, Hilltop Forts & Vibrant Bazaars',
    overview: 'The capital of Rajasthan is a dazzling tapestry of Rajput architecture, majestic hill forts, and bustling bazaars filled with textiles, block prints, and gems. This 3-day itinerary clusters Amer & Nahargarh, the Old Walled Pink City, and royal cultural landmarks with authentic Rajasthani dining.',
    bestTimeToVisit: 'October–March for pleasant sunny days and cool evenings (avoid intense summer heat).',
    localCurrency: 'Indian Rupee (₹ / INR)',
    language: 'Hindi & Rajasthani (English widely understood in tourism & hospitality)',
    transitTip: 'Uber/Ola autos and cabs are readily available and affordable. The Jaipur Metro connects Mansarovar to Badi Chaupar (near Hawa Mahal). For local auto-rickshaws, negotiate or ensure the meter is used.',
    dailyBudgetEst: '₹2,500 – ₹5,500 INR / day (~$30 – $65 USD, including entry fees, autos & royal thalis)',
    pace: 'Cultured & Vibrant',
    vibe: 'Heritage, Forts & Royal Palaces',
    createdAt: new Date().toISOString(),
    days: [
      {
        dayNumber: 1,
        title: 'Amer Royalty, Stepwell Marvels & Nahargarh Sunset',
        theme: 'Hilltop Fortresses & Rajput Imperial Splendor',
        dayHighlight: 'Golden hour sunset over Jaipur skyline from the ramparts of Nahargarh Fort',
        recommendedNeighborhood: 'Amer & Northern Hills',
        schedule: [
          {
            id: 'j-1-1',
            time: '08:00 AM – 10:45 AM',
            timeOfDay: 'morning',
            activity: 'Amer Fort & Sheesh Mahal (Palace of Mirrors)',
            description: 'Climb up to the imposing hilltop citadel overlooking Maota Lake. Explore grand courtyards, the Diwan-e-Khas, and the breathtaking Sheesh Mahal covered in thousands of concave imported convex mirrors that glitter by candlelight.',
            location: 'Amer Village, Devisinghpura',
            category: 'culture',
            duration: '2.75 hours',
            costEstimate: '₹100 (Indians) / ₹500 (Foreigners)',
            insiderTip: 'Arrive right at 8:00 AM to beat the tour buses and enjoy soft morning light bouncing off the yellow sandstone ramparts.'
          },
          {
            id: 'j-1-2',
            time: '11:00 AM – 12:15 PM',
            timeOfDay: 'morning',
            activity: 'Panna Meena Ka Kund Stepwell & Jagat Shiromani Temple',
            description: 'Visit the 16th-century geometric stepwell with its criss-cross symmetrical stone staircases. Next door, marvel at the intricately carved stone pillars of the Jagat Shiromani Temple dedicated to Lord Krishna and Meera Bai.',
            location: 'Behind Amer Fort, Amer Town',
            category: 'sightseeing',
            duration: '1.25 hours',
            costEstimate: 'Free entry',
            insiderTip: 'Stepwell photography is best from the perimeter; walking down the steps is restricted to protect the ancient stone structure.'
          },
          {
            id: 'j-1-3',
            time: '12:30 PM – 02:00 PM',
            timeOfDay: 'afternoon',
            activity: 'Royal Rajasthani Thali Lunch',
            description: 'Feast on a royal Rajasthani banquet featuring Dal Baati Churma, Gatte ki Sabzi, Ker Sangri, and warm bajra rotis drenched in pure desi ghee.',
            location: '1135 AD inside Amer Fort or heritage restaurants in Amber road',
            category: 'food',
            duration: '1.5 hours',
            costEstimate: '₹800 – ₹1,800 INR',
            insiderTip: 'Ask for the dessert churma varieties (rose, dry fruit, and besan) to balance out the spicy curries.'
          },
          {
            id: 'j-1-4',
            time: '02:30 PM – 04:30 PM',
            timeOfDay: 'afternoon',
            activity: 'Jaigarh Fort & The Legendary Jaivana Cannon',
            description: 'Tour the rugged military fortress connected to Amer through underground secret passages. Admire the Jaivana cannon—once the world’s largest cannon on wheels—and enjoy panoramic views of the Aravalli hills.',
            location: 'Cheel ka Teela (Hill of Eagles), Aravalli Range',
            category: 'sightseeing',
            duration: '2 hours',
            costEstimate: '₹70 (Indians) / ₹150 (Foreigners)',
            insiderTip: 'Walk along the massive stone water catchment channels that engineered sustainable mountain water supply centuries ago.'
          },
          {
            id: 'j-1-5',
            time: '05:00 PM – 07:30 PM',
            timeOfDay: 'evening',
            activity: 'Nahargarh Fort Sunset & Padao Open-Air Cafe',
            description: 'Watch dusk transform Jaipur into a shimmering sea of lights from the high ramparts of Nahargarh Fort. Sip a cool drink while the city below transitions into golden and twilight hues.',
            location: 'Krishna Nagar, Brahampuri',
            category: 'relaxation',
            duration: '2.5 hours',
            costEstimate: '₹50 entry + drinks',
            insiderTip: 'The downhill drive through the winding forest roads after dark can be quiet; pre-book your return auto/cab or take a 2-wheeler.'
          }
        ]
      },
      {
        dayNumber: 2,
        title: 'Hawa Mahal Sunrise, City Palace & Pink City Bazaars',
        theme: 'Historic Walled City, Astronomical Curiosities & Artisan Crafts',
        dayHighlight: 'Early morning coffee on Wind View Cafe rooftop facing Hawa Mahal’s 953 jharokha windows',
        recommendedNeighborhood: 'Old Walled Pink City (Badi Chaupar)',
        schedule: [
          {
            id: 'j-2-1',
            time: '08:00 AM – 09:30 AM',
            timeOfDay: 'morning',
            activity: 'Hawa Mahal (Palace of Winds) & Rooftop Chai',
            description: 'Admire the 5-story pink honeycomb facade built so royal women could observe city festivals unseen. Climb the Wind View Cafe across the street for iconic morning photos against the glowing pink sandstone.',
            location: 'Badi Chaupar, Pink City',
            category: 'culture',
            duration: '1.5 hours',
            costEstimate: '₹50 entry / ₹150 cafe tea',
            insiderTip: 'The morning sun illuminates the exterior directly. Step inside to see the colored glass windows casting rainbow patterns across marble hallways.'
          },
          {
            id: 'j-2-2',
            time: '09:45 AM – 12:30 PM',
            timeOfDay: 'morning',
            activity: 'City Palace Museum & Jantar Mantar Observatory',
            description: 'Walk through the grand Mubarak Mahal and Chandra Mahal within the royal residence of the Maharaja. Then cross to UNESCO-listed Jantar Mantar, housing the world’s largest stone sundial accurate to within two seconds.',
            location: 'Gangori Bazaar, Pink City',
            category: 'culture',
            duration: '2.75 hours',
            costEstimate: '₹200 (City Palace) + ₹50 (Jantar Mantar)',
            insiderTip: 'Hiring an official certified guide at Jantar Mantar is highly recommended to understand how each giant stone instrument tracked planets and zodiacs.'
          },
          {
            id: 'j-2-3',
            time: '12:45 PM – 02:00 PM',
            timeOfDay: 'afternoon',
            activity: 'LMB (Laxmi Mishtan Bhandar) Pyaaz Kachori & Ghewar',
            description: 'Head to Jaipur’s legendary 1727 confectionery. Relish piping hot crispy pyaaz kachoris with tangy tamarind chutney, followed by Paneer Ghewar drizzled with saffron rabdi.',
            location: 'Johari Bazaar, Pink City',
            category: 'food',
            duration: '1.25 hours',
            costEstimate: '₹250 – ₹500 INR',
            insiderTip: 'Get freshly boxed Ghewar to take back; the malai and mawa varieties make world-class edible souvenirs.'
          },
          {
            id: 'j-2-4',
            time: '02:30 PM – 05:30 PM',
            timeOfDay: 'afternoon',
            activity: 'Bazaars of Pink City: Bapu Bazaar & Johari Bazaar',
            description: 'Dive into the vibrant markets: soft hand-block printed Jaipuri quilts (razai) in Bapu Bazaar, traditional Mojari leather footwear, blue pottery, and silver jewelry in Johari Bazaar.',
            location: 'Bapu Bazaar & Johari Bazaar',
            category: 'shopping',
            duration: '3 hours',
            costEstimate: 'Browse free / Shopping budget',
            insiderTip: 'Polite bargaining is customary in open bazaars. Look for the government-approved handloom stamp for authentic pure cotton.'
          },
          {
            id: 'j-2-5',
            time: '06:00 PM – 08:30 PM',
            timeOfDay: 'evening',
            activity: 'Sunset at Jal Mahal & Dinner Overlooking Water Palace',
            description: 'Stroll along the landscaped promenade on the banks of Man Sagar Lake, gazing at the enchanting Jal Mahal floating peacefully in the water as evening floodlights switch on.',
            location: 'Amer Road, Man Sagar Lake',
            category: 'sightseeing',
            duration: '2.5 hours',
            costEstimate: 'Free promenade / ₹600 dinner',
            insiderTip: 'Street vendors sell roasted spiced corn on the cob (bhutta) and masala chai along the promenade—the quintessential evening Jaipur experience.'
          }
        ]
      },
      {
        dayNumber: 3,
        title: 'Albert Hall Museum, Patrika Gate & Block Printing',
        theme: 'Indo-Saracenic Art, Instagram Royalty & Artisan Heritage',
        dayHighlight: 'Strolling through the hand-painted pastel archways of Patrika Gate at morning',
        recommendedNeighborhood: 'Central & Southern Jaipur',
        schedule: [
          {
            id: 'j-3-1',
            time: '08:30 AM – 10:00 AM',
            timeOfDay: 'morning',
            activity: 'Patrika Gate at Jawahar Circle',
            description: 'Marvel at the symmetrical rainbow-colored portico where every arch is hand-painted with murals of royal Rajasthan—from desert caravans and musicians to palace portraits.',
            location: 'Jawahar Circle, Malviya Nagar',
            category: 'sightseeing',
            duration: '1.5 hours',
            costEstimate: 'Free entry',
            insiderTip: 'Arrive by 8:30 AM before families gather, allowing uninterrupted perspective shots down the central corridor of arches.'
          },
          {
            id: 'j-3-2',
            time: '10:30 AM – 11:45 AM',
            timeOfDay: 'morning',
            activity: 'Kulhad Lassi at Lassiwala (Original since 1944)',
            description: 'Stop at MI Road for a legendary clay tumbler (kulhad) of thick, creamy, churned yogurt lassi crowned with a rich layer of clotted malai.',
            location: 'Shop 312, MI Road',
            category: 'food',
            duration: '45 mins',
            costEstimate: '₹80 – ₹100 INR',
            insiderTip: 'Make sure you go to Shop 312 (the original one with the blue sign); they often sell out of lassi by 2:00 PM!'
          },
          {
            id: 'j-3-3',
            time: '12:00 PM – 02:00 PM',
            timeOfDay: 'afternoon',
            activity: 'Albert Hall Museum & Ram Niwas Garden',
            description: 'Rajasthan’s oldest museum is an architectural masterpiece of Indo-Saracenic design. Admire Persian carpets, carved ivory, miniature paintings, and centuries-old royal armory surrounded by flocks of pigeons.',
            location: 'Ram Niwas Garden, Kailash Puri',
            category: 'culture',
            duration: '2 hours',
            costEstimate: '₹40 (Indians) / ₹300 (Foreigners)',
            insiderTip: 'The museum exterior illuminates in vibrant rotating colors every night after 7 PM, creating a majestic nighttime photo opportunity.'
          },
          {
            id: 'j-3-4',
            time: '02:30 PM – 05:00 PM',
            timeOfDay: 'afternoon',
            activity: 'Anokhi Museum of Hand Printing or Blue Pottery Studio',
            description: 'Discover the heritage of wooden block carving and natural vegetable dyes. Watch master block-printers at work and try stamping your own hand-printed scarf or souvenir.',
            location: 'Near Amber / Kripal Kumbh in Banipark',
            category: 'shopping',
            duration: '2.5 hours',
            costEstimate: '₹80 entry',
            insiderTip: 'Jaipur Blue Pottery is unique because it uses quartz stone powder and fuller’s earth rather than regular clay, creating a distinct glassy turquoise finish.'
          },
          {
            id: 'j-3-5',
            time: '06:30 PM – 09:30 PM',
            timeOfDay: 'evening',
            activity: 'Farewell Rooftop Dinner at Baradari or Peacock Rooftop',
            description: 'Celebrate your Jaipur journey with candlelit dining under Rajasthani cupolas, enjoying Laal Maas (spicy Rajasthani smoked mutton curry) or Ker Sangri with fresh roomali rotis.',
            location: 'Hathroi Fort or City Palace Precinct',
            category: 'food',
            duration: '3 hours',
            costEstimate: '₹800 – ₹2,000 INR',
            insiderTip: 'Reserve a table on the upper open-air terrace in advance for panoramic evening views and traditional live sarangi music.'
          }
        ]
      }
    ],
    packingEssentials: [
      'Light breathable cotton clothing for warm daytime exploring',
      'Comfortable slip-on shoes or sandals (easy to take off outside temples and sacred palace halls)',
      'A light scarf or dupatta to cover head and shoulders inside heritage shrines',
      'High SPF sunscreen, UV sunglasses, and a power bank for high phone camera usage'
    ],
    culinaryHighlights: [
      {
        name: 'Dal Baati Churma',
        description: 'Hard wheat flour dough rolls baked over coals, crushed and drenched in hot ghee, served alongside spiced five-lentil dal and sweet powdered jaggery/sugar churma.',
        whereToTry: '1135 AD, Chokhi Dhani, or Laxmi Mishtan Bhandar (LMB)'
      },
      {
        name: 'Pyaaz Kachori & Saffron Ghewar',
        description: 'Flaky golden pastry puffed with spicy onion-gram flour masala, followed by honeycomb disc pastries soaked in saffron sugar syrup and rabdi.',
        whereToTry: 'Rawat Mishtan Bhandar near Station Road or LMB in Johari Bazaar'
      },
      {
        name: 'Laal Maas',
        description: 'Royal Rajasthani slow-cooked tender meat curry infused with fiery Mathania red chilies, garlic, and cloves.',
        whereToTry: 'Handi Restaurant on MI Road or Spice Court in Civil Lines'
      }
    ],
    practicalTips: [
      'Purchase the Composite Ticket at Amer Fort or Hawa Mahal; it covers 8 major monuments over 2 days and saves significant queueing time.',
      'Always remove shoes at temple entrances and place them at designated token counters (a ₹10–₹20 tip is standard).',
      'UPI / QR code payment (Google Pay, PhonePe, Paytm) is ubiquitous across Jaipur from high-end boutiques to roadside chaiwalas.'
    ]
  },

  goa: {
    id: 'sample-goa',
    cityName: 'Goa',
    country: 'India',
    tagline: 'Sun-Kissed Coastlines, Latin Quarters & Susegad Coastal Living',
    overview: 'India’s coastal haven effortlessly blends Portuguese colonial heritage, whitewashed baroque churches, lush spice plantations, and golden sandy beaches. This 3-day itinerary splits between historic Old Goa & Fontainhas Latin Quarter, vibrant North Goa beach shacks, and tranquil South Goa cliffside sunset views.',
    bestTimeToVisit: 'November–February for sunny beach days, pleasant breezes, and open beach shacks.',
    localCurrency: 'Indian Rupee (₹ / INR)',
    language: 'Konkani, English & Hindi (Portuguese roots visible in architecture)',
    transitTip: 'Rent a scooter (₹350–₹500/day) or self-drive car with a valid driving license. For cabs, use the GoaMiles app or hotel-arranged prepaid taxis.',
    dailyBudgetEst: '₹2,500 – ₹6,500 INR / day (~$30 – $80 USD, including scooter rental, beach dining & seafood)',
    pace: 'Relaxed & Susegad',
    vibe: 'Beaches, Heritage & Coastal Serenity',
    createdAt: new Date().toISOString(),
    days: [
      {
        dayNumber: 1,
        title: 'Fontainhas Latin Quarter & Sunset Mandovi Cruise',
        theme: 'Portuguese Heritage, Pastel Alleys & Traditional Goan Flavors',
        dayHighlight: 'Wandering the pastel yellow and Portuguese blue tiled alleys of Fontainhas in Panaji',
        recommendedNeighborhood: 'Panaji (Panjim) & Old Goa',
        schedule: [
          {
            id: 'g-1-1',
            time: '08:30 AM – 10:30 AM',
            timeOfDay: 'morning',
            activity: 'Fontainhas Latin Quarter Heritage Walk',
            description: 'Stroll Asia’s only Latin Quarter, marveling at Portuguese villas with overhanging balconies, red-tiled roofs, and oyster shell windows painted in vibrant ocher, indigo, and terracotta.',
            location: 'Fontainhas, Panaji',
            category: 'culture',
            duration: '2 hours',
            costEstimate: 'Free to explore',
            insiderTip: 'Stop at 31 de Janeiro Bakery for warm Bebinca (traditional 7-layer coconut milk cake) and fresh Pastéis de Nata.'
          },
          {
            id: 'g-1-2',
            time: '11:00 AM – 12:15 PM',
            timeOfDay: 'morning',
            activity: 'Our Lady of the Immaculate Conception Church',
            description: 'Climb the zigzagging white zigzag staircase of this 1609 Baroque landmark rising majestically above the central Panaji square.',
            location: 'Church Square, Panaji',
            category: 'sightseeing',
            duration: '1.25 hours',
            costEstimate: 'Free entry',
            insiderTip: 'The church bell is the second largest in Goa, originally salvaged from the ruins of the Church of St. Augustine in Old Goa.'
          },
          {
            id: 'g-1-3',
            time: '12:30 PM – 02:00 PM',
            timeOfDay: 'afternoon',
            activity: 'Goan Fish Thali & Kokum Solkadhi Feast',
            description: 'Indulge in a classic Goan fish thali with Kingfish Rava fry, crab xacuti, prawn balchão, kismoor (dry shrimp salad), and cooling pink solkadhi.',
            location: 'Mum’s Kitchen, Viva Panjim, or Ritz Classic',
            category: 'food',
            duration: '1.5 hours',
            costEstimate: '₹400 – ₹900 INR',
            insiderTip: 'Pair your meal with freshly baked warm Goan Poi (fermented bran bread) dipped into the rich coconut-tamarind fish curry.'
          },
          {
            id: 'g-1-4',
            time: '02:45 PM – 04:45 PM',
            timeOfDay: 'afternoon',
            activity: 'Basilica of Bom Jesus & Se Cathedral (Old Goa)',
            description: 'Visit the UNESCO World Heritage site holding the mortal remains of St. Francis Xavier in a silver casket, then cross to the colossal Sé Cathedral, one of Asia’s largest churches.',
            location: 'Old Goa (Velha Goa)',
            category: 'culture',
            duration: '2 hours',
            costEstimate: 'Free entry',
            insiderTip: 'Dress modestly with covered shoulders and knees to enter the active cathedral and basilica.'
          },
          {
            id: 'g-1-5',
            time: '05:30 PM – 07:30 PM',
            timeOfDay: 'evening',
            activity: 'Sunset Cruise or Miramar Beach Walk',
            description: 'Board a river cruise along the Mandovi River to catch sunset where the river meets the Arabian Sea, accompanied by traditional Goan folk performances.',
            location: 'Santa Monica Jetty, Mandovi River Promenade',
            category: 'relaxation',
            duration: '2 hours',
            costEstimate: '₹500 – ₹800 INR',
            insiderTip: 'Upper open-deck seats on the 05:45 PM departure offer the best cool breeze and unobstructed sunset photography.'
          }
        ]
      },
      {
        dayNumber: 2,
        title: 'North Goa Coastal Cliffs, Chapora Fort & Sunset Shacks',
        theme: 'Sea Cliffs, Flea Markets & Twilight Beach Shacks',
        dayHighlight: 'Sunset views over the Arabian Sea from the cliffside ramparts of Chapora Fort',
        recommendedNeighborhood: 'Vagator, Anjuna & Morjim',
        schedule: [
          {
            id: 'g-2-1',
            time: '09:00 AM – 11:30 AM',
            timeOfDay: 'morning',
            activity: 'Chapora Fort Clifftop Hike & Red Sandstone Views',
            description: 'Climb the gentle red laterite hill to the 1717 Portuguese fortress made famous by Bollywood classic Dil Chahta Hai. Enjoy sweeping panoramic views over Vagator beach and the Chapora river estuary.',
            location: 'Chapora, Vagator',
            category: 'sightseeing',
            duration: '2.5 hours',
            costEstimate: 'Free entry',
            insiderTip: 'Wear good footwear as the red laterite stone path can be smooth and slippery. Morning breeze makes the hike very comfortable.'
          },
          {
            id: 'g-2-2',
            time: '12:00 PM – 02:00 PM',
            timeOfDay: 'afternoon',
            activity: 'Cliffside Mediterranean or Coastal Lunch',
            description: 'Dine high above Ozran Little Vagator beach with ocean views, enjoying wood-fired pizzas, calamari butter garlic, Greek salads, and tropical passion fruit coolers.',
            location: 'Thalassa, Antares, or Olive Bar & Kitchen Vagator',
            category: 'food',
            duration: '2 hours',
            costEstimate: '₹900 – ₹1,800 INR',
            insiderTip: 'Advance table reservation is strongly recommended if you want first-row cliffside seating facing the sea.'
          },
          {
            id: 'g-2-3',
            time: '02:30 PM – 04:30 PM',
            timeOfDay: 'afternoon',
            activity: 'Anjuna Artisanal Flea Market & Beach Stroll',
            description: 'Explore boho boutiques, handmade seashell jewelry, macramé crafts, printed resortwear, and live acoustic music in Anjuna.',
            location: 'Anjuna Beachfront',
            category: 'shopping',
            duration: '2 hours',
            costEstimate: 'Browse free',
            insiderTip: 'Pick up locally distilled cashew feni or feni-infused artisanal chocolates from local Goan gourmet shops.'
          },
          {
            id: 'g-2-4',
            time: '05:00 PM – 08:30 PM',
            timeOfDay: 'evening',
            activity: 'Sunset Shack Relaxation at Ashwem or Vagator',
            description: 'Sink into cushioned beach loungers right on the golden sand, watching the crimson sun melt into the waves with a chilled King’s Beer or fresh tender coconut.',
            location: 'Ashwem Beach / Morjim Coast',
            category: 'relaxation',
            duration: '3.5 hours',
            costEstimate: '₹600 – ₹1,200 INR',
            insiderTip: 'Ashwem and Morjim beaches are noticeably cleaner and quieter than Baga and Calangute, offering serene sunset tranquility.'
          }
        ]
      },
      {
        dayNumber: 3,
        title: 'Sahakari Spice Plantation & Serene South Goa Coast',
        theme: 'Tropical Spices, Cashew Groves & White Sand Bliss',
        dayHighlight: 'Traditional Goan lunch served on banana leaves inside an aromatic tropical spice plantation',
        recommendedNeighborhood: 'Ponda & South Goa',
        schedule: [
          {
            id: 'g-3-1',
            time: '09:00 AM – 11:30 AM',
            timeOfDay: 'morning',
            activity: 'Sahakari Spice Farm Guided Tour',
            description: 'Walk through lush groves of black pepper vines, cardamom, nutmeg, cinnamon, vanilla, and peri-peri chilies. Learn how traditional Ayurveda incorporates native Goan herbs.',
            location: 'Curti, Ponda',
            category: 'nature',
            duration: '2.5 hours',
            costEstimate: '₹500 INR (includes guided tour & buffet)',
            insiderTip: 'You will receive a traditional welcome with marigold garlands and warm herbal lemongrass tea. The on-site farm store offers pure whole spices.'
          },
          {
            id: 'g-3-2',
            time: '12:00 PM – 01:30 PM',
            timeOfDay: 'morning',
            activity: 'Traditional Plantation Buffet on Banana Leaf',
            description: 'Savor an unlimited Goan home-style feast featuring chicken xacuti, prawn curry, sprouted moong usal, fried fish, and fresh cashew liquor tasting.',
            location: 'Sahakari Spice Farm Dining Pavilion',
            category: 'food',
            duration: '1.5 hours',
            costEstimate: 'Included in plantation ticket',
            insiderTip: 'Try the kheer made with freshly crushed cardamoms picked right from the surrounding trees.'
          },
          {
            id: 'g-3-3',
            time: '02:30 PM – 05:00 PM',
            timeOfDay: 'afternoon',
            activity: 'Palolem Crescent Beach or Cabo de Rama Fort',
            description: 'Drive south to picturesque Palolem Beach lined with colorful wooden shacks, or explore the secluded cliff ruins of Cabo de Rama fortress overlooking turquoise ocean bays.',
            location: 'Canacona, South Goa',
            category: 'sightseeing',
            duration: '2.5 hours',
            costEstimate: 'Free entry',
            insiderTip: 'Hire a local boatman at Palolem for a 45-minute trip to Butterfly Beach and Honeymoon Beach, often spotting dolphins playing along the boat.'
          },
          {
            id: 'g-3-4',
            time: '06:00 PM – 09:30 PM',
            timeOfDay: 'evening',
            activity: 'Candlelit Seafood Farewell Dinner on the Sand',
            description: 'Dine with your feet in the sand to the gentle sound of Arabian Sea waves, savoring fresh grilled tiger prawns, butter garlic crab, and coconut panna cotta.',
            location: 'Fisherman’s Wharf in Cavelossim or Dropadi in Palolem',
            category: 'food',
            duration: '3.5 hours',
            costEstimate: '₹800 – ₹1,800 INR',
            insiderTip: 'Point out fresh catches of the day displayed on ice to customize your cooking style (rava fry, tandoori, or peri-peri).'
          }
        ]
      }
    ],
    packingEssentials: [
      'Breathable linen shirts, swimwear, and light cotton resortwear',
      'Slip-resistant sandals or water shoes for beach rocks and laterite forts',
      'Reef-safe sunscreen, polarized sunglasses, and wide-brim hat',
      'Valid driver’s license if planning to rent a scooter or car'
    ],
    culinaryHighlights: [
      {
        name: 'Goan Fish Curry & Rice (Xitt Codi)',
        description: 'Tender Kingfish or pomfret simmered in fresh coconut milk, Kashmiri red chilies, garlic, and sour kokum fruit for an exquisite tangy kick.',
        whereToTry: 'Mum’s Kitchen (Panjim), Viva Panjim, or Ritz Classic'
      },
      {
        name: 'Pork Vindaloo or Prawn Balchão with Poi',
        description: 'Spicy and tangy colonial specialty marinated in palm vinegar, garlic, and freshly roasted spices, soaked up with crusty Goan bread.',
        whereToTry: 'Martin’s Corner in Betalbatim or Nostalgia in Raia'
      },
      {
        name: 'Bebinca & Serradura',
        description: 'Goa’s queen of desserts—a 7-to-16-layer pudding baked with coconut milk, egg yolks, and nutmeg, or Portuguese sawdust pudding with condensed milk and crushed biscuits.',
        whereToTry: 'Confeitaria 31 de Janeiro in Fontainhas or Souza Lobo in Calangute'
      }
    ],
    practicalTips: [
      'Always wear a helmet while riding rented scooters in Goa; traffic police actively check at major intersections.',
      'Shacks generally operate seasonally from October to May; monsoon season (June–September) is lush and peaceful for nature lovers.',
      'Negotiate taxi rates beforehand or insist on using the GoaMiles government app to avoid inflated tourist fares.'
    ]
  },

  varanasi: {
    id: 'sample-varanasi',
    cityName: 'Varanasi',
    country: 'India',
    tagline: 'Kashi: Ancient Ghats, Sunrise River Ganga & Eternal Spirituality',
    overview: 'One of the world’s oldest continuously inhabited cities, Varanasi (Kashi / Banaras) is the spiritual heart of India. This 3-day itinerary balances sunrise wooden boat rides on the sacred River Ganga, the golden temple of Kashi Vishwanath, evening Ganga Aarti ceremonies, Banarasi silk weaving, and historic Sarnath.',
    bestTimeToVisit: 'October–March for cool morning boat rides and pleasant weather during Dev Deepawali and winter months.',
    localCurrency: 'Indian Rupee (₹ / INR)',
    language: 'Hindi & Bhojpuri (English understood around ghats & hotels)',
    transitTip: 'E-rickshaws and cycle-rickshaws are ideal for navigating congested streets. The narrow galis (alleys) leading down to the ghats are strictly pedestrian-only.',
    dailyBudgetEst: '₹1,500 – ₹4,000 INR / day (~$20 – $50 USD, making it very budget-friendly)',
    pace: 'Spiritual & Contemplative',
    vibe: 'Spiritual, Temples & Ganga Aarti',
    createdAt: new Date().toISOString(),
    days: [
      {
        dayNumber: 1,
        title: 'Sunrise River Rowboat & The Grand Evening Ganga Aarti',
        theme: 'Sacred Waters, Ghat Rituals & Devotional Chants',
        dayHighlight: 'Watching thousands of brass lamps lit synchronously during the twilight Ganga Aarti at Dashashwamedh Ghat',
        recommendedNeighborhood: 'Assi Ghat to Dashashwamedh Ghat',
        schedule: [
          {
            id: 'v-1-1',
            time: '05:30 AM – 08:00 AM',
            timeOfDay: 'morning',
            activity: 'Subah-e-Banaras Sunrise Rowboat Ride',
            description: 'Glide quietly on a wooden hand-rowed boat across the misty holy Ganga. Watch pilgrims perform morning surya namaskar, sadhus chant mantras, and historic haveli ghats glow in golden dawn light from Assi to Manikarnika.',
            location: 'Assi Ghat to Dashashwamedh Ghat',
            category: 'sightseeing',
            duration: '2.5 hours',
            costEstimate: '₹400 – ₹800 INR (private rowboat)',
            insiderTip: 'Opt for a traditional wooden hand-rowed boat rather than a noisy motorboat to experience the serene morning hymns and temple bells across the water.'
          },
          {
            id: 'v-1-2',
            time: '08:30 AM – 10:00 AM',
            timeOfDay: 'morning',
            activity: 'Banarasi Breakfast: Kachori Sabzi & Jalebi at Ram Bhandar',
            description: 'Feast on round, crispy urad dal kachoris topped with spicy hing-infused potato curry, followed by hot, coiled saffron jalebis fresh from the kadhai.',
            location: 'Thatheri Bazaar / Chowk',
            category: 'food',
            duration: '1.5 hours',
            costEstimate: '₹60 – ₹120 INR',
            insiderTip: 'Wash it down with Kulhad Chai (milky spiced tea brewed in clay cups) from the corner tea stall.'
          },
          {
            id: 'v-1-3',
            time: '10:30 AM – 01:30 PM',
            timeOfDay: 'morning',
            activity: 'Kashi Vishwanath Temple Corridor',
            description: 'Pass through the modern, spacious river corridor to enter the holiest Shiva shrine in Hinduism, topped with one ton of gold plating donated by Maharaja Ranjit Singh.',
            location: 'Vishwanath Gali, Chowk',
            category: 'culture',
            duration: '3 hours',
            costEstimate: 'Free / ₹300 for special darshan queue',
            insiderTip: 'Leave all mobile phones, smartwatches, leather belts, and electronics at your hotel or the official locker facility outside before joining security lines.'
          },
          {
            id: 'v-1-4',
            time: '02:30 PM – 04:30 PM',
            timeOfDay: 'afternoon',
            activity: 'Exploring the Galis of Varanasi & Blue Lassi',
            description: 'Wander the medieval maze of narrow flagstone alleyways lined with sacred shrines, tiny spice shops, and resting holy cows. Stop at the famous Blue Lassi shop for fruit and dry-fruit lassi.',
            location: 'Bangali Tola & Manikarnika Gali',
            category: 'culture',
            duration: '2 hours',
            costEstimate: '₹80 – ₹150 INR',
            insiderTip: 'Try the pomegranate-pista or banana-mango lassi served in biodegradable earthen clay pots.'
          },
          {
            id: 'v-1-5',
            time: '05:30 PM – 07:45 PM',
            timeOfDay: 'evening',
            activity: 'Maha Ganga Aarti at Dashashwamedh Ghat',
            description: 'Witness seven young Vedic priests in saffron robes perform the mesmerizing choreographed ritual with giant multi-tiered brass oil lamps, blowing conch shells as bells chime across the river.',
            location: 'Dashashwamedh Ghat',
            category: 'culture',
            duration: '2.25 hours',
            costEstimate: 'Free from ghat steps / ₹150 for boat seat',
            insiderTip: 'Rent a seat on a moored riverboat facing the ghat by 5:15 PM for an elevated, unobstructed view above the massive crowds on the steps.'
          }
        ]
      },
      {
        dayNumber: 2,
        title: 'Sarnath Buddhist Stupas & Banarasi Silk Weavers',
        theme: 'Enlightenment History, Ancient Pillars & Master Weaving',
        dayHighlight: 'Standing before the 5th-century Dhamek Stupa where Buddha gave his first sermon',
        recommendedNeighborhood: 'Sarnath & Weaver Quarters',
        schedule: [
          {
            id: 'v-2-1',
            time: '09:00 AM – 12:30 PM',
            timeOfDay: 'morning',
            activity: 'Sarnath Archeological Site & Deer Park',
            description: 'Drive 10km to Sarnath where Gautama Buddha preached his first sermon after attaining enlightenment. Admire the colossal Dhamek Stupa, Ashoka Lion Capital (India’s national emblem) in the Archeological Museum, and serene monasteries.',
            location: 'Sarnath, Varanasi District',
            category: 'culture',
            duration: '3.5 hours',
            costEstimate: '₹25 (Indians) / ₹300 (Foreigners)',
            insiderTip: 'The Sarnath Museum closes on Fridays; check timing to ensure you don’t miss viewing the original polished sandstone Ashoka pillar capital.'
          },
          {
            id: 'v-2-2',
            time: '01:00 PM – 02:30 PM',
            timeOfDay: 'afternoon',
            activity: 'Bati Chokha Vegetarian Feast',
            description: 'Experience authentic Purvanchal cuisine: roasted wheat balls stuffed with spiced sattu (gram flour), accompanied by smoky roasted brinjal and tomato mash (chokha) and mint chutney.',
            location: 'Baati Chokha Restaurant, Anand Nagar or Teliyabag',
            category: 'food',
            duration: '1.5 hours',
            costEstimate: '₹250 – ₹450 INR',
            insiderTip: 'The village-themed ambience with clay ovens and floor seating offers genuine rustic warmth.'
          },
          {
            id: 'v-2-3',
            time: '03:00 PM – 05:30 PM',
            timeOfDay: 'afternoon',
            activity: 'Banarasi Silk Weaving Workshop Tour',
            description: 'Step into the handloom quarters to hear the rhythmic clacking of wooden jacquard looms. Watch generational master weavers weave pure gold and silver zari threads into world-famous Banarasi silk sarees.',
            location: 'Madanpura / Sarai Mohana Weaver Colony',
            category: 'shopping',
            duration: '2.5 hours',
            costEstimate: 'Tour free / Silk purchase',
            insiderTip: 'Ask to inspect the reverse side of the saree; authentic handloom Banarasi silk has floating zari floats that machine-made replicas cannot imitate.'
          },
          {
            id: 'v-2-4',
            time: '06:30 PM – 08:30 PM',
            timeOfDay: 'evening',
            activity: 'Banarasi Paan & Evening Assi Ghat Cultural Performances',
            description: 'Wrap up your day at Assi Ghat enjoying Indian classical sitar and tabla recitals, followed by a sweet Banarasi Meetha Paan folded with betel leaf, rose petal preserves (gulkand), and saffron spices.',
            location: 'Assi Ghat',
            category: 'relaxation',
            duration: '2 hours',
            costEstimate: '₹30 – ₹50 for royal Paan',
            insiderTip: 'Ask for Keshav Tambool Bhandar near Ravidas Gate, one of Varanasi’s most celebrated paan heritage shops.'
          }
        ]
      },
      {
        dayNumber: 3,
        title: 'BHU Heritage, Tulsi Manas & Winter Malaiyyo',
        theme: 'Vedic Learning, Marble Epics & Heavenly Froth',
        dayHighlight: 'Savoring the cloud-like seasonal Malaiyyo foam infused with saffron and pistachios',
        recommendedNeighborhood: 'Southern Varanasi & BHU Campus',
        schedule: [
          {
            id: 'v-3-1',
            time: '08:30 AM – 10:30 AM',
            timeOfDay: 'morning',
            activity: 'Banaras Hindu University (BHU) & New Vishwanath Temple',
            description: 'Explore the sprawling, leafy campus of Asia’s largest residential university founded in 1916 by Pandit Madan Mohan Malaviya. Visit the soaring marble New Vishwanath Temple with Gita verses inscribed on walls.',
            location: 'BHU Campus, Varanasi South',
            category: 'culture',
            duration: '2 hours',
            costEstimate: 'Free entry',
            insiderTip: 'The Bharat Kala Bhavan museum on campus houses an extraordinary collection of ancient miniature paintings and sculptures.'
          },
          {
            id: 'v-3-2',
            time: '11:00 AM – 12:30 PM',
            timeOfDay: 'morning',
            activity: 'Tulsi Manas & Sankat Mochan Hanuman Temple',
            description: 'Visit the white marble Tulsi Manas temple where poet Goswami Tulsidas composed the Ramcharitmanas. Next door, receive the famous besan laddoo prasad at Sankat Mochan Temple.',
            location: 'Sankat Mochan Road',
            category: 'culture',
            duration: '1.5 hours',
            costEstimate: 'Free entry',
            insiderTip: 'Watch out for monkeys around Sankat Mochan; keep spectacles, sunglasses, and bags held securely.'
          },
          {
            id: 'v-3-3',
            time: '01:00 PM – 02:30 PM',
            timeOfDay: 'afternoon',
            activity: 'Banarasi Chaat Trail: Tamatar Chaat & Palak Chaat',
            description: 'Try Varanasi’s one-of-a-kind savory street food: Tamatar Chaat (spiced roasted tomatoes, boiled potatoes, cashews, and hing syrup) and crispy fried spinach chaat topped with sweet curd.',
            location: 'Kashi Chaat Bhandar or Deena Chaat Bhandar',
            category: 'food',
            duration: '1.5 hours',
            costEstimate: '₹80 – ₹200 INR',
            insiderTip: 'Kashi Chaat Bhandar opens around 2:00 PM and gets busy quickly; try their Dahi Puri and Gulab Jamun as well.'
          },
          {
            id: 'v-3-4',
            time: '03:00 PM – 05:00 PM',
            timeOfDay: 'afternoon',
            activity: 'Winter Saffron Malaiyyo or Banarasi Rabdi',
            description: 'Taste Banaras’s most poetic sweet: saffron-flavored milk froth whipped under open winter night skies by dew mist, topped with crushed almonds and silver foil (varq).',
            location: 'Chowk, Thatheri Bazaar',
            category: 'food',
            duration: '2 hours',
            costEstimate: '₹50 – ₹100 INR',
            insiderTip: 'Malaiyyo is a winter specialty (November–February); in summer months, sweet chilled Rabdi Falooda is the crowd favorite.'
          },
          {
            id: 'v-3-5',
            time: '05:30 PM – 08:30 PM',
            timeOfDay: 'evening',
            activity: 'Farewell Twilight Walk along the Ghats & Diyas on Ganga',
            description: 'Light a small earthen diya nestled in marigold petals and gently release it onto the waters of the holy river as darkness falls, watching hundreds of tiny flickering lights drift with the current.',
            location: 'Manikarnika to Harishchandra Ghat Promenade',
            category: 'relaxation',
            duration: '3 hours',
            costEstimate: '₹20 – ₹50 per floating diya',
            insiderTip: 'Maintain solemn respect around Manikarnika Ghat (the cremation ghat); photography is strictly forbidden here.'
          }
        ]
      }
    ],
    packingEssentials: [
      'Modest comfortable clothing covering shoulders and knees for temple visits',
      'Slip-on shoes or sandals (you will remove them frequently along temple corridors)',
      'Hand sanitizer, wet wipes, and an eco-friendly water bottle',
      'A warm shawl or light jacket for chilly winter morning boat rides'
    ],
    culinaryHighlights: [
      {
        name: 'Banarasi Tamatar Chaat',
        description: 'Mashed spiced tomatoes, cashews, raisins, ginger, and cumin slow-cooked with ghee and sweet sugar-cumin syrup served in earthen sakoras.',
        whereToTry: 'Kashi Chaat Bhandar (Godowlia) or Deena Chaat Bhandar'
      },
      {
        name: 'Kachori Jalebi & Kulhad Chai',
        description: 'Crisp dal-stuffed kachori with aloo-chana curry, paired with hot sugar syrup-soaked jalebis and cardamom clay-cup tea.',
        whereToTry: 'Ram Bhandar in Thatheri Bazaar or Madhur Milan'
      },
      {
        name: 'Banarasi Malaiyyo / Meetha Paan',
        description: 'Cloud-light saffron milk foam prepared with morning winter dew, followed by betel leaves packed with candied rose petals and aromatic supari.',
        whereToTry: 'Shriji Sweets in Chaukhamba & Keshav Tambool Bhandar'
      }
    ],
    practicalTips: [
      'Photography is strictly prohibited inside the inner sanctum of Kashi Vishwanath and at the cremation platforms of Manikarnika Ghat.',
      'Always agree on a boat fare before stepping onto a riverboat at the ghats.',
      'UPI payment (GPay/PhonePe) is accepted almost everywhere, but keeping small ₹10, ₹20, and ₹50 cash notes is helpful for boatmen and shoe attendants.'
    ]
  },

  kyoto: {
    id: 'sample-kyoto',
    cityName: 'Kyoto',
    country: 'Japan',
    tagline: 'Ancient Shrines, Mossy Zen Temples & Bamboo Paths',
    overview: 'Kyoto was Japan’s imperial capital for over a millennium. This 3-day itinerary balances iconic architectural marvels, tranquil stone gardens, and historic tea houses across Higashiyama, Arashiyama, and northern Kyoto.',
    bestTimeToVisit: 'March–May (Cherry Blossoms) or October–November (Autumn Foliage)',
    localCurrency: 'Japanese Yen (¥ / JPY)',
    language: 'Japanese (English signage common in train stations & temples)',
    transitTip: 'IC card (ICOCA/Suica) works across municipal buses and Hankyu/Keihan train lines. Rent a bicycle for eastern Kyoto.',
    dailyBudgetEst: '$65 – $140 USD / day (including entry fees & dining)',
    pace: 'Balanced & Scenic',
    vibe: 'Culture & Nature',
    createdAt: new Date().toISOString(),
    days: [
      {
        dayNumber: 1,
        title: 'Higashiyama Heritage & Historic Lantern Alleyways',
        theme: 'Spiritual Heritage & Tea House Traditions',
        dayHighlight: 'Sunset panorama over Pagoda at Kiyomizu-dera',
        recommendedNeighborhood: 'Higashiyama & Gion',
        schedule: [
          {
            id: 'k-1-1',
            time: '07:30 AM – 10:00 AM',
            timeOfDay: 'morning',
            activity: 'Fushimi Inari-Taisha Vermilion Torii Path',
            description: 'Begin early to beat crowds hiking through the thousands of iconic vermilion torii gates winding up sacred Mount Inari through shaded cedar forest.',
            location: 'Fushimi Inari, Fushimi Ward',
            category: 'culture',
            duration: '2.5 hours',
            costEstimate: 'Free entry',
            insiderTip: 'Hike past the Yotsutsuji intersection (about 30 mins up) where 90% of tour groups turn back, leaving peaceful mountain trails and serene stone fox shrines.'
          },
          {
            id: 'k-1-2',
            time: '10:45 AM – 12:30 PM',
            timeOfDay: 'morning',
            activity: 'Kiyomizu-dera Cliffside Temple & Otowa Waterfall',
            description: 'Visit Kyoto’s monumental wooden temple constructed without a single nail, offering soaring views over cherry and maple canopies toward the city skyline.',
            location: 'Kiyomizu 1-chome, Higashiyama Ward',
            category: 'sightseeing',
            duration: '1.75 hours',
            costEstimate: '¥400 (~$3 USD)',
            insiderTip: 'Drink from one of the three streams at Otowa Waterfall using long-handled cups, each believed to bestow health, longevity, or success in studies.'
          },
          {
            id: 'k-1-3',
            time: '12:45 PM – 02:00 PM',
            timeOfDay: 'afternoon',
            activity: 'Lunch & Matcha Break in Ninenzaka & Sannenzaka',
            description: 'Wander the stone-paved pedestrian alleys lined with traditional wooden machiya merchant houses. Stop for handmade soba noodles and ceremonial Uji matcha parfaits.',
            location: 'Ninenzaka Preserved District',
            category: 'food',
            duration: '1.25 hours',
            costEstimate: '$12 – $22 USD',
            insiderTip: 'Look for the world-famous tatami-mat Starbucks hidden inside an authentic 100-year-old preserved Japanese residence on Ninenzaka.'
          },
          {
            id: 'k-1-4',
            time: '02:30 PM – 04:30 PM',
            timeOfDay: 'afternoon',
            activity: 'Kodai-ji Zen Rock Garden & Bamboo Grove',
            description: 'A serene Zen temple built in 1606 with raked gravel dry-landscape gardens, historic tea ceremony pavilions, and a contemplative bamboo walkway.',
            location: 'Kodaiji Shimokawaracho',
            category: 'culture',
            duration: '2 hours',
            costEstimate: '¥600 (~$4 USD)',
            insiderTip: 'Far less crowded than Arashiyama bamboo forest; sit on the veranda of the main hall to absorb the stillness of the stone waves.'
          },
          {
            id: 'k-1-5',
            time: '05:30 PM – 08:30 PM',
            timeOfDay: 'evening',
            activity: 'Dusk Walk through Gion & Kamogawa Riverside Dining',
            description: 'Stroll along the willow-lined Shirakawa canal and the flagstone alleys of Hanami-koji in search of geiko and maiko on their way to evening appointments. Dine on seasonal Kyoto kaiseki or skewers.',
            location: 'Gion District & Pontocho Alley',
            category: 'food',
            duration: '3 hours',
            costEstimate: '$25 – $60 USD',
            insiderTip: 'Reserve a kawayuka (raised wooden platform over the Kamogawa river) during warm months for riverside breezes and lantern-lit atmosphere.'
          }
        ]
      },
      {
        dayNumber: 2,
        title: 'Arashiyama Bamboo, Riverboat & Golden Zen Splendor',
        theme: 'Sublime Nature, Monkeys & Golden Architecture',
        dayHighlight: 'Kinkaku-ji Golden Pavilion shimmering across mirror pond',
        recommendedNeighborhood: 'Arashiyama & Kita Ward',
        schedule: [
          {
            id: 'k-2-1',
            time: '08:00 AM – 09:45 AM',
            timeOfDay: 'morning',
            activity: 'Sagano Bamboo Forest & Tenryu-ji Temple Garden',
            description: 'Listen to the rustling breeze in the towering green stalks of the bamboo grove, followed by Tenryu-ji’s 14th-century Sogenchi garden framed by the Arashiyama mountains.',
            location: 'Sagaogurayama, Ukyo Ward',
            category: 'nature',
            duration: '1.75 hours',
            costEstimate: '¥500 (~$3.50 USD)',
            insiderTip: 'The morning light filter through the bamboo canopy is magical before 9 AM, before day-trip crowds arrive from Osaka.'
          },
          {
            id: 'k-2-2',
            time: '10:00 AM – 11:30 AM',
            timeOfDay: 'morning',
            activity: 'Okochi Sanso Mountain Villa & Private Gardens',
            description: 'Step into the sublime private estate of Japanese silent film actor Denjiro Okochi. The winding paths showcase seasonal moss, pine trees, and views of Kyoto basin.',
            location: 'Tabuchiyamacho, Saga, Ukyo Ward',
            category: 'culture',
            duration: '1.5 hours',
            costEstimate: '¥1,000 (~$7 USD, includes tea & sweet)',
            insiderTip: 'Admission ticket includes a complimentary bowl of hot matcha and a fresh wagashi confection in their tranquil open-air tea pavilion.'
          },
          {
            id: 'k-2-3',
            time: '12:00 PM – 01:15 PM',
            timeOfDay: 'afternoon',
            activity: 'Togetsukyo Bridge & Yudofu (Kyoto Tofu Hotpot) Lunch',
            description: 'Cross the Moon Crossing Bridge spanning the Katsura River, then savor Kyoto’s signature silky hotpot tofu (yudofu) in a historic riverside restaurant.',
            location: 'Togetsukyo, Saga Tenryuji',
            category: 'food',
            duration: '1.25 hours',
            costEstimate: '$18 – $30 USD',
            insiderTip: 'Kyoto’s pristine soft groundwater is renowned across Japan for producing the country’s most delicate, melt-in-your-mouth tofu.'
          },
          {
            id: 'k-2-4',
            time: '02:15 PM – 04:00 PM',
            timeOfDay: 'afternoon',
            activity: 'Kinkaku-ji (The Golden Pavilion)',
            description: 'Take the Randen vintage tram and bus to witness the top two floors of this Zen temple completely covered in shimmering pure gold leaf, reflected in the Mirror Pond.',
            location: 'Kinkakujicho, Kita Ward',
            category: 'sightseeing',
            duration: '1.75 hours',
            costEstimate: '¥500 (~$3.50 USD)',
            insiderTip: 'Mid-afternoon sun hits the golden facade directly, creating brilliant reflections against the dark pond water and sculpted pine islands.'
          },
          {
            id: 'k-2-5',
            time: '06:00 PM – 08:30 PM',
            timeOfDay: 'evening',
            activity: 'Nishiki Market Evening Bites & Craft Beer in Karasuma',
            description: 'Explore the five-block "Kitchen of Kyoto", tasting dashi tamagoyaki omelets, grilled wagyu skewers, and craft beer brewed with Kyoto spring water.',
            location: 'Nakagyo Ward, Downtown Kyoto',
            category: 'food',
            duration: '2.5 hours',
            costEstimate: '$20 – $40 USD',
            insiderTip: 'Many market stalls start closing around 5:30 PM, but the surrounding side alleys and izakayas stay buzzing late into the night.'
          }
        ]
      },
      {
        dayNumber: 3,
        title: 'Philosopher’s Path, Silver Pavilion & Artisan Districts',
        theme: 'Contemplative Trails, Craft Markets & Modern Kyoto',
        dayHighlight: 'Quiet meditation along the Philosopher’s Walk stone canal',
        recommendedNeighborhood: 'Sakyo Ward & Okazaki',
        schedule: [
          {
            id: 'k-3-1',
            time: '08:30 AM – 10:15 AM',
            timeOfDay: 'morning',
            activity: 'Ginkaku-ji (The Silver Pavilion) & Sand Sea',
            description: 'Explore the epitome of wabi-sabi aesthetics with dry sand gardens featuring the Ginshadan (Sea of Silver Sand) and the iconic cone representing Mount Fuji.',
            location: 'Ginkakujicho, Sakyo Ward',
            category: 'culture',
            duration: '1.75 hours',
            costEstimate: '¥500 (~$3.50 USD)',
            insiderTip: 'Follow the hillside stone path behind the pavilion to catch a panoramic vista over eastern Kyoto through Japanese maples.'
          },
          {
            id: 'k-3-2',
            time: '10:30 AM – 12:00 PM',
            timeOfDay: 'morning',
            activity: 'Stroll the Philosopher’s Path (Tetsugaku-no-Michi)',
            description: 'Walk alongside a stone canal shaded by hundreds of cherry trees where 20th-century philosopher Kitaro Nishida practiced daily walking meditation.',
            location: 'Philosopher’s Path, Sakyo Ward',
            category: 'nature',
            duration: '1.5 hours',
            costEstimate: 'Free',
            insiderTip: 'Divert 50 meters off the path into Honen-in Temple, an intimate hidden sanctuary with thatched moss gates and seasonal art exhibitions.'
          },
          {
            id: 'k-3-3',
            time: '12:30 PM – 02:00 PM',
            timeOfDay: 'afternoon',
            activity: 'Nanzen-ji Zen Compound & Ancient Brick Aqueduct',
            description: 'Marvel at Nanzen-ji’s towering Sanmon Gate and the unexpected red-brick Lake Biwa Romanesque aqueduct built in the 1890s running right through sacred temple grounds.',
            location: 'Nanzenji Fukuchicho, Sakyo Ward',
            category: 'sightseeing',
            duration: '1.5 hours',
            costEstimate: 'Free grounds (sub-temple ¥600)',
            insiderTip: 'Climb up into the upper gallery of the Sanmon Gate for a stunning bird’s eye perspective of Kyoto’s mountain ridge.'
          },
          {
            id: 'k-3-4',
            time: '02:30 PM – 04:30 PM',
            timeOfDay: 'afternoon',
            activity: 'Kyoto Handicraft Center & Vintage Textile Boutiques',
            description: 'Discover Kyoto’s living artisan heritage: Kiyomizu-yaki ceramics, Nishijin silk textiles, woodblock prints, and incense makers who have served temples for 300 years.',
            location: 'Okazaki Cultural Quarter',
            category: 'shopping',
            duration: '2 hours',
            costEstimate: 'Browse free / purchases vary',
            insiderTip: 'Visit Shoyeido incense shop nearby to sample traditional temple fragrances packaged in handmade washi paper.'
          },
          {
            id: 'k-3-5',
            time: '06:00 PM – 09:00 PM',
            timeOfDay: 'evening',
            activity: 'Farewell Dinner at Pontocho Alley & Gion Cocktails',
            description: 'Celebrate the final evening navigating the narrow pedestrian corridor of Pontocho, followed by bespoke fruit cocktails at a hidden speakeasy overlooking the water.',
            location: 'Pontocho Alley & Sanjo',
            category: 'food',
            duration: '3 hours',
            costEstimate: '$40 – $75 USD',
            insiderTip: 'Try Bar Rocking Chair or Bee’s Knees for world-class hospitality and custom cocktails crafted with local gin and yuzu.'
          }
        ]
      }
    ],
    packingEssentials: [
      'Comfortable slip-on walking shoes (temples require shoes off on tatami mats)',
      'Coin pouch (vending machines and shrine fortune charms take cash)',
      'Compact umbrella or lightweight rain jacket',
      'Modest socks in good condition (you will show them at every temple hall)'
    ],
    culinaryHighlights: [
      {
        name: 'Kaiseki Ryori',
        description: 'Multi-course Japanese haute cuisine highlighting micro-seasonal ingredients, delicate dashi broths, and artistic ceramic plating.',
        whereToTry: 'Gion or Pontocho Alley'
      },
      {
        name: 'Yudofu (Simmered Tofu)',
        description: 'Silk tofu gently simmered in kombu broth with ginger, scallions, and roasted sesame dipping sauce.',
        whereToTry: 'Shoraian or Tousuiro in Arashiyama'
      },
      {
        name: 'Uji Matcha Parfait & Wagashi',
        description: 'Rich ceremonial green tea soft-serve layered with mochi balls, sweet adzuki bean paste, and matcha jelly.',
        whereToTry: 'Tsujiri or Gion Koishi'
      }
    ],
    practicalTips: [
      'Most temples open early at 8:30 or 9:00 AM and close entry sharply at 4:30 PM.',
      'Always have some yen notes on hand; many independent temple ticket booths and small shrines do not accept credit cards.',
      'Photography is strictly prohibited inside temple main worship halls and certain private alleys in Gion.'
    ]
  },
  barcelona: {
    id: 'sample-barcelona',
    cityName: 'Barcelona',
    country: 'Spain',
    tagline: 'Modernisme Masterpieces, Mediterranean Beaches & Tapas Culture',
    overview: 'Catalonia’s vibrant coastal metropolis blends Antoni Gaudí’s surrealist architecture, Gothic labyrinthine quarters, world-class culinary markets, and Mediterranean sunset vistas into an unforgettable 3-day itinerary.',
    bestTimeToVisit: 'May–June or September–October for ideal weather and swimming without peak summer crowds.',
    localCurrency: 'Euro (€ / EUR)',
    language: 'Spanish & Catalan (English widely understood in central areas)',
    transitTip: 'Buy a T-Casual 10-ride transit card; it covers all central metro lines and buses seamlessly.',
    dailyBudgetEst: '$70 – $150 USD / day',
    pace: 'Lively & Cultural',
    vibe: 'Architecture & Coastal Living',
    createdAt: new Date().toISOString(),
    days: [
      {
        dayNumber: 1,
        title: 'Gothic Quarter Secrets & Mediterranean Sunset',
        theme: 'Medieval History, Tapas & Sea Breezes',
        dayHighlight: 'Sunset stroll along the Barceloneta beachfront promenade',
        recommendedNeighborhood: 'Barri Gòtic & El Born',
        schedule: [
          {
            id: 'b-1-1',
            time: '09:00 AM – 11:00 AM',
            timeOfDay: 'morning',
            activity: 'Barri Gòtic Alleys & Barcelona Cathedral',
            description: 'Navigate the atmospheric medieval labyrinth, discovering Roman city wall remnants, the quiet Bishop’s Bridge, and the Gothic Cathedral with 13 resident white geese.',
            location: 'Pla de la Seu, Gothic Quarter',
            category: 'culture',
            duration: '2 hours',
            costEstimate: '€9 (~$10 USD)',
            insiderTip: 'Visit the cathedral cloister early in the morning to hear the fountain trickling and see the geese before crowds arrive.'
          },
          {
            id: 'b-1-2',
            time: '11:15 AM – 01:00 PM',
            timeOfDay: 'morning',
            activity: 'Mercat de Santa Caterina & El Born Boutiques',
            description: 'Admire the undulating colorful mosaic roof of Santa Caterina Market, sampling Iberian ham (jamón ibérico) and artisan cheeses away from tourist-packed Boqueria.',
            location: 'Avinguda de Francesc Cambó',
            category: 'food',
            duration: '1.75 hours',
            costEstimate: 'Free to browse / €8–€15 tastings',
            insiderTip: 'El Born’s Carrer dels Mirallers and Carrer dels Banys Vells host the city’s finest independent jewelry and leather makers.'
          },
          {
            id: 'b-1-3',
            time: '01:15 PM – 02:45 PM',
            timeOfDay: 'afternoon',
            activity: 'Lunch & Vermouth at Bar del Pla',
            description: 'Experience authentic Catalan tapas culture: pan con tomate, crispy patatas bravas, octopus with pork belly, and house vermouth on tap.',
            location: 'Carrer de Montcada, El Born',
            category: 'food',
            duration: '1.5 hours',
            costEstimate: '€20 – €35 USD',
            insiderTip: 'Order "vermut casero" (house vermouth served over ice with an olive and orange wedge) like a true local.'
          },
          {
            id: 'b-1-4',
            time: '03:15 PM – 05:30 PM',
            timeOfDay: 'afternoon',
            activity: 'Ciutadella Park & Arc de Triomf Promenade',
            description: 'Rest beneath palm trees near the Cascada Monumental waterfall fountain, or rent a small rowboat on the park lake.',
            location: 'Passeig de Picasso',
            category: 'nature',
            duration: '2.25 hours',
            costEstimate: 'Free (rowboats €6)',
            insiderTip: 'Walk the pedestrian boulevard from Arc de Triomf into the park for open-air acoustic musicians and shaded benches.'
          },
          {
            id: 'b-1-5',
            time: '06:30 PM – 09:30 PM',
            timeOfDay: 'evening',
            activity: 'Barceloneta Beach Sunset & Seafood Paella',
            description: 'Watch the Mediterranean sunset turn orange against the sail-shaped W Hotel, then sit down for authentic seafood fideuà or paella at a waterfront marisquería.',
            location: 'Passeig Marítim de la Barceloneta',
            category: 'relaxation',
            duration: '3 hours',
            costEstimate: '€30 – €55 USD',
            insiderTip: 'Locals eat dinner late (after 8:30 PM); if an eatery has paella photos on billboards outside before 6 PM, keep walking.'
          }
        ]
      },
      {
        dayNumber: 2,
        title: 'The Gaudí Odyssey: Sagrada Família & Passeig de Gràcia',
        theme: 'Catalan Modernisme & Visionary Architecture',
        dayHighlight: 'Stained glass kaleidoscope inside Basílica de la Sagrada Família',
        recommendedNeighborhood: 'Eixample',
        schedule: [
          {
            id: 'b-2-1',
            time: '09:00 AM – 11:30 AM',
            timeOfDay: 'morning',
            activity: 'Basílica de la Sagrada Família (Interior & Nativity Tower)',
            description: 'Step into Gaudí’s unearthly forest of stone columns. As morning light floods through eastern blue and green stained glass, the sanctuary glows with celestial colors.',
            location: 'Carrer de Mallorca, Eixample',
            category: 'sightseeing',
            duration: '2.5 hours',
            costEstimate: '€26 – €36 USD (Book 3 weeks ahead)',
            insiderTip: 'Book the 9:00 AM ticket with Nativity Tower access; the morning light through the Nativity facade stained glass is peak illumination.'
          },
          {
            id: 'b-2-2',
            time: '12:00 PM – 01:30 PM',
            timeOfDay: 'afternoon',
            activity: 'Stroll Passeig de Gràcia & "Block of Discord"',
            description: 'Walk Barcelona’s grand boulevard to contrast rival architectural masterpieces: Casa Amatller, Casa Lleó Morera, and Gaudí’s dragon-backed Casa Batlló.',
            location: 'Passeig de Gràcia',
            category: 'sightseeing',
            duration: '1.5 hours',
            costEstimate: 'Free exterior viewing',
            insiderTip: 'Look down: even the hexagonal pavement tiles on Passeig de Gràcia were designed by Gaudí featuring starfish and octopus fossils.'
          },
          {
            id: 'b-2-3',
            time: '01:45 PM – 03:00 PM',
            timeOfDay: 'afternoon',
            activity: 'Catalan Tapas Lunch at El Nacional',
            description: 'Dine in a stunning restored 1920s modernist market hall featuring separate bars dedicated to seafood, charcoal-grilled meats, and Iberian charcuterie.',
            location: 'Passeig de Gràcia 24',
            category: 'food',
            duration: '1.25 hours',
            costEstimate: '€25 – €45 USD',
            insiderTip: 'Try the "arroz caldoso" (brothy seafood rice) or garlic butter clams at the fish bar.'
          },
          {
            id: 'b-2-4',
            time: '03:30 PM – 05:30 PM',
            timeOfDay: 'afternoon',
            activity: 'Casa Milà (La Pedrera) Rooftop Warriors',
            description: 'Ascend to the rooftop of Gaudí’s limestone undulating apartment building to explore the surreal chimney sculptures that inspired Star Wars stormtrooper helmets.',
            location: 'Passeig de Gràcia 92',
            category: 'culture',
            duration: '2 hours',
            costEstimate: '€25 (~$28 USD)',
            insiderTip: 'The attic exhibition inside the brick catenary arches gives the deepest technical understanding of how Gaudí mimicked organic nature.'
          },
          {
            id: 'b-2-5',
            time: '07:30 PM – 10:30 PM',
            timeOfDay: 'evening',
            activity: 'Dinner in Gràcia & Plaza del Sol Terraces',
            description: 'Immerse yourself in bohemian Gràcia, an independent village absorbed by the city, full of pedestrian plazas, indie record shops, and craft vermouth bars.',
            location: 'Plaça del Sol & Carrer de Verdi',
            category: 'relaxation',
            duration: '3 hours',
            costEstimate: '€20 – €40 USD',
            insiderTip: 'Grab a table outdoors on Plaça de la Virreina beneath the church steeple for local evening ambiance.'
          }
        ]
      },
      {
        dayNumber: 3,
        title: 'Park Güell Panoramas & Montjuïc Castle Views',
        theme: 'Rooftops, Green Hills & Mediterranean Overlooks',
        dayHighlight: 'Sweeping city-to-sea view from the serpentine mosaic bench of Park Güell',
        recommendedNeighborhood: 'Gràcia Heights & Montjuïc',
        schedule: [
          {
            id: 'b-3-1',
            time: '08:30 AM – 10:45 AM',
            timeOfDay: 'morning',
            activity: 'Park Güell Monumental Zone & Mosaic Salamander',
            description: 'Explore Gaudí’s fantastical garden city nestled into the Carmel hillside, with hypostyle columns, trencadís mosaic benches, and Hansel-and-Gretel gingerbread gatehouses.',
            location: 'Carrer d’Olot',
            category: 'sightseeing',
            duration: '2.25 hours',
            costEstimate: '€10 (~$11 USD, reservation mandatory)',
            insiderTip: 'Walk past the formal zone up to Mirador de Joan Sales for an open 360-degree overlook with zero crowds.'
          },
          {
            id: 'b-3-2',
            time: '11:30 AM – 01:00 PM',
            timeOfDay: 'morning',
            activity: 'Fundació Joan Miró & Montjuïc Hillside Gardens',
            description: 'Take the metro and funicular to Montjuïc to view Joan Miró’s joyful primary-color sculptures, tapestries, and paintings housed in a pristine white modernist gallery.',
            location: 'Parc de Montjuïc',
            category: 'culture',
            duration: '1.5 hours',
            costEstimate: '€14 (~$15 USD)',
            insiderTip: 'The museum rooftop features Miró sculptures set against the city skyline backdrop.'
          },
          {
            id: 'b-3-3',
            time: '01:15 PM – 02:45 PM',
            timeOfDay: 'afternoon',
            activity: 'Lunch at La Caseta del Migdia or Poble-Sec Pincho Crawl',
            description: 'Descend to Carrer de Blai in Poble-Sec, Barcelona’s famous pinchos street where bars display hundreds of gourmet bite-sized skewers for €1.50 to €2.50 each.',
            location: 'Carrer de Blai, Poble-Sec',
            category: 'food',
            duration: '1.5 hours',
            costEstimate: '€15 – €25 USD',
            insiderTip: 'Keep your wooden toothpick skewers on your plate; the server counts them at the end to calculate your bill!'
          },
          {
            id: 'b-3-4',
            time: '03:30 PM – 05:30 PM',
            timeOfDay: 'afternoon',
            activity: 'Montjuïc Castle & Port Cable Car (Telefèric de Montjuïc)',
            description: 'Glide over the treetops in the glass cable car up to the 17th-century clifftop fortress overlooking the commercial port and open sea.',
            location: 'Carretera de Montjuïc 66',
            category: 'sightseeing',
            duration: '2 hours',
            costEstimate: '€10 Castle / €15 Cable Car return',
            insiderTip: 'The walk along the seaward wall of the fortress is exceptionally breezy and peaceful on sunny afternoons.'
          },
          {
            id: 'b-3-5',
            time: '07:30 PM – 10:30 PM',
            timeOfDay: 'evening',
            activity: 'Plaça d’Espanya Sunset & Farewell Catalan Feast',
            description: 'Conclude your journey admiring the majestic Palau Nacional at the foot of Montjuïc, followed by an exquisite final dinner featuring Catalan wines and crema catalana.',
            location: 'Plaça d’Espanya & Sant Antoni',
            category: 'food',
            duration: '3 hours',
            costEstimate: '€35 – €60 USD',
            insiderTip: 'Sant Antoni neighborhood next door is currently Barcelona’s top foodie hub for creative wine bars and bistro dining.'
          }
        ]
      }
    ],
    packingEssentials: [
      'Crossbody bag with secure zippers (pickpocket deterrent in crowded metro stations)',
      'Comfortable broken-in walking shoes (expect 15,000+ steps daily)',
      'High-SPF sunscreen and sunglasses for intense Mediterranean glare',
      'Lightweight layer for breezy coastal evenings'
    ],
    culinaryHighlights: [
      {
        name: 'Paella & Fideuà',
        description: 'Saffron rice or toasted thin noodles baked in a wide iron pan with cuttlefish, jumbo prawns, and dollops of garlicky allioli.',
        whereToTry: 'Can Solé or 7 Portes in Barceloneta'
      },
      {
        name: 'Pan con Tomate & Jamón Ibérico de Bellota',
        description: 'Crusty rustic bread rubbed with ripe tomatoes, drizzled with virgin olive oil, and topped with acorn-fed cured Iberian ham.',
        whereToTry: 'Cervecería Catalana or Bar del Pla'
      },
      {
        name: 'Crema Catalana',
        description: 'Silky egg-custard infused with lemon peel and cinnamon, topped with a crisp caramelized sugar crust torched to order.',
        whereToTry: 'Granja M. Viader (operating since 1870)'
      }
    ],
    practicalTips: [
      'Advance reservations are non-negotiable for Sagrada Família, Park Güell, and Casa Batlló; book at least 2 weeks in advance during high season.',
      'Lunch is traditionally between 1:30 PM and 3:30 PM, and dinner rarely starts before 8:30 PM or 9:00 PM.',
      'Tap water in Barcelona is safe to drink, though many locals prefer bottled water due to high mineral content.'
    ]
  }
};
