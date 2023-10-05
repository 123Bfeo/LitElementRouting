import { css } from "lit";

export const inputStyles = css`
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input[type="text"] {
    box-sizing: border-box;
    border: 2px solid #eae5e4;
    border-radius: 5px;
    font-size: 16px;
    background-color: #eae5e4;
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
  }
  .input-username {
    width: 100%;
    margin: 5px;
    background-image: url("/src/img/username.svg");
  }
  input[type="password"] {
    box-sizing: border-box;
    border: 2px solid #eae5e4;
    border-radius: 5px;
    font-size: 16px;
    background-color: #eae5e4;
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
  }
  .input-password {
    width: 100%;
    margin: 5px;
    background-image: url("/src/img/password.svg");
  }
`;
