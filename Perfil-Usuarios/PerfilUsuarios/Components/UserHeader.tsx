import { View, Text, StyleSheet } from 'react-native';

interface UserHeaderProps {
  nombre: string;
  ocupacion: string;
}

export default function UserHeader({ nombre, ocupacion }: UserHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.ocupacion}>{ocupacion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
    marginBottom: 10,
  },
  nombre: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  ocupacion: {
    fontSize: 16,
    color: '#666',
  },
});