const express = require('express');
const router = express.Router();
const db = require('../db')

/* GET Main Page. */
router.get('/', (req, res, next) => {
  db('snacks')
  .then(snacks => {
    res.render('snacks/index', {snacks})
  })
});

router.get('/new', (req, res, next) => {
  res.render('snacks/new', {title: 'HOLE STUFFER'}
  );
})

router.get('/new', (req, res, next) => {
  let id = req.params.id
  res.render(id)
})

router.get('/:id', (req, res, next) => {
  let id = req.params.id
  db('snacks')
  .where({id}).first().then(snack => {
    res.render('snacks/show', {snack})
  })
})


router.get('/edit/:id', (req, res, next) => {
  let id = req.params.id
  db('snacks')
  .where({id}).first().then(snack => {
    res.render('snacks/edit', {snack})
  })
})

router.post('/', (req, res, next) => {
  let snack = {
    name: req.body.name,
    img_url: req.body.img_url,
    review_desc: req.body.review_desc,
    rating: req.body.rating
  }
  db('snacks')
  .insert(snack, '*').then(newSnack => {
    let id = newSnack[0].id
    res.redirect(`/snacks/${id}`)
  })
})



router.delete('/:id', (req, res, next) => {
  let id = req.params.id
  db('snacks').del().where({id}).then(() => {
    res.redirect('/snacks')
  })
})

module.exports = router;
