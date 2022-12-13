import React, { useRef, useLayoutEffect,} from 'react';

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";


const  Bar= (props) =>{
const chartRef = useRef(null);
 useLayoutEffect(() => {
    
    let root1 = am5.Root.new("chartdiv1");
    root1._logo.dispose();
    root1.setThemes([
      am5themes_Animated.new(root1)
    ]);

    let chart = root1.container.children.push( 
      am5xy.XYChart.new(root1, {
        panY: false,
        layout: root1.verticalLayout
      }) 
    );

    

   // Define data
    let data = [{
      category: "Production",
      value1: 1000,
      value2: 588
    }, {
      category: "Marketing",
      value1: 1200,
      value2: 1800
    },
    {
      category: "Marketing",
      value1: 1300,
      value2: 18000
    },
    {
      category: "Maintenance",
      value1: 1400,
      value2: 1800
    },
    {
      category: "Marketing",
      value1: 1500,
      value2: 10500
    },
    {
      category: "Marketing",
      value1: 1500,
      value2: 700
    },
    {
      category:  "Production",
      value1: 1600,
      value2: 1800
    },
    {
      category: "Marketing",
      value1: 1700,
      value2: 1800
    },
    {
      category: "Production",
      value1: 1900,
      value2: 100
    },
     {
      category: "Sales",
      value1: 850,
      value2: 1230
    }];

    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root1, {
        renderer: am5xy.AxisRendererY.new(root1, {})
      })
    );

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root1, {
    renderer: am5xy.AxisRendererX.new(root1, {}),
        categoryField: "category"
      })
    );
    xAxis.data.setAll(data);

    // Create series
    let series1 = chart.series.push(
      am5xy.ColumnSeries.new(root1, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value1",
        categoryXField: "category"
      })
    );
    series1.data.setAll(data);

    let series2 = chart.series.push(
      am5xy.ColumnSeries.new(root1, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value2",
        categoryXField: "category"
      })
    );
    series2.data.setAll(data);

    // Add legend
    let legend = chart.children.push(am5.Legend.new(root1, {}));
    legend.data.setAll(chart.series.values);

    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root1, {}));

    chartRef.current = chart;

    return () => {
      root1.dispose();
    };


  }, []);


  // When the paddingRight prop changes it will update the chart
  useLayoutEffect(() => {
    chartRef.current.set("paddingRight", props.paddingRight);
}, [props.paddingRight]);





  return (
    <div id="chartdiv1" style={{ width: "auto", height: "500px" }}></div>
  );
}

export default Bar;


