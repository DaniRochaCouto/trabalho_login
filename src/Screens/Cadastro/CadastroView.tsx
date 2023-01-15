import React, { useState } from 'react';
import { Input } from 'react-native-elements';
import { BottomButton, BottomScreen, FrontImageBackground, LabelLogin, LoginBox, 
    LogoDiv, MainContainer, StyledButton, StyledImageBackground, TopScreen } from './CadastroStyles';
import axios from 'axios';

export default function CadastroView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const handleLogin = async () => {
    try {
      const response = await axios.put('https://fiap-reactjs-presencial.herokuapp.com/storeProducts/signup', {
        name,
        phone,
        email,
        password,
      });
      const { token } = response.data;
      console.log('tojen:', token );
      // cadastro não retorna tooken, chamar a tela de lista...
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
                  value={name}
                  onChangeText={text => setName(text)}
                  placeholderTextColor={"#999"}
                  autoComplete="name"
                />
                <LabelLogin>Fone</LabelLogin>
                <Input
                  placeholder="61982365606"
                  value={phone}
                  onChangeText={text => setPhone(text)}
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

//export default CadastroView;