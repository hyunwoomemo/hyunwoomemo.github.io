import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import ProfileImage from "./ProfileImage";
import TypeIt from "typeit-react";

const Background = styled.div`
  width: 100%;
  background-color: #000;
  color: #ffffff;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  height: 400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 5px;
  font-size: 38px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const Introduction = ({ profileImage }) => {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />
        <TitleWrapper>
          <TypeIt
            options={{ speed: 30 }}
            getBeforeInit={(instance) => {
              instance.type("Playground for FE Developers that I make").pause(500).delete(40).pause(500).type("Flayground");
              // Remember to return it!
              return instance;
            }}
          />
        </TitleWrapper>
      </Wrapper>
    </Background>
  );
};

export default Introduction;
