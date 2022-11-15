const express = require("express");
const db = require("../db/knex");
const knex = require("../db/knex");
const fileUpload = require('express-fileupload');
const path = require("path");


function setupServer() {
  const app = express();
  app.use(express.json());
  app.use(express.static(path.resolve(__dirname,'../client/build')));

  app.get("/api/test", (req, res) => {
    res.status(200).send("Hello");
  });

  app.get("/api/outfits", async (req, res) => {
    try {
      const outfits = await db("outfits").select("*");
      outfits.length > 0
        ? res.status(200).send(outfits)
        : res.status(404).send("No outfits found");
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.get("/api/outfits/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const outfits = await db("outfits").select("*").where("id", id);

      outfits.length > 0
        ? res.status(200).send(outfits[0])
        : res.status(404).send("No outfits found");
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.post("/api/outfits", async (req, res) => {
    try {
      const newOutfit = req.body;

      const outfits = await db("outfits").insert(newOutfit);

      res.status(200).send("Post Successful");
    } catch (err) {
      res.status(500).send(err);
    }
  });
  app.post('/upload', async (req, res) => {
    try {
      await db("outfits").insert(req.body);
    } catch (error) {
      console.log(error)
    }
    
  });
  app.delete("/api/outfits/:id", async (req, res) => {
    try {
      const id = req.params.id;

      const outfits = await db("outfits").where("id", id).del();

      res.status(200).send("Delete Successful");
    } catch (err) {
      res.status(500).send(err);
    }
  });
  app.patch("/api/outfits/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const updatedOutfit = req.body;

      const outfits = await db("outfits").where("id", id).update(updatedOutfit);

      //outfits.length >= 0
      //?
      res.status(200).send("Patch Successful");
      //: res.status(404).send("No outfits found");
    } catch (err) {
      res.status(500).send(err);
    }
  });

  return app;
}

module.exports = setupServer;
