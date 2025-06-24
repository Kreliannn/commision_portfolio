
export const getIcon = ( tech: string ) => {
    return `/tech/${tech}.jpg`
};


export function truncateString(str : string) {
    const maxLength = 150;
    const suffix = "........";
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength - suffix.length) + suffix;
}
