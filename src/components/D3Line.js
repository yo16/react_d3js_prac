import React, { useState } from "react";
import d3 from "d3";

// dataは{x1,y1,x2,y2}
export default function D3Line({
    svg, data,
    stroke="red", fill="none", stroke_width=2
}) {
    return (
        svg.selectAll("line")
            .data(data)
            .enter()
            .append("line")
            .attr("x1", d => d.x1)
            .attr("y1", d => d.y1)
            .attr("x2", d => d.x2)
            .attr("y2", d => d.y2)
            .attr("stroke", stroke)
            .attr("fill", fill)
            .attr("stroke-width", stroke_width)
    )
}
