import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, TouchableHighlight, StyleSheet } from "react-native";
const sliderData = [{
  heading: "Lorem ipsum",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.tortor lectus tempus lacus."
}, {
  heading: "Lorem ipsum 1",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.tortor lectus tempus lacus 1."
}, {
  heading: "Lorem ipsum 2",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.tortor lectus tempus lacus 2."
}];

const Onboarding = () => {
  return <Slider data={sliderData} onFinish={() => {}} />;
};

export default Onboarding;

const Slider = props => {
  const navigation = useNavigation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleOnPress = () => {
    const tmpCurrentSlide = currentSlide + 1;

    if (tmpCurrentSlide === props.data.length) {
      props.onFinish();
      return;
    }

    setCurrentSlide(tmpCurrentSlide);
  };

  return <View style={styles.container}>
      <View style={styles.onboardingArea}><Pressable onPress={() => {
        navigation.navigate("signup");
      }}><Text style={styles.yUBulYEy}>Create an account
      </Text></Pressable></View>
      <View style={styles.topHead}>
        <Text style={styles.mainHeading}>{props.data[currentSlide].heading}</Text>
      </View>
      <Text style={styles.paraHeading}>{props.data[currentSlide].description}</Text>

      <View style={styles.dots}>
        {props.data.map((item, index) => <View style={currentSlide === index ? styles.selectedDot : styles.dot} key={index}></View>)}
      </View>

      <Pressable onPress={() => {
      navigation.navigate("login");
    }}><View style={styles.continueButton}>
        <Button onPress={handleOnPress} style={styles.continueBtn}>Continue</Button>
      </View></Pressable>
      {currentSlide > 0 && <TouchableOpacity onPress={props.onFinish}><Text style={styles.skipText}>Skip</Text></TouchableOpacity>}

    </View>;
};

const styles = StyleSheet.create({
  topHead: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: "18%"
  },
  mainHeading: {
    fontSize: 44,
    fontWeight: "600"
  },
  container: {
    padding: 20,
    height: "100%",
    backgroundColor: "#FFF"
  },
  onboardingArea: {
    height: "50%"
  },
  paraHeading: {
    fontSize: 16,
    textAlign: "center"
  },
  dots: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "10%"
  },
  selectedDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#000000",
    margin: 3
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    margin: 3
  },
  continueButton: {
    paddingLeft: 15,
    paddingRight: 15
  },
  skipText: {
    textAlign: "center",
    paddingTop: 20,
    fontSize: 18,
    fontWeight: "600"
  },
  HPgZBLKA: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  yUBulYEy: {
    width: 138,
    height: 48,
    lineHeight: 14,
    fontSize: 15,
    borderRadius: 0,
    color: "#000000",
    position: "absolute",
    left: 0,
    top: 0,
    textAlign: "center"
  }
});

const Button = props => {
  return <TouchableHighlight onPress={props.onPress} underlayColor='#DDDDDD'>
      <View style={[btnStyles.button, {
      backgroundColor: props.backgroundColor ? props.backgroundColor : "#000000",
      height: props.height ? props.height : 49,
      borderWidth: props.borderWidth ? props.borderWidth : 0,
      borderColor: props.borderColor ? props.borderColor : "#000000"
    }]}>
        <Text style={[btnStyles.text, {
        color: props.color ? props.color : "#ffffff"
      }]}>{props.children}</Text>
      </View>
    </TouchableHighlight>;
};

const btnStyles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  text: {
    fontWeight: "bold",
    fontSize: 15
  }
});