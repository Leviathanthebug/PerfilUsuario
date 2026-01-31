import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
import UserProfile, { Usuario } from './Components/UserProfile';

const usuarios: Usuario[] = [
  { nombre: 'María García', edad: 28, ciudad: 'Madrid', ocupacion: 'Desarrolladora Frontend' },
  { nombre: 'Carlos López', edad: 35, ciudad: 'Barcelona', ocupacion: 'Diseñador UX' },
  { nombre: 'Ana Martínez', edad: 24, ciudad: 'Valencia', ocupacion: 'Estudiante' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Perfiles de Usuario</Text>
      <ScrollView style={styles.scroll}>
        {usuarios.map((usuario, index) => (
          <UserProfile key={index} usuario={usuario} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  scroll: {
    paddingHorizontal: 20,
  },
});