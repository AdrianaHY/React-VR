import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  View,
  VrButton
} from 'react-vr';
import TextBoxes from './TextBoxes';
import Title from './Title';

export default class PanoramicRoadTrip extends React.Component {
  constructor() {
    super();
    this.state = {selectedState: " "};
  }
  stateClicked = (selection) => {
    let newState;
    switch(selection) {
      case 1:
        newState = "Arizona";
        break;
      case 2:
        newState = "New Hampshire";
        break;
      case 3:
        newState = "California";
        break;
      case 4:
        newState = "Hawaii";
        break;
      case 5:
        newState = "Texas";
        break;  
    }
    console.log(newState);
    this.setState({ selectedState: newState });
  }
  componentDidMount() {
    const random = Math.floor((Math.random() * 5) + 1);
    let randState;
    switch(random) {
      case 1:
        randState ="Arizona";
        break;
      case 2:
        randState = "new Hampshire";
        break;
      case 3:
        randState = "California";
        break;
      case 4:
        randState = "Hawaii";
        break;
      case 5:
        randState = "Texas";
        break;
    }
    this.setState({ selectedState: randState });
  }
  render() {
      const states = {
          Arizona: "Arizona",
          NewHampshire: "New Hampshire",
          California: "California",
          Hawaii: "Hawaii",
          Texas: "Texas"
      }
      return(
          <View>
              <Pano source={asset( this.state.selectedState + '.jpg')}/>
              <View style={{
              width: 2,
              flexDirection: 'column',
              alignItems: 'stretch',
              justifyContent: 'flex-start',
              transform: [{translate: [0,0, -5]}],
              layoutOrigin: [0.5,0.5]
              }}>
              <Title />
              <TextBoxes 
                stateClicked={this.stateClicked}
                states={states}/>
              </View>
          </View>
      )
  }
};

AppRegistry.registerComponent('PanoramicRoadTrip', () => PanoramicRoadTrip);
