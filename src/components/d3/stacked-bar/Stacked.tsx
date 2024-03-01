// 'use client';
// import React, { useEffect, useRef } from 'react';
// import { select } from 'd3-selection';
// import * as d3 from 'd3';

// // set the dimensions and margins of the graph
// const margin = { top: 80, right: 20, bottom: 50, left: 120 };
// const width = 450 - margin.left - margin.right;
// const height = 350 - margin.top - margin.bottom;

// export const Stacked: React.FC = () => {
//   const svgRef = useRef<SVGSVGElement | null>(null);

//   const drawSvg = (current: SVGSVGElement): void => {
//     select(current).selectAll('*').remove();

//     const svg = select(current)
//       .append('g')
//       .attr('transform', `translate(${margin.left}, ${margin.top})`);

//     // parse the Data
//     d3.csv(
//       'https://raw.githubusercontent.com/GDS-ODSSS/unhcr-dataviz-platform/master/data/comparison/bar_stacked_d3.csv',
//       function parseData(d, i, columns) {
//         let t = 0;

//         for (i = 1; i < columns.length; ++i) {
//           d[columns[i]] = +d[columns[i]]; // Convert to numeric
//           t += d[columns[i]]; // Sum up numeric values
//         }

//         d.total = t; // Store the total

//         // Additional properties (replace with your actual property names)
//         d.country_origin = d.country_origin;
//         d.ASY = +d.ASY;
//         d.REF = +d.REF;
//         d.VDA = +d.VDA;

//         return d;
//       },
//     ).then(function (data) {
//       // list of value keys
//       console.log('pokaz data', data);
//       const typeKeys = data.columns.slice(1);

//       // sort data in descending order by total value
//       data.sort((a, b) => b.total - a.total);

//       // stack the data
//       const stack = d3
//         .stack()
//         .keys(typeKeys)
//         .order(d3.stackOrderNone)
//         .offset(d3.stackOffsetNone);
//       const stackedData = stack(data);
//       console.log('stacked', stackedData);

//       // X scale and Axis
//       const formater = d3.format('.1s');
//       const xScale = d3.scaleLinear().domain([0, 7000000]).range([0, width]);
//       svg
//         .append('g')
//         .attr('transform', `translate(0, ${height})`)
//         .call(
//           d3
//             .axisBottom(xScale)
//             .ticks(7)
//             .tickSize(0)
//             .tickPadding(6)
//             .tickFormat(formater),
//         )
//         .call((d) => d.select('.domain').remove());

//       // Y scale and Axis
//       const yScale = d3
//         .scaleBand()
//         .domain(data.map((d) => d.country_origin))
//         .range([0, height])
//         .padding(0.2);
//       svg.append('g').call(d3.axisLeft(yScale).tickSize(0).tickPadding(8));

//       // color palette
//       const color = d3
//         .scaleOrdinal()
//         .domain(typeKeys)
//         .range(['#0072BC', '#18375F', '#EF4A60']);

//       // set vertical grid line
//       const GridLine = function () {
//         return d3.axisBottom().scale(xScale);
//       };
//       svg
//         .append('g')
//         .attr('class', 'grid')
//         .call(GridLine().tickSize(height, 0, 0).tickFormat('').ticks(8));

//       // create a tooltip
//       // const tooltip = d3
//       //   .select('body')
//       //   .append('div')
//       //   .attr('id', 'chart')
//       //   .attr('class', 'tooltip');

//       // tooltip events
//       // const mouseover = function (d) {
//       //   tooltip.style('opacity', 0.8);
//       //   d3.select(this).style('opacity', 0.5);
//       // };
//       // const mousemove = function (event, d) {
//       //   const formater = d3.format(',');
//       //   tooltip
//       //     .html(formater(d[1]))
//       //     .style('top', event.pageY - 10 + 'px')
//       //     .style('left', event.pageX + 10 + 'px');
//       // };
//       // const mouseleave = function (d) {
//       //   tooltip.style('opacity', 0);
//       //   d3.select(this).style('opacity', 1);
//       // };

//       // create bars
//       svg
//         .append('g')
//         .selectAll('g')
//         .data(stackedData)
//         .join('g')
//         .attr('fill', (d) => color(d.key))
//         .selectAll('rect')
//         .data((d) => d)
//         .join('rect')
//         .attr('x', (d) => xScale(d[0]))
//         .attr('y', (d) => yScale(d.data.country_origin))
//         .attr('width', (d) => xScale(d[1]) - xScale(d[0]))
//         .attr('height', yScale.bandwidth());
//       // .on('mouseover', mouseover)
//       // .on('mousemove', mousemove)
//       // .on('mouseleave', mouseleave);
//     });
//   };

//   useEffect(() => {
//     if (svgRef?.current) drawSvg(svgRef.current);
//   });
//   return (
//     <div
//       className="w-2/5 mx-auto text-3xl text-center font-bold mt-52 mb-52"
//       id="Stacked"
//     >
//       <h2>SP500 vs TOP 25 Upside Stacked Horizontally </h2>

//       <svg ref={svgRef} width={450} height={350} style={{ margin: 'auto' }} />
//     </div>
//   );
// };
