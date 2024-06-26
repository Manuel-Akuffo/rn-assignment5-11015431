import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; 

interface MenuOption {
  label: string;
  navigateTo: keyof RootStackParamList;
}

const menuOptions: MenuOption[] = [
  { label: 'Language', navigateTo: 'LanguageScreen' },
  { label: 'My Profile', navigateTo: 'ProfileScreen' },
  { label: 'Contact Us', navigateTo: 'ContactScreen' },
  { label: 'Change Password', navigateTo: 'ChangePasswordScreen' },
  { label: 'Privacy Policy', navigateTo: 'PrivacyPolicyScreen' }
];

type RootStackParamList = {
  LanguageScreen: undefined;
  ProfileScreen: undefined;
  ContactScreen: undefined;
  ChangePasswordScreen: undefined;
  PrivacyPolicyScreen: undefined;
};

const SettingsScreen: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const toggleTheme = () => setIsDarkTheme(previousState => !previousState);

  return (
    <View style={[styles.container, isDarkTheme ? styles.darkContainer : styles.lightContainer]}>
      {menuOptions.map((option, index) => (
        <TouchableOpacity key={index} style={styles.option} onPress={() => navigation.navigate(option.navigateTo)}>
          <Text style={[styles.optionText, isDarkTheme ? styles.darkText : styles.lightText]}>{option.label}</Text>
          <Icon name="chevron-forward" size={20} color={isDarkTheme ? "#fff" : "#000"} />
        </TouchableOpacity>
      ))}
      <View style={styles.themeOption}>
        <Text style={[styles.optionText, isDarkTheme ? styles.darkText : styles.lightText]}>Theme</Text>
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
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#000',
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
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
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
