import { StyleSheet } from 'react-native';
import RN from 'react-native';

const SCREEN_HEIGHT = RN.Dimensions.get('window').height;

export const styles = StyleSheet.create({
    image: {
        width: SCREEN_HEIGHT * 0.1,
        height: SCREEN_HEIGHT * 0.1,
        borderRadius: 180
    }
});
