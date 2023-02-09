import { useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Alert,
} from "react-native";
import { TextInput, Text } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

export const RegisterScreen = ({ navigation, visible }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setfullName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [seePassword, setSeePassword] = useState(true);
  const [checkValidEmail, setCheckValidEmail] = useState(false);

  const handleCheckEmail = (text) => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  const checkPasswordValidity = (value) => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return "Password must not contain Whitespaces.";
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return "Password must have at least one Uppercase Character.";
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return "Password must have at least one Lowercase Character.";
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return "Password must contain at least one Digit.";
    }

    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
      return "Password must be 8-16 Characters Long.";
    }
    return null;
  };
  const user = { Email: "PP@g.com", Password: "Pass1234//" };
  const handleRegister = () => {
    const checkPassowrd = checkPasswordValidity(password);
    if (email == user.Email) {
      Alert.alert("something wrong !!!", "Please check email again", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    } else if (!checkPassowrd) {
      console.log("godd");
      navigation.navigate("Homey");
    } else {
      console.log("bad");
      Alert.alert("something wrong !!!", "Please Check Password", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  };

  return (
    <Modal animationType="fade" visible={visible}>
      <View style={styles.container}>
        <ScrollView style={{ paddingTop: 50, paddingHorizontal: 20 }}>
          <View style={{ alignItems: "center" }}>
            <FontAwesome name="user-circle" size={80} color="#8fbc8f" />
            <Text
              style={{
                fontSize: 40,
                fontWeight: "bold",
                color: "#006400",
                textAlign: "center",
              }}
            >
              Register
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: "#5f9ea0",
                marginVertical: 10,
                textAlign: "center",
              }}
            >
              PLS Enter Your Detail to Register
            </Text>
          </View>

          <View style={styles.wrapperInput}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={(text) => handleCheckEmail(text)}
            />
          </View>
          {checkValidEmail ? (
            <Text style={styles.textFailed}>Wrong format email</Text>
          ) : (
            <Text style={styles.textFailed}> </Text>
          )}
          <View style={styles.wrapperInput}>
            <TextInput
              style={styles.input}
              placeholder="FullName"
              value={fullName}
              onChangeText={(text) => setfullName(text)}
            />
          </View>
          <View style={styles.wrapperInput}>
            <TextInput
              style={styles.input}
              placeholder="PhoneNumber"
              value={phoneNumber}
              onChangeText={(text) => setphoneNumber(text)}
            />
          </View>
          <View style={styles.wrapperInput}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              secureTextEntry={seePassword}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
              style={styles.wrapperIcon}
              onPress={() => setSeePassword(!seePassword)}
            >
              {seePassword ? (
                <FontAwesome name="eye" size={24} color="black" />
              ) : (
                <FontAwesome name="eye-slash" size={24} color="black" />
              )}
            </TouchableOpacity>
          </View>
          {email == "" ||
          password == "" ||
          fullName == "" ||
          phoneNumber == ""||
          checkValidEmail == true ? (
            <TouchableOpacity
              disabled
              style={styles.buttonDisable}
              onPress={handleRegister}
            >
              <Text style={styles.text}>Register</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.text}>Register</Text>
            </TouchableOpacity>
          )}
          <View style={{ justifyContent: "center", alignItems: "center",marginBottom:50 }}>
            <Text style={{ margin: 5, fontSize: 15, fontWeight: "400",marginTop:15 }}>
              OR
            </Text>
            <View
              style={{ flexDirection: "row", alignContent:'space-between'}}
            >
              <FontAwesome name="facebook-square" size={35} color="#1e90ff" style={{margin:5,marginBottom:10}}/>
              <FontAwesome name="google-plus-square" size={35} color="#dc143c" style={{margin:5,marginBottom:10}}/>
              <FontAwesome name="twitter" size={35} color="#87cefa" style={{margin:5,marginBottom:10}}/>
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  wrapperInput: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#5f9ea0",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    padding: 10,
    width: "100%",
    backgroundColor: "#f5f5f5",
  },
  wrapperIcon: {
    position: "absolute",
    right: 0,
    padding: 10,
  },
  icon: {
    width: 30,
    height: 24,
  },
  button: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fbc8f",
    borderRadius: 5,
    marginTop: 25,
  },
  buttonDisable: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a9a9a9",
    borderRadius: 5,
    marginTop: 25,
  },
  text: {
    color: "white",
    fontWeight: "700",
  },
  textFailed: {
    alignSelf: "flex-end",
    color: "red",
  },
});
