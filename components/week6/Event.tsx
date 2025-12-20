import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function Event(props: any) {
  const [onlineEvents, setOnlineEvents] = useState([]);

  const loadOnlineEvents = async () => {
    try {
      let text = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json');
      let data = await text.json();
      console.log("Load Data : ", data);
      setOnlineEvents(data);
    } catch (error) {
      console.log("ERROR : ", error);
    }
  }

  useEffect(() => {
    loadOnlineEvents();
  }, []);

  return (
    <View style={props.style}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Up Coming Events</Text>
      <Text style={{ color: "grey", marginVertical: 10 }}>What's the Worst That Could Happend</Text>
      <FlatList
        horizontal={true}
        data={onlineEvents}
        renderItem={({ item, index }: any) => {
          console.log(item, index, item.uri);
          return (
            <View style={{ marginRight: 10 }}>
              <Image style={{ width: 280, height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={{ uri: item.uri }} />
              <View style={{ flexDirection: 'row', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderWidth: 1, borderColor: "gray" }}>
                <View style={{ padding: 10 }}>
                  <Text style={{ fontSize: 20, color: "red", textAlign: "center" }}>{item.month}</Text>
                  <Text style={{ fontSize: 13, color: "gray", textAlign: "center" }}>{item.date}</Text>
                </View>
                <View style={{ padding: 10 }}>
                  <Text style={{ fontSize: 20, color: "black", fontWeight: 'bold' }}>{item.title}</Text>
                  <Text style={{ color: "gray" }}>{item.datetime}</Text>
                  <Text style={{ color: "gray" }}>{item.place}</Text>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
}