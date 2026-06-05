const express = require('express');
const router = express.Router();
const {Favorite}= require('../models/Favorite')
router.post('/favoriteNumber',(req,res) => {
    


    //mongoDB에서 Favorite 숫자 가져오기
    Favorite.find({"movieId": req.body.movieId})
        .exec((err, info) => {
            if(err) return res.status(400).send(err)
                //프론트에 숫자 정보 보내주기

            res.status(200).json({success:true, favoriteNumber: info.length})
        })

    


})
router.post('/favorited',(req,res) => {
    //내가 Favorite 리스트에 널었는지 DB에서 가져오기


    //mongoDB에서 Favorite 숫자 가져오기
    Favorite.find({"movieId": req.body.movieId, "userFrom": req.body.userFrom})
        .exec((err, info) => {
            if(err) return res.status(400).send(err)
                 //프론트에 숫자 정보 보내주기
            let resurt = false;
            if(info.length !==0){
                resurt= true;
            }
            res.status(200).json({success:true, favorited: resurt})
        })

   


})

router.post('/removeFromFavorite',(req,res) => {
    
   Favorite.findOneAndDelete({movieId:req.body.movieId, userFrom: req.body.userFrom})
        .exec((err,doc) => {
            if(err) return res.status(400).send(err)
            return res.status(200).json({success: true})
        })


})

router.post('/addToFavorite',(req,res) => {
    

    const favorite = new Favorite(req.body)
    favorite.save((err, doc) => {
        if(err) return res.status(400).send(err)
        return res.status(200).json({success: true})
    })

})



router.post('/getFavoredMovie',(req,res) => {
    
    Favorite.find({'userFrom':req.body.userFrom})
        .exec((err,favorites)=>{
            if(err) return res.status(400).send(err)
            return res.status(200).json({success: true,favorites})
        })
})

router.post('/removeFromFavorite',(req,res) => {
    Favorite.findOneAndDelete({movieId: req.body.movieId,userFrom:req.body.userFrom})
        .exec((err,result) => {
            if(err) return res.status(400).send(err)
            return res.status(200).json({success: true})
        
            })
    
})
module.exports = router;
