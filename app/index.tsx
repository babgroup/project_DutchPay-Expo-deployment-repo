import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { hp, wp } from '../src/utils/resposive';

export default function Page() {
    return (
      <View 
        style={styles.container}>
          <View style={styles.titleContainer}>
            <Text
              style={styles.subTitle}
            >
              글로벌 캠퍼스 입주생들을 위한 캠퍼스라이프 메이트
            </Text>
            <Text
              style={styles.mainTitle}
            >
              함께 모여, 배달비 아껴!
            </Text>
          </View>
        <Link href="/delivery-home">Delivery Home</Link>
      </View>
    );
  }
  
  const styles = StyleSheet.create ({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    titleContainer: {
      padding: wp(2),
      flex: 1,
      justifyContent: 'flex-start' ,
      textAlign: 'left' ,
    },

    mainTitle: {
      fontSize: wp(8),
      marginBottom: hp(2)
  
    },
    subTitle : {
      fontSize: wp(4),
      marginBottom: hp(2)
    }
  });