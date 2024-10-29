import { handleLogin } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function login(req: NextApiRequest, res: NextApiResponse) {
  try {
    await handleLogin(req, res);
  } catch (error) {
    if (error instanceof Error) {
      const status = (error as any).status || 500;
    res.status(error.status || 400).end(error.message);
  }
}
}