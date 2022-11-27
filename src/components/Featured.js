import React from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
import { AiFillPlayCircle } from 'react-icons/ai'
import styled from 'styled-components';

const FeaturedContainer = styled.div`
    height: 90vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const InfoContainer = styled.div`
    width: 35%;
    position: absolute;
    left: 50px;
    bottom: 100px;
    color: white;
    display: flex;
    flex-direction: column;
    img {
        width: 400px;
    }
    .desc {
        margin: 20px 0px;
    }
`
const ButtonContainer = styled.div`
    display: flex;
`
const StyledButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;
    margin-right: 10px;
    cursor: pointer;
    background: ${props => props.primary ? "white" : "#0b0b0b"};
    color: ${props => props.primary ? "#0b0b0b" : "white"};
    span {
        margin-left: 5px;
    }
`

const Featured = () => {
  return (
    <FeaturedContainer>
        <Image src="https://images.pexels.com/photos/4488194/pexels-photo-4488194.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
         alt="main" />
         <InfoContainer>    
         <img src="https://www.pngmart.com/files/22/Matrix-Movie-PNG-Transparent.png" alt="logo" />
                <span className="desc">
                The Matrix depicts a dystopian future in which humanity is unknowingly trapped inside a simulated reality, the Matrix, which intelligent machines have created to distract humans while using their bodies as an energy source.
                </span>
                <ButtonContainer>
                    <StyledButton primary>
                        <AiFillPlayCircle/>
                        <span>Play</span>  
                    </StyledButton>
                    <StyledButton>
                        < AiFillInfoCircle/>
                        <span>Info</span>  
                    </StyledButton>
                </ButtonContainer>
         </InfoContainer>
</FeaturedContainer>
  )
}

export default Featured