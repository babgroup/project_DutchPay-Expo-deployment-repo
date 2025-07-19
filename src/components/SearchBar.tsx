import { Ionicons } from '@expo/vector-icons'; // 아이콘 사용 시
import React from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import { hp, wp } from '../utils/resposive';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onSubmitEditing?: () => void;
};

export default function SearchBar({
  value,
  onChangeText,
  placeholder = '검색어를 입력하세요',
  onSubmitEditing,
}: SearchBarProps) {
  return (
    <View style={styles.searchBox}>
      <Ionicons
        name="search"
        size={wp(5.2)}
        color="#aaa"
        style={styles.searchIcon}
      />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        style={styles.searchInput}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fdfdfd',
    borderRadius: wp(5),
    marginVertical: hp(1),
    marginHorizontal: wp(8),
    paddingHorizontal: wp(3),
    height: hp(5.5),
    borderColor: '#e4e4e4',
    borderWidth: 1,
  },
  searchIcon: {
    marginRight: wp(2),
  },
  searchInput: {
    flex: 1,
    fontSize: wp(4),
    color: '#222',
    paddingVertical: Platform.OS === 'ios' ? hp(0.8) : 0,
  },
});
