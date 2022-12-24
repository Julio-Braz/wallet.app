import React from "react";

import { SafeAreaView, } from "react-native";

import {
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title,
    Description,
    ViewButton,

} from "./styles";
import {Input} from '../../components/Input/Input'
import { ButtonSocialGoogle } from '../../components/ButtonSocialGoogle/ButtonSocialGoogle'
import { ButtonSocialFacebook } from '../../components/ButtonSocialFacebook/ButtonSocialFacebook'


export function Login() {
    return (
        <SafeAreaView>
            <Container>

                <ContentHeader>

                    <Title>Seja Bem vindo(a) {'\n'} Wallet app</Title>

                    <Description>Sign Up</Description>

                    <ViewButton>
                        <ButtonSocialGoogle title='Google' />
                        <ButtonSocialFacebook title='Facebook' />


                    </ViewButton>
                </ContentHeader>

                <ContentBody>
                    <Input/>

                </ContentBody>

                <ContentFooter>

                </ContentFooter>
                {/*
            <TextInput placeholder='username'></TextInput>
            <TextInput placeholder='passsword'></TextInput> */}

                {/* <Text>Welcome Back to Mabank </Text> */}
            </Container>
        </SafeAreaView>
    )
}