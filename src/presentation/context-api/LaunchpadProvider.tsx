import { useQuery } from '@apollo/client';
import React, { useMemo, useState } from 'react'
import { TLaunchpad } from '../../domain/entities/launchpad';
import { TSelectOption } from '../../domain/entities/selectOption';
import { QUERY_GET_LAUNCHPADS } from './launchpadsQuery';

export type TLaunchpadState = {
  launchpads: TLaunchpad[]
  loading: boolean
  selectedLaunchpadOption?: TSelectOption
  selectedLaunchpadInfo?: TLaunchpad
  setSelectedLaunchpadOption: (option: TSelectOption) => void
}

export type TLaunchpadProviderProps = {
  children: JSX.Element;
}

const initialState: TLaunchpadState = {
  launchpads: [],
  loading: false,
  setSelectedLaunchpadOption: () => null
}

export const LaunchpadContext = React.createContext<TLaunchpadState>(initialState)

export const LaunchpadProvider = ({children}: TLaunchpadProviderProps) => {
  const {data, loading, error} = useQuery<{ launchpads: TLaunchpad[] }>(QUERY_GET_LAUNCHPADS)
  const [selectedLaunchpadOption, setSelectedLaunchpadOption] = useState<TSelectOption>()

  const selectedLaunchpadInfo = useMemo<TLaunchpad | undefined>(() => {
    return data?.launchpads.find(({ id }) => id === selectedLaunchpadOption?.value)
  }, [selectedLaunchpadOption, data])

  return (
    <LaunchpadContext.Provider 
      value={{ 
        loading,
        selectedLaunchpadInfo,
        selectedLaunchpadOption,
        setSelectedLaunchpadOption,
        launchpads: data?.launchpads || [],
      }}
    >
      {children}
    </LaunchpadContext.Provider>
  )
}