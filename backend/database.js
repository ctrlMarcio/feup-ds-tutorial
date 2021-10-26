const { Pool } = require('pg')
let pool

add = async (word) => {
	const exists = await pool.query('select exists(select 1 from words where word=$1)', [word])

	if (exists.rows[0].exists) {
		await pool.query('update words set count=count+1 where word=$1', [word])
	} else {
		await pool.query('insert into words (word, count) values ($1, 1)', [word])
	}
}

connect = () => {
	pool = new Pool({
		user: 'postgres',
		host: 'db',
		database: 'ds',
		password: 'postgres',
		port: 5432,
	})
}

disconnect = () => {
	pool.end()
}

get = async () => {
  const res = await pool.query('select * from words')
  return res.rows
}

exports.add = add
exports.connect = connect
exports.disconnect = disconnect
exports.get = get