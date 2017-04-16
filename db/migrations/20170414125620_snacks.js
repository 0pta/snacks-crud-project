

exports.up = (knex) => {
  return knex.schema.createTable('snacks', table => {
    table.increments()
    table.string('name').notNullable()
    table.text('img_url').notNullable()
    table.string('review_desc').notNullable()
    table.integer('rating').notNullable()
    table.timestamps(true, true)
  })
};

exports.down = (knex) => {
  return knex.schema.dropTable('snacks')
};
