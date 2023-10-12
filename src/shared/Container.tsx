import styled from "styled-components";

export default styled.div`
  width: calc(100% - 30px);
  max-width: 1025px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  @media(max-width: 500px) {
    padding-left: 5px;
    padding-right: 5px;
    width: calc(100% - 10px);
  }
`;
