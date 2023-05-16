import styled from "styled-components"

export const Header = styled.div`
    height: 50px;
    width: 100%;
    background-color: #003117;
    position: sticky;
`

export const RowContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 725px;
    margin: 0 200px;
`
export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    background-color: #EEEEEE;
    height: 100%;
    padding-bottom: 100px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Section = styled.div`
    background-color: #FFFFFF;
    width: 560px;
    height: 350px;

    h2{
        font-size: 20px;
        font-weight: bold;
        font-family: 'Inter', sans-serif;
        margin-left: 20px;
        }

    .TitleAndButtons{
        margin-top: 20px;
        h1{
            font-size: 30px;
            font-weight: bold;
            font-family: 'Inter', sans-serif;
            margin-bottom: 20px;
            margin-left: 20px;
        }
        display: flex;
        justify-content: space-between;
        .buttons{
            margin-right: 20px;
        }
    }
    .Infos{
        div{
            margin: 10px 0 0 20px;
            font-family: 'Inter', sans-serif;
            font-size: 15px;
        }
    }
`

export const Info = styled.div`
    p{
        color: grey;
    }
`

export const InputsContainer = styled.div`
    margin: 25px 200px;
    background-color: #FFFFFF;
    min-height: 200px;
    padding: 25px 0;
    font-family: 'Inter', sans-serif;

    h1{
        font-family: 'Inter', sans-serif;
        font-weight: bold;
        font-size: 30px;
        margin: 0 0 25px 25px;
    }

    .inputs{
        h2{
            margin-top: 25px;
            text-align:center;
            font-family: 'Inter', sans-serif;
        }
    }
`

export const Timeline = styled.div`
    background-color: #ffffff;
    width: 520px;
    height: 270px;
    margin: 20px;
    overflow: hidden;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        width: 10px;
        height: 270px;
    }
    ::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #f3f3f3;
    }
    ::-webkit-scrollbar-thumb {
        border: 2px solid #f3f3f3;
        border-radius: 10px;
        background-color: #dddddd;
    }
    > * {
        h3{
            font-family: 'Inter', sans-serif;
            font-size: 0.8rem;
            font-weight: bold;
            margin-top: 2px;
        }
        p{
            margin-top: 5px;
            font-family: 'Inter', sans-serif;
            font-size: 0.8rem;
        }

        box-sizing: border-box;
        border-radius: 5px;
        padding: 8px;
        margin: 0 5px 10px 0;
        height: 50px;
        background-color: #f0f0f0;
    }
`