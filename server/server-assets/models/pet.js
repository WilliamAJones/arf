let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Pet'

let schema = new Schema({
  name: { type: String, required: true },
  age: { type: String },
  breed: { type: String },
  img: { type: String, default: "" },
  petOwnerId: { type: ObjectId, ref: 'PetOwner', required: true },
  noteId: { type: ObjectId, ref: 'Note' },
  checkedIn: { type: Boolean, default: false },
  checkIn: { type: Number, default: 0 },
  checkOut: { type: Number, default: 0 },
  identityId: { type: ObjectId, ref: 'Identity' }
})

module.exports = mongoose.model(schemaName, schema)
// module.exports = router