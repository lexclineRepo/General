// Navigation function
function navigate(section) {
    alert(`Navigating to ${section} section`);
    // In a real application, you would implement actual navigation here
}

// D3.js code to create a simple map visualization
const width = document.getElementById('map-container').offsetWidth;
const height = 400;
const svg = d3.select("#map-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// Create a simple world map projection
const projection = d3.geoMercator()
    .scale(width / 2 / Math.PI)
    .translate([width / 2, height / 2]);

const path = d3.geoPath().projection(projection);

// Load world map data and draw it
d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").then(function(world) {
    svg.append("g")
        .selectAll("path")
        .data(topojson.feature(world, world.objects.countries).features)
        .enter().append("path")
        .attr("d", path)
        .attr("fill", "#34495e")
        .attr("stroke", "#2c3e50");
});
