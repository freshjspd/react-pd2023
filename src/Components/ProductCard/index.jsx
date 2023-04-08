import React, { Component } from 'react';
import styles from './productCard.module.css';

export class ProductCard extends Component {
  constructor(props){
    super(props);
    this.state = {
        isSelected: false,
    };
  }
  select = () => {
    const {isSelected} = this.state;
    this.setState({isSelected: !isSelected});
  }
  render() {
    const {imgSrc, name, price} = this.props.product;
    const selectedStyle = this.state.isSelected ? styles.selectedCard : null;
    return (
        <div className={`${styles.card} ${selectedStyle}`} onClick={this.select}>
            <div className={styles.imgContainer}>
                <img src={imgSrc} alt='product'/>
            </div>
            <p>Product: {name}</p>
            <p> , price: {price}</p>
        </div>
    )
  }
}

export default ProductCard;