const Favorites = require('./Favorites');

const User = require('./User');

const Games = require('./Games');



User.belongsToMany(Games, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Favorites,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'user_favorites',
  foreignKey: 'user_id',
});

Games.belongsToMany(User, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Favorites,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'favorited_games',
  foreignKey: 'games_id'
});

module.exports = { User, Games, Favorites };
