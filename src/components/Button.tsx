import React from 'react';
import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import {Styles} from "../styles/GlobalStyles";

interface ButtonProps {
    onPress: () => void;
    title: string;
    isWhite?: boolean;
    isBlue?: boolean;
}

export default function Button({ title, onPress, isWhite, isBlue }: ButtonProps) {
    const theme = useContext(ThemeContext);
    return (
        <TouchableOpacity 
            style={
                isWhite 
                ? Styles.btnBlue 
                : isBlue 
                ? Styles.btnBlue 
                : theme === "light" 
                ? Styles.btnLight 
                : Styles.btnDark
            } 
            onPress={onPress}>
            <Text 
               style={ Styles.smallTextLight}
            >
            {title}
        </Text>
        </TouchableOpacity>
    );
}