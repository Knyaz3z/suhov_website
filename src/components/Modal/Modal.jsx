import { useEffect } from 'react';
import './Modal.scss';

function Modal({ children, isModalOpen, setIsModalOpen }) {
    // Блокировка скролла при открытии модалки
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none';
        } else {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        };
    }, [isModalOpen]);

    if (!isModalOpen) return null;

    return (
        <div
            onClick={() => setIsModalOpen(false)}
            className="modal__overlay"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="modal__wrapper"
            >
                <button
                    onClick={() => setIsModalOpen(false)}
                    className="modal__close"
                    aria-label="Закрыть модальное окно"
                >
                    <svg width="48" height="48" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z"
                              fill="#000"></path>
                    </svg>
                </button>
                <div className="modal__inner">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;