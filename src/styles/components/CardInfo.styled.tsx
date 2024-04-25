import styled from "styled-components";

export const CardInfo = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-wrap: wrap;
  font-family: Inter, sans-serif;
  h1, p{
    width: 100%;
    margin-top: 2rem;
    text-align: left;
  }
  h1{
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 19px;
  }
  p{
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 2rem;
    color: rgb(171, 179, 186);
  }
`