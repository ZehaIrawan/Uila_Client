import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SK_PRODUCTLIST = () => {
  const skeletonNumber = 6;

  return (
    <div className="px-8 sm:px-24 md:px-16 py-5">
      <div className="flex justify-end my-6 w-2/3 sm:w-64">
        <div>
          <Skeleton width={200} height={25} />
        </div>
      </div>

      <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid gap-8">
        {[...Array(skeletonNumber)].map((e, i) => (
          <div>
            <SkeletonTheme color="#eeeeee">
              <Skeleton className="rounded-lg" height={220}></Skeleton>
              <Skeleton width={150} className="mt-4"></Skeleton>
              <Skeleton count={2} className="mt-4" />
            </SkeletonTheme>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SK_PRODUCTLIST;
