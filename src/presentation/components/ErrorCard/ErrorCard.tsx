import React, { FC } from "react";
import {
  StyleSheet,
  Text,
} from "react-native";


interface ErrorCardProps {
  text: string;
}

export const ErrorCard: FC<ErrorCardProps> = ({ text }) => {
  return (
    <Text style={styles.text}>
      { text }
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#D92626",
    backgroundColor: "pink",
    borderRadius: 10,
    padding: 16,
    marginTop: 10,
    fontWeight: "500",
    fontSize: 16
  }
});