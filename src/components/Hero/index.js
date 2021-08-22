import React from 'react'
import { Button, Heading } from 'components/common'
// import burger from '../../assets/images/header-bg.jpeg'
import { StyledHero, StyledHeroContent, StyledHeroDescription } from './styles'


const Hero = () => {
    const getList =()=>console.log('cliked!!!')
    return (
        <StyledHero style={{  
            backgroundImage: 'url(' + 'https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350' + ')',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <StyledHeroContent>
                <Heading center noMargin>Birdwing Boutique</Heading>
                <StyledHeroDescription>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, corrupti veniam.
                </StyledHeroDescription>
                <Button onclick={getList}>
                    Our Catalogue
                </Button>
            </StyledHeroContent>
        </StyledHero>
    )
}

export default Hero
