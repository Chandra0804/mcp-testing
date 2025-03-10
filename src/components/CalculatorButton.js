import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import tw from 'twrnc';

const CalculatorButton = ({ label, onPress, variant = 'default' }) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'operation':
        return tw`bg-amber-500`;
      case 'function':
        return tw`bg-gray-400`;
      case 'equals':
        return tw`bg-blue-500`;
      default:
        return tw`bg-gray-300`;
    }
  };

  return (
    <TouchableOpacity
      style={[
        tw`w-16 h-16 rounded-full items-center justify-center m-2`,
        getButtonStyle(),
      ]}
      onPress={() => onPress(label)}
    >
      <Text 
        style={[
          tw`text-2xl font-bold`,
          (variant === 'operation' || variant === 'equals') ? tw`text-white` : tw`text-black`
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CalculatorButton;
