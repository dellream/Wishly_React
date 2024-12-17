declare module '*.scss' {
    const styles: { [className: string]: string };
    export default styles;
}

declare module '*.svg' {
    export default base64;
}

declare module '*.gif' {
    export default base64;
}

declare module '*.png' {
    export default base64;
}

declare module '*.jpg' {
    export default base64;
}

declare module '*.jpeg' {
    export default base64;
}
