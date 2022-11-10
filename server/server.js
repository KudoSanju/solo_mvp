const express = require("express");
const db =require('../db/knex');
 
function setupServer() {
  const app = express(); //initializing server

  app.use(express.json());

  app.get("/api/test",(req,res) => {
    res.status(200).send("Hello");
  });

  app.get("/api/outfits", async (req,res) => {
    //db = pickmyfit
    //table= outfits
    try{
      const outfits = await db('outfits')
      .select('*')
      .from('outfits')
      //.timeout(1500);
      //outfits.length > 0
      //?
      res.status(200).send(outfits)
      //:res.status(404).send('no outfits found');
      
    }catch(err) {
      res.status(500).send(err)
    }
    
  })
  return app;
}

module.exports = setupServer;