import styled from "styled-components";

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    display: flex;
    flex-direction: row;
`

export const InfoContainer = styled.div`
    width: 1100px;
    height: 80px;
    display: flex;
    padding: 0 25px;
    justify-content: space-between;
    align-items: center;
`
export const StatusBar = styled.div`
    width: 5px;
    height: 80px;
`

export const Info = styled.div`
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    .subtitle{
        color: grey;
    }
`

export const Status = styled.div`
    width: 125px;
    height: 15px;
    border-radius: 5px;
    background-color: blue;
    color: white;
    text-align: center;
    padding: 5px 0;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: semibold;   
`