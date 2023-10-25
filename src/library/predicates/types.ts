import { IBSAFEAuth } from '../api/auth/types';
import { IListTransactions } from '../api/predicates';
import { ITransferAsset } from '../assets';
import { IPayloadTransfer, Transfer } from '../transfers';

export interface IConfVault {
    HASH_PREDUCATE?: number[];
    SIGNATURES_COUNT: number;
    SIGNERS: string[];
    network: string;
    chainId: number;
}

export interface ITransferList {
    [id: string]: Transfer;
}

export interface IInstanceNewTransfer {
    assets: ITransferAsset[];
    witnesses: string[];
}

export interface IPayloadVault {
    configurable: IConfVault;
    name?: string;
    description?: string;
    transactionRecursiveTimeout?: number;
    abi?: string;
    bytecode?: string;
    BSAFEAuth?: IBSAFEAuth;
    BSAFEVaultId?: string;
}

export interface IVault {
    getAbi: () => { [name: string]: unknown };
    getBin: () => string;
    getConfigurable: () => IConfVault;
    BSAFEGetTransactions: (params?: IListTransactions) => Promise<Transfer[]>;
    BSAFEIncludeTransaction: (params: IPayloadTransfer | string) => Promise<Transfer>;
}
