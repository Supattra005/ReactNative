import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
export default function Bmi() {    
    const [weight , setWeight] = useState('70');
    const [height , setHeight] = useState('170');
    const [bmi , setBmi] = useState('0');


     console.log("STATE : ", weight, height, bmi);

     const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        const w = parseFloat(weight);
        const h = parseFloat(height);  
        let output = (w/ (h/100 * h/100));
        setBmi(output.toFixed(2));
    };



    return (
        <View>
            {/* แถวที่ 1 */}
            <View style = {{backgroundColor: "white", padding:20,borderRadius:10, height : 100, justifyContent:"space-around", marginTop :20}}> 
                <Text>Weight (kg.)</Text>
                <TextInput value={ weight } keyboardType="numeric" onChangeText={ (newWeight) => setWeight(newWeight) }
 placeholder="Input your weight" />
            </View>


            {/* แถวที่ 2 */}
            <View style = {{backgroundColor: "white", padding:20,borderRadius:10, height : 100, justifyContent:"space-around", marginTop :20}}>
                <Text>Height (cm.)</Text>
                <TextInput value={ weight } keyboardType="numeric"  onChangeText={ (newHeight) => setHeight(newHeight) } 
 placeholder="Input your height" />
            </View>


            {/* แถวที่ 3 */}
            <View style = {{flexDirection : "row", marginVertical:20}}>
                <View style = {{backgroundColor : "white", flex:1, borderRadius : 10, height:100, justifyContent : "center" , alignItems:"center" ,marginRight:10
}}>
                    <Text>{ bmi }</Text>
                </View>
                <View style = {{backgroundColor : "white", flex:1, borderRadius : 10, height:100, justifyContent : "center" , alignItems:"center" ,marginLeft:10}}>
                    <Text>Normal</Text>
                </View>
            </View>


            {/* แถวที่ 4 */}

            
            <Button title="Calculate" onPress={ onPressButton } />            
        </View>
    );
}
