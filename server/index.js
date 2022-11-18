const setupServer = require("./server");
const PORT = process.env.PORT || 4000;
const db = require("../db/knex");
const server = setupServer();

(() => {
  try {
    server.listen(PORT, () => {
      console.log(`app is listening on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
})();
