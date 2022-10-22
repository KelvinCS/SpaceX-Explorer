import React from 'react'
import { Select } from '../components/Select'
import { LaunchTimeline } from './LaunchTimeline';
import { MapSelectLocation } from './MapSelectLocation';

export const MainScreen = () => {
  return (
    <div className="grid grid-cols-2 p-6">
      <div className="flex flex-col gap-3">
        <Select />
        <div className="rounded-md">
          <MapSelectLocation />
        </div>
      </div>
      <div className="w-full">
        <LaunchTimeline />
      </div>
    </div>
  );
}