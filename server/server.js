const express = require("express");
 
function setupServer() {
  const app = express(); //initializing server

  app.use(express.json())
  app.get("/api/test",(req,res) => {
    res.status(200).send("Hello");
  })
  return app;
}

module.exports = setupServer;