import styled from "styled-components";
export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #090808;
  text-transform: uppercase;
  margin: 10px auto;
  overflow-x: hidden;
  height: auto;
  overflow-y: auto;
  input{
    &:focus {
      display: inline-block;
      box-shadow: 0 0 0 0.2rem #b9abe0;
      backdrop-filter: blur(12rem);
      border-radius: 2rem;
    }
    &::placeholder {
      color: rgba(3, 3, 3, 0.6);
      font-weight: 100;
      font-size: 1rem;
    }
  }
  
  button{
    background: rgba(182, 182, 252, 0.75);
    height: 35px;
    border-radius: 20px;
    border: 1px solid blueviolet;
    width: 35%;
    margin: 10px auto 20px auto;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
  }
  
  form{
    display: flex;
    flex-direction: column;
    //width: 90%;
    justify-content: center;
    
  }
  label{
    margin-top: 10px;
    @media only screen and (max-width: 575px) {
      margin-top: 40px;

    }
  `;

export const InputLabel = styled.div`
  display: flex;
  flex-direction: row;
`;
export const SpanLabel = styled.span`
  letter-spacing: normal;
  font-size: 20px;
  margin-top: 10px;

`;
export const Row = styled.div`
  flex-direction: row;
  width: 100%;
  
  
`;
export const SmallInput = styled.input`
  width: 200px;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  height: 30px;
  border-radius: 20px;
  border: 1px solid blueviolet;
  padding-left: 20px;
  margin: 10px 30px 50px 10px;
  outline: none;
  font-size: 17px;
`;
export const TextArea = styled.textarea`
  width: auto;
  min-width: 40vw;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  min-height: 30px;
  border-radius: 20px;
  border: 1px solid blueviolet;
  padding-left: 20px;
  margin: 10px 30px 50px 10px;
  outline: none;
  font-size: 17px;
  overflow-wrap: break-word;
  height: auto;
  
`;

export const TableWrapper = styled.div`
  width: 100%;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid black;
  border-right: 1px solid black;
  text-transform: capitalize;

  input {
    &:focus {
      display: inline-block;
      background-color: #e5f3ae;
      border-radius: 0;
    }
  }


  span, input, b {
    padding: 8px 4px;
    border: 1px solid black;
    margin: 0 -1px -1px 0;
    background-color: transparent;
  }

`;
