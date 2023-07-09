import styled from "styled-components";

export const WrapperStyle = styled.div`
  /* general */
  text-align: center;
  font-weight: bold;
  display: flex;
  justify-content: flex-end;

  .button {
    cursor: pointer;
    padding: 10px;
    margin: 5px;
    border-radius: 10px;
    display: inline-block;
  }

  .button:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  /** Device Styles */

  /* mobile styles */
  @media only screen and (max-width: 720px) {
  }
`;
