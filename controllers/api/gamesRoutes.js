const router = require('express').Router();

const { Games } = require('../../models');


router.get('/', async (req, res) => {

  const gameData = await Games.findAll();

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

router.put('/:id', async (req, res) => {

  try {

    const updateGame = await Games.update(

    {

      name: req.body.name,
      description: req.body.description,
      developer: req.body.developer,
      platforms: req.body.platforms,
      publisher: req.body.publisher,
      genre: req.body.genre,
      released: req.body.released,

    },
    {

      where: {
        id: req.params.id,
      },

    });

    res.status(200).json(updateGame);

  } catch (err) {

      res.status(500).json(err);

    };
});



module.exports = router;
