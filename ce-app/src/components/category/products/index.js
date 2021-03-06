import React from 'react';

import './index.scss';
import Loader from '../../loader';

const Products = (props) => {

    const { showLoader } = props;
    const { image, name, description, author, key } = props.products;

    return (
        <div className="productTile">
            <div className='productImage'>
                { showLoader && <Loader imageLoader={ true } /> }
                <img src={ image } className="icon" alt={ name } title={ name }/>
            </div>
            <div className='name'>
                { showLoader && <Loader /> }
                <span>{ name }</span>
            </div>
            <div className='description' title={ description }>
                <svg version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000"><g><path d="M601.7,10H216.4C155,10,105,60.2,105,121.9l-0.5,756.3c0,61.7,50,111.9,111.4,111.9h567.7c61.7,0,111.9-50.2,111.9-111.9V303.8L601.7,10z M860.8,878.1c0,42.6-34.6,77.2-77.2,77.2H215.9c-42.3,0-76.7-34.6-76.7-77.2l0.5-756.3c0-42.6,34.4-77.2,76.7-77.2h371l273.5,273.5V878.1z"/><path d="M293.6,800.9h412.8V671.7H293.6V800.9z M328.3,706.4h343.5v59.9H328.3V706.4z"/><path d="M529.9,375.5h319.1L529.9,56.4V375.5z M564.6,140.1l200.8,200.8H564.6V140.1z"/><path d="M293.6,611.9h412.8V482.7H293.6V611.9z M328.3,517.3h343.5v59.9H328.3V517.3z"/></g></svg>
                { showLoader && <Loader /> }
                <span>{ description }</span>
            </div>
            <div className='author'>
                <svg version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000"><g><path d="M489.6,702.9c154,0,278.7-153.8,278.7-343.6c0-189.8-124.7-343.5-278.7-343.5c-153.8,0-278.5,153.7-278.5,343.5C211.1,549.1,335.8,702.9,489.6,702.9L489.6,702.9z M489.6,78.2c119.2,0,216.2,126.1,216.2,281.1c0,155.1-97,281.2-216.2,281.2c-119.3,0-216.2-126.1-216.2-281.2C273.4,204.4,370.3,78.2,489.6,78.2L489.6,78.2z M898.3,765.7l-211-77.1c-16.1-5.8-34,2.6-39.8,18.8c-5.8,16.3,2.7,34.1,18.8,39.9l210.9,77.1c20,7.1,38.1,33,38.1,54.1v22.4c0,17.2-14,20.8-31.2,20.8H544.2H434.9H115.9c-17.1,0-31.1-3.6-31.1-20.8v-22.4c0-21.2,18.1-47,38-54.1l190.2-77.1c16.3-5.8,24.7-23.6,18.8-39.9c-5.8-16.3-23.7-24.8-39.8-18.8l-190.2,77.1c-44.4,16-79.2,65.6-79.2,112.9v22.4c0,51.6,41.8,83.3,93.3,83.3h319.1h109.3h339.8c51.6,0,93.5-31.7,93.5-83.3v-22.4C977.5,831.2,942.6,781.6,898.3,765.7L898.3,765.7z"/><path d="M884.1,996.7H115.9C54.5,996.7,10,956.4,10,900.9v-22.4c0-52.3,38.4-106.9,87.5-124.6L287.2,677c23.9-8.8,48.4,4,56.4,26.1c3.9,11.1,3.3,23-1.7,33.5c-5,10.6-13.8,18.5-24.7,22.4l-189.8,76.9c-15.4,5.6-30.1,26.6-30.1,42.6v22.4c0,3.9,0,8.3,18.6,8.3h768.2c18.7,0,18.7-4.2,18.7-8.3v-22.4c0-15.9-14.8-37-29.8-42.4L662,759c-22.5-8.1-34.5-33.2-26.4-55.9c8.1-22,33.9-34.2,55.9-26.3l211.1,77.1c49,17.7,87.4,72.5,87.4,124.6v22.4C990,956.4,945.5,996.7,884.1,996.7z M302.5,699.2c-2.1,0-4.2,0.3-6.3,1.1l-189.8,77C66.2,791.7,35,836.1,35,878.5v22.4c0,41.6,33.2,70.7,80.8,70.7h768.2c47.7,0,80.9-29.1,80.9-70.7v-22.4c0-41.6-31.8-87-70.8-101l-211.2-77.2c-9.3-3.2-20.3,1.9-23.7,11.3c-3.5,9.6,1.6,20.5,11.3,23.9l211,77.1c24.6,8.9,46.3,39.8,46.3,66v22.4c0,15.2-7.6,33.3-43.7,33.3H115.9c-36.1,0-43.5-18.1-43.5-33.3v-22.4c0-26.8,21-56.9,46.2-66l189.6-76.9c5.2-1.9,9-5.3,11.1-9.7c2.1-4.6,2.4-9.6,0.6-14.3C317.3,704.1,310.4,699.2,302.5,699.2z M489.6,715.5c-160.4,0-290.9-159.7-290.9-356.2c0-196.3,130.6-356,290.9-356c160.5,0,291.1,159.7,291.1,356C780.7,555.8,650.1,715.5,489.6,715.5z M489.6,28.4c-146.5,0-265.9,148.5-265.9,331c0,182.6,119.4,331.1,265.9,331.1c146.7,0,266.1-148.5,266.1-331.1C755.7,176.8,636.3,28.4,489.6,28.4z M489.6,653.1c-126.1,0-228.7-131.8-228.7-293.8c0-162,102.6-293.7,228.7-293.7c126.1,0,228.7,131.7,228.7,293.7C718.3,521.3,615.7,653.1,489.6,653.1z M489.6,90.7C377.3,90.7,286,211.2,286,359.3C286,507.5,377.3,628,489.6,628c112.4,0,203.8-120.6,203.8-268.7S602,90.7,489.6,90.7z"/></g></svg>
                { showLoader && <Loader /> }
                <span>{ author }</span>
            </div>
            <div className='key'>
                { showLoader && <Loader /> }
                <span>{ key }</span>
            </div>
        </div>
    );

}

export default Products;
