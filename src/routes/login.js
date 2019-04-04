import LoginController from '../controllers/Login';

export default [
  {
    method: 'POST',
    url: `/api/signin`,
    handler: LoginController.login,
    schema: {
      body: {
        type: 'object',
        properties: {
          email: {type: 'string'},
          password: {type: 'string'}
        },
        required: ['email', 'password']
      }
    }
  },
]
