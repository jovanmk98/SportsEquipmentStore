import React from 'react';
import {Link} from 'react-router-dom';

const productTerm = (props) => {
    return (
        <tr>
            <td scope={"col"}>{props.term.name}</td>
            <td scope={"col"}>{props.term.price}$</td>
            <td scope={"col"}>{props.term.manufacturer.name}</td>
            <td scope={"col"}>{props.term.sport.name}</td>
            <td scope={"col"}><img src={props.term.image} width="180px" height="120px"/>  </td>
            <td scope={"col"} className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
            </td>
        </tr>
    )
}

export default productTerm;