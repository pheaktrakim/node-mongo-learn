const swaggerJSDoc = require('swagger-jsdoc');
const userDocs = require('./docs/userDocs');
const postDocs = require('./docs/postDocs');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'This is the API documentation for testing node expressJs and mongoDB.',
    },
    servers: [
      {
        url: 'http://localhost:3000/api', // Replace with your base URL
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        BearerAuth: [],
      },
    ],
    paths: {
      ...userDocs,
      ...postDocs,
    },
  },
 
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;