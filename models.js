'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserInfoSchema = new Schema({
    employeeNumber: String,
    firstName: String,
    lastName: String,
    PIN: String,
    address: String
});

var UserInfo = mongoose.model("UserInfo", UserInfoSchema);

module.exports.UserInfo = UserInfo;