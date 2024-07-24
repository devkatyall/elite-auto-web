
const reviews = [
  {
      date: "2 days ago",
      name: "Dev Katyal",
      stars: 5,
      description: "Amazing crew! At first, I was being doubtful of picking but then I was taken away by their professionalism throughout the process. These boys are serious about what they do, they made sure that they delivered what I was looking for even if it took them extra time- well to be real I should have been more clear with my words. Totally worth the money, see you guys around in Durham Region 😉"
  },
  {
      date: "a month ago",
      name: "John McDonald",
      stars: 5,
      description: "Unbelievable!  My truck is 4 years old and had never been cleaned. I have a yellow lab so it was full of dog hair and mud. Lab’s love mud!  They came over on a Sunday and did a fantastic job. The interior looks better than the day I drove to home from the dealer. Great job guys! I’ll be hiring you again!"
  },
  {
      date: "3 days ago",
      name: "Hailey M",
      stars: 5,
      description: "The guys came and cleaned my SUV today and did an amazing job. Would definitely use them again and refer to everyone I know. Highly recommend."
  },
  {
      date: "4 days ago",
      name: "Festus Idahosa",
      stars: 5,
      description: "Quite extraordinary group of professionals. Very satisfied with the detailing on my car. Will use them again. Thank you guys for a great job.."
  },
  {
      date: "2 weeks ago",
      name: "BBO Leas",
      stars: 5,
      description: "WOW I’m impressed! The best cleaning my car has ever seen and I get it detailed every month. Polite, quiet and fast. It’s a $400 value for $120. Thanks guys!! Will 100% be using Elite Auto Aesthetics again!"
  },
  {
      date: "3 weeks ago",
      name: "Hena Kabir",
      stars: 5,
      description: "Sebastian at Elite auto is amazing - they are prompt and provide great customer service. Sebastian did a great job at detailing my Minivan interior and paid attention to details. He is polite and a respectful young man and does his job with dedication. My van looks new!! I highly recommend Elite Auto."
  },
  {
      date: "2 weeks ago",
      name: "Will Armstrong",
      stars: 5,
      description: "The 2 gentlemen running the business are very polite and are hard workers. They did a very good job cleaning my car effectively and efficiently in a decent amount of time for an amazing price! Definitely calling these guys again without a doubt!"
  },
  {
      date: "2 weeks ago",
      name: "Kalyan Nekkanti",
      stars: 5,
      description: "Sebastian did interior and exterior detailing for my rav4. He has done excellent job and my car looks like a new one after cleaning. Thanks!"
  },
  {
      date: "a month ago",
      name: "Mir Mohsin Ali Khan",
      stars: 5,
      description: "My e450 coupe was pretty dirty was unsure about it being clean to perfection but these guys got it done. Would 100% recommend it."
  },
  {
      date: "a month ago",
      name: "Triv Vick Singh",
      stars: 5,
      description: "Two young professionals and future entrepreneurs provided top notch auto detailing services to me ay my home. Showed up on time, very courteous, took their time and provided exceptional service 👏.  I would definitely recommend Elite Auto Aesthetics to family and friends."
  },
  {
      date: "a month ago",
      name: "Max Cruz",
      stars: 5,
      description: "Amazing customer service, AMAZING SERVICE, quick responses, and very understandable. Don’t hesitate to do business with these guys. 100% coming back."
  },
  {
      date: "a month ago",
      name: "Ali M. Abbas",
      stars: 5,
      description: "Great service, great price, on time, friendly, I'm a happy camper. Thanks."
  },
  {
      date: "2 months ago",
      name: "Pranavan Sathyeswaran",
      stars: 5,
      description: "Car looks a whole lot better now. Great customer service and mobile services."
  },
  {
      date: "2 days ago",
      name: "Dev Katyal",
      stars: 5,
      description: "Amazing crew! At first, I was being doubtful of picking but then I was taken away by their professionalism throughout the process. These boys are serious about what they do, they made sure that they delivered what I was looking for even if it took them extra time- well to be real I should have been more clear with my words. Totally worth the money, see you guys around in Durham Region 😉"
  },
  {
      date: "a month ago",
      name: "John McDonald",
      stars: 5,
      description: "Unbelievable!  My truck is 4 years old and had never been cleaned. I have a yellow lab so it was full of dog hair and mud. Lab’s love mud!  They came over on a Sunday and did a fantastic job. The interior looks better than the day I drove to home from the dealer. Great job guys! I’ll be hiring you again!"
  },
  {
      date: "3 days ago",
      name: "Hailey M",
      stars: 5,
      description: "The guys came and cleaned my SUV today and did an amazing job. Would definitely use them again and refer to everyone I know. Highly recommend."
  },
  {
      date: "4 days ago",
      name: "Festus Idahosa",
      stars: 5,
      description: "Quite extraordinary group of professionals. Very satisfied with the detailing on my car. Will use them again. Thank you guys for a great job.."
  },
  {
      date: "2 weeks ago",
      name: "BBO Leas",
      stars: 5,
      description: "WOW I’m impressed! The best cleaning my car has ever seen and I get it detailed every month. Polite, quiet and fast. It’s a $400 value for $120. Thanks guys!! Will 100% be using Elite Auto Aesthetics again!"
  },
  {
      date: "3 weeks ago",
      name: "Hena Kabir",
      stars: 5,
      description: "Sebastian at Elite auto is amazing - they are prompt and provide great customer service. Sebastian did a great job at detailing my Minivan interior and paid attention to details. He is polite and a respectful young man and does his job with dedication. My van looks new!! I highly recommend Elite Auto."
  },
  {
      date: "2 weeks ago",
      name: "Will Armstrong",
      stars: 5,
      description: "The 2 gentlemen running the business are very polite and are hard workers. They did a very good job cleaning my car effectively and efficiently in a decent amount of time for an amazing price! Definitely calling these guys again without a doubt!"
  },
  {
      date: "2 weeks ago",
      name: "Kalyan Nekkanti",
      stars: 5,
      description: "Sebastian did interior and exterior detailing for my rav4. He has done excellent job and my car looks like a new one after cleaning. Thanks!"
  },
  {
      date: "a month ago",
      name: "Mir Mohsin Ali Khan",
      stars: 5,
      description: "My e450 coupe was pretty dirty was unsure about it being clean to perfection but these guys got it done. Would 100% recommend it."
  },
  {
      date: "a month ago",
      name: "Triv Vick Singh",
      stars: 5,
      description: "Two young professionals and future entrepreneurs provided top notch auto detailing services to me ay my home. Showed up on time, very courteous, took their time and provided exceptional service 👏.  I would definitely recommend Elite Auto Aesthetics to family and friends."
  },
  {
      date: "a month ago",
      name: "Max Cruz",
      stars: 5,
      description: "Amazing customer service, AMAZING SERVICE, quick responses, and very understandable. Don’t hesitate to do business with these guys. 100% coming back."
  },
  {
      date: "a month ago",
      name: "Ali M. Abbas",
      stars: 5,
      description: "Great service, great price, on time, friendly, I'm a happy camper. Thanks."
  },
  {
      date: "2 months ago",
      name: "Pranavan Sathyeswaran",
      stars: 5,
      description: "Car looks a whole lot better now. Great customer service and mobile services."
  }
];

export default reviews;