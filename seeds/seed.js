const sequelize = require('../config/connection');

const { User, Games, Favorites } = require('../models');

const userData = require('./userData.json');

const gameData = require('./gameData.json');

const favoritesData = require('./favoritesData.json');


const seedDatabase = async () => {

  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {

    individualHooks: true,

    returning: true,

  });

  const games = await Games.bulkCreate(gameData);

  const favorites = await Favorites.bulkCreate(favoritesData);



  process.exit(0);
  
};

seedDatabase();
