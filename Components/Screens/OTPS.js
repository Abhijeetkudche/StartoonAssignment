import { StyleSheet, Text, View,ToastAndroid } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
const { height, width } = Dimensions.get("window");

const OTPS = () => {
    

    return (
        <ScrollView>
          <View style={styles.MainView}>
            <Text style={styles.Heading}>Enter Code</Text>
            <Text style={styles.NormalText}>
              We have sent an SMS on +91 9970544210 with 4 digits verification code
            </Text>
    
            <View style={styles.OTPTextInputView}>
              <OTPInputView
                style={{ width: "80%", height: 50, marginBottom:20}}
                pinCount={4}
                // autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                
              />
              <TouchableOpacity
                style={styles.SubmitButton}>
                <Text style={styles.NormalText}> Submit</Text>
              </TouchableOpacity>
            </View>
            <Text style={[styles.NormalText,{marginTop:20}]}>Did not receive the code</Text>
            <Text style={[styles.NormalText,{position:'absolute', bottom:height*0.15,color:'red'}]}>Did not receive the code</Text>
          </View>
        </ScrollView>
      );
    };
    
    export default OTPS;
    
    const styles = StyleSheet.create({
      MainView: {
        minHeight: height,
        width: width,
        backgroundColor: "rgb(1,46,87)",
        alignItems: "center",
        justifyContent: "center",
      },
      Heading: {
        fontSize: 30,
        fontWeight: "600",
        lineHeight: 40,
        color: "#fff",
        marginBottom: height*0.1,
      },
      NormalText: {
        fontSize: 15,
        fontWeight: "600",
        color: "#fff",
        textAlign: "center",
        width: width * 0.8,
      },
      OTPTextInputView: {
        width: width * 0.8,
        height: height * 0.2,
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
      },
      SubmitButton: {
        height: 50,
        width: 150,
        backgroundColor: "rgb(240,151,31)",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
      },
      borderStyleHighLighted: {
        borderColor: "rgb(1,46,87)",
      },
    
      underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
      },
    
      underlineStyleHighLighted: {
        borderColor: "rgb(1,46,87)",
      },
    });

