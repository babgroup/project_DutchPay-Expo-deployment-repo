import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { hp, wp } from '../src/utils/resposive';

export default function Page() {
  return (
    <View 
      style={styles.container}>
      <Link href="/index">Home</Link>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: wp(8),
    marginBottom: hp(2)
  },
  subTitle : {
    fontSize: wp(4),
    marginBottom: hp(2)
  }
})