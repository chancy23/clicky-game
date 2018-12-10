import React from 'react';
import Grid from 'react-bootstrap/lib/Grid'
import "./Wrapper.css";

const Wrapper = props => (<Grid>{props.children}</Grid>);

export default Wrapper;