import styled from 'styled-components'

export const StyledHero = styled.section`
backgroundImage: url("https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"),
backgroundPosition: 'center',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat'
object-fit: cover;
object-position: 100% 0;
widht: 100%;
`
export const StyledHeroContent =styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height:40vh;
color: var(--white);
`
export const StyledHeroDescription = styled.p`
text-align: center;
margin: 1rem 0;
`
