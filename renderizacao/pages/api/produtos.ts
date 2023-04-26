// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Produto = {
  id: number,
  nome: string,
  preco: number
}

function numeroAleatorio(min = 1, max = 10000) {
  return parseInt(Math.random() * (max - min)) + min
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Produto[]>
) {
  res.status(200).json([
    {id:numeroAleatorio(), nome: 'caneta', preco: 5.10},
    {id:numeroAleatorio(), nome: 'borracha', preco: 7.20}, 
    {id:numeroAleatorio(), nome: 'mochila', preco: 9.60},
    {id:numeroAleatorio(), nome: 'lapis', preco: 10.00},
  ])
}
