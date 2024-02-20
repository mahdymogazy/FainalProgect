import { Schema } from 'mongoose';

const placeSchema = Schema({
    place_id: Number,
    place_name: {
        type:String,
        minLength: 10,
        maxLength: 20
    },
    description:{
        type:String,
        minLength: 20,
        maxLength: 100
    },
    neighborhood_overview: String,
    picture_url: String,
    location: {
        type:String,
        minLength: 20,
    },
    latitude: Number,
    longitude: Number,
    property_type: [{
        type:String
        }],
    room_type: String,
    accommodates: Number,
    bedrooms: Number,
    beds: Number,
    amenities: [{
        type:String 
        }],
    price: String,
    has_availability: String,
    license: String,
    instant_bookable: String,
    host_id:{
        // eslint-disable-next-line no-undef
        type: mongoose.Types.ObjectId,
        ref: 'Host'
    },
    review_id:{
        // eslint-disable-next-line no-undef
        type: mongoose.Types.ObjectId,
        ref: 'Review'
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
})

// eslint-disable-next-line no-undef
const Place = mongoose.model('Place', placeSchema);
Place.createIndexes({ place_id : 1 });
Place.createIndexes({ place_name : 1 });
// eslint-disable-next-line no-undef
module.exports = Place;