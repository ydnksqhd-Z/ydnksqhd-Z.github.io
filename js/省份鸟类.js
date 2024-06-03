(function(){
//配置地图
  var myChart = echarts.init(document.querySelector(".map .chart"));
  var data_2024=[
    {
        "total": 1198799,
        "level": "province",
        "record": 269536,
        "name": "云南",
        "report": 13552,
        "value": 924,
        "version": "CH4"
    },
    {
        "total": 634085,
        "level": "province",
        "record": 120716,
        "name": "四川",
        "report": 7680,
        "value": 693,
        "version": "CH4"
    },
    {
        "total": 127177,
        "level": "province",
        "record": 31754,
        "name": "西藏",
        "report": 1901,
        "value": 615,
        "version": "CH4"
    },
    {
        "total": 630784,
        "level": "province",
        "record": 56961,
        "name": "广西",
        "report": 3697,
        "value": 614,
        "version": "CH4"
    },
    {
        "total": 1662787,
        "level": "province",
        "record": 309191,
        "name": "广东",
        "report": 19522,
        "value": 575,
        "version": "CH4"
    },
    {
        "total": 834408,
        "level": "province",
        "record": 140970,
        "name": "福建",
        "report": 8272,
        "value": 543,
        "version": "CH4"
    },
    {
        "total": 1592026,
        "level": "province",
        "record": 197066,
        "name": "浙江",
        "report": 12810,
        "value": 541,
        "version": "CH4"
    },
    {
        "total": 2263654,
        "level": "province",
        "record": 140822,
        "name": "湖北",
        "report": 7809,
        "value": 529,
        "version": "CH4"
    },
    {
        "total": 181762,
        "level": "province",
        "record": 26930,
        "name": "甘肃",
        "report": 1930,
        "value": 482,
        "version": "CH4"
    },
    {
        "total": 2477437,
        "level": "province",
        "record": 164425,
        "name": "江苏",
        "report": 9555,
        "value": 480,
        "version": "CH4"
    },
    {
        "total": 2703629,
        "level": "province",
        "record": 406819,
        "name": "北京",
        "report": 24288,
        "value": 479,
        "version": "CH4"
    },
    {
        "total": 906305,
        "level": "province",
        "record": 106383,
        "name": "湖南",
        "report": 6324,
        "value": 475,
        "version": "CH4"
    },
    {
        "total": 2134371,
        "level": "province",
        "record": 271071,
        "name": "上海",
        "report": 14614,
        "value": 469,
        "version": "CH4"
    },
    {
        "total": 223087,
        "level": "province",
        "record": 32642,
        "name": "陕西",
        "report": 1889,
        "value": 459,
        "version": "CH4"
    },
    {
        "total": 544043,
        "level": "province",
        "record": 54276,
        "name": "河南",
        "report": 3186,
        "value": 454,
        "version": "CH4"
    },
    {
        "total": 105216,
        "level": "province",
        "record": 22996,
        "name": "贵州",
        "report": 1134,
        "value": 443,
        "version": "CH4"
    },
    {
        "total": 214569,
        "level": "province",
        "record": 58019,
        "name": "海南",
        "report": 3944,
        "value": 431,
        "version": "CH4"
    },
    {
        "total": 936338,
        "level": "province",
        "record": 88114,
        "name": "江西",
        "report": 4193,
        "value": 428,
        "version": "CH4"
    },
    {
        "total": 138212,
        "level": "province",
        "record": 26612,
        "name": "重庆",
        "report": 1820,
        "value": 424,
        "version": "CH4"
    },
    {
        "total": 637986,
        "level": "province",
        "record": 45865,
        "name": "新疆",
        "report": 3469,
        "value": 419,
        "version": "CH4"
    },
    {
        "total": 374624,
        "level": "province",
        "record": 27720,
        "name": "河北",
        "report": 1518,
        "value": 404,
        "version": "CH4"
    },
    {
        "total": 688575,
        "level": "province",
        "record": 37553,
        "name": "山东",
        "report": 2780,
        "value": 400,
        "version": "CH4"
    },
    {
        "total": 173390,
        "level": "province",
        "record": 24717,
        "name": "青海",
        "report": 1772,
        "value": 381,
        "version": "CH4"
    },
    {
        "total": 298761,
        "level": "province",
        "record": 25792,
        "name": "安徽",
        "report": 1838,
        "value": 379,
        "version": "CH4"
    },
    {
        "total": 258487,
        "level": "province",
        "record": 14643,
        "name": "内蒙古",
        "report": 1180,
        "value": 366,
        "version": "CH4"
    },
    {
        "total": 477229,
        "level": "province",
        "record": 19981,
        "name": "辽宁",
        "report": 1706,
        "value": 361,
        "version": "CH4"
    },
    {
        "total": 663323,
        "level": "province",
        "record": 38758,
        "name": "天津",
        "report": 2562,
        "value": 351,
        "version": "CH4"
    },
    {
        "total": 54457,
        "level": "province",
        "record": 10066,
        "name": "香港",
        "report": 496,
        "value": 328,
        "version": "CH4"
    },
    {
        "total": 569372,
        "level": "province",
        "record": 16462,
        "name": "吉林",
        "report": 1207,
        "value": 323,
        "version": "CH4"
    },
    {
        "total": 155814,
        "level": "province",
        "record": 11513,
        "name": "山西",
        "report": 971,
        "value": 318,
        "version": "CH4"
    },
    {
        "total": 26403,
        "level": "province",
        "record": 3228,
        "name": "台湾",
        "report": 240,
        "value": 307,
        "version": "CH4"
    },
    {
        "total": 51960,
        "level": "province",
        "record": 4607,
        "name": "宁夏",
        "report": 403,
        "value": 291,
        "version": "CH4"
    },
    {
        "total": 18802,
        "level": "province",
        "record": 3129,
        "name": "黑龙江",
        "report": 469,
        "value": 220,
        "version": "CH4"
    },
    {
        "total": 2728,
        "level": "province",
        "record": 594,
        "name": "澳门",
        "report": 56,
        "value": 110,
        "version": "CH4"
    }
]
  var geoCoordMap = {
        台湾: [121.5135, 25.0308],
        黑龙江: [127.9688, 45.368],
        内蒙古: [110.3467, 41.4899],
        吉林: [125.8154, 44.2584],
        北京: [116.4551, 40.2539],
        辽宁: [123.1238, 42.1216],
        河北: [114.4995, 38.1006],
        天津: [117.4219, 39.4189],
        山西: [112.3352, 37.9413],
        陕西: [109.1162, 34.2004],
        甘肃: [103.5901, 36.3043],
        宁夏: [106.3586, 38.1775],
        青海: [101.4038, 36.8207],
        新疆: [87.9236, 43.5883],
        西藏: [91.11, 29.97],
        四川: [103.9526, 30.7617],
        重庆: [108.384366, 30.439702],
        山东: [117.1582, 36.8701],
        河南: [113.4668, 34.6234],
        江苏: [118.8062, 31.9208],
        安徽: [117.29, 32.0581],
        湖北: [114.3896, 30.6628],
        浙江: [119.5313, 29.8773],
        福建: [119.4543, 25.9222],
        江西: [116.0046, 28.6633],
        湖南: [113.0823, 28.2568],
        贵州: [106.6992, 26.7682],
        云南: [102.9199, 25.4663],
        广东: [113.12244, 23.009505],
        广西:   [108.479, 23.1152],
        海南: [110.3893, 19.8516],
        上海: [121.4648, 31.2891]
};
  var convertData = function (data) {
        var res = [];
//生成数据
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      });
    }
  }
  return res;
};
var option = {
  title: [
{
text: '总计',
textStyle: {
    color: 'red'
}
}
],
    geo: {
map: "china",
aspectScale: 0.75, // 地图长宽比
roam: false,
label: {
normal: {
    show: true
},
roam:false,
emphasis: {
    show: false,
    textStyle: {
        color: '#fff'
    }
}
},
animation: false
},
visualMap: {
    left: 'left',
    min: 0,
    max: 800,
    seriesIndex:0,
    inRange: {
      color: [
      '#313695',
        '#4575b4',
        '#74add1',
        '#abd9e9',
        '#e0f3f8',
        '#ffffbf',
        '#fee090',
        '#fdae61',
        '#f46d43',
        '#d73027',
        '#a50026'
      ]
    },
    textStyle: {
        color: 'red', // 设置文本颜色为黑色
        fontSize:13
      },
    text: ['High', 'Low'],
    calculable: true
  }, 
series: [
//配置地图
{
  name:'中国地图',
  type: 'map',
  mapType:'china',
  geoIndex: 0,
  aspectScale: 0.75, // 地图长宽比
  showLegendSymbol: false,
  label: {
    normal: {
      show: true
    },
    emphasis: {
      show: false,
      textStyle: {
        color: '#fff'
      }
    }
  },
  roam: true,
  animation: false,
  data: convertData(data_2024)
},
// 散点图, 蓝色的点
{
  name: '散点图',
  type: 'scatter',
  coordinateSystem: 'geo',
  data: convertData(data_2024),
  symbolSize: function (val) {
  return val[2] / 20;
},
label: {
    normal: {
      formatter: function (obj) {
        let name = obj.name;
        return name || '';
      },
      position: 'right',
      show: true
    },
    emphasis: {
      show: true
    }
  },
  itemStyle: {
    normal: {
      color: '#4444FF'
    },
}
},
//气泡散点图
{
  name: '气泡散点图',
  type: 'scatter',
  coordinateSystem: 'geo',
  data: convertData(data_2024),
  symbol: 'pin', //气泡
  symbolSize: function (val) {
    return val[2]/6;
  },
  label: {
    normal: {
      show: true,
      formatter: function (obj) {
        return obj.data.value[2];
      },
      textStyle: {
        color: 'black',
        fontSize: 9,
      }
    }
  },
  itemStyle: {
    normal: {
      // 气泡颜色
      color: '#F62157', 
    }
  },
  zlevel: 6,
},
 // 前五名，带有涟漪特效动画的散点（气泡）图，黄色
{
  name: 'Top 5',
  type: 'effectScatter',
  coordinateSystem: 'geo',
  data: convertData(data_2024.sort(function (a, b) {
    return b.value - a.value;
  }).slice(0, 5)),
  symbolSize: function (val) {
    return val[2] / 70;
  },
  showEffectOn: 'render',
  rippleEffect: {
    brushType: 'stroke'
  },
  hoverAnimation: true,
  label: {
    normal: {
      formatter: function (obj) {
        let name = obj.name;
        return name || '';
      },
      position: 'right',
      show: false
    }
  },
  itemStyle: {
    normal: {
      color: 'yellow',
      shadowBlur: 10,
      shadowColor: 'yellow'
    }
  },
  zlevel: 1
},
]
};
myChart.setOption(option);
var newArr = [
  //2014
[
  {
      "total": 1211,
      "record": 229,
      "name": "云南",
      "report": 17,
      "value": 159
  },
  {
      "total": 2596,
      "record": 236,
      "name": "陕西",
      "report": 9,
      "value": 153
  },
  {
      "total": 539,
      "record": 339,
      "name": "北京",
      "report": 68,
      "value": 147
  },
  {
      "total": 1758,
      "record": 286,
      "name": "贵州",
      "report": 16,
      "value": 133
  },
  {
      "total": 7833,
      "record": 448,
      "name": "上海",
      "report": 16,
      "value": 129
  },
  {
      "total": 3415,
      "record": 164,
      "name": "江苏",
      "report": 14,
      "value": 116
  },
  {
      "total": 951,
      "record": 113,
      "name": "江西",
      "report": 3,
      "value": 98
  },
  {
      "total": 7149,
      "record": 210,
      "name": "广东",
      "report": 7,
      "value": 97
  },
  {
      "total": 1353,
      "record": 172,
      "name": "内蒙古",
      "report": 6,
      "value": 91
  },
  {
      "total": 1728,
      "record": 131,
      "name": "湖北",
      "report": 6,
      "value": 89
  },
  {
      "total": 407,
      "record": 125,
      "name": "福建",
      "report": 10,
      "value": 85
  },
  {
      "total": 507,
      "record": 96,
      "name": "重庆",
      "report": 3,
      "value": 81
  },
  {
      "total": 98,
      "record": 98,
      "name": "甘肃",
      "report": 3,
      "value": 74
  },
  {
      "total": 902,
      "record": 89,
      "name": "四川",
      "report": 5,
      "value": 73
  },
  {
      "total": 1595,
      "record": 89,
      "name": "天津",
      "report": 4,
      "value": 67
  },
  {
      "total": 125,
      "record": 65,
      "name": "河南",
      "report": 6,
      "value": 49
  },
  {
      "total": 399,
      "record": 58,
      "name": "浙江",
      "report": 7,
      "value": 49
  },
  {
      "total": 297,
      "record": 40,
      "name": "湖南",
      "report": 12,
      "value": 36
  },
  {
      "total": 49,
      "record": 49,
      "name": "安徽",
      "report": 3,
      "value": 34
  },
  {
      "total": 132,
      "record": 44,
      "name": "宁夏",
      "report": 3,
      "value": 30
  },
  {
      "total": 23,
      "record": 23,
      "name": "西藏",
      "report": 2,
      "value": 21
  },
  {
      "total": 90,
      "record": 16,
      "name": "香港",
      "report": 2,
      "value": 16
  },
  {
      "total": 32,
      "record": 11,
      "name": "河北",
      "report": 2,
      "value": 10
  },
  {
      "total": 8,
      "record": 8,
      "name": "广西",
      "report": 1,
      "value": 8
  }
],
//2015
[
  {
      "total": 8833,
      "record": 1603,
      "name": "云南",
      "report": 45,
      "value": 414
  },
  {
      "total": 5255,
      "record": 471,
      "name": "江苏",
      "report": 19,
      "value": 268
  },
  {
      "total": 2902,
      "record": 1118,
      "name": "浙江",
      "report": 57,
      "value": 228
  },
  {
      "total": 35422,
      "record": 1076,
      "name": "湖北",
      "report": 35,
      "value": 226
  },
  {
      "total": 3322,
      "record": 561,
      "name": "贵州",
      "report": 21,
      "value": 190
  },
  {
      "total": 3093,
      "record": 499,
      "name": "新疆",
      "report": 27,
      "value": 178
  },
  {
      "total": 19758,
      "record": 463,
      "name": "青海",
      "report": 21,
      "value": 173
  },
  {
      "total": 6237,
      "record": 474,
      "name": "河南",
      "report": 36,
      "value": 154
  },
  {
      "total": 1476,
      "record": 410,
      "name": "北京",
      "report": 54,
      "value": 153
  },
  {
      "total": 3254,
      "record": 358,
      "name": "江西",
      "report": 11,
      "value": 146
  },
  {
      "total": 10614,
      "record": 570,
      "name": "上海",
      "report": 32,
      "value": 137
  },
  {
      "total": 450,
      "record": 204,
      "name": "广西",
      "report": 11,
      "value": 122
  },
  {
      "total": 1510,
      "record": 194,
      "name": "甘肃",
      "report": 13,
      "value": 122
  },
  {
      "total": 512,
      "record": 173,
      "name": "四川",
      "report": 13,
      "value": 118
  },
  {
      "total": 1760,
      "record": 209,
      "name": "湖南",
      "report": 18,
      "value": 118
  },
  {
      "total": 4684,
      "record": 216,
      "name": "广东",
      "report": 13,
      "value": 107
  },
  {
      "total": 803,
      "record": 166,
      "name": "福建",
      "report": 18,
      "value": 104
  },
  {
      "total": 689,
      "record": 135,
      "name": "陕西",
      "report": 4,
      "value": 83
  },
  {
      "total": 641,
      "record": 113,
      "name": "西藏",
      "report": 7,
      "value": 73
  },
  {
      "total": 1756,
      "record": 27,
      "name": "山东",
      "report": 5,
      "value": 23
  },
  {
      "total": 176,
      "record": 24,
      "name": "海南",
      "report": 2,
      "value": 23
  },
  {
      "total": 22,
      "record": 22,
      "name": "河北",
      "report": 3,
      "value": 21
  },
  {
      "total": 13,
      "record": 13,
      "name": "安徽",
      "report": 2,
      "value": 13
  },
  {
      "total": 876,
      "record": 11,
      "name": "辽宁",
      "report": 2,
      "value": 11
  },
  {
      "total": 1,
      "record": 1,
      "name": "重庆",
      "report": 1,
      "value": 1
  }
],
//2016
[
  {
      "total": 9570,
      "record": 1740,
      "name": "云南",
      "report": 60,
      "value": 471
  },
  {
      "total": 2508,
      "record": 907,
      "name": "浙江",
      "report": 56,
      "value": 216
  },
  {
      "total": 117330,
      "record": 998,
      "name": "湖北",
      "report": 45,
      "value": 191
  },
  {
      "total": 5199,
      "record": 825,
      "name": "上海",
      "report": 60,
      "value": 179
  },
  {
      "total": 11492,
      "record": 507,
      "name": "江西",
      "report": 22,
      "value": 170
  },
  {
      "total": 8215,
      "record": 628,
      "name": "广东",
      "report": 36,
      "value": 167
  },
  {
      "total": 670,
      "record": 261,
      "name": "江苏",
      "report": 13,
      "value": 158
  },
  {
      "total": 5952,
      "record": 294,
      "name": "湖南",
      "report": 23,
      "value": 156
  },
  {
      "total": 1709,
      "record": 327,
      "name": "贵州",
      "report": 15,
      "value": 155
  },
  {
      "total": 1538,
      "record": 367,
      "name": "甘肃",
      "report": 33,
      "value": 147
  },
  {
      "total": 349,
      "record": 218,
      "name": "四川",
      "report": 12,
      "value": 145
  },
  {
      "total": 354,
      "record": 354,
      "name": "河南",
      "report": 26,
      "value": 125
  },
  {
      "total": 864,
      "record": 196,
      "name": "广西",
      "report": 7,
      "value": 119
  },
  {
      "total": 410,
      "record": 224,
      "name": "北京",
      "report": 31,
      "value": 116
  },
  {
      "total": 129,
      "record": 129,
      "name": "台湾",
      "report": 2,
      "value": 115
  },
  {
      "total": 484,
      "record": 148,
      "name": "福建",
      "report": 7,
      "value": 94
  },
  {
      "total": 539,
      "record": 126,
      "name": "西藏",
      "report": 12,
      "value": 69
  },
  {
      "total": 85,
      "record": 85,
      "name": "海南",
      "report": 3,
      "value": 66
  },
  {
      "total": 449,
      "record": 98,
      "name": "香港",
      "report": 9,
      "value": 66
  },
  {
      "total": 182,
      "record": 49,
      "name": "山东",
      "report": 4,
      "value": 38
  },
  {
      "total": 110,
      "record": 46,
      "name": "陕西",
      "report": 4,
      "value": 37
  },
  {
      "total": 205,
      "record": 34,
      "name": "新疆",
      "report": 2,
      "value": 32
  },
  {
      "total": 80,
      "record": 26,
      "name": "青海",
      "report": 2,
      "value": 26
  },
  {
      "total": 8,
      "record": 8,
      "name": "安徽",
      "report": 1,
      "value": 8
  },
  {
      "total": 20,
      "record": 4,
      "name": "宁夏",
      "report": 1,
      "value": 4
  },
  {
      "total": 20,
      "record": 1,
      "name": "黑龙江",
      "report": 1,
      "value": 1
  },
  {
      "total": 1,
      "record": 1,
      "name": "内蒙古",
      "report": 1,
      "value": 1
  }
],
//2017
[
  {
      "total": 9862,
      "record": 2324,
      "name": "云南",
      "report": 93,
      "value": 502
  },
  {
      "total": 1978,
      "record": 1636,
      "name": "福建",
      "report": 63,
      "value": 266
  },
  {
      "total": 1200,
      "record": 918,
      "name": "河南",
      "report": 41,
      "value": 217
  },
  {
      "total": 4936,
      "record": 1114,
      "name": "广东",
      "report": 70,
      "value": 209
  },
  {
      "total": 8066,
      "record": 846,
      "name": "湖北",
      "report": 43,
      "value": 200
  },
  {
      "total": 949,
      "record": 316,
      "name": "四川",
      "report": 20,
      "value": 199
  },
  {
      "total": 1237,
      "record": 466,
      "name": "北京",
      "report": 55,
      "value": 188
  },
  {
      "total": 2183,
      "record": 338,
      "name": "广西",
      "report": 15,
      "value": 175
  },
  {
      "total": 7278,
      "record": 430,
      "name": "贵州",
      "report": 16,
      "value": 166
  },
  {
      "total": 2791,
      "record": 629,
      "name": "上海",
      "report": 39,
      "value": 159
  },
  {
      "total": 1283,
      "record": 303,
      "name": "江苏",
      "report": 12,
      "value": 158
  },
  {
      "total": 1519,
      "record": 445,
      "name": "浙江",
      "report": 31,
      "value": 135
  },
  {
      "total": 22787,
      "record": 316,
      "name": "江西",
      "report": 13,
      "value": 132
  },
  {
      "total": 768,
      "record": 173,
      "name": "新疆",
      "report": 7,
      "value": 123
  },
  {
      "total": 658,
      "record": 197,
      "name": "海南",
      "report": 7,
      "value": 118
  },
  {
      "total": 1445,
      "record": 301,
      "name": "湖南",
      "report": 38,
      "value": 110
  },
  {
      "total": 232,
      "record": 165,
      "name": "青海",
      "report": 12,
      "value": 107
  },
  {
      "total": 449,
      "record": 332,
      "name": "台湾",
      "report": 11,
      "value": 98
  },
  {
      "total": 2715,
      "record": 218,
      "name": "陕西",
      "report": 13,
      "value": 95
  },
  {
      "total": 1919,
      "record": 293,
      "name": "甘肃",
      "report": 43,
      "value": 90
  },
  {
      "total": 1320,
      "record": 85,
      "name": "香港",
      "report": 5,
      "value": 69
  },
  {
      "total": 1039,
      "record": 91,
      "name": "内蒙古",
      "report": 8,
      "value": 67
  },
  {
      "total": 143,
      "record": 57,
      "name": "山东",
      "report": 4,
      "value": 54
  },
  {
      "total": 79,
      "record": 79,
      "name": "河北",
      "report": 6,
      "value": 50
  },
  {
      "total": 172,
      "record": 41,
      "name": "重庆",
      "report": 1,
      "value": 40
  },
  {
      "total": 2765,
      "record": 37,
      "name": "吉林",
      "report": 6,
      "value": 33
  },
  {
      "total": 154,
      "record": 13,
      "name": "西藏",
      "report": 2,
      "value": 13
  },
  {
      "total": 12,
      "record": 12,
      "name": "天津",
      "report": 2,
      "value": 12
  },
  {
      "total": 9,
      "record": 9,
      "name": "辽宁",
      "report": 2,
      "value": 8
  },
  {
      "total": 7,
      "record": 3,
      "name": "山西",
      "report": 2,
      "value": 3
  }
],
//2018
[
  {
      "total": 24493,
      "record": 3481,
      "name": "云南",
      "report": 140,
      "value": 552
  },
  {
      "total": 4447,
      "record": 1380,
      "name": "广西",
      "report": 53,
      "value": 284
  },
  {
      "total": 1745,
      "record": 898,
      "name": "四川",
      "report": 32,
      "value": 273
  },
  {
      "total": 4386,
      "record": 1512,
      "name": "福建",
      "report": 76,
      "value": 258
  },
  {
      "total": 3749,
      "record": 1477,
      "name": "广东",
      "report": 105,
      "value": 245
  },
  {
      "total": 20114,
      "record": 1907,
      "name": "上海",
      "report": 121,
      "value": 234
  },
  {
      "total": 5863,
      "record": 971,
      "name": "贵州",
      "report": 54,
      "value": 233
  },
  {
      "total": 8390,
      "record": 1189,
      "name": "陕西",
      "report": 51,
      "value": 228
  },
  {
      "total": 18614,
      "record": 615,
      "name": "江苏",
      "report": 29,
      "value": 217
  },
  {
      "total": 1838,
      "record": 737,
      "name": "北京",
      "report": 76,
      "value": 212
  },
  {
      "total": 4373,
      "record": 679,
      "name": "湖北",
      "report": 29,
      "value": 209
  },
  {
      "total": 1815,
      "record": 604,
      "name": "新疆",
      "report": 42,
      "value": 194
  },
  {
      "total": 1360,
      "record": 532,
      "name": "甘肃",
      "report": 26,
      "value": 172
  },
  {
      "total": 3479,
      "record": 618,
      "name": "浙江",
      "report": 60,
      "value": 157
  },
  {
      "total": 19715,
      "record": 376,
      "name": "江西",
      "report": 15,
      "value": 146
  },
  {
      "total": 986,
      "record": 359,
      "name": "青海",
      "report": 21,
      "value": 146
  },
  {
      "total": 18411,
      "record": 759,
      "name": "湖南",
      "report": 75,
      "value": 139
  },
  {
      "total": 309,
      "record": 309,
      "name": "河南",
      "report": 14,
      "value": 133
  },
  {
      "total": 1676,
      "record": 353,
      "name": "内蒙古",
      "report": 17,
      "value": 125
  },
  {
      "total": 298,
      "record": 246,
      "name": "香港",
      "report": 11,
      "value": 115
  },
  {
      "total": 1629,
      "record": 253,
      "name": "西藏",
      "report": 19,
      "value": 115
  },
  {
      "total": 415,
      "record": 187,
      "name": "台湾",
      "report": 18,
      "value": 106
  },
  {
      "total": 350,
      "record": 79,
      "name": "海南",
      "report": 6,
      "value": 65
  },
  {
      "total": 686,
      "record": 109,
      "name": "山东",
      "report": 11,
      "value": 65
  },
  {
      "total": 740,
      "record": 118,
      "name": "重庆",
      "report": 4,
      "value": 60
  },
  {
      "total": 79,
      "record": 46,
      "name": "河北",
      "report": 4,
      "value": 44
  },
  {
      "total": 44,
      "record": 44,
      "name": "辽宁",
      "report": 4,
      "value": 41
  },
  {
      "total": 296,
      "record": 31,
      "name": "宁夏",
      "report": 3,
      "value": 29
  },
  {
      "total": 11,
      "record": 11,
      "name": "吉林",
      "report": 1,
      "value": 10
  },
  {
      "total": 66,
      "record": 7,
      "name": "黑龙江",
      "report": 1,
      "value": 7
  },
  {
      "total": 10,
      "record": 8,
      "name": "天津",
      "report": 6,
      "value": 6
  }
],
//2019
[
  {
      "total": 11519,
      "record": 5195,
      "name": "云南",
      "report": 219,
      "value": 614
  },
  {
      "total": 7516,
      "record": 3595,
      "name": "福建",
      "report": 134,
      "value": 317
  },
  {
      "total": 9190,
      "record": 2082,
      "name": "广东",
      "report": 157,
      "value": 292
  },
  {
      "total": 28059,
      "record": 1624,
      "name": "江苏",
      "report": 76,
      "value": 291
  },
  {
      "total": 23153,
      "record": 2743,
      "name": "上海",
      "report": 142,
      "value": 270
  },
  {
      "total": 1616,
      "record": 683,
      "name": "四川",
      "report": 42,
      "value": 267
  },
  {
      "total": 8472,
      "record": 823,
      "name": "湖北",
      "report": 43,
      "value": 260
  },
  {
      "total": 4732,
      "record": 1184,
      "name": "新疆",
      "report": 68,
      "value": 248
  },
  {
      "total": 7208,
      "record": 1582,
      "name": "北京",
      "report": 153,
      "value": 247
  },
  {
      "total": 8909,
      "record": 1857,
      "name": "陕西",
      "report": 79,
      "value": 241
  },
  {
      "total": 2074,
      "record": 988,
      "name": "广西",
      "report": 44,
      "value": 228
  },
  {
      "total": 4773,
      "record": 363,
      "name": "西藏",
      "report": 16,
      "value": 214
  },
  {
      "total": 932,
      "record": 575,
      "name": "河南",
      "report": 42,
      "value": 199
  },
  {
      "total": 2742,
      "record": 536,
      "name": "甘肃",
      "report": 37,
      "value": 188
  },
  {
      "total": 535,
      "record": 507,
      "name": "青海",
      "report": 23,
      "value": 183
  },
  {
      "total": 558,
      "record": 424,
      "name": "台湾",
      "report": 27,
      "value": 175
  },
  {
      "total": 2612,
      "record": 755,
      "name": "江西",
      "report": 27,
      "value": 171
  },
  {
      "total": 2603,
      "record": 571,
      "name": "浙江",
      "report": 67,
      "value": 164
  },
  {
      "total": 1761,
      "record": 260,
      "name": "贵州",
      "report": 9,
      "value": 143
  },
  {
      "total": 27928,
      "record": 589,
      "name": "湖南",
      "report": 60,
      "value": 141
  },
  {
      "total": 419,
      "record": 261,
      "name": "香港",
      "report": 21,
      "value": 127
  },
  {
      "total": 168,
      "record": 168,
      "name": "天津",
      "report": 11,
      "value": 127
  },
  {
      "total": 1098,
      "record": 250,
      "name": "河北",
      "report": 17,
      "value": 122
  },
  {
      "total": 271,
      "record": 233,
      "name": "山西",
      "report": 6,
      "value": 118
  },
  {
      "total": 388,
      "record": 289,
      "name": "内蒙古",
      "report": 23,
      "value": 118
  },
  {
      "total": 3224,
      "record": 130,
      "name": "安徽",
      "report": 9,
      "value": 90
  },
  {
      "total": 29104,
      "record": 138,
      "name": "辽宁",
      "report": 23,
      "value": 83
  },
  {
      "total": 1430,
      "record": 102,
      "name": "山东",
      "report": 10,
      "value": 78
  },
  {
      "total": 67,
      "record": 58,
      "name": "重庆",
      "report": 6,
      "value": 55
  },
  {
      "total": 50,
      "record": 50,
      "name": "宁夏",
      "report": 2,
      "value": 49
  },
  {
      "total": 48,
      "record": 48,
      "name": "海南",
      "report": 3,
      "value": 48
  },
  {
      "total": 28534,
      "record": 35,
      "name": "吉林",
      "report": 3,
      "value": 32
  },
  {
      "total": 70,
      "record": 19,
      "name": "黑龙江",
      "report": 3,
      "value": 17
  }
],
//2020
[
  {
      "total": 28823,
      "record": 7239,
      "name": "云南",
      "report": 312,
      "value": 640
  },
  {
      "total": 4501,
      "record": 2304,
      "name": "四川",
      "report": 128,
      "value": 367
  },
  {
      "total": 26523,
      "record": 2992,
      "name": "福建",
      "report": 166,
      "value": 340
  },
  {
      "total": 19943,
      "record": 5985,
      "name": "广东",
      "report": 312,
      "value": 334
  },
  {
      "total": 2170,
      "record": 1002,
      "name": "广西",
      "report": 31,
      "value": 332
  },
  {
      "total": 25891,
      "record": 2375,
      "name": "湖北",
      "report": 103,
      "value": 323
  },
  {
      "total": 30940,
      "record": 4724,
      "name": "北京",
      "report": 410,
      "value": 318
  },
  {
      "total": 46338,
      "record": 7083,
      "name": "上海",
      "report": 371,
      "value": 302
  },
  {
      "total": 12964,
      "record": 2354,
      "name": "浙江",
      "report": 176,
      "value": 296
  },
  {
      "total": 24332,
      "record": 1710,
      "name": "江苏",
      "report": 140,
      "value": 278
  },
  {
      "total": 1073,
      "record": 598,
      "name": "西藏",
      "report": 56,
      "value": 246
  },
  {
      "total": 6689,
      "record": 1546,
      "name": "湖南",
      "report": 87,
      "value": 242
  },
  {
      "total": 5250,
      "record": 2363,
      "name": "青海",
      "report": 131,
      "value": 239
  },
  {
      "total": 13781,
      "record": 783,
      "name": "河南",
      "report": 56,
      "value": 233
  },
  {
      "total": 19695,
      "record": 1570,
      "name": "江西",
      "report": 92,
      "value": 220
  },
  {
      "total": 4578,
      "record": 837,
      "name": "陕西",
      "report": 48,
      "value": 219
  },
  {
      "total": 4211,
      "record": 892,
      "name": "贵州",
      "report": 29,
      "value": 202
  },
  {
      "total": 7124,
      "record": 845,
      "name": "内蒙古",
      "report": 51,
      "value": 182
  },
  {
      "total": 1317,
      "record": 436,
      "name": "甘肃",
      "report": 40,
      "value": 173
  },
  {
      "total": 34713,
      "record": 467,
      "name": "山东",
      "report": 32,
      "value": 159
  },
  {
      "total": 3396,
      "record": 381,
      "name": "宁夏",
      "report": 25,
      "value": 149
  },
  {
      "total": 1738,
      "record": 270,
      "name": "辽宁",
      "report": 13,
      "value": 143
  },
  {
      "total": 6806,
      "record": 426,
      "name": "河北",
      "report": 25,
      "value": 140
  },
  {
      "total": 1147,
      "record": 372,
      "name": "海南",
      "report": 34,
      "value": 133
  },
  {
      "total": 1048,
      "record": 294,
      "name": "山西",
      "report": 31,
      "value": 107
  },
  {
      "total": 370,
      "record": 131,
      "name": "重庆",
      "report": 8,
      "value": 100
  },
  {
      "total": 104,
      "record": 104,
      "name": "香港",
      "report": 2,
      "value": 76
  },
  {
      "total": 1440,
      "record": 71,
      "name": "天津",
      "report": 15,
      "value": 64
  },
  {
      "total": 91,
      "record": 16,
      "name": "安徽",
      "report": 2,
      "value": 16
  },
  {
      "total": 354,
      "record": 10,
      "name": "吉林",
      "report": 1,
      "value": 10
  },
  {
      "total": 56,
      "record": 6,
      "name": "新疆",
      "report": 2,
      "value": 6
  }
],
//2021
[
  {
      "total": 31140,
      "record": 12117,
      "name": "云南",
      "report": 587,
      "value": 706
  },
  {
      "total": 30373,
      "record": 7536,
      "name": "四川",
      "report": 510,
      "value": 497
  },
  {
      "total": 52031,
      "record": 10557,
      "name": "福建",
      "report": 581,
      "value": 437
  },
  {
      "total": 8799,
      "record": 3531,
      "name": "西藏",
      "report": 174,
      "value": 416
  },
  {
      "total": 131839,
      "record": 18715,
      "name": "广东",
      "report": 1156,
      "value": 405
  },
  {
      "total": 5393,
      "record": 2324,
      "name": "广西",
      "report": 137,
      "value": 377
  },
  {
      "total": 101294,
      "record": 7741,
      "name": "湖北",
      "report": 448,
      "value": 376
  },
  {
      "total": 78207,
      "record": 8557,
      "name": "浙江",
      "report": 585,
      "value": 374
  },
  {
      "total": 155904,
      "record": 25185,
      "name": "北京",
      "report": 1729,
      "value": 372
  },
  {
      "total": 157065,
      "record": 20554,
      "name": "上海",
      "report": 1044,
      "value": 354
  },
  {
      "total": 29677,
      "record": 3265,
      "name": "新疆",
      "report": 244,
      "value": 341
  },
  {
      "total": 28623,
      "record": 4709,
      "name": "江苏",
      "report": 320,
      "value": 327
  },
  {
      "total": 33421,
      "record": 4376,
      "name": "河南",
      "report": 248,
      "value": 297
  },
  {
      "total": 17165,
      "record": 6946,
      "name": "湖南",
      "report": 401,
      "value": 289
  },
  {
      "total": 22450,
      "record": 3688,
      "name": "江西",
      "report": 192,
      "value": 282
  },
  {
      "total": 8312,
      "record": 2122,
      "name": "甘肃",
      "report": 160,
      "value": 277
  },
  {
      "total": 11040,
      "record": 2571,
      "name": "海南",
      "report": 194,
      "value": 276
  },
  {
      "total": 2192,
      "record": 1722,
      "name": "贵州",
      "report": 79,
      "value": 263
  },
  {
      "total": 5524,
      "record": 870,
      "name": "河北",
      "report": 55,
      "value": 247
  },
  {
      "total": 33541,
      "record": 1437,
      "name": "山东",
      "report": 114,
      "value": 242
  },
  {
      "total": 5008,
      "record": 1032,
      "name": "陕西",
      "report": 44,
      "value": 240
  },
  {
      "total": 4188,
      "record": 1925,
      "name": "青海",
      "report": 166,
      "value": 233
  },
  {
      "total": 13465,
      "record": 966,
      "name": "安徽",
      "report": 76,
      "value": 213
  },
  {
      "total": 8790,
      "record": 740,
      "name": "内蒙古",
      "report": 50,
      "value": 205
  },
  {
      "total": 16326,
      "record": 871,
      "name": "辽宁",
      "report": 66,
      "value": 205
  },
  {
      "total": 3032,
      "record": 742,
      "name": "天津",
      "report": 38,
      "value": 189
  },
  {
      "total": 14853,
      "record": 2403,
      "name": "重庆",
      "report": 118,
      "value": 185
  },
  {
      "total": 939,
      "record": 291,
      "name": "山西",
      "report": 22,
      "value": 141
  },
  {
      "total": 6863,
      "record": 226,
      "name": "吉林",
      "report": 23,
      "value": 111
  },
  {
      "total": 1059,
      "record": 286,
      "name": "宁夏",
      "report": 25,
      "value": 102
  },
  {
      "total": 543,
      "record": 80,
      "name": "黑龙江",
      "report": 5,
      "value": 31
  },
  {
      "total": 35,
      "record": 17,
      "name": "香港",
      "report": 2,
      "value": 15
  }
],
//2022
[
  {
      "total": 81224,
      "record": 19325,
      "name": "云南",
      "report": 1005,
      "value": 720
  },
  {
      "total": 61473,
      "record": 15049,
      "name": "四川",
      "report": 975,
      "value": 557
  },
  {
      "total": 198834,
      "record": 25009,
      "name": "浙江",
      "report": 1494,
      "value": 437
  },
  {
      "total": 165476,
      "record": 38907,
      "name": "广东",
      "report": 2413,
      "value": 434
  },
  {
      "total": 66411,
      "record": 16160,
      "name": "福建",
      "report": 879,
      "value": 433
  },
  {
      "total": 168701,
      "record": 21454,
      "name": "湖北",
      "report": 1008,
      "value": 429
  },
  {
      "total": 16282,
      "record": 4578,
      "name": "广西",
      "report": 322,
      "value": 420
  },
  {
      "total": 417533,
      "record": 69032,
      "name": "北京",
      "report": 4032,
      "value": 414
  },
  {
      "total": 90225,
      "record": 19254,
      "name": "湖南",
      "report": 1170,
      "value": 373
  },
  {
      "total": 49852,
      "record": 7581,
      "name": "新疆",
      "report": 510,
      "value": 360
  },
  {
      "total": 370446,
      "record": 41490,
      "name": "上海",
      "report": 2057,
      "value": 350
  },
  {
      "total": 123912,
      "record": 11319,
      "name": "江苏",
      "report": 760,
      "value": 340
  },
  {
      "total": 14505,
      "record": 3622,
      "name": "贵州",
      "report": 136,
      "value": 335
  },
  {
      "total": 57303,
      "record": 6492,
      "name": "江西",
      "report": 294,
      "value": 328
  },
  {
      "total": 26256,
      "record": 4709,
      "name": "重庆",
      "report": 307,
      "value": 318
  },
  {
      "total": 22722,
      "record": 5163,
      "name": "海南",
      "report": 363,
      "value": 302
  },
  {
      "total": 29472,
      "record": 4846,
      "name": "甘肃",
      "report": 335,
      "value": 301
  },
  {
      "total": 22884,
      "record": 5491,
      "name": "河南",
      "report": 327,
      "value": 295
  },
  {
      "total": 5897,
      "record": 946,
      "name": "西藏",
      "report": 69,
      "value": 288
  },
  {
      "total": 19860,
      "record": 6445,
      "name": "青海",
      "report": 420,
      "value": 279
  },
  {
      "total": 34353,
      "record": 3028,
      "name": "河北",
      "report": 176,
      "value": 256
  },
  {
      "total": 7600,
      "record": 1525,
      "name": "陕西",
      "report": 82,
      "value": 225
  },
  {
      "total": 35035,
      "record": 1779,
      "name": "辽宁",
      "report": 119,
      "value": 213
  },
  {
      "total": 41134,
      "record": 2111,
      "name": "山东",
      "report": 134,
      "value": 206
  },
  {
      "total": 10805,
      "record": 2538,
      "name": "天津",
      "report": 190,
      "value": 186
  },
  {
      "total": 12882,
      "record": 1043,
      "name": "安徽",
      "report": 95,
      "value": 178
  },
  {
      "total": 1492,
      "record": 312,
      "name": "山西",
      "report": 17,
      "value": 142
  },
  {
      "total": 1401,
      "record": 458,
      "name": "内蒙古",
      "report": 42,
      "value": 128
  },
  {
      "total": 4806,
      "record": 219,
      "name": "吉林",
      "report": 17,
      "value": 102
  },
  {
      "total": 1178,
      "record": 242,
      "name": "宁夏",
      "report": 16,
      "value": 102
  },
  {
      "total": 1417,
      "record": 241,
      "name": "黑龙江",
      "report": 22,
      "value": 96
  },
  {
      "total": 961,
      "record": 204,
      "name": "香港",
      "report": 14,
      "value": 56
  }
],
//2023
[
  {
      "total": 219506,
      "record": 70844,
      "name": "云南",
      "report": 3573,
      "value": 827
  },
  {
      "total": 234117,
      "record": 45772,
      "name": "四川",
      "report": 2975,
      "value": 638
  },
  {
      "total": 51650,
      "record": 20028,
      "name": "西藏",
      "report": 1170,
      "value": 559
  },
  {
      "total": 305135,
      "record": 23016,
      "name": "广西",
      "report": 1458,
      "value": 535
  },
  {
      "total": 578035,
      "record": 79463,
      "name": "浙江",
      "report": 5081,
      "value": 506
  },
  {
      "total": 377056,
      "record": 94244,
      "name": "广东",
      "report": 5978,
      "value": 499
  },
  {
      "total": 208429,
      "record": 45644,
      "name": "福建",
      "report": 2643,
      "value": 492
  },
  {
      "total": 667378,
      "record": 46149,
      "name": "湖北",
      "report": 2473,
      "value": 481
  },
  {
      "total": 390754,
      "record": 37006,
      "name": "湖南",
      "report": 2085,
      "value": 433
  },
  {
      "total": 504513,
      "record": 50827,
      "name": "江苏",
      "report": 2973,
      "value": 427
  },
  {
      "total": 690898,
      "record": 137792,
      "name": "北京",
      "report": 7345,
      "value": 421
  },
  {
      "total": 605179,
      "record": 95290,
      "name": "上海",
      "report": 4962,
      "value": 411
  },
  {
      "total": 98612,
      "record": 12485,
      "name": "甘肃",
      "report": 816,
      "value": 407
  },
  {
      "total": 65353,
      "record": 10077,
      "name": "陕西",
      "report": 636,
      "value": 399
  },
  {
      "total": 114295,
      "record": 23005,
      "name": "新疆",
      "report": 1737,
      "value": 391
  },
  {
      "total": 304330,
      "record": 30413,
      "name": "江西",
      "report": 1373,
      "value": 382
  },
  {
      "total": 110777,
      "record": 14451,
      "name": "河南",
      "report": 850,
      "value": 376
  },
  {
      "total": 148963,
      "record": 14640,
      "name": "河北",
      "report": 629,
      "value": 372
  },
  {
      "total": 42311,
      "record": 12467,
      "name": "海南",
      "report": 923,
      "value": 368
  },
  {
      "total": 281303,
      "record": 14885,
      "name": "山东",
      "report": 940,
      "value": 361
  },
  {
      "total": 34995,
      "record": 8661,
      "name": "重庆",
      "report": 637,
      "value": 360
  },
  {
      "total": 20381,
      "record": 7262,
      "name": "贵州",
      "report": 369,
      "value": 345
  },
  {
      "total": 47264,
      "record": 10460,
      "name": "青海",
      "report": 834,
      "value": 329
  },
  {
      "total": 43169,
      "record": 4375,
      "name": "内蒙古",
      "report": 355,
      "value": 327
  },
  {
      "total": 265085,
      "record": 16440,
      "name": "天津",
      "report": 914,
      "value": 323
  },
  {
      "total": 65815,
      "record": 7847,
      "name": "安徽",
      "report": 538,
      "value": 323
  },
  {
      "total": 101874,
      "record": 6100,
      "name": "辽宁",
      "report": 481,
      "value": 316
  },
  {
      "total": 232520,
      "record": 5830,
      "name": "吉林",
      "report": 418,
      "value": 300
  },
  {
      "total": 22232,
      "record": 3612,
      "name": "山西",
      "report": 286,
      "value": 257
  },
  {
      "total": 13755,
      "record": 3393,
      "name": "香港",
      "report": 149,
      "value": 255
  },
  {
      "total": 7860,
      "record": 1357,
      "name": "黑龙江",
      "report": 160,
      "value": 194
  },
  {
      "total": 10851,
      "record": 1050,
      "name": "宁夏",
      "report": 75,
      "value": 190
  },
  {
      "total": 1098,
      "record": 157,
      "name": "台湾",
      "report": 16,
      "value": 97
  },
  {
      "total": 1708,
      "record": 205,
      "name": "澳门",
      "report": 15,
      "value": 76
  }
],
//2024
[
  {
      "total": 772260,
      "record": 147319,
      "name": "云南",
      "report": 7614,
      "value": 828
  },
  {
      "total": 300213,
      "record": 48816,
      "name": "四川",
      "report": 3032,
      "value": 543
  },
  {
      "total": 939868,
      "record": 148881,
      "name": "广东",
      "report": 9472,
      "value": 473
  },
  {
      "total": 293400,
      "record": 23148,
      "name": "广西",
      "report": 1648,
      "value": 469
  },
  {
      "total": 51531,
      "record": 5773,
      "name": "西藏",
      "report": 376,
      "value": 441
  },
  {
      "total": 467063,
      "record": 59446,
      "name": "福建",
      "report": 3749,
      "value": 441
  },
  {
      "total": 137340,
      "record": 37271,
      "name": "海南",
      "report": 2433,
      "value": 387
  },
  {
      "total": 722924,
      "record": 83023,
      "name": "浙江",
      "report": 5471,
      "value": 384
  },
  {
      "total": 1137945,
      "record": 59601,
      "name": "湖北",
      "report": 3676,
      "value": 367
  },
  {
      "total": 1740955,
      "record": 92078,
      "name": "江苏",
      "report": 5148,
      "value": 355
  },
  {
      "total": 340550,
      "record": 39475,
      "name": "湖南",
      "report": 2337,
      "value": 354
  },
  {
      "total": 468486,
      "record": 43588,
      "name": "江西",
      "report": 2167,
      "value": 336
  },
  {
      "total": 1448188,
      "record": 174977,
      "name": "北京",
      "report": 10676,
      "value": 327
  },
  {
      "total": 896189,
      "record": 102696,
      "name": "上海",
      "report": 5936,
      "value": 326
  },
  {
      "total": 117899,
      "record": 15722,
      "name": "陕西",
      "report": 931,
      "value": 310
  },
  {
      "total": 211156,
      "record": 16089,
      "name": "安徽",
      "report": 1129,
      "value": 303
  },
  {
      "total": 42209,
      "record": 6642,
      "name": "贵州",
      "report": 392,
      "value": 286
  },
  {
      "total": 345467,
      "record": 26852,
      "name": "河南",
      "report": 1572,
      "value": 284
  },
  {
      "total": 297965,
      "record": 18971,
      "name": "山东",
      "report": 1574,
      "value": 283
  },
  {
      "total": 61298,
      "record": 10710,
      "name": "重庆",
      "report": 756,
      "value": 265
  },
  {
      "total": 37470,
      "record": 5301,
      "name": "甘肃",
      "report": 434,
      "value": 261
  },
  {
      "total": 441892,
      "record": 9638,
      "name": "新疆",
      "report": 842,
      "value": 254
  },
  {
      "total": 180746,
      "record": 8748,
      "name": "河北",
      "report": 622,
      "value": 243
  },
  {
      "total": 321529,
      "record": 11071,
      "name": "辽宁",
      "report": 1018,
      "value": 243
  },
  {
      "total": 24169,
      "record": 2047,
      "name": "台湾",
      "report": 167,
      "value": 239
  },
  {
      "total": 194451,
      "record": 7373,
      "name": "内蒙古",
      "report": 630,
      "value": 238
  },
  {
      "total": 38047,
      "record": 5723,
      "name": "香港",
      "report": 278,
      "value": 236
  },
  {
      "total": 417880,
      "record": 19622,
      "name": "天津",
      "report": 1432,
      "value": 224
  },
  {
      "total": 130776,
      "record": 6883,
      "name": "山西",
      "report": 612,
      "value": 222
  },
  {
      "total": 75188,
      "record": 2149,
      "name": "青海",
      "report": 147,
      "value": 208
  },
  {
      "total": 298717,
      "record": 10214,
      "name": "吉林",
      "report": 749,
      "value": 196
  },
  {
      "total": 35504,
      "record": 2673,
      "name": "宁夏",
      "report": 266,
      "value": 191
  },
  {
      "total": 8473,
      "record": 1365,
      "name": "黑龙江",
      "report": 276,
      "value": 104
  },
  {
      "total": 1020,
      "record": 389,
      "name": "澳门",
      "report": 41,
      "value": 91
  }
]
];
var updateFrequency = 2000; // 更新频率，单位为毫秒
var groupIndex = 0;
var dataIndex = 0;
// 递归函数，用于循环更新数据
function updateDataRecursively() {
  if (dataIndex < newArr.length) {
      updateChart(newArr[dataIndex]);
      dataIndex++;
      setTimeout(updateDataRecursively, updateFrequency); // 递归调用，等待一定时间后再次更新数据
  } else {
      // 数据更新完成后进行一些操作（可选）
      // 例如重新开始循环或者其他处理
      dataIndex = 0; // 重置索引以便重新开始循环
      setTimeout(updateDataRecursively, updateFrequency); // 重新开始循环
  }
}

