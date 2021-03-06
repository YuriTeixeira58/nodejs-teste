import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'
import authConfig from '../config/auth'

export default function ensureAuthenticated(request: Request, response: Response, next: NextFunction): void {
  const authHeader = request.headers.authorization;

  if(!authHeader) {
    throw new Error('JWT token is missing');
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    return next();
  } catch (err) {
    throw new Error('Invalid JWT token');
  }
}
