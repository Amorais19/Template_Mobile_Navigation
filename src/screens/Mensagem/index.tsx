import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { apiMessage } from '../../services/data';
import { IResponseMessage } from '../../services/data/Message';
import { styles } from "./styles";
import { MessageTypes } from '../../navigation/message.navigation';

export function Mensagem({navigation}: MessageTypes) {
    const [message, setMessage] = useState<IResponseMessage[]>([])
    useEffect(() => {
        async function loadMessage() {
            const response = await apiMessage.index()
            setMessage(response.data)
        }
        loadMessage()
    }, [])

    interface itemMessage {
        item: IResponseMessage
    }
    const renderItem = (({ item }: itemMessage) => {
        return (
            <View style={styles.item}>
                <Text style={styles.itemText}>Título: {item.title}</Text>
                <Text style={styles.itemText}>Mensagem: {item.message}</Text>
            </View>
        )
    })
    return (
        <View style={styles.flex}>
            {
                message.length > 0 && (
                    <FlatList 
                    data={message} 
                    renderItem={renderItem} 
                    keyExtractor={(item) => String(item.id)} />
                )
            }
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('CadMensagem')}>
                <Text>+</Text>
            </TouchableOpacity>
        </View>
    )
}