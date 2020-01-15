import React from 'react';
import './index.scss';

const Products = (props) => {

    const { image, name, description, author, key } = props.products;

    return (
        <div className="productTile">
            <div className='productImage'>
                <img src={ image } className="icon" alt={ name } title={ name }/>
            </div>
            <div className='name'>{ name }</div>
            <div className='description' title={ description }>{ description }</div>
            <div className='author'>{ author }</div>
            <div className='key'>{ key }</div>
        </div>
    );

}

export default Products;
