const mongoose = require('mongoose');

const MemeSchema = new mongoose.Schema({
    meme_img: {
        type: String 
    },
    meme_img_link: {
        type: String
    }

}, {
    timestamps: true
}
);
const Meme = mongoose.model("Meme", MemeSchema);
module.exports = Meme;