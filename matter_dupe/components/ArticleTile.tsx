import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import {Pressable, StyleSheet, Text, View, Image} from 'react-native';

type ArticleTileProps = {
    title: string;
    imageURI: string;
    vibe: string;
    readingTime: number;
    newsletterName: string;
    onPress: () => void;
};

export function ArticleTile({ title, imageURI, vibe, readingTime, newsletterName, onPress }: ArticleTileProps) {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <View style={styles.left}>
                <View style={styles.metaRow}>
                    <Text style={styles.source}>{newsletterName}</Text>
                    <Text style={styles.readTime}>{readingTime} MIN</Text>
                </View>
                <Text style={styles.title}>{title}</Text>

            </View>
            <View style={styles.right}>
                <Text style={styles.vibe}>{vibe}</Text>
                <View style={styles.thumbWrap}>
                {imageURI ? (
                    <Image source={{ uri: imageURI }} style={styles.thumb} />
                ) : (
                    <View style={[styles.thumb, styles.thumbPlaceholder]} />
                )}
                </View>
            </View>

        </Pressable>
       
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent: 'center',
        padding: 16,
        marginBottom: 16,
        borderRadius: 8,
        backgroundColor:'#fff',
    },
    left: {
        flex:1,
        paddingRight: 12
    },
    right: {
        alignContent: 'flex-end',
        justifyContent: 'space-between',
    },
    source: {
        fontSize: 10,
        letterSpacing: 0.8,
        color: "#222",
        fontWeight: "600",
        maxWidth: 180,
    },
    readTime: {
        fontSize: 10,
        letterSpacing: 0.8,
        color: "#d01702ff", 
        fontWeight: "700",
    },
    vibe: {
        fontSize: 11,
        color: "#555",
        marginBottom: 10,
    },
    metaRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 6,
    },
    thumbWrap: {
        width: 48,
        height: 48,
        borderRadius: 10,
        overflow: "hidden",
    },
    title: {
        fontSize: 18,
        lineHeight: 22,
        color: "#111",
        fontWeight: "500",
    },
    thumb: {
        width: "100%",
        height: "100%",
    },
    thumbPlaceholder: {
        backgroundColor: "#fff",
    },
});


