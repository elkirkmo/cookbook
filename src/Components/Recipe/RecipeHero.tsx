import React, { Component } from 'react';
interface Props {
    title: string,
    author: string,
}

class RecipeHero extends Component <any, any> {
    constructor(props: any){
        super(props);
        this.state = {
            title: this.props.title,
            author: this.props.author,
        }
    }
    render() {
    return (
        <>
            <h2>{this.state.title}</h2>
            <h3>From {this.state.author}</h3>
        </>
    )};
};

export default RecipeHero;