import styled from "styled-components";

export default styled.div`
  width: 30px;
  height: 30px;
  background: ${({ isFilledPage }) =>
    isFilledPage
      ? "linear-gradient(104.04deg, #00C9FF 0%, #92FE9D 100%)"
      : "#F2F3F5"};
  border-radius: 50%;
`;
