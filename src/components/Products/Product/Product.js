import React from 'react'
import { Button, Card, CardContent, CardDescription, CardDescriptionDetail, CardDescriptionPrice, CardDescriptionTitle, CardImg,CardFoooter } from './ProductStyles'


export default function Product() {
    return (

        <Card>
            <CardContent>
                <CardImg src="https://images.unsplash.com/profile-1446404465118-3a53b909cc82?" />
                <CardDescription>
                    <CardDescriptionTitle>Big Pons Simple + Papas Fritas</CardDescriptionTitle>
                    <CardDescriptionDetail>Medallon 160gr Cheddar Fetas x2 Bacon Cebolla Crispy Aderezo Big Pons</CardDescriptionDetail>
                    <CardDescriptionPrice>$ 850</CardDescriptionPrice>
                </CardDescription>
            </CardContent>
            <CardFoooter>
                <Button>Agregar</Button>
            </CardFoooter>
        </Card>
    )
}
