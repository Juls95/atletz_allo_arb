"use client";
import { EPoolStatus, TPoolData } from "@/app/types";
import {
  classNames,
  getPoolStatus,
  getStrategyTypeFromStrategyName,
  humanReadableAmount,
  prettyTimestamp,
  statusColorsScheme,
} from "@/utils/common";
import Link from "next/link";
import Banner from "../shared/Banner";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { useEffect, useRef, useState } from "react"; 

const PoolCard = ({ pool }: { pool: TPoolData }) => {

  const containerRef = useRef(null);
  const [isTextOverflowing, setIsTextOverflowing] = useState(false);
/*  const poolDetail = pool.pool;
  const metadata = poolDetail.metadata;

  const poolStatus: EPoolStatus = getPoolStatus(
    pool.allocationStartTime,
    pool.allocationEndTime,
  );

  const tokenMetadata = poolDetail.tokenMetadata;
  const amount = humanReadableAmount(poolDetail.amount, tokenMetadata.decimals);
  const maxRequestedAmount = humanReadableAmount(
    pool.maxRequestedAmount,
    tokenMetadata.decimals,
  );
*/
  useEffect(() => {
    if (containerRef.current) {
      const _ref = containerRef.current as unknown as {
        scrollHeight: number;
        clientHeight: number;
      };
      const isOverflowing = _ref.scrollHeight > _ref.clientHeight;
      setIsTextOverflowing(isOverflowing);
    }
  }, ['metadata.description']);

  return (
    <Link href={`/${'pool.chainId'}/${'pool.poolId'}`}>
      <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50">
        <Banner image={'https://harlequin-gigantic-bird-154.mypinata.cloud/ipfs/Qmc7qA2edcB5LDHGKghY4VqoSiHVGVyiLD2pLwu41jU7ZQ?pinataGatewayToken=Hq-GhBZ-v7o6Z-6QmYFoJSMrAiNleHTdAj-va55o_jKyD9QlCG6Hofn2EtNMJCwA&_gl=1*setjum*_ga*MjEwNDk0NzgwNS4xNzA0OTE3Mjc3*_ga_5RMPXG14TE*MTcwNDkzOTQ1NC40LjEuMTcwNDkzOTQ2OC40Ni4wLjA.'} alt={'metadata.name'} minHeight="6rem"/>
      </div>
      <dl className="-my-3 divide-y divide-gray-100 px-6 py-6 text-sm leading-6">
        <div className="flex justify-between gap-x-4 py-3">
          <dt className="text-gray-500">
            {" "}
            <div className="font-semibold leading-6 text-gray-900">
              {'Julian'}
            </div>
          </dt>
          <div className="flex justify-between gap-x-4">
            <dd className="text-gray-500">
              <div
                className={classNames(
                  'Accepted',
                  "flex rounded-md py-1 px-3 text-xs font-medium ring-1 ring-inset",
                )}
              >
                {'Accepted'.toString()}
              </div>
            </dd>
          </div>
        </div>
        <div className="flex justify-between gap-x-4 py-3">
          <dt className="text-sm font-medium leading-6 text-gray-900">
            Pool Amount
          </dt>
          <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0 text-gray-500">
            {22} {'ARB' ?? "ETH"}
          </dd>
        </div>
        <div className="flex justify-between gap-x-4 py-3">
          <dt className="text-sm font-medium leading-6 text-gray-900">
            Max Allocation: 
          </dt>
          <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0 text-gray-500">
            {1000} {'ARB' ?? "ETH"}
          </dd>
        </div>
        <div className="flex justify-between gap-x-4 py-3">
          <dt className="text-sm font-medium leading-6 text-gray-900">
            Period
          </dt>

          <dd className="mt-1 text-sm leading-6 text-gray-500 sm:col-span-2 sm:mt-0">
            <time dateTime={'10/01/2024'.toString()}>
              {prettyTimestamp(22)}
            </time>
            <span className="mx-1">-</span>
            <time dateTime={'24/01/2024'.toString()}>
              {prettyTimestamp(22)}
            </time>
          </dd>
        </div>
        <div className="flex justify-between gap-x-4 py-3">
          <dt className="text-sm font-medium leading-6 text-gray-900">
            Strategy Type
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-500 sm:col-span-2 sm:mt-0">
            {getStrategyTypeFromStrategyName('pool.pool.strategyName')}
          </dd>
        </div>
        <div className="flex justify-between gap-x-4 py-3 text-gray-500">
          <div
            ref={containerRef}
            className={`text-gray-500 line-clamp-4 ${
              isTextOverflowing && "overflow-hidden"
            }`}
          >
            <ReactMarkdown
              remarkPlugins={[gfm]}
              components={{
                img: ({ node, ...props }) => null, // Skip rendering images
              }}
            >
              {'Event created to support an athlete.'}
            </ReactMarkdown>
          </div>
        </div>
      </dl>
    </Link>
  );
};

export default PoolCard;
