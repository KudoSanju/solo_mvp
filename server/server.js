const express = require("express");
const knex = require("../db/knex");
// const db =require('../db/knex');
 
function setupServer() {
  const app = express(); //initializing server

  app.use(express.json());

  app.get("/api/test",(req,res) => {
    res.status(200).send("Hello");
  });

  

  app.get("/api/outfits", (req,res) => {
    const outfits = knex.select('*').from(outfits) 
    res.status(200).send(outfits);
    // try{
    //   const outfits = await knex ('outfits')
    //   .select('*')
    //   .timeout(1500);
    //   outfits.length > 0
   
    //   :res.status(404).send('no outfits found');
      
    // }catch(err) {
    //   res.status(500).send(err)
    // }
    
  })
  return app;
}

module.exports = setupServer;