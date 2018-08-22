import React from 'react';
import {View, Text} from 'react-vr';

export default class Title extends React.Component {
    constructor(){
        super();
        this.state = {title: "Panoramic Road Trip"};
    }
    render() {
        return(
            <View>
                <Text
                    style={{
                        fontSize: 0.2,
                        textAlign: 'center',
                        color: "#CF3C7E"
                    }}
                >
                {this.state.title}
                </Text>
            </View>
        )
    }
}