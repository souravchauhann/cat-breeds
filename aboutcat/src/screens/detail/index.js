import React, { useState, useEffect, useRef } from "react";
import { Text, View, Image, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Modal, Pressable, Button } from "react-native";
import { WebView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { LightGray, PrimaryColor, white } from "../../../colors";
import Share from 'react-native-share';




const Detail = ({ navigation, route }) => {
  const [data, SetData] = useState(route.params)
  const [modalVisible, setModalVisible] = useState(false);
  const wiki = data.item.wikipedia_url
  // console.log(wiki)

  const share = async () => {
    setModalVisible(true)
    const options = {
      message:
        data.item.name,
      url: data.item.wikipedia_url,
      // email: 'codes.sg@gmail.com',
      subject: '',
      // recipient: '919988998899',
    };

    try {
      const res = await Share.open(options);
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    // Share.open(options)
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));
  };




  return (
    <View style={{ flex: 1 }}>


      <ImageBackground
        style={styles.background}
        source={{ uri: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjAlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' }}
        blurRadius={10}
      >

        <Image
          style={{ width: '100%', height: hp('50%'), borderRadius: 30 }}
          source={{ uri: 'https://cdn2.thecatapi.com/images/' + data.item.reference_image_id + '.jpg' }}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <Text style={{ color: 'black', fontSize: 25, fontWeight: '600', letterSpacing: 0.9 }}>{data.item.name}</Text>
          <TouchableOpacity onPress={() => share(data.item.wikipedia_url)} >
            <Image
              style={{ width: 25, height: 25, marginRight: 10, marginTop: 10 }}
              source={require('../../assets/images/share.png')}
            />


          </TouchableOpacity>


        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../../assets/images/location.png')}
            style={{ width: 17, height: 17, marginVertical: 5 }}
          />
          <Text style={{ marginLeft: 10, color: 'black', fontSize: 15 }}>{data.item.origin}</Text>
        </View>
        <View style={{ width: '100%', flexDirection: 'row', marginVertical: 5, alignSelf: 'center', justifyContent: 'space-evenly' }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>


            <View style={{ width: wp('30%'), height: hp('10%'), borderRadius: 10, alignItems: 'center', justifyContent: 'space-around', backgroundColor: white, marginRight: 6 }}>
              <Text style={{ color: 'black', fontSize: 15, fontWeight: '700' }}>dog friendly</Text>
              <Text style={{ color: 'black', fontSize: 15, fontWeight: '400' }}>{data.item.dog_friendly}</Text>

            </View>
            <View style={{ width: wp('30%'), height: hp('10%'), borderRadius: 10, alignItems: 'center', justifyContent: 'space-around', backgroundColor: white, marginRight: 6 }}>
              <Text style={{ color: 'black', fontSize: 15, fontWeight: '700' }}>energy level</Text>
              <Text style={{ color: 'black', fontSize: 15, fontWeight: '400' }}>{data.item.energy_level}</Text>

            </View>
            <View style={{ width: wp('30%'), height: hp('10%'), borderRadius: 10, alignItems: 'center', justifyContent: 'space-around', backgroundColor: white, marginRight: 6 }}>
              <Text style={{ color: 'black', fontSize: 15, fontWeight: '700' }}>health issues</Text>
              <Text style={{ color: 'black', fontSize: 15, fontWeight: '400' }}>{data.item.health_issues}</Text>

            </View>

            <View style={{ width: wp('30%'), height: hp('10%'), borderRadius: 10, alignItems: 'center', justifyContent: 'space-around', backgroundColor: white, marginRight: 6 }}>
              <Text style={{ color: 'black', fontSize: 15, fontWeight: '700' }}>intelligence</Text>
              <Text style={{ color: 'black', fontSize: 15, fontWeight: '400' }}>{data.item.intelligence}</Text>

            </View>

            <View style={{ width: wp('30%'), height: hp('10%'), borderRadius: 10, alignItems: 'center', justifyContent: 'space-around', backgroundColor: white, marginRight: 6 }}>
              <Text style={{ color: 'black', fontSize: 15, fontWeight: '700' }}>shedding level</Text>
              <Text style={{ color: 'black', fontSize: 15, fontWeight: '400' }}>{data.item.shedding_level}</Text>

            </View>
          </ScrollView>

        </View>

        <Text style={{ color: 'black', fontSize: 25, fontWeight: '600', letterSpacing: 0.9 }}>Pet Story</Text>
        <ScrollView>
          <Text style={{ letterSpacing: 1, paddingVertical: 10, lineHeight: 25 }}>{data.item.description}</Text>

        </ScrollView>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ width: 30, height: 30, position: 'absolute', top: 10, left: 10 }}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require('../../assets/images/back.png')}
          />
        </TouchableOpacity>
      

        <View style={{ flexDirection: 'row' }}>

        <Text style={{ marginTop: 5, marginBottom: 5 ,fontSize:12}}>
           Read in more detail check on wikipedia</Text>
         
          <TouchableOpacity
            onPress={() => navigation.navigate('WebViewScreen', { wiki })}
            style={{ width: wp('20%'), height: hp('3%'), backgroundColor: 'gray', marginLeft: 10, borderRadius: 5 }}>
            <Text style={{ color: white, padding: 5 ,alignSelf:'center',fontSize:10}}>wikipedia</Text>
          </TouchableOpacity>
        </View>

       

      </ImageBackground>




    </View>
  )
}
export default Detail

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: wp('100%'),
    height: hp('100%'),
    padding: 10, alignContent: 'center', alignItem: 'center'


  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    // padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,

  },
  modalView: {

    backgroundColor: white,
    // borderRadius: 20,,
    borderTopRightRadius: 20, borderTopLeftRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    height: hp('30%'),
    position: 'absolute',
    bottom: 0
  },
  button: {
    borderRadius: 20,
    // padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
