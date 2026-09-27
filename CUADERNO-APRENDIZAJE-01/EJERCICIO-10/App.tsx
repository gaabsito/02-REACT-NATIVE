import { ScrollView, StyleSheet, Text, View } from 'react-native';

// Datos de ejemplo: no proceden de sensores ni de una cuenta real.
const steps = 7540;
const goal = 10000;
const progress = Math.min(100, Math.round((steps / goal) * 100));

export default function App() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.greeting}>¡Vamos a movernos!</Text>
      <Text style={styles.user}>Gabriel 👋</Text>
      <Text style={styles.subtitle}>Cada paso cuenta</Text>

      <View style={styles.goalCard}>
        <Text style={styles.goalLabel}>TU META DE HOY</Text>
        <Text style={styles.steps}>{steps.toLocaleString('es-ES')}</Text>
        <Text style={styles.goalDetail}>pasos de {goal.toLocaleString('es-ES')}</Text>
        <View
          style={styles.progressBackground}
          accessibilityRole="progressbar"
          accessibilityLabel="Objetivo diario de pasos"
          accessibilityValue={{ min: 0, max: 100, now: progress }}
        >
          <View style={[styles.progress, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.percentage}>{progress}% completado · ¡Sigue así!</Text>
      </View>

      <Text style={styles.sectionTitle}>Tu día en cifras</Text>
      <View style={styles.grid}>
        <StatCard icon="🔥" value="610 kcal" label="Energía" />
        <StatCard icon="⏱" value="55 min" label="Tiempo activo" />
        <StatCard icon="❤️" value="69 lpm" label="Pulso" />
        <StatCard icon="📍" value="6,3 km" label="Recorrido" />
      </View>

      <Text style={styles.sectionTitle}>Últimos entrenamientos</Text>
      <Activity icon="🏃" title="Carrera suave" detail="Parque · 4,5 km" duration="30 min" />
      <Activity icon="🚲" title="Paseo en bici" detail="Ciudad · 8 km" duration="25 min" />
      <Activity icon="🧘" title="Estiramientos" detail="Movilidad y recuperación" duration="10 min" />
      <Text style={styles.note}>Datos de demostración</Text>
    </ScrollView>
  );
}

function StatCard({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statIcon}>{icon}</Text>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function Activity({ icon, title, detail, duration }: {
  icon: string; title: string; detail: string; duration: string;
}) {
  return (
    <View style={styles.activity}>
      <Text style={styles.activityIcon}>{icon}</Text>
      <View style={styles.activityInfo}>
        <Text style={styles.activityTitle}>{title}</Text>
        <Text style={styles.activityDetail}>{detail}</Text>
      </View>
      <Text style={styles.duration}>{duration}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f3ff' },
  content: { paddingHorizontal: 20, paddingTop: 60, paddingBottom: 40 },
  greeting: { color: '#6b7280', fontSize: 17 },
  user: { fontSize: 32, fontWeight: 'bold', color: '#2e1065', marginTop: 4 },
  subtitle: { color: '#6b7280', marginTop: 4, marginBottom: 24 },
  goalCard: { backgroundColor: '#4c1d95', padding: 24, borderRadius: 22 },
  goalLabel: { color: '#ede9fe', fontWeight: 'bold' },
  steps: { marginTop: 12, color: 'white', fontSize: 44, fontWeight: 'bold' },
  goalDetail: { color: '#ede9fe' },
  progressBackground: {
    height: 10, backgroundColor: '#6d28d9', borderRadius: 5,
    marginTop: 24, overflow: 'hidden',
  },
  progress: { height: '100%', backgroundColor: '#fbbf24' },
  percentage: { color: '#ede9fe', marginTop: 10 },
  sectionTitle: { marginTop: 28, marginBottom: 12, fontSize: 22, fontWeight: 'bold', color: '#2e1065' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: 12 },
  statCard: { width: '48%', backgroundColor: 'white', borderRadius: 16, padding: 16 },
  statIcon: { fontSize: 28 },
  statValue: { marginTop: 12, fontSize: 21, fontWeight: 'bold', color: '#4c1d95' },
  statLabel: { marginTop: 4, color: '#6b7280' },
  activity: {
    flexDirection: 'row', alignItems: 'center', gap: 10,
    backgroundColor: 'white', padding: 14, borderRadius: 15, marginBottom: 10,
  },
  activityIcon: { fontSize: 24 },
  activityInfo: { flex: 1 },
  activityTitle: { fontWeight: 'bold', color: '#2e1065' },
  activityDetail: { marginTop: 4, color: '#6b7280', fontSize: 12 },
  duration: { fontWeight: 'bold', color: '#5b21b6', fontSize: 12 },
  note: { textAlign: 'center', marginTop: 16, color: '#6b7280', fontSize: 12 },
});
