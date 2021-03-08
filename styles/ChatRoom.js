import { StyleSheet } from 'react-native';
import RN from 'react-native';

const SCREEN_HEIGHT = RN.Dimensions.get('window').height;

export const styles = StyleSheet.create({
    image: {
        width: SCREEN_HEIGHT * 0.9,
        height: SCREEN_HEIGHT * 0.9,
        borderRadius: 180
    }
});
