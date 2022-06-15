import { Dispatch } from 'react'
import styles from './Input.module.css'

type InputProps = {
  value: string
  handleSearchInput: (e: string) => void
}

const Input = ({handleSearchInput, value}: InputProps) => {
  return (
    <input placeholder='Search..' className={styles.input} value={value} onChange={(e) => handleSearchInput(e.target.value)}></input>
  )
}

export default Input
