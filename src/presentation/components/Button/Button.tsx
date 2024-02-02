import React, { FC } from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";


interface ButtonProps {
  title: string;
  disabled: boolean;
  onPress: () => void;
  type?: "danger"|"secondary"
}

export const Button: FC<ButtonProps> = ({ title, disabled, onPress, type }) => {
  const buttonStyles: ViewStyle[] = [styles.button];
  const textStyles: TextStyle[] = [styles.text];

  if(type === "danger") {
    buttonStyles.push(styles.danger);
  }

  if(type === "secondary") {
    buttonStyles.push(styles.secondary);
    textStyles.push(styles.textSecondary);
  }

  if(disabled){
    buttonStyles.push(styles.disabled);
    textStyles.push(styles.disabledText);
  }
  return (
    <TouchableOpacity
      style={buttonStyles}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={textStyles}>
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
    marginVertical: 5
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  disabled: {
    backgroundColor: "#ADADAD",
    borderColor: "transparent"
  },
  disabledText: {
    color: "gray"
  },
  danger: {
    backgroundColor: "#D92626"
  },
  secondary: {
    backgroundColor: "white",
    borderColor: "#999999",
    borderWidth: 1,
  },
  textSecondary: {
    color: "#333333",
  }
});