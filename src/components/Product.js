import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

export default class Product extends Component {
    render() {
        const { id, title, img, price,inCart } =this.props.product;
        return (
            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {(value) => (
                            <div>
                                <div className="img-container p-5"
                                onClick={() => value.handleDetail(id)}>
                                    <Link to="/details">
                                        <img src={img} 
                                        alt="product" 
                                        className="card-img-top"/>
                                    </Link>
                                    
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <p className="align-self-center mb-0">{title}</p>
                                    <h5 className="text-blue font-italic mb-0">
                                        <span className="mr-1">$</span>
                                        {price}
                                    </h5>
                                </div>
                            </div>
                        )}
                        
                    </ProductConsumer>
                </div>
            </div>
        )
    }
}
