// Get the margin to width ratio as a percent
// using the margin object properties
function getRatio (side) {
return ((margin[side] / width) * 100) + '%'
}
// Simple example dataset
var letters = ['A', 'B', 'C', 'D']
var numbers = [20, 60, 30, 20]
// Declare Dimensions to create graph
// Margin is used to show x and y axes
// Size here is declared in pixels, although this
// defines the relative values, since the chart changes depending
// on container
var margin = { left: 50, top: 10, right: 50, bottom: 30 }
var width = 700
var height = 400
// marginRatio converts margin absolute values to
// percent values to keep SVG responsive
var marginRatio = {
left: getRatio('left'),
top: getRatio('top'),
right: getRatio('right'),
bottom: getRatio('bottom')
}
var barWidth = width / numbers.length

var svg = d3.select('div#chart')
// Create div to act as SVG container
  .append('div')
  .attr('id', 'svg-container')
  // Add SVG that will contain Graph elements
  .append('svg')
  // Add margin to show axes
  .style('padding', marginRatio.top + ' ' + marginRatio.right + ' ' + marginRatio.bottom + ' ' + marginRatio.left)
  // Preserve aspect ratio xMinYmin ensures SVG fills #svg-container
  .attr('preserveAspectRatio', 'xMinYMin meet')
  // Sets the viewbox, for more info on viewbox, combined with preveserveAspectRatio, this is what turns the bar chart
  // into a responsive bar chart
  .attr('viewBox', '0 0 ' + (width + margin.left + margin.right) + ' ' + (height + margin.top + margin.bottom))
  // Id to target with CSS
  .attr('id', 'svg-content-responsive')
// Define the x scale as ordinal, ordinal means the data cannot be meassured by a
// standard of difference. This is different to a linear scale that we will use later
var x = d3.scale.ordinal()
// Domain stands for input domain, this is the data we want to display
  .domain(letters)
  // Range stands for Output Range, this is the width the data will take up
  // Here it is used for the x axis. 0 is the start of our graph, width is the
  // end of it
  .rangeRoundBands([0, width], 0.1, 0.1)
// Here we define the x axis using the svg.axis() method. The x scale we just
// defined tells the axis what data to display and how big the intervals
// between that data is on the axis. Orient bottom means it will be shown below
// the bars.
var xAxis = d3.svg.axis()
  .scale(x)
  .orient('bottom')
// Here we repeat the process for the y axis. The difference is that we have numerical
// data, so we can use scale.linear.
var y = d3.scale.linear()
// Instead of using the whole array for the input domain, we use 0, since we
// want our y axis to start at 0, and the biggest value of our dataset
// d3.max returns the largest value of an array
  .domain([d3.max(numbers), 0])
  .range([0, height])
// This is defined in the same wat the x axis is defined, except the orient is now left
// instead of bottom - for obvious reasons.
var yAxis = d3.svg.axis()
  .scale(y)
  .orient('left')
// Bind data to bar groups
var bar = svg.selectAll('g')
  .data(numbers)
  .enter()
  .append('g')
  .attr('transform', function (d, i) { return 'translate(' + i * barWidth + ', 0)' })
// Add x axis to svgContainer
svg.append('g')
  .attr('class', 'x axis')
  .call(xAxis)
  .attr('transform', 'translate(0,' + height + ')')
// Add y axis
svg.append('g')
  .attr('class', 'y axis')
  .call(yAxis)
// Add SVG rectangles that act as bars
// barWidth is calculated dynamically from the width divided by data.length
// The y attribute and height is based on the data, scaled to the height of
// graph. Remember input domain and output range
bar.append('rect')
  .attr('class', 'bar')
  .attr('width', barWidth - 1)
  .attr('y', function (d) { return y(d) })
  .attr('height', function (d) { return height - y(d) })
