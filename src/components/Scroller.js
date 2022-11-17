import styled from "styled-components";

export default styled.div`
  height: 30px;
  width: ${({ pagesAmount }) =>
    `calc(((100% - (${
      pagesAmount + 1
    } * 30px)) / ${pagesAmount}) + (2 * 30px))`};
  background: linear-gradient(104.04deg, #00c9ff 0%, #92fe9d 100%);
  border-radius: 15px;
  position: absolute;
  transition: width 0.3s;
`;
