import React from 'react';
import axios from 'axios';

import Products from './products/index';

import './index.scss';

class Category extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: '',
            showLoader: false
        }
    }

    handleClick = ( event ) => {

        const categoryName = event.target && event.target.value;

        if(document.querySelector('.active') && document.querySelectorAll('.active').length > 0) {
            document.querySelector('.active').classList.remove('active');
        }

        event.target.classList.add('active');

        this.setState({
            showLoader: true
        })

        this.renderProducts(categoryName);
    }

    renderProducts = async(categoryName) => {

        return await axios.get('https://gist.githubusercontent.com/bharadwajturlapati/4e81154dbcc7d6928921b96057fc5b4a/raw/d31da32d6e5c1dd2a11968d7e94d3c60dfd50fcb/products.json')
        .then(response => {

            const data = response.data;
            const nameArr = [];

            Object.keys(data).forEach(key => {

                if((data[key].hub !== 'general' && categoryName !== 'general') || 
                    data[key].hub === categoryName) {
                    nameArr.push(data[key]);
                }

             });

             this.setState({
                 products: nameArr,
                 showLoader: false
             });
        })
        .catch(err => console.log(err));
    }    
    
    render() {

        const { products, showLoader } = this.state;

        return (
            <React.Fragment>
                <div className="header">
                    <input type="button" className="button" value="general" onClick={ this.handleClick } />
                    <input type="button" className="button" value="others" onClick={ this.handleClick } />
                </div>
                <div className="content">Click on the buttons to get the data</div>
                <div className="category">
                    {
                        products === "" &&
                        <React.Fragment>
                            <Products products={""} showLoader={ showLoader }/>
                            <Products products={""} showLoader={ showLoader }/>
                            <Products products={""} showLoader={ showLoader }/>
                            <Products products={""} showLoader={ showLoader }/>
                        </React.Fragment>
                    }
                    { products && products.map((product, index) =>
                        <Products products={ product } key={ index } /> )
                    }
                </div>
            </React.Fragment>
        );
    }

}

export default Category;
