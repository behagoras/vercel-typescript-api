import { VercelRequest, VercelResponse } from '@vercel/node'
import { getRootHandler } from '../handlers/root.get.handler'
import allowCors from '../middlewares/allowCors'

function multi (req:VercelRequest, res:VercelResponse) {
  if (req.method === 'POST') {
    res.status(200).send('POST')
  }
  if (req.method === 'GET') {
    getRootHandler(req, res)
  }
}

export default allowCors(multi)
