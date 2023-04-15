import React, { Component } from 'react';
import styles from './productCard.module.css';
import stc from 'string-to-color';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
    const color = stc(name);
    const colorImgCon = {backgroundColor: color};
    console.log(name, price);
    return (
        <div className = {classNames(styles.card,selectedStyle)} onClick={this.select}>
            <div className={styles.imgContainer} style={colorImgCon}>
                <img src={imgSrc} />
            </div>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    )
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imgSrc: PropTypes.string
  })
}

ProductCard.defaultProps = {
  product: {
    name: 'anon',
    price: 0,
  }
}



export default ProductCard;