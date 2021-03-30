const router = require('express').Router();

const { Games, User, Favorites } = require('../models');

const withAuth = require('../utils/auth');



router.get('/', async (req, res) => {

  try {

    const gamesData = await Games.findAll({

      include: [

        {
          model: User,

          as: 'favorited_games',

          attributes: ['name'],

        },
      ],
    });

    // Serialize data so the template can read it
    const games = gamesData.map((game) => game.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 

      ...games, 

      logged_in: req.session.logged_in 

    });
  } catch (err) {

    res.status(500).json(err);
    console.log(err);

  }
});

router.get('/categories', async (req, res) => {

  try {

    const gamesData = await Games.findAll({});

    const games = gamesData.map((game) => game.get({ plain: true }));

    res.render('categories', {

      ...games,

      logged_in: req.session.logged_in

    });
  } catch (err) {

    res.status(500).json(err);
    console.log(err);

  }
});

router.get('/categories/sports', async (req, res) => {

  try {

    const gamesData = await Games.findAll({
      where: {
        genre: 'Sports',
      },
    });

    const games = gamesData.map((game) => game.get({ plain: true }));

    res.render('sports', {

      games: games,

      logged_in: req.session.logged_in

    });
  } catch (err) {

    console.log(err);
    res.status(500).json(err);

  }
});


router.get('/categories/action-adventure', async (req, res) => {

  try {

    const gamesData = await Games.findAll({
      where: {
        genre: 'Action/Adventure',
      },
    });

    const games = gamesData.map((game) => game.get({ plain: true }));

    res.render('actionAdventure', {

      ...games,

      logged_in: req.session.logged_in

    });
  } catch (err) {

    res.status(500).json(err);
    console.log(err);

  }
});


router.get('/categories/rpg', async (req, res) => {

  try {

    const gamesData = await Games.findAll({
      where: {
        genre: 'RPG',
      },
    });

    const games = gamesData.map((game) => game.get({ plain: true }));

    res.render('rpg', {

      ...games,

      logged_in: req.session.logged_in

    });
  } catch (err) {

    res.status(500).json(err);
    console.log(err);

  }
});


router.get('/categories/fps', async (req, res) => {

  try {

    const gamesData = await Games.findAll({
      where: {
        genre: 'FPS',
      },
    });

    const games = gamesData.map((game) => game.get({ plain: true }));

    res.render('fps', {

      ...games,

      logged_in: req.session.logged_in

    });
  } catch (err) {

    res.status(500).json(err);
    console.log(err);

  }
});


router.get('/categories/racing', async (req, res) => {

  try {

    const gamesData = await Games.findAll({
      where: {
        genre: 'Racing',
      },
    });

    const games = gamesData.map((game) => game.get({ plain: true }));

    res.render('racing', {

      ...games,

      logged_in: req.session.logged_in

    });
  } catch (err) {

    res.status(500).json(err);
    console.log(err);

  }
});


router.get('/categories/survival', async (req, res) => {

  try {

    const gamesData = await Games.findAll({
      where: {
        genre: 'Survival',
      },
    });

    const games = gamesData.map((game) => game.get({ plain: true }));

    res.render('survival', {

      ...games,

      logged_in: req.session.logged_in

    });
  } catch (err) {

    res.status(500).json(err);
    console.log(err);

  }
});


router.get('/categories/platformers', async (req, res) => {

  try {

    const gamesData = await Games.findAll({
      where: {
        genre: 'Platformers',
      },
    });

    const games = gamesData.map((game) => game.get({ plain: true }));

    res.render('platformers', {

      ...games,

      logged_in: req.session.logged_in

    });
  } catch (err) {

    res.status(500).json(err);
    console.log(err);

  }
});


router.get('/categories/survival', async (req, res) => {

  try {

    const gamesData = await Games.findAll({
      where: {
        genre: 'Survival',
      },
    });

    const games = gamesData.map((game) => game.get({ plain: true }));

    res.render('survival', {

      ...games,

      logged_in: req.session.logged_in

    });
  } catch (err) {

    res.status(500).json(err);
    console.log(err);

  }
});


