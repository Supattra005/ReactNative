import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Section8() {
    return (
        <View style={{ flexDirection : "row", justifyContent : "space-between", alignItems : "center", marginTop : 10, borderTopWidth : 1, borderColor : 'gray', padding : 20  }}>
             {/* View ก้อนที่ 1 : Price */}
            <View style={{ flexDirection : "column" }}>
                <Text style={{ fontSize : 10 }}>Price</Text>
                <Text style={{ fontSize : 20, color : 'red' }}>$399.99</Text>
                <Text style={{ fontSize : 10 }}>AVG/Night</Text>
            </View>
             {/* View ก้อนที่ 2 : Button */}
            <View style={{  }}>
                <Button title="Book Now" color="red" />
            </View>
        </View>    
    );
}