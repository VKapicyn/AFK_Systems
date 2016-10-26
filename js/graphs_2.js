 $(function () {
            $('#chart').highcharts({
              chart: {
                type: 'scatter',
                zoomType: 'xy',


              },
              title:{
               text: ""
              },
              xAxis: {
                title: {
                    enabled: true,
                    text: 'Значимость влияния корпорации на аспект' 
                }, 
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
              },
              yAxis: {
                    title: {
                      text: 'Существенность аспектов для стейкхолдера'
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
                                    color: 'rgba(243, 111, 33, .5)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"black"}
                                  },

                data: [
                  {x: 4, y: 4, name_point: "Экономические результаты деятельности АФК «Система» и ее дочерних компаний", name:"1"}
                  ]
              },
                                {
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(0, 85, 135, .5)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"black"}
                                  },
                data: [
                  {x: 3.8, y: 4.2, name_point: "Деятельность АФК «Система» и ее дочерних компаний по обеспечению технологического лидерства страны: проекты по внедрению инноваций и модернизации производства, по развитию наукоемких отраслей, вклады в инфраструктуру",name:"2"}
                  ]
                                }
                                ,{
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(0, 85, 135, .5)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"black"}
                                  },
                 data: [
                  {x: 2.8, y: 3.5, name_point: "Деятельность по развитию зеленой (экологически ответственной) экономики: проекты по экологизации бизнеса в России, стимулирование потребления экологичной продукции",name:"3"}
                  ]
                                }
                                ,{
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(0, 85, 135, .5)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"black"}
                                  },
                 data: [
                  {x: 2.7, y: 3, name_point: "Программы АФК «Система» и ее дочерних компаний по сохранению биоразнообразию в регионах присутствия",name:"4"}
                  ]
                                }
                                ,{
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(0, 85, 135, .5)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"black"}
                                  },
                 data: [
                  {x: 4.3, y: 3.8, name_point: "Соблюдение АФК «Система» и ее дочерними компаниями законодательных требований в области охраны окружающей среды",name:"5"}
                  ]
                                }
                                ,{
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(0, 85, 135, .5)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"black"}
                                  },
                 data: [
                  {x: 4.5, y: 3.6, name_point: "Общие инвестиции АФК «Система» и ее дочерних компаний на охрану окружающей среды",name:"6"}
                  ]
                                }
                                ,{
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(0, 85, 135, .5)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"black"}
                                  },
                 data: [
                  {x: 3.7, y: 3.3, name_point: "Данные по выбросам дочерних компаний АФК «Система» (объемы и интенсивность выбросов, сокращение выбросов)",name:"7"}
                  ]
                                }
                                ,{
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(0, 85, 135, .5)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"black"}
                                  },
                 data: [
                  {x: 3.8, y: 3.3, name_point: "Данные по сбросам и отходам производств дочерних компаний АФК «Система» (объемы и интенсивность сбросов и отходов, сокращение сбросов и отходов)",name:"8"}
                  ]
                                }
                                ,{
                                   marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(243, 111, 33, .5)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"black"}
                                  },
                 data: [
                  {x: 4.7, y: 4.7, name_point: "АФК «Система» и ее дочерние компании как привлекательный работодатель: обеспечиваемый уровень заработной платы сотрудников в регионах присутствия, доля руководителей из местного населения",name:"9"}
                  ]
                                }
                                ,{
                                   marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(243, 111, 33, .5)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"black"}
                                  },
                 data: [
                  {x: 4.7, y: 4.5, name_point: "Основные характеристики сотрудников АФК «Система» и ее дочерних компаний (количество, текучесть, льготы для сотрудников)",name:"10"}
                  ]
                                }
                                ,{
                                   marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(243, 111, 33, .5)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"black"}
                                  },
                 data: [
                  {x: 4.3, y: 4.2, name_point: "Здоровье и безопасность сотрудников на рабочем месте в АФК «Система» и ее дочерних компаниях",name:"11"}
                  ]
                                }
                                ,{
                                   marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(243, 111, 33, .5)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"black"}
                                  },
                 data: [
                  {x: 5, y: 4.7, name_point: "Обучение и образование сотрудников АФК «Система» и ее дочерних компаний (программы повышения квалификации, дли-тельность обучения)",name:"12"}
                  ]
                                }
                                ,{
                                   marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(243, 111, 33, .5)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"black"}
                                  },
                 data: [
                  {x: 5, y: 4.5, name_point: "Реализуемые АФК «Система» и ее дочерними компаниями программы подготовки кадров для инновационных секторов экономики России",name:"13"}
                  ]
                                }
                                ,{
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(0, 85, 135, .5)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"black"}
                                  },
                 data: [
                  {x: 4, y: 3.7, name_point: "Открытость и качество коммуникации сотрудников и руководства АФК «Система» и ее дочерних компаний",name:"14"}
                  ]
                                }
                                ,{
                                   marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(243, 111, 33, .5)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"black"}
                                  },
                 data: [
                  {x: 4.3, y: 4.8, name_point: "Этика ведения бизнеса и практика противодействия коррупции в АФК «Система» и ее дочерних компаниях",name:"15"}
                  ]
                                }
                                ,{
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(0, 85, 135, .5)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"black"}
                                  },
                 data: [
                  {x: 3.8, y: 4.5, name_point: "Этика ведения бизнеса и практика противодействия коррупции в АФК «Система» и ее дочерних компаниях",name:"16"}
                  ]
                                }
                                ,{
                                   marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(243, 111, 33, .5)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"black"}
                                  },
                 data: [
                  {x: 4, y: 4, name_point: "Данные о реализации программ обучения сотрудников служб безопасности АФК «Система» и ее дочерних компаний пра-вилам соблюдения прав человека",name:"17"}
                  ]
                                }
                                ,{
                                   marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(243, 111, 33, .5)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"black"}
                                  },
                 data: [
                  {x: 4.5, y: 4.7, name_point: "Благотворительная деятельность и социальные инвестиции АФК «Система» и ее дочерних компаний",name:"18"}
                  ]
                                }
                                ,{
                                   marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(243, 111, 33, .5)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"black"}
                                  },
                 data: [
                  {x: 4, y: 4.5, name_point: "Вклады АФК «Система» и ее дочерних компаний в развитие регионов присутствия и местных сообществ (поддержка здраво-охранения, развитие внутреннего туризма, комплексное развитие территорий, укрепление продовольственной безопасности страны)",name:"19"}
                  ]
                                }
                                ,{
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(0, 85, 135, .5)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"black"}
                                  },
                 data: [
                  {x: 3.2, y: 3.8, name_point: "Участие АФК «Система» и ее дочерних компаний в выработке государ",name:"20"}
                  ]
                                }
                                ,{
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(0, 85, 135, .5)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"black"}
                                  },
                 data: [
                  {x: 4.7, y: 3.7, name_point: "Соблюдение АФК «Система» и ее дочерними компаниями антимонопольного законодательства",name:"21"}
                  ]
                                }
                                ,{
                                   marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(243, 111, 33, .5)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"black"}
                                  },
                 data: [
                  {x: 4.2, y: 4.2, name_point: "Социальное партнерство и результаты взаимодействия АФК «Система» и ее дочерних компаний с местными сообществами, региональной и местной властью",name:"22"}
                  ]
                                }
                                ,{
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(0, 85, 135, .5)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"black"}
                                  },
                 data: [
                  {x: 3.7, y: 3.5, name_point: "Данные о штрафах или нефинансовых санкциях за несоблюдение законодательства, наложенных на АФК «Система» и ее дочерних компаний",name:"23"}
                  ]
                                }
                                ,{
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(0, 85, 135, .5)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"black"}
                                  },
                 data: [
                  {x: 3.8, y: 4, name_point: "Способы обеспечения здоровья и безопасности потребителей продукции и услуг дочерних компаний АФК «Система» (оценка воздействия продукции и услуг на здоровье потребителя, меры по минимизации вредного воздействия)",name:"24"}
                  ]
                                }
                                ,{
                                    marker: {
                                        symbol: 'circle'
                                    },
                                    color: 'rgba(0, 85, 135, .5)',
                                    dataLabels: {
                                    enabled: true,
                                    x:0, y:10,
                                    formatter:function() {
                                        return this.point.name;
                                    },
                                    style:{color:"black"}
                                  },
                data: [
                  {x: 3.5, y: 3.5, name_point: "Данные о штрафах или нефинансовых санкциях за несоблюдение законодательства в области ответственности за продукцию, наложенных на дочерние компании АФК «Система»", name:"25"}
                  ]
                                }]
            });
          });