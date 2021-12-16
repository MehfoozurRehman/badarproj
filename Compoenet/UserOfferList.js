import { StatusBar } from 'expo-status-bar';
import React, { cloneElement } from 'react';
import { StyleSheet, ImageBackground, KeyboardAvoidingView, ScrollView, TouchableOpacity, Text, View, Image, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UserOfferList = ({ navigation }) => {
    return (

<View style={styles.container}>

<View style={{ marginTop: '10%',marginRight:'80%' }}>
        <TouchableOpacity>
            <Image
            source={require('../assets/leftarrow.png')} />
            </TouchableOpacity>

                </View>


                <View style={{ opacity:0.7,marginTop:'7%', alignSelf: 'center',  backgroundColor: '#0B0F23', flexDirection: 'row', alignItems: 'center', height: 44, borderRadius: 25, width: 322 }}>

<TextInput style={{
            height: 44, width: 215, fontSize: 14, fontWeight: 'bold', marginLeft:'5%'
}}
    placeholder="Search"
    placeholderTextColor='#FFFFFF'
    color='white'>


</TextInput>

    <View style={{flexDirection:'row',marginTop:'1.5%'}}>
        <TouchableOpacity>
   <Image
        source={require('../assets/mapmarker.png')} />
        </TouchableOpacity>
        <TouchableOpacity>


        <Image style={{marginLeft:'15%'}}
        source={require('../assets/grid.png')} />
        </TouchableOpacity>
        </View>
        

</View>



<View style={{height:20,width:108,marginRight:'50%',marginTop:'5%'}}>

<Text style={{color:'#FFFFFF'}}>Offers Near Me</Text>

</View>

<ScrollView>

<View style={{alignItems:'center',height:649,width:350,marginTop:'5%'}}>

<TouchableOpacity style={{flexDirection:'row',height:90,alignItems:'center',width:322,borderWidth:1,borderColor:'#ACACAC',borderRadius:24}}>

<Image style={{marginTop:'1%',height:100,width:90}}  source={require('../assets/img/shirts.png')} />

<View  style={{marginLeft:'1%',marginTop:'4%'}}>


    <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:12}}>The Store</Text>
    <Text style={{color:'#AAAAAA',fontSize:10,height:54,width:166}}>as been the industry's standard dummy text ever since the 1500s, when an unknown printer took a </Text>
    <View style={{flexDirection:'row'}}>
    <Image style={{height:14,width:14,marginTop:'1%',marginLeft:'3%'}}  source={require('../assets/img/clock.png')} />
    <Text style={{marginLeft:'4%',color:'#FFFFFF',height:33,width:99}}> 12H:12M:12S</Text>
    </View>
</View>

<View  style={{height:93,width:50,alignItems:'center'}}>
<Text style={{color:'#90EDD9'}}>25%</Text>
<TouchableOpacity style={{marginTop:'15%'}}>
<Image style={{height:17,width:20}}  source={require('../assets/img/hearticon.png')} />
</TouchableOpacity>
</View>

<View>

    
</View>

</TouchableOpacity>

<TouchableOpacity style={{marginTop:'8%',flexDirection:'row',height:90,alignItems:'center',width:322,borderWidth:1,borderColor:'#ACACAC',borderRadius:24}}>

<Image style={{marginTop:'1%',height:100,width:90}}  source={require('../assets/img/shirts.png')} />

<View  style={{marginLeft:'1%',marginTop:'4%'}}>


    <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:12}}>The Store</Text>
    <Text style={{color:'#AAAAAA',fontSize:10,height:54,width:166}}>as been the industry's standard dummy text ever since the 1500s, when an unknown printer took a </Text>
    <View style={{flexDirection:'row'}}>
    <Image style={{height:14,width:14,marginTop:'1%',marginLeft:'3%'}}  source={require('../assets/img/clock.png')} />
    <Text style={{marginLeft:'4%',color:'#FFFFFF',height:33,width:99}}> 12H:12M:12S</Text>
    </View>
</View>

<View  style={{height:93,width:50,alignItems:'center'}}>
<Text style={{color:'#90EDD9'}}>25%</Text>
<TouchableOpacity style={{marginTop:'15%'}}>
<Image style={{height:17,width:20}}  source={require('../assets/img/hearticon.png')} />
</TouchableOpacity>
</View>

