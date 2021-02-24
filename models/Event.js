const { Schema, model } = require('mongoose');
const User = require('./User');

const EventSchema = Schema({
  title: {
    type: String,
    required: true
  },
  note: {
    type: String,
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: User,
    required: true
  }
})


EventSchema.method('toJSON', function(){
  const { _id, ...object} =this.toObject();
  object.id = _id
  return object
});

module.exports = model('Event', EventSchema);