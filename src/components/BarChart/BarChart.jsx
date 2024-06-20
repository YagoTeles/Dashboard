import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data, widthBox, heightBox }) => {
  const svgRef = useRef();
  let state = null

  const changeStats = (current) =>{
  
    if (current === state){
      d3.selectAll("rect.bar")
      .attr("opacity",  1 );

      d3.selectAll("text.value")
        .attr("opacity", 1);

      d3.selectAll("text.label")
        .attr("opacity", 1);
        state = null
      }
      
    else {
      d3.selectAll("rect.bar")
      .attr("opacity", d => (current === d.label ? 1 : 0.3));

      d3.selectAll("text.value")
        .attr("opacity", d => (current === d.label ? 1 : 0.3));

      d3.selectAll("text.label")
        .attr("opacity", d => (current === d.label ? 1 : 0.3));
        state = current
    }
  }
  useEffect(() => {
    if (!data || data.length === 0) return;
    d3.selectAll('rect').remove()
    d3.selectAll('text.value').remove()
    d3.selectAll('text.label').remove()
    const margin = { top: 20, right: 30, bottom: 40, left: 20 },
      width = widthBox - margin.left - margin.right - 30,
      height = heightBox - margin.top - margin.bottom;

    const sorted = [...data].sort((a, b) => d3.descending(a.value, b.value));

    const svg = d3.select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleLinear()
      .domain([0, d3.max(sorted, d => d.value)])
      .range([0, width]);

    const y = d3.scaleBand()
      .domain(sorted.map(d => d.label))
      .range([0, height])
      .padding(0.3);

    const colorScale = d3.scaleLinear()
      .domain([0, 1])
      .range(["lightblue", "darkblue"]);

    svg.selectAll("rect")
      .data(sorted)
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", d => y(d.label))
      .attr("width", d => x(d.value))
      .attr("height", y.bandwidth())
      .attr("fill", d => colorScale(d.value))
      .attr("class", "bar")
      .on("click", (event, d) => {
        changeStats(d.label)
      });

    svg.selectAll("text.value")
      .data(sorted)
      .enter()
      .append("text")
      .attr("class", "value")
      .attr("x", d => x(d.value) + 5)
      .attr("y", d => y(d.label) + y.bandwidth() / 2 + 3)
      .text(d => d.value)
      .attr("fill", "black")
      .attr("font-size", "10px");

    svg.selectAll("text.label")
      .data(sorted)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("x", -5)
      .attr("y", d => y(d.label) + y.bandwidth() / 2 + 3)
      .text(d => d.label)
      .attr("text-anchor", "end")
      .attr("fill", "black")
      .attr("font-size", "10px");

  }, [data]);
  return (
    <svg ref={svgRef}></svg>
  );
};

export default BarChart;
