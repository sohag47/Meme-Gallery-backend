//! import models
const Meme = require('../../model/Meme');
const fs = require('fs');

//! create user

function createMeme(req, res){
    const {meme_img_link} = req.body;
    const meme_img = req.file;

    if(meme_img_link !== "undefined"){
        const meme = new Meme({
            meme_img: meme_img,
            meme_img_link: meme_img_link,
            
        })
        try {
            console.log(meme);
            meme.save();
            res.json({ msg: 'Add new Meme Successfully' })
        }
        catch(err){
                res.status(500).json({error: 'Unable to add Meme!!!'})
            }
    }
    else if(meme_img !== "undefined"){
        let img = fs.readFileSync(meme_img.path)
        let encoded_image = img.toString('base64')
        // console.log(encoded_image);

        const meme = new Meme({
            meme_img: encoded_image,
            meme_img_link: meme_img_link,
            
        })
        try {
            console.log(meme);
            meme.save();
            res.json({ msg: 'Add new Meme Successfully' })
        }
        catch(err){
                res.status(500).json({error: 'Unable to add Meme!!!'})
            }

    }
    else{
        res.status(400).json({err: "use meme link or image"});
    }
    
    
}


//! read user
function getMeme(req, res) {
    Meme.find()
    .then(memes => res.status(200).json(memes))
    .catch(error => res.status(404).json({nomemefound: 'No Meme Found!!!'}))
};


//! delete user
function deleteMeme(req, res){
    Meme.findByIdAndRemove(req.params.id, req.body)
    .then(meme => res.status(200).json({msg: "Delete Meme Successfully!"}))
    .catch(error => res.status(400).json({error: "Unable to delete this meme"}))
}


//! export all functions
module.exports = { 
    add_meme: createMeme,
    meme_list: getMeme,
    remove_meme: deleteMeme
    
}
