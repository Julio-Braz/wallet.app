import React from "react";

import { SafeAreaView,  } from "react-native";

import { Container,
        ContentHeader,
        ContentBody,
        ContentFooter,
        Title,
        Description,
        ViewButton,

    } from "./styles";

import {ButtonSocialGoogle} from '../../components/ButtonSocialGoogle/ButtonSocialGoogle'

export  function Login(){
    return(
        <SafeAreaView>
        <Container>

           <ContentHeader>

                <Title>Seja Bem vindo(a) {'\n'} Wallet app</Title>

                    <Description>Sign Up</Description>

                <ViewButton>
                <ButtonSocialGoogle title='Google'/>


                </ViewButton>
            </ContentHeader>

            <ContentBody>

            </ContentBody>

            <ContentFooter>

            </ContentFooter>
{/*
            <TextInput placeholder='username'></TextInput>
            <TextInput placeholder='passsword'></TextInput> */}

            {/* <Text>Welcome Back to Mabank </Text> */}
        </Container>
        </SafeAreaView>
)}