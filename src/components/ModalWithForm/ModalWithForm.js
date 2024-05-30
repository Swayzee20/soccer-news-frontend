import React from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  children,
  title,
  name,
  buttonText,
  onClose,
  isOpen,
  onSubmit,
}) {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <div className="modal__content-header">
          <button
            className="modal__close"
            type="button"
            onClick={onClose}
          ></button>
          <h3 className="modal__title">{title}</h3>
        </div>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button className="modal__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;