import React from "react";
import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  box-shadow: 5px 5px 10px #0b0b0b, -5px -5px 10px #191919;
  transition: color 0.3s ease, transform 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #fe930e;
    transform: scale(1.1);
  }
`;

export const PortfolioCard = styled.div`
  display: flex;
  border-radius: 8px;
  box-shadow: 5px 5px 10px #0b0b0b, -5px -5px 10px #191919;

  &:hover {
    color: #fe930e;
    transform: scale(1.0);
  }
`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  box-shadow: 5px 5px 10px #0b0b0b, -5px -5px 10px #191919;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  color: #fe930e;
  align-items: center;
  border: solid 1px #fe930e;
  border-radius: 16px;
  cursor: pointer;
  box-shadow: 5px 5px 10px #0b0b0b, -5px -5px 10px #191919;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #fff;
    transform: scale(1.1);
  }
`;
