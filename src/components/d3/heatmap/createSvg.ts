import { Selection } from 'd3-selection';
import { select } from 'd3-selection';

export const MARGIN = { top: 30, right: 25, bottom: 70, left: 40 };
export const WIDTH = 450 - MARGIN.left - MARGIN.right;
export const HEIGHT = 450 - MARGIN.top - MARGIN.bottom;

type SvgType = Selection<SVGGElement, unknown, null, undefined>;

export const createSvg = (current: SVGSVGElement): SvgType => {
  return select(current)
    .attr('max-width', '450px')
    .style('max-height', '450px')
    .append('g')
    .attr('transform', `translate(${MARGIN.left}, ${MARGIN.top})`);
};
