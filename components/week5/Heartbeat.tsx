import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {
    // 1. ประกาศ State เริ่มต้นที่ 0
    const [times, setTimes] = useState(0);

    // 2. ฟังก์ชันกดแล้วเพิ่มค่าทีละ 1
    const onPressHeart = () => {
        setTimes(times + 1);
    };

    return (
        <View>
            {/* 3. จัด Layout เป็นแถวแนวนอน (Row) */}
            <View style={styles.row}>
                {/* ปุ่มกดรูปหัวใจ */}
                <TouchableOpacity onPress={onPressHeart}>
                    <FontAwesome name="heart" size={40} color="orange" />
                </TouchableOpacity>

                {/* แสดงตัวเลข */}
                <Text style={styles.textCount}>{times}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",       // เรียงแนวนอน
        padding: 20,                // ระยะห่างภายใน
        justifyContent: "space-around", // เว้นระยะห่างรอบๆ
        alignItems: "center",       // จัดกึ่งกลางแนวตั้ง
    },
    textCount: {
        fontSize: 40,              
    }
});