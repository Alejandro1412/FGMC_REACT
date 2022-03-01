import styled from "styled-components/macro";
import tw from "twin.macro";

export const StyledChart = styled.section.attrs(() => ({
  className: "StyledChart",
}))`
  ${tw`flex flex-col justify-center items-center `}

  text {
    ${tw`text-white`}
  }
`;
