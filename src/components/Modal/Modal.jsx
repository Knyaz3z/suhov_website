import './Modal.scss'
import {useState} from "react";

function Modal({children, isModalOpen, setIsModalOpen}) {


    return (
        <div onClick={() => setIsModalOpen(false)} className={`modal__overlay ${isModalOpen ? 'open' : ''}`}>
            <div onClick={(e) => e.stopPropagation()} className="modal__wrapper">
                <div onClick={() => setIsModalOpen(false)} className="modal__close">
                    <svg width="48" height="48" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z"
                              fill="#000"></path>
                    </svg>
                </div>
                <div className="modal__inner">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal