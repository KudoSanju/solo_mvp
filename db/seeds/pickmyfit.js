/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('outfits').del()
  await knex('outfits').insert([
    {outfit_name: 'knitdress', image_ref: 'https://i.pinimg.com/564x/81/86/d1/8186d1d564986cf75791259108f2561d.jpg',  tags:'fall outfits'},
    {outfit_name: 'blazer', image_ref: 'https://i.pinimg.com/236x/59/0d/1d/590d1d4a35debcf2458958b15d968208.jpg', tags: 'casual,blazers'},
    {outfit_name: 'denim', image_ref: 'https://i.pinimg.com/564x/cc/32/df/cc32dfed30a6428a86a4ef568a4c3438.jpg', tags: 'casual,blazers'},
    {outfit_name: 'sweaters', image_ref: 'https://i.pinimg.com/564x/0b/79/76/0b7976e1647e140e37f43abbad1ccbd3.jpg',tags: 'fall knits'},
    {outfit_name: 'red-dress', image_ref: 'https://i.pinimg.com/564x/b4/7b/b5/b47bb5424ada46adc4b920515d138188.jpg', tags: 'date dresses'},
    {outfit_name: 'maxidress', image_ref: 'https://i.pinimg.com/564x/b6/dd/fb/b6ddfb6e1eccc297b82872feddefd3d9.jpg', tags: 'spring outfits'},
    
  ]);
};
