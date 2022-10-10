const Event = require("../models/Event.model");
const router = require("express").Router();


router.get("/events", (req, res, next)=> {
    Event.find()
    .then((eventsFromDb) => {
       res.render("events/events-list", {events: eventsFromDb})
    })
    .catch((err) =>{
       console.log("error getting events from DB", err)
       next(err)
    })   
})

router.get("/events/:id", (req, res, next) =>{
    Event.findById(req.params.id)
    .then((eventDetails) => {
        res.render("events/event-details", eventDetails)
    })
    .catch((err) =>{
        console.log("error getting event details from DB", err)
        next(err)
     }) 
})

router.post("/events/:id/delete", (req,res,next) => {
    Event.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect("/events");
    })
    .catch((err) =>{
        console.log("error deleting event in DB", err)
        next(err)
     }) 
})





module.exports = router;