import LoginController from '../controllers/Login';

export default [
  {
    method: 'POST',
    url: `/api/signin`,
    handler: LoginController.login,
  },
]
