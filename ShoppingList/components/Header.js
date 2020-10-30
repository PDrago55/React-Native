import React from "react"
import { View, Text, StyleSheet } from "react-native"
const Header = (props) => {
    return (
        //view is a container that has built in Flexbox! Default is a column.
        <View style={styles.header}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: "darkslateblue"
    },
    text: {
        color: "white",
        fontSize: 23,
        textAlign: "center"
    }
})

export default Header