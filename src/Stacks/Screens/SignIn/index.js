import React, { Component} from 'react';
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessagemButton,
    SignMessagemButtonText,
    SignMessagemButtonTextBold
} from './styles';
import { Text } from 'react-native';
import SignInput from '../../../components/SignInput';

export default () => {
    return(
<Container>
   

<InputArea>
   
<SignInput placeholder="Digite seu e-mail"/>
<SignInput placeholder="Digite sua senha"/>

    <CustomButton>
        <CustomButtonText>LOGIN</CustomButtonText>
    </CustomButton>

</InputArea>

 <SignMessagemButton>

<SignMessagemButtonText>Ainda não possui uma conta?</SignMessagemButtonText>
<SignMessagemButtonTextBold>Cadastre-se</SignMessagemButtonTextBold>

 </SignMessagemButton>
</Container>
    );
}