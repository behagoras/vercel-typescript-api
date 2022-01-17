import { VercelRequest, VercelResponse } from '@vercel/node'

export const getRootHandler = async (req: VercelRequest, res: VercelResponse) => {
  res.status(200).send('GET')
}
