import React from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export default function SplitView() {
  return (
    <div className="h-screen w-full border" style={{ minHeight: '800px' }}>
      <PanelGroup direction="horizontal">
        {/* Left Section (Tree View) */}
        <Panel defaultSize={30} minSize={20} maxSize={50} className="p-2 border-r">
          <div className="bg-blue-100 h-full flex flex-col justify-center items-center">
            <div>Tree View Here</div>
            <input type="text" placeholder="Enter text here" className="mt-2 p-1 border" />
          </div>
        </Panel>

        {/* Resizable Handle */}
        <PanelResizeHandle className="w-2 bg-gray-400 cursor-col-resize" style={{ backgroundColor: 'gray', width: '5px' }} />

        {/* Right Section (Table View) */}
        <Panel defaultSize={70} minSize={50} className="p-2">
          <div className="bg-green-100 h-full flex flex-col justify-center items-center">
            <div>Table View Here</div>
            <input type="text" placeholder="Enter text here" className="mt-2 p-1 border" />
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
}
