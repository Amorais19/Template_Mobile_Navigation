import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles"
import React from "react";

interface IButton extends TouchableOpacityProps {
    onPressI: () => void
    cor?: boolean
}
    
export function ButtonSlide({ onPressI, cor }: IButton) {
    return (
        <TouchableOpacity style={cor ? styles.ballPress : styles.ball} onPress={onPressI} />
    )
}