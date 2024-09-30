import styles from './ButtonCustom.module.css'

interface ButtonCustomProps {
  onClick : () => void,
  type? : 'primary' | 'waring' | 'error',
  children? : string
}

const ButtonCustom = ({onClick,type='primary',children}: ButtonCustomProps) => {

  return (
    <button onClick={onClick} className={[styles.btn,styles['btn-'+type]].join(' ')}>
      {children}
    </button>
  )
}

export default ButtonCustom