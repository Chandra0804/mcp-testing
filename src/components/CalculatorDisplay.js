import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import tw from 'twrnc';
import { useCalculator } from '../hooks/useCalculator';

const CalculatorDisplay = () => {
  const { displayValue, equation } = useCalculator();

  return (
    <View style={tw`w-full px-4 py-6 bg-gray-100 rounded-t-3xl`}>
      <ScrollView 
        horizontal 
        style={tw`mb-2`}
        contentContainerStyle={tw`flex-grow justify-end`}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={tw`text-gray-600 text-right text-lg`}>{equation}</Text>
      </ScrollView>
      
      <ScrollView 
        horizontal 
        contentContainerStyle={tw`flex-grow justify-end`}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={tw`text-4xl font-bold text-right`}>{displayValue}</Text>
      </ScrollView>
    </View>
  );
};

export default CalculatorDisplay;
