'use client';
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { candlestickData as data } from './data';

export const CandlestickChart: React.FC = () => {
  const chartRef = useRef<SVGSVGElement>(null);

  const drawTooltip = (
    rects: d3.Selection<
      SVGRectElement,
      {
        date: string;
        open: number;
        high: number;
        low: number;
        close: number;
      },
      SVGGElement,
      unknown
    >,
  ): void => {
    const tooltip = d3
      .select('#candlestick')
      .append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0)
      .style('position', 'absolute')
      .style('font-size', '14px');

    rects.on('mousemove', (event, d) => {
      const tooltipContent = `<strong>Date:</strong> ${d.date}<br>
          <strong>Open:</strong> ${d.open}<br>
          <strong>High:</strong> ${d.high}<br>
          <strong>Low:</strong> ${d.low}<br>
          <strong>Close:</strong> ${d.close}`;

      tooltip
        .html(tooltipContent)
        .style('left', `${event.pageX - 60}px`)
        .style('top', `${event.pageY - 255}px`)
        .style('opacity', 1)
        .style('background', 'white')
        .style('padding', '5px')
        .style('border', '1px solid black');
    });

    rects.on('mouseleave', () => {
      tooltip.style('opacity', '0');
    });
  };

  const drawChart = (): void => {
    const svg = d3.select(chartRef.current);
    const margin = { top: 20, right: 20, bottom: 50, left: 50 };
    const width = 600 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    svg.selectAll('*').remove();

    const chartGroup = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.date))
      .range([0, width])
      .padding(0.2);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.high)!])
      .range([height, 0]);

    chartGroup
      .selectAll('.grid-line')
      .data(yScale.ticks())
      .enter()
      .append('line')
      .attr('class', 'grid-line')
      .attr('x1', 0)
      .attr('x2', width)
      .attr('y1', (d) => yScale(d))
      .attr('y2', (d) => yScale(d))
      .attr('stroke', '#ddd')
      .attr('stroke-dasharray', '4');

    const candlestick = chartGroup
      .selectAll('.candlestick')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'candlestick')
      .attr('transform', (d) => `translate(${xScale(d.date)!}, 0)`);

    candlestick
      .append('line')
      .attr('x1', xScale.bandwidth() / 2)
      .attr('x2', xScale.bandwidth() / 2)
      .attr('y1', (d) => yScale(d.high))
      .attr('y2', (d) => yScale(d.low))
      .attr('stroke', 'black');

    const rects = candlestick
      .append('rect')
      .attr('x', 0)
      .attr('y', (d) => yScale(Math.max(d.open, d.close)))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => Math.abs(yScale(d.open) - yScale(d.close)))
      .attr('fill', (d) => (d.open > d.close ? 'red' : 'green'));

    chartGroup.append('g').call(d3.axisLeft(yScale));
    chartGroup
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale))
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('transform', 'rotate(-45) translate(-5, 0)');

    drawTooltip(rects);
  };

  useEffect(() => {
    drawChart();
  });

  return (
    <div
      className="w-2/5 mx-auto text-3xl text-center font-bold mt-52 mb-52"
      id="candlestick"
    >
      <h2>Candlestick Chart</h2>
      <h3 className="text-2xl font-semibold">January 2022</h3>
      <svg ref={chartRef} viewBox="0 0 600 300"></svg>
    </div>
  );
};
