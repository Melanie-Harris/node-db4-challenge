const express = require("express");

const Schemes = require("./scheme-model.js");

const router = express.Router();


router.get("/", async (req, res) => {
Schemes.getRecipes().then(recipe => {
    res.status(200).json(recipe)
})

//   should return a list of all recipes in the database.
//   try {
//     const recipes = await Schemes.getRecipes();
//     res.json(recipes);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to get schemes" });
//   }
});

// router.get("/api/recipes", async (req, res) => {
//   // should return a list of all recipes in the database.
//   try {
//     const recipes = await db("recipes");
//     res.status(200).json(recipes);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });
module.exports = router;