import React from 'react'
import { LaunchpadSelector } from '../../../presentation/containers/LaunchpadSelector';
import { LaunchTimeline } from '../../../presentation/containers/LaunchTimeline';
import { MapSelectLaunchpads } from '../../../presentation/containers/MapSelectLaunchpads';
import { MetricCardsContainer } from '../../../presentation/containers/MetricCardsContainer';
import { LaunchpadContext, LaunchpadProvider } from '../../../presentation/context-api/LaunchpadProvider';
import { LaunchTimelineProvider } from '../../../presentation/context-api/LaunchTimelineProvider';

export const LaunchesDashboardScreen = () => {
  return (
    <LaunchpadProvider>
      <div className="bg-primary h-[100vh] overflow-y-auto w-full grid lg:grid-cols-[50px,1fr] grid-cols-[10px,1fr]">
        <nav />
        <div className="bg-background-slate pb-8 flex flex-col rounded-tl-[40px] pt-28 px-4 lg:px-20">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <h1 className="font-bold text-3xl lg:text-4xl text-black">
                SpaceX Launches
              </h1>
              <div className="w-[300px]">
                <LaunchpadSelector />
              </div>
            </div>
            <h3 className="text-gray-500 hidden lg:block text-md font-medium">
              <LaunchpadContext.Consumer>
                {({ selectedLaunchpadOption }) =>
                  selectedLaunchpadOption?.label || "Launchpads world wide"
                }
              </LaunchpadContext.Consumer>
            </h3>
          </div>
          <div className="py-8">
            <MetricCardsContainer />
          </div>
          <div className="grid w-full gap-6 grid-cols-1 lg:grid-cols-[350px,1fr]">
            <MapSelectLaunchpads />
            <LaunchTimelineProvider>
              <LaunchTimeline />
            </LaunchTimelineProvider>
          </div>
        </div>
      </div>
    </LaunchpadProvider>
  );
};