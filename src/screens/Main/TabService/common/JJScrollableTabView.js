import React from 'react';
import { View, ScrollView } from 'react-native';

const TAG = '[JJScrollableTabView]';

type Props = {
    isLoop: Boolean, //是否无限循环
    isHorizontal: Boolean,
    listData: Array,
    onRenderScene: item => void,
};
export default class JJScrollableTabView extends React.Component<Props> {
    constructor(props) {
        super(props);
        const { listData, isLoop, isHorizontal } = props;
        this.isLoop = false;
        this.horizontal = false;
        if (isLoop && isLoop === true) {
            this.isLoop = true;
        }
        if (isHorizontal && isHorizontal === true) {
            this.horizontal = false;
        }
        this.scrollRef = null;
        this.state = { isTmp: false, viewList: [listData[0], listData[1], listData[2]] };
        this.isDragDown = false;
        this.offsetIndex = 0;
        this.offsetStart = 0;
        this.currentIndex = 0;
        this.isQuick = false;
        this.isScroll = false;
        this.w = 0;
        this.h = 0;
        this.page = 0;
        this.tmpData = null;
        this.isNochange = false; //是否要改变
        this.isBoundary = false; //是否到边界了
    }

    componentDidMount() {
        if (this.isLoop) {
            setTimeout(() => {
                this.resetCenter();
            }, 1000);
        }
    }

    componentWillUnmount() {}

    goNext = () => {
        this.isDragDown = true;
        this.startScroll(true);
    };

    goPrevious = () => {
        this.isDragDown = false;
        this.startScroll(true);
    };

    scrollCenter = () => {
        this.currentIndex = 1;
        if (this.horizontal) {
            this.scrollTo(this.w);
        } else {
            this.scrollTo(this.h);
        }
    };

    scrollFirst = () => {
        this.currentIndex = 0;
        this.scrollTo(0);
    };

    scrollLast = () => {
        this.currentIndex = 2;
        if (this.horizontal) {
            this.scrollTo(this.w * 2);
        } else {
            this.scrollTo(this.h * 2);
        }
    };

    scrollTo = (offset, animated = false) => {
        if (this.scrollRef) {
            if (this.horizontal) {
                this.scrollRef.scrollTo({ x: offset, animated });
            } else {
                this.scrollRef.scrollTo({ y: offset, animated });
            }
        }
    };

    pageSelect = isAdd => {
        if (isAdd) {
            this.page += 1;
        } else {
            this.page -= 1;
        }

        const { listData } = this.props;
        if (this.page >= listData.length) {
            if (this.isLoop) {
                this.page = 0;
            }
        } else if (this.page < 0) {
            if (this.isLoop) {
                this.page = listData.length - 1;
            }
        }
    };

    scrollIndex = () => {
        if (this.isDragDown === false) {
            this.pageSelect(false);
            if (this.currentIndex === 2) {
                this.scrollCenter();
            } else if (this.currentIndex === 1) {
                this.scrollFirst();
            } else {
                this.scrollLast();
            }
        } else {
            this.pageSelect(true);
            if (this.currentIndex === 0) {
                this.scrollCenter();
            } else if (this.currentIndex === 1) {
                this.scrollLast();
            } else {
                this.scrollFirst();
            }
        }
    };

    startScroll = isQuick => {
        this.isQuick = isQuick;
        this.isScroll = false;
        if (isQuick) {
            this.scrollIndex();
        } else {
            if (this.horizontal) {
                if (this.offsetIndex < this.w * 0.5 || this.offsetIndex > this.w * (1 + 0.5)) {
                    this.scrollIndex();
                } else {
                    this.isNochange = true;
                    this.scrollTo(this.w, true);
                }
            } else if (this.offsetIndex < this.h * 0.5 || this.offsetIndex > this.h * (1 + 0.5)) {
                this.scrollIndex();
            } else {
                this.isNochange = true;
                this.scrollTo(this.h, true);
            }
            this.isScroll = true;
        }
    };

    newResetCenter = () => {
        if (this.isBoundary) {
            this.isBoundary = false;
            return;
        }
        if (!this.state.isTmp) {
            this.setState({ isTmp: true }, () => {
                this.centerTimer = setInterval(() => {
                    let off = this.h;
                    if (this.horizontal) {
                        off = this.w;
                    }
                    if (this.offsetIndex === off) {
                        if (this.centerTimer) {
                            clearInterval(this.centerTimer);
                        }
                        setTimeout(() => {
                            this.setState({ isTmp: false });
                        }, 1000);
                    } else {
                        this.scrollCenter();
                    }
                }, 10);
                this.resetCenter();
            });
        }
    };

    resetCenter = () => {
        this.isScroll = false;
        if (this.horizontal) {
            this.scrollTo(this.w);
            this.scrollTo(this.w, true);
        } else {
            this.scrollTo(this.h);
            this.scrollTo(this.h, true);
        }
        const { listData } = this.props;
        if (this.isLoop) {
            if (this.page === 0) {
                this.setState({
                    viewList: [
                        listData[listData.length - 1],
                        listData[this.page],
                        listData[this.page + 1],
                    ],
                });
            } else if (this.page === listData.length - 1) {
                this.setState({
                    viewList: [listData[this.page - 1], listData[this.page], listData[0]],
                });
            } else {
                this.setState({
                    viewList: [
                        listData[this.page - 1],
                        listData[this.page],
                        listData[this.page + 1],
                    ],
                });
            }
        } else {
            if (this.page !== 0 && this.page !== listData.length - 1) {
                this.setState({
                    viewList: [
                        listData[this.page - 1],
                        listData[this.page],
                        listData[this.page + 1],
                    ],
                });
            }
        }
    };

