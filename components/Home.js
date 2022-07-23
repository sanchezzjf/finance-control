import { View, Text, StyleSheet } from "react-native";

export default function Home(props){
    return(
        <View style={styles.body}>
            <View style={[styles.header, styles.common]}>
                <Text style={styles.mainInfo}>Total</Text>
                <Text style= {styles.mainInfo}>R$3000,00</Text>
            </View>
            <View style={styles.middle}>
                <Text style={[styles.info, styles.common]}>GPU</Text>
                <Text style={[styles.info, styles.common]}>PS5</Text>
                <Text style={[styles.info, styles.common]}>Headphone</Text>
            </View>
            <View style={[styles.footer, styles.common]}>
                <Text style={styles.mainInfo}>Life Savings</Text>
                <Text style={styles.mainInfo}>R$1500,00</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    common: {
        padding: '2%'
    },
    body: {
        height: '100%',
        width: '100%'
    },
    header: {
        paddingTop: '11%',
        flex: 1,
        backgroundColor: '#B00B69'
    },
    middle: {
        flex: 5,
        justifyContent: 'flex-start',
        backgroundColor: '#F00'
    },
    footer: {
        flex: 1,
        backgroundColor: '#0F0'
    },
    mainInfo: {
        fontWeight: 'bold',
        fontSize: 45
    },
    info: {
        margin: 10,
        fontWeight: 'bold',
        fontSize: 30,
        backgroundColor: '#65F'
    }
})