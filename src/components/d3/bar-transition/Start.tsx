'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Selection, select } from 'd3-selection';
import { scaleLinear, scaleBand } from 'd3-scale';
import { max } from 'd3-array';
import 'd3-transition';

// const data: { width: number; height: number; color: string }[] = [
//   { width: 200, height: 150, color: 'orange' },
// ];

// const data = [
//   { unit: 150, color: 'purple' },
//   { unit: 100, color: 'red' },
//   { unit: 50, color: 'blue' },
//   { unit: 70, color: 'teal' },
//   { unit: 1200, color: 'orange' },
// ];

// const data = [
//   { number: 9000, name: 'a' },
//   { number: 2340, name: 'b' },
//   { number: 3463, name: 'c' },
//   { number: 7654, name: 'd' },
//   { number: 8765, name: 'e' },
// ];

const initialData = [
  { name: 'a', unit: 32 },
  { name: 'b', unit: 67 },
  { name: 'c', unit: 81 },
  { name: 'd', unit: 38 },
  { name: 'e', unit: 28 },
  { name: 'f', unit: 59 },
];

// const dimensions = {
//   width: 800,
//   height: 500,
//   chartWidth: 700,
//   chartHeight: 400,
//   marginLeft: 100,
// };

const dimensions = {
  width: 900,
  height: 600,
};

export const Start: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selection, setSelection] = useState<Selection<
    SVGSVGElement | null,
    unknown,
    null,
    undefined
  > | null>(null);
  const [data, setData] = useState(initialData);

  let y = scaleLinear()
    .domain([0, max(data, (d) => d.unit)!])
    .range([dimensions.height, 0]);

  let x = scaleBand()
    .domain(data.map((d) => d.name))
    .range([0, dimensions.width])
    .padding(0.05);

  // const maxValue = max(data, (d) => d.number);
  // const maxScale = maxValue ?? 0;
  // const y = scaleLinear().domain([0, maxScale]).range([0, 500]);
  // const y = scaleLinear()
  //   // .domain([0, maxScale])
  //   .domain([0, maxScale])
  //   .range([0, dimensions.chartHeight]);

  // const x = scaleBand()
  //   .domain(data.map((d) => d.name))
  //   .range([0, dimensions.chartWidth])
  //   // .padding(0.2);
  //   .paddingInner(0.05);

  // const yAxis = axisLeft(y)
  //   .ticks(5)
  //   .tickFormat((d) => `$${d}`);
  // const xAxis = axisBottom(x);

  useEffect(() => {
    // select(svgRef.current)
    // .append('rect')
    // .attr('width', '150')
    // .attr('height', '100')
    // .attr('fill', 'green');
    // selectAll('rect')
    // .attr('width', 100)
    // .attr('height', 100)
    // .attr('fill', 'blue')
    // .attr('x', (_, i) => i * 100);
    if (!selection) {
      setSelection(select(svgRef.current));
    } else {
      // const xAxisGroup = selection
      //   .append('g')
      //   .attr(
      //     'transform',
      //     `translate(${dimensions.marginLeft}, ${dimensions.chartHeight})`,
      //   )
      //   .call(xAxis);
      // const yAxisGroup = selection
      //   .append('g')
      //   .attr('transform', `translate(${dimensions.marginLeft})`)
      //   .call(yAxis);
      // selection
      //   .data(data)
      //   .append('rect')
      //   .attr('width', (d) => d.width)
      //   .attr('height', (d) => d.height)
      //   .attr('fill', (d) => d.color);
      // const rects = selection
      //   .selectAll('rect')
      //   .data(data)
      //   .attr('width', 100)
      //   .attr('height', (d) => d.unit)
      //   .attr('fill', (d) => d.color)
      //   .attr('x', (_, i) => 100 * i);
      // rects
      //   .enter()
      //   .append('rect')
      //   .attr('width', 100)
      //   .attr('height', (d) => d.unit)
      //   .attr('fill', (d) => d.color)
      //   .attr('x', (_, i) => 100 * i);
      // selection
      //   .append('g')
      //   .attr('transform', `translate(${dimensions.marginLeft})`)
      //   .selectAll('rect')
      //   .data(data)
      //   .enter()
      //   .append('rect')
      //   .attr('width', 100)
      //   .attr('width', x.bandwidth)
      //   .attr('x', (d) => {
      //     const xValue = x(d.name);
      //     if (xValue) {
      //       return xValue;
      //     }
      //     return null;
      //   })
      //   .attr('fill', 'orange')
      //   .attr('height', (d) => y(d.number));
      selection
        .selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('width', x.bandwidth)
        .attr('fill', 'orange')
        .attr('x', (d) => x(d.name)!)
        .attr('height', 0)
        .attr('y', dimensions.height)
        .transition()
        .duration(2000)
        // .delay(3000)
        .delay((_, i) => i * 200)
        .attr('height', (d) => dimensions.height - y(d.unit))
        .attr('y', (d) => y(d.unit));
      // selection
      //   .append('rect')
      //   .attr('width', 100)
      //   .attr('height', 100)
      //   .attr('fill', 'blue')
      //   .transition()
      //   .duration(2000)
      //   .attr('height', 400)
      //   .attr('fill', 'orange');
    }
  }, [selection]);

  useEffect(() => {
    if (selection) {
      y = scaleLinear()
        .domain([0, max(data, (d) => d.unit)!])
        .range([dimensions.height, 0]);

      x = scaleBand()
        .domain(data.map((d) => d.name))
        .range([0, dimensions.width])
        .padding(0.05);

      const rects = selection.selectAll('rect').data(data);

      rects
        .exit()
        .transition()
        .duration(1000)
        .attr('y', dimensions.height)
        .attr('height', 0)
        .remove();

      rects
        .transition()
        .duration(2000)
        .attr('width', x.bandwidth)
        .attr('height', (d) => dimensions.height - y(d.unit))
        .attr('x', (d) => x(d.name)!)
        .attr('y', (d) => y(d.unit))
        .attr('fill', 'orange');

      rects
        .enter()
        .append('rect')
        .attr('width', x.bandwidth)
        .attr('fill', 'orange')
        .attr('height', 0)
        .attr('x', (d) => x(d.name)!)
        .attr('y', dimensions.height)
        .transition()
        .duration(2000)
        .delay(2000)
        .attr('height', (d) => dimensions.height - y(d.unit))
        .attr('y', (d) => y(d.unit));
    }
  }, [data]);

  const addRandom = (): void => {
    const dataToBeAdded = {
      name: `g ${Math.random()}`,
      unit: Math.floor(Math.random() * 60 + 20),
    };
    setData([...data, dataToBeAdded]);
  };

  const removeLast = (): void => {
    if (data.length === 0) {
    }
    const slicedData = data.slice(0, data.length - 1);
    setData(slicedData);
  };

  return (
    <div>
      <h1 className="text-white">Start</h1>
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
      ></svg>
      <button onClick={addRandom}>Add</button>
      <button onClick={removeLast}>Remove</button>
    </div>
  );
};
