import clsx from 'clsx'
import React, { useState } from 'react'
import { HiArrowRight } from 'react-icons/hi'
import CodeOutput from './components/Factory/Code/Code-index'
import ColorPicker from './components/Factory/Color/ColorPicker'
import ColorSpectrum from './components/Factory/Color/ColorSpectrum-index'
import RadioGroup from './components/Factory/Radio/Radio-index'
import Textarea from './components/Factory/TextArea/TextArea-index'
import Modal from './components/Modal/Modal-index'
import Button from './components/Modal/Variants/components/ButtonVariants/Button'
import Toggle from './components/Factory/Toggle/Toggle-index'


type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outline' | 'solid' | 'text';
type Color = 'emerald' | 'red' | 'blue' | 'yellow' | 'purple' | 'pink' | 'indigo' | 'green' | 'gray';
type ModalType = 'agree' | 'continue'

function App() {

  const [modalTitle, setModalTitle] = React.useState('Sample Title');
  const [modalBody, setModalBody] = React.useState('yo i am the body of the modal');
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');
  const [color, setColor] = React.useState<Color>('emerald');
  const [buttonVariant, setButtonVariant] = React.useState<ButtonVariant>('primary');
  const [backgroundMask, setBackgroundMask] = React.useState<boolean>(false);
  const [icon, setIcon] = React.useState<boolean>(false);
  const [focusLock, setFocusLock] = React.useState<boolean>(false);
  const [modalType, setModalType] = React.useState<ModalType>('agree');
  const [buttonText, setButtonText] = React.useState('Primary Variant');

  function toggleMode() {
    return mode === 'dark' ? setMode('light') : setMode('dark');
  }

  const textColor = mode === 'dark' ? 'text-white' : 'text-gray-800';

  return (
    <>
      <section
        className={clsx(mode === 'dark' ? 'bg-dark' : 'bg-white', color, 'flex flex-col w-[100vw] items-center h-[200vh] justify-start pt-[10vh]', textColor)}
      >
        <div className="flex flex-col gap-4 " >



          <h1 className="self-center pb-4 text-4xl font-bold">Modal & Button Factory</h1>

          {/* Color configuration */}
          <ColorPicker color={color} setColor={setColor} />
          <ColorSpectrum></ColorSpectrum>

          {/* Text configuration */}

          <label className="text-primary-500">Modal Title</label>
          <input type="text" value={modalTitle} onChange={e => setModalTitle(e.target.value)} placeholder="Modal Title" className="p-4 text-gray-900 border rounded-md border-m border-primary-300" />
          <Textarea label="Your message" value={modalBody} onTextChange={setModalBody} placeholder="Leave a comment..." />

          <label className="text-primary-500">Button Text</label>
          <input type="text" value={buttonText} onChange={e => setButtonText(e.target.value)} placeholder="Button Text" className="p-4 text-gray-900 border rounded-md border-m border-primary-300" />

          <Toggle label="Accessible Focus Lock" onToggle={() => setFocusLock(!focusLock)} />
          <Toggle label="Background Mask" onToggle={() => setBackgroundMask(!backgroundMask)} />
          <Toggle label="Icon" onToggle={() => setIcon(!icon)} />

          <RadioGroup value={buttonVariant} onValueChange={setButtonVariant} textColor={textColor} options="buttonVariantList" mode={mode}></RadioGroup>
          <RadioGroup value={modalType} onValueChange={setModalType} textColor={textColor} mode={mode} options="modalVariantList"></RadioGroup>



          <div aria-label='theme-color-picker' className='flex flex-wrap items-center justify-center gap-2 mt-8'>
            <Button
              onClick={toggleMode}
              variant={mode === 'dark' ? 'light' : 'dark'}
            >
              Set to {mode === 'dark' ? 'light' : 'dark'}
            </Button>
          </div>

          <h1 aria-label='Modal-title' className="self-center pb-4 text-4xl font-bold">Modal Preview</h1>

          <div className="w-[100%] flex  items-center justify-center">
            <Modal
              focusLock={focusLock}
              title={modalTitle}
              body={modalBody}
              onClose={() => { console.log('Close'); }}
              onAccept={() => { console.log('Accept'); }}
              onDecline={() => { console.log('Decline'); }}
              theme={mode === 'dark' ? 'dark' : 'light'}
              buttonVariant="outline"
              backgroundMask={backgroundMask}
              icon={icon}
              modalType={modalType}
            >
              <Button
                variant={buttonVariant}
                rightIcon={icon ? HiArrowRight : undefined}
                isDarkBg={mode === 'dark'}

              >{buttonText}</Button>
            </Modal>
          </div>


          <CodeOutput
            focusLock={focusLock}
            title={modalTitle}
            backgroundMask={backgroundMask}
            body={modalBody}
            modalType={modalType}
            onClose={() => { console.log('Close'); }}
            onAccept={() => { console.log('Accept'); }}
            onDecline={() => { console.log('Decline'); }}
            theme={mode === 'dark' ? 'dark' : 'light'}
            buttonVariant={buttonVariant}
            buttonText={buttonText}
            rightIcon="HiArrowRight"
            icon={icon}
            isDarkBg={mode === 'dark'}
          />


        </div>
      </section >
    </>
  )
}

export default App



