const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    lname: String,
    fname: String,
    email: String,
    age: Number,
    mobile: Number,
    address: String,
    boname: String,
    bolname: String,
    boemail: String,
    gstno: Number,
    state: String,
    loan: Number,
    timep: Number,
    interest: Number,
    totalinterest: Number,
    payback: Number,

})

module.exports = mongoose.model('customers', userSchema);
