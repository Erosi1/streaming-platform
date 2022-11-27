import React from 'react'
import styled,{css} from 'styled-components'
import {TbArrowDownCircle} from 'react-icons/tb'
import {IoIosNotifications} from 'react-icons/io'
import  {AiOutlineSearch} from 'react-icons/ai'
const NavContainer = styled.div`
    width: 100%;
    color: white;
    font-size: 14px;
    position: fixed;
    top: 0;
    z-index: 999;
    background: linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.3) 50%);
`
const MainContainer = styled.div`
    padding: 0px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
`
const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    img {
        height: 25px;
        margin-right: 40px;
    }
    span {
        margin-right: 20px;
        cursor: pointer;
    }
`
const RightContainer = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 30px;
        height: 30px;
        border-radius: 5px;
        object-fit: cover;
        cursor: pointer;
    }
    span {
        padding: 10px;
        cursor: pointer;
    }
`
const ProfileContainer = styled.div`
    .options {
        display: none;
        background-color: #0b0b0b;
        border-radius: 5px;
    }
    &:hover {
        .options {
            display: flex;
            flex-direction: column;
            position: absolute;
        }
    }
`
const sharedStyle = css`
    height:30px;
    width:20px;
    margin: 0px 15px;
    cursor: pointer;
`
const MySearch = styled(AiOutlineSearch)`
    ${sharedStyle}
`
const MyNotifications = styled(IoIosNotifications)`
    ${sharedStyle}
`
const MyArrowDropDown = styled(TbArrowDownCircle)`
    ${sharedStyle}
`

const Navbar = () => {
  return (
      <NavContainer>
          <MainContainer>
              <LeftContainer>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="logo" />
                  <span>Home</span>    
                  <span>Series</span>    
                  <span>Movies</span>    
                  <span>New & Popular</span>    
                  <span>My List</span>    
              </LeftContainer>    
              <RightContainer>
                  <MySearch />
                  <span>KID</span>    
                  <MyNotifications />
                  <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="user" />
                  <ProfileContainer>
                      <MyArrowDropDown />
                      <div className="options">
                          <span>Settings</span>
                          <span>Logout</span>
                      </div>
                  </ProfileContainer>
              </RightContainer>    
          </MainContainer>            
      </NavContainer>
  )
}

export default Navbar