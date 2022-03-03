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

export const StyledAccordeon = styled.section.attrs(() => ({
  className: "StyledAccordeon",
}))`
  .itemAccordion {
    ${tw`w-96 h-96 h-full mx-auto `}

    div {
      // ${tw`flex justify-center items-center w-full`}
    }
  }
`;
