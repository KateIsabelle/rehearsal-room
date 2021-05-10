INSERT INTO spaces (user_id, title, description, thumbnail_photo_url, cover_photo_url, country, street, city, province, post_code,  price_per_day, price_per_hour,  
  wifi,
  sound_proofing,
  sprung_floor,
  kitchenette,
  mirrors,
  sound_system,
  bathroom,
  indoor_space,
  outdoor_space,
  bike_parking,
  street_parking,
  private_parking,
  piano,
  natural_light,
  air_conditioning,
  ten_ft_plus_ceiling,
  private,
  semi_private,
  wheelchair_accessible,
  self_entry,
  
  active
  )
VALUES (1, 
   'PL1422',
   'description that is detailed', 
   'http://cdn.home-designing.com/wp-content/uploads/2015/08/simple-interior-design.jpg', 
   'http://cdn.home-designing.com/wp-content/uploads/2015/08/simple-interior-design.jpg', 
   'Canada', 
   '1422 William St', 
   'Vancouver', 
   'BC', 
   'V5L 2P7', 
   190, 
   40,
   TRUE, --wifi
   TRUE, --sound_proofing
   TRUE, --sprung_floor
   TRUE, --kitchenette
   FALSE, --mirrors
   TRUE, --sound_system
   TRUE, --bathroom
   TRUE, --indoor_space
   FALSE, --outdoor_space
   TRUE, --bike_parking
   FALSE, --street_parking
   TRUE, --private_parking
   FALSE, --piano
   FALSE, --natural_light
   TRUE, --air_conditioning
   TRUE, --10_ft_plus_ceiling
   FALSE, --private
   TRUE, --semi_private
   TRUE, --wheelchair_accessible
   FALSE, --self_entry
  
   TRUE --active
),
(  3, 
   'Dusty Flower Shop',
   'description that is detailed', 
   'https://images.dwell.com/photos-6242537032151076864/6495845600185012224-medium/luckdrops-studio-is-a-one-bedroom-one-bathroom-shipping-container-home-with-287-square-feet-of-living-space-the-dollar38000-home-features-light-bright-and-modern-interiors-that-are-miles-away-from-what-you-might-expect-the-inside-of-a-shipping-container-t.jpg', 
   'https://images.dwell.com/photos-6242537032151076864/6495845600185012224-medium/luckdrops-studio-is-a-one-bedroom-one-bathroom-shipping-container-home-with-287-square-feet-of-living-space-the-dollar38000-home-features-light-bright-and-modern-interiors-that-are-miles-away-from-what-you-might-expect-the-inside-of-a-shipping-container-t.jpg',
   'Canada', 
   '345 Prior Street', 
   'Vancouver', 
   'BC', 
   'V5K1G9', 
   100, 
   15,
   TRUE, --wifi
   FALSE, --sound_proofing
   TRUE, --sprung_floor
   TRUE, --kitchenette
   TRUE, --mirrors
   TRUE, --sound_system
   TRUE, --bathroom
   TRUE, --indoor_space
   FALSE, --outdoor_space
   TRUE, --bike_parking
   TRUE, --street_parking
   FALSE, --private_parking
   TRUE, --piano
   FALSE, --natural_light
   FALSE, --air_conditioning
   TRUE, --10_ft_plus_ceiling
   TRUE, --private
   FALSE, --semi_private
   TRUE, --wheelchair_accessible
   TRUE, --self_entry
  
   TRUE --active
),
(  3, 
   'China Cloud',
   'description', 
   'https://snobette.com/wp-content/uploads/2020/04/drake-toronto-home-interior-1024x752.jpg', 
   'https://snobette.com/wp-content/uploads/2020/04/drake-toronto-home-interior-1024x752.jpg', 
   'Canada', 
   '524 Main St.', 
   'Vancouver', 
   'BC', 
   'V6A2T9', 200, 25,
   TRUE, --wifi
   TRUE, --sound_proofing
   FALSE, --sprung_floor
   TRUE, --kitchenette
   FALSE, --mirrors
   TRUE, --sound_system
   TRUE, --bathroom
   TRUE, --indoor_space
   FALSE, --outdoor_space
   FALSE, --bike_parking
   TRUE, --street_parking
   FALSE, --private_parking
   TRUE, --piano
   FALSE, --natural_light
   FALSE, --air_conditioning
   TRUE, --10_ft_plus_ceiling
   TRUE, --private
   FALSE, --semi_private
   FALSE, --wheelchair_accessible
   TRUE, --self_entry
  
   TRUE --active
),
(  4, 
   'Mount Pleasant Legion',
   'basement space', 
   'https://i.pinimg.com/originals/00/1a/40/001a40069ceb074d63c3702e70c416c2.jpg', 
   'https://i.pinimg.com/originals/00/1a/40/001a40069ceb074d63c3702e70c416c2.jpg', 
   'Canada', 
   '2655 Main St.', 
   'Vancouver', 
   'BC', 
   'V5T3E7', 
   0, 
   0,
   FALSE, --wifi
   TRUE, --sound_proofing
   FALSE, --sprung_floor
   FALSE, --kitchenette
   FALSE, --mirrors
   FALSE, --sound_system
   TRUE, --bathroom
   TRUE, --indoor_space
   FALSE, --outdoor_space
   FALSE, --bike_parking
   TRUE, --street_parking
   FALSE, --private_parking
   TRUE, --piano 
   FALSE, --natural_light
   FALSE, --air_conditioning
   FALSE, --10_ft_plus_ceiling
   FALSE, --private
   TRUE, --semi_private
   FALSE, --wheelchair_accessible
   FALSE, --self_entry
  
   TRUE --active
),
(  4, 
   'Trinity Grace United Church',
   'congregation space', 
   'https://static.giggster.com/images/location/fe135fbe-78f8-414f-b678-f9d71af96644/d079a02c-6315-4f70-b441-f2ad44dc0883/full_hd_retina.jpeg', 
   'https://static.giggster.com/images/location/fe135fbe-78f8-414f-b678-f9d71af96644/d079a02c-6315-4f70-b441-f2ad44dc0883/full_hd_retina.jpeg', 
   'Canada', 
   '803 E 16th Ave', 
   'Vancouver', 
   'BC', 
   'V5T2V7', 
   80, 
   10,
   FALSE, --wifi
   FALSE, --sound_proofing
   FALSE, --sprung_floor
   TRUE, --kitchenette
   FALSE, --mirrors
   TRUE, --sound_system
   TRUE, --bathroom
   TRUE, --indoor_space
   FALSE, --outdoor_space
   FALSE, --bike_parking
   TRUE, --street_parking
   TRUE, --private_parking
   TRUE, --piano
   TRUE, --natural_light
   FALSE, --air_conditioning
   TRUE, --10_ft_plus_ceiling
   FALSE, --private
   TRUE, --semi_private
   TRUE, --wheelchair_accessible
   FALSE, --self_entry
  
   TRUE --active
),
(  3, 
   'Elm Park Field House',
   'in park space', 
   'https://d4qwptktddc5f.cloudfront.net/Interior-Design-Carol-Kurth-Architecture-Laura-Bohn-Design-Associates-idx191102_lb01_3-WHOMES19.jpg', 
   'https://d4qwptktddc5f.cloudfront.net/Interior-Design-Carol-Kurth-Architecture-Laura-Bohn-Design-Associates-idx191102_lb01_3-WHOMES19.jpg', 
   'Canada', 
   'Elm Park, Elm St', 
   'Vancouver', 
   'BC', 
   'V6N1A7', 
   60, 
   10,
   FALSE, --wifi
   FALSE, --sound_proofing
   FALSE, --sprung_floor
   TRUE, --kitchenette
   FALSE, --mirrors
   TRUE, --sound_system
   TRUE, --bathroom
   TRUE, --indoor_space
   TRUE, --outdoor_space
   TRUE, --bike_parking
   TRUE, --street_parking
   FALSE, --private_parking
   FALSE, --piano
   TRUE, --natural_light
   FALSE, --air_conditioning
   TRUE, --10_ft_plus_ceiling
   FALSE, --private
   TRUE, --semi_private
   TRUE, --wheelchair_accessible
   TRUE, --self_entry
  
   TRUE --active
),
(  4, 
   'Whatlab',
   'description ceiling fans', 
   'https://i.pinimg.com/originals/96/e4/8b/96e48b7a56ef991978dc4a9dc0746d3d.jpg', 
   'https://i.pinimg.com/originals/96/e4/8b/96e48b7a56ef991978dc4a9dc0746d3d.jpg', 
   'Canada', 
   '1814 Pandora St', 
   'Vancouver', 
   'BC', 
   'V5L1M5', 
   80, 
   20,
   TRUE, --wifi
   FALSE, --sound_proofing
   TRUE, --sprung_floor
   TRUE, --kitchenette
   FALSE, --mirrors
   TRUE, --sound_system
   TRUE, --bathroom
   TRUE, --indoor_space
   FALSE, --outdoor_space
   FALSE, --bike_parking
   TRUE, --street_parking
   FALSE, --private_parking
   FALSE, --piano
   TRUE, --natural_light
   FALSE, --air_conditioning
   TRUE, --10_ft_plus_ceiling
   TRUE, --private
   FALSE, --semi_private
   FALSE, --wheelchair_accessible
   TRUE, --self_entry
  
   TRUE --active
),
(  3, 
   'GoldSaucer',
   'description', 
   'https://images.designtrends.com/wp-content/uploads/2016/09/30145835/Square-Backyard-Garden-Design1.jpg', 
   'https://images.designtrends.com/wp-content/uploads/2016/09/30145835/Square-Backyard-Garden-Design1.jpg', 
   'Canada', 
   '207 W Hastings St', 
   'Vancouver', 
   'BC', 'V6B2N4', 
   80, 
   20,
   TRUE, --wifi
   TRUE, --sound_proofing
   TRUE, --sprung_floor
   TRUE, --kitchenette
   FALSE, --mirrors
   TRUE, --sound_system
   TRUE, --bathroom
   TRUE, --indoor_space
   FALSE, --outdoor_space
   FALSE, --bike_parking
   TRUE, --street_parking
   FALSE, --private_parking
   FALSE, --piano
   TRUE, --natural_light
   FALSE, --air_conditioning
   TRUE, --10_ft_plus_ceiling
   TRUE, --private
   FALSE, --semi_private
   FALSE, --wheelchair_accessible
   TRUE, --self_entry
  
   TRUE --active
),
(  4, 
   'Capoeira Ache Brazil Academy',
   'description', 
   'https://cdn-prod.thisopenspace.com/photos/files/000/041/727/small/20170901_135729.jpg?1516992233', 
   'https://cdn-prod.thisopenspace.com/photos/files/000/041/721/banner/20170709_151933.jpg?1516991647', 
   'Canada', 
   '341 E Broadway', 
   'Vancouver', 
   'BC', 
   'V5T1W5', 
   250, 
   35,
   TRUE, --wifi
   FALSE, --sound_proofing
   TRUE, --sprung_floor
   FALSE, --kitchenette
   FALSE, --mirrors
   TRUE, --sound_system
   TRUE, --bathroom
   TRUE, --indoor_space
   FALSE, --outdoor_space
   FALSE, --bike_parking
   TRUE, --street_parking
   FALSE, --private_parking
   FALSE, --piano
   TRUE, --natural_light
   TRUE, --air_conditioning
   TRUE, --10_ft_plus_ceiling
   FALSE, --private
   TRUE, --semi_private
   TRUE, --wheelchair_accessible
   TRUE, --self_entry
  
   TRUE --active
);