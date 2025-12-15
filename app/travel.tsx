import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Signup  from '@/components/week3/Signup';
import Card from '@/components/week3/Card';
import Hotel from '@/components/week3/Hotel';
import MyIcon from '@/components/week3/MyIcon';
import Menu from '@/components/week3/Menu';



export default function Travel() {

    return (

        <ScrollView style={{ flex: 1, paddingTop: 50 }}>

            {/* <Text> Week 3 </Text> */}
            <Menu />
            <MyIcon />
            <Card />
            <Hotel />
            <Signup />

        </ScrollView>

    );

}