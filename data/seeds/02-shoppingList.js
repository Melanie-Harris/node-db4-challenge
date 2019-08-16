
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("shoppingList")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("shoppingList").insert([
        { ingredients_name: "Ramen Noodles", quantity: 1, recipe_id: 1 },
        { ingredients_name: "Hot Water", quantity: 1, recipe_id: 1 },
        
        { ingredients_name: "Lemons", quantity: 7, recipe_id: 2 },
        { ingredients_name: "Sugar", quantity: 1, recipe_id: 2 },
        { ingredients_name: "Water", quantity: 1, recipe_id: 2 }
      ]);
    });
};
