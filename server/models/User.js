const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  files: {
    type: Array
  },
}, {
  collection: 'users'
})

module.exports = mongoose.model('User', userSchema)