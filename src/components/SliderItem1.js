import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;
  flex-shrink: 0;
`;
const SliderInfo = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding-right: 10px;
`;
const SliderInfoTitle = styled.p`
  text-align: left;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
`;
const SliderInfoText = styled.p`
  font-size: 14px;
  line-height: 26px;
  padding-top: 0px;
`;
const SliderActivity = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

const SliderItem1 = () => {
  return (
    <Wrapper>
      <SliderInfo>
        <div>
          <SliderInfoTitle>Search for businesses like you</SliderInfoTitle>
          <SliderInfoText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </SliderInfoText>
          <SliderInfoText>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </SliderInfoText>
        </div>
      </SliderInfo>
      <SliderActivity>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </SliderActivity>
    </Wrapper>
  );
};

export default SliderItem1;
