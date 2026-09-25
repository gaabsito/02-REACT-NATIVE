import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>¡Bienvenido!</Text>
        <Text style={styles.subtitle}>Diseño de interfaces con React Native</Text>
        <View style={styles.button}>
          <Text style={styles.buttonText}>COMENZAR</Text>
        </View>
      </View>

      <View style={[styles.card, styles.cardVariant]}>
        <Text style={[styles.title, styles.titleVariant]}>¡Bienvenido!</Text>
        <Text style={[styles.subtitle, styles.subtitleVariant]}>
          Diseño de interfaces con React Native
        </Text>
        <View style={[styles.button, styles.buttonVariant]}>
          <Text style={styles.buttonText}>COMENZAR</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#eef2f7',
  },
  card: {
    backgroundColor: 'white',
    padding: 28,
    borderRadius: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
  },
  button: {
    marginTop: 24,
    backgroundColor: '#2563eb',
    padding: 15,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cardVariant: {
    marginTop: 24,
    backgroundColor: '#f0fdf4',
  },
  titleVariant: {
    color: '#14532d',
  },
  subtitleVariant: {
    color: '#166534',
  },
  buttonVariant: {
    backgroundColor: '#15803d',
  },
});
