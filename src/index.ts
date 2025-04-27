import telcos from './telcos';

interface Telco {
  prefix: string,
  name: string,
}

const removeCountryCode = (phoneNumber: string) => {
  if (`${phoneNumber}`.slice(0, 3) === "234") {
    phoneNumber = `0${phoneNumber.slice(3)}`;
  } else if (`${phoneNumber}`.slice(0, 4) === "+234") {
    phoneNumber = `0${phoneNumber.slice(4)}`;
  }
  return phoneNumber;
};

/**
 * @function verifyNetworkProviderSync
 * @description Verifies a phone number's network synchronously
 * @returns {object} - returns a result construct
 */
export const verifyNetworkProviderSync = (phoneNumber: string) => {
  const errors = [];

  phoneNumber = removeCountryCode(phoneNumber);

  const telcoType = telcos.find((telco: Telco) => telco.prefix === `${phoneNumber}`.slice(0, telco.prefix.length));
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
    telco: telcoType?.name,
    isValid: true,
  };

  return allChecksPass ? successConstruct : errorConstruct;
};

/**
 * @function verifyNetworkProviderAsync
 * @description Verifies a phone number's network asynchronously
 * @returns {Promise}
 */
export const verifyNetworkProviderAsync = (phoneNumber: string) => {
  return new Promise((resolve, reject) => {
    const result = verifyNetworkProviderSync(phoneNumber);
    if (result.isValid) {
      resolve(result);
    } else {
      reject(result);
    }
  });
};
