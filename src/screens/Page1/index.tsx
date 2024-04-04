import { View, Text } from 'react-native';
import { ButtonSlide } from '../../components/ButtonSlide';
import { styleContainer } from "../../styles/GlobalStyles";
import { styles } from "./styles"
import { IPagina } from "../../../App";

export function Page1({ setPageI }: IPagina) {
    return (
        <View style={styleContainer.container}>
            <View style={styles.flex}>
                <Text style={styles.text}>Olá pessoal, beleza?</Text>
                <Text style={styles.texto}>Está é a página 1</Text>
            </View>
            <View style={styles.menu}>
                <View style={styles.botao}>
                    <ButtonSlide onPressI={() => setPageI(1)} cor={true} />
                </View>
                <View style={styles.botao}>
                    <ButtonSlide onPressI={() => setPageI(2)} cor={false} />
                </View>
            </View>
        </View>
    )
}