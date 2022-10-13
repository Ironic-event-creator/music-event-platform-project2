const Event = require("../models/Event.model");
const User = require("../models/User.model");
const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const isLoggedOut = require("../middleware/isLoggedOut");

// ********* require fileUploader in order to use it *********
const fileUploader = require("../config/cloudinary.config");

//format Date
const hbs = require("hbs");

hbs.registerHelper("dateFormat", require("handlebars-dateformat"));

//Display all events
router.get("/events", (req, res, next) => {
  Event.find()
    .then((eventsFromDb) => {
      res.render("events/events-list", { events: eventsFromDb });
    })
    .catch((err) => {
      console.log("error getting events from DB", err);
      next();
    });
});

//Display all events of user
router.get("/user-events", (req, res, next) => {
  Event.find({ userId: req.session.user._id })
    .then((eventsFromDb) => {
      res.render("events/events-list", { events: eventsFromDb });
    })
    .catch((err) => {
      console.log("error getting events from DB", err);
      next();
    });
});

//Display form to create
router.get("/events-create", isLoggedIn, (req, res, next) => {
  res.render("events/create-event");
});

//Process form to create
router.post(
  "/events-create",
  isLoggedIn,
  fileUploader.single("imageUrl"),
  (req, res, next) => {
    const newImage = req.file.path;
    const eventDetails = {
      title: req.body.title,
      style: req.body.style,
      description: req.body.description,
      location: {
        locationName: req.body.locationName,
        address: req.body.address,
      },
      imageUrl: newImage,
      startTime: req.body.startTime,
      userId: req.session.user._id,
    };

    Event.create(eventDetails)
      .then(() => {
        res.redirect("/events");
      })
      .catch((err) => {
        console.log("error creating new event in DB", err);
        next();
      });
  }
);

//Filter events page
router.get("/:eventStyle", (req, res, next) => {
  const eventStyle = req.params.eventStyle;
  Event.find({ style: eventStyle })
    .then((eventsFromDb) => {
      if (eventsFromDb === null) {
        res.send("sorry, no events with that style");
      } else {
        res.render("events/events-list", { events: eventsFromDb });
      }
    })
    .catch((err) => {
      console.log("Error getting events details from DB", err);
      next();
    });
});

//Display form to edit
router.get("/events/:eventId/edit", isLoggedIn, (req, res, next) => {
  Event.findById(req.params.eventId)
    .then((eventDetails) => {
      res.render("events/edit-event", eventDetails);
    })
    .catch((err) => {
      console.log("Error updating event ", err);
      next();
    });
});

//Display details of an event
router.get("/events/:eventId", (req, res, next) => {
  Event.findById(req.params.eventId)
    .then((eventDetails) => {
      if (req.session.user && eventDetails.userId == req.session.user._id) {
        const eventOwner = { message: "You are the owner of this event" };
        res.render("events/event-details", { eventDetails, eventOwner });
      } else {
        res.render("events/event-details", { eventDetails });
      }
    })
    .catch((err) => {
      console.log("error getting event details from DB", err);
      next();
    });
});
// Process form to post comments
router.post("/events/:eventId", (req, res, next) => {
  const eventId = req.params.eventId;
  const newComment = req.body.commentOwner + " commented: " + req.body.comment 

  Event.findByIdAndUpdate(
    eventId,
    { $push: { comments: newComment } },
    { returnDocument: "after" }
  )
    .then((event) => {
      res.render("events/event-details", { eventDetails: event });
    })
    .catch((err) => {
      console.log("error saving comment in DB", err);
      next();
    });
});

//Process form to edit
router.post("/events/:eventId/edit", isLoggedIn, (req, res, next) => {
  const eventId = req.params.eventId;

  const newDetails = {
    title: req.body.title,
    style: req.body.style,
    description: req.body.description,
    location: {
      locationName: req.body.locationName,
      address: req.body.address,
    },
    startTime: req.body.startTime,
  };

  Event.findByIdAndUpdate(eventId, newDetails)
    .then(() => {
      res.redirect(`/events/${eventId}`);
    })
    .catch((err) => {
      console.log("Error updating event", err);
      next();
    });
});

//Delete event
router.post("/events/:id/delete", isLoggedIn, (req, res, next) => {
  Event.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/events");
    })
    .catch((err) => {
      console.log("error deleting event in DB", err);
      next(err);
    });
});

module.exports = router;
