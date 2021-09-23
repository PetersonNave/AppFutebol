import React, { Component, useState, useContext} from 'react';
import {UserContext} from '../../../contexts/UserContext';
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
import { useNavigation } from '@react-navigation/core';
import LockIco from '../../../assets/lock.svg';
import EmailIco from '../../../assets/email.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../../../Api';
import { UserReducer } from '../../../reducers/UserReducer';

export default () => {

const {dispatch: userDispatch} = useContext(UserContext);

const [emailField, setEmailField] = useState('');
const [passwordField, setPasswordField] = useState('');
const navigation = useNavigation();

SignInButtonClick= async () =>{

    if(emailField != '' && passwordField != ''){

let json = await Api.signIn(emailField, passwordField)
if(json.token){

   await AsyncStorage.setItem('token', json.token);

userDispatch({

 type: 'SET_AVATAR',
 payload: {avatar: json.data.avatar}

});
navigation.reset({
    routes:[{name:'MainTab'}]
});


}else{alert('E-mail e/ou senha incorretos!')}

    } else{
    alert("Preencha os campos!")
}}

SignUpMessagemButtonClick= () =>{

    navigation.reset({
        routes: [{name: 'SignUp'}]
    });
}
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

    <CustomButton onPress={SignInButtonClick}>
        <CustomButtonText >LOGIN</CustomButtonText>
    </CustomButton>

</InputArea>

 <SignMessagemButton onPress={SignUpMessagemButtonClick}>

<SignMessagemButtonText>Ainda não possui uma conta?</SignMessagemButtonText>
<SignMessagemButtonTextBold>Cadastre-se</SignMessagemButtonTextBold>

 </SignMessagemButton>
</Container>
    );
}