import React from 'react'

export type TLoaderProps = {
  size?: number;
}

export const Loader = ({ size = 30 }: TLoaderProps) => {
  return (
    <div
      className="rounded-full animate-spin border-4 border-t-transparent border-primary"
      style={{ height: `${size}px`, width: `${size}px` }}
    />
  );
}