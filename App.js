import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-web";

export default function App() {
  return (
    
      <View style={{ height: 60,marginTop:30, backgroundColor: "green" }}>
      <Text style={{fontSize:24,marginLeft:44,color:"white"}}>This is a text </Text>
      </View>
      
  );
}

const styles = StyleSheet.create({
  container: {},
});
