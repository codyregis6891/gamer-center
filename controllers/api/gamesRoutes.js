const router = require('express').Router();
const { Games } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {

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

router.delete('/:id', withAuth, async (req, res) => {

  try {
    const projectData = await Games.destroy({

      where: {

        id: req.params.id,

        user_id: req.session.user_id,

      },
    });

    if (!projectData) {

      res.status(404).json({ message: 'No game found with this id!' });

      return;
    }

    res.status(200).json(projectData);

  } catch (err) {

    res.status(500).json(err);
    
  }
});

module.exports = router;