import React from 'react';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const style = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

const PaperExampleCircle = () => (
    <div className={'paperContainer'}>
        <Paper style={style} zDepth={1} circle={true} />
        <Paper style={style} zDepth={2} circle={true} />
        <Paper style={style} zDepth={3} circle={true} />
        <Paper style={style} zDepth={4} circle={true} />
        <Paper style={style} zDepth={5} circle={true} />
    </div>
);

export default PaperExampleCircle;
