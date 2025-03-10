import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
import CalculatorButton from './CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';

const CalculatorButtonPad = () => {
  const { handleButtonPress } = useCalculator();

  const renderButtons = () => {
    const buttons = [
      { label: 'C', variant: 'function' },
      { label: '±', variant: 'function' },
      { label: '%', variant: 'function' },
      { label: '÷', variant: 'operation' },
      { label: '7' },
      { label: '8' },
      { label: '9' },
      { label: '×', variant: 'operation' },
      { label: '4' },
      { label: '5' },
      { label: '6' },
      { label: '-', variant: 'operation' },
      { label: '1' },
      { label: '2' },
      { label: '3' },
      { label: '+', variant: 'operation' },
      { label: '0', wide: true },
      { label: '.' },
      { label: '=', variant: 'equals' },
    ];

    return buttons.map((button, index) => (
      <View key={index} style={button.wide ? tw`w-36` : tw`w-16`}>
        <CalculatorButton
          label={button.label}
          variant={button.variant}
          onPress={handleButtonPress}
        />
      </View>
    ));
  };

  return (
    <View style={tw`flex-row flex-wrap justify-center px-2`}>
      {renderButtons()}
    </View>
  );
};

export default CalculatorButtonPad;
