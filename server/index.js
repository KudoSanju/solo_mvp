const setupServer = require("./server");

const PORT = process.env.PORT || 4000;
const db = require("../db/knex");

const server = setupServer();

(async () => {
  try {
    await db.migrate.latest();
    server.listen(PORT, () => {
      console.log(`app is listening on localhost ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
})();
