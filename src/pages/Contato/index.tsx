import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";

export default function Contato({ navigation }: any) {

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <Ionicons 
          name="arrow-back" 
          size={26} 
          color="#fff" 
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Contato</Text>
      </View>

      {/* MAPA JÁ LINKADO AQUI */}
      <Image 
        source={require("../../assets/map.png")}
        style={styles.map}
      />

      <View style={styles.infoBox}>
        <Ionicons name="location" size={22} color="#8B0000" />
        <Text style={styles.infoText}>QS 05, Lote 22, Avenida Areal, Taguatinga</Text>
      </View>

      <View style={styles.infoBox}>
        <Ionicons name="call" size={22} color="#8B0000" />
        <Text style={styles.infoText}>(61) 99570-5870</Text>
      </View>

      <View style={styles.infoBox}>
        <Ionicons name="mail" size={22} color="#8B0000" />
        <Text style={styles.infoText}>contato@santalucia.com.br</Text>
      </View>

    </ScrollView>
  );
}
