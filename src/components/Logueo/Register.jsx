import React, { useContext } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import { useForm } from "../../../hooks/useForm";
import { AuthContext } from "../../../contexts/AuthContext";

export const Register = () => {
  const {register} = useContext(AuthContext)
  const { formState, onChageInput } = useForm();

  const handleSubmit = () => {
    register(formState)
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={100}
      backgroundColor="#FFF"
    >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logoImage}
            source={require("../../../assets/logo14.png")}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="nombre"
            keyboardType="name"
            inputMode="name"
            placeholderTextColor={"#7F7F7F"}
            onChangeText={(value) => onChageInput("email", value)}
            //useRef para email toma valor del campo y pasarlo
            //crear constantes de cambio clean code
          />
          <TextInput
            style={styles.input}
            placeholder="email"
            keyboardType="email-address"
            inputMode="email"
            placeholderTextColor={"#7F7F7F"}
            onChangeText={(value) => onChageInput("email", value)}
            //useRef para email toma valor del campo y pasarlo
            //crear constantes de cambio clean code
          />
          <TextInput
            style={styles.input}
            placeholder="contraseña"
            secureTextEntry
            placeholderTextColor={"#7F7F7F"}
            onChangeText={(value) => onChageInput("contraseña", value)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleSubmit();
            }}
          >
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 60,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  logoImage: {
    width: 200,
    height: 150,
    resizeMode: "contain",
  },
  inputContainer: {
    flex: 3,
    width: "80%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    marginBottom: 10,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#CCABD8",
  },
  button: {
    backgroundColor: "#CCABD8",
    borderRadius: 90,
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: "50%",
    alignSelf: "center",
  },
  buttonText: {
    color: "#333",
    textAlign: "center",
    fontSize: 16,
  },
});
