/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {Pressable, Text, View} from 'react-native';
import {styles, colors} from '../../theme/app-theme';
import {CalculatorButton} from '../components/calculatorBotton';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    number,
    prevNumber,
    buildNumber,
    clearNumber,
    deleteEndNumber,
    multiplyOperation,
    divideOperation,
    addOperation,
    sustractOperation,
    calculateResult,
  } = useCalculator();
  return (
    <View style={styles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text
          //adjustfontsize: autoconvierte la letra a un size optimo
          //numberOfLines: maxima cantidad de lineas que puede usar esa variable aunque cambie
          adjustsFontSizeToFit
          numberOfLines={1}
          style={styles.mainResult}>
          {number}
        </Text>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.subResult}>
          {prevNumber === '0' ? '' : prevNumber}
        </Text>
      </View>

      <View style={styles.row}>
        <CalculatorButton
          onPress={() => clearNumber()}
          label="C"
          color={colors.lightGray}
          blackText={true}></CalculatorButton>
        <CalculatorButton
          onPress={() => console.log('+/-')}
          label="+/-"
          color={colors.lightGray}
          blackText={true}></CalculatorButton>
        <CalculatorButton
          onPress={() => deleteEndNumber()}
          label="Del"
          color={colors.lightGray}
          blackText={true}></CalculatorButton>
        <CalculatorButton
          onPress={() => divideOperation()}
          label="÷"
          color={colors.orange}></CalculatorButton>
      </View>

      <View style={styles.row}>
        <CalculatorButton
          onPress={() => buildNumber('7')}
          label="7"></CalculatorButton>
        <CalculatorButton
          onPress={() => buildNumber('8')}
          label="8"></CalculatorButton>
        <CalculatorButton
          onPress={() => buildNumber('9')}
          label="9"></CalculatorButton>
        <CalculatorButton
          onPress={() => multiplyOperation()}
          label="x"
          color={colors.orange}></CalculatorButton>
      </View>

      <View style={styles.row}>
        <CalculatorButton
          onPress={() => buildNumber('4')}
          label="4"></CalculatorButton>
        <CalculatorButton
          onPress={() => buildNumber('5')}
          label="5"></CalculatorButton>
        <CalculatorButton
          onPress={() => buildNumber('6')}
          label="6"></CalculatorButton>
        <CalculatorButton
          onPress={() => sustractOperation()}
          label="-"
          color={colors.orange}></CalculatorButton>
      </View>

      <View style={styles.row}>
        <CalculatorButton
          onPress={() => buildNumber('1')}
          label="1"></CalculatorButton>
        <CalculatorButton
          onPress={() => buildNumber('2')}
          label="2"></CalculatorButton>
        <CalculatorButton
          onPress={() => buildNumber('3')}
          label="3"></CalculatorButton>
        <CalculatorButton
          onPress={() => addOperation()}
          label="+"
          color={colors.orange}></CalculatorButton>
      </View>

      <View style={styles.row}>
        <CalculatorButton
          onPress={() => buildNumber('0')}
          label="0"
          doubleSize={true}></CalculatorButton>
        <CalculatorButton
          onPress={() => buildNumber('.')}
          label="."></CalculatorButton>
        <CalculatorButton
          onPress={calculateResult}
          label="="
          color={colors.orange}></CalculatorButton>
      </View>
    </View>
  );
};
