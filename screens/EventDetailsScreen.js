import { useContext } from 'react';
import { Text, Button, Image, StyleSheet, ScrollView } from 'react-native';
import { FavoritesContext } from '../context/FavoritesContext';

const EventDetailsScreen = ({ route }) => {
  const { event } = route.params;
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);
  const isFavorited = favorites.some(e => e.id === event.id);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: event.image }} style={styles.image} />
      <Text style={styles.title}>{event.title}</Text>
      <Text>{event.date} at {event.time}</Text>
      <Text>{event.location}</Text>
      <Text style={styles.description}>{event.description}</Text>
      <Button
        title={isFavorited ? "Remove from Favorites" : "Add to Favorites"}
        onPress={() =>
          isFavorited ? removeFromFavorites(event.id) : addToFavorites(event)
        }
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    marginVertical: 10,
  },
});

export default EventDetailsScreen;
