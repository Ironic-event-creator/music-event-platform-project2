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
  startTime: {
    type: Date,
    required: true,
  },
  comments: {
    type: [String],
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"} ,
});

const Event = model("Event", eventSchema);

module.exports = Event;
