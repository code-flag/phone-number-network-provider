import { verifyNetworkProviderAsync, verifyNetworkProviderSync } from '..';

describe('verifyNetworkProviderAsync', () => {
  it('should test the asynchronous validation func with a valid MTN number', async () => {
    const result: any = await verifyNetworkProviderAsync('07067443245');
    expect(result.isValid).toEqual(true);
    expect(result.telco).toEqual('MTN');
  });

  it('should test the asynchronous validation func with a valid MTN number with the country code appended', async () => {
    const result: any = await verifyNetworkProviderAsync('2349157443245');
    expect(result.isValid).toEqual(true);
    expect(result.telco).toEqual('GLO');
  });

  it('should test the asynchronous validation func with a valid MTN number with the country code appended with a plus sign', async () => {
    const result: any = await verifyNetworkProviderAsync('+2347067443245');
    expect(result.isValid).toEqual(true);
    expect(result.telco).toEqual('MTN');
  });

  it('should test the asynchronous validation func with a valid GLO number', async () => {
    const result: any = await verifyNetworkProviderAsync('08053445543');
    expect(result.isValid).toEqual(true);
    expect(result.telco).toEqual('GLO');
  });

  it('should test the asynchronous validation func with invalid characters', async () => {
    try {
      await verifyNetworkProviderAsync('0www3245');
    } catch (error: any) {  // Cast the error to 'any' type
      expect(error.isValid).toEqual(false);
      expect(error.errors.length).toEqual(3);
      expect(error.errors).toEqual([
        "Phone number doesn't match a valid service provider",
        'Phone number should be 11 characters long',
        'Invalid number character detected'
      ]);
    }
  });
});

describe('verifyNetworkProviderSync', () => {
  it('should test the synchronous validation func with a valid number', () => {
    const result = verifyNetworkProviderSync('07067443245');
    expect(result.isValid).toEqual(true);
  });

  it('should test the synchronous validation func with a valid number with the country code appended', () => {
    const result = verifyNetworkProviderSync('2347067443245');
    expect(result.isValid).toEqual(true);
  });

  it('should test the synchronous validation func with a valid number with the country code appended with a plus sign', () => {
    const result = verifyNetworkProviderSync('+2347067443245');
    expect(result.isValid).toEqual(true);
  });

  it('should test the synchronous validation func with invalid character', () => {
    const result = verifyNetworkProviderSync('07www43245');
    expect(result.isValid).toEqual(false);
  });
});
