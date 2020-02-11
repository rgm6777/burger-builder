import React, {Component} from 'react';
import Auxillary from '../../HOC/Auxillary';
import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 10,
    bacon: 40,
    cheese: 5,
    meat: 30
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 10
    }

    addIngredientHandler = (type) => {
        this.setState({errorMessage: ''})
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updatedCount = {
            ...this.state.ingredients
        };
        updatedCount[type] = newCount;
        const priceAddition = INGREDIENT_PRICES[type]; 
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ingredients: updatedCount, totalPrice: newPrice});
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) {
            return;
        };
        const newCount = oldCount - 1;
        const updatedCount = {
            ...this.state.ingredients
        }
        updatedCount[type] = newCount;
        const priceAddition = INGREDIENT_PRICES[type]; 
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({ingredients: updatedCount, totalPrice: newPrice});
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Auxillary>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls burgerPrice={this.state.totalPrice} ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler} disabled={disabledInfo}/>
            </Auxillary>
        );
    }
}

export default BurgerBuilder;