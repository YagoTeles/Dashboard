import * as d3 from 'd3';
import { INNER_RADIUS, RadarGrid } from './RadarGrid';

const MARGIN = 30;
const color = [
  '#e0ac2b',
  '#e85252',
  '#6689c6',
];


export const Radar = ({ width, height, data, axisConfig ,data2}) => {
  const outerRadius = Math.min(width, height) / 2 - MARGIN;
  const allVariableNames = axisConfig.map((axis) => axis.name);
  const xScale = d3
    .scaleBand()
    .domain(allVariableNames)
    .range([0, 2 * Math.PI]);

  let yScales= {};
  axisConfig.forEach((axis) => {
    yScales[axis.name] = d3
      .scaleRadial()
      .domain([0, axis.max])
      .range([INNER_RADIUS, outerRadius]);
  });
  
  const allGroups = data.map((d) => d.name);
  
  const colorScale = d3.scaleOrdinal().domain(allGroups).range(color);

  const lineGenerator = d3.lineRadial();
  
  const allLines = data.map((series, i) => {
    const allCoordinates = axisConfig.map((axis) => {
      const yScale = yScales[axis.name];
      const angle = xScale(axis.name) ?? 0; 
      const radius = yScale(series[axis.name]);
      const coordinate = [angle, radius];
      return coordinate;
    });
    
    allCoordinates.push(allCoordinates[0]);

    const d = lineGenerator(allCoordinates);

    if (!d) {
      return;
    }

    return (
      <path
        key={i}
        d={d}
        stroke={color[i]}
        strokeWidth={3}
        fill={color[i]}
        fillOpacity={0.1}
      />
    );
  });

  return (
    <svg width={width} height={height}>
      <g transform={'translate(' + width / 2 + ',' + height / 2 + ')'}>
        <RadarGrid
          outerRadius={outerRadius}
          xScale={xScale}
          axisConfig={axisConfig}
        />
        {allLines}
      </g>
    </svg>
  );
};