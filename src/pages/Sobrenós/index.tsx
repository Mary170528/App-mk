import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";

export default function Sobrenós({ navigation }: any) {

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Ionicons 
          name="arrow-back" 
          size={26} 
          color="#fff" 
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Sobre Nós</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>
          Somos três estudantes do curso de Análise e Desenvolvimento de Sistemas da faculdade CCI...
        </Text>

        <Text style={styles.text}>
          Assim nasceu o MK Health, um aplicativo inovador...
        </Text>

        <Text style={styles.text}>
          Nosso objetivo é oferecer uma plataforma segura, intuitiva e moderna...
        </Text>

        <Text style={styles.text}>
          Acreditamos que a tecnologia pode transformar a saúde...
        </Text>
      </View>

    </ScrollView>
  );
}
