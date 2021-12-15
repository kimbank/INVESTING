google.charts.load("current", { packages: ["corechart", "line"] });
google.charts.setOnLoadCallback(drawBackgroundColor);

function drawBackgroundColor() {
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Date");
  data.addColumn("number", "$");

  data.addRows([
    ["12 / 1", 20],
    ["12 / 2", 10],
    ["12 / 3", 23],
    ["12 / 4", 17],
    ["12 / 5", 18],
    ["12 / 6", 9],
    ["12 / 7", 11],
  ]);

  var options = {
    animation: {
      startup: true,
      duration: 2400,
      easing: "in",
    },

    backgroundColor: "transparent",
    colors: ["green", "#008000"],

    vAxis: {
      color: "transparent",
      baselineColor: "transparent",
      gridlines: { color: "transparent" },
      textStyle: { color: "transparent" },
    },

    hAxis: {
      color: "transparent",
      baselineColor: "transparent",
      gridlines: { color: "transparent" },
    },

    legend: { position: "top" },
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("chart_div")
  );
  chart.draw(data, options);
}