// 开始循环更新数据
updateDataRecursively();

// 更新折线图数据的函数
function updateChart(newValue) {
  var option = myChart.getOption();
  // 处理数据
  var new_Data = convertData(newValue);
  var new_Data_1=convertData(newValue.sort(function (a, b) {
          return b.value - a.value;
        }).slice(0, 5));
  var year=2014+dataIndex;
  option.title[0].text="年份："+year,
  option.series[0].data = new_Data; // 更新系列数据（这里假设只有一个系列）
  option.series[1].data = new_Data;
  option.series[2].data = new_Data;
  option.series[3].data = new_Data_1;
  myChart.setOption(option);}
//----------------------------------------------------------
//配置柱形图
//-----------------------------------------------------------
  var barChart = echarts.init(document.querySelector(".bar .chart"));
  var rawData = [
    { name: '种类1', value: 10 },
    { name: '种类2', value: 20 },
    { name: '种类3', value: 30 },
    { name: '种类4', value: 40 },
    { name: '种类5', value: 50 },
];

// 排序数据
var sortedData = rawData.sort(function(a, b) {
    return a.value - b.value;
});

// 提取Y轴类别数据和系列数据
var yAxisData = sortedData.map(function(item) {
    return item.name;
});
var seriesData = sortedData.map(function(item) {
    return item.value;
});
var newArr_bar = [
    //2014
  [
    {
        "total": 1211,
        "record": 229,
        "name": "云南",
        "report": 17,
        "value": 159
    },
    {
        "total": 2596,
        "record": 236,
        "name": "陕西",
        "report": 9,
        "value": 153
    },
    {
        "total": 539,
        "record": 339,
        "name": "北京",
        "report": 68,
        "value": 147
    },
    {
        "total": 1758,
        "record": 286,
        "name": "贵州",
        "report": 16,
        "value": 133
    },
    {
        "total": 7833,
        "record": 448,
        "name": "上海",
        "report": 16,
        "value": 129
    },
    {
        "total": 3415,
        "record": 164,
        "name": "江苏",
        "report": 14,
        "value": 116
    },
    {
        "total": 951,
        "record": 113,
        "name": "江西",
        "report": 3,
        "value": 98
    },
    {
        "total": 7149,
        "record": 210,
        "name": "广东",
        "report": 7,
        "value": 97
    },
    {
        "total": 1353,
        "record": 172,
        "name": "内蒙古",
        "report": 6,
        "value": 91
    },
    {
        "total": 1728,
        "record": 131,
        "name": "湖北",
        "report": 6,
        "value": 89
    },
    {
        "total": 407,
        "record": 125,
        "name": "福建",
        "report": 10,
        "value": 85
    },
    {
        "total": 507,
        "record": 96,
        "name": "重庆",
        "report": 3,
        "value": 81
    },
    {
        "total": 98,
        "record": 98,
        "name": "甘肃",
        "report": 3,
        "value": 74
    },
    {
        "total": 902,
        "record": 89,
        "name": "四川",
        "report": 5,
        "value": 73
    },
    {
        "total": 1595,
        "record": 89,
        "name": "天津",
        "report": 4,
        "value": 67
    },
    {
        "total": 125,
        "record": 65,
        "name": "河南",
        "report": 6,
        "value": 49
    },
    {
        "total": 399,
        "record": 58,
        "name": "浙江",
        "report": 7,
        "value": 49
    },
    {
        "total": 297,
        "record": 40,
        "name": "湖南",
        "report": 12,
        "value": 36
    },
    {
        "total": 49,
        "record": 49,
        "name": "安徽",
        "report": 3,
        "value": 34
    },
    {
        "total": 132,
        "record": 44,
        "name": "宁夏",
        "report": 3,
        "value": 30
    },
    {
        "total": 23,
        "record": 23,
        "name": "西藏",
        "report": 2,
        "value": 21
    },
    {
        "total": 90,
        "record": 16,
        "name": "香港",
        "report": 2,
        "value": 16
    },
    {
        "total": 32,
        "record": 11,
        "name": "河北",
        "report": 2,
        "value": 10
    },
    {
        "total": 8,
        "record": 8,
        "name": "广西",
        "report": 1,
        "value": 8
    }
  ],
  //2015
  [
    {
        "total": 8833,
        "record": 1603,
        "name": "云南",
        "report": 45,
        "value": 414
    },
    {
        "total": 5255,
        "record": 471,
        "name": "江苏",
        "report": 19,
        "value": 268
    },
    {
        "total": 2902,
        "record": 1118,
        "name": "浙江",
        "report": 57,
        "value": 228
    },
    {
        "total": 35422,
        "record": 1076,
        "name": "湖北",
        "report": 35,
        "value": 226
    },
    {
        "total": 3322,
        "record": 561,
        "name": "贵州",
        "report": 21,
        "value": 190
    },
    {
        "total": 3093,
        "record": 499,
        "name": "新疆",
        "report": 27,
        "value": 178
    },
    {
        "total": 19758,
        "record": 463,
        "name": "青海",
        "report": 21,
        "value": 173
    },
    {
        "total": 6237,
        "record": 474,
        "name": "河南",
        "report": 36,
        "value": 154
    },
    {
        "total": 1476,
        "record": 410,
        "name": "北京",
        "report": 54,
        "value": 153
    },
    {
        "total": 3254,
        "record": 358,
        "name": "江西",
        "report": 11,
        "value": 146
    },
    {
        "total": 10614,
        "record": 570,
        "name": "上海",
        "report": 32,
        "value": 137
    },
    {
        "total": 450,
        "record": 204,
        "name": "广西",
        "report": 11,
        "value": 122
    },
    {
        "total": 1510,
        "record": 194,
        "name": "甘肃",
        "report": 13,
        "value": 122
    },
    {
        "total": 512,
        "record": 173,
        "name": "四川",
        "report": 13,
        "value": 118
    },
    {
        "total": 1760,
        "record": 209,
        "name": "湖南",
        "report": 18,
        "value": 118
    },
    {
        "total": 4684,
        "record": 216,
        "name": "广东",
        "report": 13,
        "value": 107
    },
    {
        "total": 803,
        "record": 166,
        "name": "福建",
        "report": 18,
        "value": 104
    },
    {
        "total": 689,
        "record": 135,
        "name": "陕西",
        "report": 4,
        "value": 83
    },
    {
        "total": 641,
        "record": 113,
        "name": "西藏",
        "report": 7,
        "value": 73
    },
    {
        "total": 1756,
        "record": 27,
        "name": "山东",
        "report": 5,
        "value": 23
    },
    {
        "total": 176,
        "record": 24,
        "name": "海南",
        "report": 2,
        "value": 23
    },
    {
        "total": 22,
        "record": 22,
        "name": "河北",
        "report": 3,
        "value": 21
    },
    {
        "total": 13,
        "record": 13,
        "name": "安徽",
        "report": 2,
        "value": 13
    },
    {
        "total": 876,
        "record": 11,
        "name": "辽宁",
        "report": 2,
        "value": 11
    },
    {
        "total": 1,
        "record": 1,
        "name": "重庆",
        "report": 1,
        "value": 1
    }
  ],
  //2016
  [
    {
        "total": 9570,
        "record": 1740,
        "name": "云南",
        "report": 60,
        "value": 471
    },
    {
        "total": 2508,
        "record": 907,
        "name": "浙江",
        "report": 56,
        "value": 216
    },
    {
        "total": 117330,
        "record": 998,
        "name": "湖北",
        "report": 45,
        "value": 191
    },
    {
        "total": 5199,
        "record": 825,
        "name": "上海",
        "report": 60,
        "value": 179
    },
    {
        "total": 11492,
        "record": 507,
        "name": "江西",
        "report": 22,
        "value": 170
    },
    {
        "total": 8215,
        "record": 628,
        "name": "广东",
        "report": 36,
        "value": 167
    },
    {
        "total": 670,
        "record": 261,
        "name": "江苏",
        "report": 13,
        "value": 158
    },
    {
        "total": 5952,
        "record": 294,
        "name": "湖南",
        "report": 23,
        "value": 156
    },
    {
        "total": 1709,
        "record": 327,
        "name": "贵州",
        "report": 15,
        "value": 155
    },
    {
        "total": 1538,
        "record": 367,
        "name": "甘肃",
        "report": 33,
        "value": 147
    },
    {
        "total": 349,
        "record": 218,
        "name": "四川",
        "report": 12,
        "value": 145
    },
    {
        "total": 354,
        "record": 354,
        "name": "河南",
        "report": 26,
        "value": 125
    },
    {
        "total": 864,
        "record": 196,
        "name": "广西",
        "report": 7,
        "value": 119
    },
    {
        "total": 410,
        "record": 224,
        "name": "北京",
        "report": 31,
        "value": 116
    },
    {
        "total": 129,
        "record": 129,
        "name": "台湾",
        "report": 2,
        "value": 115
    },
    {
        "total": 484,
        "record": 148,
        "name": "福建",
        "report": 7,
        "value": 94
    },
    {
        "total": 539,
        "record": 126,
        "name": "西藏",
        "report": 12,
        "value": 69
    },
    {
        "total": 85,
        "record": 85,
        "name": "海南",
        "report": 3,
        "value": 66
    },
    {
        "total": 449,
        "record": 98,
        "name": "香港",
        "report": 9,
        "value": 66
    },
    {
        "total": 182,
        "record": 49,
        "name": "山东",
        "report": 4,
        "value": 38
    },
    {
        "total": 110,
        "record": 46,
        "name": "陕西",
        "report": 4,
        "value": 37
    },
    {
        "total": 205,
        "record": 34,
        "name": "新疆",
        "report": 2,
        "value": 32
    },
    {
        "total": 80,
        "record": 26,
        "name": "青海",
        "report": 2,
        "value": 26
    },
    {
        "total": 8,
        "record": 8,
        "name": "安徽",
        "report": 1,
        "value": 8
    },
    {
        "total": 20,
        "record": 4,
        "name": "宁夏",
        "report": 1,
        "value": 4
    },
    {
        "total": 20,
        "record": 1,
        "name": "黑龙江",
        "report": 1,
        "value": 1
    },
    {
        "total": 1,
        "record": 1,
        "name": "内蒙古",
        "report": 1,
        "value": 1
    }
  ],
  //2017
  [
    {
        "total": 9862,
        "record": 2324,
        "name": "云南",
        "report": 93,
        "value": 502
    },
    {
        "total": 1978,
        "record": 1636,
        "name": "福建",
        "report": 63,
        "value": 266
    },
    {
        "total": 1200,
        "record": 918,
        "name": "河南",
        "report": 41,
        "value": 217
    },
    {
        "total": 4936,
        "record": 1114,
        "name": "广东",
        "report": 70,
        "value": 209
    },
    {
        "total": 8066,
        "record": 846,
        "name": "湖北",
        "report": 43,
        "value": 200
    },
    {
        "total": 949,
        "record": 316,
        "name": "四川",
        "report": 20,
        "value": 199
    },
    {
        "total": 1237,
        "record": 466,
        "name": "北京",
        "report": 55,
        "value": 188
    },
    {
        "total": 2183,
        "record": 338,
        "name": "广西",
        "report": 15,
        "value": 175
    },
    {
        "total": 7278,
        "record": 430,
        "name": "贵州",
        "report": 16,
        "value": 166
    },
    {
        "total": 2791,
        "record": 629,
        "name": "上海",
        "report": 39,
        "value": 159
    },
    {
        "total": 1283,
        "record": 303,
        "name": "江苏",
        "report": 12,
        "value": 158
    },
    {
        "total": 1519,
        "record": 445,
        "name": "浙江",
        "report": 31,
        "value": 135
    },
    {
        "total": 22787,
        "record": 316,
        "name": "江西",
        "report": 13,
        "value": 132
    },
    {
        "total": 768,
        "record": 173,
        "name": "新疆",
        "report": 7,
        "value": 123
    },
    {
        "total": 658,
        "record": 197,
        "name": "海南",
        "report": 7,
        "value": 118
    },
    {
        "total": 1445,
        "record": 301,
        "name": "湖南",
        "report": 38,
        "value": 110
    },
    {
        "total": 232,
        "record": 165,
        "name": "青海",
        "report": 12,
        "value": 107
    },
    {
        "total": 449,
        "record": 332,
        "name": "台湾",
        "report": 11,
        "value": 98
    },
    {
        "total": 2715,
        "record": 218,
        "name": "陕西",
        "report": 13,
        "value": 95
    },
    {
        "total": 1919,
        "record": 293,
        "name": "甘肃",
        "report": 43,
        "value": 90
    },
    {
        "total": 1320,
        "record": 85,
        "name": "香港",
        "report": 5,
        "value": 69
    },
    {
        "total": 1039,
        "record": 91,
        "name": "内蒙古",
        "report": 8,
        "value": 67
    },
    {
        "total": 143,
        "record": 57,
        "name": "山东",
        "report": 4,
        "value": 54
    },
    {
        "total": 79,
        "record": 79,
        "name": "河北",
        "report": 6,
        "value": 50
    },
    {
        "total": 172,
        "record": 41,
        "name": "重庆",
        "report": 1,
        "value": 40
    },
    {
        "total": 2765,
        "record": 37,
        "name": "吉林",
        "report": 6,
        "value": 33
    },
    {
        "total": 154,
        "record": 13,
        "name": "西藏",
        "report": 2,
        "value": 13
    },
    {
        "total": 12,
        "record": 12,
        "name": "天津",
        "report": 2,
        "value": 12
    },
    {
        "total": 9,
        "record": 9,
        "name": "辽宁",
        "report": 2,
        "value": 8
    },
    {
        "total": 7,
        "record": 3,
        "name": "山西",
        "report": 2,
        "value": 3
    }
  ],
  //2018
  [
    {
        "total": 24493,
        "record": 3481,
        "name": "云南",
        "report": 140,
        "value": 552
    },
    {
        "total": 4447,
        "record": 1380,
        "name": "广西",
        "report": 53,
        "value": 284
    },
    {
        "total": 1745,
        "record": 898,
        "name": "四川",
        "report": 32,
        "value": 273
    },
    {
        "total": 4386,
        "record": 1512,
        "name": "福建",
        "report": 76,
        "value": 258
    },
    {
        "total": 3749,
        "record": 1477,
        "name": "广东",
        "report": 105,
        "value": 245
    },
    {
        "total": 20114,
        "record": 1907,
        "name": "上海",
        "report": 121,
        "value": 234
    },
    {
        "total": 5863,
        "record": 971,
        "name": "贵州",
        "report": 54,
        "value": 233
    },
    {
        "total": 8390,
        "record": 1189,
        "name": "陕西",
        "report": 51,
        "value": 228
    },
    {
        "total": 18614,
        "record": 615,
        "name": "江苏",
        "report": 29,
        "value": 217
    },
    {
        "total": 1838,
        "record": 737,
        "name": "北京",
        "report": 76,
        "value": 212
    },
    {
        "total": 4373,
        "record": 679,
        "name": "湖北",
        "report": 29,
        "value": 209
    },
    {
        "total": 1815,
        "record": 604,
        "name": "新疆",
        "report": 42,
        "value": 194
    },
    {
        "total": 1360,
        "record": 532,
        "name": "甘肃",
        "report": 26,
        "value": 172
    },
    {
        "total": 3479,
        "record": 618,
        "name": "浙江",
        "report": 60,
        "value": 157
    },
    {
        "total": 19715,
        "record": 376,
        "name": "江西",
        "report": 15,
        "value": 146
    },
    {
        "total": 986,
        "record": 359,
        "name": "青海",
        "report": 21,
        "value": 146
    },
    {
        "total": 18411,
        "record": 759,
        "name": "湖南",
        "report": 75,
        "value": 139
    },
    {
        "total": 309,
        "record": 309,
        "name": "河南",
        "report": 14,
        "value": 133
    },
    {
        "total": 1676,
        "record": 353,
        "name": "内蒙古",
        "report": 17,
        "value": 125
    },
    {
        "total": 298,
        "record": 246,
        "name": "香港",
        "report": 11,
        "value": 115
    },
    {
        "total": 1629,
        "record": 253,
        "name": "西藏",
        "report": 19,
        "value": 115
    },
    {
        "total": 415,
        "record": 187,
        "name": "台湾",
        "report": 18,
        "value": 106
    },
    {
        "total": 350,
        "record": 79,
        "name": "海南",
        "report": 6,
        "value": 65
    },
    {
        "total": 686,
        "record": 109,
        "name": "山东",
        "report": 11,
        "value": 65
    },
    {
        "total": 740,
        "record": 118,
        "name": "重庆",
        "report": 4,
        "value": 60
    },
    {
        "total": 79,
        "record": 46,
        "name": "河北",
        "report": 4,
        "value": 44
    },
    {
        "total": 44,
        "record": 44,
        "name": "辽宁",
        "report": 4,
        "value": 41
    },
    {
        "total": 296,
        "record": 31,
        "name": "宁夏",
        "report": 3,
        "value": 29
    },
    {
        "total": 11,
        "record": 11,
        "name": "吉林",
        "report": 1,
        "value": 10
    },
    {
        "total": 66,
        "record": 7,
        "name": "黑龙江",
        "report": 1,
        "value": 7
    },
    {
        "total": 10,
        "record": 8,
        "name": "天津",
        "report": 6,
        "value": 6
    }
  ],
  //2019
  [
    {
        "total": 11519,
        "record": 5195,
        "name": "云南",
        "report": 219,
        "value": 614
    },
    {
        "total": 7516,
        "record": 3595,
        "name": "福建",
        "report": 134,
        "value": 317
    },
    {
        "total": 9190,
        "record": 2082,
        "name": "广东",
        "report": 157,
        "value": 292
    },
    {
        "total": 28059,
        "record": 1624,
        "name": "江苏",
        "report": 76,
        "value": 291
    },
    {
        "total": 23153,
        "record": 2743,
        "name": "上海",
        "report": 142,
        "value": 270
    },
    {
        "total": 1616,
        "record": 683,
        "name": "四川",
        "report": 42,
        "value": 267
    },
    {
        "total": 8472,
        "record": 823,
        "name": "湖北",
        "report": 43,
        "value": 260
    },
    {
        "total": 4732,
        "record": 1184,
        "name": "新疆",
        "report": 68,
        "value": 248
    },
    {
        "total": 7208,
        "record": 1582,
        "name": "北京",
        "report": 153,
        "value": 247
    },
    {
        "total": 8909,
        "record": 1857,
        "name": "陕西",
        "report": 79,
        "value": 241
    },
    {
        "total": 2074,
        "record": 988,
        "name": "广西",
        "report": 44,
        "value": 228
    },
    {
        "total": 4773,
        "record": 363,
        "name": "西藏",
        "report": 16,
        "value": 214
    },
    {
        "total": 932,
        "record": 575,
        "name": "河南",
        "report": 42,
        "value": 199
    },
    {
        "total": 2742,
        "record": 536,
        "name": "甘肃",
        "report": 37,
        "value": 188
    },
    {
        "total": 535,
        "record": 507,
        "name": "青海",
        "report": 23,
        "value": 183
    },
    {
        "total": 558,
        "record": 424,
        "name": "台湾",
        "report": 27,
        "value": 175
    },
    {
        "total": 2612,
        "record": 755,
        "name": "江西",
        "report": 27,
        "value": 171
    },
    {
        "total": 2603,
        "record": 571,
        "name": "浙江",
        "report": 67,
        "value": 164
    },
    {
        "total": 1761,
        "record": 260,
        "name": "贵州",
        "report": 9,
        "value": 143
    },
    {
        "total": 27928,
        "record": 589,
        "name": "湖南",
        "report": 60,
        "value": 141
    },
    {
        "total": 419,
        "record": 261,
        "name": "香港",
        "report": 21,
        "value": 127
    },
    {
        "total": 168,
        "record": 168,
        "name": "天津",
        "report": 11,
        "value": 127
    },
    {
        "total": 1098,
        "record": 250,
        "name": "河北",
        "report": 17,
        "value": 122
    },
    {
        "total": 271,
        "record": 233,
        "name": "山西",
        "report": 6,
        "value": 118
    },
    {
        "total": 388,
        "record": 289,
        "name": "内蒙古",
        "report": 23,
        "value": 118
    },
    {
        "total": 3224,
        "record": 130,
        "name": "安徽",
        "report": 9,
        "value": 90
    },
    {
        "total": 29104,
        "record": 138,
        "name": "辽宁",
        "report": 23,
        "value": 83
    },
    {
        "total": 1430,
        "record": 102,
        "name": "山东",
        "report": 10,
        "value": 78
    },
    {
        "total": 67,
        "record": 58,
        "name": "重庆",
        "report": 6,
        "value": 55
    },
    {
        "total": 50,
        "record": 50,
        "name": "宁夏",
        "report": 2,
        "value": 49
    },
    {
        "total": 48,
        "record": 48,
        "name": "海南",
        "report": 3,
        "value": 48
    },
    {
        "total": 28534,
        "record": 35,
        "name": "吉林",
        "report": 3,
        "value": 32
    },
    {
        "total": 70,
        "record": 19,
        "name": "黑龙江",
        "report": 3,
        "value": 17
    }
  ],
  //2020
  [
    {
        "total": 28823,
        "record": 7239,
        "name": "云南",
        "report": 312,
        "value": 640
    },
    {
        "total": 4501,
        "record": 2304,
        "name": "四川",
        "report": 128,
        "value": 367
    },
    {
        "total": 26523,
        "record": 2992,
        "name": "福建",
        "report": 166,
        "value": 340
    },
    {
        "total": 19943,
        "record": 5985,
        "name": "广东",
        "report": 312,
        "value": 334
    },
    {
        "total": 2170,
        "record": 1002,
        "name": "广西",
        "report": 31,
        "value": 332
    },
    {
        "total": 25891,
        "record": 2375,
        "name": "湖北",
        "report": 103,
        "value": 323
    },
    {
        "total": 30940,
        "record": 4724,
        "name": "北京",
        "report": 410,
        "value": 318
    },
    {
        "total": 46338,
        "record": 7083,
        "name": "上海",
        "report": 371,
        "value": 302
    },
    {
        "total": 12964,
        "record": 2354,
        "name": "浙江",
        "report": 176,
        "value": 296
    },
    {
        "total": 24332,
        "record": 1710,
        "name": "江苏",
        "report": 140,
        "value": 278
    },
    {
        "total": 1073,
        "record": 598,
        "name": "西藏",
        "report": 56,
        "value": 246
    },
    {
        "total": 6689,
        "record": 1546,
        "name": "湖南",
        "report": 87,
        "value": 242
    },
    {
        "total": 5250,
        "record": 2363,
        "name": "青海",
        "report": 131,
        "value": 239
    },
    {
        "total": 13781,
        "record": 783,
        "name": "河南",
        "report": 56,
        "value": 233
    },
    {
        "total": 19695,
        "record": 1570,
        "name": "江西",
        "report": 92,
        "value": 220
    },
    {
        "total": 4578,
        "record": 837,
        "name": "陕西",
        "report": 48,
        "value": 219
    },
    {
        "total": 4211,
        "record": 892,
        "name": "贵州",
        "report": 29,
        "value": 202
    },
    {
        "total": 7124,
        "record": 845,
        "name": "内蒙古",
        "report": 51,
        "value": 182
    },
    {
        "total": 1317,
        "record": 436,
        "name": "甘肃",
        "report": 40,
        "value": 173
    },
    {
        "total": 34713,
        "record": 467,
        "name": "山东",
        "report": 32,
        "value": 159
    },
    {
        "total": 3396,
        "record": 381,
        "name": "宁夏",
        "report": 25,
        "value": 149
    },
    {
        "total": 1738,
        "record": 270,
        "name": "辽宁",
        "report": 13,
        "value": 143
    },
    {
        "total": 6806,
        "record": 426,
        "name": "河北",
        "report": 25,
        "value": 140
    },
    {
        "total": 1147,
        "record": 372,
        "name": "海南",
        "report": 34,
        "value": 133
    },
    {
        "total": 1048,
        "record": 294,
        "name": "山西",
        "report": 31,
        "value": 107
    },
    {
        "total": 370,
        "record": 131,
        "name": "重庆",
        "report": 8,
        "value": 100
    },
    {
        "total": 104,
        "record": 104,
        "name": "香港",
        "report": 2,
        "value": 76
    },
    {
        "total": 1440,
        "record": 71,
        "name": "天津",
        "report": 15,
        "value": 64
    },
    {
        "total": 91,
        "record": 16,
        "name": "安徽",
        "report": 2,
        "value": 16
    },
    {
        "total": 354,
        "record": 10,
        "name": "吉林",
        "report": 1,
        "value": 10
    },
    {
        "total": 56,
        "record": 6,
        "name": "新疆",
        "report": 2,
        "value": 6
    }
  ],
  //2021
  [
    {
        "total": 31140,
        "record": 12117,
        "name": "云南",
        "report": 587,
        "value": 706
    },
    {
        "total": 30373,
        "record": 7536,
        "name": "四川",
        "report": 510,
        "value": 497
    },
    {
        "total": 52031,
        "record": 10557,
        "name": "福建",
        "report": 581,
        "value": 437
    },
    {
        "total": 8799,
        "record": 3531,
        "name": "西藏",
        "report": 174,
        "value": 416
    },
    {
        "total": 131839,
        "record": 18715,
        "name": "广东",
        "report": 1156,
        "value": 405
    },
    {
        "total": 5393,
        "record": 2324,
        "name": "广西",
        "report": 137,
        "value": 377
    },
    {
        "total": 101294,
        "record": 7741,
        "name": "湖北",
        "report": 448,
        "value": 376
    },
    {
        "total": 78207,
        "record": 8557,
        "name": "浙江",
        "report": 585,
        "value": 374
    },
    {
        "total": 155904,
        "record": 25185,
        "name": "北京",
        "report": 1729,
        "value": 372
    },
    {
        "total": 157065,
        "record": 20554,
        "name": "上海",
        "report": 1044,
        "value": 354
    },
    {
        "total": 29677,
        "record": 3265,
        "name": "新疆",
        "report": 244,
        "value": 341
    },
    {
        "total": 28623,
        "record": 4709,
        "name": "江苏",
        "report": 320,
        "value": 327
    },
    {
        "total": 33421,
        "record": 4376,
        "name": "河南",
        "report": 248,
        "value": 297
    },
    {
        "total": 17165,
        "record": 6946,
        "name": "湖南",
        "report": 401,
        "value": 289
    },
    {
        "total": 22450,
        "record": 3688,
        "name": "江西",
        "report": 192,
        "value": 282
    },
    {
        "total": 8312,
        "record": 2122,
        "name": "甘肃",
        "report": 160,
        "value": 277
    },
    {
        "total": 11040,
        "record": 2571,
        "name": "海南",
        "report": 194,
        "value": 276
    },
    {
        "total": 2192,
        "record": 1722,
        "name": "贵州",
        "report": 79,
        "value": 263
    },
    {
        "total": 5524,
        "record": 870,
        "name": "河北",
        "report": 55,
        "value": 247
    },
    {
        "total": 33541,
        "record": 1437,
        "name": "山东",
        "report": 114,
        "value": 242
    },
    {
        "total": 5008,
        "record": 1032,
        "name": "陕西",
        "report": 44,
        "value": 240
    },
    {
        "total": 4188,
        "record": 1925,
        "name": "青海",
        "report": 166,
        "value": 233
    },
    {
        "total": 13465,
        "record": 966,
        "name": "安徽",
        "report": 76,
        "value": 213
    },
    {
        "total": 8790,
        "record": 740,
        "name": "内蒙古",
        "report": 50,
        "value": 205
    },
    {
        "total": 16326,
        "record": 871,
        "name": "辽宁",
        "report": 66,
        "value": 205
    },
    {
        "total": 3032,
        "record": 742,
        "name": "天津",
        "report": 38,
        "value": 189
    },
    {
        "total": 14853,
        "record": 2403,
        "name": "重庆",
        "report": 118,
        "value": 185
    },
    {
        "total": 939,
        "record": 291,
        "name": "山西",
        "report": 22,
        "value": 141
    },
    {
        "total": 6863,
        "record": 226,
        "name": "吉林",
        "report": 23,
        "value": 111
    },
    {
        "total": 1059,
        "record": 286,
        "name": "宁夏",
        "report": 25,
        "value": 102
    },
    {
        "total": 543,
        "record": 80,
        "name": "黑龙江",
        "report": 5,
        "value": 31
    },
    {
        "total": 35,
        "record": 17,
        "name": "香港",
        "report": 2,
        "value": 15
    }
  ],
  //2022
  [
    {
        "total": 81224,
        "record": 19325,
        "name": "云南",
        "report": 1005,
        "value": 720
    },
    {
        "total": 61473,
        "record": 15049,
        "name": "四川",
        "report": 975,
        "value": 557
    },
    {
        "total": 198834,
        "record": 25009,
        "name": "浙江",
        "report": 1494,
        "value": 437
    },
    {
        "total": 165476,
        "record": 38907,
        "name": "广东",
        "report": 2413,
        "value": 434
    },
    {
        "total": 66411,
        "record": 16160,
        "name": "福建",
        "report": 879,
        "value": 433
    },
    {
        "total": 168701,
        "record": 21454,
        "name": "湖北",
        "report": 1008,
        "value": 429
    },
    {
        "total": 16282,
        "record": 4578,
        "name": "广西",
        "report": 322,
        "value": 420
    },
    {
        "total": 417533,
        "record": 69032,
        "name": "北京",
        "report": 4032,
        "value": 414
    },
    {
        "total": 90225,
        "record": 19254,
        "name": "湖南",
        "report": 1170,
        "value": 373
    },
    {
        "total": 49852,
        "record": 7581,
        "name": "新疆",
        "report": 510,
        "value": 360
    },
    {
        "total": 370446,
        "record": 41490,
        "name": "上海",
        "report": 2057,
        "value": 350
    },
    {
        "total": 123912,
        "record": 11319,
        "name": "江苏",
        "report": 760,
        "value": 340
    },
    {
        "total": 14505,
        "record": 3622,
        "name": "贵州",
        "report": 136,
        "value": 335
    },
    {
        "total": 57303,
        "record": 6492,
        "name": "江西",
        "report": 294,
        "value": 328
    },
    {
        "total": 26256,
        "record": 4709,
        "name": "重庆",
        "report": 307,
        "value": 318
    },
    {
        "total": 22722,
        "record": 5163,
        "name": "海南",
        "report": 363,
        "value": 302
    },
    {
        "total": 29472,
        "record": 4846,
        "name": "甘肃",
        "report": 335,
        "value": 301
    },
    {
        "total": 22884,
        "record": 5491,
        "name": "河南",
        "report": 327,
        "value": 295
    },
    {
        "total": 5897,
        "record": 946,
        "name": "西藏",
        "report": 69,
        "value": 288
    },
    {
        "total": 19860,
        "record": 6445,
        "name": "青海",
        "report": 420,
        "value": 279
    },
    {
        "total": 34353,
        "record": 3028,
        "name": "河北",
        "report": 176,
        "value": 256
    },
    {
        "total": 7600,
        "record": 1525,
        "name": "陕西",
        "report": 82,
        "value": 225
    },
    {
        "total": 35035,
        "record": 1779,
        "name": "辽宁",
        "report": 119,
        "value": 213
    },
    {
        "total": 41134,
        "record": 2111,
        "name": "山东",
        "report": 134,
        "value": 206
    },
    {
        "total": 10805,
        "record": 2538,
        "name": "天津",
        "report": 190,
        "value": 186
    },
    {
        "total": 12882,
        "record": 1043,
        "name": "安徽",
        "report": 95,
        "value": 178
    },
    {
        "total": 1492,
        "record": 312,
        "name": "山西",
        "report": 17,
        "value": 142
    },
    {
        "total": 1401,
        "record": 458,
        "name": "内蒙古",
        "report": 42,
        "value": 128
    },
    {
        "total": 4806,
        "record": 219,
        "name": "吉林",
        "report": 17,
        "value": 102
    },
    {
        "total": 1178,
        "record": 242,
        "name": "宁夏",
        "report": 16,
        "value": 102
    },
    {
        "total": 1417,
        "record": 241,
        "name": "黑龙江",
        "report": 22,
        "value": 96
    },
    {
        "total": 961,
        "record": 204,
        "name": "香港",
        "report": 14,
        "value": 56
    }
  ],
  //2023
  [
    {
        "total": 219506,
        "record": 70844,
        "name": "云南",
        "report": 3573,
        "value": 827
    },
    {
        "total": 234117,
        "record": 45772,
        "name": "四川",
        "report": 2975,
        "value": 638
    },
    {
        "total": 51650,
        "record": 20028,
        "name": "西藏",
        "report": 1170,
        "value": 559
    },
    {
        "total": 305135,
        "record": 23016,
        "name": "广西",
        "report": 1458,
        "value": 535
    },
    {
        "total": 578035,
        "record": 79463,
        "name": "浙江",
        "report": 5081,
        "value": 506
    },
    {
        "total": 377056,
        "record": 94244,
        "name": "广东",
        "report": 5978,
        "value": 499
    },
    {
        "total": 208429,
        "record": 45644,
        "name": "福建",
        "report": 2643,
        "value": 492
    },
    {
        "total": 667378,
        "record": 46149,
        "name": "湖北",
        "report": 2473,
        "value": 481
    },
    {
        "total": 390754,
        "record": 37006,
        "name": "湖南",
        "report": 2085,
        "value": 433
    },
    {
        "total": 504513,
        "record": 50827,
        "name": "江苏",
        "report": 2973,
        "value": 427
    },
    {
        "total": 690898,
        "record": 137792,
        "name": "北京",
        "report": 7345,
        "value": 421
    },
    {
        "total": 605179,
        "record": 95290,
        "name": "上海",
        "report": 4962,
        "value": 411
    },
    {
        "total": 98612,
        "record": 12485,
        "name": "甘肃",
        "report": 816,
        "value": 407
    },
    {
        "total": 65353,
        "record": 10077,
        "name": "陕西",
        "report": 636,
        "value": 399
    },
    {
        "total": 114295,
        "record": 23005,
        "name": "新疆",
        "report": 1737,
        "value": 391
    },
    {
        "total": 304330,
        "record": 30413,
        "name": "江西",
        "report": 1373,
        "value": 382
    },
    {
        "total": 110777,
        "record": 14451,
        "name": "河南",
        "report": 850,
        "value": 376
    },
    {
        "total": 148963,
        "record": 14640,
        "name": "河北",
        "report": 629,
        "value": 372
    },
    {
        "total": 42311,
        "record": 12467,
        "name": "海南",
        "report": 923,
        "value": 368
    },
    {
        "total": 281303,
        "record": 14885,
        "name": "山东",
        "report": 940,
        "value": 361
    },
    {
        "total": 34995,
        "record": 8661,
        "name": "重庆",
        "report": 637,
        "value": 360
    },
    {
        "total": 20381,
        "record": 7262,
        "name": "贵州",
        "report": 369,
        "value": 345
    },
    {
        "total": 47264,
        "record": 10460,
        "name": "青海",
        "report": 834,
        "value": 329
    },
    {
        "total": 43169,
        "record": 4375,
        "name": "内蒙古",
        "report": 355,
        "value": 327
    },
    {
        "total": 265085,
        "record": 16440,
        "name": "天津",
        "report": 914,
        "value": 323
    },
    {
        "total": 65815,
        "record": 7847,
        "name": "安徽",
        "report": 538,
        "value": 323
    },
    {
        "total": 101874,
        "record": 6100,
        "name": "辽宁",
        "report": 481,
        "value": 316
    },
    {
        "total": 232520,
        "record": 5830,
        "name": "吉林",
        "report": 418,
        "value": 300
    },
    {
        "total": 22232,
        "record": 3612,
        "name": "山西",
        "report": 286,
        "value": 257
    },
    {
        "total": 13755,
        "record": 3393,
        "name": "香港",
        "report": 149,
        "value": 255
    },
    {
        "total": 7860,
        "record": 1357,
        "name": "黑龙江",
        "report": 160,
        "value": 194
    },
    {
        "total": 10851,
        "record": 1050,
        "name": "宁夏",
        "report": 75,
        "value": 190
    },
    {
        "total": 1098,
        "record": 157,
        "name": "台湾",
        "report": 16,
        "value": 97
    },
    {
        "total": 1708,
        "record": 205,
        "name": "澳门",
        "report": 15,
        "value": 76
    }
  ],
  //2024
  [
    {
        "total": 772260,
        "record": 147319,
        "name": "云南",
        "report": 7614,
        "value": 828
    },
    {
        "total": 300213,
        "record": 48816,
        "name": "四川",
        "report": 3032,
        "value": 543
    },
    {
        "total": 939868,
        "record": 148881,
        "name": "广东",
        "report": 9472,
        "value": 473
    },
    {
        "total": 293400,
        "record": 23148,
        "name": "广西",
        "report": 1648,
        "value": 469
    },
    {
        "total": 51531,
        "record": 5773,
        "name": "西藏",
        "report": 376,
        "value": 441
    },
    {
        "total": 467063,
        "record": 59446,
        "name": "福建",
        "report": 3749,
        "value": 441
    },
    {
        "total": 137340,
        "record": 37271,
        "name": "海南",
        "report": 2433,
        "value": 387
    },
    {
        "total": 722924,
        "record": 83023,
        "name": "浙江",
        "report": 5471,
        "value": 384
    },
    {
        "total": 1137945,
        "record": 59601,
        "name": "湖北",
        "report": 3676,
        "value": 367
    },
    {
        "total": 1740955,
        "record": 92078,
        "name": "江苏",
        "report": 5148,
        "value": 355
    },
    {
        "total": 340550,
        "record": 39475,
        "name": "湖南",
        "report": 2337,
        "value": 354
    },
    {
        "total": 468486,
        "record": 43588,
        "name": "江西",
        "report": 2167,
        "value": 336
    },
    {
        "total": 1448188,
        "record": 174977,
        "name": "北京",
        "report": 10676,
        "value": 327
    },
    {
        "total": 896189,
        "record": 102696,
        "name": "上海",
        "report": 5936,
        "value": 326
    },
    {
        "total": 117899,
        "record": 15722,
        "name": "陕西",
        "report": 931,
        "value": 310
    },
    {
        "total": 211156,
        "record": 16089,
        "name": "安徽",
        "report": 1129,
        "value": 303
    },
    {
        "total": 42209,
        "record": 6642,
        "name": "贵州",
        "report": 392,
        "value": 286
    },
    {
        "total": 345467,
        "record": 26852,
        "name": "河南",
        "report": 1572,
        "value": 284
    },
    {
        "total": 297965,
        "record": 18971,
        "name": "山东",
        "report": 1574,
        "value": 283
    },
    {
        "total": 61298,
        "record": 10710,
        "name": "重庆",
        "report": 756,
        "value": 265
    },
    {
        "total": 37470,
        "record": 5301,
        "name": "甘肃",
        "report": 434,
        "value": 261
    },
    {
        "total": 441892,
        "record": 9638,
        "name": "新疆",
        "report": 842,
        "value": 254
    },
    {
        "total": 180746,
        "record": 8748,
        "name": "河北",
        "report": 622,
        "value": 243
    },
    {
        "total": 321529,
        "record": 11071,
        "name": "辽宁",
        "report": 1018,
        "value": 243
    },
    {
        "total": 24169,
        "record": 2047,
        "name": "台湾",
        "report": 167,
        "value": 239
    },
    {
        "total": 194451,
        "record": 7373,
        "name": "内蒙古",
        "report": 630,
        "value": 238
    },
    {
        "total": 38047,
        "record": 5723,
        "name": "香港",
        "report": 278,
        "value": 236
    },
    {
        "total": 417880,
        "record": 19622,
        "name": "天津",
        "report": 1432,
        "value": 224
    },
    {
        "total": 130776,
        "record": 6883,
        "name": "山西",
        "report": 612,
        "value": 222
    },
    {
        "total": 75188,
        "record": 2149,
        "name": "青海",
        "report": 147,
        "value": 208
    },
    {
        "total": 298717,
        "record": 10214,
        "name": "吉林",
        "report": 749,
        "value": 196
    },
    {
        "total": 35504,
        "record": 2673,
        "name": "宁夏",
        "report": 266,
        "value": 191
    },
    {
        "total": 8473,
        "record": 1365,
        "name": "黑龙江",
        "report": 276,
        "value": 104
    },
    {
        "total": 1020,
        "record": 389,
        "name": "澳门",
        "report": 41,
        "value": 91
    }
  ]
  ];
  
