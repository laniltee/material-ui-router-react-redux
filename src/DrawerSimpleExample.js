import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {bindActionCreators} from "redux/index";
import * as deckActions from "./actions/deckActions";
import {connect} from "react-redux";

class DrawerSimpleExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            items: []
        };
    }

    componentDidMount() {
        const itemList = this.props.decks.data.map((deck, index) => {
            <MenuItem key={index}>{deck.first_name}</MenuItem>
        });
        console.log(itemList)
        this.setState({
            items: itemList
        })
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div>
                <RaisedButton
                    label="Toggle Drawer"
                    onClick={this.handleToggle}
                    style={{marginLeft: '0px'}}
                />
                <Drawer open={this.state.open} openSecondary={true}>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                    {
                        this.state.items
                    }
                </Drawer>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(DrawerSimpleExample)
