import React, { Component } from 'react';
import { 
    Text, 
    TouchableWithoutFeedback, 
    View,
    LayoutAnimation
 } from 'react-native';
import  { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions/index'


class ListItem extends Component {
    componentWillUpdate() {
        console.log("Test");
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library, expanded } = this.props
        if(expanded) {
            return (
                <CardSection>
                    <Text style={{flex: 1}}>{library.item.description}</Text>
                </CardSection>
            )
        }
    }
    render() {
        const { titleStyle } = styles;
        const { title, id} = this.props.library.item;
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.item.id;
    return { expanded };
}

export default connect(mapStateToProps, actions)(ListItem);