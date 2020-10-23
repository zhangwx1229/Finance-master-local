import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import JJScrollableTabView from './JJScrollableTabView';
// import MatchItemView from '../match/components/MatchItemView';

const TAG = '[VodPlayerList]';
export default class VodPlayerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lisrData: [
                {
                    clarity: 1,
                    cover: 'http://live-image.cache.jj.cn/img/3292a0e6e017c5b6d8ad440c00a5710f.png',
                    description: 'S2秋季赛八强赛第4场',
                    duration: '21537',
                    id: '933',
                    isPlay: false,
                    isStop: false,
                    kind: '64',
                    play_num: '249',
                    playlist: [
                        {
                            bitrate: '894',
                            clarity: 'sd',
                            duration: '21537',
                            fileSize: '2296.57',
                            fileUrl:
                                'http://media.jjmatch.com/Act-ss-flv-sd/c498222bf9b74546b05f9633604bf78e/2598f8cf7f1d56c6111aea3b3636b737.flv',
                            format: 'flv',
                            fps: '50',
                            height: '478',
                            width: '848',
                        },
                        {
                            bitrate: '478',
                            clarity: 'ld',
                            duration: '21537',
                            fileSize: '1227.77',
                            fileUrl:
                                'http://media.jjmatch.com/Act-ss-flv-ld/c498222bf9b74546b05f9633604bf78e/2598f8cf7f1d56c6111aea3b3636b737.flv',
                            format: 'flv',
                            fps: '50',
                            height: '360',
                            width: '640',
                        },
                        {
                            bitrate: '1906',
                            clarity: 'hd',
                            duration: '21537',
                            fileSize: '4894.37',
                            fileUrl:
                                'http://media.jjmatch.com/Act-ss-flv-hd/c498222bf9b74546b05f9633604bf78e/2598f8cf7f1d56c6111aea3b3636b737.flv',
                            format: 'flv',
                            fps: '50',
                            height: '720',
                            width: '1280',
                        },
                    ],
                    progress: 0,
                    subject: '62',
                    title: '【八强】广东N5俱乐部 VS 山西万事成',
                    uploader_avator: 'https://head.oss.jjbisai.com/2957/13/30/29571330_160.jpg',
                    uploader_nickname: 'JJ直播-视频小助手',
                },
                {
                    clarity: 1,
                    cover: 'http://live-image.cache.jj.cn/img/e69d86e2845a1aa04107585d6b972741.png',
                    description: 'S2秋季赛八强赛第1场',
                    duration: '21123',
                    id: '932',
                    isPlay: false,
                    isStop: false,
                    kind: '64',
                    play_num: '179',
                    playlist: [
                        {
                            bitrate: '893',
                            clarity: 'sd',
                            duration: '21123',
                            fileSize: '2249.14',
                            fileUrl:
                                'http://media.jjmatch.com/Act-ss-flv-sd/3fde6e12fc6e4f518f3bc4a1db457900/53578855ac9518ce568c9bbd6db91967.flv',
                            format: 'flv',
                            fps: '50',
                            height: '478',
                            width: '848',
                        },
                        {
                            bitrate: '477',
                            clarity: 'ld',
                            duration: '21123',
                            fileSize: '1202.43',
                            fileUrl:
                                'http://media.jjmatch.com/Act-ss-flv-ld/3fde6e12fc6e4f518f3bc4a1db457900/53578855ac9518ce568c9bbd6db91967.flv',
                            format: 'flv',
                            fps: '50',
                            height: '360',
                            width: '640',
                        },
                        {
                            bitrate: '1911',
                            clarity: 'hd',
                            duration: '21123',
                            fileSize: '4813.67',
                            fileUrl:
                                'http://media.jjmatch.com/Act-ss-flv-hd/3fde6e12fc6e4f518f3bc4a1db457900/53578855ac9518ce568c9bbd6db91967.flv',
                            format: 'flv',
                            fps: '50',
                            height: '720',
                            width: '1280',
                        },
                    ],
                    progress: 0,
                    subject: '62',
                    title: '【八强】山东樱花易道 VS 天津菁英荟',
                    uploader_avator: 'https://head.oss.jjbisai.com/2957/13/30/29571330_160.jpg',
                    uploader_nickname: 'JJ直播-视频小助手',
                },
                {
                    clarity: 1,
                    cover: 'http://live-image.cache.jj.cn/img/b0424c8ceb356aa7b0e1bda7b77d9025.png',
                    description: 'S2秋季赛D组8进4第一场',
                    duration: '10193',
                    id: '924',
                    isPlay: false,
                    isStop: false,
                    kind: '64',
                    play_num: '678',
                    playlist: [
                        {
                            bitrate: '1911',
                            clarity: 'hd',
                            duration: '10193',
                            fileSize: '2322.8',
                            fileUrl:
                                'http://media.jjmatch.com/Act-ss-flv-hd/0f86ea942e8b46cc8c88947da5699bd8/16e975049fb4804b6a38b1a4c20b2fe7.flv',
                            format: 'flv',
                            fps: '50',
                            height: '720',
                            width: '1280',
                        },
                        {
                            bitrate: '477',
                            clarity: 'ld',
                            duration: '10193',
                            fileSize: '580.28',
                            fileUrl:
                                'http://media.jjmatch.com/Act-ss-flv-ld/0f86ea942e8b46cc8c88947da5699bd8/16e975049fb4804b6a38b1a4c20b2fe7.flv',
                            format: 'flv',
                            fps: '50',
                            height: '360',
                            width: '640',
                        },
                        {
                            bitrate: '893',
                            clarity: 'sd',
                            duration: '10193',
                            fileSize: '1085.39',
                            fileUrl:
                                'http://media.jjmatch.com/Act-ss-flv-sd/0f86ea942e8b46cc8c88947da5699bd8/16e975049fb4804b6a38b1a4c20b2fe7.flv',
                            format: 'flv',
                            fps: '50',
                            height: '478',
                            width: '848',
                        },
                    ],
                    progress: 0,
                    subject: '62',
                    title: '【D组】天津缘梦 VS 黑龙江毅成 ',
                    uploader_avator: 'https://head.oss.jjbisai.com/2957/13/30/29571330_160.jpg',
                    uploader_nickname: 'JJ直播-视频小助手',
                },
            ],
        };
        this.isDestroy = false;
    }

    componentDidMount() { }

    componentWillUnmount() {
        this.isDestroy = true;
    }

    // renderVodView = item => {
    //     const { navigation } = this.props;
    //     return (
    //         <View style={{ alignSelf: 'center' }}>
    //             <MatchItemView item={item} navigation={navigation} />
    //         </View>
    //     );
    // };

    onRenderScene = ({ index, item, width, height, ds }) => {
        return (
            <View key={index} style={{ width, height, backgroundColor: item }}>
                <Text style={{ fontWeight: '500', fontSize: 50 }}>
                    {item}
                    {ds}
                </Text>
            </View>
        );
    };

    render() {
        return (
            <JJScrollableTabView
                listData={['blue', 'orange', 'green', 'red']} // , 'green', 'red'
                onRenderScene={this.onRenderScene}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    tabBarStyle: {
        flex: 1,
    },
    backImage: {
        flexDirection: 'row',
        width: 30,
        height: 24,
        paddingRight: 0,
        justifyContent: 'flex-end',
    },
    searchImage: {
        width: 20,
        height: 20,
        marginHorizontal: 12,
    },
});
