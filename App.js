import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Header from './src/components/header';
import TopicTabs from './src/components/topicTabs';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.background}>
        <Header />
        <TopicTabs />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FFF',
    flex: 1,
    height: '100%',
    width: '100%',
  },
});

export default App;
