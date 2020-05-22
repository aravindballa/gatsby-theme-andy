import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/shift-away.css';

export default (props) => <Tippy placement="right" animation="slide-away" {...props} />;
