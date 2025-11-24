import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';

export default function TelaExames({ navigation }: any) {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons 
          name="arrow-back" 
          size={26} 
          color="#fff" 
          onPress={() => navigation.goBack()} 
        />
        <Text style={styles.headerTitle}>Histórico de Exames</Text>
      </View>

      {/* Card - Exame Concluído */}
      <View style={styles.card}>
        <Text style={styles.examTitle}>Exame de Sangue</Text>
        <Text style={styles.examDate}>14 setembro, 2021</Text>

        <View style={styles.statusRow}>
          <Ionicons name="checkmark-circle" size={20} color="#3CB371" />
          <Text style={styles.statusDone}>Concluído</Text>

          <TouchableOpacity style={styles.pdfButton}>
            <Ionicons name="document-text-outline" size={18} color="#000" />
            <Text style={styles.pdfButtonText}>Baixar PDF</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Card - Em Andamento */}
      <View style={styles.card}>
        <Text style={styles.examTitle}>Exame de Urina</Text>
        <Text style={styles.examDate}>14 setembro, 2021</Text>

        <View style={styles.statusRow}>
          <Ionicons name="time" size={20} color="#FFA500" />
          <Text style={styles.statusProgress}>Em andamento</Text>
        </View>
      </View>

      {/* Card - Pendente */}
      <View style={styles.card}>
        <Text style={styles.examTitle}>Exame TSH</Text>
        <Text style={styles.examDate}>14 setembro, 2021</Text>

        <View style={styles.statusRow}>
          <Ionicons name="alert-circle" size={20} color="#DC143C" />
          <Text style={styles.statusPending}>Pendente</Text>
        </View>
      </View>

    </ScrollView>
  );
}
