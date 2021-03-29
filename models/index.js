const User = require('./User');

const Games = require('./Games');

const Favorites = require('./Favorites');

User.belongsToMany(Games, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Favorites,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'user_favorites'
});

Games.belongsToMany(User, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Favorites,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'favorited_games'
});

module.exports = { User, Games, Favorites };
