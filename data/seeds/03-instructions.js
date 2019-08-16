
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        { steps: "Boil Water", recipe_id: 1 },
        { steps: "Pour in noodles", recipe_id: 1 },
        { steps: "Wait three minutes then eat", recipe_id: 1 },

        { steps: "Pour water", recipe_id: 2 },
        { steps: "Add lemons", recipe_id: 2 },
        { steps: "Add sugar", recipe_id: 2 },
        { steps: "Stir and enjoy", recipe_id: 2 },
      ]);
    });
};
