import React, { useEffect, useRef, useState } from 'react';

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



function useFocusCycle(modalRef: React.RefObject<HTMLDivElement>, modalIsOpen: boolean, focusLock: boolean) {

  useEffect(() => {
    const focusTrap = (event: KeyboardEvent) => {
      if (!focusLock) return;

      const focusableElements = modalRef.current?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      const firstElement = focusableElements?.[0] as HTMLElement;
      const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement;

      if (event.key === 'Tab') {
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    if (modalIsOpen) {
      modalRef.current?.addEventListener('keydown', focusTrap);
    }

    return () => {
      modalRef.current?.removeEventListener('keydown', focusTrap);
    };
  }, [modalIsOpen, focusLock, modalRef]);
}


function useOnClickOutside(
  ref: React.MutableRefObject<HTMLElement | null>,
  handler: (event: MouseEvent | TouchEvent) => void
) {

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

