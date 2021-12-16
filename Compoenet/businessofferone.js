import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView, TouchableOpacity, Text, View, Image, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CheckBox } from "react-native-elements";
import { useState } from 'react';


const businessofferone = ({ navigation }) => {

    const [checked, setchecked] = useState(false);
    return (


            <View style={styles.container}>
                <View style={{ paddingTop: '14%', marginLeft: '8%' }}>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/leftarrow.png')} /></TouchableOpacity>



                    <TouchableOpacity >
                        <Text style={{
                            color: 'white', fontSize: 16,
                            marginTop: "7%"
                        }}>Add an offer</Text></TouchableOpacity>

                    <View style={{ flexDirection: 'row', marginTop: '5%' }}>

                        <View style={{ alignItems: 'center' }}>


                            <TouchableOpacity style={{
                                borderWidth: 2, justifyContent: 'center', alignItems: 'center',
                                borderColor: '#90EDD8', height: 44, width: 115, borderRadius: 25,
                            }}>
                                <Text style={{
                                    color: '#90EDD8', justifyContent: 'center', fontSize: 15, textAlign: "center"
                                }}>In store</Text></TouchableOpacity>

                        </View>

                        <View style={{ margin: '2%' }}>

                        </View>
                        <View style={{ alignItems: 'center' }}>


                            <TouchableOpacity style={{
                                borderWidth: 2, justifyContent: 'center', alignItems: 'center',
                                borderColor: '#90EDD8', height: 44, width: 115, borderRadius: 25,
                            }}>
                                <Text style={{
                                    color: '#FFFFFF', justifyContent: 'center', fontSize: 15, textAlign: "center"
                                }}>Online</Text></TouchableOpacity>

                        </View>
                    </View>








                </View>

                <View style={{ alignItems: 'center', marginTop: '6%' }}>
                    <View style={{ backgroundColor: '#101426', justifyContent: 'center', height: 56, width: 330, borderRadius: 25 }}>
                        <TextInput style={{
                            marginLeft: '6%', fontSize: 16,

                        }}
                            placeholder="Enter item name"
                            placeholderTextColor='white'

                            color='white'>

                        </TextInput>
                    </View>
                    <View style={{ marginTop: '7%', backgroundColor: '#101426', justifyContent: 'center', height: 56, width: 330, borderRadius: 25 }}>
                        <TextInput style={{
                            marginLeft: '6%', fontSize: 16,

                        }}
                            placeholder="Percent off"
                            placeholderTextColor='white'

                            color='white'>

                        </TextInput>
                    </View>
                </View>

                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginLeft: '8%', marginTop: '10%' }}>

                    <CheckBox
                checked={checked}
                onPress={() => setchecked(!checked)}
                checkedColor="#90EDD9"
                uncheckedColor="#90EDD9"
              />
                        <View style={{ marginTop: '4%' }}>

                        <Text style={{
                            color: 'white', fontSize: 14, marginTop: '.5%'

                        }}>Set Expiry</Text>

                        </View>






                    </View>
                </TouchableOpacity>

                <View style={{ alignItems: 'center' }}>
                    <View style={{ marginTop: '9%', backgroundColor: '#101426', height: 128, width: 330, borderRadius: 25 }}>
                        <TextInput style={{
                            marginLeft: '6%', marginTop: '5%', fontSize: 16,

                        }}
                            placeholder="Description"
                            placeholderTextColor='white'

                            color='white'>

                        </TextInput>
                    </View></View>


                <View style={{ flexDirection: 'row', marginTop: '10%', justifyContent: 'flex-end', marginRight: '8%' }}>

                    <View style={{ alignItems: 'center' }}>


                        <TouchableOpacity style={{
                            borderWidth: 2, justifyContent: 'center', alignItems: 'center',
                            borderColor: '#90EDD8', height: 44, width: 115, borderRadius: 25,
                        }}>
                            <Text style={{
                                color: '#90EDD8', justifyContent: 'center', fontSize: 14, textAlign: "center"
                            }}>Add a picture</Text></TouchableOpacity>

                    </View>

                    <View style={{ margin: '2%' }}>

                    </View>
                    <View style={{ alignItems: 'center' }}>


                        <TouchableOpacity
                        onPress={()=>navigation.navigate("businessoffer")}
                        style={{
                            borderWidth: 2, justifyContent: 'center', alignItems: 'center',
                            borderColor: '#90EDD8', height: 44, width: 115, borderRadius: 25,
                        }}>
                            <Text style={{
                                color: '#90EDD8', justifyContent: 'center', fontSize: 14, textAlign: "center"
                            }}>Publish</Text></TouchableOpacity>

                    </View>
                </View>













            </View>


    );
}
export default businessofferone;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1C213E",
        // alignItems: 'center',
    },
});
