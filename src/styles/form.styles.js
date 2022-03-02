import styled from "styled-components/macro";
import tw from "twin.macro";

export const StyledForm = styled.form.attrs(() => ({
  className: "StyledForm",
}))`
  ${tw` flex flex-col justify-center items-center mt-10 space-y-4`}
`;

export const StyledTwoColumns = styled.section.attrs(() => ({
  className: "StyledTwoColumns",
}))`
  ${tw` w-full mx-auto flex flex-col lg:flex-row justify-evenly space-x-4`}

  .MuiInputLabel-root {
    ${(props) => props.disabledTransition && tw`block`}
  }

  .MuiOutlinedInput-root {
    ${tw` w-full `}
  }
`;

export const StyledDate = styled.div.attrs(() => ({
  className: "StyledForm",
}))`
  ${tw` w-full`}

  label {
    ${tw` static mt-0 `}
  }

  .MuiInput-root {
    ${(props) => props.hasValue && tw`mt-0`}
  }
`;
