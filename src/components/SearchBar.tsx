import { Ionicons } from '@expo/vector-icons'; // 아이콘 사용 시
import React from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import { getStatusColor } from '../utils/colors'; // Assuming you have this utility function
import { hp, wp } from '../utils/responsive';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

export default function SearchBar({
  value,
  onChangeText,
  placeholder = '검색어를 입력하세요',
}: SearchBarProps) {

  return (
    <View style={styles.searchBox}>
      <Ionicons
        name="search"
        size={wp(5.2)}
        color={getStatusColor('dark-gray')}
        style={styles.searchIcon}
      />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={getStatusColor('dark-gray')}
        style={styles.searchInput}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: getStatusColor('white'),
    borderRadius: wp(5),
    marginVertical: hp(1),
    marginHorizontal: wp(8),
    paddingHorizontal: wp(3),
    height: hp(5.5),
    borderColor: getStatusColor('gray'),
    borderWidth: 1,
  },
  searchIcon: {
    marginRight: wp(2),
  },
  searchInput: {
    flex: 1,
    fontSize: wp(4),
    color: getStatusColor('black'),
    paddingVertical: Platform.OS === 'ios' ? hp(0.8) : 0,
  },
});
