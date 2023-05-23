import React from 'react';

export default function Hello() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1 style={{ fontSize: '5rem' }}>Hello World!</h1>
    </div>
  );
}
