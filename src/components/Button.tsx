interface ButtonProps {
  children? : string;
  type? : 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'close'
  onClick : () => void;
}

const Button = ({children,type = 'primary' ,onClick} : ButtonProps) => {
  return (
    <button type="button"  className={`btn btn-${type}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button