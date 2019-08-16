const knex = require("knex");
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);


module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("recipes")
    .InnerJoin("schemes", "steps.scheme_id", "schemes.id")
    .select(
      "steps.id",
      "schemes.scheme_name",
      "steps.step_number",
      "steps.instructions"
    )
    .where("steps.scheme_id", id)
    .orderBy("steps.step_number");
}

 function getInstructions(recipe_id) {
   return db("recipes");
 }
