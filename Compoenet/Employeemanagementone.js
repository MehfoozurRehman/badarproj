import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
// import React from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView, TouchableOpacity, Text, View, Image, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import DropDownPicker from 'react-native-dropdown-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Employeemanagementone = ({ navigation }) => {

    DropDownPicker.setTheme("DARK");
    const [checked, setChecked] = React.useState(false);
    const [open, setOpen] = useState(false);
    const [value1, setValue1] = useState(null);
    const [items, setItems] = useState([
        { label: 'Spain', value: 'Spain' },
        { label: 'Englsh', value: 'Englsh' },
        { label: 'Arabic', value: 'Arabic' },
        { label: 'Philiphino', value: 'Philiphino' }
    ]);

    return (


        <View style={styles.container}>


            <View style={{ paddingTop: '13%', paddingLeft: '8%' }}>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/leftarrow.png')} /></TouchableOpacity>

                <Text style={{ color: 'white', fontSize: 34, fontWeight: 'bold', marginTop: '13%' }}>Add Employee</Text>

            </View>


            <View style={{ width: 303, height: 375, alignSelf: 'center' }}>

                <View style={{ marginLeft: '3%', marginTop: '10%' }}>
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

                <View style={{ marginTop: '5%' }}>
                    <Text style={{ marginLeft: '3%', color: 'white', fontSize: 9 }}>Role</Text>

                </View>
                <View style={{ }}>
                    <DropDownPicker 
                        placeholder="Admin"
       dropDownContainerStyle={{borderColor:'#383838'}}
          
 
      listParentLabelStyle={{
        
    color:'#FFFFFF'
    }}
       open={open}
                        textStyle={{ fontSize: 15, color: '#FFFFFF' }}
                        style={{  borderRadius:15,borderColor:'#101426',  height: 57,width:303, backgroundColor: '#101426' }}
                        dropDownContainerStyle={{color:'#FFFFFF'}}
                        open={open}
                        value={value1}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue1}
                        setItems={setItems}
                    />
                </View>




                {/* <View style={{ marginTop: '5%' }}>
                    <Text style={{ marginLeft: '3%', color: 'white', fontSize: 9 }}>Role</Text>

                </View> */}
                {/* <View style={{ alignSelf: 'center', marginTop: '1%' }}>

                    <View style={{
                        backgroundColor: '#101426', flexDirection: 'row',
                        alignItems: 'center', height: 57, borderRadius: 15, width: 303
                    }}>

                        <TextInput style={{
                            marginLeft: '16%', height: 57, width: 200, fontSize: 14, textAlign: 'center',
                        }}
                            placeholder="Admin"
                            placeholderTextColor='#FFFFFF'
                            color='white'>


                        </TextInput>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/Polygon.png')} />
                        </TouchableOpacity>
                    </View>
                </View> */}

                <View style={{ marginLeft: '3%', marginTop: '5%' }}>
                    <Text style={{ color: 'white', fontSize: 9 }}>Phone number</Text>

                </View>


                <View style={{ marginTop: '1%' }}>
                    <View style={{
                        height: 57, width: 303, justifyContent: 'center', borderRadius: 15, fontSize: 14,
                        backgroundColor: '#101426'
                    }}>

                        <TextInput style={{
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

                <View style={{ marginLeft: '3%', marginTop: '5%' }}>
                    <Text style={{ color: 'white', fontSize: 9 }}>Personal Meta ID</Text>
                </View>

                <View style={{ marginTop: '1%' }}>
                    <View style={{
                        height: 57, width: 303, justifyContent: 'center', borderRadius: 15, fontSize: 14,
                        backgroundColor: '#101426'
                    }}>

                        <TextInput style={{
                            marginLeft: '5%'
                        }}
                            placeholder="$Kelly"
                            placeholderTextColor='#FFFFFF'
                            color='white'
                        >

                        </TextInput>
                    </View>
                </View>



                <View style={{ alignItems: 'center' }}>


                    <TouchableOpacity  onPress={() => navigation.navigate("employeeManagement")} style={{
                        backgroundColor: '#90EDD9', justifyContent: 'center', alignItems: 'center',
                        height: 40, width: 131, marginTop: '28%', borderRadius: 10,
                    }}>
                        <Text style={{
                            color: '#FFFFFF', justifyContent: 'center', fontSize: 16, textAlign: "center"
                        }}>Done</Text></TouchableOpacity>

                </View>

            </View>

















        </View>





    );
}
export default Employeemanagementone;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1C213E",
        // alignItems: 'center',
    },
});