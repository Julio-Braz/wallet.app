import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

const Container = styled.View`
    padding:${RFValue(10)}px;

    `;
const ContentHeader = styled.View`
    align-items: center;
    justify-content:center;
    padding:${RFValue(20)}px;


`;
const ContentBody = styled.View`
`;
const ContentFooter = styled.View`
`;
const Title = styled.Text`
    text-align: center;
    font-size: ${RFValue(25)}px;
    margin-top: ${RFValue(40)}px;
    font-family:${({ theme }) => theme.FONTS.POPPINSMEDIUM}


`;
const Description = styled.Text`
    margin-top: ${RFValue(60)}px;
    font-size:${RFValue(15)}px;
    font-family:${({ theme }) => theme.FONTS.POPPINSLIGHT}
`;
const ViewButton = styled.View`
    flex-direction: row;

`;

export {
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title,
    Description,
    ViewButton,
}
