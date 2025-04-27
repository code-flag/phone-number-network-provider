"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyNetworkProviderAsync = exports.verifyNetworkProviderSync = void 0;
const telcos_1 = __importDefault(require("./telcos"));
const removeCountryCode = (phoneNumber) => {
    if (`${phoneNumber}`.slice(0, 3) === "234") {
        phoneNumber = `0${phoneNumber.slice(3)}`;
    }
    else if (`${phoneNumber}`.slice(0, 4) === "+234") {
        phoneNumber = `0${phoneNumber.slice(4)}`;
    }
    return phoneNumber;
};
/**
 * @function verifyNetworkProviderSync
 * @description Verifies a phone number's network synchronously
 * @returns {object} - returns a result construct
 */
const verifyNetworkProviderSync = (phoneNumber) => {
    const errors = [];
    phoneNumber = removeCountryCode(phoneNumber);
    const telcoType = telcos_1.default.find((telco) => telco.prefix === `${phoneNumber}`.slice(0, telco.prefix.length));
    const isValidLength = `${phoneNumber}`.length === 11;
    const isNumber = /^[0-9]*$/.test(phoneNumber);
    if (!telcoType) {
        errors.push('Phone number doesn\'t match a valid service provider');
    }
    if (!isValidLength) {
        errors.push('Phone number should be 11 characters long');
    }
    if (!isNumber) {
        errors.push('Invalid number character detected');
    }
    const allChecksPass = [!!telcoType, isNumber, isValidLength].every(val => val === true);
    const errorConstruct = {
        errors,
        isValid: false,
    };
    const successConstruct = {
        telco: telcoType === null || telcoType === void 0 ? void 0 : telcoType.name,
        isValid: true,
    };
    return allChecksPass ? successConstruct : errorConstruct;
};
exports.verifyNetworkProviderSync = verifyNetworkProviderSync;
/**
 * @function verifyNetworkProviderAsync
 * @description Verifies a phone number's network asynchronously
 * @returns {Promise}
 */
const verifyNetworkProviderAsync = (phoneNumber) => {
    return new Promise((resolve, reject) => {
        const result = (0, exports.verifyNetworkProviderSync)(phoneNumber);
        if (result.isValid) {
            resolve(result);
        }
        else {
            reject(result);
        }
    });
};
exports.verifyNetworkProviderAsync = verifyNetworkProviderAsync;
