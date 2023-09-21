// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import getConfig from 'next/config'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

  res.status(200).json({ name: 'John Doe' })
}
