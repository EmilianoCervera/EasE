import "react-native-gesture-handler";
import { StackNavigation } from "./src/nativations/StackNavigation";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
