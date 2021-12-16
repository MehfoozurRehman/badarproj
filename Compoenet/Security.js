import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
// import React from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView, TouchableOpacity, Text, View, Image, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import DropDownPicker from 'react-native-dropdown-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Security = ({ navigation }) => {



    return (



        <View style={styles.container}>
            
                 <View style={{ paddingTop: '13%', paddingLeft: '8%' }}>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/leftarrow.png')} /></TouchableOpacity></View>


                <Text style={{ marginLeft: '8%', color: 'white', fontSize: 34, fontWeight: 'bold', marginTop: '6%' }}>Security</Text>


 <ScrollView>

                <View style={{ width: 303,height: 1700,alignSelf: 'center' }}>

              

                    <View style={{ marginLeft: '3%', marginTop: '6%' }}>
                        <Text style={{ color: 'white', fontSize: 9 }}>PIN</Text>
                    </View>

                    <View style={{ marginTop: '1%' }}>


                        <View style={{
                            flexDirection: 'row',
                            height: 57, width: 303, borderRadius: 15, fontSize: 12,
                            backgroundColor: '#101426'
                        }}>

                            <TextInput style={{
                                fontSize: 12,
                                marginLeft: '5%'
                            }}
                                placeholder="**"
                                placeholderTextColor='#FFFFFF'

                                width='60%'
                                color='white'
                            >

                            </TextInput>
                            <TouchableOpacity style={{ justifyContent: 'center', marginLeft: '23%' }}>

                                <Image
                                    source={require('../assets/power.png')} /></TouchableOpacity>
                        </View>

                    </View>



                    <View style={{ marginLeft: '3%', marginTop: '6%' }}>
                        <Text style={{ color: 'white', fontSize: 9 }}>Text Message Authentication</Text>
                    </View>

                    <View style={{ marginTop: '1%' }}>


                        <View style={{
                            flexDirection: 'row',
                            height: 57, width: 303, borderRadius: 15, fontSize: 12,
                            backgroundColor: '#101426'
                        }}>

                            <TextInput style={{
                                fontSize: 12,
                                marginLeft: '5%'
                            }}
                                placeholder="+1 647 653 2353"
                                placeholderTextColor='#FFFFFF'

                                width='60%'
                                keyboardType='numeric'
                                color='white'
                            >

                            </TextInput>
                            <TouchableOpacity style={{ justifyContent: 'center', marginLeft: '23%' }}>

                                <Image
                                    source={require('../assets/power.png')} /></TouchableOpacity>
                        </View>

                    </View>




















                    <View style={{ marginLeft: '3%', marginTop: '6%' }}>
                        <Text style={{ color: 'white', fontSize: 9 }}>Email Authentication</Text>

                    </View>


                    <View style={{ marginTop: '1%' }}>
                        <View style={{
                            height: 57, width: 303, justifyContent: 'center', borderRadius: 15,
                            backgroundColor: '#101426'
                        }}>

                            <TextInput style={{
                                fontSize: 12,
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
                        <Text style={{ color: 'white', fontSize: 9 }}>Maximum Transaction Without Additional Authentication</Text>
                    </View>

                    <View style={{ marginTop: '1%' }}>
                        <View style={{
                            height: 57, width: 303, fontSize: 15, justifyContent: 'center', borderRadius: 15,
                            backgroundColor: '#101426'
                        }}>

                            <TextInput style={{
                                fontSize: 12,
                                marginLeft: '5%'
                            }}
                                placeholder="$250.00"
                                placeholderTextColor='#FFFFFF'

                                color='white'
                            >

                            </TextInput>
                        </View>
                    </View>

                    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
                    <View style={{ marginLeft: '3%', marginTop: '6%' }}>
                        <Text style={{ color: 'white', fontSize: 9 }}>Your Back Up</Text>
                    </View>

                    <View style={{ marginLeft: '3%', marginTop: '2%' }}>
                        <Text style={{ color: 'white', fontSize: 9 }}>If you ever loose access to your account, you can ask the people you trust
                            to help you recover your account. Add a minimum of 2 people.s</Text>
                    </View>



                    {/* <View style={{ marginLeft: '3%', marginTop: '6%' }}>
                        <Text style={{ color: 'white', fontSize: 9 }}>Compliance Checks</Text>
                    </View> */}

                    <View style={{ marginTop: '4%' }}>
                        <View style={{
                            height: 39, width: 303, justifyContent: 'center', borderRadius: 11, fontSize: 12,
                            backgroundColor: '#101426'
                        }}>

                            <TextInput style={{
                                fontSize: 12,
                                marginLeft: '5%'
                            }}
                                placeholder="$KingSmiths"
                                placeholderTextColor='#FFFFFF'

                                color='white'
                            >

                            </TextInput>
                        </View>
                    </View>

                    <View style={{ marginTop: '3%' }}>
                        <View style={{
                            height: 39, width: 303, justifyContent: 'center', borderRadius: 11, fontSize: 12,
                            backgroundColor: '#101426'
                        }}>

                            <TextInput style={{
                                fontSize: 12,
                                marginLeft: '5%'
                            }}
                                placeholder="$JennyR"
                                placeholderTextColor='#FFFFFF'

                                color='white'
                            >

                            </TextInput>
                        </View>
                    </View>



                    <View style={{ marginLeft: '3%', marginTop: '6%' }}>
                        <Text style={{ color: 'white', fontSize: 9 }}>My Keys</Text>
                    </View>

                    <View style={{ marginTop: '1%' }}>


                        <View style={{
                            flexDirection: 'row',
                            height: 35, width: 303, borderRadius: 11, fontSize: 12,
                            backgroundColor: '#101426'
                        }}>

                            <TextInput style={{
                                fontSize: 12,
                                marginLeft: '5%'
                            }}
                                placeholder="Public Key: GAG6K3E....RLZYNYLUUSZ"
                                placeholderTextColor='#FFFFFF'

                                width='60%'
                                color='white'
                            >

                            </TextInput>
                            <TouchableOpacity style={{ justifyContent: 'center', marginLeft: '23%' }}>

                                <Image
                                    source={require('../assets/tworectangle.png')} /></TouchableOpacity>
                        </View>

                    </View>


                    <View style={{ marginTop: '3%' }}>


                        <View style={{
                            flexDirection: 'row',
                            height: 35, width: 303, borderRadius: 11, fontSize: 12,
                            backgroundColor: '#101426'
                        }}>

                            <TextInput style={{
                                fontSize: 12,
                                marginLeft: '5%'
                            }}
                                placeholder="Private Key: Reveal"
                                placeholderTextColor='#FFFFFF'

                                width='60%'
                                color='white'
                            >

                            </TextInput>
                            <TouchableOpacity style={{ justifyContent: 'center', marginLeft: '23%' }}>

                                <Image
                                    source={require('../assets/tworectangle.png')} /></TouchableOpacity>
                        </View>

                    </View>





                    {/* <View style={{ marginLeft: '3%', marginTop: '6%' }}>
                        <Text style={{ color: 'white', fontSize: 9 }}>Referral Iink</Text>
                    </View> */}

                    {/* <View style={{ marginTop: '1%' }}>


                        <View style={{
                            flexDirection: 'row',
                            height: 57, width: 303, borderRadius: 15, fontSize: 12,
                            backgroundColor: '#101426'
                        }}>

                            <TextInput style={{
                                fontSize: 12,
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

                    </View> */}





                    <View style={{ alignItems: 'center' }}>


                        <TouchableOpacity onPress={() => navigation.navigate("DrawerNavigator")} style={{
                            justifyContent: 'center', alignItems: 'center',
                            height: 40, width: 101, marginTop: '9%', borderWidth: 2, borderRadius: 10, borderColor: "#90EDD9"
                        }}>
                            <Text style={{
                                color: '#FFFFFF', justifyContent: 'center', fontSize: 16, textAlign: "center"
                            }}>Save</Text></TouchableOpacity>

                    </View>








                    </KeyboardAvoidingView>



                </View>
  </ScrollView>

        </View>




    );
}
export default Security;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1C213E"
        
        // alignItems: 'center',
    },
});