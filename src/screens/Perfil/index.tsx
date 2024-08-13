import { View, Text, TouchableOpacity } from 'react-native';
import { MenuStackTypes } from '../../navigation/MenuStack.navigation'
import { ButtonSlide } from '../../components/ButtonSlide';
import { styleContainer } from "../../styles/GlobalStyles";
import { styles } from "./styles"

export function Perfil({ navigation }: MenuStackTypes) {
    return (
        <View style={styleContainer.container}>
            <Text style={styles.text}>Perfil</Text>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.push('Mensagem')}>
                Mensagens
            </TouchableOpacity>
        </View>
    )
}