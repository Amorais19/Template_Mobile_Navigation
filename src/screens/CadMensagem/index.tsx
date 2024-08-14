import { useState } from 'react';
import { MessageTypes } from '../../navigation/message.navigation';
import { Alert, Text, TextInput, View } from 'react-native';
import { ButtonSlide } from "../../components/ButtonSlide";
import { colors } from "../../styles/GlobalStyles";
import { IMessage } from '../../services/data/Message';
import { AxiosError } from 'axios';
import { apiMessage } from '../../services/data';
import { styles } from "./styles";
import React from 'react'

export function CadMensagem({navigation}: MessageTypes) {
    const [data, setData] = useState<IMessage>()
    function heandleChange(item: IMessage) {
        setData({ ...data, ...item });
    }
    async function handleCadList() {
        if (data?.title && data.message ) {
            try {
                await apiMessage.store(data)
                Alert.alert("Mensagem cadastrada!")
                navigation.navigate('Mensagem')
            } catch (error) {
                const err = error as AxiosError
                const msg = err.response?.data as string
                Alert.alert(msg)
            }
        } else {
            Alert.alert("Prencha todos os campos")
        }
    }
    return (
        <View style={styles.flex}>
            <Text style={styles.title}>Cadastrar Tarefa</Text>
            <View style={styles.formRow}>
                <TextInput placeholderTextColor={colors.black} style={styles.input} placeholder='Título' onChangeText={(i) => heandleChange({ title: i })} />
            </View>
            <View style={styles.formRow}>
                <TextInput placeholderTextColor={colors.black} style={styles.input} placeholder='Mensagem' onChangeText={(i) => heandleChange({ message: i })} />
            </View>
            <ButtonSlide onPressI={handleCadList} >
                <Text>Enviar</Text>
            </ButtonSlide>
            <ButtonSlide onPressI={() => navigation.navigate('Mensagem')}>
                <Text>Voltar</Text>
            </ButtonSlide>
        </View>
    )
}