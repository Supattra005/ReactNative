import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph } from 'react-native-chart-kit';

export default function Chart() {  

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Rainy Days"] // optional
    };
    const chartConfig = {
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        }
    };
    const screenWidth = Dimensions.get("window").width;

    const pieData = [
        { name: 'Seoul', population: 21500000, color: '#f00', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Toronto', population: 2800000, color: '#0f0', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Beijing', population: 527612, color: '#00f', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'New York', population: 8538000, color: '#ff0', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Moscow', population: 11920000, color: '#0ff', legendFontColor: '#7F7F7F', legendFontSize: 12 }
    ];


   return (
       <View style={{ flex: 1 , padding : 10 }}>            
            <Text style={{ fontSize : 20 }}>
                Bezier Line Chart
            </Text>
            <LineChart
                data={data}
                width={screenWidth-20} // from react-native
                height={220}
                chartConfig={chartConfig}
                bezier={true}
                style={{
                    marginVertical : 10,
                    borderRadius: 15
                }}
            />
            <Text style={{ fontSize: 20, marginTop: 8 }}>Pie Chart Example</Text>
            <PieChart
                data={pieData}
                width={screenWidth-20}
                height={220}
                chartConfig={chartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
                style={{ marginVertical: 10 }}
            />
        </View>
   );
}
