import {IoMdAdd} from 'react-icons/io'
import {MdPlayArrow} from 'react-icons/md'
import {HiThumbDown} from 'react-icons/hi'
import {HiThumbUp} from 'react-icons/hi'
import React, { useState } from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`
    width: 225px; 
    height: 120px;
    background-color: #0b0b0b;
    margin-right: 5px;
    overflow: hidden;
    cursor: pointer;
    color: white;
    &:hover {
        width: 325px;
        height: 300px;
        position: absolute;
        top: -150px;
        box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.07);
        border-radius: 5px;
        img {
            height: 140px;
        }
    }
`

const MainImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Video = styled.video`
    width: 100%;
    height: 140px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
`
const ItemInfo = styled.div`
        display: flex;
        flex-direction: column;
        padding: 5px;
`
const IconsContainer = styled.div`
    display: flex;
    margin-bottom: 10px;
.icon {
        border: 2px solid white;
        padding: 5px;
        border-radius: 50%;
        margin-right: 10px;
        font-size: 16px;
    }
        
`
const InfoTop = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: gray;
    .limit {
        border: 1px solid gray;
        padding: 1px 3px;
        margin: 0 10px;
    }
`
const Description = styled.div`
    font-size: 13px;
    margin-bottom: 10px;
`
const Genre = styled.div`
    font-size: 14px;
    color: lightgray;
`

const MovieItem = ({ index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4"

    return (
        <ItemContainer style={{ left: isHovered && index * 225 - 50 + index * 2.5 }} onMouseEnter={() =>setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <MainImage src="https://cdn.cloudflare.steamstatic.com/steam/apps/1265780/capsule_616x353.jpg?t=1618237900" alt="trailer" />
            {isHovered && (
                <>
                    <Video src={trailer} autoPlay loop />
                    <ItemInfo>
                        <IconsContainer>
                            <MdPlayArrow className="icon" />
                            <IoMdAdd className="icon" />
                            <HiThumbUp className="icon" />
                            <HiThumbDown className="icon" />
                        </IconsContainer>
                        <InfoTop>
                            <span>2 hours 14 mins</span>
                            <span className="limit">13+</span>
                            <span>2022</span>
                        </InfoTop>
                        <Description>The Lord of the Rings: Gollum is an upcoming action-adventure game developed by Daedalic Entertainment.</Description>
                        <Genre>Adventure</Genre>
                    </ItemInfo>
                </>
            )}
        </ItemContainer>
    )
}

export default MovieItem