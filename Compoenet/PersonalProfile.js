import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
// import React from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView, TouchableOpacity, Text, View, Image, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import DropDownPicker from 'react-native-dropdown-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PersonalProfile = ({ navigation }) => {



    return (

        
            <View style={styles.container}>
<ScrollView>
                <View style={{ paddingTop: '13%', paddingLeft: '8%' }}>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/leftarrow.png')} /></TouchableOpacity></View>

                <Text style={{ textAlign: 'center', color: 'white', fontSize: 34, fontWeight: 'bold', marginTop: '6%' }}>Edit Personal Profile</Text>
<TouchableOpacity>
                <View style={{ alignItems: 'center', marginTop: '2%' }}>
                    <Image
                        source={require('../assets/choti.png')} />

                </View></TouchableOpacity>


                <View style={{ width: 303, height: 700, alignSelf: 'center' }}>

                    <View style={{ marginLeft: '3%', marginTop: '2%' }}>
                        <Text style={{ color: 'white', fontSize: 9 }}>Name</Text>

                    </View>


                    <View style={{ alignSelf: 'center', marginTop: '1%' }}>

                        <TextInput style={{
                            height: 57, width: 303, borderRadius: 15, fontSize: 14, textAlign: 'center',
                            backgroundColor: '#101426'
                        }}
                            placeholder="Kelly James"
                            placeholderTextColor='#FFFFFF'
                            color='white'>

                        </TextInput>
                    </View>


                    <View style={{ marginLeft: '3%', marginTop: '6%' }}>
                        <Text style={{ color: 'white', fontSize: 9 }}>MetaID</Text>

                    </View>


                    <View style={{ alignSelf: 'center', marginTop: '1%' }}>

                        <TextInput style={{
                            height: 57, width: 303, borderRadius: 15, fontSize: 18, textAlign: 'center',
                            backgroundColor: '#101426'
                        }}
                            placeholder="$Dbssa16"
                            placeholderTextColor='#FFFFFF'
                            color='white'>

                        </TextInput>
                    </View>






                    <View style={{ marginLeft: '3%', marginTop: '6%' }}>
                        <Text style={{ color: 'white', fontSize: 9 }}>Phone number</Text>

                    </View>


                    <View style={{ marginTop: '1%' }}>
                        <View style={{
                            height: 57, width: 303, justifyContent: 'center', borderRadius: 15,
                            backgroundColor: '#101426'
                        }}>

                            <TextInput style={{fontSize:12,
                                marginLeft: '5%'
                            }}
                                placeholder="+1 647 653 2353"
                                placeholderTextColor='#FFFFFF'
                                color='white'
                               
                                keyboardType='numeric'
                            >

                            </TextInput>
                        </View>
                    </View>

                    <View style={{ marginLeft: '3%', marginTop: '6%' }}>
                        <Text style={{ color: 'white', fontSize: 9 }}>Email</Text>
                    </View>

                    <View style={{ marginTop: '1%' }}>
                        <View style={{
                            height: 57, width: 303,fontSize:15, justifyContent: 'center', borderRadius: 15,
                            backgroundColor: '#101426'
                        }}>

                            <TextInput style={{fontSize:12,
                                marginLeft: '5%'
                            }}
                                placeholder="jellyjames@gmail.com"
                                placeholderTextColor='#FFFFFF'
                                
                                color='white'
                            >

                            </TextInput>
                        </View>
                    </View>


                    <View style={{ marginLeft: '3%', marginTop: '6%' }}>
                        <Text style={{ color: 'white', fontSize: 9 }}>Compliance Checks</Text>
                    </View>

                    <View style={{ marginTop: '1%' }}>
                        <View style={{
                            height: 57, width: 303, justifyContent: 'center', borderRadius: 15, fontSize: 12,
                            backgroundColor: '#101426'
                        }}>

                            <TextInput style={{fontSize:11,
                                marginLeft: '5%'
                            }}
                                placeholder="Completed / Pending / Under Review / Approved"
                                placeholderTextColor='#FFFFFF'
                                
                                color='white'
                            >

                            </TextInput>
                        </View>
                    </View>

                    <View style={{ marginLeft: '3%', marginTop: '6%' }}>
                        <Text style={{ color: 'white', fontSize: 9 }}>Referral Iink</Text>
                    </View>

                    <View style={{ marginTop: '1%' }}>


                        <View style={{
                            flexDirection: 'row',
                            height: 57, width: 303, borderRadius: 15, fontSize: 12,
                            backgroundColor: '#101426'
                        }}>

                            <TextInput style={{fontSize:12,
                                marginLeft: '5%'
                            }}
                                placeholder="etavest.io/i/{metaID}"
                                placeholderTextColor='#FFFFFF'
                                
                                width='60%'
                                color='white'
                            >

                            </TextInput>
                            <TouchableOpacity style={{ justifyContent: 'center', marginLeft: '21%' }}>

                                <Image
                                    source={require('../assets/tworectangle.png')} /></TouchableOpacity>
                        </View>

                    </View>





                    <View style={{ alignItems: 'center' }}>


                        <TouchableOpacity onPress={() => navigation.navigate("DrawerNavigator")} style={{
                            justifyContent: 'center', alignItems: 'center',
                            height: 40, width: 101, marginTop: '28%', borderWidth: 2, borderRadius: 10, borderColor: "#90EDD9"
                        }}>
                            <Text style={{
                                color: '#FFFFFF', justifyContent: 'center', fontSize: 16, textAlign: "center"
                            }}>Save</Text></TouchableOpacity>

                    </View>












                </View>
                </ScrollView>
            </View>
        


    );
}
export default PersonalProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1C213E",
        // alignItems: 'center',
    },
});