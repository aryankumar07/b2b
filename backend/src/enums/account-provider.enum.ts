export const ProviderEnum = {
    GOOGLE: "GOOGLE",
    GITHUB: "GITHUB",
    FACEBOOK: "FACEBOOK",
    EMAIL: "EMAIL"
} as const;
// as const is required if to avoid an additional undefined added to the provider


export type ProviderEnumType = keyof typeof ProviderEnum;
