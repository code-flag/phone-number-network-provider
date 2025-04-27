/**
 * @function verifyNetworkProviderSync
 * @description Verifies a phone number's network synchronously
 * @returns {object} - returns a result construct
 */
export declare const verifyNetworkProviderSync: (phoneNumber: string) => {
    telco: string | undefined;
    isValid: boolean;
} | {
    errors: string[];
    isValid: boolean;
};
/**
 * @function verifyNetworkProviderAsync
 * @description Verifies a phone number's network asynchronously
 * @returns {Promise}
 */
export declare const verifyNetworkProviderAsync: (phoneNumber: string) => Promise<unknown>;
