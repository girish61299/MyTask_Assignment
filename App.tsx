import React from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  NativeModules,
  SafeAreaView
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import ResturentCard from './src/Screens/ResturentCard';
import HScrollCard from './src/Screens/ScrollCard/HScrollCard';
import ExpoleCard from './src/Screens/Exploer/ExpoleCard';
import colors from './src/styles/colors';
import HeaderView from './src/Screens/Header/HeaderView';

const { LiveActivityManager } = NativeModules;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : colors.white,
  };

  const renderItem = ({ item }) => {
    switch (item.type) {
      case 'header':
        return <HeaderView />;
      case 'restaurant':
        return <ResturentCard />;
      case 'scrollCard':
        return <HScrollCard />;
      case 'explore':
        return <ExpoleCard />;
      default:
        return null;
    }
  };

  const data = [
    { id: '1', type: 'header' },
    { id: '2', type: 'scrollCard' },
    { id: '3', type: 'explore' },
    { id: '4', type: 'restaurant' },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'red'}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 20,
  },
});

export default App;
