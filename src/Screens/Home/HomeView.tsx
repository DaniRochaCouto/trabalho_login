import React from 'react';
import { Input } from 'react-native-elements';
import { BottomButton, BottomScreen, FrontImageBackground, LabelLogin, LoginBox, LogoDiv, MainContainer, StyledButton, StyledImageBackground, TopScreen } from './HomeStyles';

export default function HomeView() {
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
              <LogoDiv>Produtos App</LogoDiv>
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
                <BottomButton>
                  <StyledButton
                    title="Cadastro"
                  />
                </BottomButton>
              </LoginBox>
            </BottomScreen>
          </FrontImageBackground>
        </StyledImageBackground>
      </MainContainer>
    );
};

//export default HomeView;