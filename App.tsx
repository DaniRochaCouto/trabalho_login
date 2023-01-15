import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Input } from 'react-native-elements';
import { BottomButton, BottomScreen, FrontImageBackground, LabelLogin, LoginBox, LogoDiv, MainContainer, StyledButton, StyledImageBackground, TopScreen } from './src/Screens/Home/HomeStyles';


export default function App() {
  return (
    <MainContainer>
        <StyledImageBackground
          source={{
            uri: "https://previews.123rf.com/images/chagin/chagin1501/chagin150100001/35151812-business-people-working-together.jpg",
          }}
          resizeMode="cover"
        >
          <FrontImageBackground>
            <TopScreen>
              <LogoDiv>RH App</LogoDiv>
            </TopScreen>
            <BottomScreen>
              <LoginBox>
                <LabelLogin>Login</LabelLogin>
                <Input
                  placeholder="email@email.com"
                  leftIcon={{
                    type: "font-awesome",
                    name: "envelope",
                    color: "red",
                  }}
                  placeholderTextColor={"#999"}
                  autoComplete="email"
                />
                <LabelLogin>Senha</LabelLogin>
                <Input
                  placeholder="ABCabc1234"
                  leftIcon={{
                    type: "font-awesome",
                    name: "lock",
                    color: "red",
                  }}
                  placeholderTextColor={"#999"}
                  autoComplete="password"
                />
                <BottomButton>
                  <StyledButton
                    title="Login"
                  />
                </BottomButton>
              </LoginBox>
            </BottomScreen>
          </FrontImageBackground>
        </StyledImageBackground>
      </MainContainer>
    );
}

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//});
