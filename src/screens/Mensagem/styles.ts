import { StyleSheet } from 'react-native';
import { colors } from '../../styles/GlobalStyles'

export const styles = StyleSheet.create({
    flex: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 350
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: colors.black,
        width: "100%",
        marginTop: 10,
        borderRadius: 10
    },
    itemText: {
        fontSize: 20,
        padding: 10
    },
    botao: {
        
    }
})