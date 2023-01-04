import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { GatsbyImage } from "gatsby-plugin-image";

// 자신이 원하는 프로필 이미지 링크로 설정해주세요.
const PROFILE_IMAGE_LINK = "https://user-images.githubusercontent.com/105469077/210591383-5295985e-adb1-43fb-8fc9-56a9a4ce6045.jpg";

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const ProfileImage = ({ profileImage }) => {
  return <ProfileImageWrapper image={profileImage} alt="Profile Image" />;
};

export default ProfileImage;
