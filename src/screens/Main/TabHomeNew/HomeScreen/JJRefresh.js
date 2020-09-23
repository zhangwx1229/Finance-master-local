import React, { PureComponent } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
type Props = {
    contentView: Function,
    footView: Function,
    headerView: Function,
    isShowFoot: Boolean,
    isShowHeader: Boolean,
};
export default class JJRefresh extends PureComponent {
    constructor(props) {
        super(props);

        this.state = { opacity: 0, isRefresh: false };
        this.offset_y = 0;
        this.scroll_style = {};
        this.isDestroy = false;
        this.header_H = 180;
        this.foot_H = 100;
        this.header_xx_H = 0;
        this.foot_xx_H = 0;
        this.contentH = 0;
    }

    componentWillUnmount() {
        this.isDestroy = true;
        if (this.scrollTimer) {
            clearInterval(this.scrollTimer);
        }
    }

    onScrollEndDrag = e => {
        if (this.scrollTimer) {
            clearInterval(this.scrollTimer);
        }
        this.scrollTimer = setInterval(() => {
            if (this.isDestroy) {
                if (this.scrollTimer) {
                    clearInterval(this.scrollTimer);
                }
                return;
            }

            if (this.contentH < this.scroll_style.height) {
                if (this.scrollRef) {
                    if (this.scrollTimer) {
                        clearInterval(this.scrollTimer);
                    }
                    this.scrollRef.scrollTo({
                        y: this.header_H + this.header_xx_H,
                        animated: true,
                    });
                }
            } else {
                const scrollFoot =
                    this.contentH -
                    (this.scroll_style.height - this.foot_H) +
                    this.header_H -
                    this.foot_H -
                    this.foot_xx_H;
                if (this.scrollRef) {
                    if (this.offset_y < this.header_H + this.header_xx_H) {
                        if (this.scrollTimer) {
                            clearInterval(this.scrollTimer);
                        }
                        this.scrollRef.scrollTo({
                            y: this.header_H + this.header_xx_H,
                            animated: true,
                        });
                    } else if (this.offset_y > scrollFoot) {
                        if (this.scrollTimer) {
                            clearInterval(this.scrollTimer);
                        }
                        this.scrollRef.scrollTo({
                            y: scrollFoot,
                            animated: true,
                        });
                    }
                }
            }
        }, 50);
    };

    onLayout = e => {
        const { height, width } = e.nativeEvent.layout;
        if (!this.scroll_style.width) {
            if (this.scrollRef) {
                if (this.offset_y < this.header_H) {
                    this.scrollRef.scrollTo({
                        y: this.header_H + this.header_xx_H,
                        animated: false,
                    });
                }
            }
            this.scroll_style = { height, width };
        }
    };

    onLayoutHeader = e => {
        const { height } = e.nativeEvent.layout;
        if (this.props.isShowHeader === false) {
            this.header_xx_H = height;
        }
    };

    onLayoutContent = e => {
        let { height } = e.nativeEvent.layout;
        if (this.contentH !== height) {
            this.contentH = height;
            setTimeout(() => {
                if (this.isDestroy) {
                    return;
                }
                this.setState({ opacity: 1, isRefresh: !this.state.isRefresh });
            });
        } else {
        }
    };

    onLayoutFoot = e => {
        const { height } = e.nativeEvent.layout;
        if (this.props.isShowFoot === false) {
            this.foot_xx_H = height;
        }
    };

    getContentContainerStyle = () => {
        const style = this.scroll_style.width
            ? {
                  width: this.scroll_style.width,
                  height:
                      this.contentH > this.scroll_style.height
                          ? this.contentH +
                            this.header_H +
                            this.foot_H +
                            this.header_xx_H +
                            this.foot_xx_H
                          : this.scroll_style.height +
                            this.header_H +
                            this.foot_H +
                            this.header_xx_H +
                            this.foot_xx_H,
              }
            : styles.contentContainerStyle;
        return style;
    };

    ref = e => {
        this.scrollRef = e;
    };

    onScroll = e => {
        const { contentOffset } = e.nativeEvent;
        this.offset_y = contentOffset.y;
    };

    renderScrollHeader = () => <View style={{ width: '100%', height: this.header_H }} />;

    renderScrollFoot = () => <View style={{ width: '100%', height: this.foot_H }} />;

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    ref={this.ref}
                    style={[styles.content, this.scroll_style, { opacity: this.state.opacity }]}
                    onLayout={this.onLayout}
                    contentContainerStyle={this.getContentContainerStyle()}
                    onScrollEndDrag={this.onScrollEndDrag}
                    onScroll={this.onScroll}
                    showsVerticalScrollIndicator={false}
                >
                    {this.renderScrollHeader()}

                    <View onLayout={this.onLayoutContent}>
                        <View onLayout={this.onLayoutHeader}>
                            {this.props.headerView ? this.props.headerView() : null}
                        </View>
                        {this.props.contentView ? this.props.contentView() : null}
                        <View onLayout={this.onLayoutFoot}>
                            {this.props.footView ? this.props.footView() : null}
                        </View>
                    </View>
                    {this.contentH > 0 ? null : <View style={{ height: 400 }} />}
                    {this.renderScrollFoot()}
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f4f8',
    },
    content: {
        flex: 1,
        backgroundColor: '#f5f4f8',
    },
    contentContainerStyle: {
        backgroundColor: '#f5f4f8',
    },
    click: {
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    contentBg: {
        flex: 1,
        backgroundColor: '#fff',
    },
    itemTitle: {
        color: '#333333',
        marginTop: 20,
    },
    itemDate: {
        color: '#333333',
        marginTop: 20,
        marginRight: 30,
    },
    itemDetail: {
        color: '#9D9D9D',
        marginTop: 5,
        marginRight: 30,
    },
});

// demo
// {
//     /* <JJRefresh
//     isShowFoot={true}
//     isShowHeader={false}
//     footView={() => <View style={{ width: 200, height: 50, backgroundColor: 'blue' }} />}
//     headerView={() => <View style={{ width: 200, height: 50, backgroundColor: 'red' }} />}
//     contentView={() => <View style={{ width: 200, height: 50, backgroundColor: 'red' }} />}
// />; */
// }
