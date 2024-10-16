import type { NextApiRequest, NextApiResponse } from 'next'

type Report = {
  id: number
  title: string
  date: string
  summary: string
  accessLevel: 'public' | 'registered' | 'investor'
}

const reports: Report[] = [
  {
    id: 1,
    title: 'Global Market Trends 2023',
    date: '2023-05-15',
    summary: 'An overview of emerging market trends across various industries.',
    accessLevel: 'public'
  },
  {
    id: 2,
    title: 'Tech Industry Forecast',
    date: '2023-06-01',
    summary: 'In-depth analysis of upcoming technologies and their potential impact.',
    accessLevel: 'registered'
  },
  {
    id: 3,
    title: 'Investment Strategies for Q3',
    date: '2023-06-15',
    summary: 'Exclusive insights on investment opportunities for the upcoming quarter.',
    accessLevel: 'investor'
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Report[]>
) {
  res.status(200).json(reports)
}