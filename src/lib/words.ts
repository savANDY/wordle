import { WORDS } from '../constants/wordlist'
import { VALIDGUESSES } from '../constants/validGuesses'

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word.toLowerCase()) ||
    VALIDGUESSES.includes(word.toLowerCase())
  )
}

export const isWinningWord = (word: string) => {
  return solution === word
}

export const getWordOfDay = () => {
  // January 19, 2022 Game Epoch (GMT + 1)
  const epochMs = 1642546800000
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)

  return {
    solution: WORDS[index].toUpperCase(),
    solutionIndex: index,
  }
}

export const { solution, solutionIndex } = getWordOfDay()
