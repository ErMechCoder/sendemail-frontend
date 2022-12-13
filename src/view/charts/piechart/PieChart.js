import React, {  useLayoutEffect } from 'react';  
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";


const  Pie= (props) =>{
  useLayoutEffect(() => {

    
    // Create root and chart
    let root = am5.Root.new("chartdiv3");
    root._logo.dispose();
    let chart = root.container.children.push( 
      am5percent.PieChart.new(root, {
        layout: root.verticalHorizontal
      }) 
    );
    
    // Define data
    let data = [{
      country: "India",
      sales: 1000000
    }, {
      country: "Japan",
      sales: 160000
    }, {
      country: "Span",
      sales: 80000
    }];
    
    // Create series
    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: "Series",
        valueField: "sales",
        categoryField: "country"
      })
    );
    series.data.setAll(data);
    
    // Add legend
    let legend = chart.children.push(am5.Legend.new(root, {
      centerX: am5.percent(50),
      x: am5.percent(50),
      layout: root.horizontalLayout
    }));
    
    legend.data.setAll(series.dataItems);

    return () => {
      root.dispose();
    };


  }, []);



  return (
    <div id="chartdiv3" style={{ width: "auto", height: "500px" }}></div>
  );
}

export default Pie;


