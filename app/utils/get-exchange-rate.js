import { defineError } from 'ember-exex/error';

import coinmarketcap from 'npm:coinmarketcap';
import BigNumber from 'npm:bignumber.js';

export const GALILEO = Symbol.for('GALILEO');
export const NANO = Symbol.for('NANO');
export const BTC = Symbol.for('BTC');
export const USD = Symbol.for('USD');
export const EUR = Symbol.for('EUR');

export const CURRENCIES = new Set([
  NANO,
  GALILEO,
  BTC,
  USD,
  EUR,
]);

export const DEFAULT_CURRENCY = GALILEO;
export const DEFAULT_EXCHANGE_RATE = 1;

export const InvalidCurrencyError = defineError({
  name: 'InvalidCurrencyError',
  message: 'Invalid currency: {currency}',
  extends: TypeError,
});

export const RequestExchangeRateError = defineError({
  name: 'RequestExchangeRateError',
  message: 'Error requesting exchange rate',
});

export const InvalidExchangeRateError = defineError({
  name: 'InvalidExchangeRateError',
  message: 'Invalid exchange rate: {value}',
  extends: TypeError,
});

export default async function getExchangeRate(currency = DEFAULT_CURRENCY) {
  if (currency === DEFAULT_CURRENCY) {
    return DEFAULT_EXCHANGE_RATE;
  }

  if (!CURRENCIES.has(currency)) {
    throw new InvalidCurrencyError({ params: { currency } });
  }

  const value = 1;
  let exchangeRate;
  try {
    exchangeRate = BigNumber(value);
  } catch (err) {
    throw new InvalidExchangeRateError({ params: { value } }).withPreviousError(err);
  }

  return exchangeRate;
}
