import styled from "styled-components";

export const Container = styled.div`
    height:50px;
    margin: 0 25px;

    .infoContainer{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-top: 10px;
        h3{width: 150px}
    }
`

export const Info = styled.div`
    width: 120px;
    p{
        color: grey;
    }
`