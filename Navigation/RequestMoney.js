import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native';

const RequestMoney = ({ navigation }) => {
    return (

        <ScrollView style={{ backgroundColor: '#1C213E' }}>

<TouchableOpacity   onPress={() => navigation.navigate("DrawerNavigator")} style={{marginTop:'11%',marginLeft:"8%"}}>
            <Image source={require("../assets/leftarrow.png")} />
          </TouchableOpacity>
          <Text style={styles.Head}>Request Money</Text>

            <View style={styles.container}>
            

                


                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    automaticallyAdjustContentInsets={true}
                    horizontal={true}

                >
                    <View style={{ alignItems: 'center', height: 100, width: 532, flexDirection: 'row', marginTop: '5%' }}>


                        <TouchableOpacity style={{ height: 60, width: 60, marginLeft: '5%' }}>
                            <Image source={require('../assets/img/add-green.png')} />
                            <Text style={{ fontSize: 12, color: '#FFFFFF', marginLeft: 17 }}>New</Text>


                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 60, width: 60, marginLeft: 12 }}>
                            <Image source={require('../assets/img/2.png')} />
                            <Text style={{ fontSize: 12, color: '#FFFFFF', marginLeft: 9, height: 17, width: 60 }}> Cari </Text>
                            <View>

                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 60, width: 60, marginLeft: 7 }}>
                            <Image source={require('../assets/img/1.png')} />
                            <Text style={{ fontSize: 12, color: '#FFFFFF', marginLeft: 17 }}>Milly</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 60, width: 60, marginLeft: 7 }}>
                            <Image source={require('../assets/img/3.png')} />
                            <Text style={{ fontSize: 12, color: '#FFFFFF', marginLeft: 17 }}>Rissa </Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 60, width: 60, marginLeft: 7 }}>
                            <Image source={require('../assets/img/4.png')} />

                            <Text style={{ fontSize: 12, color: '#FFFFFF', marginLeft: 17 }}>Miss</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={{ height: 60, width: 60, marginLeft: 10 }}>
                            <Image source={require('../assets/img/5.png')} />
                            <Text style={{ fontSize: 12, color: '#FFFFFF', marginLeft: 17 }}>rabia</Text>


                        </TouchableOpacity>

                        <TouchableOpacity style={{ height: 60, width: 60, marginLeft: 10 }}>
                            <Image source={require('../assets/img/5.png')} />
                            <Text style={{ fontSize: 12, color: '#FFFFFF', marginLeft: 17 }}>rabia</Text>


                        </TouchableOpacity>


                        {/* <StatusBar style="auto" /> */}

                    </View>
                </ScrollView>


                <View style={{ marginTop: '10%', alignItems: 'center', justifyContent: 'center', height: 140, width: 200 }}>
                    <Image style={{ height: 60, width: 60 }} source={require('../assets/img/2.png')} />
                    <Text style={{ fontSize: 12, color: '#FFFFFF', marginTop: '5%', marginLeft: 17, height: 21, width: 112 }}>Ask Cori Harvell</Text>


                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center', height: 90, width: 200 }}>
                    <Text style={{ fontSize: 60, color: '#FFFFFF', marginLeft: 17, height: 80, width: 100 }}>$0</Text>

                </View>


                <TouchableOpacity style={{ marginTop: '10%', alignItems: 'center', justifyContent: 'center', height: 22, width: 91 }}>
                    <Text style={{ fontSize: 16, color: '#FFFFFF', marginLeft: 17, height: 22, width: 100 }}>+Add Memo</Text>

                </TouchableOpacity>

                <View style={{ marginTop: '15%', alignItems: 'center', justifyContent: 'center' }}>

                    <TouchableOpacity   onPress={() => navigation.navigate("TransactionSuccess")} style={{ height: 80, width: 315 }}>
                        <Image style={{ height: 80, width: 315 }} source={require('../assets/img/9.png')} />


                    </TouchableOpacity>


                </View>

            </View>
        </ScrollView>
    );
}
const { width: viewportWidth, height: viewportHeight } = Dimensions.get("window");
export default RequestMoney;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C213E',
        alignItems: 'center',

    },

    Head: {

        fontSize: 34,
        color: '#FFFFFF',
        marginTop: '10%',
        fontWeight: 'bold',
        marginLeft:'8%',
        marginRight: '22%'



    }
});