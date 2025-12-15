import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section7() {
    return (
        <View style={{ padding : 20  }}>
            {/* View ก้อนที่ 1 : Header */}
            <View style={{ marginBottom : 10 }}>
                <Text style={{ fontSize : 20 }}>Room Type</Text>
            </View>
            {/* View ก้อนที่ 2 : Room Detail */}
            <View style={{ flexDirection : "row" }}>
                <Image style={{ width: 80, height: 100, borderRadius: 10 }} source={require("@/assets/week3/room-8.jpg")} />
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20 }}>Standard Twin Room</Text>
                    <View style={{ marginTop : 20 }}>
                        <Text style={{ fontSize : 20, color : 'orange' }}>$399.99</Text>
                        <Text style={{ color : 'cyan' }}>Hurry Up! This is your last room!</Text>
                    </View>
                </View>
            </View>
        </View>    
    );
}