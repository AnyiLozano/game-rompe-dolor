import { StyleSheet } from "react-native";

const LoginStyles = StyleSheet.create({
    view: {
        height: "92%",
        marginTop: "2.6%",
        marginLeft: "4.8%",
        width: "90.5%"
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
    containerInput: {
        paddingHorizontal: '30%',
        marginTop: '12.5%',
        height: '20%'
    },
    container_button: {
        marginTop: '30%'
    },
    button: {
        backgroundColor: "#7AC943",
        width: '40%',
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

export default LoginStyles;