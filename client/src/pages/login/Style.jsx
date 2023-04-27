import styled from 'styled-components'

export const Title = styled.h1 `
    @import url('https://fonts.googleapis.com/css2?family=Italiana&display=swap');
    font-size: 60px;
    margin: 0;
    font-family: 'Italiana';
    font-weight: lighter;
`

export const Subtitle = styled.p `
    text-align: center;
    width: 150px;
    margin: 0 0 15px;
`

export const Input = styled.input `
    width: 268px;
    height: 35px;
    margin-bottom: 10px;
    border-radius: 5px;
    border-color: darkgrey;
    border-width: 1px;
    padding: 0 15px;
`

export const LoginButton = styled.button `
    width: 300px;
    height: 50px;
    background-color: #003117;
    color: white;
    border-radius: 5px;
    border: none;
    :hover{
        cursor: pointer;
    }
`
export const ForgotPswd = styled.p `
    width: 150px;
    text-align: center;
    color: #003117;
    :hover{
        cursor: pointer;
    }
`

export const Container = styled.div `
    margin: 250px 50% 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`