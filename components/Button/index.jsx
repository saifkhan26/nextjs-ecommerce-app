"use client";

export const Button = ({ onClick, children, className }) => {
  return (
    <button className={ `${className && className} bg-bright-rose rounded-lg px-6 py-1` } onClick={onClick}>
      {children}
    </button>
  );
}
