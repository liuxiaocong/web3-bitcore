import { BitcoinBlockType as _BitcoinBlockType, BlockHeader, BlockHeaderObj } from './Block';
import {
  BitcoinAddress as _BitcoinAddress,
  BitcoinInput,
  BitcoinInputObj,
  BitcoinOutput,
  BitcoinScript as _BitcoinScript,
  BitcoinTransactionType
} from './Transaction';

export type BitcoinBlockType = _BitcoinBlockType;
export type BitcoinTransaction = BitcoinTransactionType;
export type BitcoinScript = _BitcoinScript;
export type BitcoinAddress = _BitcoinAddress;

export type TransactionOutput = BitcoinOutput;
export type TransactionInput = BitcoinInput;
export type TransactionInputObj = BitcoinInputObj;

export type BitcoinHeader = BlockHeader;
export type BitcoinHeaderObj = BlockHeaderObj;