<View>

    
</View>

</TouchableOpacity>


<TouchableOpacity style={{marginTop:'8%',flexDirection:'row',height:90,alignItems:'center',width:322,borderWidth:1,borderColor:'#ACACAC',borderRadius:24}}>

<Image style={{marginTop:'1%',height:100,width:90}}  source={require('../assets/img/shirts.png')} />

<View  style={{marginLeft:'1%',marginTop:'4%'}}>


    <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:12}}>The Store</Text>
    <Text style={{color:'#AAAAAA',fontSize:10,height:54,width:166}}>as been the industry's standard dummy text ever since the 1500s, when an unknown printer took a </Text>
    <View style={{flexDirection:'row'}}>
    <Image style={{height:14,width:14,marginTop:'1%',marginLeft:'3%'}}  source={require('../assets/img/clock.png')} />
    <Text style={{marginLeft:'4%',color:'#FFFFFF',height:33,width:99}}> 12H:12M:12S</Text>
    </View>
</View>

<View  style={{height:93,width:50,alignItems:'center'}}>
<Text style={{color:'#90EDD9'}}>25%</Text>
<TouchableOpacity style={{marginTop:'15%'}}>
<Image style={{height:17,width:20}}  source={require('../assets/img/hearticon.png')} />
</TouchableOpacity>
</View>

<View>

    
</View>

</TouchableOpacity>

<TouchableOpacity style={{marginTop:'8%',flexDirection:'row',height:90,alignItems:'center',width:322,borderWidth:1,borderColor:'#ACACAC',borderRadius:24}}>

<Image style={{marginTop:'1%',height:100,width:90}}  source={require('../assets/img/shirts.png')} />

<View  style={{marginLeft:'1%',marginTop:'4%'}}>


    <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:12}}>The Store</Text>
    <Text style={{color:'#AAAAAA',fontSize:10,height:54,width:166}}>as been the industry's standard dummy text ever since the 1500s, when an unknown printer took a </Text>
    <View style={{flexDirection:'row'}}>
    <Image style={{height:14,width:14,marginTop:'1%',marginLeft:'3%'}}  source={require('../assets/img/clock.png')} />
    <Text style={{marginLeft:'4%',color:'#FFFFFF',height:33,width:99}}> 12H:12M:12S</Text>
    </View>
</View>

<View  style={{height:93,width:50,alignItems:'center'}}>
<Text style={{color:'#90EDD9'}}>25%</Text>
<TouchableOpacity style={{marginTop:'15%'}}>
<Image style={{height:17,width:20}}  source={require('../assets/img/hearticon.png')} />
</TouchableOpacity>
</View>

<View>

    
</View>

</TouchableOpacity>

<TouchableOpacity style={{marginTop:'8%',flexDirection:'row',height:90,alignItems:'center',width:322,borderWidth:1,borderColor:'#ACACAC',borderRadius:24}}>

<Image style={{marginTop:'1%',height:100,width:90}}  source={require('../assets/img/shirts.png')} />

<View  style={{marginLeft:'1%',marginTop:'4%'}}>


    <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:12}}>The Store</Text>
    <Text style={{color:'#AAAAAA',fontSize:10,height:54,width:166}}>as been the industry's standard dummy text ever since the 1500s, when an unknown printer took a </Text>
    <View style={{flexDirection:'row'}}>
    <Image style={{height:14,width:14,marginTop:'1%',marginLeft:'3%'}}  source={require('../assets/img/clock.png')} />
    <Text style={{color:'#FFFFFF',marginLeft:'4%',height:33,width:99}}> 12H:12M:12S</Text>
    </View>
</View>

<View  style={{height:93,width:50,alignItems:'center'}}>
<Text style={{color:'#90EDD9'}}>25%</Text>
<TouchableOpacity style={{marginTop:'15%'}}>
<Image style={{height:17,width:20}}  source={require('../assets/img/hearticon.png')} />
</TouchableOpacity>
</View>

<View>

    
</View>

</TouchableOpacity>

</View>
</ScrollView>

</View>

    );

}

export default UserOfferList;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1C213E',
      alignItems: 'center',
     
    }

});