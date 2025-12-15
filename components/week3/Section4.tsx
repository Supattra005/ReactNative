import React from 'react';
import { Text, View } from 'react-native';

export default function Section4() {
    return (
        <View style={{ padding : 20, borderTopWidth : 1, borderBottomWidth : 1, borderColor : 'gray'  }}>
            {/* View ก้อนที่ 1 */}
            <View style={{ }}>
                <Text style={{ fontSize : 20 }}>Hotel Description</Text>
                <Text style={{ color : '#444444' }}>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore</Text>
            </View>
        </View>    
    );
}