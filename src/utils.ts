import { MutableRefObject } from 'react'

export const clickOutsideListener = (
  event: MouseEvent,
  ref: MutableRefObject<null | HTMLFormElement>,
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (
    event.target instanceof HTMLElement &&
    !ref?.current?.contains(event.target)
  ) {
    setIsModalVisible(false)
  }
}
