import React from "react";
import Item from "../components/item";

export function Information(props) {
    return (
        <div className="movies">
            {
                props.data.map((data, index) => {
                    return (
                        <Item key={`${index}-${data.Title}`} item={data} />
                    )
                })
            }

        </div>
    )
}



