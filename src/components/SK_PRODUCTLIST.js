import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SK_PRODUCTLIST = () => {
  return (
    <div className="bg-red h-36">
      <h2>
        <Skeleton color="red" height={30} width={300} count={1} />
      </h2>
    </div>
  );
};

export default SK_PRODUCTLIST;
