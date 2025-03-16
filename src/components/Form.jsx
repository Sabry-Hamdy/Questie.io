import React from 'react';

export default function Form({ children, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="mb-8 space-y-4 rounded-lg bg-gray-800 p-4 shadow-md"
    >
      {children}
    </form>
  );
}
