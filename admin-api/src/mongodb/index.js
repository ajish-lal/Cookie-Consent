
/**
 * @class mongodb
 * @description Initialize database connection with Mongodb using mongoose package
 */

const mongoose = require('mongoose');
require('dotenv').config();
const host = process.env.DB_HOST || 'mongodb://localhost';
const database = process.env.DB_NAME || 'cookie_consent';
const databaseUrl = `${host}/${database}`;

const logger = require('../logger');

module.exports = {
    /**
     * @function connect
     * @description Estabilish connection with Mongodb
     */

    connect: (done) => {
        mongoose.connect(databaseUrl, {
            useNewUrlParser: true,
            connectTimeoutMS: 30000,
            poolSize: 10,
            useCreateIndex: true,
            useUnifiedTopology:true,
			bufferMaxEntries:0
        }, (err) => {
            if (err) {
               logger.error(`Unable to connect database ${err}`);
                process.exit(1);
            }
            logger.info('Successfully connected to database');
            return done();
        });

        mongoose.connection.on('connected', function () {
            logger.info("Mongoose default connection is open to ", databaseUrl);
            mongoose.set('debug', true);
        })

        mongoose.connection.on('error', function (err) {
            logger.error(`Mongoose default connection has occured ${err} error`);
            process.exit(1)
        });

        mongoose.connection.on('disconnected', function () {
           logger.info("Mongoose default connection is disconnected");
        });

        process.on('SIGINT', () => {
            mongoose.connection.close(() => {
               logger.error('database connection closed')
                process.exit(0)
            });
        });
    }
}