import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Icon = styled(FontAwesomeIcon)`
  font-size: 30px;
  &:hover{
    color:	 #ff6666;
  }
`;

const LikeButton = () => {
  return <Icon icon={faHeart} />;
};

export default LikeButton;
