import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Ghiciți CUVÂNTUL în 6 încercări. După fiecare ghicire,
        culorile literelor se vor schimba pentru a arăta cât de
        aproape a fost estimarea la cuvânt.
      </p>

                    <div className="flex justify-center mb-1 mt-4">
                      <Cell value="A" status="correct" />
                      <Cell value="L" />
                      <Cell value="I" />
                      <Cell value="N" />
                      <Cell value="T" />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      Litera A este în cuvânt și în locul corect.
                    </p>

                    <div className="flex justify-center mb-1 mt-4">
                      <Cell value="A" />
                      <Cell value="L" />
                      <Cell value="T" status="present" />
                      <Cell value="O" />
                      <Cell value="R" />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      Litera T este în cuvânt, dar în locul greșit.
                    </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="U" />
        <Cell value="Z" status="absent" />
        <Cell value="A" />
        <Cell value="T" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Litera Z nu este în cuvânt în niciun loc.
      </p>
    </BaseModal>
  )
}
