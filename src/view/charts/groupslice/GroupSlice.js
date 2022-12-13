import React, {  useLayoutEffect } from 'react';  
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5radar from "@amcharts/amcharts5/radar";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const GroupSlice= (props) =>{
  useLayoutEffect(() => {

    var root = am5.Root.new("chartdiv4"); 
    root._logo.dispose();
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    var chart = root.container.children.push( 
      am5radar.RadarChart.new(root, {
        wheelY: "zoomX",
        layout: root.horizontalLayout,
        //innerRadius: am5.percent(20),
        startAngle: -180,
        endAngle: 0
      }) 
    );
    
    // Define data
    var data = [{
      date: new Date(2021, 0, 1).getTime(),
      value: 100,
      value2: 220
    }, {
      date: new Date(2021, 0, 2).getTime(),
      value: 320,
      value2: 300
    }, {
      date: new Date(2021, 0, 3).getTime(),
      value: 216,
      value2: 120
    }, {
      date: new Date(2021, 0, 4).getTime(),
      value: 150,
      value2: 190
    }, {
      date: new Date(2021, 0, 5).getTime(),
      value: 156,
      value2: 190
    }, {
      date: new Date(2021, 0, 6).getTime(),
      value: 199,
      value2: 120
    }, {
      date: new Date(2021, 0, 7).getTime(),
      value: 114,
      value2: 300
    }, {
      date: new Date(2021, 0, 8).getTime(),
      value: 269,
      value2: 290
    }, {
      date: new Date(2021, 0, 9).getTime(),
      value: 190,
      value2: 290
    }, {
      date: new Date(2021, 0, 10).getTime(),
      value: 380,
      value2: 170
    }, {
      date: new Date(2021, 0, 11).getTime(),
      value: 250,
      value2: 200
    }, {
      date: new Date(2021, 0, 12).getTime(),
      value: 110,
      value2: 210
    }, {
      date: new Date(2021, 0, 13).getTime(),
      value: 185,
      value2: 85
    }, {
      date: new Date(2021, 0, 14).getTime(),
      value: 105,
      value2: 244
    }];
    
    // Create Y-axis
    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        extraTooltipPrecision: 1,
        renderer: am5radar.AxisRendererRadial.new(root, {
          minGridDistance: 20
        })
      })
    );
    
    yAxis.get("renderer").labels.template.setAll({
      visible: false
    });
    
    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "day", count: 1 },
        renderer: am5radar.AxisRendererCircular.new(root, {
          minGridDistance: 20,
          cellStartLocation: 0.2,
          cellEndLocation: 0.8
        })
      })
    );
    
    xAxis.get("renderer").labels.template.setAll({
      fontSize: 12
    });
    
    // Create series
    function createSeries(name, field) {
      var series = chart.series.push( 
        am5radar.RadarColumnSeries.new(root, { 
          name: name,
          xAxis: xAxis, 
          yAxis: yAxis, 
          valueYField: field, 
          valueXField: "date",
          tooltip: am5.Tooltip.new(root, {}),
          clustered: true
        }) 
      );
      
      series.get("tooltip").label.set("text", "[bold]{name}[/]\n{valueX.formatDate()}: {valueY}")
      series.data.setAll(data);
    }
    
    createSeries("Series #1", "value");
    createSeries("Series #2", "value2");
    
    // Add cursor
    chart.set("cursor", am5radar.RadarCursor.new(root, {
      behavior: "zoomX",
      xAxis: xAxis
    }));
    
    xAxis.set("tooltip", am5.Tooltip.new(root, {
      themeTags: ["axis"]
    }));
    
    yAxis.set("tooltip", am5.Tooltip.new(root, {
      themeTags: ["axis"]
    }));

    return () => {
      root.dispose();
    };


  }, []);



  return (
    <div id="chartdiv4" style={{ width: "auto", height: "500px" }}></div>
  );
}

export default GroupSlice;


