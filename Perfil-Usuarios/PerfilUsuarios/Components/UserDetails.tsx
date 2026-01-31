import { View, Text, StyleSheet } from 'react-native';

interface UserDetailsProps {
  edad: number;
  ciudad: string;
}

export default function UserDetails({ edad, ciudad }: UserDetailsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        <Text style={styles.label}>Edad: </Text>{edad} años
      </Text>
      <Text style={styles.texto}>
        <Text style={styles.label}>Ciudad: </Text>{ciudad}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  texto: {
    fontSize: 16,
    color: '#333',
  },
  label: {
    fontWeight: 'bold',
  },
});