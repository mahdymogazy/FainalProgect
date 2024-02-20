// eslint-disable-next-line no-unused-vars
import { Schema, model } from 'mongoose';
import { mongoose } from 'mongoose';

const guestSchema = Schema({
    guest_id: Number,
    guest_name : {
        type: String,
        required: true,
        unique: true
    },
    email: String,
    password:{
        type : String
    },
    guest_since: {
        type: Date,
        default: Date.now
    },
    guest_picture_url: String,
    guest_verifications: [{
        type: String
    }],
    guest_identity_verified: String
})

const Guest = mongoose.model('Guest', guestSchema);
Guest.createIndexes({ guest_id : 1 });
// eslint-disable-next-line no-undef
module.exports = Guest