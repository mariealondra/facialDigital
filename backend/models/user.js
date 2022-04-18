const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    nombre: {type: String, required: true},
    email: {type: String, required: true},
    passw: {type: String, required: true},
    imagen: {type: String},
    created_at: {type: Date, default: Date.now}
});

module.exports = model('User', UserSchema);