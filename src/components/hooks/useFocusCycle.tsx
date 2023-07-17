import { useEffect } from 'react';

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


export default useFocusCycle;