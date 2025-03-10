import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useCalculator } from '../hooks/useCalculator';

const HistoryList = () => {
  const { history, recallCalculation, clearHistory } = useCalculator();

  if (history.length === 0) {
    return (
      <View style={tw`py-4 px-4`}>
        <Text style={tw`text-gray-500 text-center`}>No calculation history</Text>
      </View>
    );
  }

  const renderHistoryItem = ({ item, index }) => (
    <TouchableOpacity 
      style={tw`border-b border-gray-200 py-3 px-4`}
      onPress={() => recallCalculation(index)}
    >
      <Text style={tw`text-gray-500`}>{item.equation}</Text>
      <Text style={tw`text-lg font-semibold`}>{item.result}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={tw`flex-1`}>
      <View style={tw`flex-row justify-between items-center px-4 py-2 bg-gray-100`}>
        <Text style={tw`font-semibold text-lg`}>History</Text>
        <TouchableOpacity onPress={clearHistory}>
          <Text style={tw`text-blue-500`}>Clear</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={history}
        renderItem={renderHistoryItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default HistoryList;
