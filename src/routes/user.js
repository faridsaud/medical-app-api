import UserController from '../controllers/User';

export default [
  {
    method: 'POST',
    url: `/api/users`,
    handler: UserController.addUser,
  },
  {
    method: 'PUT',
    url: `/api/users/:uuid`,
    handler: UserController.updateUser,
  },
]
