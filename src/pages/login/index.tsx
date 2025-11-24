import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";

export default function Login() {
  const navigation = useNavigation<any>();

  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    // Aqui você pode colocar validação (se quiser)
    // if (!cpf || !senha) alert("Preencha os campos!");

    // 👇 Manda o usuário para a Home com o menu inferior
    navigation.navigate("HomeTabs");
  };

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>MK HEALTH</Text>

      <TextInput
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        style={styles.input}
        placeholderTextColor="#777"
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        style={styles.input}
        placeholderTextColor="#777"
      />

      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={styles.forgot}>Esqueci a senha.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar →</Text>
      </TouchableOpacity>

    </View>
  );
}
