import React, { useEffect, useRef, useState } from 'react';
import useOnClickOutside from '../hooks/useonClickOutside';
import useFocusCycle from '../hooks/useFocusCycle';
import ModalBody from './Variants/components/ModalVariants/ModalBody-Variants/ModalBody-index';


interface ModalProps {
  modalType: string | "agree" | "continue"
  buttonVariant: string | "outline" | "solid";
  children?: React.ReactNode;
  title: string;
  body: string;
  onClose: () => void;
  onAccept: () => void;
  onDecline?: () => void;
  backgroundMask?: boolean;
  focusLock: boolean;
  theme?: string | "dark"
}


const Modal: React.FC<ModalProps> =
  ({
    children,
    title = "Sample Title",
    body = "yo i am the body of the modal",
    onAccept,
    onDecline,
    onClose,
    modalType,
    focusLock = true,
    theme,
    backgroundMask = false,

    buttonVariant = "outline"
  }) => {

    // Modal visibility state
    const [modalStatus, setModalStatus] = useState(false);

    // Modal Button Refs available for focus
    const modalRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const openButtonRef = useRef<HTMLButtonElement>(null);

    // cycle through the buttons
    useFocusCycle(modalRef, modalStatus, focusLock);
    // close modal on escape key
    useEscapeKey(() => setModalStatus(false));
    // close modal on click outside
    useOnClickOutside(modalRef, () => setModalStatus(false));


    useEffect(() => {
      if (!modalStatus) {
        openButtonRef.current?.focus();
      }
    }, [modalStatus]);


    return (
      <>
        {/* Launch Button for Modal */}
        {React.Children.map(children, child =>
          React.isValidElement(child) ? React.cloneElement(child, {
            onClick: () => setModalStatus(true),
            ref: openButtonRef,
            type: "button"
          }) : child
        )}


        {modalStatus && (
          <ModalBody
            backgroundMask={backgroundMask}
            buttonVariant={buttonVariant}
            title={title}
            body={body}
            onAccept={onAccept}
            onDecline={onDecline}
            onClose={onClose}
            modalRef={modalRef}
            closeButtonRef={closeButtonRef}
            setModalStatus={setModalStatus}
            theme={theme}
            modalType={modalType}
            focusLock={focusLock} />
        )}
      </>
    );
  }


export default Modal;


type CallbackFunction = () => void;

function useEscapeKey(callback: CallbackFunction): void {
  useEffect((): () => void => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        callback();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return (): void => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback]);  // add callback to the dependencies array
}


