import React from 'react';
import {
  Text,
  View,
  VrButton
} from 'react-vr';

export default class TextBoxes extends React.Component {
    render() {
        return (
            <View>
                <VrButton onClick={() => this.props.stateClicked(1)}>
                    <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#CF3C7E' }}>
                    <Text style={{ fontSize: 0.2, textAlign: 'center' }}>
                        {this.props.states.Arizona}
                    </Text>
                    </View>
                </VrButton>
                <VrButton onClick={() => this.props.stateClicked(2)}>
                    <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#CF3C7E' }}>
                    <Text style={{ fontSize: 0.2, textAlign: 'center' }}>
                        {this.props.states.NewHampshire}
                    </Text>
                    </View>
                </VrButton>
                <VrButton onClick={ () => this.props.stateClicked(3)}>
                    <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#CF3C7E' }}>
                    <Text style={{ fontSize: 0.2, textAlign: 'center' }}>
                        {this.props.states.California}
                    </Text>
                    </View>
                </VrButton>
                <VrButton onClick={() => this.props.stateClicked(4)}>
                    <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#CF3C7E' }}>
                    <Text style={{ fontSize: 0.2, textAlign: 'center' }}>
                        {this.props.states.Hawaii}
                    </Text>
                    </View>
                </VrButton>
                <VrButton onClick={() => this.props.stateClicked(5)}>
                    <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#CF3C7E' }}>
                    <Text style={{ fontSize: 0.2, textAlign: 'center' }}>
                        {this.props.states.Texas}
                    </Text>
                    </View>
                </VrButton>
            </View>
        )
    }
}