import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #17181A;
`;

export const Result = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 300px;
`;

export const Buttons = styled.View`
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Button = styled.TouchableOpacity`
  flex: 2;
  justify-content: center;
  align-items: center;
  min-height: 90px;
  min-width: 90px;
  border-radius: 10px;
  background-color: #303136;
  margin: 3px;
`;

export const TextButton = styled.Text`
  font-size: 25px;
  color: #29A8FF;
`;

export const TextOperation = styled.Text`
  font-size: 50px;
  margin: 10px;
  color: #FFFFFF;
`;

export const TextResult = styled.Text`
  font-size: 80px;
  margin: 10px;
  color: #FFFFFF;
`;