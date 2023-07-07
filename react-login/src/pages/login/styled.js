import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: rgb(239, 240, 241);
`;
export const FormBox = styled.div`
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 370px;
  width: 370px;
  background-color: #fff;
  box-shadow: 0 5px 3px rgba(255, 255, 255, 0.9);
  .title {
    font-size: 25px;
  }
  .form {
    width: 100%;
  }
  .other {
    width: 100%;
    display: flex;
    justify-content: space-between;

    a {
      cursor: pointer;
      color: #0000ff;
    }
  }
`;

export const RegBox = styled.div`
  padding: 20px 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 500px;
  width: 370px;
  background-color: #fff;
  box-shadow: 0 5px 3px rgba(255, 255, 255, 0.9);
  .title {
    font-size: 25px;
  }
  .form {
    width: 100%;
  }
  .other {
    width: 100%;
    display: flex;
    justify-content: space-between;

    a {
      cursor: pointer;
      color: #0000ff;
    }
  }
  .code {
    display: flex;
    justify-content: space-between;
  }
`;
export const BackBox = styled.div`
  padding: 20px 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 430px;
  width: 370px;
  background-color: #fff;
  box-shadow: 0 5px 3px rgba(255, 255, 255, 0.9);
  .title {
    font-size: 25px;
  }
  .form {
    width: 100%;
  }
  .other {
    width: 100%;
    display: flex;
    justify-content: space-between;

    a {
      cursor: pointer;
      color: #0000ff;
    }
  }
  .code {
    display: flex;
    justify-content: space-between;
  }
`;
