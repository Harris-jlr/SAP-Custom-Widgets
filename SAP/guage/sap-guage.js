const dataSource = {
    chart: {
      lowerlimit: "-8",
      upperlimit: "16",
      showvalue: "1",
      numbersuffix: "%",
      theme: "fusion"
    },
    colorrange: {
      color: [
        {
          minvalue: "-8",
          maxvalue: "0",
          code: "#76D36F"
        },
        {
          minvalue: "0",
          maxvalue: "8",
          code: "#E78C06"
        },
        {
          minvalue: "8",
          maxvalue: "16",
          code: "#F24269"
        }
      ]
    },
    dials: {
      dial: [
        {
          value: "3"
        }
      ]
    },
  };
  
  FusionCharts.ready(function() {
    var myChart = new FusionCharts({
      type: "angulargauge",
      renderAt: "chart-container",
      width: "100%",
      height: "100%",
      dataFormat: "json",
      dataSource
    }).render();
  });
  
	customElements.define("com-sap-guage", Guage);