import React from 'react'
// import {
//     Button,
//     Card,
//     CardContent,
//     CardDescription,
//     CardDescriptionDetail,
//     CardDescriptionPrice,
//     CardDescriptionTitle,
//     CardImg,
//     CardFoooter,
// } from './ProductStyles'
import styles from './styles.module.css'

export default function Product() {
    // return (

    //     <Card>
    //         <CardContent>
    //             <CardImg src="https://images.unsplash.com/profile-1446404465118-3a53b909cc82?" />
    //             <CardDescription>
    //                 <CardDescriptionTitle>Big Pons Simple + Papas Fritas</CardDescriptionTitle>
    //                 <CardDescriptionDetail>Medallon 160gr Cheddar Fetas x2 Bacon Cebolla Crispy Aderezo Big Pons</CardDescriptionDetail>
    //                 <CardDescriptionPrice>$ 850</CardDescriptionPrice>
    //             </CardDescription>
    //         </CardContent>
    //         <CardFoooter>
    //             <Button>Agregar</Button>
    //         </CardFoooter>
    //     </Card>
    // )
    return (
        <div className={styles.wrapper}>
            <div className={styles.productImg}>
                <img src="http://bit.ly/2tMBBTd" height={420} width={327} />
            </div>
            <div className={styles.productInfo}>
                <div className={styles.productText}>
                    <h1>Harvest Vase</h1>
                    <h2>by studio and friends</h2>
                    <p>
            Harvest Vases are a reinterpretation
                        <br /> of peeled fruits and vegetables as
                        <br /> functional objects. The surfaces
                        <br /> appear to be sliced and pulled aside,
                        <br /> allowing room for growth.{' '}
                    </p>
                </div>
                <div className={styles.productPriceBtn}>
                    <p>
                        <span>78</span>$
                    </p>
                    <button type="button">buy now</button>
                </div>
            </div>
        </div>
    )
}
