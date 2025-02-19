export const GAME_TITLE = 'Wordle (RO)'

export const WIN_MESSAGES = ['Foarte bine!', 'Genial', 'Bravo!']
export const GAME_COPIED_MESSAGE = 'S-a copiat jocul in clipboard'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Nu sunt destule litere'
export const WORD_NOT_FOUND_MESSAGE = 'Cuvântul nu a fost găsit'
export const HARD_MODE_ALERT_MESSAGE =
  'Modul Hard poate fi activat doar la început!'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Cuvântul era ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Trebuie folosit ${guess}-ul in poziția ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Cuvântul trebuie sa conțină litera ${letter}`
export const ENTER_TEXT = 'Ghici'
export const DELETE_TEXT = 'Șterge'
export const STATISTICS_TITLE = 'Statistici'
export const GUESS_DISTRIBUTION_TEXT = 'Grafic'
export const NEW_WORD_TEXT = 'Următorul cuvânt'
export const TOTAL_TRIES_TEXT = 'Total jucat'
export const SUCCESS_RATE_TEXT = 'Rata de succes'
export const CURRENT_STREAK_TEXT = 'Caștiguri consecutive'
export const BEST_STREAK_TEXT = 'Caștiguri maxime consecutive'
