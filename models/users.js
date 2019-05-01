const mongoose = require("mongoose");
const Schema = mongoose.Schema;

return new Schema({
  id: String,
  user: String,
  deviceId: String,
  sensors: [
    {
      sensorId: String,
      schedule: [{ duration: Number, days: [{ day: String, time: Number }] }]
    }
  ]
});
