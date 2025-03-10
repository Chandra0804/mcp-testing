import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import CalculatorDisplay from '../components/CalculatorDisplay';
import CalculatorButtonPad from '../components/CalculatorButtonPad';
import HistoryList from '../components/HistoryList';

const CalculatorScreen = () => {
  const [showHistory, setShowHistory] = useState(false);
  
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1`}>
        {showHistory ? (
          <HistoryList />
        ) : null}
        
        <View style={tw`flex-1 justify-end ${showHistory ? 'hidden' : ''}`}>
          <CalculatorDisplay />
        </View>
        
        <View style={tw`bg-gray-100 pb-4`}>
          <TouchableOpacity 
            style={tw`py-2 px-4 self-end`} 
            onPress={() => setShowHistory(!showHistory)}
          >
            <Text style={tw`text-blue-500`}>
              {showHistory ? 'Calculator' : 'History'}
            </Text>
          </TouchableOpacity>
          
          {!showHistory && (
            <CalculatorButtonPad />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CalculatorScreen;
