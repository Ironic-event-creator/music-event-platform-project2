const { Schema, model } = require("mongoose");





const Event = model("Event", eventSchema);

module.exports = Event;