router.get('/categories/japaneserpg', async (req, res) => {

  try {

    const gamesData = await Games.findAll({
      where: {
        genre: 'Japanese RPG',
      },
    });

    const games = gamesData.map((game) => game.get({ plain: true }));

    res.render('japaneseRPG', {

      ...games,

      logged_in: req.session.logged_in

    });
  } catch (err) {

    res.status(500).json(err);
    console.log(err);

  }
});


router.get('/categories/horror', async (req, res) => {

  try {

    const gamesData = await Games.findAll({
      where: {
        genre: 'Horror',
      },
    });

    const games = gamesData.map((game) => game.get({ plain: true }));

    res.render('horror', {

      ...games,

      logged_in: req.session.logged_in

    });
  } catch (err) {

    res.status(500).json(err);
    console.log(err);

  }
});


router.get('/categories/fighting', async (req, res) => {

  try {

    const gamesData = await Games.findAll({
      where: {
        genre: 'Fighting',
      },
    });

    const games = gamesData.map((game) => game.get({ plain: true }));

    res.render('fighting', {

      ...games,

      logged_in: req.session.logged_in

    });
  } catch (err) {

    res.status(500).json(err);
    console.log(err);

  }
});


router.get('/categories/retro-arcade', async (req, res) => {

  try {

    const gamesData = await Games.findAll({
      where: {
        genre: 'Retro Arcade',
      },
    });

    const games = gamesData.map((game) => game.get({ plain: true }));

    res.render('retroArcade', {

      ...games,

      logged_in: req.session.logged_in

    });
  } catch (err) {

    res.status(500).json(err);
    console.log(err);

  }
});


router.get('/categories/retro-snes', async (req, res) => {

  try {

    const gamesData = await Games.findAll({
      where: {
        genre: 'Retro SNES',
      },
    });

    const games = gamesData.map((game) => game.get({ plain: true }));

    res.render('retroSNES', {

      ...games,

      logged_in: req.session.logged_in

    });
  } catch (err) {

    res.status(500).json(err);
    console.log(err);

  }
});


router.get('/categories/retro-nes', async (req, res) => {

  try {

    const gamesData = await Games.findAll({
      where: {
        genre: 'Retro NES',
      },
    });

    const games = gamesData.map((game) => game.get({ plain: true }));

    res.render('retroNES', {

      ...games,

      logged_in: req.session.logged_in

    });
  } catch (err) {

    res.status(500).json(err);
    console.log(err);

  }
});


router.get('/categories/retro-n64', async (req, res) => {

  try {

    const gamesData = await Games.findAll({
      where: {
        genre: 'Retro N64',
      },
    });

    const games = gamesData.map((game) => game.get({ plain: true }));

    res.render('retroN64', {

      ...games,

      logged_in: req.session.logged_in

    });
  } catch (err) {

    res.status(500).json(err);
    console.log(err);

  }
});


// GET one game
router.get('/game/:id', async (req, res) => {

  try {

    const gameData = await Games.findByPk(req.params.id);

    const game = gameData.get({ plain: true });

    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('gamepage', { game, loggedIn: req.session.loggedIn });

  } catch (err) {

    console.log(err);
    res.status(500).json(err);
  }
});



// Use withAuth middleware to prevent access to route
router.get('/profile', async (req, res) => {

  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(1, {

      attributes: { exclude: ['password'] },

      include: [
        {
          model: Games,

          as: 'user_favorites',

          attributes: ['name', 'genre'],
        
        },
      ],

    });

    const user = userData.get({ plain: true });

    res.render('profile', {

      user,

      logged_in: req.session.login,

    });
  } catch (err) {

    res.status(500).json(err);
    console.log(err);

  }
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {

    res.redirect('/profile');

    return;

  }

  res.render('login');
  
});

module.exports = router;
