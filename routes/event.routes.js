const Event = require("../models/Event.model");
const router = require("express").Router();


router.get("/events", (req, res, next)=> {
    Event.find()
    .then((eventsFromDb) => {
       res.render("/events/events-list", {eventsFromDb})
    })
    .catch((err) =>{
       console.log("error getting events from DB", err)
       next(err)
    })   
})

module.exports = router;