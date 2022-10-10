const { Schema, model } = require("mongoose");
const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  style: {
    type: String,
    required: true,
    enum: ["Rock", "Jazz", "Pop", "Blues"],
  },
  description: {
    type: String,
  },
  location: {
    locationName: String,
    address: String,
    city: {
      type: String,
      default: "Istanbul",
    },
  },
  created: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  comment: {
    type: [String],
  },
  userId: [],
});

const Event = model("Event", eventSchema);

module.exports = Event;
