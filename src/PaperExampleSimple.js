import React from 'react';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as deckActions from './actions/deckActions';

const style = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

class PaperExampleSimple extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.actions.getDecks()
    }

    render() {
        return (
            <div>
                {
                    this.props.loading ?
                        <div style={{margin: "20px", textAlign: "center"}}>
                            <CircularProgress size={60} thickness={7}/>
                            <p>Please Wait .. .. .. </p>
                        </div>
                        :
                        null
                }
                <div className={'paperContainer'}>
                    <Paper style={style} zDepth={1}/>
                    <Paper style={style} zDepth={2}/>
                    <Paper style={style} zDepth={3}/>
                    <Paper style={style} zDepth={4}/>
                    <Paper style={style} zDepth={5}/>
                </div>
                <p>Deck Loading Status: {this.props.decks.per_page}</p>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        decks: state.decks.decks,
        data: state.decks.decks.data,
        loading: state.decks.decksLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(deckActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaperExampleSimple);
