import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills([...mySkills, newSkill]);
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Bem vindo, Jackson!</Text>
        <TextInput
          style={styles.input}
          placeholder="Nova Skill"
          placeholderTextColor="#bababa"
          onChangeText={setNewSkill}
        />

        <Button onPress={handleAddNewSkill}/>

        <Text style={[styles.title, { marginVertical: 25 }]}>
          Minhas Skills
        </Text>

        {mySkills.map((skill) => (
          <SkillCard skill={skill}/>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#122741",
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#f0f0f0",
    color: "#000000",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});
