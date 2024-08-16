import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// Supports weights 100-900
import '@fontsource-variable/ysabeau-infant';
// Supports weights 100-700
import '@fontsource-variable/montagu-slab';

export const wrapRootElement = ({ element }) => <Router>{element}</Router>;
