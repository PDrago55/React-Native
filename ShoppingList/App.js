import React, { useState } from "react"
import { uuid } from "uuidv4"
import { View, Text, StyleSheet, FlatList } from "react-native"
import ListItems from "./components/ListItems"
import Header from "./components/Header"
import AddItem from "./components/AddItem"
const App = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Milk" },
    { id: 2, text: "Egg" },
    { id: 3, text: "Bread" },
    { id: 4, text: "Juice" },
    { id: 5, text: "Carrots" },
  ])

  const deleteItem = (id) => {
    setItems(prevItem => {
      return prevItem.filter(item => item.id != id)
    })
  }

  const addItem = (text) => {
    setItems(prevItems => {
      return [{ id: 6, text }, ...prevItems]
    })
  }
  return (
    //view is a container that has built in Flexbox! Default is a column.
    <View style={styles.container}>
      {/* //passing state thru props */}
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList data={items} renderItem={({ item }) =>
        <ListItems item={item} deleteItem={deleteItem} />
      } />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },
})
export default App