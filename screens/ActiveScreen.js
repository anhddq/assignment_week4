import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default function ActiveScreen() {
  return <ExpoConfigView />;
}

ActiveScreen.navigationOptions = {
  title: 'app.json',
};
