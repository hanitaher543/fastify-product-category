// IMPORTS 
const fastify = require ('fastify') ({logger : true});
const sequelize = require ('./config/database');


const PORT = 3000;




// ROUTING




//Run server & connect to database

const start = async () =>  {

    try{
        await fastify.listen({port : PORT});
        console.log(`Server is running on port ${PORT}`);
        await sequelize.authenticate(); // verifies the connection to the Sequelize database 
        console.log('Connection to database has been established successfully');

    } catch (error){
        console.log(`Server failed to start on port ${PORT}`);
        fastify.log.error(error);
        process.exit(1);
    }
};

start();