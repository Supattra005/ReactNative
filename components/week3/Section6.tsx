import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section6() {
    return (
        <View style={{ padding : 20, borderTopWidth : 1, borderBottomWidth : 1, borderColor : 'gray'  }}>
            {/* View ก้อนที่ 1 : Header */}
            <View style={{ marginBottom : 10 }}>
                <Text style={{ fontSize : 20 }}>Location</Text>
                <Text style={{ color : '#444444' }}>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et ..</Text>
            </View>
            {/* View ก้อนที่ 2 : Map */}
            <View style={{ flexDirection : "row"}}>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 5/2 }} source={require("@/assets/week3/map.jpg")} />
            </View>
        </View>    
    );
}