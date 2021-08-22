import styled from 'styled-components'

export const StyledAbout = styled.section`
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(min(100%, 47rem), 1fr)); */
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 1rem;
  padding: 0 calc((100vw - 960px) / 2);
`
export const StyledAboutItem = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  /* height: 25vh; */
`
export const StyledAboutItemImg = styled.img`
  object-position: 100% 0;
  /* border-radius: 2rem; */
  object-fit: cover;
  backdrop-filter: blur(3px);
  border-radius: 7px 0 0 7px;
  -webkit-backdrop-filter: blur(3px);
`
export const StyledAboutButton = styled.div`
  width: 40%;
`
export const StyledAboutImageWrapper = styled.div`
  height: 30vh;
  width: 90%;
`
