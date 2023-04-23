import React, { useEffect, Component, useState } from "react";
import { SafeAreaView, Text } from "react-native";

import { WebView } from 'react-native-webview';

    const WebViewScreen = ({route}) => {
        const [value,SetValue]=useState(route.params)
      

               return (

                <SafeAreaView style={{ flex: 1 }}>
                  
                <WebView
                source={{uri:value.wiki}}
                style={{flex: 1}}
                />
                </SafeAreaView>
                     
                     )
                                }
    export default WebViewScreen
