import { useContext } from 'react';
import { View, Text, FlatList, Button, Alert, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { FavoritesContext } from '../context/FavoritesContext';
import EventCard from '../components/EventCards';

const FavoritesScreen = ({ navigation }) => {
  const { favorites, removeFromFavorites, clearFavorites } = useContext(FavoritesContext);

  const confirmClear = () => {
    Alert.alert("Clear All?", "Are you sure you want to remove all favorites?", [
      { text: "Cancel" },
      { text: "Yes", onPress: clearFavorites }
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EventCard
            event={item}
            onPress={() => navigation.navigate('EventDetail', { event: item })}
            onRemove={() => removeFromFavorites(item.id)}
          />
        )}
      />
      {favorites.length > 0 && <Button title="Clear All Favorites" onPress={confirmClear} />}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Events')}>
          <Text style={styles.buttonText}>Back to Events</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FavoritesScreen;
