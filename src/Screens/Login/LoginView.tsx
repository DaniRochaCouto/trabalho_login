import React, { useState } from 'react';
import { Input } from 'react-native-elements';
import { BottomButton, BottomScreen, FrontImageBackground, LabelLogin, LoginBox, 
    LogoDiv, MainContainer, StyledButton, StyledImageBackground, TopScreen } from '../Cadastro/CadastroStyles';
import axios from 'axios';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {
      const response = await axios.post('https://fiap-reactjs-presencial.herokuapp.com/storeProducts/login', {
        email,
        password,
      });
      const { token } = response.data;
      console.log('tojen:', token );
      // salvar o token em algum lugar, como AsyncStorage ou Redux
    } catch (error) {
      console.error(error);
    }
  };

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
                <LabelLogin>Nome</LabelLogin>
                <Input
                  placeholder="Jose da Silva"
                  placeholderTextColor={"#999"}
                  autoComplete="name"
                />
                <LabelLogin>Endereço</LabelLogin>
                <Input
                  placeholder="Rua da Cidade"
                  placeholderTextColor={"#999"}
                  autoComplete="postal-address"
                />
                <LabelLogin>Email</LabelLogin>
                <Input
                  placeholder="email@email.com"
                  value={email}
                  onChangeText={text => setEmail(text)}
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
                  value={password}
                  onChangeText={text => setPassword(text)}
                  leftIcon={{
                    type: "font-awesome",
                    name: "lock",
                    color: "red",
                  }}
                  placeholderTextColor={"#999"}
                  autoComplete="password"
                />
                <BottomButton>
                  <StyledButton onPress = {handleLogin}
                    title="Login"
                  />
                </BottomButton>
              </LoginBox>
            </BottomScreen>
          </FrontImageBackground>
        </StyledImageBackground>
      </MainContainer>
    );
};

//export default LoginView;