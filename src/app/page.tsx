'use client'

import Fourem from "@/components/Fourem";
import Stories from "@/components/Stories";
import { useState } from "react";

type ComponentName = 'Fourem' | 'Stories';

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState<ComponentName>('Fourem');

  const handleComponentChange = (component: ComponentName) => {
    if (selectedComponent !== component) {
      setSelectedComponent(component);
    }
  };

  return (
    <div>
      <div className="hidden lg:block md:hidden sm:hidden">        
        <div className="flex flex-col lg:flex-row">
          <Fourem/>
          <Stories/>
        </div>
      </div>
      <div className="hidden lg:hidden md:block max-md:block">
      <div className="flex flex-row">
        <button
          className={`flex-1 px-4 py-2 border-b-4 ${selectedComponent === 'Fourem' ? 'border-red-600 bg-blue-900' : 'border-black bg-blue-800'} text-white`}
          onClick={() => handleComponentChange('Fourem')}
        >
          Discussion Fourem
        </button>
        <button
          className={`flex-1 px-4 py-2 border-b-4 ${selectedComponent === 'Stories' ? 'border-red-600 bg-blue-900' : 'border-black bg-blue-800'} text-white`}
          onClick={() => handleComponentChange('Stories')}
        >
          Market Stories
        </button>
      </div>

        <div className="flex flex-col">
          {selectedComponent === 'Fourem' ? <Fourem/> : <Stories/> }
        </div>
      </div>
    </div>
  );
}
