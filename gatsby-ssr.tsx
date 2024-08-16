import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="leiko"
      rel="preload"
      href="/fonts/Leiko-Regular.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
    />,
    <link
      key="obrazec"
      rel="preload"
      href="/fonts/Obrazec-2.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
    />,
  ]);
};