var updateFrequency_bar = 2000; // 更新频率，单位为毫秒
var groupIndex_bar = 0;
var dataIndex_bar = 0;
var baroption = {
    title: [
{
text: '鸟类种数排名',
textStyle: {
    color: '#70FC08'
}
}
],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        show:false
    },
    yAxis: {
type: 'category',
data: yAxisData,
axisLabel: {
formatter: function (value, index) {
return `{indexStyle|}{nameStyle| ${value}}`;
},
rich: {
    nameStyle: {
        color: 'red',
        fontSize: 18,
    }
}
}
// ... 其他 yAxis 配置项
},
    series: [{
        name: '柱状图',
        type: 'bar',
        barMaxWidth: 130,
        barCategoryGap: '40%', // 类目间柱形距离，默认为类目间距的20%，可设固定值
        itemStyle: {
            color: function(params) {
                var colorList = [{
                                  colorStops: [{
                                    offset: 0,
                                    color: '#f0515e'
                                  }, {
                                    offset: 1,
                                    color: '#ef8554'
                                  }]
                                },
                                {
                                  colorStops: [{
                                    offset: 0,
                                    color: '#3c38e4'
                                  }, {
                                    offset: 1,
                                    color: '#24a5cd'
                                  }]
                                }
                ];
                var dataLength=newArr_bar[dataIndex_bar].length;
if (params.dataIndex >=dataLength-5) {
return colorList[0]; // 前三名数据的颜色
} else {
return colorList[1]; // 其他数据的颜色
}
                }
      },
        label: {
    normal: {
      show: true,
      position: 'right',
      textBorderWidth: 0
    }
  },
        data: seriesData, 
    }]
};
barChart.setOption(baroption);

