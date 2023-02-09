import { useState } from "react";
import {
  View,
  ScrollView,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { TextInput, Text } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { User } from "../../data/Data";

export const SignInScreen = ({ visible, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  // const checkPasswordValidity = (value) => {
  //   const wrongEmail = email==User.Email;
  //   if(!wrongEmail.test(value)){
  //     return "Please check your email again."
  //   }
  //   const wrongPassword = password==User.Password;
  //   if(!wrongPassword.test(value)){
  //     return "Please check your password again."
  //   }
  // };
  const user = { Email: "PP@g.com", Password: "Pass1234//" };
  const handleLoginuser = () => {
    if (email == user.Email && password == user.Password) {
      console.log("godd");
      navigation.navigate("Homey");
    } else {
      console.log("bad");
      Alert.alert("something wrong !!!", "Please Check Email or Password", [
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
            <FontAwesome name="user-circle" size={100} color="#8fbc8f" />
            <Text
              style={{
                fontSize: 40,
                fontWeight: "bold",
                color: "#006400",
                textAlign: "center",
              }}
            >
              Login
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
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "800",
                textAlign: "center",
                margin: 2,
                color:'#8fbc8f'
              }}
            >
            Don't Have a Account? |  Register 
            </Text>
          </TouchableOpacity>
          {email == "" || password == "" || checkValidEmail == true ? (
            <TouchableOpacity
              disabled
              style={styles.buttonDisable}
              onPress={handleLoginuser}
            >
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleLoginuser}>
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
          )}
          <View style={{ justifyContent: "center", alignItems: "center",marginBottom:50}}>
            <Text
              style={{
                margin: 5,
                fontSize: 15,
                fontWeight: "400",
                marginTop: 15,
              }}
            >
              OR
            </Text>
            <View
              style={{ flexDirection: "row", alignContent: "space-between" }}
            >
              <FontAwesome
                name="facebook-square"
                size={35}
                color="#1e90ff"
                style={{ margin: 5 }}
              />
              <FontAwesome
                name="google-plus-square"
                size={35}
                color="#dc143c"
                style={{ margin: 5 }}
              />
              <FontAwesome
                name="twitter"
                size={35}
                color="#87cefa"
                style={{ margin: 5 }}
              />
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