    ref = e => {
        this.scrollRef = e;
    };

    onLayout = e => {
        const { width, height } = e.nativeEvent.layout || {};
        this.w = width;
        this.h = height;
        this.setState({});
    };

    onScrollBeginDrag = event => {
        if (this.horizontal) {
            const { x } = event.nativeEvent.contentOffset; // 滑动距离
            this.offsetStart = x;
        } else {
            const { y } = event.nativeEvent.contentOffset; // 滑动距离
            this.offsetStart = y;
        }
    };

    onScroll = event => {
        if (this.horizontal) {
            const { x } = event.nativeEvent.contentOffset; // 滑动距离
            this.offsetIndex = x;
            if (this.isScroll && this.isQuick === false) {
                if (x > this.w * 2 - 5 || x < 5 || (x > this.w - 2.5 && x < this.w + 2.5)) {
                    if (this.isNochange) {
                        this.isNochange = false;
                    } else {
                        this.newResetCenter();
                    }
                }
            }
        } else {
            const { y } = event.nativeEvent.contentOffset; // 滑动距离
            this.offsetIndex = y;
            if (this.isScroll && this.isQuick === false) {
                if (y > this.h * 2 - 5 || y < 5 || (y > this.h - 2.5 && y < this.h + 2.5)) {
                    if (this.isNochange) {
                        this.isNochange = false;
                    } else {
                        this.newResetCenter();
                    }
                }
            }
        }
    };

    onScrollEndDrag = event => {
        let index = 0;
        let offIndex = 0;
        let offset = 0;
        let isQuick = false;
        const { x, y } = event.nativeEvent.contentOffset; // 滑动距离
        if (this.horizontal) {
            offIndex = x;
            offset = this.w;
            isQuick = Math.abs(event.nativeEvent.velocity.x) > 2;
        } else {
            offIndex = y;
            offset = this.h;
            isQuick = Math.abs(event.nativeEvent.velocity.y) > 2;
        }

        if (this.isLoop) {
            if (this.offsetStart < offIndex) {
                this.isDragDown = true;
                index = 2;
            } else {
                this.isDragDown = false;
            }

            this.tmpData = {
                index: this.state.viewList[index],
                item: this.state.viewList[index],
                ds: 'jdskk',
                width: this.w,
                height: this.h,
            };
            this.startScroll(isQuick);
        } else {
            if (this.offsetStart === offIndex) {
                this.isBoundary = true;
                if (this.offsetStart === 0) {
                    console.debug('====到头了=====', this.offsetStart, offIndex);
                } else if (this.offsetStart === 2 * offset) {
                    console.debug('====到低了=====', this.offsetStart, offIndex);
                }
            } else {
                if (this.offsetStart < offIndex) {
                    this.isDragDown = true;
                    if (this.page === this.props.listData.length - 2) {
                        this.isBoundary = true;
                        index = 1;
                    } else {
                        index = 2;
                    }
                    // if (condition) {
                    // }
                    // index = 2;
                } else {
                    this.isDragDown = false;
                    if (this.page === 1) {
                        this.isBoundary = true;
                    }
                }
                this.tmpData = {
                    index: this.state.viewList[index],
                    item: this.state.viewList[index],
                    ds: 'jdskk',
                    width: this.w,
                    height: this.h,
                };
                console.debug('====到头了==ss===', this.page, this.state.viewList, index);
                this.startScroll(isQuick);
            }
        }
    };

    onMomentumScrollEnd = () => {
        if (this.isQuick) {
            this.newResetCenter();
        }
    };

    renderView = () => {
        const { onRenderScene } = this.props;
        const { viewList } = this.state;
        const viewArr = [];
        for (let i = 0; i < 3; i += 1) {
            viewArr.push(
                onRenderScene({ index: i, item: viewList[i], width: this.w, height: this.h }),
            );
        }
        return viewArr;
    };

    renderTmpView = () => {
        const { onRenderScene } = this.props;
        // return null;
        return onRenderScene(this.tmpData);
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    ref={this.ref}
                    overScrollMode="always"
                    horizontal={this.horizontal}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={true}
                    contentContainerStyle={
                        this.horizontal
                            ? { width: this.w * 3, height: this.h }
                            : { width: this.w, height: this.h * 3 }
                    }
                    onLayout={this.onLayout}
                    onScrollBeginDrag={this.onScrollBeginDrag}
                    onScrollEndDrag={this.onScrollEndDrag}
                    scrollEventThrottle={16}
                    onScroll={this.onScroll}
                    onMomentumScrollEnd={this.onMomentumScrollEnd}
                >
                    {this.renderView()}
                </ScrollView>
                {this.state.isTmp ? (
                    <View style={{ position: 'absolute' }}>{this.renderTmpView()}</View>
                ) : null}
            </View>
        );
    }
}
