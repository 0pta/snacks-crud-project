'use strict';

exports.seed = (knex) => {
  return knex('snacks').del()
    .then(() => {
      return knex('snacks').insert([
        {
          name: 'LUKE\'S Cheddar Lightning Bolts',
          img_url: 'http://lukesorganic.com/wordpress/wp-content/uploads/2016/03/cheddar-lightning-bolts.png',
          review_desc: 'Multigrain Cheddar Cheese Snacks',
          rating: 4
        },
        {
          name: 'LUKE\'S Cheddar Clouds',
          img_url: 'http://lukesorganic.com/wordpress/wp-content/uploads/2015/09/mi_mi_Cheddar-Clouds_1.jpg1_.png',
          review_desc: 'White Cheddar Cheese Puffs',
          rating: 5
        },
        {
          name: 'LUKE\'S Flaming Clouds',
          img_url: 'http://lukesorganic.com/wordpress/wp-content/uploads/2015/09/mi_mi_Fire-Clouds.jpg.png',
          review_desc: 'Spicy Multigrain Puffs',
          rating: 4
        },
        {
          name: 'HARVEST SNAPS Snapea Crisps',
          img_url: 'http://target.scene7.com/is/image/Target/51389467?wid=520&hei=520&fmt=pjpeg',
          review_desc: 'Classic, natural and sprinkled with salt for a taste you can always rely on.',
          rating: 4
        }
      ])
    }).then(() => {
      return knex.raw(
        "SELECT setval('snacks_id_seq', (SELECT MAX(id) FROM snacks));"
      )
    })
}
