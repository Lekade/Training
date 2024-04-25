import styled from "styled-components";

export const Button = styled.button`
  margin-top: 1.9rem;
  width: 8.6rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center; //хз
  border:none;
  border-radius: 0.5rem;
  background-color: #fff;
  outline: 0.2rem solid rgb(78, 113, 254);
  color: rgb(78, 113, 254);
  cursor: pointer;
  
  
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  text-transform: capitalize;
  
  &:last-child{
    margin-left: 1.2rem;
  }
`


export const ButtonLink = styled(Button)`
  color: #fff;
  outline: none;
  background-color: rgb(78, 113, 254);
  text-decoration: none;
`