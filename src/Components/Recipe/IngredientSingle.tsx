import React, { Component } from 'react';

interface Props {
    q: Number,
    unit: string,
    item: string
}

class IngredientSingle extends Component <Props, any> {
    constructor(props: any){
        super(props);

        this.state = {
            q: this.props.q,
            unit: this.props.unit,
            item: this.props.item,
        }
    }

    render() {
        return(
            <li>{this.state.q} {this.state.unit} {this.state.item}</li>
        )
    }
}

export default IngredientSingle;
