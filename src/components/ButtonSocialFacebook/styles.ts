import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import { Fontisto } from "@expo/vector-icons";



export const ButtonFacebook = styled(RectButton)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: ${RFValue(130)}px;
    height: ${RFValue(60)}px;
    margin-right: ${RFValue(10)}px;
    border-radius: ${RFValue(5)}px;
    box-shadow: 1px 3px 3px rgba(0,0,0,0.2);
    background-color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const IconeFacebook = styled(Fontisto)`
    font-size: ${RFValue(25)}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
    font-size: ${RFValue(17)}px;
    margin-left: ${RFValue(10)}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;