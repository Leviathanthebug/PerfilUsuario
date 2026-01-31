import { View, StyleSheet } from 'react-native';
import UserHeader from './UserHeader';
import UserDetails from './UserDetails';

// Definimos el tipo del usuario
export interface Usuario {
  nombre: string;
  edad: number;
  ciudad: string;
  ocupacion: string;
}

interface UserProfileProps {
  usuario: Usuario;
}

export default function UserProfile({ usuario }: UserProfileProps) {
  return (
    <View style={styles.card}>
      <UserHeader nombre={usuario.nombre} ocupacion={usuario.ocupacion} />
      <UserDetails edad={usuario.edad} ciudad={usuario.ciudad} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});