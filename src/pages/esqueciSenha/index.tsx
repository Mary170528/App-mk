import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";

export default function ForgotPassword() {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>← Esqueci a senha</Text>
      </TouchableOpacity>

      <Text style={styles.text}>
        Informe seu e-mail para receber as instruções de recuperação de senha.
      </Text>

      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholderTextColor="#777"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

    </View>
  );
}
