import React from "react";
import { ScrollView, Text, View } from "react-native";
import TourItem from "./TourItem";

export default function Tour(props: any) {
  // กำหนดข้อมูลตัวอย่าง (Mock Data) เพื่อส่งให้ TourItem
  const tour1 = { "id": 1, "title": "Tour in Somewhere", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" };
  const tour2 = { "id": 2, "title": "Tour in Somewhere", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" };
  const tour3 = { "id": 3, "title": "Tour in Somewhere", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" };

  return (
    <View style={props.style}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Tour</Text>
      <Text style={{ color: "grey", marginVertical: 10 }}>Let find out what most interesting things</Text>
      <ScrollView horizontal={true}>
        {/* ส่ง props item ไปให้ TourItem เพื่อป้องกัน Error: cannot read property 'uri' of undefined */}
        <TourItem item={tour1} />
        <TourItem item={tour2} />
        <TourItem item={tour3} />
      </ScrollView>
    </View>
  );
}
