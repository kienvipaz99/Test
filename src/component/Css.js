import { StyleSheet } from "react-native";
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'green'
    },
    btn: {
        backgroundColor: 'red',
        width: '90%',
        height: 48,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15

    },
    txtbtn: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    image: {
        height: 100, width: 100
    },
    flt: {
        marginTop: 20,

        flex: 1
    },
    item: {

        borderRadius: 10,
        borderWidth: 1, borderColor: '#fff',
        backgroundColor: '#fff',
        width: 180,
        margin: 10,

    }, styImg: {
        alignItems: 'center', justifyContent: 'center'
    },
    first_name: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    vText: {
        left: 13
    },
    mtext: {
        marginLeft: 5
    }
});
export default style;