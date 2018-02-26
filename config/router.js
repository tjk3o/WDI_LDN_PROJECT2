const router = require('express').Router();
const photos = require('../controllers/photos');

router.get('/', (req, res) => res.render('pages/home'));

router.route('/photos')
  .get(photos.index)
  .post(photos.create);

router.route('/photos/new')
  .get(photos.new);

router.route('/photos/:id')
  .get(photos.show);

module.exports = router;
