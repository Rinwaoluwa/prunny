import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg';
import Icon from '@/assets/svgs/icons';
import { heightPixel, normalise } from '@/config/normalise';

interface NetworkProvider {
  id: number;
  name: "mtn" | "glo" | "9-mobile" | "glo";
  icon: "mtn" | "glo" | "9-mobile" | "glo";
}

interface NetworkDropdownProps {
  providers: NetworkProvider[];
  selectedProvider: NetworkProvider | null;
  onSelectProvider: (provider: NetworkProvider) => void;
}

const NetworkDropdown: React.FC<NetworkDropdownProps> = ({
  providers,
  selectedProvider,
  onSelectProvider,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectProvider = (provider: NetworkProvider) => {
    onSelectProvider(provider);
    setIsOpen(false);
  };

  const renderProvider = ({ item }: { item: NetworkProvider }) => (
    <TouchableOpacity
      style={styles.providerItem}
      onPress={() => handleSelectProvider(item)}
    >
      <Icon name={item.icon} size={normalise(24)} />
      <Text style={styles.providerName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdown} onPress={toggleDropdown}>
        {selectedProvider ? (
          <>
            <Icon name={selectedProvider.icon} size={normalise(24)} />
            <Text style={styles.selectedProviderName}>{selectedProvider.name.toUpperCase()}</Text>
          </>
        ) : (
          <Text style={styles.placeholderText}>Select Network</Text>
        )}
        <Ionicons name={isOpen ? "chevron-up" : "chevron-down"} size={normalise(24)} color="#333" />
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.dropdownList}>
          <FlatList
            data={providers}
            renderItem={renderProvider}
            keyExtractor={(item) => String(item.id)}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  selectedProviderName: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#333',
  },
  placeholderText: {
    flex: 1,
    fontSize: 16,
    color: '#999',
  },
  dropdownList: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    marginTop: 4,
    maxHeight: 200,
    zIndex: 999,
  },
  providerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    height: heightPixel(42)
  },
  providerName: {
    marginLeft: 12,
    fontSize: 16,
    color: '#333',
  },
});

export default NetworkDropdown;