'use client';
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { data } from './data';

export const Pyramid: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  // set the dimensions and margins of the graph
  const margin = { top: 50, right: 40, bottom: 50, left: 40 };
  const width = 600 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  useEffect(() => {
    const svgg = d3.select(svgRef.current);
    // append the svg object to the body of the page
    svgg.selectAll('*').remove();

    const svg = d3
      .select(svgRef.current)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // X scale and Axis
    const xScaleMale = d3
      .scaleLinear()
      .domain([0, 30])
      .range([width / 2, 0]);
    svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(
        d3
          .axisBottom(xScaleMale)
          .tickSize(0)
          .tickPadding(3)
          .ticks(5)
          .tickFormat((d) => `${d}%`),
      )
      .select('.domain')
      .remove();

    const xScaleFemale = d3
      .scaleLinear()
      .domain([0, 30])
      .range([width / 2, width]);
    svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(
        d3
          .axisBottom(xScaleFemale)
          .tickSize(0)
          .tickPadding(3)
          .ticks(7)
          .tickFormat((d) => `${d}%`),
      )
      .select('.domain')
      .remove();

    // Y scale and Axis
    const yScale = d3
      .scaleBand()
      .domain(data.map((d) => d.year))
      .range([height, 0])
      .padding(0.25);
    svg
      .append('g')
      .call(d3.axisLeft(yScale).tickSize(0).tickPadding(15))
      .call((d) => d.select('.domain').remove());

    // create male bars
    svg
      .selectAll('.maleBar')
      .data(data)
      .join('rect')
      .attr('class', 'barMale')
      .attr('x', (d) => xScaleMale(Number(d.sp)) || 0)
      .attr('y', (d) => yScale(d.year) || 0)
      .attr('width', (d) => width / 2 - xScaleMale(Number(d.sp)))
      .attr('height', yScale.bandwidth())
      .style('fill', 'rgba(197, 56, 127, 0.8)')
      .style('stroke-width', '2')
      .style('stroke', 'rgb(109, 37, 79)');

    // create female bars
    svg
      .selectAll('.femaleBar')
      .data(data)
      .join('rect')
      .attr('class', 'barFemale')
      .attr('x', xScaleFemale(0))
      .attr('y', (d) => yScale(d.year)!)
      .attr('width', (d) => xScaleFemale(Number(d.upside)) - xScaleFemale(0))
      .attr('height', yScale.bandwidth())
      .style('fill', 'rgba(54, 162, 235, 0.8)')
      .style('stroke-width', '2')
      .style('stroke', 'blue');

    // set vertical grid line
    svg
      .append('g')
      .attr('class', 'grid')
      .style('stroke-width', '0.3px')
      .call(
        d3
          .axisBottom(xScaleFemale)
          .tickSize(height)
          .tickFormat(() => '')
          .ticks(7),
      )
      .select('.domain')
      .remove();

    svg
      .append('g')
      .attr('class', 'grid')
      .style('stroke-width', '0.3px')
      .call(
        d3
          .axisBottom(xScaleMale)
          .tickSize(height)
          .ticks(7)
          .tickFormat(() => ''),
      )
      .select('.domain')
      .remove();

    svg.selectAll('.tick').style('stroke-width', (d, i) => {
      return i === 26 ? '3px' : '0.3px';
    });
  });

  return (
    <div
      className="w-2/5 mx-auto text-3xl text-center font-bold mt-52 mb-52"
      id="Pyramid"
    >
      <h2>SP500 vs TOP 25 Upside </h2>
      <h3 className="text-2xl font-semibold">Yearly Return [%]</h3>
      <div className="flex mx-auto justify-center text-base gap-4 ">
        <div className="flex">
          <div
            style={{
              width: '20px',
              height: '100%',
              background: `rgba(197, 56, 127, 0.8)`,
              marginRight: '3px',
            }}
          ></div>
          SP500
        </div>
        <div className="flex">
          <div
            style={{
              width: '20px',
              height: '100%',
              background: `rgba(54, 162, 235, 0.8)`,
              marginRight: '3px',
            }}
          ></div>
          TOP25
        </div>
      </div>
      <svg
        ref={svgRef}
        width={600}
        height={400}
        style={{ margin: 'auto' }}
      ></svg>
    </div>
  );
};
