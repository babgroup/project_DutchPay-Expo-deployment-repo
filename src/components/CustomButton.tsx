import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { getStatusColor } from '../utils/colors';
import { hp, wp } from '../utils/responsive';

type CustomButtonProps = {
  backgroundColor?: string;
  textColor?: string;
  width?: number;
  height?: number;
  buttonText?: string;
  screenAddr?: string;
};

const CustomButton = ({
  backgroundColor = getStatusColor('gray'),
  textColor = getStatusColor('white'),
  width = wp(60),
  height = hp(7),
  buttonText = '버튼',
  screenAddr = '/index',
}: CustomButtonProps) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push(screenAddr)}
      style={[styles.button, { backgroundColor, width, height }]}
    >
      <Text style={{ color: textColor }}>{buttonText}</Text>
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
});

export default CustomButton;