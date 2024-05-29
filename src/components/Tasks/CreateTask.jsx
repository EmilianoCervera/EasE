import { StyleSheet, Text, View } from "react-native";

export const CreateTask = () => {
  return (
    <View style={styles.container}>
      <Text>Create task</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
      backgroundColor:"red",
      width:"95%",
      height:320,
      borderRadius:25,
      margin:5
  }
})