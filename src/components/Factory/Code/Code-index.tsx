import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { ghcolors } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Icon from '../../IconWrapper/Icon';


interface CodeOutputProps {
  modalType: string,
  focusLock: boolean,
  title: string,
  body: string,
  onClose: () => void,
  onAccept: () => void,
  onDecline: () => void,
  theme: 'dark' | 'light',
  buttonText: string,
  buttonVariant: string,
  rightIcon: string,
  backgroundMask: boolean,
  modalType: string | "agree" | "continue",
  isDarkBg: boolean
}

const CodeOutput: React.FC<CodeOutputProps> = (props) => {
  const codeString = `<Modal
  modalType="${props.modalType}"
  focusLock="${props.focusLock}"
  title="${props.title}"
  body="${props.body}"
  modalType="${props.modalType}"
  backgroundMask={${props.backgroundMask}}
  onClose={() => { ${JSON.stringify(props.onClose)} }}
  onAccept={() => { ${JSON.stringify(props.onAccept)} }}
  onDecline={() => { ${JSON.stringify(props.onDecline)} }}
  theme="${props.theme}"
  buttonVariant="${props.buttonVariant}"
>
  <Button
    variant='${props.buttonVariant}'
    rightIcon={${props.rightIcon}}
    isDarkBg={${props.isDarkBg}}
  >${props.buttonText}</Button>
</Modal>`

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
  }

  return (
    <div style={{ position: 'relative' }}>
      <button onClick={handleCopy} style={{ position: 'absolute', top: '24px', right: '16px', zIndex: 1, backgroundColor: '#fff' }}>

        <Icon id={"clipboard"} size={20} color="grey" transitionId='check'></Icon>
      </button>
      <SyntaxHighlighter
        language="jsx"
        style={ghcolors}
        customStyle={{
          fontSize: '20px',
          paddingTop: '16px',
          fontWeight: 'light',
          font: 'monospace',
          borderRadius: '8px',
          position: 'relative'
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeOutput;
