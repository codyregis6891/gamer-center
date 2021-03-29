const router = require('express').Router();
const { Games } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {

  const gameData = await Games.findAll();

  console.log(gameData)

  res.json(gameData)

 });

 router.get('/:id', async (req, res) => {

  try {

    const gameData = await Games.findByPk(req.params.id, {

    });

    if (!gameData) {

      res.status(404).json({ message: 'No games found with this id!' });

      return;

    }

    res.status(200).json(gameData);

  } catch (err) {

    res.status(500).json(err);

  }
});


router.post('/', async (req, res) => {

  try {

    const newGames = await Games.create({

      ...req.body,

      user_id: req.session.user_id,

    });

    res.status(200).json(newGames);

  } catch (err) {

    res.status(400).json(err);

  }
});


module.exports = router;
