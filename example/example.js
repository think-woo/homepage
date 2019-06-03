var dataSet = [133*2, 178*2, 178*2, 333*2]

d3.select("#myGraph")
  .selectAll("rect")
  .data(dataSet)
  .enter()
  .append("rect")
  .attr("x", "10")
  .attr("width", "0")
  .transition()
  .delay(function(d,i){
    return i*500;
  })
  .duration(2500)
  .attr("y", function(d,i){
    return i*35 + 5;
  })
  .attr("width", function(d,i){
    return d + "px";
  })
  .attr("height", "30")
