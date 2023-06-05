import mongoose from "mongoose";
import { Schema } from mongoose;
const doctorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    licenseNo: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    licensePhoto: {
        type: String,
        required: true,
    },

});

export default doctor;
