
import { useQuery } from '@apollo/client';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { TLaunch } from '../../domain/entities/launch';
import { LaunchpadContext } from './LaunchpadProvider';
import { QUERY_GET_LAUNCHS } from './launchsQuery';
import { format } from 'date-fns'

export type TLaunchTimelineState = {
  loading: boolean
  launches: TLaunch[]
  launchesCurrentRange?: string
  goBackwards: () => void
  goForwards: () => void
  canGoBack?: boolean

}

export type TLaunchTimelineProviderProps = {
  children: JSX.Element
}

const initialState: TLaunchTimelineState = {
  loading: false,
  launches: [],
  goBackwards: () => null,
  goForwards: () => null,
}


export const LaunchTimelineContext = React.createContext<TLaunchTimelineState>(initialState)

export const LaunchTimelineProvider = ({children}: TLaunchTimelineProviderProps) => {
  const {selectedLaunchpadOption} = useContext(LaunchpadContext)
  const [resultsPerPage, setResultsPerPage] = useState<number>(10)
  const [pageNumber, setPageNumber] = useState<number>(0)

  const offset = useMemo(() => {
    return resultsPerPage * pageNumber
  }, [resultsPerPage, pageNumber])

  useEffect(() => {
    setPageNumber(0)
  }, [selectedLaunchpadOption])

  const {data, loading} = useQuery<{ launches: TLaunch[] }>(QUERY_GET_LAUNCHS, { variables: {
    launchpad_id: selectedLaunchpadOption?.value,
    limit: resultsPerPage,
    offset,
  }})

  const goBackwards = useCallback(() => setPageNumber((page) => page + 1), [])
  const goForwards = useCallback(() => setPageNumber((page) => Math.max(page - 1, 0)), [])

  const canGoBack = useMemo(() => {
    if (!data?.launches) return false;
    return data.launches.length === resultsPerPage
  }, [data?.launches, resultsPerPage])

  const launchesCurrentRange = useMemo<string|undefined>(() => {
    if (!data?.launches?.length) return undefined

    const firstLaunch = new Date(data.launches[0].launch_date_utc)
    const lastLaunch = new Date(data.launches[data.launches.length - 1].launch_date_utc)
    const calendarFormat = 'dd LLL y'

    return `${format(lastLaunch, calendarFormat)} to ${format(firstLaunch, calendarFormat)}`

  }, [data?.launches])

  return (
    <LaunchTimelineContext.Provider
      value={{
        loading,
        launchesCurrentRange,
        launches: data?.launches || [],
        goBackwards,
        goForwards,
        canGoBack
      }}
    >
      {children}
    </LaunchTimelineContext.Provider>
  );
}