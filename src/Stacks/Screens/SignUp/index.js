import React, { Component, useState, useContext} from 'react';
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessagemButton,
    SignMessagemButtonText,
    SignMessagemButtonTextBold
} from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../../../Api';
import { Text } from 'react-native';
import SignInput from '../../../components/SignInput';
import Logo from '../../../assets/icoFootPlayer.svg'
import { useNavigation } from '@react-navigation/core';
import LockIco from '../../../assets/lock.svg';
import EmailIco from '../../../assets/email.svg';
import PersonIco from '../../../assets/person.svg';
import {UserContext} from '../../../contexts/UserContext';


export default () => {

    const {dispatch: userDispatch} = useContext(UserContext);

const [emailField, setEmailField] = useState('');
const [passwordField, setPasswordField] = useState('');
const [NameField, setNameField] = useState('');

const navigation = useNavigation();

SignInButtonClick= async () =>{

    if(emailField != '' && passwordField != '' && NameField != ''){

        let res = await Api.signUp(NameField, emailField, passwordField);

        if(res.token){
            
            await AsyncStorage.setItem('token', res.token);

userDispatch({

 type: 'SET_AVATAR',
 payload: {avatar: res.data.avatar}

});
navigation.reset({
    routes:[{name:'MainTab'}]
});
 

        }else{alert("Erro!!!")}

    } else{
        alert("Preencha os campos!")
}}


SignUpMessagemButtonClick= () =>{

    navigation.reset({
        routes: [{name: 'SignIn'}]
    });
}
    return(
<Container>
    
<Logo weight="100%" height="150px" fill="#FFFFFF"/>

<InputArea >
   
<SignInput 
placeholder="Nome de usuário"
IconSVG={PersonIco}
value={NameField}
onChangeText={t=>setNameField(t)}
/>
<SignInput 
placeholder="Digite seu e-mail"
IconSVG={LockIco}
value={emailField}
onChangeText={t=>setEmailField(t)}
/>
<SignInput 
placeholder="Escolha uma senha"
IconSVG={EmailIco}
value={passwordField}
onChangeText={t=>setPasswordField(t)}
password={true}
/>

    <CustomButton onPress={SignInButtonClick}>
        <CustomButtonText>CADASTRAR</CustomButtonText>
    </CustomButton>

</InputArea>

 <SignMessagemButton onPress={SignUpMessagemButtonClick}>

<SignMessagemButtonText>Já possui uma conta?</SignMessagemButtonText>
<SignMessagemButtonTextBold>Faça Login</SignMessagemButtonTextBold>

 </SignMessagemButton>
</Container>
    );
}