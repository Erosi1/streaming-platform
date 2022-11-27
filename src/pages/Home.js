import React from 'react'
import styled from 'styled-components'
import Featured from '../components/Featured'
import MovieList from '../components/MovieList'
import Navbar from '../components/Navbar'

const HomeContainer = styled.div`
    background-color: #0b0b0b;
    overflow: hidden;
`
const Home = () => {
    return (
        <HomeContainer>
            <Navbar />
            <Featured/>
            <MovieList/>
            <MovieList/>
            <MovieList/>
            <MovieList/>
        </HomeContainer>
    )
}

export default Home