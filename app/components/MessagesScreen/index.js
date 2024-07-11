import React, { useState } from "react";
import { FlatList, StyleSheet, View, Platform,StatusBar } from "react-native";

//import Screen from "'../../components/Screen";
import ListItem from '../../components/Listitem';
import Screen from "../Screen";
import ListItemSeparator from "../ListItemSeparator";
// import ListItemSeparator from '../../components/ListItemSeparator";
// import ListItemDeleteAction from "'../../components/ListItemDeleteAction";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("./../../../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("./../../../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            onPress={() => console.log("Message selected",item)}
            image={item.image} />)} 
            ItemSeparatorComponent={ListItemSeparator}
            />
     </Screen>
  );
}

const styles = StyleSheet.create({
    screen:{
        paddingTop:Platform.OS==="android" ? StatusBar.currentHeight :0,
    }
});

export default MessagesScreen;
