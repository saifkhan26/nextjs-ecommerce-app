"use client";

export default function Button({ onClick, children }) {
  return (
    <button className="bg-bright-rose rounded-lg px-6 py-1" onClick={onClick}>
      {children}
    </button>
  );
}
