/**
 * Created by zhou on 16/5/28.
 *
 * 在index.js 引入一次即可 全局都能访问
 * import './Config'
 */

console.disableYellowBox = true;

import React, {
    Component,
    PropTypes
} from 'react';

import {
    AppRegistry,
    BackAndroid,
    Dimensions,
    PixelRatio,
    Platform,
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView,
    ListView,
    Alert,
    TextInput,
    Navigator,
    Linking
} from 'react-native';

global.React = React;
global.Component = Component;
global.PropTypes = PropTypes;

global.AppRegistry = AppRegistry;
global.BackAndroid = BackAndroid;
global.Platform = Platform;
global.Text = Text;
global.View = View;
global.Image = Image;
global.TouchableOpacity = TouchableOpacity;
global.TouchableHighlight = TouchableHighlight;
global.ScrollView = ScrollView;
global.ListView = ListView;
global.Alert = Alert;
global.TextInput = TextInput;
global.Navigator = Navigator;
global.Linking = Linking;


/**
 * 屏幕宽高 像素密度
 */
global.WIDTH = Dimensions.get('window').width;
global.HEIGHT = Dimensions.get('window').height;
global.SCALE = PixelRatio.get();
global.ONE_PIXEL = 1 / SCALE;

/**
 * https://github.com/knowbody/react-native-platform-stylesheet
 * npm install react-native-platform-stylesheet
 * 分平台创建样式
 */
import { create } from 'react-native-platform-stylesheet';
global.Style = create;

/** 
 * https://github.com/magicismight/react-native-root-siblings  * 
 * npm install react-native-root-siblings --save 
 */
import {showHUDLoading, hidenHUDLoading, showHUDMessage} from './View/react-native-HUD/HUD'
/**
 * 弹出HUDLoading 挡住下面的控件交互
 */
global.showHUDLoading = showHUDLoading;
/**
 * 隐藏HUDLoading
 */
global.hidenHUDLoading = hidenHUDLoading;
/**
 * 文字提示HUD message: string 默认2.5秒
 */
global.showHUDMessage = showHUDMessage;


/**
 * 控制台输出
 */
import Reactotron from 'reactotron'
const options = {
    name: 'React Demo',
    server: '192.168.197.12',
    enabled: __DEV__,
    userAgent: Platform.OS
};
Reactotron.connect(options);

function log(...args) {
    for (let arg of args) {
        Reactotron.log(arg);
    }
}
global.log = log;


/**
 * https://github.com/sunnylqm/react-native-storage/blob/master/README-CHN.md
 * npm install react-native-storage --save
 * 本地持久存储
 */
import Storage from 'react-native-storage';
const storage = new Storage({
    defaultExpires: null // 永不过期
});

/**
 * 将键值对本地把保存
 * @param key    键
 * @param value  值
 */
function localSave(key: string, value: any) {
    storage.save({
        key: key, // 不要在key中使用_下划线符号
        rawData: value
    })
}
global.localSave = localSave;
/**
 * 本地取出保存的键值对
 * @param key            键
 * @param defaultValue   缺省值
 * @param finish         取得值之后的回调
 */
function localGet(key: string, defaultValue: any, finish: Function = (value: any) => {}) {
    storage.load({
        key: key,
        autoSync: false // 在没有找到数据或数据过期时不调用相应的同步方法
    }).then(value => finish(value)).catch(_ => finish(defaultValue));
}
global.localGet = localGet;
/**
 * 删除保存的键值对
 * @param key
 */
function localRemove(key: string) {
    storage.remove({
        key: key
    })
}
global.localRemove = localRemove;
