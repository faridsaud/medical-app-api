const mongoose = require('mongoose');
const validator = require('validator');

const clinicHistorySchema = new mongoose.Schema({

});

module.exports = mongoose.model('ClinicHistory', clinicHistorySchema)
