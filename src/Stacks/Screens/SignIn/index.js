import React, { Component, useState} from 'react';
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
import Logo from '../../../assets/icoFootPlayer.svg'

import LockIco from '../../../assets/lock.svg'
import EmailIco from '../../../assets/email.svg'


export default () => {

const [emailField, setEmailField] = useState('');
const [passwordField, setPasswordField] = useState('');


    return(
<Container>
    
<Logo weight="100%" height="150px" fill="#FFFFFF"/>

<InputArea >
   
<SignInput 
placeholder="Digite seu e-mail"
IconSVG={LockIco}
value={emailField}
onChangeText={t=>setEmailField(t)}
/>

<SignInput 
placeholder="Digite sua senha"
IconSVG={EmailIco}
value={passwordField}
onChangeText={t=>setPasswordField(t)}
password={true}
/>

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