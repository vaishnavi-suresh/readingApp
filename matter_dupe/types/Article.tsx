import React from "react";

export type Article = {
    id: number;
    title: string;
    imageURI: string;
    vibe: string;
    readingTime: number;
    newsletterName: string;
    onPress: () => void;
};
