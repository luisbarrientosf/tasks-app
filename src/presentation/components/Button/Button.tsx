import React, { FC } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";


interface ButtonProps {
  title: string;
  disabled: boolean;
  onPress: () => void;
}

export const Button: FC<ButtonProps> = ({ title, disabled, onPress }) => {
  const buttonStyles: ViewStyle[] = [styles.button];
  if(disabled){
    buttonStyles.push(styles.disabled);
  }
  return (
    
    <TouchableOpacity
      style={buttonStyles}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>
        { title }
      </Text>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    height: 48,
    width: "100%",
    backgroundColor: "#2692D9",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  disabled: {
    backgroundColor: "#ADADAD"
  }
});