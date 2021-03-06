import { StyleSheet } from "react-native";

const SettingsStyles = StyleSheet.create({
    view: {
        position: "absolute",
        top: '7.5%',
        left: '5.5%',
        width: '89%',
        height: '85%'
    },
    title: {
        marginTop: '7%',
        height: 40
    },
    title_text: {
        fontSize: 40,
        paddingTop: '2%',
        textTransform: 'uppercase',
        color: "#59358C",
        fontWeight: "900"
    },
    containerInputs: {
        paddingHorizontal: "8%",
        marginTop: "5%"
    },
    containerInputs2: {
        paddingHorizontal: "8%",
        marginTop: "5%"
    },
    container_button: {
        marginTop: '8%'
    },
    button: {
    },
    button_text: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600"
    },
    login_button: {
        backgroundColor: "#059669"
    },
    text_button_login: {
        color: "#fff",
        fontWeight: "800"
    }
});

export default SettingsStyles;