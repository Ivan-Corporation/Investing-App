// chartExample1 and chartExample2 options
let chart1_2_options = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
  },
  responsive: true,
  scales: {
    yAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 50,
          suggestedMax: 120,
          padding: 18,
          fontColor: "#9a9a9a",
        },
      },
    ],
    xAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9a9a9a",
        },
      },
    ],
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
let chartExample1 = {
  data1: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 210, 50, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
      datasets: [
        {
          label: "Цена",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#1f8ef1",
          borderWidth: 1.5,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [0, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
        },
      ],
    };
  },
  data2: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
      datasets: [
        {
          label: "Цена",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [0, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120],
        },
      ],
    };
  },
  data3: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
      datasets: [
        {
          label: "Цена",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
        },
      ],
    };
  },
  options: chart1_2_options,
};

// #########################################

// #########################################
let chartExample2 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(0,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,0,248,0.5)");
    gradientStroke.addColorStop(0, "rgba(29,140,0,0)"); //blue colors

    return {
      labels: ["Июнь", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
      datasets: [
        {
          label: "Цена",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#ffffff",
          borderWidth: 4,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#FFD700",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 6,
          data: [80, 100, 70, 80, 120, 80],
        },
      ],
    };
  },
  options: chart1_2_options,
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
let chartExample3 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
    gradientStroke.addColorStop(0.9, "rgba(255,29,193,0.8)");
    gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

    return {
      labels: ["I квартал", "II квартал", "III квартал", "IV квартал"],
      datasets: [
        {
          label: "Доход",
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: "#d048b6",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: [53, 20, 10, 80],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(225,78,202,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 40,
            suggestedMax: 120,
            padding: 20,
            fontColor: "#9e9e9e",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(225,78,202,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e",
          },
        },
      ],
    },
  },
};

// #########################################

// #########################################
const chartExample4 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(66,134,121,0.15)");
    gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors

    return {
      labels: ["2020", "2021", "2022", "2023", "2024"],
      datasets: [
        {
          label: "На акцию",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#00d6b4",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#00d6b4",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#00d6b4",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [3, 4, 1, 0, 5],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },

    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 10,
            padding: 20,
            fontColor: "#9e9e9e",
          },
        },
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(0,242,195,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e",
          },
        },
      ],
    },
  },
};

// ########################################

let Cryptocurrency = {
  cryptoData1: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 0, 0, 50);

    gradientStroke.addColorStop(1, "rgba(21, 22, 26, 0.75)");
    gradientStroke.addColorStop(0.4, "rgba(21, 22, 26, 1)");
    gradientStroke.addColorStop(0, "rgba(21, 22, 26, 1)"); //blue colors

    return {
      labels: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
      datasets: [
        {
          label: "Цена",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#cc0000",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#ffff00",
          pointBorderColor: "rgba(255,0,255,0)",
          pointHoverBackgroundColor: "#cc0000",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 2.5,
          data: [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
        },
      ],
    };
  },
  cryptoData2: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 0, 0, 50);

    gradientStroke.addColorStop(1, "rgba(21, 22, 26, 0.75)");
    gradientStroke.addColorStop(0.4, "rgba(21, 22, 26, 1)");
    gradientStroke.addColorStop(0, "rgba(21, 22, 26, 1)"); //blue colors

    return {
      labels: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
      datasets: [
        {
          label: "Цена",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#cc0000",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#ffff00",
          pointBorderColor: "rgba(255,0,255,0)",
          pointHoverBackgroundColor: "#cc0000",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 2.5,
          data: [100, 0, 100, 0, 85, 100, 100, 50, 30, 20, 10, 0],
        },
      ],
    };
  },
  cryptoData3: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 0, 0, 50);

    gradientStroke.addColorStop(1, "rgba(21, 22, 26, 0.75)");
    gradientStroke.addColorStop(0.4, "rgba(21, 22, 26, 1)");
    gradientStroke.addColorStop(0, "rgba(21, 22, 26, 1)"); //blue colors

    return {
      labels: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
      datasets: [
        {
          label: "Цена",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#cc0000",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#ffff00",
          pointBorderColor: "rgba(255,0,255,0)",
          pointHoverBackgroundColor: "#cc0000",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 2.5,
          data: [1, 70, 90, 70, 85, 160, 75, 60, 90, 180, 110, 0],
        },
      ],
    };
  },
  options: chart1_2_options,
};


module.exports = {
  chartExample1, // in src/views/Dashboard.js
  chartExample2, // in src/views/Dashboard.js
  chartExample3, // in src/views/Dashboard.js
  chartExample4, // in src/views/Dashboard.js
  Cryptocurrency
};
