const postDocs = {
  '/posts': {
    get: {
      summary: 'Get all posts',
      description: 'Retrieve a paginated list of posts.',
      tags: ['Posts'],
      parameters: [
        {
          name: 'page',
          in: 'query',
          required: false,
          schema: { type: 'integer', example: 1 },
          description: 'Page number for pagination.',
        },
        {
          name: 'limit',
          in: 'query',
          required: false,
          schema: { type: 'integer', example: 10 },
          description: 'Number of posts per page.',
        },
      ],
      responses: {
        200: {
          description: 'Successfully retrieved posts.',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  posts: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        id: { type: 'string' },
                        title: { type: 'string' },
                        content: { type: 'string' },
                        coverImage: { type: 'string', description: 'URL of the cover image.' },
                        createdAt: { type: 'string', format: 'date-time' },
                      },
                    },
                  },
                  total: { type: 'integer', example: 50 },
                },
              },
            },
          },
        },
      },
    },
    post: {
      summary: 'Create a new post',
      description: 'Create a new post with an optional cover image.',
      tags: ['Posts'],
      requestBody: {
        required: true,
        content: {
          'multipart/form-data': {
            schema: {
              type: 'object',
              required: ['title', 'content'],
              properties: {
                title: {
                  type: 'string',
                  example: 'My First Post',
                },
                content: {
                  type: 'string',
                  example: 'This is the content of the post.',
                },
                coverImage: {
                  type: 'string',
                  format: 'binary',
                  description: 'Image file to use as the cover image.',
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: 'Post created successfully.',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  id: { type: 'string' },
                  title: { type: 'string' },
                  content: { type: 'string' },
                  coverImage: { type: 'string' },
                  createdAt: { type: 'string', format: 'date-time' },
                },
              },
            },
          },
        },
      },
    },
  },
  '/posts/{id}': {
    get: {
      summary: 'Get a single post',
      description: 'Retrieve the details of a single post by its ID.',
      tags: ['Posts'],
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: { type: 'string' },
          description: 'The ID of the post to retrieve.',
        },
      ],
      responses: {
        200: {
          description: 'Successfully retrieved the post.',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  id: { type: 'string' },
                  title: { type: 'string' },
                  content: { type: 'string' },
                  coverImage: { type: 'string' },
                  createdAt: { type: 'string', format: 'date-time' },
                },
              },
            },
          },
        },
        404: {
          description: 'Post not found.',
        },
      },
    },
    put: {
      summary: 'Update a post',
      description: 'Update the details of an existing post.',
      tags: ['Posts'],
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: { type: 'string' },
          description: 'The ID of the post to update.',
        },
      ],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                title: {
                  type: 'string',
                  example: 'Updated Post Title',
                },
                content: {
                  type: 'string',
                  example: 'Updated post content.',
                },
                coverImage: {
                  type: 'string',
                  example: 'https://example.com/new-image.jpg',
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Post updated successfully.',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  id: { type: 'string' },
                  title: { type: 'string' },
                  content: { type: 'string' },
                  coverImage: { type: 'string' },
                  createdAt: { type: 'string', format: 'date-time' },
                },
              },
            },
          },
        },
        404: {
          description: 'Post not found.',
        },
      },
    },
    delete: {
      summary: 'Delete a post',
      description: 'Delete an existing post by its ID.',
      tags: ['Posts'],
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: { type: 'string' },
          description: 'The ID of the post to delete.',
        },
      ],
      responses: {
        200: {
          description: 'Post deleted successfully.',
        },
        404: {
          description: 'Post not found.',
        },
      },
    },
  },
};

module.exports = postDocs;
