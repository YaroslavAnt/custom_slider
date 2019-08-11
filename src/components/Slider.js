import React from "react";
import styled from "styled-components";

const StyledSlider = styled.div`
  height: 360px;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid;
  position: relative;
  overflow: hidden;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;
  position:relative;
  left: ${({active})=> -active*100}%;
  transition-duration: .5s;
`;
const Controlls = styled.div`
  position: absolute;
  display: flex;  
  justify-content: space-between;
  top: calc(100% - 15px);
  left: 75%;
  transform: translateX(-50%);
`;
const Button = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  border: 1px solid;
  background-color: ${({ idx, active }) => (idx === active ? "#aaa" : "")};
  cursor:pointer;
  transition-duration: .5s;
  &:hover {
    background: blue;
  }
`;

class Slider extends React.Component {
  state = {
    active: 0
  };

  onClickHandler = idx => {
    console.log(idx);
    this.setState({
      active: idx
    });
  };

  render() {
    const {children} =this.props;
    const {active} = this.state;
    return (
      <StyledSlider>
        <Wrapper active={active}>{children}</Wrapper>
        <Controlls>
          {children.map((item, idx) => {
            return (
              <Button
                idx={idx}
                active={active}
                key={idx}
                onClick={() => this.onClickHandler(idx)}
              />
            );
          })}
        </Controlls>
      </StyledSlider>
    );
  }
}

export default Slider;
