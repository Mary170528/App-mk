import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { styles } from "./style";

export default function TelaHome() {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <Ionicons name="person-circle" size={70} color="#fff" style={{ marginRight: 15 }} />

        <View>
          <Text style={styles.welcome}>Bem Vindo</Text>
          <Text style={styles.name}>Joana Sousa</Text>
          <Text style={styles.cpf}>CPF: 000.000.000-00</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Nossos serviços</Text>

      <View style={styles.services}>
        <TouchableOpacity style={styles.serviceBox}>
          <Ionicons name="person" size={32} color="#8B0000" />
          <Text>Meu Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.serviceBox}>
          <MaterialIcons name="analytics" size={32} color="#8B0000" />
          <Text>Exames</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.serviceBox}>
          <Ionicons name="information-circle" size={32} color="#8B0000" />
          <Text>Sobre Nós</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.serviceBox}>
          <Ionicons name="call" size={32} color="#8B0000" />
          <Text>Contato</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Feedbacks</Text>

      <View style={styles.feedbackCard}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
          style={styles.feedbackImg}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.feedbackName}>Maria Rosário</Text>
          <Text style={styles.feedbackText}>
            Consegui ver certinho o resultado, muito bom!
          </Text>
          <Text style={styles.star}>⭐ 4.8 (57 reviews)</Text>
        </View>
      </View>
    </ScrollView>
  );
}
