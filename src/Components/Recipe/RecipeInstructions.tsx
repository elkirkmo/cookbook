import React, { Component } from 'react';

class RecipeInstructions extends Component <any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
           copy: this.props.text
        }
    }

    render (){
        return (
        <>
            <p>{this.state.copy}</p>
        </>
        )
        };
};

export default RecipeInstructions;