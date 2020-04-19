const express = require('express')
const Battle= require('../models/battle.model')
const router = new express.Router()

//working
router.get('/hello', (req,res)=>{
    res.send('got battles site')
})

//fetching all battles
// router.get('/battles', async (req,res)=> {
//    try{
//     const battles = await Battle.find({})
//     res.json(battles);

//    }catch(e) {
//       res.status(500).send()
//    }
// })

//working
router.get('/list', async (req,res)=> {
    try {
        const list = await Battle.distinct('location',{"location":{$ne:null || ""}})
        res.json(list)
    } catch(e) {
       res.status(500).send()
    }
})

router.get('/battles', async (req,res)=> {
   try {
       const battles = await Battle.distinct('name',{"name":{$ne:null || ""}})
       res.json(battles)
   } catch(e) {
      res.status(500).send()
   }
})

//working
router.get('/count', async (req,res)=> {
   try{
     const count = await Battle.countDocuments({})
        res.status(200).send(String(count));
   } catch(e) {
      res.status(500).send()
   }
})


router.get('/search', async (req,res) =>{
  const {king, type, region, location, year, attacker, name} = req.query;
   try{
     const searchResult = await Battle.find({ $or: [ {attacker_king : king }, {name}, {defender_king : king}, {region}, {battle_type: type}, {location}, {year}, {attacker_1: attacker} ]})
     res.send(searchResult)
   }  catch(e){
      res.status(500).send()
   }
  })

module.exports= router;