import React from "react";

export default function ProductDetailStorage(props) {
    const storage = props.storage;
    return <p>
        <strong>Storage instruction :</strong>
        {storage}
    </p>;
}