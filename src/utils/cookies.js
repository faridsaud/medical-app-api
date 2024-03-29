import jwt from 'jsonwebtoken';

export const getUser = (req) => {
  const accessToken = req.headers.authorization;
  const {email, uuid} = jwt.decode(accessToken, process.env.SECRET);
  return {email, uuid};
};



