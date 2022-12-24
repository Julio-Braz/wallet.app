import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler';
import { ButtonFacebook, IconeFacebook, Title } from './styles'



interface Props extends RectButtonProps {
    title: string
}
export function ButtonSocialFacebook({ title, ...rest }) {
    return (
        <ButtonFacebook {...rest}>
            <IconeFacebook
                name='facebook'
            />
            <Title>{title}</Title>
        </ButtonFacebook>
    )
}

