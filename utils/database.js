const { Pool } = require('pg');
const { connectionString } = require('pg/lib/defaults');

const isProduction = process.env.NODE_ENV === 'production';

let pool;

if(isProduction) {
  pool = new Pool(
    {
        connectionString: process.env.DATABASE_URL, 
        ssl: { rejectUnauthorized: false }
     }
  ) 

}else {
  pool = new Pool ({
      user: 'postgres',
      host: 'localhost',
      port: '5432',
      database: 'crown_xx',
      password: '0000'
  });
}

module.exports = pool;

/*
postgres://vtiwdixweyaozl:45303e130b75579223ab954fdf9eb75e7146796ad37f09c03e03c9170e676143@ec2-18-210-191-5.compute-1.amazonaws.com:5432/dctcvs99e7m0ae

user: vtiwdixweyaozl
host: ec2-18-210-191-5.compute-1.amazonaws.com
port: 5432
database: dctcvs99e7m0ae
password: 45303e130b75579223ab954fdf9eb75e7146796ad37f09c03e03c9170e676143

*/