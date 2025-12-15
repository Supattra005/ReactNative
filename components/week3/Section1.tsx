import React from 'react';
import { Image, View } from 'react-native';

export default function Section1() {
    return (
        <View style={{ flex: 1 }}>
            {/* View ก้อนที่ 1 : Image Banner */}
            <View style={{ flexDirection : "row" }}>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 4/3 }} source={require("@/assets/week3/room-1.jpg")} />
            </View>
        </View>    
    );
}