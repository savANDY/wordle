import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Ghiciți cuvântul ascuns în 6 încercări. Un nou puzzle în
        fiecare zi. Jocul Wordle RO este creat specific pentru
        vorbitori de limba română. Cuvintele au 5 litere.

        Acest
        joc este o clonă{' '}
        <a
            href="https://github.com/savANDY/wordle"
            className="underline font-bold"
        >
          open source
        </a>{' '}
        a jocului original Wordle pe care{' '}
        <a
            href="https://www.powerlanguage.co.uk/wordle/"
            className="underline font-bold"
        >
          îl puteți juca aici
        </a>
        .{' '}
      </p>
    </BaseModal>
  )
}
