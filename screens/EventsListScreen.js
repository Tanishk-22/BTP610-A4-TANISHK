import { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import { db } from '../config/FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import EventCard from '../components/EventCards';

const EventsListScreen = ({ navigation }) => {
  const [events, setEvents] = useState([]);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  useEffect(() => {
    const fetchEvents = async () => {
      const snapshot = await getDocs(collection(db, 'events'));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEvents(data);
    };
    fetchEvents();
  }, []);

  const styles = getStyles(isDark);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EventCard
            event={item}
            onPress={() => navigation.navigate('EventDetail', { event: item })}
          />
        )}
      />
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Favorites')}
        >
          <Text style={styles.buttonText}>Go to Favorites</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const getStyles = (isDark) =>
  StyleSheet.create({
    container: {
      paddingTop: StatusBar.currentHeight,
      flex: 1,
      backgroundColor: isDark ? '#121212' : '#fff',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 10,
      backgroundColor: isDark ? '#1e1e1e' : '#f9f9f9',
    },
    button: {
      backgroundColor: '#1E90FF',
      padding: 12,
      borderRadius: 8,
      marginHorizontal: 10,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });

export default EventsListScreen;
