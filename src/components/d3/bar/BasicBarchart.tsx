'use client';
import React, { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';

const initialData = [
  { label: 'Bar 1', value: 40 },
  { label: 'Bar 2', value: 75 },
  { label: 'Bar 3', value: 60 },
];

export const BasicBarchart: React.FC = () => {
  const chartRef = useRef<SVGSVGElement>(null);
  const [bars, setBars] = useState(initialData);

  useEffect(() => {
    drawChart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bars]);

  const drawChart = (): void => {
    const svg = d3.select(chartRef.current);
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 500 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    svg.selectAll('*').remove();

    const chartGroup = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3
      .scaleBand()
      .domain(bars.map((d) => d.label))
      .range([0, width])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(bars, (d) => d.value) || 0])
      .range([height, 0]);

    // Add X-axis
    chartGroup
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    // Add Y-axis
    chartGroup.append('g').call(d3.axisLeft(yScale).ticks(3));

    chartGroup
      .selectAll('rect')
      .data(bars)
      .enter()
      .append('rect')
      .attr('x', (d) => xScale(d.label) || 0)
      .attr('y', (d) => yScale(d.value) || 0)
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => height - yScale(d.value) || 0)
      .attr('fill', 'steelblue')
      .transition()
      .duration(1800)
      .attr('y', (d) => yScale(d.value) || 0)
      .attr('height', (d) => height - yScale(d.value) || 0);

    // Add labels
    chartGroup
      .selectAll('text')
      .data(bars)
      .enter()
      .append('text')
      .text((d) => d.value)
      .attr('x', (d) => xScale(d.label)! + xScale.bandwidth() / 2)
      .attr('y', (d) => yScale(d.value)! - 5)
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .attr('fill', 'white');
  };

  const addRandomData = (): void => {
    const newBar = {
      label: `Bar ${bars.length + 1}`,
      value: Math.floor(Math.random() * 100),
    };

    setBars((prevBars) => [...prevBars, newBar]);
  };

  return (
    <div className="w-2/5 mx-auto text-3xl text-center font-bold pt-52 pb-52">
      <h2 className="pb-4">Barchart</h2>
      <svg
        ref={chartRef}
        width={500}
        height={300}
        style={{ margin: 'auto' }}
      ></svg>
      <button onClick={addRandomData}> Add Random Data</button>
    </div>
  );
};
