const getEnv = (key: string, defaultValue: string = "") => {
    const value = process.env[key];
    if (value === undefined) {
        if (defaultValue) {
            return defaultValue
        }
        throw new Error(`Cannot find the key named: ${key} or the defaultValue not provided`)
    }
    return value;
}


export default getEnv;
