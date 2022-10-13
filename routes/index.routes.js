const router = require("express").Router();
const Event = require('../models/Event.model')
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});



router.get('/keep-alive', (req, res, next) => {
  Event.find()
    .then(() => {
      res.status(200).json({ message: 'Thanks for keeping our project alive!🫶' });
    })
    .catch(() => {
      res.status(500).json({ message: "It didn't work" });
    });
});

module.exports = router;
