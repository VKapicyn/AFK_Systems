 $(function () {
            $('#chart').highcharts({
              chart: {
                type: 'scatter',
                zoomType: 'xy',
                  plotBackgroundImage: "/img/zs.png"

              },
              title:{
               text: ""
              },
              xAxis: {
                title: {
                    enabled: true,
                    text: 'Влияние деятельности Корпорации на стейкхолдеров' 
                }, 
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
              },
              yAxis: {
                    title: {
                      text: 'Влияние стейкхолдеров на деятельности Корпорации'
                    }
                },
              legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 100,
                y: 70,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
                borderWidth: 1
              },
                
              plotOptions: {
                scatter: {
                  marker: {
                    radius: 10,
                    states: {
                      hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                      }
                    }
                  },
                  states: {
                    hover: {
                      marker: {
                        enabled: false
                      }
                    }
                  },
                  tooltip: {
                    headerFormat: '',
                    pointFormat: '{point.name_point}'
                  }
                }
              },
              legend: {
                enabled: false
              }, 
                
              series: [{
                                   marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(243, 111, 33, 1)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"white"}
                                  },

                data: [
                  {x: 1.80, y: 1.92, name_point: "Акционеры", name:"1"}
                  ]
                                }
                                ,{
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(243, 111, 33, 1)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"white"}
                                  },
                data: [
                  {x: 2, y: 1.92, name_point: "Менеджмент", name:"2"}
                  ]
                            }
                                ,{
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(243, 111, 33, 1)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"white"}
                                  },
                data: [
                  {x: 2, y: 1.32, name_point: "Персонал", name:"3"}
                  ]
                            }
                                ,{
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(243, 111, 33, 1)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"white"}
                                  },
                data: [
                  {x: 2, y: 1.52, name_point: "Дочерние и зависимые компании", name:"4"}
                  ]
                            }
                                ,{
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(0, 85, 135, 1)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"white"}
                                  },  
                data: [
                  {x: 0.73, y: 1.2, name_point: "Средства массовой информации", name:"5"}
                  ]
                            }
                                ,{
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(243, 111, 33, 1)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"white"}
                                  },
                data: [
                  {x: 1, y: 1.48, name_point: "Органы государственной власти", name:"6"}
                  ]
                            }
                                ,{
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(0, 85, 135, 1)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"white"}
                                  },  
                data: [
                  {x: 0.48, y: 1.2, name_point: "Государственные органы контроля (надзора)", name:"7"}
                  ]
                            }
                                ,{
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(0, 85, 135, 1)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"white"}
                                  },  
                data: [
                  {x: 0.8, y: 0.8, name_point: "Органы местного самоуправления", name:"8"}
                  ]
                            }
                                ,{
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(0, 85, 135, 1)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"white"}
                                  },  
                data: [
                  {x: 0.98, y: 0.68, name_point: "Население регионов присутствия", name:"9"}
                  ]
                            }
                                ,{
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(243, 111, 33, 1)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"white"}
                                  },
                data: [
                  {x: 1.4, y: 1.8, name_point: "Инвестиционное общество", name:"10"}
                  ]
                            }
                                ,{
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(243, 111, 33, 1)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"white"}
                                  },
                data: [
                  {x: 1.4, y: 1.2, name_point: "Бизнес-партнеры", name:"11"}
                  ]
                            }
                                ,{
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(243, 111, 33, 1)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"white"}
                                  },
                data: [
                  {x: 1.3, y: 1.4, name_point: "Заказчики/потребители", name:"12"}
                  ]
                            }
                                ,{
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(0, 85, 135, 1)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"white"}
                                  },   
                data: [
                  {x: 0.8, y: 1, name_point: "Профессиональные ассоциации", name:"13"}
                  ]
                            }
                                ,{
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(0, 85, 135, 1)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"white"}
                                  },  
                data: [
                  {x: 0.48, y: 0.6, name_point: "Научное сообщество", name:"14"}
                  ]
                            }
                                ,{
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(0, 85, 135, 1)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"white"}
                                  },  
                data: [
                  {x: 0.98, y: 0.3, name_point: "Образовательные учреждения", name:"15"}
                  ]
                            }
                                ,{
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(0, 85, 135, 1)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"white"}
                                  },  
                data: [
                  {x: 0, y: 0.5, name_point: "Общественные экологические организации", name:"16"}
                  ]
                            }
                                ,{
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(0, 85, 135, 1)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"white"}
                                  },  
                data: [
                  {x: 0.98, y: 0.5, name_point: "Некоммерчесике социальные и благотварительные организации", name:"17"}
                  ]
                                }]
            });
          });