
import Button from '../../../ButtonVariants/Button';
import clsx from 'clsx';

interface Props {
  title: string;
  body: string;
  buttonVariant?: string | 'outline' | 'solid';
  onAccept?: () => void;
  onDecline?: () => void;
  onClose?: () => void;
  backgroundMask?: boolean;
  setModalStatus: (status: boolean) => void;
  modalRef: React.MutableRefObject<HTMLDivElement | null>;
  closeButtonRef: React.MutableRefObject<HTMLButtonElement | null>;
  theme?: string | "dark" | "light"
}

function Continue({
  title,
  body,
  onAccept,
  onDecline,
  onClose,
  buttonVariant = 'outline',
  theme,
  backgroundMask = false,
  setModalStatus,
  modalRef,
  closeButtonRef,
}: Props) {




  return (
    <>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className={clsx(
          'fixed top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex items-center justify-center',
          backgroundMask ? theme === 'dark' ? 'dark:bg-gray-900' : 'dark:bg-gray-900' : ""
        )}
      >
        {/* Modal Body*/}
        <div ref={modalRef} className="relative w-full max-w-2xl max-h-full">
          <div
            className={clsx(
              'relative bg-white rounded-lg shadow',
              theme === 'light' ? 'light:bg-white-700' : 'dark:bg-gray-700'
            )}
          >
            {/* TopBar */}

            {/* Border */}
            <div
              className={clsx(
                'flex items-start justify-between p-4 border-b rounded-t',
                theme === 'light' ? 'light:border-gray-600' : 'dark:border-gray-600'
              )}
            >
              {/*  Title */}
              <h3
                id="modal-title"
                className={clsx(
                  'text-xl font-semibold',
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                )}
              >
                {title}
              </h3>
              {/* Close button */}
              <button
                ref={closeButtonRef}
                type="button"
                className={clsx(
                  'text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center',
                  theme === 'light'
                    ? 'dark:hover:bg-gray-600 dark:hover:text-white'
                    : 'dark:hover:bg-gray-600 dark:hover:text-white'
                )}
                onClick={() => {

                  setModalStatus(false);
                  onClose && onClose()
                }}
                aria-label="Close modal"
                aria-labelledby="modal-title"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div
              id="modal-description"
              className="p-6 space-y-6 flex items-start"
              aria-live="polite"
            >
              {/* Modal content */}
              <div className="space-y-4">
                <p
                  className={clsx(
                    'text-base',
                    theme === 'light' ? 'text-gray-900' : 'text-white'
                  )}
                >
                  {body}
                </p>
              </div>
            </div>

            {/* Border */}
            <div
              className={clsx(
                'flex justify-end items-end p-6 space-x-2 border-t border-gray-200 rounded-b',
                theme === 'light' ? 'light:border-gray-600' : 'dark:border-gray-600'
              )}
            >
              {/* Continue Button */}
              <Button
                isDark={theme === 'dark'}
                variant={buttonVariant}
                onClick={() => {
                  setModalStatus(false);
                  onDecline && onDecline();
                }
                }
                aria-label="Cancel"
              >
                Continue

              </Button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Continue