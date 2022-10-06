import { useState } from 'react'

import '../styles/components/Modal.scss'

const Modal = ({ data }) => {
  const [show, setShow] = useState(true)

  return show && (
    <div className={`modal`}>
      <div className="modal__body">
        <h5 className="modal__title">
          { data.title }
        </h5>
        <p className="modal__message">
          { data.message }
        </p>

        <button
          className="modal__button"
          onClick={() => setShow(!show)}
          data-testid="modal-button"
        >
          Aceptar
        </button>
      </div>
    </div>
  )
}

export default Modal
