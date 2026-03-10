import { randomInt } from 'crypto'

interface RandomNumberProps {
  min?: number
  max?: number
}

export const generateRandomNumber = ({ min = 1000, max = 5000 }: RandomNumberProps = {}) => {
  return randomInt(min, max)
}
