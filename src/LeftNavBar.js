import React from 'react';

import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import {NavLink} from "react-router-dom";

const LeftNavBar = () => (
    <div id={'leftNavBar'}>
        <List style={{paddingTop: "0px"}}>
            <NavLink exact to="/">
                <ListItem primaryText="Home" leftIcon={<ContentInbox/>}/>
            </NavLink>
            <NavLink to="/circle">
                <ListItem primaryText="Circle" leftIcon={<ActionGrade/>}/>
            </NavLink>
            <NavLink to="/card">
                <ListItem primaryText="Card" leftIcon={<ContentSend/>}/>
            </NavLink>
            <ListItem primaryText="Temp" leftIcon={<ContentDrafts/>}/>
            <ListItem primaryText="Temp" leftIcon={<ContentInbox/>}/>
        </List>
        <Divider/>
        <List style={{paddingTop: "0px"}}>
            <ListItem primaryText="All mail" rightIcon={<ActionInfo/>}/>
            <ListItem primaryText="Trash" rightIcon={<ActionInfo/>}/>
            <ListItem primaryText="Spam" rightIcon={<ActionInfo/>}/>
            <ListItem primaryText="Follow up" rightIcon={<ActionInfo/>}/>
        </List>
    </div>
)

export default LeftNavBar
