import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../../src/components/CustomButton';
import { hp, wp } from '../../../src/utils/resposive';


export default function UserHome() {

  return (
    <SafeAreaView 
      style={styles.container}>
        <CustomButton 
          buttonText='Go to Home'
          screenAddr='/index'
          backgroundColor='#ff6f02' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF'
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