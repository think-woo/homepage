var dataSet = [250, 340, 340, 600]
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
  return i*50 + 5;
  })
  .attr("width", function(d,i){
  return d + "px";
  })
  .attr("height", "35")





for(i=0; i<4; i++){
    d3.select("#myGraph").append("text").attr("class", "num")
  }

var textTest = ['13.3%(6명)', '17.8%(6명)', '17.8%(6명)', '33.3%(6명)']
d3.select("#myGraph")
  .selectAll(".num")
  .data(dataSet)
  .text(function(d, i){
    return textTest[i];
  })
  .attr("x", function(d, i){
    return d+14;
  })
  .attr("y", function(d,i){
    return i*50 + 33;
  })
  .attr("font-size", "27px")
  .attr("font-family", "고딕")
  .style("fill", "red")
  .style("opacity", "0")
  .transition()
  .duration(2500)
  .style("opacity", "1")
  .delay(function(d,i){
  return i*500 + 500;
  })


var mytext = ['단순 외국인이라는 이유로', '자신의 말 또는 행동을 상대방이 오해해서', '한국어를 잘못 알아들어서', '일하다 실수해서']

d3.select("#myReason")
  .selectAll("text")
  .transition()
  .style("color", "red")
  .style("font-weight", "bold")
  .style("font-size", "25px")
  .delay(4500)
  .duration(3000)


/*
d3.select("#myGraph")
  .selectAll(".important")
  .transition()
  .delay(5000)
  .duration(2000)
  .style("fill", "red")
  .attr("font-size", "20px")
*/
