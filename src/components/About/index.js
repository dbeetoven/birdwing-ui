import { Button, Heading } from 'components/common'
import React from 'react'
import { StyledAbout, StyledAboutButton, StyledAboutImageWrapper, StyledAboutItem } from './styles'

const About = () => {
    const getList = () => console.log('cliked!!!')
    return (
        <StyledAbout>
            <StyledAboutItem>
                <Heading h2 center noMargin>
          Welcome to Birdwing
                </Heading>
                <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas alias illum, autem
          repellendus quis laborum sit cupiditate, consequuntur, totam repudiandae asperiores
          perspiciatis? Nam adipisci voluptate vero iure assumenda quasi sapiente? Atque facilis
          sapiente unde quod perspiciatis quas? Placeat minima nesciunt sed architecto aperiam
          perspiciatis, suscipit eum repellendus eaque porro eius, dolorum laboriosam dicta, rerum
          alias eos repudiandae sapiente commodi incidunt.
                </p>
                <StyledAboutButton>
                    <Button onclick={getList}>Our Catalogue</Button>
                </StyledAboutButton>
            </StyledAboutItem>
            <StyledAboutItem>
                <StyledAboutImageWrapper  style={{  
                    backgroundImage: 'url(' + 'https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350' + ')',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                    {/* <StyledAboutItemImg src="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress" /> */}
                </StyledAboutImageWrapper>
            </StyledAboutItem>
        </StyledAbout>
    )
}

export default About
