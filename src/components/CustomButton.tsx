import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { hp, wp } from '../utils/resposive';

//상위 컴포넌트로부터 받아올 props의 타입 정의
type CustomButtonProps = {
  backgroundColor?: string;
  textColor?: string;
  width?: string | number;
  height?: string | number;
  buttonText?: string;
}; 

const CustomButton = ({
  backgroundColor = '#FFFFFF',
  textColor = 'black',
  width = wp(60),
  height = hp(7),
  buttonText = '버튼',
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor, width, height }]}
      // 수정
    >
      <Text style={[styles.buttonText, { color: textColor }]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: wp(3),
    borderRadius: wp(4),
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: wp(4),
  },
});

export default CustomButton;