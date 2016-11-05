"use strict";

import React from 'react';
import DialogButton from './dialogButton.jsx';
import ChatButton from './chatButton.jsx';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';

class UserDisplay extends React.Component {

  constructor(props) {
    super(props);
    
    this.displayMatch();    
  }

  displayMatch(){
    if(this.props.userInfo.blackListBreeds.indexOf(this.props.user.dogBreed) === -1){
      console.log(`good breed match from ${this.props.user.dogname}`);
      //display a badmatch image
      return;
    }
    //display a good match image
    console.log(`bad breed match from ${this.props.user.dogname}`);
    return;
  }

  render () {
    console.log("user info from user card", this.props.userInfo);
    return (
      <div>
        <Card>
          <CardMedia>
            <img src={this.props.user.picLink || this.props.user.profilepic} className="card-img" alt="Pic"/>
          </CardMedia>

          <CardHeader
            title={this.props.user.dogname}
            subtitle={'From: ' + this.props.user.loc}
            avatar={
              <Avatar
                src={this.props.user.profilepic}
                style={{float: 'right', marginTop: -35, marginLeft:20}}>
              </Avatar>
            }
            actAsExpander={true}
            showExpandableButton={true}
          />

          <CardText expandable={true}>
            <strong>Owner:</strong> {this.props.user.firstname}<br />
            <strong>Age: </strong>{this.props.user.dogAge}<br />
            <strong>Breed: </strong>{this.props.user.dogBreed}<br />
          </CardText>

          <CardActions>
            <DialogButton
              userId={this.props.user._id}
              lat={this.props.user.lat}
              lng={this.props.user.lng}
              type={this.props.type}
              userInfo={this.props.userInfo}
              resetUserInfo={this.props.resetUserInfo}
              toggleDrawer={this.props.toggleDrawer}
            />
            <ChatButton
              userId={this.props.user._id}
              lat={this.props.user.lat}
              lng={this.props.user.lng}
              type={this.props.type}
              userInfo={this.props.userInfo}
              resetUserInfo={this.props.resetUserInfo}
              toggleDrawer={this.props.toggleDrawer}
            />
            
          </CardActions>
        </Card>
      </div>
    )
  }

}
// <ChatButton
//               userId={this.props.user._id}
//               toggleDrawer={this.props.toggleDrawer}
//             />
module.exports = UserDisplay;
