import { StyleSheet } from "react-native";

const BasicInputStyles = StyleSheet.create({
    errorText: {
        color: "#59358C"
    },
    label: {
        fontSize: 15,
        textTransform: "uppercase",
        color: '#59358C',
        paddingBottom: "3%"
    },
    inputs: {
        borderRadius: 10,
        borderColor: "#59358C",
        borderWidth: 2
    }
});

export default BasicInputStyles;