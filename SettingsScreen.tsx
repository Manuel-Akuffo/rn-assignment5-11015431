// SettingsScreen.tsx
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; 

const SettingsScreen: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const navigation = useNavigation();

  const toggleTheme = () => setIsDarkTheme(previousState => !previousState);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate}>
        <Text style={styles.optionText}>Language</Text>
        <Icon name="chevron-forward" size={20} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate}>
        <Text style={styles.optionText}>My Profile</Text>
        <Icon name="chevron-forward" size={20} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate}>
        <Text style={styles.optionText}>Contact Us</Text>
        <Icon name="chevron-forward" size={20} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate}>
        <Text style={styles.optionText}>Change Password</Text>
        <Icon name="chevron-forward" size={20} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate}>
        <Text style={styles.optionText}>Privacy Policy</Text>
        <Icon name="chevron-forward" size={20} color="#000" />
      </TouchableOpacity>
      <View style={styles.themeOption}>
        <Text style={styles.optionText}>Theme</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkTheme ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleTheme}
          value={isDarkTheme}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  option: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  optionText: {
    fontSize: 18,
  },
  themeOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default SettingsScreen;
