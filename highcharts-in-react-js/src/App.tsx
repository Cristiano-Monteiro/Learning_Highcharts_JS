import './Global.css';

import VennDiagram from './Charts/VennDiagram/VennDiagram';
import TreegraphChart from './Charts/TreegraphChart/TreegraphChart';
import DependencyWheel from './Charts/DependencyWheel/DependencyWheel';
import TreegraphBoxLayout from './Charts/TreegraphBoxLayout/TreegraphBoxLayout';

import TiledWebMap from './Charts/Maps/TiledWebMap/TiledWebMap';
import MapWithMarkerClusters from './Charts/Maps/MapWithMarkerClusters/MapWithMarkerClusters';

export default function App() {
  return (
    <>
      <h1>teste</h1>
      <VennDiagram/>
      <TreegraphChart/>
      <DependencyWheel/>
      <TreegraphBoxLayout/>
      <TiledWebMap/>
      <MapWithMarkerClusters/>
    </>
  )
};