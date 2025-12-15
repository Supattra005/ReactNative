import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Text, View } from 'react-native';

export default function Section2() {
    return (
        <View style={{ flex: 1, marginTop : -50, marginHorizontal : 20 , padding : 20, borderWidth : 1, borderColor : 'gray', borderRadius : 20, backgroundColor : 'white' }}>
            {/* View ก้อนที่ 1 : Text Header */}
            <View style={{ marginTop : 10 }}>
                <Text style={{ fontSize : 20, textAlign : "center" }}>Hilton San Francisco</Text>
            </View>
            {/* View ก้อนที่ 2 : Stars */}
            <View style={{ flexDirection : "row", justifyContent : "center", marginTop : 10  }}>
                <FontAwesome name="star" size={20} color="orange" />
                <FontAwesome name="star" size={20} color="orange" />
                <FontAwesome name="star" size={20} color="orange" />
                <FontAwesome name="star" size={20} color="orange" />
                <FontAwesome name="star-half" size={20} color="orange" />
            </View>
            {/* View ก้อนที่ 3 : Text Detail */}
            <View style={{ marginTop : 10 }}>
                 <Text style={{ fontSize : 12, textAlign : "center", color : 'gray' }}>Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
            </View>
        </View>    
    );
}