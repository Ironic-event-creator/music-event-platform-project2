const mongoose = require("mongoose");
const Event = require("../models/Event.model");

const MONGO_URI = require("../utils/consts");

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo with initial data! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

// Event.collection.drop();  // Warning, drops event collection :)

const events = [
  {
    title: "Flapper Swing",
    style: "Jazz",
    description: `Bringing the music and atmosphere of the 1920s and 1930s known as the “golden age of jazz” to the present day, Flapper Swing invites their listeners to a journey in time with its authentic sound and cheerful repertoire at touché on the evening of October 19th. Get ready for an unforgettable night both visually and audibly with the harmony of Manouche guitars, double bass, saxophone and vocals on stage!`,
    location: {
      locationName: "Zorlu PSM - Touche",
      address: "Levazim, Koru Sokagi No:2, 34340 Besiktas/Istanbul, Turkey",
    },
    startTime: new Date("October 19, 2022 21:00:00"),
  },
  {
    title: "Snarky Puppy",
    style: "Jazz",
    description: `Nearly 2000 shows, 13 albums, 4 Grammy awards, 8 JazzTimes and Downbeat awards, hundreds of master classes at educational institutions all over the world and many more… Snarky Puppy unites us with their latest album Live At The Royal Albert Hall, that has already embraced the Grammy award.`,
    location: {
      locationName: "Zorlu PSM - Turkcell Stage",
      address: "Levazim, Koru Sokagi No:2, 34340 Besiktas/Istanbul, Turkey",
    },
    startTime: new Date("November 05, 2022 21:00:00"),
  },
  {
    title: "Parov Stelar",
    style: "Pop",
    description: `One of the most admired electro swing musicians of Austria and the world, Parov Stelar and his band will be on the stage of Istanbul Festival Park Kadıköy on Saturday, June 03, 2023, with the organization of Bayhan Music, as part of the "Venom Tour 2023" world tour with their renewed stage shows, new songs and live performances after 10 years. is coming. Parov Stelar & Band will offer Istanbulites a unique night full of dance.`,
    location: {
      locationName: "Festival Park Kadikoy",
      address:
        "Caferaga, Turyol Kadikoy Eminonu Karakoy Hatti, 34710, Kadikoy/Istanbul, Turkey",
    },
    startTime: new Date("November 03, 2022 21:00:00"),
  },
  {
    title: "New York Standards Trio",
    style: "Blues",
    description: `The New York Standards Trio is comprised by three musicians, all weathered in the Jazz scene of New York City. As is apparent by the name, the group is focusing its efforts on interpreting music out of the standard repertoir of Blues.`,
    location: {
      locationName: "Nardiss Jazz Club",
      address:
        "Bereketzade Mahallesi, Galata Kulesi Sokak, No:8, 34421 Beyoglu/Istanbul, Turkey",
    },
    startTime: new Date("October 25, 2022 21:00:00"),
  },
  {
    title: "Palaye Royale",
    style: "Rock",
    description: `Las Vegas-based Canadian-American rock band Palaye Royale, founded in 2008 by brothers Remington Leith (vocal), Sebastian Danzig (guitar) and Emerson Barrett (drums), is coming to %100 Studio on the evening of March 10 and 11, 2023!`,
    location: {
      locationName: "Zorlu PSM - %100 Studio",
      address: "Levazim, Koru Sokagi, No:2, 34340 Besiktas/Istanbul, Turkey",
    },
    startTime: new Date("November 17, 2022 21:00:00"),
  },
];

const eventsPromise = Event.create(events);

Promise.all([eventsPromise])
  .then((result) => {
    const eventsCreated = result[0];
    console.log(`Number of events created... ${eventsCreated.length} `);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch((e) => console.log("error seeding data in DB....", e));
