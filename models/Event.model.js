const { Schema, model } = require("mongoose");
const eventSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        style: {
            type: String,
            required: true,
            enum: ['Rock', 'Jazz', 'Pop', 'Blues']
        },
        location: {
            locationName: String,
            address: String,
            city: 'Istanbul',
            required: true,
          },
        created: {
            type: Date,
            required: true,
          },
        userId: [],
    }
)




const Event = model("Event", eventSchema);

module.exports = Event;