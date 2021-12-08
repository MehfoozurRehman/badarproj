import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';



const fixedTellus = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={{ paddingTop: '35%', alignItems: 'center' }}>
                <Text style={{ color: 'white',
                 fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>Tell Us About Your Business</Text>
            </View>


            <View style={{ alignItems: 'center' }}>


                <TouchableOpacity onPress={() => navigation.navigate('Businessdet1')} style={{
                    borderWidth: 2, justifyContent: 'center', alignItems: 'center',
                    borderColor: '#6FB8A8', height: 56, width: 330, marginTop: 70,
                     backgroundColor: '#1C213E', borderRadius: 27,backgroundColor:'#6FB8A8',
                }}>
                    <Text style={{
                        color: 'white', justifyContent: 'center', fontSize: 15,
                         color: 'white', textAlign: "center",
                    }}>Sole Proprietorship</Text></TouchableOpacity>

                    <Text style={{color:'white',textAlign:'center',fontSize:'12',marginHorizontal:60,marginTop:10}}>You're the only owner of the business and 
have not incorporated formally</Text>

<TouchableOpacity onPress={() => navigation.navigate('Businessdet2')} style={{
                    borderWidth: 2, justifyContent: 'center', alignItems: 'center',
                    borderColor: '#6FB8A8', height: 56, width: 330, marginTop: 70,
                     backgroundColor: '#1C213E', borderRadius: 27,backgroundColor:'#6FB8A8',
                }}>
                    <Text  style={{
                        color: 'white', justifyContent: 'center', fontSize: 15,
                         color: 'white', textAlign: "center",
                    }}>Incorporated</Text></TouchableOpacity>

                    <Text style={{color:'white',textAlign:'center',fontSize:'12',marginHorizontal:35,marginTop:10}}>You have registered your business as a separate 
legal entity and have a business number for tax purposes</Text>

                

            </View>


        </View>
    );
}
export default fixedTellus;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1C213E",
        // alignItems: 'center',
    },
});
