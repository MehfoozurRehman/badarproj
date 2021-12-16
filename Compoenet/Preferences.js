import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView, TouchableOpacity, Text, View, Image, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CheckBox } from "react-native-elements";
import { useState } from 'react';


const Preferences = ({ navigation }) => {

    const [checked, setchecked] = useState(false);
    const [checked1, setchecked1] = useState(false);
    const [checked2, setchecked2] = useState(false);
    return (


        <View style={styles.container}>


            <View style={{ paddingTop: '13%', paddingLeft: '8%' }}>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/leftarrow.png')} /></TouchableOpacity>



                <View>

                    <Text style={{ color: '#FFFFFF', fontSize: 34, fontWeight: 'bold', marginTop: '5%' }}>Prefrences</Text>
                </View>
            </View>



            <View style={{
                flexDirection: 'row', height: 70, width: 329,
                borderColor: '#707070', borderWidth: 1, borderRadius: 10, alignSelf: 'center', marginTop: '4%'
            }}>

                <View style={{ justifyContent: 'center', marginLeft: '7.5%' }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18 }}>Security</Text>
                </View>



                <View style={{ margin: '13%' }}></View>



                <View style={{ height: 52, width: 45, alignItems: 'center' }}>

                    <Text style={{ color: '#FFFFFF', marginTop: '20%', fontSize: 9 }}>In App</Text>
                    <CheckBox
                        checked={checked1}
                        onPress={() => setchecked1(!checked1)}
                        checkedColor="#90EDD9"
                        uncheckedColor="#90EDD9"
                    />
                </View>

                <View style={{ height: 52, width: 45, alignItems: 'center' }}>

                    <Text style={{ color: '#FFFFFF', marginTop: '20%', fontSize: 9 }}>Text</Text>
                    <CheckBox
                        checked={checked2}
                        onPress={() => setchecked2(!checked2)}
                        checkedColor="#90EDD9"
                        uncheckedColor="#90EDD9"
                    />
                </View>
                <View style={{ height: 52, width: 45, alignItems: 'center' }}>

                    <Text style={{ color: '#FFFFFF', marginTop: '20%', fontSize: 9 }}>Email</Text>
                    <CheckBox
                        checked={checked}
                        onPress={() => setchecked(!checked)}
                        checkedColor="#90EDD9"
                        uncheckedColor="#90EDD9"
                    />
                </View>



            </View>






            <View style={{
                flexDirection: 'row', height: 70, width: 329,
                borderColor: '#707070', borderWidth: 1, borderRadius: 10, alignSelf: 'center', marginTop: '7%'
            }}>

                <View style={{ justifyContent: 'center', marginLeft: '7.5%' }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18 }}>Transactions</Text>
                </View>



                <View style={{ margin: '7.3%' }}></View>



                <View style={{ height: 52, width: 45, alignItems: 'center' }}>

                    <Text style={{ color: '#FFFFFF', marginTop: '20%', fontSize: 9 }}>In App</Text>
                    <CheckBox
                        checked={checked}
                        onPress={() => setchecked(!checked)}
                        checkedColor="#90EDD9"
                        uncheckedColor="#90EDD9"
                    />
                </View>

                <View style={{ height: 52, width: 45, alignItems: 'center' }}>

                    <Text style={{ color: '#FFFFFF', marginTop: '20%', fontSize: 9 }}>Text</Text>
                    <CheckBox
                        checked={checked}
                        onPress={() => setchecked(!checked)}
                        checkedColor="#90EDD9"
                        uncheckedColor="#90EDD9"
                    />
                </View>
                <View style={{ height: 52, width: 45, alignItems: 'center' }}>

                    <Text style={{ color: '#FFFFFF', marginTop: '20%', fontSize: 9 }}>Email</Text>
                    <CheckBox
                        checked={checked}
                        onPress={() => setchecked(!checked)}
                        checkedColor="#90EDD9"
                        uncheckedColor="#90EDD9"
                    />
                </View>



            </View>



            <View style={{
                flexDirection: 'row', height: 70, width: 329,
                borderColor: '#707070', borderWidth: 1, borderRadius: 10, alignSelf: 'center', marginTop: '7%'
            }}>

                <View style={{ justifyContent: 'center', marginLeft: '7.5%' }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18 }}>New Offers</Text>
                </View>



                <View style={{ margin: '8.8%' }}></View>



                <View style={{ height: 52, width: 45, alignItems: 'center' }}>

                    <Text style={{ color: '#FFFFFF', marginTop: '20%', fontSize: 9 }}>In App</Text>
                    <CheckBox
                        checked={checked}
                        onPress={() => setchecked(!checked)}
                        checkedColor="#90EDD9"
                        uncheckedColor="#90EDD9"
                    />
                </View>

                <View style={{ height: 52, width: 45, alignItems: 'center' }}>

                    <Text style={{ color: '#FFFFFF', marginTop: '20%', fontSize: 9 }}>Text</Text>
                    <CheckBox
                        checked={checked}
                        onPress={() => setchecked(!checked)}
                        checkedColor="#90EDD9"
                        uncheckedColor="#90EDD9"
                    />
                </View>
                <View style={{ height: 52, width: 45, alignItems: 'center' }}>

                    <Text style={{ color: '#FFFFFF', marginTop: '20%', fontSize: 9 }}>Email</Text>
                    <CheckBox
                        checked={checked}
                        onPress={() => setchecked(!checked)}
                        checkedColor="#90EDD9"
                        uncheckedColor="#90EDD9"
                    />
                </View>



            </View>

            <View style={{
                flexDirection: 'row', height: 70, width: 329,
                borderColor: '#707070', borderWidth: 1, borderRadius: 10, alignSelf: 'center', marginTop: '7%'
            }}>

                <View style={{ justifyContent: 'center', marginLeft: '7.5%' }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18 }}>New Offers</Text>
                </View>



                <View style={{ margin: '8.8%' }}></View>



                <View style={{ height: 52, width: 45, alignItems: 'center' }}>

                    <Text style={{ color: '#FFFFFF', marginTop: '20%', fontSize: 9 }}>In App</Text>
                    <CheckBox
                        checked={checked}
                        onPress={() => setchecked(!checked)}
                        checkedColor="#90EDD9"
                        uncheckedColor="#90EDD9"
                    />
                </View>

                <View style={{ height: 52, width: 45, alignItems: 'center' }}>

                    <Text style={{ color: '#FFFFFF', marginTop: '20%', fontSize: 9 }}>Text</Text>
                    <CheckBox
                        checked={checked}
                        onPress={() => setchecked(!checked)}
                        checkedColor="#90EDD9"
                        uncheckedColor="#90EDD9"
                    />
                </View>
                <View style={{ height: 52, width: 45, alignItems: 'center' }}>

                    <Text style={{ color: '#FFFFFF', marginTop: '20%', fontSize: 9 }}>Email</Text>
                    <CheckBox
                        checked={checked}
                        onPress={() => setchecked(!checked)}
                        checkedColor="#90EDD9"
                        uncheckedColor="#90EDD9"
                    />
                </View>



            </View>


            <View style={{ alignItems: 'center' }}>


<TouchableOpacity onPress={() => navigation.navigate("DrawerNavigator")} style={{
    justifyContent: 'center', alignItems: 'center',
    height: 40, width: 101, marginTop: '20%', borderWidth: 2, borderRadius: 10, borderColor: "#90EDD9"
}}>
    <Text style={{
        color: '#FFFFFF', justifyContent: 'center', fontSize: 16, textAlign: "center",color:"#90EDD9"
    }}>Save</Text></TouchableOpacity>

</View>























        </View>


    );
}
export default Preferences;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1C213E",
        // alignItems: 'center',
    },
});