# react-native-HUD
### react-native的HUD，支持iOS和android,在最顶层展示,会挡住下面的组件交互

![](https://github.com/zhouyua3253/react-native-HUD/blob/master/android.gif)
![](https://github.com/zhouyua3253/react-native-HUD/blob/master/ios.gif)

安装 react-native-root-siblings 模块
####npm install react-native-root-siblings --save 

API:
####showHUDLoading(): 居中展示加载Loading,需要手动hidenHUDLoading()
####hidenHUDLoading(): 隐藏加载Loading
####showHUDMessage(tips: string): 居中展示文字 默认展示2.5s


### Examples


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

