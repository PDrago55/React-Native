import React from "react"

import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/dist/FontAwesome"
const ListItems = ({ item, deleteItem }) => {
    return (
        //view is a container that has built in Flexbox! Default is a column.
        <TouchableOpacity style={styles.ListItem}>
            <View style={styles.ListItemsView}>
                <Text style={styles.ListItemText}>{item.text}</Text>
                <Icon name="remove" size={20} color="firebrick" onPress={() => deleteItem(item.id)} />
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    ListItem: {
        padding: 15,
        backgroundColor: "#f8f8f8",
        borderBottomWidth: 1,
        borderBottomColor: "#eee"
    },
    ListItemsView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    ListItemText: {
        fontSize: 18
    }
})

export default ListItems