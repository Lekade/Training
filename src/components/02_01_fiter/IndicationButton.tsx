import React, {useState} from 'react';
import styled, {css} from "styled-components";

export type ButtonTypeText = 'notСonnected' | 'on' | 'off'

export const IndicationButton = () => {
    const [indicator, setIndicator] = useState('notСonnected')

    const IndicatorFn = (indicator: ButtonTypeText) => {
        setIndicator(indicator)
    }
    return (
        <StyledIndicationButton>
            <StyledButton onClick={() => IndicatorFn('on')}>On</StyledButton>
            <StyledButton onClick={() => IndicatorFn('off')}>Off</StyledButton>
            <Indicator indicator={indicator}>indicator</Indicator>
        </StyledIndicationButton>
    );
};

const StyledIndicationButton = styled.div`
  display: flex;
  gap: 30px;
`

const StyledButton = styled.button`
  display: inline;
  background-color: darkgray;
  min-width: 70px;
  height: 50px;
  font-weight: bold;

`
const Indicator = styled.div<{ indicator:string}>`
  width: 50px;
  height: 50px;
  border: 3px solid black;
  border-radius: 50%;
  font-size: 0;
  color: transparent;
  background-color: darkgray;
  ${props => {
    if (props.indicator === 'off') {
      return css`
        background-color: red;
      `
    }
    if (props.indicator === 'on') {
      return css`
        background-color: green;
      `
    }
  }}
`
