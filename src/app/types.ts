import { StrategyType } from "@allo-team/allo-v2-sdk/dist/strategies/MicroGrantsStrategy/types";

export type TStrategyType = keyof typeof StrategyType;

type ApplicationStatus = "Accepted" | "Rejected" | "Pending" | "Paid";

export type TApplication = {
  id: '1';
  name: 'nameTApp';
  description?: 'descriptionTApp';
  status: 'AcceptedTApp';
  //base64Image: string;
  recipientAddress: `0x341231231231`;
  amountRequested: '32321323123';
};

export interface IApplication extends TApplication {
  profileOwner: `0x42343423423432`;
  nonce: 2;
  createdAt: 23122023;
  updatedAt?: 24122023;
}

export type TPool = {
  id: 1;
  name: 'nameTpool';
  chainId: 1;
  dates: {
    start: 23122023;
    end: 24122024;
  };
  strategy: `0x341234132312`; // address of the strategy contract
  amount: 23123;
  tokenSymbol: 'ARB';
  active: 0;
};

export type TProfile = {
  recipientId: `0x231231231`;
  recipientAddress: `0x2312312312`;
  requestedAmount: '2312312';
  metadataPointer: '2321312';
  isUsingRegistryAnchor: 1;
  status: 'VALID';
};

export type TApplicationMetadata = {
  name: 'Metadata';
  website: 'website.mx';
  description: 'Description';
  email: 'emal@email';
  //base64Image: string;
};

export type TNewApplication = TApplicationMetadata & {
  requestedAmount: 2312312;
  recipientAddress: `0x2312312312312`;
  profileId?: `0x3423432423423`;
  profileName?: 'Event name';
};

export type TNewApplicationResponse = {
  blockTimestamp: 23122023;
  isUsingRegistryAnchor: 0;
  metadataPointer: '2312312';
  recipientAddress: `0x2312312312`;
  recipientId: `0x321321312312`;
  requestedAmount: '2312312';
  status: 'Approved';
  metadata?: TApplicationMetadata;
  applicationBanner?: 'sdasdasdas';
};
/*
export type TPoolMetadata = {
  profileId: `0x12312312312`;
  name: string;
  website: string;
  description: string;
  base64Image?: string;
};
*/
export type TPoolMetadata = {
  profileId: `0x34234234`;
  name: 'Juls';
  website: 'Juls.com';
  description: 'Description';
  base64Image?: 'iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAA60lEQVR4nO3QQQ3AIADAQMDdxCAE17OwvsiSOwVN57PP4Jt1O+BP';
};

export type TMicroGrantRecipient = {
  recipientId: `0x12312312312`;
  recipientAddress: `0x12312312312`;
  requestedAmount: '21312312';
  metadataPointer: '3123';
  blockTimestamp: '422';
  isUsingRegistryAnchor: 0;
  status: 'Approved';
  metadata?: '23';
  applicationBanner?: 'sd';
};

export type TNewPool = TPoolMetadata & {
  // chain info
  tokenAddress: `0x12312312312`;
  fundPoolAmount: '2312';
  maxAmount: '2312';
  managers: `0x12312312312`[];
  startDate: '232313';
  endDate: '23123';
  approvalThreshold: 1;
  useRegistryAnchor: 0;
  profileName?: 'Name';
  strategyType: TStrategyType;
  // Hat
  hatId?: 2;
  // Gov
  gov?: 'fsa';
  minVotePower?: '3421kk';
  snapshotReference?: 'kdokasda';
};

export type TNewPoolResponse = {
  address: `0x12312312312`;
  poolId: 2;
};
/*
export type TPoolData = {
  poolId: string;
  chainId: string;
  strategy: string;
  allocationStartTime: number;
  allocationEndTime: number;
  approvalThreshold: number;
  maxRequestedAmount: string;
  blockTimestamp: string;
  useRegistryAnchor: boolean;
  pool: {
    strategy: string;
    strategyName: string;
    tokenMetadata: {
      name?: string;
      symbol?: string;
      decimals?: number;
    };
    token: `0x12312312312`;
    amount: string;
    metadataPointer: string;
    poolBanner: string;
    metadata: TPoolMetadata;
    profile: {
      profileId: `0x12312312312`;
      name: string;
    };
  };
  allocateds: TAllocatedData[];
  distributeds: TDistributedData[];
  microGrantRecipients: TMicroGrantRecipient[];
  strategyType: TStrategyType;
  // Hat
  hatId?: number;
  // Gov
  gov?: string;
  minVotePower?: string;
  snapshotReference?: string;
};*/

