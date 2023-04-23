import React, { useEffect ,useState} from "react";

import { StyleSheet, Text, TextInput, View, Image, Pressable, FlatList, TouchableOpacity } from "react-native";
import Search from '../../assets/images/searchbar.svg'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LightGray, LightOrange, PrimaryColor, white } from "../../../colors";
const ViewAll=({navigation})=>{
    const [data, SetData] = useState([])
  
    function catData() {
        fetch('https://api.thecatapi.com/v1/breeds')
            .then(response => response.json())
            .then(response => SetData(response))
            .catch(err => console.error(err));
    }
    useEffect(()=>{
        catData()
    },[])
    return(
        <View style={{padding:5,flex:1}}>
           <FlatList
                showsVerticalScrollIndicator={false}
                  numColumns={4}
                keyExtractor={item => item.id.toString()}
                data={data}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate('Detail', { item })}>
                        <View
                            style={{
                                width: wp('23.5%'), height: hp('13%'), shadowOffset: { width: 0, height: 0 },
                                shadowOpacity: 1, borderRadius: 10,
                                shadowRadius: 4,aspectRatio:1.2,
                                shadowColor: PrimaryColor, backgroundColor: white,
                                 justifyContent: 'space-evenly', marginBottom: 5,marginRight:5,marginTop:5
                            }}>
                               
                            <Image
                                style={{ width: '100%', height: '100%', borderRadius: 10 }}
                                source={{ uri: 'https://cdn2.thecatapi.com/images/' + item.reference_image_id + '.jpg' }}
                            />
                            <Text style={{ color: white, fontSize: 10, fontWeight: '700',alignSelf:'center',position:'absolute',bottom:10 }}>{item.name}</Text>
                            
                        </View>
                    </Pressable>

                )} />

        </View>
    )
}
export default ViewAll