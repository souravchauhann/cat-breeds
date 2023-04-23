import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Image, Pressable, FlatList, TouchableOpacity } from "react-native";
import Search from '../../assets/images/searchbar.svg'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LightGray, LightOrange, PrimaryColor, white } from "../../../colors";

const Home = ({ navigation }) => {

    const [data, SetData] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const filteredData = data.filter(item => item.name.includes(searchTerm));

    useEffect(() => {
        catData()
                 }, [])

    function catData() {
        fetch('https://api.thecatapi.com/v1/breeds')
            .then(response => response.json())
            .then(response => SetData(response))
            .catch(err => console.error(err));
                       }

    const handleSearch = (text) => {
        setSearchTerm(text)
                                   }

    return (
        <View>
            <View style={{ padding: 10 }}>
                {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding:9}}>
                <Text style={{ color: 'black', fontWeight: '500' }}>Friends Finder</Text>
                </View> */}

                <View style={{
                    flexDirection: 'row', backgroundColor: LightGray,
                    width: "100%", alignItems: 'center', borderRadius: 10, paddingLeft: 10
                            }}>

                    <Search width={20} height={20} />
                    <TextInput
                        onChangeText={handleSearch}
                        value={searchTerm}
                        placeholder="Type Your favourite breed..."
                        style={{ backgroundColor: LightGray, paddingLeft: 10 }} />

                </View>
            </View>
            {/* <View style={{
                width: '100%', height: hp('20%'), backgroundColor: LightOrange,
                alignItems: 'center', flexDirection: 'row', padding: 10, justifyContent: 'center'
            }}>
                <View >
                    <Text style={{ color: white, fontSize: 18, letterSpacing: 0.10 }}>Bailey is your puppy</Text>
                    <Text style={{ color: white, fontSize: 18, letterSpacing: 0.10 }}>match based on your </Text>
                    <Text style={{ color: white, fontSize: 18, letterSpacing: 0.10 }}>preferences!</Text>
                    <Pressable style={{
                         marginTop: 10, backgroundColor: white, width: wp('20%'),
                         height: hp('4%'), justifyContent: 'center',
                         alignItems: 'center', borderRadius: 15,
                         shadowColor: PrimaryColor,
                         shadowOffset: { width: 0, height: 0 },
                         shadowOpacity: 1,
                         shadowRadius: 8,
                         elevation: 8,
                    }}>
                        <Text style={{ color: PrimaryColor, fontSize: 13 }}>
                            Meet him
                        </Text>
                    </Pressable>
                </View>
                <Image
                    source={require('../../assets/images/pizza.png')}
                    style={{ width: 150, height: 150 }} />

            </View> */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: '700' }}>Find your pet </Text>
                <Pressable onPress={() => navigation.navigate('ViewAll')}>
                    <Text style={{ color: PrimaryColor, fontSize: 16, fontWeight: '700' }}>View all</Text>
                </Pressable>

            </View>
            <FlatList
                showsVerticalScrollIndicator={false}

                keyExtractor={item => item.id.toString()}
                data={filteredData}
                renderItem={({ item }) => (

                    <Pressable onPress={() => navigation.navigate('Detail', { item })}>
                        <View
                            style={{
                                width: wp('94%'), height: hp('40%'), shadowOffset: { width: 0, height: 0 },
                                shadowOpacity: 1, borderRadius: 20,
                                shadowRadius: 4,
                                shadowColor: PrimaryColor, backgroundColor: white, justifyContent: 'space-around', alignItems: 'center', alignSelf: 'center', marginBottom: 10
                            }}>

                            <Image
                                style={{ width: '100%', height: '100%', borderRadius: 20 }}
                                source={{ uri: 'https://cdn2.thecatapi.com/images/' + item.reference_image_id + '.jpg' }}
                            />
                            <Text style={{ color: white, fontSize: 30, fontWeight: '700', position: 'absolute', bottom: 30, left: 30 }}>{item.name}</Text>
                            {/* <View style={{width:50,height:40,backgroundColor:white,position:'absolute',right:0,borderTopRightRadius:20,borderBottomLeftRadius:15,justifyContent:'center',alignItems:'center',alignContent:'center'}}>
                           <TouchableOpacity onPress={()=>favList(1)}>
                            {favNum == 0? 
                            <Image
                            style={{ width: 25, height: 25 }}
                            source={require('../../assets/images/favourite.png')}
                           />
                           :
                           <Image
                           style={{ width: 25, height: 25 }}
                           source={require('../../assets/images/heart.png')}
                          />
                           }
                          
                           </TouchableOpacity>
                           
                                </View> */}
                        </View>
                    </Pressable>

                )} />
            {/* <Text style={{color:'black',fontSize:20,fontWeight:'700',padding:10}}>Recommendation</Text> */}
        </View>
    )
}
export default Home

const styles = StyleSheet.create({
    serachBarWrap: {
        height: hp('10%'),
        width: wp('100%'),
        backgroundColor: white,
        justifyContent: 'center',
        // padding:10,
        borderRadius: 10
    }
})



