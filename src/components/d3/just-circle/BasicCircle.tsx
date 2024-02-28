'use client';
import { useEffect, useRef, useState } from 'react';
import { Selection, select } from 'd3-selection';

const data = [20, 33, 40, 50, 70];

export const BasicCircle: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  const [svgContext, setSvgContext] = useState<Selection<
    SVGSVGElement | null,
    unknown,
    null,
    undefined
  > | null>(null);

  useEffect(() => {
    if (!svgContext) {
      setSvgContext(select(svgRef.current));
    } else {
      svgContext.empty();

      const circle = svgContext
        .selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', (d) => d * 4)
        .attr('cy', 100)
        .attr('r', (d) => d)
        .attr('fill', 'orange');
    }
  }, [svgContext]);
  return (
    <>
      <svg ref={svgRef} width={600} height={400}></svg>
    </>
  );
};