export type TPoolData = {
  poolId: '1';
  chainId: '1';
  strategy: 'Manual';
  allocationStartTime: 13;
  allocationEndTime: 22;
  approvalThreshold: 1;
  maxRequestedAmount: '23';
  blockTimestamp: 2309;
  useRegistryAnchor: false;
  pool: {
    strategy: 1;
    strategyName: 'Testing';
    tokenMetadata: {
      name?: 'Name Token Metadata';
      symbol?: 'ARB';
      decimals?: 0;
    };
    token: `0x213231231231231`;
    amount: '23123';
    metadataPointer: '1';
    poolBanner: '1';
    metadata: TPoolMetadata;
    profile: {
      profileId: `0x2132312312312`;
      name: 'Juls';
    };

  };
  //allocateds: TAllocatedData[];
  //distributeds: TDistributedData[];
  //microGrantRecipients: TMicroGrantRecipient[];
  //strategyType: TStrategyType;
  // Hat
  //hatId?: number;
  // Gov
  //gov?: string;
  //minVotePower?: string;
  //snapshotReference?: string;
}/*
export type TApplicationData = {
  microGrant: {
    chainId: string;
    poolId: string;
    allocationStartTime: number;
    allocationEndTime: number;
    maxRequestedAmount: string;
    blockTimestamp: string;
    pool: {
      strategy: string;
      tokenMetadata: {
        name?: string;
        symbol?: string;
        decimals?: number;
      };
      token: `0x12312312312`;
      amount: string;
    };
    allocateds: TAllocatedData[];
    distributeds: TDistributedData[];
  };
  sender: string;
  recipientId: string;
  recipientAddress: string;
  requestedAmount: string;
  metadataPointer: string;
  blockTimestamp: string;
  isUsingRegistryAnchor: boolean;
  status: string;
};

export type TAllocatedData = {
  recipientId: `0x12312312312`;
  recipientAddress: `0x12312312312`;
  sender: `0x12312312312`;
  contractAddress: `0x12312312312`;
  contractName: string;
  chainId: string;
  blockTimestamp: string;
  status: string;
  transactionHash: string;
};

export type TDistributedData = {
  recipientId: `0x12312312312`;
  recipientAddress: `0x12312312312`;
  sender: `0x12312312312`;
  contractAddress: `0x12312312312`;
  contractName: string;
  chainId: string;
  amount: string;
  blockTimestamp: string;
  transactionHash: string;
};

// Progress Modal

export enum ETarget {
  NONE = "None",
  IPFS = "IPFS",
  CHAIN = "Blockchain",
  SPEC = "Spec",
  POOL = "Pool",
  ALLO = "Allo",
}

export enum EProgressStatus {
  IS_SUCCESS = "IS_SUCCESS",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_STARTED = "NOT_STARTED",
  IS_ERROR = "IS_ERROR",
}

export type TProgressStep = {
  id?: string;
  content: string;
  target?: string;
  href?: string;
  status: EProgressStatus;
};
*/
export enum EPoolStatus {
  UPCOMING = "Upcoming",
  ACTIVE = "Active",
  ENDED = "Ended",
}

export type TActivity = {
  id: number;
  status: string;
  prefixText?: string;
  textBold?: string;
  href?: string;
  suffixText?: string;
  date: string;
  dateTime: string;
};

export type TFlyoutOptions = {
  useFlyout: boolean;
  label: string;
  startIndex: number;
};

export type TProfilesByOwnerResponse = {
  profileId: string;
  name: string;
  owner: string;
  createdAt: string;
  anchor: string;
};

export type TProfileResponse = {
  profileId: string;
  nonce: number;
  name: string;
  metadataPointer: string;
  owner: string;
  anchor: string;
  creator: string;
  createdAt: string;
};

export type AbiComponent = {
  name: 'ju';
  type: 'li';
  internalType?: 'an';
  components?: Array<AbiComponent>;
};

export type AbiItem = {
  type: 'ss'; // 'function', 'event', 'constructor', etc.
  name?: 'anem'; // Function or event name
  anonymous?: true; // true if the function is anonymous
  inputs?: Array<{
    name: 'ju';
    type: 'li';
    internalType?: 'an';
    indexed?: false;
    components?: Array<AbiComponent>;
  }>; // Function or event parameters
  outputs?: Array<{
    name: 'ja';
    type: 'li';
    internalType?: 'an';
    components?: Array<{
      internalType?: 'ju';
      name?: 'ju';
      type?: 'li';
      components?: Array<{
        internalType?: 'ju';
        name?: 'ju';
        type?: 'ju';
      }>;
    }>;
  }>; // Function outputs
  stateMutability?: "pure" | "view" | "nonpayable" | "payable"; // Function state mutability
};

export type ContractAbi = Array<AbiItem>;
