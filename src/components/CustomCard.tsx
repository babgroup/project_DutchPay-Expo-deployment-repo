// components/CustomCard.tsx
import React, from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { formatDeadline } from '../utils/formatDeadline';
import { hp, wp } from '../utils/resposive';

// 현재 JSON 구조와 맞는 타입 정의
interface Room {
  id: number;
  restaurantName: string;
  deliveryFee: number;
  maxUser?: number;
  currentUsers?: number;
  deadline?: string;
  imageUrl?: string;
}

interface CustomCardProps {
  room: Room;
  onPress: () => void; //return 값 필요 X
  width?: number | string;
  height?: number | string;
}

export default function CustomCard({
  room,
  onPress,
  width = wp(90),
  height = hp(20),

}: CustomCardProps) {
  const {
    restaurantName,
    deliveryFee,
    maxUser,
    currentUsers,
    deadline,
    imageUrl,
  } = room;

  const deliveryPerPerson =
    deliveryFee && maxUser ? Math.floor(deliveryFee / maxUser) : null;

  const discountPercent =
    deliveryPerPerson && deliveryFee
      ? 100 - Math.floor((deliveryPerPerson / deliveryFee) * 100)
      : 0;

  return (
    <TouchableOpacity
      style={[styles.card, { width, height }]}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{restaurantName}</Text>

        {!!deliveryPerPerson && (
          <Text style={styles.fee}>
            배달비 {(deliveryPerPerson).toLocaleString()}원
          </Text>
        )}

        {!!deadline && (
          <Text style={styles.deadline}>🏍️ {formatDeadline(deadline)}</Text>
        )}

        <View style={styles.memberRow}>
          <Text style={styles.member}>
            👤 {maxUser ? `${currentUsers}/${maxUser}` : '∞'}
          </Text>
        </View>
      </View>

      <View style={styles.imageBox}>
        <Image
          source={{ uri: imageUrl || 'https://via.placeholder.com/100' }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>{discountPercent}%</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: wp(6),
    padding: wp(6),
    marginBottom: hp(2),
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: wp(4),
    elevation: 3,
  },
  title: {
    fontSize: wp(6),
    fontWeight: 'semibold' ,
    marginBottom: hp(1.4),
    color: '#000',
  },
  fee: {
    fontSize: wp(3.6),
    color: '#555',
    marginBottom: hp(0.8),
  },
  deadline: {
    fontSize: wp(3.6),
    marginBottom: hp(0.8),
    color: '#222',
  },
  memberRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  member: {
    fontSize: wp(3.6),
    marginRight: wp(0.8),
  },
  imageBox: {
    marginLeft: wp(6),
    position: 'relative',
  },
  image: {
    width: wp(32),
    height: hp(15),
    borderRadius: wp(4),
    backgroundColor: '#eee',
  },
  discountBadge: {
    position: 'absolute',
    top: hp(1),
    right: wp(2),
    backgroundColor: '#fff',
    paddingHorizontal: wp(2),
    height: hp(3),
    borderRadius: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  discountText: {
    fontSize: wp(3),
    fontWeight: 'bold',
    color: '#000',
  },
});
