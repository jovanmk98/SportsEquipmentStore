import React from 'react';
import ProductTerm from '../ProductTerm/productTerm';
import {Link} from 'react-router-dom';

const products = (props) => {
    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead className={"thead-dark"}>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Price</th>
                            <th scope={"col"}>Sport</th>
                            <th scope={"col"}>Manufacturer</th>
                            <th scope={"col"}>Image</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.products.map((term) => {
                            return (
                                <ProductTerm term={term} onDelete={props.onDelete}/>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
                <div className="col mb-3">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <Link className={"btn btn-block btn-dark"} to={"/products/add"}>Add new product</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default products;