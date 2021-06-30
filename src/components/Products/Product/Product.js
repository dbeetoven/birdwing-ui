import React from 'react'
import { Card } from './ProductStyles'

export default function Product() {
    return (

        <Card>
            <div>
                <h4> Product Title</h4>
                <h5>Product subtitle</h5>
                <p> Price $</p>
            </div>
            <div>
                <p> Product description</p>
                <p> Product description</p>
                <p> Product description</p>
                <p> Product description</p>
            </div>
        </Card>
    )
}
