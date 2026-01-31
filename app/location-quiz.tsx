import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function LocationQuiz() {
  const [locations, setLocations] = useState<any[]>([]);
  const router = useRouter();

  // รับค่าจากการกด Marker (ไม่ต้องมีไฟล์ใหม่)
  const { user_id, lat, lon } = useLocalSearchParams();

  // โหลดข้อมูลจาก API
  const loadLocations = async () => {
    try {
      const res = await fetch("https://kartisan.com/api/location");
      const data = await res.json();
      setLocations(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadLocations();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* แสดงชื่อเมื่อมีการกด Marker */}
      {user_id && (
        <View style={{ padding: 10, backgroundColor: "#50E3C2" }}>
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            👤 {user_id}
          </Text>
          <Text style={{ textAlign: "center" }}>
            Lat: {lat} | Lon: {lon}
          </Text>
        </View>
      )}

      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 14.1325,
          longitude: 100.6166,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
        }}
      >
        {locations.map((item) => (
          <Marker
  key={item.id}
  coordinate={{
    latitude: Number(item.latitude),
    longitude: Number(item.longitude),
  }}
  title={item.user_id}
  onPress={() =>
    router.push(
      `/location-quiz?user_id=${item.user_id}&lat=${item.latitude}&lon=${item.longitude}`
    )
  }
>
  <View
    style={{
      backgroundColor: "white",
      padding: 4,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: "orangered",
    }}
  >
    <FontAwesome name="user" size={24} color="orangered" />
  </View>
</Marker>

        ))}
      </MapView>
    </View>
  );
}
