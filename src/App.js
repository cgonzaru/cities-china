import React from 'react';
import Filters from './components/Filters';
//import cities from './services/cities'; 
import CitiesList from './components/CitiesList';
import SelItems from './components/SelItems';
import SelList from './components/SelList';

import './styles/app.scss';

const placeholderText = 'Search by name';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [{
        "id": "hong-kong",
        "name": "Hong Kong",
        "chineseName": "香港特别行政区"
      },
      {
        "id": "macau",
        "name": "Macau",
        "chineseName": "澳门特别行政区"
      },
      {
        "id": "beijing",
        "name": "Beijing",
        "chineseName": "北京市"
      },
      {
        "id": "chongqing",
        "name": "Chongqing",
        "chineseName": "重庆市"
      },
      {
        "id": "shanghai",
        "name": "Shanghai",
        "chineseName": "上海市"
      },
      {
        "id": "tianjin",
        "name": "Tianjin",
        "chineseName": "天津市"
      },
      {
        "id": "anqing",
        "name": "Anqing",
        "chineseName": "安庆市"
      },
      {
        "id": "bengbu",
        "name": "Bengbu",
        "chineseName": "蚌埠市"
      },
      {
        "id": "bozhou",
        "name": "Bozhou",
        "chineseName": "亳州市"
      },
      {
        "id": "chaohu",
        "name": "Chaohu",
        "chineseName": "巢湖市"
      },
      {
        "id": "chizhou",
        "name": "Chizhou",
        "chineseName": "池州市"
      },
      {
        "id": "chuzhou",
        "name": "Chuzhou",
        "chineseName": "滁州市"
      },
      {
        "id": "fuyang",
        "name": "Fuyang",
        "chineseName": "阜阳市"
      },
      {
        "id": "hefei",
        "name": "Hefei",
        "chineseName": "合肥市"
      },
      {
        "id": "huaibei",
        "name": "Huaibei",
        "chineseName": "淮北市"
      },
      {
        "id": "huainan",
        "name": "Huainan",
        "chineseName": "淮南市"
      },
      {
        "id": "huangshan",
        "name": "Huangshan",
        "chineseName": "黄山市"
      },
      {
        "id": "jieshou",
        "name": "Jieshou",
        "chineseName": "界首市"
      },
      {
        "id": "lu-an",
        "name": "Lu'an",
        "chineseName": "六安市"
      },
      {
        "id": "ma-anshan",
        "name": "Ma'anshan",
        "chineseName": "马鞍山市"
      },
      {
        "id": "mingguang",
        "name": "Mingguang",
        "chineseName": "明光市"
      },
      {
        "id": "ningguo",
        "name": "Ningguo",
        "chineseName": "宁国市"
      },
      {
        "id": "qianshan",
        "name": "Qianshan",
        "chineseName": "潜山市"
      },
      {
        "id": "suzhou",
        "name": "Suzhou",
        "chineseName": "宿州市"
      },
      {
        "id": "tianchang",
        "name": "Tianchang",
        "chineseName": "天长市"
      },
      {
        "id": "tongcheng",
        "name": "Tongcheng",
        "chineseName": "桐城市"
      },
      {
        "id": "tongling",
        "name": "Tongling",
        "chineseName": "铜陵市"
      },
      {
        "id": "wuhu",
        "name": "Wuhu",
        "chineseName": "芜湖市"
      },
      {
        "id": "xuancheng",
        "name": "Xuancheng",
        "chineseName": "宣城市"
      },
      {
        "id": "fu-an",
        "name": "Fu'an",
        "chineseName": "福安市"
      },
      {
        "id": "fuding",
        "name": "Fuding",
        "chineseName": "福鼎市"
      },
      {
        "id": "fuqing",
        "name": "Fuqing",
        "chineseName": "福清市"
      },
      {
        "id": "fuzhou",
        "name": "Fuzhou",
        "chineseName": "福州市"
      },
      {
        "id": "jian-ou",
        "name": "Jian'ou",
        "chineseName": "建瓯市"
      },
      {
        "id": "jinjiang",
        "name": "Jinjiang",
        "chineseName": "晋江市"
      },
      {
        "id": "longhai",
        "name": "Longhai",
        "chineseName": "龙海市"
      },
      {
        "id": "longyan",
        "name": "Longyan",
        "chineseName": "龙岩市"
      },
      {
        "id": "nan-an",
        "name": "Nan'an",
        "chineseName": "南安市"
      },
      {
        "id": "nanping",
        "name": "Nanping",
        "chineseName": "南平市"
      },
      {
        "id": "ningde",
        "name": "Ningde",
        "chineseName": "宁德市"
      },
      {
        "id": "putian",
        "name": "Putian",
        "chineseName": "莆田市"
      },
      {
        "id": "quanzhou",
        "name": "Quanzhou",
        "chineseName": "泉州市"
      },
      {
        "id": "sanming",
        "name": "Sanming",
        "chineseName": "三明市"
      },
      {
        "id": "shaowu",
        "name": "Shaowu",
        "chineseName": "邵武市"
      },
      {
        "id": "shishi",
        "name": "Shishi",
        "chineseName": "石狮市"
      },
      {
        "id": "wuyishan",
        "name": "Wuyishan",
        "chineseName": "武夷山市"
      },
      {
        "id": "xiamen",
        "name": "Xiamen",
        "chineseName": "厦门市"
      },
      {
        "id": "yong-an",
        "name": "Yong'an",
        "chineseName": "永安市"
      },
      {
        "id": "zhangping",
        "name": "Zhangping",
        "chineseName": "漳平市"
      },
      {
        "id": "zhangzhou",
        "name": "Zhangzhou",
        "chineseName": "漳州市"
      },
      {
        "id": "baiyin",
        "name": "Baiyin",
        "chineseName": "白银市"
      },
      {
        "id": "dingxi",
        "name": "Dingxi",
        "chineseName": "定西市"
      },
      {
        "id": "dunhuang",
        "name": "Dunhuang",
        "chineseName": "敦煌市"
      },
      {
        "id": "hezuo",
        "name": "Hezuo",
        "chineseName": "合作市"
      },
      {
        "id": "huating",
        "name": "Huating",
        "chineseName": "华亭市"
      },
      {
        "id": "jiayuguan",
        "name": "Jiayuguan",
        "chineseName": "嘉峪关市"
      },
      {
        "id": "jinchang",
        "name": "Jinchang",
        "chineseName": "金昌市"
      },
      {
        "id": "jiuquan",
        "name": "Jiuquan",
        "chineseName": "酒泉市"
      },
      {
        "id": "lanzhou",
        "name": "Lanzhou",
        "chineseName": "兰州市"
      },
      {
        "id": "linxia",
        "name": "Linxia",
        "chineseName": "临夏市"
      },
      {
        "id": "longnan",
        "name": "Longnan",
        "chineseName": "陇南市"
      },
      {
        "id": "pingliang",
        "name": "Pingliang",
        "chineseName": "平凉市"
      },
      {
        "id": "qingyang",
        "name": "Qingyang",
        "chineseName": "庆阳市"
      },
      {
        "id": "tianshui",
        "name": "Tianshui",
        "chineseName": "天水市"
      },
      {
        "id": "wuwei",
        "name": "Wuwei",
        "chineseName": "武威市"
      },
      {
        "id": "yumen",
        "name": "Yumen",
        "chineseName": "玉门市"
      },
      {
        "id": "zhangye",
        "name": "Zhangye",
        "chineseName": "张掖市"
      },
      {
        "id": "chaozhou",
        "name": "Chaozhou",
        "chineseName": "潮州市"
      },
      {
        "id": "dongguan",
        "name": "Dongguan",
        "chineseName": "东莞市"
      },
      {
        "id": "enping",
        "name": "Enping",
        "chineseName": "恩平市"
      },
      {
        "id": "foshan",
        "name": "Foshan",
        "chineseName": "佛山市"
      },
      {
        "id": "gaozhou",
        "name": "Gaozhou",
        "chineseName": "高州市"
      },
      {
        "id": "guangzhou",
        "name": "Guangzhou",
        "chineseName": "广州市"
      },
      {
        "id": "heshan",
        "name": "Heshan",
        "chineseName": "鹤山市"
      },
      {
        "id": "heyuan",
        "name": "Heyuan",
        "chineseName": "河源市"
      },
      {
        "id": "huazhou",
        "name": "Huazhou",
        "chineseName": "化州市"
      },
      {
        "id": "huizhou",
        "name": "Huizhou",
        "chineseName": "惠州市"
      },
      {
        "id": "jiangmen",
        "name": "Jiangmen",
        "chineseName": "江门市"
      },
      {
        "id": "jieyang",
        "name": "Jieyang",
        "chineseName": "揭阳市"
      },
      {
        "id": "kaiping",
        "name": "Kaiping",
        "chineseName": "开平市"
      },
      {
        "id": "lechang",
        "name": "Lechang",
        "chineseName": "乐昌市"
      },
      {
        "id": "leizhou",
        "name": "Leizhou",
        "chineseName": "雷州市"
      },
      {
        "id": "lianjiang",
        "name": "Lianjiang",
        "chineseName": "廉江市"
      },
      {
        "id": "lianzhou",
        "name": "Lianzhou",
        "chineseName": "连州市"
      },
      {
        "id": "lufeng",
        "name": "Lufeng",
        "chineseName": "陆丰市"
      },
      {
        "id": "luoding",
        "name": "Luoding",
        "chineseName": "罗定市"
      },
      {
        "id": "maoming",
        "name": "Maoming",
        "chineseName": "茂名市"
      },
      {
        "id": "meizhou",
        "name": "Meizhou",
        "chineseName": "梅州市"
      },
      {
        "id": "nanxiong",
        "name": "Nanxiong",
        "chineseName": "南雄市"
      },
      {
        "id": "puning",
        "name": "Puning",
        "chineseName": "普宁市"
      },
      {
        "id": "qingyuan",
        "name": "Qingyuan",
        "chineseName": "清远市"
      },
      {
        "id": "shantou",
        "name": "Shantou",
        "chineseName": "汕头市"
      },
      {
        "id": "shanwei",
        "name": "Shanwei",
        "chineseName": "汕尾市"
      },
      {
        "id": "shaoguan",
        "name": "Shaoguan",
        "chineseName": "韶关市"
      },
      {
        "id": "shenzhen",
        "name": "Shenzhen",
        "chineseName": "深圳市"
      },
      {
        "id": "sihui",
        "name": "Sihui",
        "chineseName": "四会市"
      },
      {
        "id": "taishan",
        "name": "Taishan",
        "chineseName": "台山市"
      },
      {
        "id": "wuchuan",
        "name": "Wuchuan",
        "chineseName": "吴川市"
      },
      {
        "id": "xingning",
        "name": "Xingning",
        "chineseName": "兴宁市"
      },
      {
        "id": "xinyi",
        "name": "Xinyi",
        "chineseName": "信宜市"
      },
      {
        "id": "yangchun",
        "name": "Yangchun",
        "chineseName": "阳春市"
      },
      {
        "id": "yangjiang",
        "name": "Yangjiang",
        "chineseName": "阳江市"
      },
      {
        "id": "yingde",
        "name": "Yingde",
        "chineseName": "英德市"
      },
      {
        "id": "yunfu",
        "name": "Yunfu",
        "chineseName": "云浮市"
      },
      {
        "id": "zhanjiang",
        "name": "Zhanjiang",
        "chineseName": "湛江市"
      },
      {
        "id": "zhaoqing",
        "name": "Zhaoqing",
        "chineseName": "肇庆市"
      },
      {
        "id": "zhongshan",
        "name": "Zhongshan",
        "chineseName": "中山市"
      },
      {
        "id": "zhuhai",
        "name": "Zhuhai",
        "chineseName": "珠海市"
      },
      {
        "id": "baise",
        "name": "Baise",
        "chineseName": "百色市"
      },
      {
        "id": "beihai",
        "name": "Beihai",
        "chineseName": "北海市"
      },
      {
        "id": "beiliu",
        "name": "Beiliu",
        "chineseName": "北流市"
      },
      {
        "id": "cenxi",
        "name": "Cenxi",
        "chineseName": "岑溪市"
      },
      {
        "id": "chongzuo",
        "name": "Chongzuo",
        "chineseName": "崇左市"
      },
      {
        "id": "dongxing",
        "name": "Dongxing",
        "chineseName": "东兴市"
      },
      {
        "id": "fangchenggang",
        "name": "Fangchenggang",
        "chineseName": "防城港市"
      },
      {
        "id": "guigang",
        "name": "Guigang",
        "chineseName": "贵港市"
      },
      {
        "id": "guilin",
        "name": "Guilin",
        "chineseName": "桂林市"
      },
      {
        "id": "guiping",
        "name": "Guiping",
        "chineseName": "桂平市"
      },
      {
        "id": "hechi",
        "name": "Hechi",
        "chineseName": "河池市"
      },
      {
        "id": "hezhou",
        "name": "Hezhou",
        "chineseName": "贺州市"
      },
      {
        "id": "jingxi",
        "name": "Jingxi",
        "chineseName": "靖西市"
      },
      {
        "id": "laibin",
        "name": "Laibin",
        "chineseName": "来宾市"
      },
      {
        "id": "lipu",
        "name": "Lipu",
        "chineseName": "荔浦市"
      },
      {
        "id": "liuzhou",
        "name": "Liuzhou",
        "chineseName": "柳州市"
      },
      {
        "id": "nanning",
        "name": "Nanning",
        "chineseName": "南宁市"
      },
      {
        "id": "pingxiang",
        "name": "Pingxiang",
        "chineseName": "凭祥市"
      },
      {
        "id": "qinzhou",
        "name": "Qinzhou",
        "chineseName": "钦州市"
      },
      {
        "id": "wuzhou",
        "name": "Wuzhou",
        "chineseName": "梧州市"
      },
      {
        "id": "yulin",
        "name": "Yulin",
        "chineseName": "玉林市"
      },
      {
        "id": "anshun",
        "name": "Anshun",
        "chineseName": "安顺市"
      },
      {
        "id": "bijie",
        "name": "Bijie",
        "chineseName": "毕节市"
      },
      {
        "id": "chishui",
        "name": "Chishui",
        "chineseName": "赤水市"
      },
      {
        "id": "duyun",
        "name": "Duyun",
        "chineseName": "都匀市"
      },
      {
        "id": "fuquan",
        "name": "Fuquan",
        "chineseName": "福泉市"
      },
      {
        "id": "guiyang",
        "name": "Guiyang",
        "chineseName": "贵阳市"
      },
      {
        "id": "kaili",
        "name": "Kaili",
        "chineseName": "凯里市"
      },
      {
        "id": "liupanshui",
        "name": "Liupanshui",
        "chineseName": "六盘水市"
      },
      {
        "id": "panzhou",
        "name": "Panzhou",
        "chineseName": "盘州市"
      },
      {
        "id": "qingzhen",
        "name": "Qingzhen",
        "chineseName": "清镇市"
      },
      {
        "id": "renhuai",
        "name": "Renhuai",
        "chineseName": "仁怀市"
      },
      {
        "id": "tongren",
        "name": "Tongren",
        "chineseName": "铜仁市"
      },
      {
        "id": "xingren",
        "name": "Xingren",
        "chineseName": "兴仁市"
      },
      {
        "id": "xingyi",
        "name": "Xingyi",
        "chineseName": "兴义市"
      },
      {
        "id": "zunyi",
        "name": "Zunyi",
        "chineseName": "遵义市"
      },
      {
        "id": "danzhou",
        "name": "Danzhou",
        "chineseName": "儋州市"
      },
      {
        "id": "dongfang",
        "name": "Dongfang",
        "chineseName": "东方市"
      },
      {
        "id": "haikou",
        "name": "Haikou",
        "chineseName": "海口市"
      },
      {
        "id": "qionghai",
        "name": "Qionghai",
        "chineseName": "琼海市"
      },
      {
        "id": "sansha",
        "name": "Sansha",
        "chineseName": "三沙市"
      },
      {
        "id": "sanya",
        "name": "Sanya",
        "chineseName": "三亚市"
      },
      {
        "id": "wanning",
        "name": "Wanning",
        "chineseName": "万宁市"
      },
      {
        "id": "wenchang",
        "name": "Wenchang",
        "chineseName": "文昌市"
      },
      {
        "id": "wuzhishan",
        "name": "Wuzhishan",
        "chineseName": "五指山市"
      },
      {
        "id": "anguo",
        "name": "Anguo",
        "chineseName": "安国市"
      },
      {
        "id": "baoding",
        "name": "Baoding",
        "chineseName": "保定市"
      },
      {
        "id": "bazhou",
        "name": "Bazhou",
        "chineseName": "霸州市"
      },
      {
        "id": "botou",
        "name": "Botou",
        "chineseName": "泊头市"
      },
      {
        "id": "cangzhou",
        "name": "Cangzhou",
        "chineseName": "沧州市"
      },
      {
        "id": "chengde",
        "name": "Chengde",
        "chineseName": "承德市"
      },
      {
        "id": "dingzhou",
        "name": "Dingzhou",
        "chineseName": "定州市"
      },
      {
        "id": "gaobeidian",
        "name": "Gaobeidian",
        "chineseName": "高碑店市"
      },
      {
        "id": "handan",
        "name": "Handan",
        "chineseName": "邯郸市"
      },
      {
        "id": "hengshui",
        "name": "Hengshui",
        "chineseName": "衡水市"
      },
      {
        "id": "hejian",
        "name": "Hejian",
        "chineseName": "河间市"
      },
      {
        "id": "huanghua",
        "name": "Huanghua",
        "chineseName": "黄骅市"
      },
      {
        "id": "jinzhou",
        "name": "Jinzhou",
        "chineseName": "晋州市"
      },
      {
        "id": "langfang",
        "name": "Langfang",
        "chineseName": "廊坊市"
      },
      {
        "id": "luanzhou",
        "name": "Luanzhou",
        "chineseName": "滦州市"
      },
      {
        "id": "nangong",
        "name": "Nangong",
        "chineseName": "南宫市"
      },
      {
        "id": "pingquan",
        "name": "Pingquan",
        "chineseName": "平泉市"
      },
      {
        "id": "qian-an",
        "name": "Qian'an",
        "chineseName": "迁安市"
      },
      {
        "id": "qinhuangdao",
        "name": "Qinhuangdao",
        "chineseName": "秦皇岛市"
      },
      {
        "id": "renqiu",
        "name": "Renqiu",
        "chineseName": "任丘市"
      },
      {
        "id": "sanhe",
        "name": "Sanhe",
        "chineseName": "三河市"
      },
      {
        "id": "shahe",
        "name": "Shahe",
        "chineseName": "沙河市"
      },
      {
        "id": "shenzhou",
        "name": "Shenzhou",
        "chineseName": "深州市"
      },
      {
        "id": "shijiazhuang",
        "name": "Shijiazhuang",
        "chineseName": "石家庄市"
      },
      {
        "id": "tangshan",
        "name": "Tangshan",
        "chineseName": "唐山市"
      },
      {
        "id": "xinji",
        "name": "Xinji",
        "chineseName": "辛集市"
      },
      {
        "id": "wu-an",
        "name": "Wu'an",
        "chineseName": "武安市"
      },
      {
        "id": "xingtai",
        "name": "Xingtai",
        "chineseName": "邢台市"
      },
      {
        "id": "xinle",
        "name": "Xinle",
        "chineseName": "新乐市"
      },
      {
        "id": "zhangjiakou",
        "name": "Zhangjiakou",
        "chineseName": "张家口市"
      },
      {
        "id": "zhuozhou",
        "name": "Zhuozhou",
        "chineseName": "涿州市"
      },
      {
        "id": "zunhua",
        "name": "Zunhua",
        "chineseName": "遵化市"
      },
      {
        "id": "anda",
        "name": "Anda",
        "chineseName": "安达市"
      },
      {
        "id": "bei-an",
        "name": "Bei'an",
        "chineseName": "北安市"
      },
      {
        "id": "daqing",
        "name": "Daqing",
        "chineseName": "大庆市"
      },
      {
        "id": "dongning",
        "name": "Dongning",
        "chineseName": "东宁市"
      },
      {
        "id": "fujin",
        "name": "Fujin",
        "chineseName": "富锦市"
      },
      {
        "id": "fuyuan",
        "name": "Fuyuan",
        "chineseName": "抚远市"
      },
      {
        "id": "hailin",
        "name": "Hailin",
        "chineseName": "海林市"
      },
      {
        "id": "hailun",
        "name": "Hailun",
        "chineseName": "海伦市"
      },
      {
        "id": "harbin",
        "name": "Harbin",
        "chineseName": "哈尔滨市"
      },
      {
        "id": "hegang",
        "name": "Hegang",
        "chineseName": "鹤岗市"
      },
      {
        "id": "heihe",
        "name": "Heihe",
        "chineseName": "黑河市"
      },
      {
        "id": "hulin",
        "name": "Hulin",
        "chineseName": "虎林市"
      },
      {
        "id": "jiamusi",
        "name": "Jiamusi",
        "chineseName": "佳木斯市"
      },
      {
        "id": "jixi",
        "name": "Jixi",
        "chineseName": "鸡西市"
      },
      {
        "id": "mishan",
        "name": "Mishan",
        "chineseName": "密山市"
      },
      {
        "id": "mohe",
        "name": "Mohe",
        "chineseName": "漠河市"
      },
      {
        "id": "mudanjiang",
        "name": "Mudanjiang",
        "chineseName": "牡丹江市"
      },
      {
        "id": "muling",
        "name": "Muling",
        "chineseName": "穆棱市"
      },
      {
        "id": "nehe",
        "name": "Nehe",
        "chineseName": "讷河市"
      },
      {
        "id": "ning-an",
        "name": "Ning'an",
        "chineseName": "宁安市"
      },
      {
        "id": "qiqihar",
        "name": "Qiqihar",
        "chineseName": "齐齐哈尔市"
      },
      {
        "id": "qitaihe",
        "name": "Qitaihe",
        "chineseName": "七台河市"
      },
      {
        "id": "shangzhi",
        "name": "Shangzhi",
        "chineseName": "尚志市"
      },
      {
        "id": "shuangyashan",
        "name": "Shuangyashan",
        "chineseName": "双鸭山市"
      },
      {
        "id": "suifenhe",
        "name": "Suifenhe",
        "chineseName": "绥芬河市"
      },
      {
        "id": "suihua",
        "name": "Suihua",
        "chineseName": "绥化市"
      },
      {
        "id": "tieli",
        "name": "Tieli",
        "chineseName": "铁力市"
      },
      {
        "id": "tongjiang",
        "name": "Tongjiang",
        "chineseName": "同江市"
      },
      {
        "id": "wuchang",
        "name": "Wuchang",
        "chineseName": "五常市"
      },
      {
        "id": "wudalianchi",
        "name": "Wudalianchi",
        "chineseName": "五大连池市"
      },
      {
        "id": "yichun",
        "name": "Yichun",
        "chineseName": "伊春市"
      },
      {
        "id": "zhaodong",
        "name": "Zhaodong",
        "chineseName": "肇东市"
      },
      {
        "id": "anyang",
        "name": "Anyang",
        "chineseName": "安阳市"
      },
      {
        "id": "changge",
        "name": "Changge",
        "chineseName": "长葛市"
      },
      {
        "id": "dengfeng",
        "name": "Dengfeng",
        "chineseName": "登封市"
      },
      {
        "id": "dengzhou",
        "name": "Dengzhou",
        "chineseName": "邓州市"
      },
      {
        "id": "gongyi",
        "name": "Gongyi",
        "chineseName": "巩义市"
      },
      {
        "id": "hebi",
        "name": "Hebi",
        "chineseName": "鹤壁市"
      },
      {
        "id": "huixian",
        "name": "Huixian",
        "chineseName": "辉县市"
      },
      {
        "id": "jiaozuo",
        "name": "Jiaozuo",
        "chineseName": "焦作市"
      },
      {
        "id": "jiyuan",
        "name": "Jiyuan",
        "chineseName": "济源市"
      },
      {
        "id": "kaifeng",
        "name": "Kaifeng",
        "chineseName": "开封市"
      },
      {
        "id": "lingbao",
        "name": "Lingbao",
        "chineseName": "灵宝市"
      },
      {
        "id": "linzhou",
        "name": "Linzhou",
        "chineseName": "林州市"
      },
      {
        "id": "luohe",
        "name": "Luohe",
        "chineseName": "漯河市"
      },
      {
        "id": "luoyang",
        "name": "Luoyang",
        "chineseName": "洛阳市"
      },
      {
        "id": "mengzhou",
        "name": "Mengzhou",
        "chineseName": "孟州市"
      },
      {
        "id": "nanyang",
        "name": "Nanyang",
        "chineseName": "南阳市"
      },
      {
        "id": "pingdingshan",
        "name": "Pingdingshan",
        "chineseName": "平顶山市"
      },
      {
        "id": "puyang",
        "name": "Puyang",
        "chineseName": "濮阳市"
      },
      {
        "id": "qinyang",
        "name": "Qinyang",
        "chineseName": "沁阳市"
      },
      {
        "id": "ruzhou",
        "name": "Ruzhou",
        "chineseName": "汝州市"
      },
      {
        "id": "sanmenxia",
        "name": "Sanmenxia",
        "chineseName": "三门峡市"
      },
      {
        "id": "shangqiu",
        "name": "Shangqiu",
        "chineseName": "商丘市"
      },
      {
        "id": "weihui",
        "name": "Weihui",
        "chineseName": "卫辉市"
      },
      {
        "id": "wugang",
        "name": "Wugang",
        "chineseName": "舞钢市"
      },
      {
        "id": "xiangcheng",
        "name": "Xiangcheng",
        "chineseName": "项城市"
      },
      {
        "id": "xingyang",
        "name": "Xingyang",
        "chineseName": "荥阳市"
      },
      {
        "id": "xinmi",
        "name": "Xinmi",
        "chineseName": "新密市"
      },
      {
        "id": "xinxiang",
        "name": "Xinxiang",
        "chineseName": "新乡市"
      },
      {
        "id": "xinyang",
        "name": "Xinyang",
        "chineseName": "信阳市"
      },
      {
        "id": "xinzheng",
        "name": "Xinzheng",
        "chineseName": "新郑市"
      },
      {
        "id": "xuchang",
        "name": "Xuchang",
        "chineseName": "许昌市"
      },
      {
        "id": "yanshi",
        "name": "Yanshi",
        "chineseName": "偃师市"
      },
      {
        "id": "yima",
        "name": "Yima",
        "chineseName": "义马市"
      },
      {
        "id": "yongcheng",
        "name": "Yongcheng",
        "chineseName": "永城市"
      },
      {
        "id": "yuzhou",
        "name": "Yuzhou",
        "chineseName": "禹州市"
      },
      {
        "id": "zhengzhou",
        "name": "Zhengzhou",
        "chineseName": "郑州市"
      },
      {
        "id": "zhoukou",
        "name": "Zhoukou",
        "chineseName": "周口市"
      },
      {
        "id": "zhumadian",
        "name": "Zhumadian",
        "chineseName": "驻马店市"
      },
      {
        "id": "anlu",
        "name": "Anlu",
        "chineseName": "安陆市"
      },
      {
        "id": "chibi",
        "name": "Chibi",
        "chineseName": "赤壁市"
      },
      {
        "id": "dangyang",
        "name": "Dangyang",
        "chineseName": "当阳市"
      },
      {
        "id": "danjiangkou",
        "name": "Danjiangkou",
        "chineseName": "丹江口市"
      },
      {
        "id": "daye",
        "name": "Daye",
        "chineseName": "大冶市"
      },
      {
        "id": "enshi",
        "name": "Enshi",
        "chineseName": "恩施市"
      },
      {
        "id": "ezhou",
        "name": "Ezhou",
        "chineseName": "鄂州市"
      },
      {
        "id": "guangshui",
        "name": "Guangshui",
        "chineseName": "广水市"
      },
      {
        "id": "hanchuan",
        "name": "Hanchuan",
        "chineseName": "汉川市"
      },
      {
        "id": "honghu",
        "name": "Honghu",
        "chineseName": "洪湖市"
      },
      {
        "id": "huanggang",
        "name": "Huanggang",
        "chineseName": "黄冈市"
      },
      {
        "id": "huangshi",
        "name": "Huangshi",
        "chineseName": "黄石市"
      },
      {
        "id": "jingmen",
        "name": "Jingmen",
        "chineseName": "荆门市"
      },
      {
        "id": "jingshan",
        "name": "Jingshan",
        "chineseName": "京山市"
      },
      {
        "id": "jingzhou",
        "name": "Jingzhou",
        "chineseName": "荆州市"
      },
      {
        "id": "laohekou",
        "name": "Laohekou",
        "chineseName": "老河口市"
      },
      {
        "id": "lichuan",
        "name": "Lichuan",
        "chineseName": "利川市"
      },
      {
        "id": "macheng",
        "name": "Macheng",
        "chineseName": "麻城市"
      },
      {
        "id": "qianjiang",
        "name": "Qianjiang",
        "chineseName": "潜江市"
      },
      {
        "id": "shishou",
        "name": "Shishou",
        "chineseName": "石首市"
      },
      {
        "id": "shiyan",
        "name": "Shiyan",
        "chineseName": "十堰市"
      },
      {
        "id": "suizhou",
        "name": "Suizhou",
        "chineseName": "随州市"
      },
      {
        "id": "songzi",
        "name": "Songzi",
        "chineseName": "松滋市"
      },
      {
        "id": "tianmen",
        "name": "Tianmen",
        "chineseName": "天门市"
      },
      {
        "id": "wuhan",
        "name": "Wuhan",
        "chineseName": "武汉市"
      },
      {
        "id": "wuxue",
        "name": "Wuxue",
        "chineseName": "武穴市"
      },
      {
        "id": "xiangyang",
        "name": "Xiangyang",
        "chineseName": "襄阳市"
      },
      {
        "id": "xianning",
        "name": "Xianning",
        "chineseName": "咸宁市"
      },
      {
        "id": "xiantao",
        "name": "Xiantao",
        "chineseName": "仙桃市"
      },
      {
        "id": "xiaogan",
        "name": "Xiaogan",
        "chineseName": "孝感市"
      },
      {
        "id": "yichang",
        "name": "Yichang",
        "chineseName": "宜昌市"
      },
      {
        "id": "yicheng",
        "name": "Yicheng",
        "chineseName": "宜城市"
      },
      {
        "id": "yidu",
        "name": "Yidu",
        "chineseName": "宜都市"
      },
      {
        "id": "yingcheng",
        "name": "Yingcheng",
        "chineseName": "应城市"
      },
      {
        "id": "zaoyang",
        "name": "Zaoyang",
        "chineseName": "枣阳市"
      },
      {
        "id": "zhijiang",
        "name": "Zhijiang",
        "chineseName": "枝江市"
      },
      {
        "id": "zhongxiang",
        "name": "Zhongxiang",
        "chineseName": "钟祥市"
      },
      {
        "id": "changde",
        "name": "Changde",
        "chineseName": "常德市"
      },
      {
        "id": "changning",
        "name": "Changning",
        "chineseName": "常宁市"
      },
      {
        "id": "changsha",
        "name": "Changsha",
        "chineseName": "长沙市"
      },
      {
        "id": "chenzhou",
        "name": "Chenzhou",
        "chineseName": "郴州市"
      },
      {
        "id": "hengyang",
        "name": "Hengyang",
        "chineseName": "衡阳市"
      },
      {
        "id": "hongjiang",
        "name": "Hongjiang",
        "chineseName": "洪江市"
      },
      {
        "id": "huaihua",
        "name": "Huaihua",
        "chineseName": "怀化市"
      },
      {
        "id": "jinshi",
        "name": "Jinshi",
        "chineseName": "津市市"
      },
      {
        "id": "jishou",
        "name": "Jishou",
        "chineseName": "吉首市"
      },
      {
        "id": "leiyang",
        "name": "Leiyang",
        "chineseName": "耒阳市"
      },
      {
        "id": "lengshuijiang",
        "name": "Lengshuijiang",
        "chineseName": "冷水江市"
      },
      {
        "id": "lianyuan",
        "name": "Lianyuan",
        "chineseName": "涟源市"
      },
      {
        "id": "liling",
        "name": "Liling",
        "chineseName": "醴陵市"
      },
      {
        "id": "linxiang",
        "name": "Linxiang",
        "chineseName": "临湘市"
      },
      {
        "id": "liuyang",
        "name": "Liuyang",
        "chineseName": "浏阳市"
      },
      {
        "id": "loudi",
        "name": "Loudi",
        "chineseName": "娄底市"
      },
      {
        "id": "miluo",
        "name": "Miluo",
        "chineseName": "汨罗市"
      },
      {
        "id": "ningxiang",
        "name": "Ningxiang",
        "chineseName": "宁乡市"
      },
      {
        "id": "shaoshan",
        "name": "Shaoshan",
        "chineseName": "韶山市"
      },
      {
        "id": "shaoyang",
        "name": "Shaoyang",
        "chineseName": "邵阳市"
      },
      {
        "id": "xiangtan",
        "name": "Xiangtan",
        "chineseName": "湘潭市"
      },
      {
        "id": "xiangxiang",
        "name": "Xiangxiang",
        "chineseName": "湘乡市"
      },
      {
        "id": "yiyang",
        "name": "Yiyang",
        "chineseName": "益阳市"
      },
      {
        "id": "yongzhou",
        "name": "Yongzhou",
        "chineseName": "永州市"
      },
      {
        "id": "yuanjiang",
        "name": "Yuanjiang",
        "chineseName": "沅江市"
      },
      {
        "id": "yueyang",
        "name": "Yueyang",
        "chineseName": "岳阳市"
      },
      {
        "id": "zhangjiajie",
        "name": "Zhangjiajie",
        "chineseName": "张家界市"
      },
      {
        "id": "zhuzhou",
        "name": "Zhuzhou",
        "chineseName": "株洲市"
      },
      {
        "id": "zixing",
        "name": "Zixing",
        "chineseName": "资兴市"
      },
      {
        "id": "arxan",
        "name": "Arxan",
        "chineseName": "阿尔山市"
      },
      {
        "id": "baotou",
        "name": "Baotou",
        "chineseName": "包头市"
      },
      {
        "id": "bayannur",
        "name": "Bayannur",
        "chineseName": "巴彦淖尔市"
      },
      {
        "id": "chifeng",
        "name": "Chifeng",
        "chineseName": "赤峰市"
      },
      {
        "id": "erenhot",
        "name": "Erenhot",
        "chineseName": "二连浩特市"
      },
      {
        "id": "ergun",
        "name": "Ergun",
        "chineseName": "额尔古纳市"
      },
      {
        "id": "fengzhen",
        "name": "Fengzhen",
        "chineseName": "丰镇市"
      },
      {
        "id": "genhe",
        "name": "Genhe",
        "chineseName": "根河市"
      },
      {
        "id": "hohhot",
        "name": "Hohhot",
        "chineseName": "呼和浩特市"
      },
      {
        "id": "holingol",
        "name": "Holingol",
        "chineseName": "霍林郭勒市"
      },
      {
        "id": "hulunbuir",
        "name": "Hulunbuir",
        "chineseName": "呼伦贝尔市"
      },
      {
        "id": "manzhouli",
        "name": "Manzhouli",
        "chineseName": "满洲里市"
      },
      {
        "id": "ordos",
        "name": "Ordos",
        "chineseName": "鄂尔多斯市"
      },
      {
        "id": "tongliao",
        "name": "Tongliao",
        "chineseName": "通辽市"
      },
      {
        "id": "ulanhot",
        "name": "Ulanhot",
        "chineseName": "乌兰浩特市"
      },
      {
        "id": "ulanqab",
        "name": "Ulanqab",
        "chineseName": "乌兰察布市"
      },
      {
        "id": "wuhai",
        "name": "Wuhai",
        "chineseName": "乌海市"
      },
      {
        "id": "xilinhot",
        "name": "Xilinhot",
        "chineseName": "锡林浩特市"
      },
      {
        "id": "yakeshi",
        "name": "Yakeshi",
        "chineseName": "牙克石市"
      },
      {
        "id": "zhalantun",
        "name": "Zhalantun",
        "chineseName": "扎兰屯市"
      },
      {
        "id": "changshu",
        "name": "Changshu",
        "chineseName": "常熟市"
      },
      {
        "id": "changzhou",
        "name": "Changzhou",
        "chineseName": "常州市"
      },
      {
        "id": "danyang",
        "name": "Danyang",
        "chineseName": "丹阳市"
      },
      {
        "id": "dongtai",
        "name": "Dongtai",
        "chineseName": "东台市"
      },
      {
        "id": "gaoyou",
        "name": "Gaoyou",
        "chineseName": "高邮市"
      },
      {
        "id": "hai-an",
        "name": "Hai'an",
        "chineseName": "海安市"
      },
      {
        "id": "haimen",
        "name": "Haimen",
        "chineseName": "海门市"
      },
      {
        "id": "huai-an",
        "name": "Huai'an",
        "chineseName": "淮安市"
      },
      {
        "id": "jiangyin",
        "name": "Jiangyin",
        "chineseName": "江阴市"
      },
      {
        "id": "jingjiang",
        "name": "Jingjiang",
        "chineseName": "靖江市"
      },
      {
        "id": "jurong",
        "name": "Jurong",
        "chineseName": "句容市"
      },
      {
        "id": "liyang",
        "name": "Liyang",
        "chineseName": "溧阳市"
      },
      {
        "id": "lianyungang",
        "name": "Lianyungang",
        "chineseName": "连云港市"
      },
      {
        "id": "kunshan",
        "name": "Kunshan",
        "chineseName": "昆山市"
      },
      {
        "id": "nanjing",
        "name": "Nanjing",
        "chineseName": "南京市"
      },
      {
        "id": "nantong",
        "name": "Nantong",
        "chineseName": "南通市"
      },
      {
        "id": "pizhou",
        "name": "Pizhou",
        "chineseName": "邳州市"
      },
      {
        "id": "qidong",
        "name": "Qidong",
        "chineseName": "启东市"
      },
      {
        "id": "rugao",
        "name": "Rugao",
        "chineseName": "如皋市"
      },
      {
        "id": "suqian",
        "name": "Suqian",
        "chineseName": "宿迁市"
      },
      {
        "id": "taicang",
        "name": "Taicang",
        "chineseName": "太仓市"
      },
      {
        "id": "taixing",
        "name": "Taixing",
        "chineseName": "泰兴市"
      },
      {
        "id": "taizhou",
        "name": "Taizhou",
        "chineseName": "泰州市"
      },
      {
        "id": "wuxi",
        "name": "Wuxi",
        "chineseName": "无锡市"
      },
      {
        "id": "xinghua",
        "name": "Xinghua",
        "chineseName": "兴化市"
      },
      {
        "id": "xuzhou",
        "name": "Xuzhou",
        "chineseName": "徐州市"
      },
      {
        "id": "yancheng",
        "name": "Yancheng",
        "chineseName": "盐城市"
      },
      {
        "id": "yangzhong",
        "name": "Yangzhong",
        "chineseName": "扬中市"
      },
      {
        "id": "yangzhou",
        "name": "Yangzhou",
        "chineseName": "扬州市"
      },
      {
        "id": "yixing",
        "name": "Yixing",
        "chineseName": "宜兴市"
      },
      {
        "id": "yizheng",
        "name": "Yizheng",
        "chineseName": "仪征市"
      },
      {
        "id": "zhangjiagang",
        "name": "Zhangjiagang",
        "chineseName": "张家港市"
      },
      {
        "id": "zhenjiang",
        "name": "Zhenjiang",
        "chineseName": "镇江市"
      },
      {
        "id": "dexing",
        "name": "Dexing",
        "chineseName": "德兴市"
      },
      {
        "id": "fengcheng",
        "name": "Fengcheng",
        "chineseName": "丰城市"
      },
      {
        "id": "ganzhou",
        "name": "Ganzhou",
        "chineseName": "赣州市"
      },
      {
        "id": "gao-an",
        "name": "Gao'an",
        "chineseName": "高安市"
      },
      {
        "id": "gongqingcheng",
        "name": "Gongqingcheng",
        "chineseName": "共青城市"
      },
      {
        "id": "guixi",
        "name": "Guixi",
        "chineseName": "贵溪市"
      },
      {
        "id": "ji-an",
        "name": "Ji'an",
        "chineseName": "吉安市"
      },
      {
        "id": "jingdezhen",
        "name": "Jingdezhen",
        "chineseName": "景德镇市"
      },
      {
        "id": "jinggangshan",
        "name": "Jinggangshan",
        "chineseName": "井冈山市"
      },
      {
        "id": "jiujiang",
        "name": "Jiujiang",
        "chineseName": "九江市"
      },
      {
        "id": "leping",
        "name": "Leping",
        "chineseName": "乐平市"
      },
      {
        "id": "lushan",
        "name": "Lushan",
        "chineseName": "庐山市"
      },
      {
        "id": "nanchang",
        "name": "Nanchang",
        "chineseName": "南昌市"
      },
      {
        "id": "ruichang",
        "name": "Ruichang",
        "chineseName": "瑞昌市"
      },
      {
        "id": "ruijin",
        "name": "Ruijin",
        "chineseName": "瑞金市"
      },
      {
        "id": "shangrao",
        "name": "Shangrao",
        "chineseName": "上饶市"
      },
      {
        "id": "xinyu",
        "name": "Xinyu",
        "chineseName": "新余市"
      },
      {
        "id": "yingtan",
        "name": "Yingtan",
        "chineseName": "鹰潭市"
      },
      {
        "id": "zhangshu",
        "name": "Zhangshu",
        "chineseName": "樟树市"
      },
      {
        "id": "baicheng",
        "name": "Baicheng",
        "chineseName": "白城市"
      },
      {
        "id": "baishan",
        "name": "Baishan",
        "chineseName": "白山市"
      },
      {
        "id": "changchun",
        "name": "Changchun",
        "chineseName": "长春市"
      },
      {
        "id": "da-an",
        "name": "Da'an",
        "chineseName": "大安市"
      },
      {
        "id": "dehui",
        "name": "Dehui",
        "chineseName": "德惠市"
      },
      {
        "id": "dunhua",
        "name": "Dunhua",
        "chineseName": "敦化市"
      },
      {
        "id": "fuyu",
        "name": "Fuyu",
        "chineseName": "扶余市"
      },
      {
        "id": "gongzhuling",
        "name": "Gongzhuling",
        "chineseName": "公主岭市"
      },
      {
        "id": "helong",
        "name": "Helong",
        "chineseName": "和龙市"
      },
      {
        "id": "huadian",
        "name": "Huadian",
        "chineseName": "桦甸市"
      },
      {
        "id": "hunchun",
        "name": "Hunchun",
        "chineseName": "珲春市"
      },
      {
        "id": "jiaohe",
        "name": "Jiaohe",
        "chineseName": "蛟河市"
      },
      {
        "id": "jilin",
        "name": "Jilin",
        "chineseName": "吉林市"
      },
      {
        "id": "liaoyuan",
        "name": "Liaoyuan",
        "chineseName": "辽源市"
      },
      {
        "id": "linjiang",
        "name": "Linjiang",
        "chineseName": "临江市"
      },
      {
        "id": "longjing",
        "name": "Longjing",
        "chineseName": "龙井市"
      },
      {
        "id": "meihekou",
        "name": "Meihekou",
        "chineseName": "梅河口市"
      },
      {
        "id": "panshi",
        "name": "Panshi",
        "chineseName": "磐石市"
      },
      {
        "id": "shuangliao",
        "name": "Shuangliao",
        "chineseName": "双辽市"
      },
      {
        "id": "shulan",
        "name": "Shulan",
        "chineseName": "舒兰市"
      },
      {
        "id": "siping",
        "name": "Siping",
        "chineseName": "四平市"
      },
      {
        "id": "songyuan",
        "name": "Songyuan",
        "chineseName": "松原市"
      },
      {
        "id": "taonan",
        "name": "Taonan",
        "chineseName": "洮南市"
      },
      {
        "id": "tonghua",
        "name": "Tonghua",
        "chineseName": "通化市"
      },
      {
        "id": "tumen",
        "name": "Tumen",
        "chineseName": "图们市"
      },
      {
        "id": "yanji",
        "name": "Yanji",
        "chineseName": "延吉市"
      },
      {
        "id": "yushu",
        "name": "Yushu",
        "chineseName": "榆树市"
      },
      {
        "id": "anshan",
        "name": "Anshan",
        "chineseName": "鞍山市"
      },
      {
        "id": "benxi",
        "name": "Benxi",
        "chineseName": "本溪市"
      },
      {
        "id": "beipiao",
        "name": "Beipiao",
        "chineseName": "北票市"
      },
      {
        "id": "beizhen",
        "name": "Beizhen",
        "chineseName": "北镇市"
      },
      {
        "id": "chaoyang",
        "name": "Chaoyang",
        "chineseName": "朝阳市"
      },
      {
        "id": "dalian",
        "name": "Dalian",
        "chineseName": "大连市"
      },
      {
        "id": "dandong",
        "name": "Dandong",
        "chineseName": "丹东市"
      },
      {
        "id": "dashiqiao",
        "name": "Dashiqiao",
        "chineseName": "大石桥市"
      },
      {
        "id": "dengta",
        "name": "Dengta",
        "chineseName": "灯塔市"
      },
      {
        "id": "diaobingshan",
        "name": "Diaobingshan",
        "chineseName": "调兵山市"
      },
      {
        "id": "donggang",
        "name": "Donggang",
        "chineseName": "东港市"
      },
      {
        "id": "fushun",
        "name": "Fushun",
        "chineseName": "抚顺市"
      },
      {
        "id": "fuxin",
        "name": "Fuxin",
        "chineseName": "阜新市"
      },
      {
        "id": "gaizhou",
        "name": "Gaizhou",
        "chineseName": "盖州市"
      },
      {
        "id": "haicheng",
        "name": "Haicheng",
        "chineseName": "海城市"
      },
      {
        "id": "huludao",
        "name": "Huludao",
        "chineseName": "葫芦岛市"
      },
      {
        "id": "kaiyuan",
        "name": "Kaiyuan",
        "chineseName": "开原市"
      },
      {
        "id": "liaoyang",
        "name": "Liaoyang",
        "chineseName": "辽阳市"
      },
      {
        "id": "linghai",
        "name": "Linghai",
        "chineseName": "凌海市"
      },
      {
        "id": "lingyuan",
        "name": "Lingyuan",
        "chineseName": "凌源市"
      },
      {
        "id": "panjin",
        "name": "Panjin",
        "chineseName": "盘锦市"
      },
      {
        "id": "shenyang",
        "name": "Shenyang",
        "chineseName": "沈阳市"
      },
      {
        "id": "tieling",
        "name": "Tieling",
        "chineseName": "铁岭市"
      },
      {
        "id": "wafangdian",
        "name": "Wafangdian",
        "chineseName": "瓦房店市"
      },
      {
        "id": "xingcheng",
        "name": "Xingcheng",
        "chineseName": "兴城市"
      },
      {
        "id": "xinmin",
        "name": "Xinmin",
        "chineseName": "新民市"
      },
      {
        "id": "yingkou",
        "name": "Yingkou",
        "chineseName": "营口市"
      },
      {
        "id": "zhuanghe",
        "name": "Zhuanghe",
        "chineseName": "庄河市"
      },
      {
        "id": "guyuan",
        "name": "Guyuan",
        "chineseName": "固原市"
      },
      {
        "id": "lingwu",
        "name": "Lingwu",
        "chineseName": "灵武市"
      },
      {
        "id": "qingtongxia",
        "name": "Qingtongxia",
        "chineseName": "青铜峡市"
      },
      {
        "id": "shizuishan",
        "name": "Shizuishan",
        "chineseName": "石嘴山市"
      },
      {
        "id": "wuzhong",
        "name": "Wuzhong",
        "chineseName": "吴忠市"
      },
      {
        "id": "yinchuan",
        "name": "Yinchuan",
        "chineseName": "银川市"
      },
      {
        "id": "zhongwei",
        "name": "Zhongwei",
        "chineseName": "中卫市"
      },
      {
        "id": "delingha",
        "name": "Delingha",
        "chineseName": "德令哈市"
      },
      {
        "id": "golmud",
        "name": "Golmud",
        "chineseName": "格尔木市"
      },
      {
        "id": "haidong",
        "name": "Haidong",
        "chineseName": "海东市"
      },
      {
        "id": "mangnai",
        "name": "Mangnai",
        "chineseName": "茫崖市"
      },
      {
        "id": "xining",
        "name": "Xining",
        "chineseName": "西宁市"
      },
      {
        "id": "ankang",
        "name": "Ankang",
        "chineseName": "安康市"
      },
      {
        "id": "baoji",
        "name": "Baoji",
        "chineseName": "宝鸡市"
      },
      {
        "id": "binzhou",
        "name": "Binzhou",
        "chineseName": "彬州市"
      },
      {
        "id": "hancheng",
        "name": "Hancheng",
        "chineseName": "韩城市"
      },
      {
        "id": "hanzhong",
        "name": "Hanzhong",
        "chineseName": "汉中市"
      },
      {
        "id": "huayin",
        "name": "Huayin",
        "chineseName": "华阴市"
      },
      {
        "id": "shangluo",
        "name": "Shangluo",
        "chineseName": "商洛市"
      },
      {
        "id": "shenmu",
        "name": "Shenmu",
        "chineseName": "神木市"
      },
      {
        "id": "tongchuan",
        "name": "Tongchuan",
        "chineseName": "铜川市"
      },
      {
        "id": "weinan",
        "name": "Weinan",
        "chineseName": "渭南市"
      },
      {
        "id": "xi-an",
        "name": "Xi'an",
        "chineseName": "西安市"
      },
      {
        "id": "xianyang",
        "name": "Xianyang",
        "chineseName": "咸阳市"
      },
      {
        "id": "xingping",
        "name": "Xingping",
        "chineseName": "兴平市"
      },
      {
        "id": "yan-an",
        "name": "Yan'an",
        "chineseName": "延安市"
      },
      {
        "id": "anqiu",
        "name": "Anqiu",
        "chineseName": "安丘市"
      },
      {
        "id": "changyi",
        "name": "Changyi",
        "chineseName": "昌邑市"
      },
      {
        "id": "dezhou",
        "name": "Dezhou",
        "chineseName": "德州市"
      },
      {
        "id": "dongying",
        "name": "Dongying",
        "chineseName": "东营市"
      },
      {
        "id": "feicheng",
        "name": "Feicheng",
        "chineseName": "肥城市"
      },
      {
        "id": "gaomi",
        "name": "Gaomi",
        "chineseName": "高密市"
      },
      {
        "id": "haiyang",
        "name": "Haiyang",
        "chineseName": "海阳市"
      },
      {
        "id": "heze",
        "name": "Heze",
        "chineseName": "菏泽市"
      },
      {
        "id": "jiaozhou",
        "name": "Jiaozhou",
        "chineseName": "胶州市"
      },
      {
        "id": "jinan",
        "name": "Jinan",
        "chineseName": "济南市"
      },
      {
        "id": "jining",
        "name": "Jining",
        "chineseName": "济宁市"
      },
      {
        "id": "laixi",
        "name": "Laixi",
        "chineseName": "莱西市"
      },
      {
        "id": "laiyang",
        "name": "Laiyang",
        "chineseName": "莱阳市"
      },
      {
        "id": "laizhou",
        "name": "Laizhou",
        "chineseName": "莱州市"
      },
      {
        "id": "leling",
        "name": "Leling",
        "chineseName": "乐陵市"
      },
      {
        "id": "liaocheng",
        "name": "Liaocheng",
        "chineseName": "聊城市"
      },
      {
        "id": "linqing",
        "name": "Linqing",
        "chineseName": "临清市"
      },
      {
        "id": "linyi",
        "name": "Linyi",
        "chineseName": "临沂市"
      },
      {
        "id": "longkou",
        "name": "Longkou",
        "chineseName": "龙口市"
      },
      {
        "id": "penglai",
        "name": "Penglai",
        "chineseName": "蓬莱市"
      },
      {
        "id": "pingdu",
        "name": "Pingdu",
        "chineseName": "平度市"
      },
      {
        "id": "qingdao",
        "name": "Qingdao",
        "chineseName": "青岛市"
      },
      {
        "id": "qingzhou",
        "name": "Qingzhou",
        "chineseName": "青州市"
      },
      {
        "id": "qixia",
        "name": "Qixia",
        "chineseName": "栖霞市"
      },
      {
        "id": "qufu",
        "name": "Qufu",
        "chineseName": "曲阜市"
      },
      {
        "id": "rizhao",
        "name": "Rizhao",
        "chineseName": "日照市"
      },
      {
        "id": "rongcheng",
        "name": "Rongcheng",
        "chineseName": "荣成市"
      },
      {
        "id": "rushan",
        "name": "Rushan",
        "chineseName": "乳山市"
      },
      {
        "id": "shouguang",
        "name": "Shouguang",
        "chineseName": "寿光市"
      },
      {
        "id": "tai-an",
        "name": "Tai'an",
        "chineseName": "泰安市"
      },
      {
        "id": "tengzhou",
        "name": "Tengzhou",
        "chineseName": "滕州市"
      },
      {
        "id": "weifang",
        "name": "Weifang",
        "chineseName": "潍坊市"
      },
      {
        "id": "weihai",
        "name": "Weihai",
        "chineseName": "威海市"
      },
      {
        "id": "xintai",
        "name": "Xintai",
        "chineseName": "新泰市"
      },
      {
        "id": "yantai",
        "name": "Yantai",
        "chineseName": "烟台市"
      },
      {
        "id": "yucheng",
        "name": "Yucheng",
        "chineseName": "禹城市"
      },
      {
        "id": "zaozhuang",
        "name": "Zaozhuang",
        "chineseName": "枣庄市"
      },
      {
        "id": "zhaoyuan",
        "name": "Zhaoyuan",
        "chineseName": "招远市"
      },
      {
        "id": "zhucheng",
        "name": "Zhucheng",
        "chineseName": "诸城市"
      },
      {
        "id": "zibo",
        "name": "Zibo",
        "chineseName": "淄博市"
      },
      {
        "id": "zoucheng",
        "name": "Zoucheng",
        "chineseName": "邹城市"
      },
      {
        "id": "zouping",
        "name": "Zouping",
        "chineseName": "邹平市"
      },
      {
        "id": "changzhi",
        "name": "Changzhi",
        "chineseName": "长治市"
      },
      {
        "id": "datong",
        "name": "Datong",
        "chineseName": "大同市"
      },
      {
        "id": "fenyang",
        "name": "Fenyang",
        "chineseName": "汾阳市"
      },
      {
        "id": "gaoping",
        "name": "Gaoping",
        "chineseName": "高平市"
      },
      {
        "id": "gujiao",
        "name": "Gujiao",
        "chineseName": "古交市"
      },
      {
        "id": "hejin",
        "name": "Hejin",
        "chineseName": "河津市"
      },
      {
        "id": "houma",
        "name": "Houma",
        "chineseName": "侯马市"
      },
      {
        "id": "huairen",
        "name": "Huairen",
        "chineseName": "怀仁市"
      },
      {
        "id": "huozhou",
        "name": "Huozhou",
        "chineseName": "霍州市"
      },
      {
        "id": "jiexiu",
        "name": "Jiexiu",
        "chineseName": "介休市"
      },
      {
        "id": "jincheng",
        "name": "Jincheng",
        "chineseName": "晋城市"
      },
      {
        "id": "jinzhong",
        "name": "Jinzhong",
        "chineseName": "晋中市"
      },
      {
        "id": "linfen",
        "name": "Linfen",
        "chineseName": "临汾市"
      },
      {
        "id": "lüliang",
        "name": "Lüliang",
        "chineseName": "吕梁市"
      },
      {
        "id": "shuozhou",
        "name": "Shuozhou",
        "chineseName": "朔州市"
      },
      {
        "id": "taiyuan",
        "name": "Taiyuan",
        "chineseName": "太原市"
      },
      {
        "id": "xiaoyi",
        "name": "Xiaoyi",
        "chineseName": "孝义市"
      },
      {
        "id": "xinzhou",
        "name": "Xinzhou",
        "chineseName": "忻州市"
      },
      {
        "id": "yangquan",
        "name": "Yangquan",
        "chineseName": "阳泉市"
      },
      {
        "id": "yongji",
        "name": "Yongji",
        "chineseName": "永济市"
      },
      {
        "id": "yuncheng",
        "name": "Yuncheng",
        "chineseName": "运城市"
      },
      {
        "id": "yuanping",
        "name": "Yuanping",
        "chineseName": "原平市"
      },
      {
        "id": "barkam",
        "name": "Barkam",
        "chineseName": "马尔康市"
      },
      {
        "id": "bazhong",
        "name": "Bazhong",
        "chineseName": "巴中市"
      },
      {
        "id": "chengdu",
        "name": "Chengdu",
        "chineseName": "成都市"
      },
      {
        "id": "chongzhou",
        "name": "Chongzhou",
        "chineseName": "崇州市"
      },
      {
        "id": "dazhou",
        "name": "Dazhou",
        "chineseName": "达州市"
      },
      {
        "id": "deyang",
        "name": "Deyang",
        "chineseName": "德阳市"
      },
      {
        "id": "dujiangyan",
        "name": "Dujiangyan",
        "chineseName": "都江堰市"
      },
      {
        "id": "emeishan",
        "name": "Emeishan",
        "chineseName": "峨眉山市"
      },
      {
        "id": "guang-an",
        "name": "Guang'an",
        "chineseName": "广安市"
      },
      {
        "id": "guanghan",
        "name": "Guanghan",
        "chineseName": "广汉市"
      },
      {
        "id": "guangyuan",
        "name": "Guangyuan",
        "chineseName": "广元市"
      },
      {
        "id": "huaying",
        "name": "Huaying",
        "chineseName": "华蓥市"
      },
      {
        "id": "jiangyou",
        "name": "Jiangyou",
        "chineseName": "江油市"
      },
      {
        "id": "jianyang",
        "name": "Jianyang",
        "chineseName": "简阳市"
      },
      {
        "id": "kangding",
        "name": "Kangding",
        "chineseName": "康定市"
      },
      {
        "id": "langzhong",
        "name": "Langzhong",
        "chineseName": "阆中市"
      },
      {
        "id": "leshan",
        "name": "Leshan",
        "chineseName": "乐山市"
      },
      {
        "id": "longchang",
        "name": "Longchang",
        "chineseName": "隆昌市"
      },
      {
        "id": "luzhou",
        "name": "Luzhou",
        "chineseName": "泸州市"
      },
      {
        "id": "mianzhu",
        "name": "Mianzhu",
        "chineseName": "绵竹市"
      },
      {
        "id": "meishan",
        "name": "Meishan",
        "chineseName": "眉山市"
      },
      {
        "id": "mianyang",
        "name": "Mianyang",
        "chineseName": "绵阳市"
      },
      {
        "id": "nanchong",
        "name": "Nanchong",
        "chineseName": "南充市"
      },
      {
        "id": "neijiang",
        "name": "Neijiang",
        "chineseName": "内江市"
      },
      {
        "id": "panzhihua",
        "name": "Panzhihua",
        "chineseName": "攀枝花市"
      },
      {
        "id": "pengzhou",
        "name": "Pengzhou",
        "chineseName": "彭州市"
      },
      {
        "id": "qionglai",
        "name": "Qionglai",
        "chineseName": "邛崃市"
      },
      {
        "id": "shifang",
        "name": "Shifang",
        "chineseName": "什邡市"
      },
      {
        "id": "suining",
        "name": "Suining",
        "chineseName": "遂宁市"
      },
      {
        "id": "wanyuan",
        "name": "Wanyuan",
        "chineseName": "万源市"
      },
      {
        "id": "xichang",
        "name": "Xichang",
        "chineseName": "西昌市"
      },
      {
        "id": "ya-an",
        "name": "Ya'an",
        "chineseName": "雅安市"
      },
      {
        "id": "yibin",
        "name": "Yibin",
        "chineseName": "宜宾市"
      },
      {
        "id": "zigong",
        "name": "Zigong",
        "chineseName": "自贡市"
      },
      {
        "id": "ziyang",
        "name": "Ziyang",
        "chineseName": "资阳市"
      },
      {
        "id": "lhasa",
        "name": "Lhasa",
        "chineseName": "拉萨市"
      },
      {
        "id": "nagqu",
        "name": "Nagqu",
        "chineseName": "那曲市"
      },
      {
        "id": "nyingchi",
        "name": "Nyingchi",
        "chineseName": "林芝市"
      },
      {
        "id": "qamdo",
        "name": "Qamdo",
        "chineseName": "昌都市"
      },
      {
        "id": "shannan",
        "name": "Shannan",
        "chineseName": "山南市"
      },
      {
        "id": "xigazê",
        "name": "Xigazê",
        "chineseName": "日喀则市"
      },
      {
        "id": "aksu",
        "name": "Aksu",
        "chineseName": "阿克苏市"
      },
      {
        "id": "alashankou",
        "name": "Alashankou",
        "chineseName": "阿拉山口市"
      },
      {
        "id": "altay",
        "name": "Altay",
        "chineseName": "阿勒泰市"
      },
      {
        "id": "aral",
        "name": "Aral",
        "chineseName": "阿拉尔市"
      },
      {
        "id": "artux",
        "name": "Artux",
        "chineseName": "阿图什市"
      },
      {
        "id": "beitun",
        "name": "Beitun",
        "chineseName": "北屯市"
      },
      {
        "id": "bole",
        "name": "Bole",
        "chineseName": "博乐市"
      },
      {
        "id": "changji",
        "name": "Changji",
        "chineseName": "昌吉市"
      },
      {
        "id": "fukang",
        "name": "Fukang",
        "chineseName": "阜康市"
      },
      {
        "id": "hami",
        "name": "Hami",
        "chineseName": "哈密市"
      },
      {
        "id": "hotan",
        "name": "Hotan",
        "chineseName": "和田市"
      },
      {
        "id": "karamay",
        "name": "Karamay",
        "chineseName": "克拉玛依市"
      },
      {
        "id": "kashgar",
        "name": "Kashgar",
        "chineseName": "喀什市"
      },
      {
        "id": "khorgas",
        "name": "Khorgas",
        "chineseName": "霍尔果斯市"
      },
      {
        "id": "kokdala",
        "name": "Kokdala",
        "chineseName": "可克达拉市"
      },
      {
        "id": "korla",
        "name": "Korla",
        "chineseName": "库尔勒市"
      },
      {
        "id": "kuytun",
        "name": "Kuytun",
        "chineseName": "奎屯市"
      },
      {
        "id": "kunyu",
        "name": "Kunyu",
        "chineseName": "昆玉市"
      },
      {
        "id": "shihezi",
        "name": "Shihezi",
        "chineseName": "石河子市"
      },
      {
        "id": "shuanghe",
        "name": "Shuanghe",
        "chineseName": "双河市"
      },
      {
        "id": "tacheng",
        "name": "Tacheng",
        "chineseName": "塔城市"
      },
      {
        "id": "tiemenguan",
        "name": "Tiemenguan",
        "chineseName": "铁门关市"
      },
      {
        "id": "tumxuk",
        "name": "Tumxuk",
        "chineseName": "图木舒克市"
      },
      {
        "id": "turpan",
        "name": "Turpan",
        "chineseName": "吐鲁番市"
      },
      {
        "id": "ürümqi",
        "name": "Ürümqi",
        "chineseName": "乌鲁木齐市"
      },
      {
        "id": "wujiaqu",
        "name": "Wujiaqu",
        "chineseName": "五家渠市"
      },
      {
        "id": "wusu",
        "name": "Wusu",
        "chineseName": "乌苏市"
      },
      {
        "id": "yining",
        "name": "Yining",
        "chineseName": "伊宁市"
      },
      {
        "id": "anning",
        "name": "Anning",
        "chineseName": "安宁市"
      },
      {
        "id": "baoshan",
        "name": "Baoshan",
        "chineseName": "保山市"
      },
      {
        "id": "chuxiong",
        "name": "Chuxiong",
        "chineseName": "楚雄市"
      },
      {
        "id": "dali",
        "name": "Dali",
        "chineseName": "大理市"
      },
      {
        "id": "gejiu",
        "name": "Gejiu",
        "chineseName": "个旧市"
      },
      {
        "id": "jinghong",
        "name": "Jinghong",
        "chineseName": "景洪市"
      },
      {
        "id": "kunming",
        "name": "Kunming",
        "chineseName": "昆明市"
      },
      {
        "id": "lincang",
        "name": "Lincang",
        "chineseName": "临沧市"
      },
      {
        "id": "lijiang",
        "name": "Lijiang",
        "chineseName": "丽江市"
      },
      {
        "id": "lushui",
        "name": "Lushui",
        "chineseName": "泸水市"
      },
      {
        "id": "mangshi",
        "name": "Mangshi",
        "chineseName": "芒市"
      },
      {
        "id": "mengzi",
        "name": "Mengzi",
        "chineseName": "蒙自市"
      },
      {
        "id": "mile",
        "name": "Mile",
        "chineseName": "弥勒市"
      },
      {
        "id": "pu-er",
        "name": "Pu'er",
        "chineseName": "普洱市"
      },
      {
        "id": "qujing",
        "name": "Qujing",
        "chineseName": "曲靖市"
      },
      {
        "id": "ruili",
        "name": "Ruili",
        "chineseName": "瑞丽市"
      },
      {
        "id": "shangri-la",
        "name": "Shangri-La",
        "chineseName": "香格里拉市"
      },
      {
        "id": "shuifu",
        "name": "Shuifu",
        "chineseName": "水富市"
      },
      {
        "id": "tengchong",
        "name": "Tengchong",
        "chineseName": "腾冲市"
      },
      {
        "id": "wenshan",
        "name": "Wenshan",
        "chineseName": "文山市"
      },
      {
        "id": "xuanwei",
        "name": "Xuanwei",
        "chineseName": "宣威市"
      },
      {
        "id": "yuxi",
        "name": "Yuxi",
        "chineseName": "玉溪市"
      },
      {
        "id": "zhaotong",
        "name": "Zhaotong",
        "chineseName": "昭通市"
      },
      {
        "id": "cixi",
        "name": "Cixi",
        "chineseName": "慈溪市"
      },
      {
        "id": "dongyang",
        "name": "Dongyang",
        "chineseName": "东阳市"
      },
      {
        "id": "haining",
        "name": "Haining",
        "chineseName": "海宁市"
      },
      {
        "id": "hangzhou",
        "name": "Hangzhou",
        "chineseName": "杭州市"
      },
      {
        "id": "huzhou",
        "name": "Huzhou",
        "chineseName": "湖州市"
      },
      {
        "id": "jiande",
        "name": "Jiande",
        "chineseName": "建德市"
      },
      {
        "id": "jiangshan",
        "name": "Jiangshan",
        "chineseName": "江山市"
      },
      {
        "id": "jiaxing",
        "name": "Jiaxing",
        "chineseName": "嘉兴市"
      },
      {
        "id": "jinhua",
        "name": "Jinhua",
        "chineseName": "金华市"
      },
      {
        "id": "lanxi",
        "name": "Lanxi",
        "chineseName": "兰溪市"
      },
      {
        "id": "linhai",
        "name": "Linhai",
        "chineseName": "临海市"
      },
      {
        "id": "lishui",
        "name": "Lishui",
        "chineseName": "丽水市"
      },
      {
        "id": "longquan",
        "name": "Longquan",
        "chineseName": "龙泉市"
      },
      {
        "id": "ningbo",
        "name": "Ningbo",
        "chineseName": "宁波市"
      },
      {
        "id": "pinghu",
        "name": "Pinghu",
        "chineseName": "平湖市"
      },
      {
        "id": "quzhou",
        "name": "Quzhou",
        "chineseName": "衢州市"
      },
      {
        "id": "ruian",
        "name": "Ruian",
        "chineseName": "瑞安市"
      },
      {
        "id": "shaoxing",
        "name": "Shaoxing",
        "chineseName": "绍兴市"
      },
      {
        "id": "shengzhou",
        "name": "Shengzhou",
        "chineseName": "嵊州市"
      },
      {
        "id": "tongxiang",
        "name": "Tongxiang",
        "chineseName": "桐乡市"
      },
      {
        "id": "wenling",
        "name": "Wenling",
        "chineseName": "温岭市"
      },
      {
        "id": "wenzhou",
        "name": "Wenzhou",
        "chineseName": "温州市"
      },
      {
        "id": "yiwu",
        "name": "Yiwu",
        "chineseName": "义乌市"
      },
      {
        "id": "yongkang",
        "name": "Yongkang",
        "chineseName": "永康市"
      },
      {
        "id": "yueqing",
        "name": "Yueqing",
        "chineseName": "乐清市"
      },
      {
        "id": "yuhuan",
        "name": "Yuhuan",
        "chineseName": "玉环市"
      },
      {
        "id": "yuyao",
        "name": "Yuyao",
        "chineseName": "余姚市"
      },
      {
        "id": "zhoushan",
        "name": "Zhoushan",
        "chineseName": "舟山市"
      },
      {
        "id": "zhuji",
        "name": "Zhuji",
        "chineseName": "诸暨市"
      }
      ],
      userInput: '',
      selected: []
    }

    this.getUserInput = this.getUserInput.bind(this);
    this.getSelected = this.getSelected.bind(this);
    this.closeSelected = this.closeSelected.bind(this);
    this.clearAllSelected = this.clearAllSelected.bind(this);
  }

  getUserInput(event) {
    const value = event.currentTarget.value;
    this.setState({
      userInput: value
    })
  }

  getSelected(event) {
    const selectedValue = event.currentTarget.value;
    const futureSelected = this.state.cities.find(item => item.id === selectedValue);

    this.setState(prevState => {
      const newSelected = [...prevState.selected];
      const result = newSelected.findIndex(item => item.id === selectedValue);

      if (result < 0) {
        newSelected.push(futureSelected);
      } else {
        newSelected.splice(result, 1);
      }

      return {
        selected: newSelected
      }
    });
  }

  closeSelected(event) {
    const selectedID = event.currentTarget.getAttribute('data-id');

    this.setState(prevState => {
      const newSelected = [...prevState.selected];
      const result = newSelected.includes(selectedID);

      newSelected.splice(result, 1);

      return {
        selected: newSelected
      }

    });
  }

  clearAllSelected() {
    this.setState({
      selected: []
    });
  }

  render() {
    return (
      <div className="app">
        <p className="app__title">Cities of China</p>

        <div className="app__container">
          <div className="container__list">
            <Filters
              placeholderText={placeholderText}
              getUserInput={this.getUserInput}
            />
            <CitiesList
              cities={this.state.cities}
              userInput={this.state.userInput}
              getSelected={this.getSelected}
            />

          </div>
          <div className="container__selected">
            <SelItems 
              selected={this.state.selected}
              clearAllSelected={this.clearAllSelected}
            />
            <SelList
              selected={this.state.selected}
              closeSelected={this.closeSelected}
            />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
