import { Selection, select } from 'd3-selection';

export type TooltipType = Selection<
  HTMLDivElement,
  unknown,
  HTMLElement,
  HTMLElement
>;

export const createTooltip = (): TooltipType => {
  return select('#basicH')
    .append('div')
    .style('opacity', 0)
    .attr('class', 'tooltip')
    .style('background-color', 'white')
    .style('border', 'solid')
    .style('border-width', '2px')
    .style('border-radius', '5px')
    .style('position', 'absolute')
    .style('padding', '5px');
};