// 递归函数，用于循环更新数据
function updateDataRecursively_bar() {
  if (dataIndex_bar < newArr_bar.length) {
      updateChart_bar(newArr_bar[dataIndex_bar]);
      dataIndex_bar++;
      setTimeout(updateDataRecursively_bar, updateFrequency_bar); // 递归调用，等待一定时间后再次更新数据
  } else {
      // 数据更新完成后进行一些操作（可选）
      // 例如重新开始循环或者其他处理
      dataIndex_bar = 0; // 重置索引以便重新开始循环
      setTimeout(updateDataRecursively_bar, updateFrequency_bar); // 重新开始循环
  }
}

// 开始循环更新数据
updateDataRecursively_bar();

// 更新折线图数据的函数
function updateChart_bar(newValue) {
  var option = barChart.getOption();
  // 处理数据
  var new_sortedData = newValue.sort(function(a, b) {
      return a.value - b.value;
  });
  var new_yAxisData = new_sortedData.map(function(item) {
      return item.name;
  });
  var new_seriesData = new_sortedData.map(function(item) {
      return item.value;
  });
//    option.title[0].text=dataIndex;
  option.yAxis[0].data = new_yAxisData; // 更新 y 轴数据
  option.series[0].data = new_seriesData; // 更新系列数据（这里假设只有一个系列）
  barChart.setOption(option);}
