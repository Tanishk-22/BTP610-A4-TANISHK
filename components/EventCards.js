import { View, Text, Image, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

const EventCard = ({ event, onPress }) => {
  const isDark = useColorScheme() === 'dark';

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: event.image }} style={styles.image} />
        <View style={[styles.overlay, isDark && styles.overlayDark]}>
          <Text style={[styles.title, isDark && styles.textDark]}>{event.title}</Text>
          <Text style={[styles.details, isDark && styles.textDark]}>
            {event.date} @ {event.location}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 12,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  imageWrapper: {
    position: 'relative',
    height: 200,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 12,
  },
  overlayDark: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  details: {
    fontSize: 14,
    color: '#ddd',
    marginTop: 4,
  },
  textDark: {
    color: '#fff',
  },
});

export default EventCard;
