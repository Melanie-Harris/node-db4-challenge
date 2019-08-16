
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('recipes', tbl =>{
        tbl.increments();//gives you id
        tbl.text('recipe_name', 128)
            .unique()
            .notNullable()
    })
    .createTable('shoppingList', tbl => {
        tbl.increments();
        tbl.text("ingredients_name", 128)
            .notNullable();
        tbl.integer("quantity", 128)
            .notNullable();
        tbl.integer("recipe_id")// creates foreign key that connects
          .unsigned() // restrictions for positive numbers only
          .notNullable()
          .references("id") // references a specific id number
          .inTable("recipes")// connects two tables
          .onUpdate("CASCADE")// changes all occurrences of the id
          .onDelete("CASCADE")// changes all occurrences of the id
    })
    .createTable('instructions', tbl => {
        tbl.increments();
        tbl.string('steps')
            .notNullable()
        tbl.integer("recipe_id")// creates foreign key that connects
          .unsigned() // restrictions for positive numbers only
          .notNullable()
          .references("id") // references a specific id number
          .inTable("recipes")// connects two tables
          .onUpdate("CASCADE")// changes all occurrences of the id
          .onDelete("CASCADE")// changes all occurrences of the id
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("instructions")
    .dropTableIfExists("shoppingList")
    .dropTableIfExists("recipes");
};
