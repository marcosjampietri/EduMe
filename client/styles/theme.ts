export type ThemeType = typeof dark; // This is the type definition for my theme object.

export const dark = {
    primary: "hsla(340, 100%, 50%, 1)",
    text: "#fff",
    background: "hsla(263, 39%, 10%, 1)",
};

export const light: ThemeType = {
    primary: "#f45581",
    text: "#000",
    background: "#fff",
};

const theme = dark; // set the dark theme as the default.
export default theme;
