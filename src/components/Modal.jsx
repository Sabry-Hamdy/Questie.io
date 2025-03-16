import { cloneElement, useContext, useState } from 'react';
import { ModalContext } from '../contexts/ModalContext';

export default function Modal({ children }) {
  const [openName, setOpenName] = useState('');
  const [itemId, setItemId] = useState('');
  const open = (name) => setOpenName(name);
  const close = () => setOpenName('');

  return (
    <ModalContext.Provider value={{ openName, open, close, itemId, setItemId }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName, itemId }) {
  const { open, setItemId } = useContext(ModalContext);

  return (
    <div
      className=""
      onClick={(e) => {
        e.stopPropagation();
        open(opensWindowName);
        setItemId(itemId);
      }}
    >
      {children}
    </div>
  );
}

function Window({ children, name: windowName }) {
  const { openName, close, itemId } = useContext(ModalContext);

  if (openName !== windowName) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
        onClick={close}
      ></div>
      <div className="relative z-30 mx-4 w-full max-w-xl rounded-lg border border-border-primary bg-background-secondary p-6 shadow-2xl">
        <div className="absolute right-4 top-4">
          <button
            onClick={close}
            className="h-8 w-8 rounded-full text-xl font-medium text-text-secondary hover:text-text-primary"
          >
            ×
          </button>
        </div>
        {cloneElement(children, { onClose: close, itemId })}
      </div>
    </div>
  );
}

Modal.Open = Open;
Modal.Window = Window;
