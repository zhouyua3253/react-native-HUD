
/** 
 * 基于 react-native-root-siblings
 * npm install react-native-root-siblings --save 
 */
import {showHUDLoading, hidenHUDLoading, showHUDMessage} from './react-native-HUD/HUD'

export default class App extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this._showMessage()} style={styles.btn}>
                    <Text>show Message</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this._showLoading()} style={styles.btn}>
                    <Text>show Loading</Text>
                </TouchableOpacity>
            </View>
        );
    }

    _showMessage() {
        showHUDMessage('展示HUD提示 默认2.5s');
    }

    _showLoading() {
        showHUDLoading();

        setTimeout(() => hidenHUDLoading(), 4000);
    }
}

const styles = Style({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    btn: {
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
});