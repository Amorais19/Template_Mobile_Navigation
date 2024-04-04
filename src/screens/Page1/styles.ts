import { StyleSheet } from 'react-native';
import { colors } from '../../styles/GlobalStyles'

export const styles = StyleSheet.create({
    flex: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: colors.white,
        fontSize: 25,
    },
    texto: {
        color: colors.red,
        fontSize: 35,
    },
    menu: {
        flexDirection: 'row',
        marginBottom: 25,
    },
    botao: {
        paddingHorizontal: 15,
    },
});