import React from "react";
import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  box-shadow: 5px 5px 10px #0b0b0b, -5px -5px 10px #191919;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #fe930e;
    transform: scale(1.1);
  }
`;
