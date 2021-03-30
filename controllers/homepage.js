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

    const gamesData = await Games.findAll({

      // include: [

      //   {
      //     model: User,

      //     attributes: ['name'],

      //   },

      // ],
    });

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

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {

  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {

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
