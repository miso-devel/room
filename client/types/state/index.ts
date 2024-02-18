import type { Dispatch, SetStateAction } from 'react'

export type TMemberState<T> = { state: T; setState: Dispatch<SetStateAction<T>> }
