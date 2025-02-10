import React from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export default function SplitView() {
  return (
    <div className="h-screen w-full border">
      <PanelGroup direction="horizontal">
        {/* Left Section (Tree View) */}
        <Panel defaultSize={30} minSize={20} maxSize={50} className="p-2 border-r">
          <div className="bg-gray-100 h-full flex justify-center items-center">
            Tree View Here
          </div>
        </Panel>

        {/* Resizable Handle */}
        <PanelResizeHandle className="w-2 bg-gray-400 cursor-col-resize" />

        {/* Right Section (Table View) */}
        <Panel defaultSize={70} minSize={50} className="p-2">
          <div className="bg-gray-50 h-full flex justify-center items-center">
            Table View Here
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
}
