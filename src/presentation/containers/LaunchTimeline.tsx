import React, { useContext, useMemo } from 'react'
import { Timeline, TTimelineItem } from '../components/Timeline';
import { Loader } from '../components/Loader';
import { LaunchTimelineContext } from '../context-api/LaunchTimelineProvider';
import {HiChevronDoubleLeft, HiChevronDoubleRight} from 'react-icons/hi'
import { IconButton } from '../components/IconButton';

export const LaunchTimeline = () => {
  const {
    launches, 
    loading, 
    launchesCurrentRange, 
    goBackwards, 
    goForwards,
    canGoBack
  } = useContext(LaunchTimelineContext)

  const launchTimelineItems = useMemo<TTimelineItem[]>(() => {
    return launches.map((launch: any) => ({
      x: new Date(launch.launch_date_utc),
      name: launch.rocket.rocket_name,
      label: `${launch.launch_site.site_name} </br> Status: ${launch.launch_success ? 'Success': 'Failure'}`,
      description: launch.details,
      color: launch.launch_success ? '#5840ec': '#f43f5e'
    }))

  }, [launches])

  return (
    <div className="shadow-lg w-full bg-white rounded-lg">
      <div className="py-2 px-6 border-b flex justify-between items-center">
        <h2 className="text-gray-600 font-bold lg:text-lg">Launches</h2>
        {!loading && !!launchTimelineItems.length && (
          <div className="flex gap-2">
            {canGoBack && (
              <IconButton
                onClick={goBackwards}
                icon={<HiChevronDoubleLeft className="text-primary" />}
              />
            )}
            <h6 className="text-xs lg:text-sm font-medium text-gray-600">
              {launchesCurrentRange}
            </h6>
            <IconButton
              onClick={goForwards}
              icon={<HiChevronDoubleRight className="text-primary" />}
            />
          </div>
        )}
      </div>
      <div className="max-h-[460px] overflow-hidden">
        {loading && (
          <div className="flex pt-12 justify-center items-center">
            <Loader />
          </div>
        )}
        {!loading && !launchTimelineItems.length && (
          <div className="flex max pt-12 justify-center items-center">
            <p className="text-gray-600">
              There are no launches with the selected filter
            </p>
          </div>
        )}
        <Timeline items={launchTimelineItems} />
        <div className="w-full flex justify-center pb-4 gap-4">
          <div className="flex gap-1 items-center">
            <span className="w-2 h-2 bg-red-500 rounded-full" />
            <h6 className="text-xs">Failed launch</h6>
          </div>
          <div className="flex gap-1 items-center">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <h6 className="text-xs">Successful launch</h6>
          </div>
        </div>
      </div>
    </div>
  );
}