//------------------------------------------------------------------------------
//配置饼形图
//------------------------------------------------------------------------------
var pieChart=echarts.init(document.querySelector(".map .pie"));
var rawData_pie = [
    { name: '种类1', value: 10 },
    { name: '种类2', value: 20 },
    { name: '种类3', value: 30 },
    { name: '种类4', value: 40 },
    { name: '种类5', value: 50 },
];
var newArr_pie = [
//2014
[
{
"total": 1211,
"record": 229,
"name": "云南",
"report": 17,
"value": 159
},
{
"total": 2596,
"record": 236,
"name": "陕西",
"report": 9,
"value": 153
},
{
"total": 539,
"record": 339,
"name": "北京",
"report": 68,
"value": 147
},
{
"total": 1758,
"record": 286,
"name": "贵州",
"report": 16,
"value": 133
},
{
"total": 7833,
"record": 448,
"name": "上海",
"report": 16,
"value": 129
},
{
"total": 3415,
"record": 164,
"name": "江苏",
"report": 14,
"value": 116
},
{
"total": 951,
"record": 113,
"name": "江西",
"report": 3,
"value": 98
},
{
"total": 7149,
"record": 210,
"name": "广东",
"report": 7,
"value": 97
},
{
"total": 1353,
"record": 172,
"name": "内蒙古",
"report": 6,
"value": 91
},
{
"total": 1728,
"record": 131,
"name": "湖北",
"report": 6,
"value": 89
},
{
"total": 407,
"record": 125,
"name": "福建",
"report": 10,
"value": 85
},
{
"total": 507,
"record": 96,
"name": "重庆",
"report": 3,
"value": 81
},
{
"total": 98,
"record": 98,
"name": "甘肃",
"report": 3,
"value": 74
},
{
"total": 902,
"record": 89,
"name": "四川",
"report": 5,
"value": 73
},
{
"total": 1595,
"record": 89,
"name": "天津",
"report": 4,
"value": 67
},
{
"total": 125,
"record": 65,
"name": "河南",
"report": 6,
"value": 49
},
{
"total": 399,
"record": 58,
"name": "浙江",
"report": 7,
"value": 49
},
{
"total": 297,
"record": 40,
"name": "湖南",
"report": 12,
"value": 36
},
{
"total": 49,
"record": 49,
"name": "安徽",
"report": 3,
"value": 34
},
{
"total": 132,
"record": 44,
"name": "宁夏",
"report": 3,
"value": 30
},
{
"total": 23,
"record": 23,
"name": "西藏",
"report": 2,
"value": 21
},
{
"total": 90,
"record": 16,
"name": "香港",
"report": 2,
"value": 16
},
{
"total": 32,
"record": 11,
"name": "河北",
"report": 2,
"value": 10
},
{
"total": 8,
"record": 8,
"name": "广西",
"report": 1,
"value": 8
}
],
//2015
[
{
"total": 8833,
"record": 1603,
"name": "云南",
"report": 45,
"value": 414
},
{
"total": 5255,
"record": 471,
"name": "江苏",
"report": 19,
"value": 268
},
{
"total": 2902,
"record": 1118,
"name": "浙江",
"report": 57,
"value": 228
},
{
"total": 35422,
"record": 1076,
"name": "湖北",
"report": 35,
"value": 226
},
{
"total": 3322,
"record": 561,
"name": "贵州",
"report": 21,
"value": 190
},
{
"total": 3093,
"record": 499,
"name": "新疆",
"report": 27,
"value": 178
},
{
"total": 19758,
"record": 463,
"name": "青海",
"report": 21,
"value": 173
},
{
"total": 6237,
"record": 474,
"name": "河南",
"report": 36,
"value": 154
},
{
"total": 1476,
"record": 410,
"name": "北京",
"report": 54,
"value": 153
},
{
"total": 3254,
"record": 358,
"name": "江西",
"report": 11,
"value": 146
},
{
"total": 10614,
"record": 570,
"name": "上海",
"report": 32,
"value": 137
},
{
"total": 450,
"record": 204,
"name": "广西",
"report": 11,
"value": 122
},
{
"total": 1510,
"record": 194,
"name": "甘肃",
"report": 13,
"value": 122
},
{
"total": 512,
"record": 173,
"name": "四川",
"report": 13,
"value": 118
},
{
"total": 1760,
"record": 209,
"name": "湖南",
"report": 18,
"value": 118
},
{
"total": 4684,
"record": 216,
"name": "广东",
"report": 13,
"value": 107
},
{
"total": 803,
"record": 166,
"name": "福建",
"report": 18,
"value": 104
},
{
"total": 689,
"record": 135,
"name": "陕西",
"report": 4,
"value": 83
},
{
"total": 641,
"record": 113,
"name": "西藏",
"report": 7,
"value": 73
},
{
"total": 1756,
"record": 27,
"name": "山东",
"report": 5,
"value": 23
},
{
"total": 176,
"record": 24,
"name": "海南",
"report": 2,
"value": 23
},
{
"total": 22,
"record": 22,
"name": "河北",
"report": 3,
"value": 21
},
{
"total": 13,
"record": 13,
"name": "安徽",
"report": 2,
"value": 13
},
{
"total": 876,
"record": 11,
"name": "辽宁",
"report": 2,
"value": 11
},
{
"total": 1,
"record": 1,
"name": "重庆",
"report": 1,
"value": 1
}
],
//2016
[
{
"total": 9570,
"record": 1740,
"name": "云南",
"report": 60,
"value": 471
},
{
"total": 2508,
"record": 907,
"name": "浙江",
"report": 56,
"value": 216
},
{
"total": 117330,
"record": 998,
"name": "湖北",
"report": 45,
"value": 191
},
{
"total": 5199,
"record": 825,
"name": "上海",
"report": 60,
"value": 179
},
{
"total": 11492,
"record": 507,
"name": "江西",
"report": 22,
"value": 170
},
{
"total": 8215,
"record": 628,
"name": "广东",
"report": 36,
"value": 167
},
{
"total": 670,
"record": 261,
"name": "江苏",
"report": 13,
"value": 158
},
{
"total": 5952,
"record": 294,
"name": "湖南",
"report": 23,
"value": 156
},
{
"total": 1709,
"record": 327,
"name": "贵州",
"report": 15,
"value": 155
},
{
"total": 1538,
"record": 367,
"name": "甘肃",
"report": 33,
"value": 147
},
{
"total": 349,
"record": 218,
"name": "四川",
"report": 12,
"value": 145
},
{
"total": 354,
"record": 354,
"name": "河南",
"report": 26,
"value": 125
},
{
"total": 864,
"record": 196,
"name": "广西",
"report": 7,
"value": 119
},
{
"total": 410,
"record": 224,
"name": "北京",
"report": 31,
"value": 116
},
{
"total": 129,
"record": 129,
"name": "台湾",
"report": 2,
"value": 115
},
{
"total": 484,
"record": 148,
"name": "福建",
"report": 7,
"value": 94
},
{
"total": 539,
"record": 126,
"name": "西藏",
"report": 12,
"value": 69
},
{
"total": 85,
"record": 85,
"name": "海南",
"report": 3,
"value": 66
},
{
"total": 449,
"record": 98,
"name": "香港",
"report": 9,
"value": 66
},
{
"total": 182,
"record": 49,
"name": "山东",
"report": 4,
"value": 38
},
{
"total": 110,
"record": 46,
"name": "陕西",
"report": 4,
"value": 37
},
{
"total": 205,
"record": 34,
"name": "新疆",
"report": 2,
"value": 32
},
{
"total": 80,
"record": 26,
"name": "青海",
"report": 2,
"value": 26
},
{
"total": 8,
"record": 8,
"name": "安徽",
"report": 1,
"value": 8
},
{
"total": 20,
"record": 4,
"name": "宁夏",
"report": 1,
"value": 4
},
{
"total": 20,
"record": 1,
"name": "黑龙江",
"report": 1,
"value": 1
},
{
"total": 1,
"record": 1,
"name": "内蒙古",
"report": 1,
"value": 1
}
],
//2017
[
{
"total": 9862,
"record": 2324,
"name": "云南",
"report": 93,
"value": 502
},
{
"total": 1978,
"record": 1636,
"name": "福建",
"report": 63,
"value": 266
},
{
"total": 1200,
"record": 918,
"name": "河南",
"report": 41,
"value": 217
},
{
"total": 4936,
"record": 1114,
"name": "广东",
"report": 70,
"value": 209
},
{
"total": 8066,
"record": 846,
"name": "湖北",
"report": 43,
"value": 200
},
{
"total": 949,
"record": 316,
"name": "四川",
"report": 20,
"value": 199
},
{
"total": 1237,
"record": 466,
"name": "北京",
"report": 55,
"value": 188
},
{
"total": 2183,
"record": 338,
"name": "广西",
"report": 15,
"value": 175
},
{
"total": 7278,
"record": 430,
"name": "贵州",
"report": 16,
"value": 166
},
{
"total": 2791,
"record": 629,
"name": "上海",
"report": 39,
"value": 159
},
{
"total": 1283,
"record": 303,
"name": "江苏",
"report": 12,
"value": 158
},
{
"total": 1519,
"record": 445,
"name": "浙江",
"report": 31,
"value": 135
},
{
"total": 22787,
"record": 316,
"name": "江西",
"report": 13,
"value": 132
},
{
"total": 768,
"record": 173,
"name": "新疆",
"report": 7,
"value": 123
},
{
"total": 658,
"record": 197,
"name": "海南",
"report": 7,
"value": 118
},
{
"total": 1445,
"record": 301,
"name": "湖南",
"report": 38,
"value": 110
},
{
"total": 232,
"record": 165,
"name": "青海",
"report": 12,
"value": 107
},
{
"total": 449,
"record": 332,
"name": "台湾",
"report": 11,
"value": 98
},
{
"total": 2715,
"record": 218,
"name": "陕西",
"report": 13,
"value": 95
},
{
"total": 1919,
"record": 293,
"name": "甘肃",
"report": 43,
"value": 90
},
{
"total": 1320,
"record": 85,
"name": "香港",
"report": 5,
"value": 69
},
{
"total": 1039,
"record": 91,
"name": "内蒙古",
"report": 8,
"value": 67
},
{
"total": 143,
"record": 57,
"name": "山东",
"report": 4,
"value": 54
},
{
"total": 79,
"record": 79,
"name": "河北",
"report": 6,
"value": 50
},
{
"total": 172,
"record": 41,
"name": "重庆",
"report": 1,
"value": 40
},
{
"total": 2765,
"record": 37,
"name": "吉林",
"report": 6,
"value": 33
},
{
"total": 154,
"record": 13,
"name": "西藏",
"report": 2,
"value": 13
},
{
"total": 12,
"record": 12,
"name": "天津",
"report": 2,
"value": 12
},
{
"total": 9,
"record": 9,
"name": "辽宁",
"report": 2,
"value": 8
},
{
"total": 7,
"record": 3,
"name": "山西",
"report": 2,
"value": 3
}
],
//2018
[
{
"total": 24493,
"record": 3481,
"name": "云南",
"report": 140,
"value": 552
},
{
"total": 4447,
"record": 1380,
"name": "广西",
"report": 53,
"value": 284
},
{
"total": 1745,
"record": 898,
"name": "四川",
"report": 32,
"value": 273
},
{
"total": 4386,
"record": 1512,
"name": "福建",
"report": 76,
"value": 258
},
{
"total": 3749,
"record": 1477,
"name": "广东",
"report": 105,
"value": 245
},
{
"total": 20114,
"record": 1907,
"name": "上海",
"report": 121,
"value": 234
},
{
"total": 5863,
"record": 971,
"name": "贵州",
"report": 54,
"value": 233
},
{
"total": 8390,
"record": 1189,
"name": "陕西",
"report": 51,
"value": 228
},
{
"total": 18614,
"record": 615,
"name": "江苏",
"report": 29,
"value": 217
},
{
"total": 1838,
"record": 737,
"name": "北京",
"report": 76,
"value": 212
},
{
"total": 4373,
"record": 679,
"name": "湖北",
"report": 29,
"value": 209
},
{
"total": 1815,
"record": 604,
"name": "新疆",
"report": 42,
"value": 194
},
{
"total": 1360,
"record": 532,
"name": "甘肃",
"report": 26,
"value": 172
},
{
"total": 3479,
"record": 618,
"name": "浙江",
"report": 60,
"value": 157
},
{
"total": 19715,
"record": 376,
"name": "江西",
"report": 15,
"value": 146
},
{
"total": 986,
"record": 359,
"name": "青海",
"report": 21,
"value": 146
},
{
"total": 18411,
"record": 759,
"name": "湖南",
"report": 75,
"value": 139
},
{
"total": 309,
"record": 309,
"name": "河南",
"report": 14,
"value": 133
},
{
"total": 1676,
"record": 353,
"name": "内蒙古",
"report": 17,
"value": 125
},
{
"total": 298,
"record": 246,
"name": "香港",
"report": 11,
"value": 115
},
{
"total": 1629,
"record": 253,
"name": "西藏",
"report": 19,
"value": 115
},
{
"total": 415,
"record": 187,
"name": "台湾",
"report": 18,
"value": 106
},
{
"total": 350,
"record": 79,
"name": "海南",
"report": 6,
"value": 65
},
{
"total": 686,
"record": 109,
"name": "山东",
"report": 11,
"value": 65
},
{
"total": 740,
"record": 118,
"name": "重庆",
"report": 4,
"value": 60
},
{
"total": 79,
"record": 46,
"name": "河北",
"report": 4,
"value": 44
},
{
"total": 44,
"record": 44,
"name": "辽宁",
"report": 4,
"value": 41
},
{
"total": 296,
"record": 31,
"name": "宁夏",
"report": 3,
"value": 29
},
{
"total": 11,
"record": 11,
"name": "吉林",
"report": 1,
"value": 10
},
{
"total": 66,
"record": 7,
"name": "黑龙江",
"report": 1,
"value": 7
},
{
"total": 10,
"record": 8,
"name": "天津",
"report": 6,
"value": 6
}
],
//2019
[
{
"total": 11519,
"record": 5195,
"name": "云南",
"report": 219,
"value": 614
},
{
"total": 7516,
"record": 3595,
"name": "福建",
"report": 134,
"value": 317
},
{
"total": 9190,
"record": 2082,
"name": "广东",
"report": 157,
"value": 292
},
{
"total": 28059,
"record": 1624,
"name": "江苏",
"report": 76,
"value": 291
},
{
"total": 23153,
"record": 2743,
"name": "上海",
"report": 142,
"value": 270
},
{
"total": 1616,
"record": 683,
"name": "四川",
"report": 42,
"value": 267
},
{
"total": 8472,
"record": 823,
"name": "湖北",
"report": 43,
"value": 260
},
{
"total": 4732,
"record": 1184,
"name": "新疆",
"report": 68,
"value": 248
},
{
"total": 7208,
"record": 1582,
"name": "北京",
"report": 153,
"value": 247
},
{
"total": 8909,
"record": 1857,
"name": "陕西",
"report": 79,
"value": 241
},
{
"total": 2074,
"record": 988,
"name": "广西",
"report": 44,
"value": 228
},
{
"total": 4773,
"record": 363,
"name": "西藏",
"report": 16,
"value": 214
},
{
"total": 932,
"record": 575,
"name": "河南",
"report": 42,
"value": 199
},
{
"total": 2742,
"record": 536,
"name": "甘肃",
"report": 37,
"value": 188
},
{
"total": 535,
"record": 507,
"name": "青海",
"report": 23,
"value": 183
},
{
"total": 558,
"record": 424,
"name": "台湾",
"report": 27,
"value": 175
},
{
"total": 2612,
"record": 755,
"name": "江西",
"report": 27,
"value": 171
},
{
"total": 2603,
"record": 571,
"name": "浙江",
"report": 67,
"value": 164
},
{
"total": 1761,
"record": 260,
"name": "贵州",
"report": 9,
"value": 143
},
{
"total": 27928,
"record": 589,
"name": "湖南",
"report": 60,
"value": 141
},
{
"total": 419,
"record": 261,
"name": "香港",
"report": 21,
"value": 127
},
{
"total": 168,
"record": 168,
"name": "天津",
"report": 11,
"value": 127
},
{
"total": 1098,
"record": 250,
"name": "河北",
"report": 17,
"value": 122
},
{
"total": 271,
"record": 233,
"name": "山西",
"report": 6,
"value": 118
},
{
"total": 388,
"record": 289,
"name": "内蒙古",
"report": 23,
"value": 118
},
{
"total": 3224,
"record": 130,
"name": "安徽",
"report": 9,
"value": 90
},
{
"total": 29104,
"record": 138,
"name": "辽宁",
"report": 23,
"value": 83
},
{
"total": 1430,
"record": 102,
"name": "山东",
"report": 10,
"value": 78
},
{
"total": 67,
"record": 58,
"name": "重庆",
"report": 6,
"value": 55
},
{
"total": 50,
"record": 50,
"name": "宁夏",
"report": 2,
"value": 49
},
{
"total": 48,
"record": 48,
"name": "海南",
"report": 3,
"value": 48
},
{
"total": 28534,
"record": 35,
"name": "吉林",
"report": 3,
"value": 32
},
{
"total": 70,
"record": 19,
"name": "黑龙江",
"report": 3,
"value": 17
}
],
//2020
[
{
"total": 28823,
"record": 7239,
"name": "云南",
"report": 312,
"value": 640
},
{
"total": 4501,
"record": 2304,
"name": "四川",
"report": 128,
"value": 367
},
{
"total": 26523,
"record": 2992,
"name": "福建",
"report": 166,
"value": 340
},
{
"total": 19943,
"record": 5985,
"name": "广东",
"report": 312,
"value": 334
},
{
"total": 2170,
"record": 1002,
"name": "广西",
"report": 31,
"value": 332
},
{
"total": 25891,
"record": 2375,
"name": "湖北",
"report": 103,
"value": 323
},
{
"total": 30940,
"record": 4724,
"name": "北京",
"report": 410,
"value": 318
},
{
"total": 46338,
"record": 7083,
"name": "上海",
"report": 371,
"value": 302
},
{
"total": 12964,
"record": 2354,
"name": "浙江",
"report": 176,
"value": 296
},
{
"total": 24332,
"record": 1710,
"name": "江苏",
"report": 140,
"value": 278
},
{
"total": 1073,
"record": 598,
"name": "西藏",
"report": 56,
"value": 246
},
{
"total": 6689,
"record": 1546,
"name": "湖南",
"report": 87,
"value": 242
},
{
"total": 5250,
"record": 2363,
"name": "青海",
"report": 131,
"value": 239
},
{
"total": 13781,
"record": 783,
"name": "河南",
"report": 56,
"value": 233
},
{
"total": 19695,
"record": 1570,
"name": "江西",
"report": 92,
"value": 220
},
{
"total": 4578,
"record": 837,
"name": "陕西",
"report": 48,
"value": 219
},
{
"total": 4211,
"record": 892,
"name": "贵州",
"report": 29,
"value": 202
},
{
"total": 7124,
"record": 845,
"name": "内蒙古",
"report": 51,
"value": 182
},
{
"total": 1317,
"record": 436,
"name": "甘肃",
"report": 40,
"value": 173
},
{
"total": 34713,
"record": 467,
"name": "山东",
"report": 32,
"value": 159
},
{
"total": 3396,
"record": 381,
"name": "宁夏",
"report": 25,
"value": 149
},
{
"total": 1738,
"record": 270,
"name": "辽宁",
"report": 13,
"value": 143
},
{
"total": 6806,
"record": 426,
"name": "河北",
"report": 25,
"value": 140
},
{
"total": 1147,
"record": 372,
"name": "海南",
"report": 34,
"value": 133
},
{
"total": 1048,
"record": 294,
"name": "山西",
"report": 31,
"value": 107
},
{
"total": 370,
"record": 131,
"name": "重庆",
"report": 8,
"value": 100
},
{
"total": 104,
"record": 104,
"name": "香港",
"report": 2,
"value": 76
},
{
"total": 1440,
"record": 71,
"name": "天津",
"report": 15,
"value": 64
},
{
"total": 91,
"record": 16,
"name": "安徽",
"report": 2,
"value": 16
},
{
"total": 354,
"record": 10,
"name": "吉林",
"report": 1,
"value": 10
},
{
"total": 56,
"record": 6,
"name": "新疆",
"report": 2,
"value": 6
}
],
//2021
[
{
"total": 31140,
"record": 12117,
"name": "云南",
"report": 587,
"value": 706
},
{
"total": 30373,
"record": 7536,
"name": "四川",
"report": 510,
"value": 497
},
{
"total": 52031,
"record": 10557,
"name": "福建",
"report": 581,
"value": 437
},
{
"total": 8799,
"record": 3531,
"name": "西藏",
"report": 174,
"value": 416
},
{
"total": 131839,
"record": 18715,
"name": "广东",
"report": 1156,
"value": 405
},
{
"total": 5393,
"record": 2324,
"name": "广西",
"report": 137,
"value": 377
},
{
"total": 101294,
"record": 7741,
"name": "湖北",
"report": 448,
"value": 376
},
{
"total": 78207,
"record": 8557,
"name": "浙江",
"report": 585,
"value": 374
},
{
"total": 155904,
"record": 25185,
"name": "北京",
"report": 1729,
"value": 372
},
{
"total": 157065,
"record": 20554,
"name": "上海",
"report": 1044,
"value": 354
},
{
"total": 29677,
"record": 3265,
"name": "新疆",
"report": 244,
"value": 341
},
{
"total": 28623,
"record": 4709,
"name": "江苏",
"report": 320,
"value": 327
},
{
"total": 33421,
"record": 4376,
"name": "河南",
"report": 248,
"value": 297
},
{
"total": 17165,
"record": 6946,
"name": "湖南",
"report": 401,
"value": 289
},
{
"total": 22450,
"record": 3688,
"name": "江西",
"report": 192,
"value": 282
},
{
"total": 8312,
"record": 2122,
"name": "甘肃",
"report": 160,
"value": 277
},
{
"total": 11040,
"record": 2571,
"name": "海南",
"report": 194,
"value": 276
},
{
"total": 2192,
"record": 1722,
"name": "贵州",
"report": 79,
"value": 263
},
{
"total": 5524,
"record": 870,
"name": "河北",
"report": 55,
"value": 247
},
{
"total": 33541,
"record": 1437,
"name": "山东",
"report": 114,
"value": 242
},
{
"total": 5008,
"record": 1032,
"name": "陕西",
"report": 44,
"value": 240
},
{
"total": 4188,
"record": 1925,
"name": "青海",
"report": 166,
"value": 233
},
{
"total": 13465,
"record": 966,
"name": "安徽",
"report": 76,
"value": 213
},
{
"total": 8790,
"record": 740,
"name": "内蒙古",
"report": 50,
"value": 205
},
{
"total": 16326,
"record": 871,
"name": "辽宁",
"report": 66,
"value": 205
},
{
"total": 3032,
"record": 742,
"name": "天津",
"report": 38,
"value": 189
},
{
"total": 14853,
"record": 2403,
"name": "重庆",
"report": 118,
"value": 185
},
{
"total": 939,
"record": 291,
"name": "山西",
"report": 22,
"value": 141
},
{
"total": 6863,
"record": 226,
"name": "吉林",
"report": 23,
"value": 111
},
{
"total": 1059,
"record": 286,
"name": "宁夏",
"report": 25,
"value": 102
},
{
"total": 543,
"record": 80,
"name": "黑龙江",
"report": 5,
"value": 31
},
{
"total": 35,
"record": 17,
"name": "香港",
"report": 2,
"value": 15
}
],
//2022
[
{
"total": 81224,
"record": 19325,
"name": "云南",
"report": 1005,
"value": 720
},
{
"total": 61473,
"record": 15049,
"name": "四川",
"report": 975,
"value": 557
},
{
"total": 198834,
"record": 25009,
"name": "浙江",
"report": 1494,
"value": 437
},
{
"total": 165476,
"record": 38907,
"name": "广东",
"report": 2413,
"value": 434
},
{
"total": 66411,
"record": 16160,
"name": "福建",
"report": 879,
"value": 433
},
{
"total": 168701,
"record": 21454,
"name": "湖北",
"report": 1008,
"value": 429
},
{
"total": 16282,
"record": 4578,
"name": "广西",
"report": 322,
"value": 420
},
{
"total": 417533,
"record": 69032,
"name": "北京",
"report": 4032,
"value": 414
},
{
"total": 90225,
"record": 19254,
"name": "湖南",
"report": 1170,
"value": 373
},
{
"total": 49852,
"record": 7581,
"name": "新疆",
"report": 510,
"value": 360
},
{
"total": 370446,
"record": 41490,
"name": "上海",
"report": 2057,
"value": 350
},
{
"total": 123912,
"record": 11319,
"name": "江苏",
"report": 760,
"value": 340
},
{
"total": 14505,
"record": 3622,
"name": "贵州",
"report": 136,
"value": 335
},
{
"total": 57303,
"record": 6492,
"name": "江西",
"report": 294,
"value": 328
},
{
"total": 26256,
"record": 4709,
"name": "重庆",
"report": 307,
"value": 318
},
{
"total": 22722,
"record": 5163,
"name": "海南",
"report": 363,
"value": 302
},
{
"total": 29472,
"record": 4846,
"name": "甘肃",
"report": 335,
"value": 301
},
{
"total": 22884,
"record": 5491,
"name": "河南",
"report": 327,
"value": 295
},
{
"total": 5897,
"record": 946,
"name": "西藏",
"report": 69,
"value": 288
},
{
"total": 19860,
"record": 6445,
"name": "青海",
"report": 420,
"value": 279
},
{
"total": 34353,
"record": 3028,
"name": "河北",
"report": 176,
"value": 256
},
{
"total": 7600,
"record": 1525,
"name": "陕西",
"report": 82,
"value": 225
},
{
"total": 35035,
"record": 1779,
"name": "辽宁",
"report": 119,
"value": 213
},
{
"total": 41134,
"record": 2111,
"name": "山东",
"report": 134,
"value": 206
},
{
"total": 10805,
"record": 2538,
"name": "天津",
"report": 190,
"value": 186
},
{
"total": 12882,
"record": 1043,
"name": "安徽",
"report": 95,
"value": 178
},
{
"total": 1492,
"record": 312,
"name": "山西",
"report": 17,
"value": 142
},
{
"total": 1401,
"record": 458,
"name": "内蒙古",
"report": 42,
"value": 128
},
{
"total": 4806,
"record": 219,
"name": "吉林",
"report": 17,
"value": 102
},
{
"total": 1178,
"record": 242,
"name": "宁夏",
"report": 16,
"value": 102
},
{
"total": 1417,
"record": 241,
"name": "黑龙江",
"report": 22,
"value": 96
},
{
"total": 961,
"record": 204,
"name": "香港",
"report": 14,
"value": 56
}
],
//2023
[
{
"total": 219506,
"record": 70844,
"name": "云南",
"report": 3573,
"value": 827
},
{
"total": 234117,
"record": 45772,
"name": "四川",
"report": 2975,
"value": 638
},
{
"total": 51650,
"record": 20028,
"name": "西藏",
"report": 1170,
"value": 559
},
{
"total": 305135,
"record": 23016,
"name": "广西",
"report": 1458,
"value": 535
},
{
"total": 578035,
"record": 79463,
"name": "浙江",
"report": 5081,
"value": 506
},
{
"total": 377056,
"record": 94244,
"name": "广东",
"report": 5978,
"value": 499
},
{
"total": 208429,
"record": 45644,
"name": "福建",
"report": 2643,
"value": 492
},
{
"total": 667378,
"record": 46149,
"name": "湖北",
"report": 2473,
"value": 481
},
{
"total": 390754,
"record": 37006,
"name": "湖南",
"report": 2085,
"value": 433
},
{
"total": 504513,
"record": 50827,
"name": "江苏",
"report": 2973,
"value": 427
},
{
"total": 690898,
"record": 137792,
"name": "北京",
"report": 7345,
"value": 421
},
{
"total": 605179,
"record": 95290,
"name": "上海",
"report": 4962,
"value": 411
},
{
"total": 98612,
"record": 12485,
"name": "甘肃",
"report": 816,
"value": 407
},
{
"total": 65353,
"record": 10077,
"name": "陕西",
"report": 636,
"value": 399
},
{
"total": 114295,
"record": 23005,
"name": "新疆",
"report": 1737,
"value": 391
},
{
"total": 304330,
"record": 30413,
"name": "江西",
"report": 1373,
"value": 382
},
{
"total": 110777,
"record": 14451,
"name": "河南",
"report": 850,
"value": 376
},
{
"total": 148963,
"record": 14640,
"name": "河北",
"report": 629,
"value": 372
},
{
"total": 42311,
"record": 12467,
"name": "海南",
"report": 923,
"value": 368
},
{
"total": 281303,
"record": 14885,
"name": "山东",
"report": 940,
"value": 361
},
{
"total": 34995,
"record": 8661,
"name": "重庆",
"report": 637,
"value": 360
},
{
"total": 20381,
"record": 7262,
"name": "贵州",
"report": 369,
"value": 345
},
{
"total": 47264,
"record": 10460,
"name": "青海",
"report": 834,
"value": 329
},
{
"total": 43169,
"record": 4375,
"name": "内蒙古",
"report": 355,
"value": 327
},
{
"total": 265085,
"record": 16440,
"name": "天津",
"report": 914,
"value": 323
},
{
"total": 65815,
"record": 7847,
"name": "安徽",
"report": 538,
"value": 323
},
{
"total": 101874,
"record": 6100,
"name": "辽宁",
"report": 481,
"value": 316
},
{
"total": 232520,
"record": 5830,
"name": "吉林",
"report": 418,
"value": 300
},
{
"total": 22232,
"record": 3612,
"name": "山西",
"report": 286,
"value": 257
},
{
"total": 13755,
"record": 3393,
"name": "香港",
"report": 149,
"value": 255
},
{
"total": 7860,
"record": 1357,
"name": "黑龙江",
"report": 160,
"value": 194
},
{
"total": 10851,
"record": 1050,
"name": "宁夏",
"report": 75,
"value": 190
},
{
"total": 1098,
"record": 157,
"name": "台湾",
"report": 16,
"value": 97
},
{
"total": 1708,
"record": 205,
"name": "澳门",
"report": 15,
"value": 76
}
],
//2024
[
{
"total": 772260,
"record": 147319,
"name": "云南",
"report": 7614,
"value": 828
},
{
"total": 300213,
"record": 48816,
"name": "四川",
"report": 3032,
"value": 543
},
{
"total": 939868,
"record": 148881,
"name": "广东",
"report": 9472,
"value": 473
},
{
"total": 293400,
"record": 23148,
"name": "广西",
"report": 1648,
"value": 469
},
{
"total": 51531,
"record": 5773,
"name": "西藏",
"report": 376,
"value": 441
},
{
"total": 467063,
"record": 59446,
"name": "福建",
"report": 3749,
"value": 441
},
{
"total": 137340,
"record": 37271,
"name": "海南",
"report": 2433,
"value": 387
},
{
"total": 722924,
"record": 83023,
"name": "浙江",
"report": 5471,
"value": 384
},
{
"total": 1137945,
"record": 59601,
"name": "湖北",
"report": 3676,
"value": 367
},
{
"total": 1740955,
"record": 92078,
"name": "江苏",
"report": 5148,
"value": 355
},
{
"total": 340550,
"record": 39475,
"name": "湖南",
"report": 2337,
"value": 354
},
{
"total": 468486,
"record": 43588,
"name": "江西",
"report": 2167,
"value": 336
},
{
"total": 1448188,
"record": 174977,
"name": "北京",
"report": 10676,
"value": 327
},
{
"total": 896189,
"record": 102696,
"name": "上海",
"report": 5936,
"value": 326
},
{
"total": 117899,
"record": 15722,
"name": "陕西",
"report": 931,
"value": 310
},
{
"total": 211156,
"record": 16089,
"name": "安徽",
"report": 1129,
"value": 303
},
{
"total": 42209,
"record": 6642,
"name": "贵州",
"report": 392,
"value": 286
},
{
"total": 345467,
"record": 26852,
"name": "河南",
"report": 1572,
"value": 284
},
{
"total": 297965,
"record": 18971,
"name": "山东",
"report": 1574,
"value": 283
},
{
"total": 61298,
"record": 10710,
"name": "重庆",
"report": 756,
"value": 265
},
{
"total": 37470,
"record": 5301,
"name": "甘肃",
"report": 434,
"value": 261
},
{
"total": 441892,
"record": 9638,
"name": "新疆",
"report": 842,
"value": 254
},
{
"total": 180746,
"record": 8748,
"name": "河北",
"report": 622,
"value": 243
},
{
"total": 321529,
"record": 11071,
"name": "辽宁",
"report": 1018,
"value": 243
},
{
"total": 24169,
"record": 2047,
"name": "台湾",
"report": 167,
"value": 239
},
{
"total": 194451,
"record": 7373,
"name": "内蒙古",
"report": 630,
"value": 238
},
{
"total": 38047,
"record": 5723,
"name": "香港",
"report": 278,
"value": 236
},
{
"total": 417880,
"record": 19622,
"name": "天津",
"report": 1432,
"value": 224
},
{
"total": 130776,
"record": 6883,
"name": "山西",
"report": 612,
"value": 222
},
{
"total": 75188,
"record": 2149,
"name": "青海",
"report": 147,
"value": 208
},
{
"total": 298717,
"record": 10214,
"name": "吉林",
"report": 749,
"value": 196
},
{
"total": 35504,
"record": 2673,
"name": "宁夏",
"report": 266,
"value": 191
},
{
"total": 8473,
"record": 1365,
"name": "黑龙江",
"report": 276,
"value": 104
},
{
"total": 1020,
"record": 389,
"name": "澳门",
"report": 41,
"value": 91
}
]
];
var updateFrequency_pie = 2000; // 更新频率，单位为毫秒
var groupIndex_pie = 0;
var dataIndex_pie = 0;
var pieoption = {
//  backgroundColor: '#2c343c',
title: {
text: '省份鸟类种数top5',
left: 'center',
top: 20,
textStyle: {
color: 'yellow'
}
},
tooltip: {
trigger: 'item'
},
visualMap: {
show: true,
min: 50,
max: 800,
inRange: {
color: ['black'
,'gray'
,'#A64D3D'
,'#EC3515',
'#FA2904'] 
//colorLightness: [0, 1]
},
seriesIndex:0,
text: ['High', 'Low'],
calculable: true
},
series: [
{
type: 'pie',
radius: '55%',
center: ['50%', '50%'],
data: rawData_pie,
roseType: 'radius',
label: {
show: true,
formatter: '{b}'+'{c}', // 显示data.name
color: '#06C4FC',
fontSize:20,
},
labelLine: {
lineStyle: {
  color: 'black',
},
smooth: 0.2,
length: 10,
length2: 20
},
itemStyle: {
color: '#c23531',
shadowBlur: 200,
shadowColor: 'rgba(0, 0, 0, 0.5)'
},
animationType: 'scale',
animationEasing: 'elasticOut',
animationDelay: function (idx) {
return Math.random() * 200;
}
}
]
};
pieChart.setOption(pieoption);
//更新图表

// 递归函数，用于循环更新数据
function updateDataRecursively_pie() {
if (dataIndex_pie < newArr_pie.length) {
updateChart_pie(newArr_pie[dataIndex_pie]);
dataIndex_pie++;
setTimeout(updateDataRecursively_pie, updateFrequency_pie); // 递归调用，等待一定时间后再次更新数据
} else {
// 数据更新完成后进行一些操作（可选）
// 例如重新开始循环或者其他处理
dataIndex_pie = 0; // 重置索引以便重新开始循环
setTimeout(updateDataRecursively_pie, updateFrequency_pie); // 重新开始循环
}
}

// 开始循环更新数据
updateDataRecursively_pie();

// 更新折线图数据的函数
function updateChart_pie(newValue) {
var option = pieChart.getOption();
// 处理数据
var new_sortedData = newValue.sort(function(a, b) {
return b.value - a.value;
}).slice(0,5);
option.series[0].data = new_sortedData; // 更新系列数据（这里假设只有一个系列）
pieChart.setOption(option);
}
})();