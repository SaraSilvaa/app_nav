import React from 'react';

import { Text, View, Button } from 'react-native';
 
 
function DetailsScreen(navigation) {

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>Details Screen</Text>

        <Button

          title="voltar"

          onPress={() => navigation.navigation.goBack()}

        />

      </View>

    );

  }
 
export default DetailsScreen;