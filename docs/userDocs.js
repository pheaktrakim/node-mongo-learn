const userDocs = {
  '/users': {
    get: {
      summary: 'Get all users',
      description: 'Retrieve a list of all registered users.',
      tags: ['Users'],
      responses: {
        200: {
          description: 'Successfully retrieved users.',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    id: { type: 'string' },
                    name: { type: 'string' },
                    email: { type: 'string' },
                    createdAt: { type: 'string', format: 'date-time' },
                  },
                },
              },
            },
          },
        },
      },
    },
    post: {
      summary: 'Register a new user',
      description: 'Create a new user account.',
      tags: ['Users'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['name', 'email', 'password'],
              properties: {
                name: {
                  type: 'string',
                  example: 'Jane Doe',
                },
                email: {
                  type: 'string',
                  example: 'jane.doe@example.com',
                },
                password: {
                  type: 'string',
                  example: 'password123',
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: 'User registered successfully.',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  id: { type: 'string' },
                  name: { type: 'string' },
                  email: { type: 'string' },
                  createdAt: { type: 'string', format: 'date-time' },
                },
              },
            },
          },
        },
        400: {
          description: 'Validation error.',
        },
      },
    },
  },
  '/users/{id}': {
    get: {
      summary: 'Get a user by ID',
      description: 'Retrieve the details of a user by their ID.',
      tags: ['Users'],
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: { type: 'string' },
          description: 'The ID of the user to retrieve.',
        },
      ],
      responses: {
        200: {
          description: 'Successfully retrieved the user.',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  id: { type: 'string' },
                  name: { type: 'string' },
                  email: { type: 'string' },
                  createdAt: { type: 'string', format: 'date-time' },
                },
              },
            },
          },
        },
        404: {
          description: 'User not found.',
        },
      },
    },
    put: {
      summary: 'Update a user',
      description: 'Update the details of an existing user.',
      tags: ['Users'],
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: { type: 'string' },
          description: 'The ID of the user to update.',
        },
      ],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  example: 'Updated Name',
                },
                email: {
                  type: 'string',
                  example: 'updated.email@example.com',
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'User updated successfully.',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  id: { type: 'string' },
                  name: { type: 'string' },
                  email: { type: 'string' },
                  createdAt: { type: 'string', format: 'date-time' },
                },
              },
            },
          },
        },
        404: {
          description: 'User not found.',
        },
      },
    },
    delete: {
      summary: 'Delete a user',
      description: 'Delete an existing user by their ID.',
      tags: ['Users'],
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: { type: 'string' },
          description: 'The ID of the user to delete.',
        },
      ],
      responses: {
        200: {
          description: 'User deleted successfully.',
        },
        404: {
          description: 'User not found.',
        },
      },
    },
  },
  '/users/login': {
    post: {
      summary: 'Login a user',
      description: 'Authenticate a user with their email and password.',
      tags: ['Users'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['email', 'password'],
              properties: {
                email: {
                  type: 'string',
                  example: 'user@example.com',
                },
                password: {
                  type: 'string',
                  example: 'password123',
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Login successful.',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  token: { type: 'string' },
                  user: {
                    type: 'object',
                    properties: {
                      id: { type: 'string' },
                      name: { type: 'string' },
                      email: { type: 'string' },
                    },
                  },
                },
              },
            },
          },
        },
        401: {
          description: 'Invalid email or password.',
        },
      },
    },
  },
  '/users/logout': {
    post: {
      summary: 'Logout a user',
      description: 'Log out the currently authenticated user.',
      tags: ['Users'],
      responses: {
        200: {
          description: 'Logout successful.',
        },
      },
    },
  },
};

module.exports = userDocs;
