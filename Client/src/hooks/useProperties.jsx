import React from 'react';
import { isError, useQuery } from 'react-query';
import { getallproperties } from '../utils/api.js';

const useProperties = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    "allproperties",
    getallproperties,
    { refetchOnWindowFocus: false }
  );

  return {
    data,
    isError,
    isLoading,
    refetch
  };
};

export default useProperties;
