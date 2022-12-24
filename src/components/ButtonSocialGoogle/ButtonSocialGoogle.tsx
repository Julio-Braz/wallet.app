import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler';
import { ButtonGoogle, IconeGoogle, Title } from './styles'

import PngGoogle from '../../assets/google.png';

interface Props extends RectButtonProps {
    title: string
}
export function ButtonSocialGoogle({ title, ...rest }) {
    return (
        <ButtonGoogle {...rest}>
            <IconeGoogle
                source={PngGoogle}
                resizeMode='contain'
            />
            <Title>{title}</Title>
        </ButtonGoogle>
    )
}

