import styled from "styled-components";

export const Tag = styled.div`
    padding: 5px 5px 0 3px;
    display: flexbox;
    border-radius: 5px;
    border: solid #909090;
    border-width: 1px;
    background-color: #F9FBFF;
    height: 25px;
    .button{
        margin: 3px 3px 0 0;
        :hover{
            cursor: pointer;
        }
    }
`

export const Container = styled.div`
    display: flexbox;
    flex-wrap: wrap;
    width: 'auto';
    gap: 5px;
    .input{
        background-color: white;
        padding-top: 3px;
        border: none;
        height: 25px;
        outline: none;
    }
`