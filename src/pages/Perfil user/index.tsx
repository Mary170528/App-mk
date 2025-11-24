import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";
import { styles } from "./style";

export default function Profile() {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Ionicons name="person-circle" size={80} color="#fff" />
        <Text style={styles.name}>Joana Sousa</Text>
        <Text style={styles.cpf}>CPF: 000.000.000-00</Text>
      </View>

      <View style={styles.box}>
        <View style={styles.row}>
          <MaterialIcons name="event" size={24} color="#8B0000" />
          <Text style={styles.text}>Data de Nascimento</Text>
        </View>

        <View style={styles.row}>
          <Ionicons name="mail" size={24} color="#8B0000" />
          <Text style={styles.text}>joana.sousa@gmail.com</Text>
        </View>

        <View style={styles.row}>
          <Ionicons name="call" size={24} color="#8B0000" />
          <Text style={styles.text}>(61) 99999-9999</Text>
        </View>

        <View style={styles.row}>
          <Entypo name="location" size={24} color="#8B0000" />
          <Text style={styles.text}>Brasília - DF</Text>
        </View>

      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>

    </View>
  );
}
