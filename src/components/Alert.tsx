import { ReactNode } from "react"

interface AlertProps {
  children : ReactNode
  onClose : () => void
  showAlert: boolean
}


const Alert = ({
  children,
  onClose,
  showAlert
}:AlertProps) => {
  return (
    <div className={`alert alert-primary alert-dismissible ${showAlert ? 'show' : 'fade'}`}>
      {children}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
    </div>
  )
}

export default Alert