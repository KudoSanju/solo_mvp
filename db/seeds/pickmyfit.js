/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('outfits').del()
  await knex('outfits').insert([
    {outfit_name: 'knitdress', image_ref: 'rowValue1'},
    {outfit_name: 'blazer', image_ref: 'rowValue1'},
    {outfit_name: 'denim', image_ref: 'rowValue1'},
    {outfit_name: 'sweaters', image_ref: 'rowValue1'},
    {outfit_name: 'red-dress', image_ref: 'rowValue1'},
    {outfit_name: 'maxidress', image_ref: 'rowValue1'},
    
  ]);
};
