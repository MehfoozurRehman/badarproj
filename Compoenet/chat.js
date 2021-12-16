import { StatusBar } from 'expo-status-bar';
import React, { cloneElement } from 'react';
import { StyleSheet, ImageBackground, KeyboardAvoidingView, ScrollView, TouchableOpacity, Text, View, Image, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const chat   = ({ navigation }) => {
    return (


<ScrollView style={{    backgroundColor: '#1C213E'}}>
<View style={styles.container}>





<View style={{ marginTop: '10%',marginRight:'80%' }}>
        <TouchableOpacity 
        onPress={()=>navigation.navigate("Bankaccountmsg")}
        >
            <Image
            source={require('../assets/leftarrow.png')} />
            </TouchableOpacity>

                </View>

               
               
                <View style={{flexDirection:'row',marginTop:'5%',marginRight:'47%'}}>

<Image 
        source={require('../assets/img/kelly.png')} />
        <Text style={{color:'#FFFFFF',marginLeft:'4%',fontSize:34,fontWeight:'bold'}}>$ Kelly</Text>


</View>


<View style={{height:600,width:400}}>
<ScrollView>
<View style={{marginTop:'5%',alignSelf:'baseline',marginLeft:'5%',borderRadius:10,width:222,backgroundColor:'#CAE6E0'}}>

<Text style={{margin:'7%',color:'#FFFFFF',fontSize:14}}>

as been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has



</Text>


</View>

<View style={{marginTop:'5%',alignSelf:'baseline',marginLeft:'40%',borderRadius:10,width:222,backgroundColor:'#B5A1FB'}}>

<Text style={{margin:'7%',color:'#FFFFFF',fontSize:14}}>

as been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has



</Text>


</View>

<View style={{marginTop:'5%',alignSelf:'baseline',marginLeft:'5%',borderRadius:10,width:222,backgroundColor:'#CAE6E0'}}>

<Text style={{margin:'7%',color:'#FFFFFF',fontSize:14}}>

as been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has



</Text>


</View>



</ScrollView>
</View>





<KeyboardAvoidingView behavior="padding" style={{flex:1}}>
<View style={{ opacity:0.7,marginTop:'3%', alignSelf: 'center',  backgroundColor: '#0B0F23', flexDirection: 'row', alignItems: 'center', height: 56, borderRadius: 25, width: 352 }}>


<TextInput style={{
            height: 44, width: 215, fontSize: 14, fontWeight: 'bold', marginLeft:'5%'
}}
    placeholder="Write Something..."
    placeholderTextColor='#FFFFFF'
    color='white'>



</TextInput>

    <View style={{flexDirection:'row',marginTop:'1.5%'}}>
        {/* <TouchableOpacity>
   <Im/img/kelly.pngakelly      source={require('../assets/mapmarker.png')} />
        </TouchableOpacity> */}
        <TouchableOpacity>


        <Image style={{marginLeft:'50%'}}
        source={require('../assets/img/msg.png')} />
        </TouchableOpacity>
        </View>
        

</View>


</KeyboardAvoidingView>

</View>
</ScrollView>

    );

}

export default chat;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1C213E',
      alignItems: 'center',
     
    }

});
