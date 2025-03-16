import { createContext, useContext, useState } from 'react';
import { useOutsideClick } from '../hooks/useOutsideClick';

const MenuContext = createContext();

export default function Menu({ children }) {
  const [openId, setOpenId] = useState('');
  const open = setOpenId;
  const close = () => setOpenId('');
  const toggle = (id) => setOpenId(openId === id ? '' : id);

  return (
    <MenuContext.Provider value={{ openId, open, close, toggle }}>
      <div className="relative flex items-center justify-center">
        {children}
      </div>
    </MenuContext.Provider>
  );
}

function Toggle({ id, icon: Icon }) {
  const { toggle } = useContext(MenuContext);

  function handleToggle(e) {
    e.stopPropagation();

    toggle(id);
  }

  return (
    <button className="text-text-secondary" onClick={handleToggle}>
      <Icon className="h-5 w-5" />
    </button>
  );
}

function List({ children, id }) {
  const { openId, close } = useContext(MenuContext);
  const ref = useOutsideClick(() => close(), false);

  if (openId !== id) return null;

  return (
    <div
      ref={ref}
      className={`absolute right-0 top-[40px] z-50 w-48 rounded-lg border border-gray-700 bg-gray-800 shadow-lg`}
    >
      {children}
    </div>
  );
}

function Item({ children, onClick, danger, icon: Icon }) {
  const { close } = useContext(MenuContext);

  function handleClick(e) {
    // e.stopPropagation();
    onClick?.(e);
    close();
  }

  return (
    <button
      onClick={handleClick}
      className={`flex w-full items-center px-4 py-2 text-left text-sm hover:bg-gray-700 ${
        danger ? 'text-red-500' : 'text-gray-200'
      }`}
    >
      {Icon && <Icon className="mr-2 h-4 w-4" />}

      {children}
    </button>
  );
}

Menu.Toggle = Toggle;
Menu.List = List;
Menu.Item = Item;
