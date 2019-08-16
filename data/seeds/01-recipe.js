
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex("recipe").insert([
        { recipe_name: "Instant Ramen" },
        { recipe_name: "Lemonade" },
      ]);
    });
};
