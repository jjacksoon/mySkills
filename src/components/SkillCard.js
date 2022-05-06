import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native";

export function SkillCard({ skill }) {
  return (
    <TouchableOpacity key={skill} style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textSkill: {
    color: "#000000",
    fontSize: 22,
    fontWeight: "bold",
  },
  buttonSkill: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 10,
  },
});
