import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    setMySkills([...mySkills, newSkill]);
  }
  
  useEffect(() => {
    const currentHour = new Date().getHours() - 2;
    console.log(currentHour);
    if(currentHour < 12){
      setGreeting('Bom dia');
    }else if(currentHour >= 12 && currentHour < 18){
      setGreeting('Boa tarde');
    }else{
      setGreeting('Boa noite');
    }
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Bem vindo, Jackson!</Text>
        <Text style={styles.greetings}>{greeting}</Text>
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

        <FlatList
          data={mySkills}   
          keyExtractor={item => item}
          renderItem={({item}) => (
            <SkillCard skill={item}/>
          )}
        />
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
  greetings:{
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5
  }
});
