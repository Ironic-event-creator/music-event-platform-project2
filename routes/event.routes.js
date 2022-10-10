const Event = require("../models/Event.model");
const router = require("express").Router();

//2nd Page - Display all events
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

//3rd Page - Display details of an event
router.get("/events/:id", (req, res, next) => {
  Event.findById(req.params.id)
    .then((eventDetails) => {
      res.render("events/event-details", eventDetails);
    })
    .catch((err) => {
      console.log("error getting event details from DB", err);
      next();
    });
});

//4th Page - Display form to create
router.get("/events-create", (req, res, next) => {
  res.render("events/create-event");
  next();
});

//4th Page - Process form to create
router.post("/events-create", (req, res, next) => {
  const eventDetails = {
    title: req.body.title,
    style: req.body.style,
    description: req.body.description,
    locationName: req.body.location.locationName,
    address: req.body.location.address,
    startTime: req.body.startTime,
  };

  Event.create(eventDetails)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log("error creating new event in DB", err);
      next(err);
    });
});

// //5th Page - Display form to edit
// router.get("/events/:eventId/edit", (req, res, next) => {
//   Event.findById(req.params.eventId)
//     .then((eventDetails) => {
//       res.render("events/edit-event", eventDetails);
//     })
//     .catch((err) => {
//       console.log("Error updating event ", err);
//       next();
//     });
// });

// //5th Page - Process form to edit
// router.post("/events/:eventId/edit", (req, res, next) => {
//   const eventId = req.params.eventId;

//   const newDetails = {
//     title: req.body.title,
//     style: req.body.style,
//     description: req.body.description,
//     locationName: req.body.location.locationName,
//     address: req.body.location.address,
//     city: req.body.location.city,
//     startTime: req.body.startTime,
//     comments: req.body.comments,
//   };

//   Event.findByIdAndUpdate(eventId, newDetails)
//     .then(() => {
//       res.redirect(`/events/${eventId}`);
//     })
//     .catch((err) => {
//       console.log("Error updating event", err);
//       next();
//     });
// });

//3rd Page - Delete event
router.post("/events/:id/delete", (req, res, next) => {
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
