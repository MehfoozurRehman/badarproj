import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView, TouchableOpacity, Text, View, Image, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const businessoffertwo = ({ navigation }) => {

    return (
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }} >

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


                <View style={{ flexDirection: 'row', marginLeft: '8%'}}>

                    <Image style={{ marginTop: '10%' }}
                        source={require('../assets/iconplus.png')} />
                    <View style={{ margin: '1%' }}>

                    </View>
                    <TouchableOpacity>
                    <Text style={{
                        color: 'white', fontSize: 14, marginTop: '55%'

                    }}>Set Expiry</Text></TouchableOpacity>

                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end',marginLeft:'8%',marginTop:'8%' }}>

                        <View style={{ alignItems: 'center' }}>


                            <TouchableOpacity style={{
                                backgroundColor:'#101426', justifyContent: 'center', alignItems: 'center',
                                 height: 38, width: 72, borderRadius: 25,
                            }}>
                                <Text style={{
                                    color: 'white', justifyContent: 'center', fontSize: 14, textAlign: "center"
                                }}>Days</Text></TouchableOpacity>

                        </View>

                        <View style={{ margin: '8%' }}>

                        </View>
                        <View style={{ alignItems: 'center' }}>


                        <TouchableOpacity style={{
                                backgroundColor:'#101426', justifyContent: 'center', alignItems: 'center',
                                 height: 38, width: 72, borderRadius: 25,
                            }}>
                                <Text style={{
                                    color: 'white', justifyContent: 'center', fontSize: 14, textAlign: "center"
                                }}>Hours</Text></TouchableOpacity>

                        </View>
                    </View>

                    {/* <View style={{  flexDirection: 'row' }}>


                        <TouchableOpacity style={{
                            justifyContent: 'center',
                            backgroundColor: '#101426', height: 38, width: 72, borderRadius: 25,
                        }}>
                            <Text style={{
                                color: 'white', justifyContent: 'center', fontSize: 14, textAlign: "center"
                            }}>Days</Text></TouchableOpacity>

                        <TouchableOpacity style={{
                            justifyContent: 'center',
                            backgroundColor: '#101426', height: 38, width: 72, borderRadius: 25,
                        }}>
                            <Text style={{
                                color: 'white', justifyContent: 'center', fontSize: 14, textAlign: "center"
                            }}>Days</Text></TouchableOpacity>

                    </View> */}



                </View>



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


                        <TouchableOpacity style={{
                            borderWidth: 2, justifyContent: 'center', alignItems: 'center',
                            borderColor: '#90EDD8', height: 44, width: 115, borderRadius: 25,
                        }}>
                            <Text style={{
                                color: '#90EDD8', justifyContent: 'center', fontSize: 14, textAlign: "center"
                            }}>Publish</Text></TouchableOpacity>

                    </View>
                </View>













            </View>

        </KeyboardAvoidingView>
    );
}
export default businessoffertwo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1C213E",
        // alignItems: 'center',
    },
});
