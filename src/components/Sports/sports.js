import React from "react";

const sports = (props) => {
    return (
        <div className={"container mm-2 mt-2"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead className={"thead-dark"}>
                        <tr align="center">

                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Image</th>

                        </tr>
                        </thead>
                        <tbody>
                        {props.sports.map((term) =>{
                            return (
                                <tr align="center">

                                    <td>{term.name}</td>
                                    <td><img src={term.description} width="300px" height="200px"/></td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default sports;