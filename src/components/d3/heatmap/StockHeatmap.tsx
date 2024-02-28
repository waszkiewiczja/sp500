'use client';
import { MouseEvent, useEffect, useRef } from 'react';
import { StockDataType, months, stockData, years } from './data';
import { scaleBand, scaleThreshold } from 'd3-scale';
import { axisBottom, axisLeft } from 'd3-axis';
import { TooltipType, createTooltip } from './createTooltip';
import { HEIGHT, WIDTH, createSvg } from './createSvg';

const mouseMoveTooltip = ({
  event,
  d,
  tooltip,
}: {
  event: MouseEvent;
  d: StockDataType;
  tooltip: TooltipType;
}): void => {
  tooltip
    .html('The exact value is: ' + d.value + '%')
    .style('font-size', '14px')
    .style('left', event.clientX - 70 + 'px')
    .style('top', event.pageY - 125 + 'px')
    .style('opacity', 1);
};

const mouseLeaveTooltip = (tooltip: TooltipType): void => {
  tooltip.style('opacity', 0);
};

const heatmapScale = [-5, 0, 5, 10];
const heatmapLegend = ['-10:-5', '-5:0', '0-5', '5-10'];
const colors = ['#C62828', '#EF5350', '#66BB6A', '#2E7D32'];

const heatmapColor = scaleThreshold<number, string>()
  .domain(heatmapScale)
  .range(colors);

const drawHeatmap = (current: SVGSVGElement): void => {
  const svg = createSvg(current);

  const x = scaleBand().range([0, WIDTH]).domain(months).padding(0.05);
  svg
    .append('g')
    .style('font-size', 15)
    .attr('transform', `translate(-5, ${HEIGHT})`)
    .call(axisBottom(x).tickSize(0))
    .select('.domain')
    .remove();
  svg
    .selectAll('text')
    .style('text-anchor', 'end')
    .attr('transform', 'rotate(-45)');

  const y = scaleBand().range([HEIGHT, 0]).domain(years).padding(0.05);
  svg
    .append('g')
    .style('font-size', 15)
    .call(axisLeft(y).tickSize(0))
    .select('.domain')
    .remove();

  const tooltip = createTooltip();

  svg
    .selectAll()
    .data(stockData)
    .join('rect')
    .attr('x', (d) => x(d.month) || 0)
    .attr('y', (d) => y(d.year) || 0)
    .attr('rx', 4)
    .attr('ry', 4)
    .attr('width', x.bandwidth())
    .attr('height', y.bandwidth())
    .style('fill', (d) => heatmapColor(d.value))
    .style('stroke-width', 4)
    .style('stroke', 'none')
    .style('opacity', 0.8)
    .on('mousemove', (event, d) => mouseMoveTooltip({ event, d, tooltip }))
    .on('mouseleave', () => mouseLeaveTooltip(tooltip));
};

export const StockHeatmap: React.FC = () => {
  const chartRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (chartRef?.current) drawHeatmap(chartRef.current);
  });

  return (
    <div
      className="w-2/5 mx-auto text-3xl text-center font-bold mt-52 mb-52"
      id="basicH"
    >
      <h2 className="pb-4"> SP500 Monthly Return Heatmap [%]</h2>
      <div className="flex mx-auto justify-center text-base gap-4 ">
        {colors.map((color, i) => {
          return (
            <div key={color} className="flex">
              <div
                style={{
                  width: '20px',
                  height: '100%',
                  background: `${color}`,
                  marginRight: '3px',
                }}
              ></div>
              {heatmapLegend[i]}
            </div>
          );
        })}
      </div>
      <svg ref={chartRef} viewBox="0 0 450 450" style={{ margin: 'auto' }} />
    </div>
  );
};
