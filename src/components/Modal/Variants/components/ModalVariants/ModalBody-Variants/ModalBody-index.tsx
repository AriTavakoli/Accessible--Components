import Agree from "./components/Agree";
import Continue from "./components/Continue";

interface ModalProps {
  title: string;
  body: string;
  onClose: () => void;
  onAccept: () => void;
  onDecline?: () => void;
  focusLock: boolean;
  setModalStatus: React.Dispatch<React.SetStateAction<boolean>>;
  modalRef: React.RefObject<HTMLDivElement>;
  closeButtonRef: React.RefObject<HTMLButtonElement>;
  buttonVariant: string | "outline" | "solid";
  modalType: "Agree" | "Continue" | string;
  theme?: any;
  maskColor?: string;
  backgroundMask?: boolean;

}

function ModalBody(props: ModalProps) {

  const { modalType, ...otherProps } = props;

  // Create a components mapping
  const ComponentsMap = {
    agree: Agree,
    continue: Continue
  };

  // Dynamically get the component type
  const ComponentToRender = ComponentsMap[modalType];

  // Handle unknown modalType
  if (!ComponentToRender) {
    throw new Error(`Invalid prop modalType: ${modalType}`);
  }

  // Render the chosen component
  return <ComponentToRender {...otherProps} />;
}

export default ModalBody;
