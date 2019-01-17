import React, { Component } from 'react';
import IngredientSingle from './IngredientSingle';
import { array } from 'prop-types';

class List extends Component <any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            ingredients: this.props.items
        }
        console.log(this.state)
    }
    render() {
    return (
        <ul>
            {this.state.ingredients.map((i:[any, any, any]) => {
               return <IngredientSingle key={i[2]} q={i[0]} unit={i[1]} item={i[2]} />
            })}
        </ul>
    )};
}

class RecipeIngredients extends Component <any, any> {
    constructor(props: any){
        super(props);
        this.state = {
            ingredients: this.props.ingredients
        }
    }

    makeArr = (obj: Object) => {
        let arr = Object.values(obj).map(i => {
            console.log(i);
            let q = i['quantity'];
            let unit = i['unit'];
            let type = i['type'];

            return [q, unit, type];
        });

        return arr;
    }

    render() {
    return (
        <>
        <List items={this.makeArr(this.state.ingredients)} />
        </>
    )};
};

export default RecipeIngredients;