import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    background-color: #00000050;
    width: 100vw;
    height: 100vh;
    top: 0;

    h1{
        font-family: 'Inter', sans-serif;
        font-weight: Bold;
        font-size: 30;
        margin-bottom: 20px;
    }
    h3{
        font-family: 'Inter', sans-serif;
        font-size: 15px;
    }
    h2{
        color: #003117;
        font-family: 'Inter', sans-serif;
        font-size: 15px;
        margin: 0 2px 15px 0;
        :hover{
            cursor: pointer;
        }
    }

    input{
        width: 392px;
        border-radius: 5px;
        background-color: #f3f3f3;
        border-width: 1px;
        height: 25px;
        padding-left: 5px;
    }

    .content{
        background-color: white;
        position: fixed;
        left: 35%;
        top: 30%;
        width: 400px;
        border-radius: 5px;
        padding: 20px;
    }
    .row{
        display: flexbox;
        justify-content: space-between;
        align-items: center;
        .cpfcelphone{
            input{
                width: 180px;
            }
        }
    }
    .field{
        margin-top: 10px;
    }
`

export const Confirm = styled.button `
    margin-top: 25px;
    width: 190px;
    height: 30px;
    border-radius: 5px;
    border: none;
    background-color: #003117;
    color: white;
    :hover{
        cursor: pointer;
    }
`