import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from '@/assets/svgs/icons';
import { heightPixel, normalise, pixelSizeHorizontal, pixelSizeVertical } from '@/config/normalise';
import { palette } from '@/config/palette';
import { AppText } from './AppText';
import { FLEX } from '@/config/constants';
import { IconName } from '@/assets/svgs/types';

interface Props {
  id: number;
  name: string;
  icon?: string;
}

interface DropdownProps {
  providers: Props[];
  selectedProvider: Props | null;
  onSelectProvider: (provider: Props) => void;
  placeholder?: string;
  dropdownListStyle?: ViewStyle;
  dropdownStyle?: ViewStyle;
}

const Dropdown: React.FC<DropdownProps> = ({
  providers,
  selectedProvider,
  onSelectProvider,
  placeholder = "Select Network",
  dropdownListStyle,
  dropdownStyle,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectProvider = (provider: Props) => {
    onSelectProvider(provider);
    setIsOpen(false);
  };

  const renderProvider = ({ item }: { item: Props }) => (
    <TouchableOpacity
      style={styles.providerItem}
      onPress={() => handleSelectProvider(item)}
    >
      {item.icon && <Icon name={item.icon as IconName} size={normalise(24)} />}
      <AppText fontFamily='regular' color='primary--1' style={styles.providerName}>
        {item.name.toUpperCase()}
      </AppText>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.dropdown, dropdownStyle]} onPress={toggleDropdown}>
        {selectedProvider ? (
          <>
            {selectedProvider.icon && <Icon name={selectedProvider.icon as IconName} size={normalise(24)} />}
            <AppText fontFamily='regular' color='primary--1' fontSize={16} style={[FLEX, styles.selectedProviderName]}>
              {selectedProvider.name.toUpperCase()}
            </AppText>
          </>
        ) : (
          <AppText fontFamily='regular' color='primary--1' fontSize={16} style={FLEX}>
            {placeholder}
          </AppText>
        )}
        <Ionicons name={isOpen ? "chevron-up" : "chevron-down"} size={normalise(24)} color="#333" />
      </TouchableOpacity>

      {isOpen && (
        <View style={[styles.dropdownList, dropdownListStyle]}>
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
    marginTop: pixelSizeVertical(10),
    marginBottom: pixelSizeVertical(20),
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: normalise(12),
    borderWidth: normalise(1),
    borderColor: palette['primary--2'],
    borderRadius: normalise(8),
    backgroundColor: palette['white'],
  },
  selectedProviderName: {
    marginLeft: pixelSizeHorizontal(12),
  },
  dropdownList: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: palette['white'],
    borderWidth: normalise(1),
    borderColor: '#E0E0E0',
    borderRadius: normalise(8),
    marginTop: pixelSizeVertical(4),
    maxHeight: heightPixel(200),
    zIndex: 999,
  },
  providerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: normalise(12),
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    height: heightPixel(42)
  },
  providerName: {
    marginLeft: pixelSizeHorizontal(12),
  },
});

export default Dropdown;