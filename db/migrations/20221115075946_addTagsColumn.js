/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async  function(knex) {
return knex.schema.dropTable('outfits')
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema.createTable("outfits", (table) => {
    table.increments('id');
    table.string('outfit_name', 255)
      .notNullable();
    table.string('image_ref');
  })
};
