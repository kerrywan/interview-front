var data = {
    labels: ["a", "b", "c", "d",],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "#be1e2d",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [12,0,23,23]
        },
        {
            label: "My Second dataset",
            fillColor: "#00a79d",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [3,21,31,31]
        },
				{
						label: "My Second dataset",
						fillColor: "#0078fd",
						strokeColor: "rgba(191,191,191,0.8)",
						highlightFill: "rgba(175,168,193,0.75)",
						highlightStroke: "rgba(191,191,191,1)",
						data: [1,3,9,9]
				}
    ]
};

var options = {
  scaleFontColor: "white"
};

var ctx = document.getElementById("bar-canvas").getContext("2d");
var myBarChart = new Chart(ctx).Bar(data, options);