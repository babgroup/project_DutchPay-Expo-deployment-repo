import CustomButton from "@/src/components/CustomButton";
import { getStatusColor } from "@/src/utils/colors";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: getStatusColor('white')
      }}
    >
      
      <CustomButton 
        buttonText="Go to Delivery Home"
        screenAddr="/delivery-home"
        backgroundColor={getStatusColor('orange')} />
      <Text>hi</Text>
    </SafeAreaView>
  );
}