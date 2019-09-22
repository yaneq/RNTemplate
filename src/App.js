import React, {Fragment} from 'react';
import { Text, StatusBar, SafeAreaView, ScrollView, View } from 'react-native';
import { Button } from '../components/button'

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View>
            <Button onPress={() => console.log('in on press')} disabled='true'>
              <Text>this is children</Text>
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
