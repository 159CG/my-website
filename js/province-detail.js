// 中国34个省级行政区民族数据（完整版）
// 所有图片文件名已转换为拼音，去掉连接符，直接连写
const provinceEthnicData = {
	'北京市': {
		region: '华北',
		ethnicGroups: [{
				name: '汉族',
				population: '约2100万',
				img: 'img/hanzu.png',
				desc: '主体民族，多元文化融合'
			},
			{
				name: '满族',
				population: '约33万',
				img: 'img/manzu.jfif',
				desc: '清代文化遗存'
			},
			{
				name: '回族',
				population: '约25万',
				img: 'img/huizu.jpg',
				desc: '牛街清真文化'
			},
			{
				name: '蒙古族',
				population: '约8万',
				img: 'img/mengguzu.jpg',
				desc: '草原文化传承'
			}
		],
		minorityPopulation: '约80万',
		ethnicCount: 56,
		carouselImages: [{
				url: 'img/Beijing/gugong.jpg',
				caption: '北京故宫 - 中华文化瑰宝'
			},
			{
				url: 'img/Beijing/niujie.jpg',
				caption: '牛街清真寺 - 伊斯兰文化'
			},
			{
				url: 'img/Beijing/yiheyuanerhao.jpg',
				caption: '颐和园 - 皇家园林艺术'
			}
		],
		festivals: [{
				name: '春节庙会',
				date: '农历正月初一至十五',
				desc: '北京传统庙会，民俗活动',
				img: 'img/Beijing/beijingmiaohui.jpg'
			},
			{
				name: '中秋赏月',
				date: '农历八月十五',
				desc: '中秋传统文化活动',
				img: 'img/Beijing/zhongqiu.jpg'
			}
		],
		heritage: [{
				name: '京剧',
				level: '人类非遗',
				year: '2010',
				img: 'img/Beijing/jingju.jpg'
			},
			{
				name: '北京皮影戏',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Beijing/piyingxi.jpg'
			}
		],
		foods: [{
				name: '北京烤鸭',
				desc: '中华名菜，外酥里嫩',
				img: 'img/Beijing/beijingkaoya.jpg'
			},
			{
				name: '涮羊肉',
				desc: '老北京火锅，鲜美滋补',
				img: 'img/Beijing/laobeijingshuanyangrou.jpg'
			},
			{
				name: '豆汁焦圈',
				desc: '北京传统小吃',
				img: 'img/Beijing/douzhi.jpg'
			}
		],
		architecture: [{
				name: '故宫',
				desc: '世界文化遗产，明清皇家宫殿',
				img: 'img/Beijing/gugongerhao.jpg'
			},
			{
				name: '四合院',
				desc: '北京传统民居建筑',
				img: 'img/Beijing/siheyuan.jpg'
			}
		],
		crafts: [{
				name: '景泰蓝',
				desc: '北京传统工艺品，铜胎掐丝珐琅',
				img: 'img/Beijing/jingtailan.jpg'
			},
			{
				name: '玉雕',
				desc: '北京玉雕技艺精湛',
				img: 'img/Beijing/yudiao.jpg'
			}
		],
		music: [{
				name: '京剧',
				desc: '国粹艺术，唱念做打',
				img: 'img/Beijing/jingjuerhao.jpg'
			},
			{
				name: '相声',
				desc: '传统曲艺，幽默风趣',
				img: 'img/Beijing/xiangsheng.jpg'
			}
		],
		distribution: '全市分布，牛街、海淀、朝阳等区少数民族聚居',
		costume: ['满族服饰', '回族服饰', '蒙古族服饰'],
		unityMessage: '首都北京，56个民族共同的家园，各民族文化交流交融，共筑中华民族共有精神家园。'
	},
	'天津市': {
		region: '华北',
		ethnicGroups: [{
				name: '汉族',
				population: '约1500万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '回族',
				population: '约17万',
				img: 'img/huizu.jpg',
				desc: '西北角回族聚居区'
			},
			{
				name: '满族',
				population: '约8万',
				img: 'img/manzu.jfif',
				desc: '满族文化传承'
			}
		],
		minorityPopulation: '约30万',
		ethnicCount: 48,
		carouselImages: [{
				url: 'img/Tianjin/banhua.jpg',
				caption: '天津杨柳青年画'
			},
			{
				url: 'img/Tianjin/tianjinxiangsheng.jpg',
				caption: '天津相声文化'
			}
		],
		festivals: [{
			name: '杨柳青庙会',
			date: '农历正月',
			desc: '传统民俗活动',
			img: 'img/Tianjin/yangliuqingmiaohui.jpg'
		}],
		heritage: [{
				name: '杨柳青木版年画',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Tianjin/banhua.jpg'
			},
			{
				name: '泥人张彩塑',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Tianjin/nisu.jpg'
			}
		],
		foods: [{
				name: '狗不理包子',
				desc: '天津三绝之一',
				img: 'img/Tianjin/goubulibaozi.jpg'
			},
			{
				name: '十八街麻花',
				desc: '酥脆香甜',
				img: 'img/Tianjin/mahua.jpg'
			}
		],
		architecture: [{
			name: '五大道洋楼',
			desc: '万国建筑博览',
			img: 'img/Tianjin/wudadaoyanglou.jpg'
		}],
		crafts: [{
			name: '泥人张',
			desc: '泥塑艺术，栩栩如生',
			img: 'img/Tianjin/nirenzhang.jpg'
		}],
		music: [{
			name: '天津时调',
			desc: '天津地方曲艺',
			img: 'img/Tianjin/tianjinshidiao.jpg'
		}],
		distribution: '全市分布，红桥区西北角回族聚居',
		costume: ['回族服饰', '满族服饰'],
		unityMessage: '九河下梢天津卫，多元文化交融，各民族和睦共处。'
	},
	'河北省': {
		region: '华北',
		ethnicGroups: [{
				name: '汉族',
				population: '约7000万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '满族',
				population: '约210万',
				img: 'img/manzu.jfif',
				desc: '承德、秦皇岛聚居'
			},
			{
				name: '回族',
				population: '约55万',
				img: 'img/huizu.jpg',
				desc: '沧州、保定散居'
			},
			{
				name: '蒙古族',
				population: '约18万',
				img: 'img/mengguzu.jpg',
				desc: '围场满蒙自治县'
			}
		],
		minorityPopulation: '约300万',
		ethnicCount: 55,
		carouselImages: [{
				url: 'img/Hebei/bishushanzhuang.jpg',
				caption: '承德避暑山庄'
			},
			{
				url: 'img/Hebei/shanhaiguan.jpg',
				caption: '山海关长城'
			}
		],
		festivals: [{
			name: '满族颁金节',
			date: '农历十月十三',
			desc: '满族命名日庆典',
			img: 'img/Hebei/manzubanjinjie.jpg'
		}],
		heritage: [{
				name: '河北梆子',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Hebei/hebeibangzi.jpg'
			},
			{
				name: '吴桥杂技',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Hebei/wuqiaozaji.jpg'
			}
		],
		foods: [{
				name: '驴肉火烧',
				desc: '保定特色小吃',
				img: 'img/Hebei/lvrouhuoshao.jpg'
			},
			{
				name: '承德满族八大碗',
				desc: '满族传统宴席',
				img: 'img/Hebei/badajian.jpg'
			}
		],
		architecture: [{
				name: '承德避暑山庄',
				desc: '世界文化遗产，清代皇家园林',
				img: 'img/Hebei/bishushanzhuang.jpg'
			},
			{
				name: '山海关',
				desc: '天下第一关',
				img: 'img/Hebei/shanhaiguan.jpg'
			}
		],
		crafts: [{
			name: '蔚县剪纸',
			desc: '窗花艺术，刀工细腻',
			img: 'img/Hebei/jianzhi.jpg'
		}],
		music: [{
			name: '河北梆子',
			desc: '慷慨激越，燕赵之声',
			img: 'img/Hebei/hebeibangzi.jpg'
		}],
		distribution: '承德、秦皇岛满族聚居，沧州、保定回族散居',
		costume: ['满族服饰', '回族服饰'],
		unityMessage: '燕赵大地，畿辅重地，各民族共同书写历史华章。'
	},
	'山西省': {
		region: '华北',
		ethnicGroups: [{
				name: '汉族',
				population: '约3500万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '回族',
				population: '约6万',
				img: 'img/huizu.jpg',
				desc: '太原、大同散居'
			}
		],
		minorityPopulation: '约7万',
		ethnicCount: 53,
		carouselImages: [{
				url: 'img/Shanxi/pingyaogucheng erhao.jpg',
				caption: '平遥古城'
			},
			{
				url: 'img/Shanxi/yungangshiku.jpg',
				caption: '云冈石窟'
			}
		],
		festivals: [{
			name: '平遥中国年',
			date: '春节期间',
			desc: '古城民俗活动',
			img: 'img/Shanxi/zhongguonian.jpg'
		}],
		heritage: [{
				name: '晋剧',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Shanxi/jinju.jpg'
			},
			{
				name: '平遥推光漆器',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Shanxi/qiqi.jpg'
			}
		],
		foods: [{
				name: '刀削面',
				desc: '山西面食代表',
				img: 'img/Shanxi/daoxiaomian.jpg'
			},
			{
				name: '过油肉',
				desc: '传统晋菜',
				img: 'img/Shanxi/guoyourou.jpg'
			}
		],
		architecture: [{
				name: '平遥古城',
				desc: '世界文化遗产，保存最完整的古城',
				img: 'img/Shanxi/pingyaogucheng.jpg'
			},
			{
				name: '乔家大院',
				desc: '晋商文化代表',
				img: 'img/Shanxi/qiaojiadayuan.jpg'
			}
		],
		crafts: [{
			name: '平遥推光漆器',
			desc: '漆艺瑰宝，光泽照人',
			img: 'img/Shanxi/qiqierhao.jpg'
		}],
		music: [{
			name: '晋剧',
			desc: '山西地方戏曲',
			img: 'img/Shanxi/jinjuerhao.jfif'
		}],
		distribution: '太原、大同、长治等地散居',
		costume: ['汉族传统服饰'],
		unityMessage: '三晋大地，华夏文明摇篮，各民族共同守护文化遗产。'
	},
	'内蒙古自治区': {
		region: '华北',
		ethnicGroups: [{
				name: '蒙古族',
				population: '约420万',
				img: 'img/mengguzu.jpg',
				desc: '那达慕、马头琴、长调'
			},
			{
				name: '汉族',
				population: '约2000万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '满族',
				population: '约45万',
				img: 'img/manzu.jfif',
				desc: '满族剪纸'
			},
			{
				name: '回族',
				population: '约21万',
				img: 'img/huizu.jpg',
				desc: '清真饮食'
			}
		],
		minorityPopulation: '约500万',
		ethnicCount: 49,
		carouselImages: [{
				url: 'img/InnerMongolia/nadamudahui.jpg',
				caption: '那达慕大会 - 草原盛会'
			},
			{
				url: 'img/InnerMongolia/matouqin.jpg',
				caption: '马头琴 - 草原之音'
			},
			{
				url: 'img/InnerMongolia/caoyuan.jpg',
				caption: '呼伦贝尔草原'
			}
		],
		festivals: [{
				name: '那达慕大会',
				date: '七八月',
				desc: '赛马、摔跤、射箭',
				img: 'img/InnerMongolia/nadamuerhao.jpg'
			},
			{
				name: '祭敖包',
				date: '农历五月',
				desc: '蒙古族传统祭祀',
				img: 'img/InnerMongolia/aobao.webp'
			}
		],
		heritage: [{
				name: '蒙古族长调民歌',
				level: '人类非遗',
				year: '2005',
				img: 'img/InnerMongolia/changdiaominge.jfif'
			},
			{
				name: '蒙古族呼麦',
				level: '人类非遗',
				year: '2009',
				img: 'img/InnerMongolia/humai.jpg'
			},
			{
				name: '马头琴音乐',
				level: '国家级非遗',
				year: '2006',
				img: 'img/InnerMongolia/matouqinerhao.jpg'
			}
		],
		foods: [{
				name: '手把肉',
				desc: '蒙古族传统美食',
				img: 'img/InnerMongolia/shoubarou.jfif'
			},
			{
				name: '奶茶',
				desc: '咸奶茶，待客佳品',
				img: 'img/InnerMongolia/naicha.jfif'
			},
			{
				name: '烤全羊',
				desc: '盛大宴席主菜',
				img: 'img/InnerMongolia/kaoquanyang.jpg'
			}
		],
		architecture: [{
				name: '蒙古包',
				desc: '传统毡房，便于迁徙',
				img: 'img/InnerMongolia/menggubao.jfif'
			},
			{
				name: '藏传佛教寺庙',
				desc: '蒙藏建筑风格融合',
				img: 'img/InnerMongolia/simiao.png'
			}
		],
		crafts: [{
				name: '蒙古族刺绣',
				desc: '精美图案，民族特色',
				img: 'img/InnerMongolia/cixiu.jpg'
			},
			{
				name: '银器制作',
				desc: '蒙古族传统工艺',
				img: 'img/InnerMongolia/yinqi.webp'
			}
		],
		music: [{
				name: '马头琴',
				desc: '蒙古族传统乐器',
				img: 'img/InnerMongolia/matouqin.jpg'
			},
			{
				name: '呼麦',
				desc: '喉音艺术，天籁之声',
				img: 'img/InnerMongolia/humai.jpg'
			},
			{
				name: '长调民歌',
				desc: '悠扬高亢，草原之魂',
				img: 'img/InnerMongolia/changdiaominge.jfif'
			}
		],
		distribution: '主要分布于锡林郭勒、呼伦贝尔、鄂尔多斯草原',
		costume: ['蒙古族服饰', '鄂伦春族服饰', '达斡尔族服饰'],
		unityMessage: '辽阔草原，骏马之乡。各族儿女像石榴籽一样紧紧抱在一起，共建北疆亮丽风景线。'
	},
	'辽宁省': {
		region: '东北',
		ethnicGroups: [{
				name: '满族',
				population: '约530万',
				img: 'img/manzu.jfif',
				desc: '旗袍发源地，满族文化'
			},
			{
				name: '汉族',
				population: '约3500万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '蒙古族',
				population: '约70万',
				img: 'img/mengguzu.jpg',
				desc: '阜新蒙古族自治县'
			},
			{
				name: '回族',
				population: '约25万',
				img: 'img/huizu.jpg',
				desc: '沈阳、大连散居'
			},
			{
				name: '朝鲜族',
				population: '约24万',
				img: 'img/chaoxianzu.jfif',
				desc: '沈阳、丹东聚居'
			},
			{
				name: '锡伯族',
				population: '约13万',
				img: 'img/xibozu.webp',
				desc: '沈北新区锡伯族聚居'
			}
		],
		minorityPopulation: '约670万',
		ethnicCount: 51,
		carouselImages: [{
				url: 'img/Liaoning/shenyanggugong.jfif',
				caption: '沈阳故宫 - 满清文化'
			},
			{
				url: 'img/Liaoning/xiqianjie.jpg',
				caption: '锡伯族西迁节'
			}
		],
		festivals: [{
				name: '满族颁金节',
				date: '农历十月十三',
				desc: '满族命名日',
				img: 'img/Liaoning/manzubanjinjie.jpg'
			},
			{
				name: '锡伯族西迁节',
				date: '农历四月十八',
				desc: '纪念西迁戍边',
				img: 'img/Liaoning/xiqianjieerhao.webp'
			}
		],
		heritage: [{
				name: '满族剪纸',
				level: '国家级非遗',
				year: '2008',
				img: 'img/Liaoning/manzujianzhi.jpg'
			},
			{
				name: '朝鲜族农乐舞',
				level: '国家级非遗',
				year: '2008',
				img: 'img/Liaoning/nongyuewu.webp'
			}
		],
		foods: [{
				name: '满族八大碗',
				desc: '满族传统宴席',
				img: 'img/Liaoning/badajian.jpg'
			},
			{
				name: '朝鲜族冷面',
				desc: '酸辣爽口',
				img: 'img/Liaoning/lengmian.webp'
			}
		],
		architecture: [{
				name: '沈阳故宫',
				desc: '清朝入关前皇宫',
				img: 'img/Liaoning/shenyanggugongerhao.jpg'
			},
			{
				name: '满族民居',
				desc: '口袋房，万字炕',
				img: 'img/Liaoning/manzuminjv.jpg'
			}
		],
		crafts: [{
				name: '满族刺绣',
				desc: '精美绣品，民族特色',
				img: 'img/Liaoning/manzucixiu.jpg'
			},
			{
				name: '锡伯族刺绣',
				desc: '独特纹样',
				img: 'img/Liaoning/xibozucixiu.jpg'
			}
		],
		music: [{
			name: '满族萨满音乐',
			desc: '原始宗教音乐',
			img: 'img/Liaoning/saman.webp'
		}],
		distribution: '主要分布于沈阳、抚顺、本溪、丹东、锦州等地',
		costume: ['满族服饰', '朝鲜族服饰', '锡伯族服饰'],
		unityMessage: '辽沈大地，满韵清风，各民族共同繁荣发展。'
	},
	'吉林省': {
		region: '东北',
		ethnicGroups: [{
				name: '汉族',
				population: '约2200万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '朝鲜族',
				population: '约115万',
				img: 'img/chaoxianzu.jfif',
				desc: '延边朝鲜族自治州'
			},
			{
				name: '满族',
				population: '约87万',
				img: 'img/manzu.jpg',
				desc: '吉林市、四平'
			},
			{
				name: '蒙古族',
				population: '约15万',
				img: 'img/mengguzu.jpg',
				desc: '前郭尔罗斯蒙古族自治县'
			}
		],
		minorityPopulation: '约220万',
		ethnicCount: 48,
		carouselImages: [{
				url: 'img/Jilin/tianchi.jpg',
				caption: '长白山天池'
			},
			{
				url: 'img/Jilin/nongyuewu.jpg',
				caption: '朝鲜族农乐舞'
			}
		],
		festivals: [{
				name: '朝鲜族农乐舞节',
				date: '农历七月十五',
				desc: '丰收庆典',
				img: 'img/Jilin/nongyuewu.webp'
			},
			{
				name: '满族颁金节',
				date: '农历十月十三',
				desc: '满族命名日',
				img: 'img/Jilin/manzubanjinjie.jpg'
			}
		],
		heritage: [{
				name: '朝鲜族农乐舞',
				level: '人类非遗',
				year: '2009',
				img: 'img/Jilin/nongyuewu.webp'
			},
			{
				name: '朝鲜族泡菜制作',
				level: '国家级非遗',
				year: '2008',
				img: 'img/Jilin/paocai.jpg'
			}
		],
		foods: [{
				name: '朝鲜族泡菜',
				desc: '韩国泡菜发源地',
				img: 'img/Jilin/paocaierhao.webp'
			},
			{
				name: '打糕',
				desc: '朝鲜族传统食品',
				img: 'img/Jilin/dagao.webp'
			}
		],
		architecture: [{
			name: '朝鲜族民居',
			desc: '火炕文化，温突',
			img: 'img/Jilin/chaoxianzuminju.jpg'
		}],
		crafts: [{
			name: '朝鲜族服饰',
			desc: '白色象征纯洁',
			img: 'img/Jilin/chaoxianzufushi.webp'
		}],
		music: [{
			name: '朝鲜族农乐舞',
			desc: '丰收舞蹈，欢快热烈',
			img: 'img/Jilin/nongyuewuerhao.webp'
		}],
		distribution: '延边朝鲜族自治州、前郭尔罗斯蒙古族自治县',
		costume: ['朝鲜族服饰', '满族服饰', '蒙古族服饰'],
		unityMessage: '白山松水，民族之乡，朝鲜族文化与满蒙文化交相辉映。'
	},
	'黑龙江省': {
		region: '东北',
		ethnicGroups: [{
				name: '汉族',
				population: '约3000万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '满族',
				population: '约80万',
				img: 'img/manzu.jfif',
				desc: '哈尔滨、齐齐哈尔'
			},
			{
				name: '朝鲜族',
				population: '约45万',
				img: 'img/chaoxianzu.jfif',
				desc: '牡丹江、鸡西'
			},
			{
				name: '蒙古族',
				population: '约15万',
				img: 'img/mengguzu.jpg',
				desc: '杜尔伯特蒙古族自治县'
			},
			{
				name: '鄂伦春族',
				population: '约0.4万',
				img: 'img/elunchunzu.jpeg',
				desc: '狩猎文化，桦皮工艺'
			},
			{
				name: '赫哲族',
				population: '约0.5万',
				img: 'img/hezhezu.png',
				desc: '鱼皮衣，渔猎文化'
			},
			{
				name: '达斡尔族',
				population: '约4万',
				img: 'img/dawoerzu.jpg',
				desc: '曲棍球之乡'
			}
		],
		minorityPopulation: '约150万',
		ethnicCount: 53,
		carouselImages: [{
				url: 'img/Heilongjiang/bingxuedashijie.jfif',
				caption: '冰雪大世界'
			},
			{
				url: 'img/Heilongjiang/yupiyi.jpg',
				caption: '赫哲族鱼皮衣'
			}
		],
		festivals: [{
				name: '鄂伦春族篝火节',
				date: '农历六月',
				desc: '篝火晚会，歌舞表演',
				img: 'img/Heilongjiang/gouhuojie.webp'
			},
			{
				name: '赫哲族乌日贡节',
				date: '农历五月',
				desc: '渔猎文化节庆',
				img: 'img/Heilongjiang/wurigongjie.webp'
			}
		],
		heritage: [{
				name: '赫哲族鱼皮制作技艺',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Heilongjiang/yupijiyi.webp'
			},
			{
				name: '鄂伦春族桦皮制作',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Heilongjiang/huapi.jfif'
			}
		],
		foods: [{
				name: '赫哲族刹生鱼',
				desc: '生鱼片美食',
				img: 'img/Heilongjiang/shashengyu.webp'
			},
			{
				name: '小鸡炖蘑菇',
				desc: '东北名菜',
				img: 'img/Heilongjiang/xiaojidunmogua.jpg'
			}
		],
		architecture: [{
			name: '鄂伦春族撮罗子',
			desc: '桦树皮帐篷',
			img: 'img/Heilongjiang/cuoluozi.jpg'
		}],
		crafts: [{
				name: '赫哲族鱼皮衣',
				desc: '世界唯一鱼皮服饰',
				img: 'img/Heilongjiang/yupiyi.jpg'
			},
			{
				name: '鄂伦春族桦皮盒',
				desc: '桦树皮工艺',
				img: 'img/Heilongjiang/huapihe.webp'
			}
		],
		music: [{
			name: '赫哲族伊玛堪',
			desc: '说唱史诗',
			img: 'img/Heilongjiang/yimakan.jpg'
		}],
		distribution: '主要分布于大兴安岭、黑河、牡丹江、齐齐哈尔等地',
		costume: ['赫哲族鱼皮衣', '鄂伦春族狍皮服', '满族服饰'],
		unityMessage: '黑土龙江，林海雪原，各民族共同守护祖国北疆。'
	},
	'上海市': {
		region: '华东',
		ethnicGroups: [{
				name: '汉族',
				population: '约2400万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '回族',
				population: '约7万',
				img: 'img/huizu.jpg',
				desc: '沪西清真寺'
			},
			{
				name: '满族',
				population: '约2万',
				img: 'img/manzu.jfif',
				desc: '散居'
			}
		],
		minorityPopulation: '约10万',
		ethnicCount: 55,
		carouselImages: [{
				url: 'img/Shanghai/waitan.jfif',
				caption: '上海外滩'
			},
			{
				url: 'img/Shanghai/yuyuandengghui.jpg',
				caption: '豫园灯会'
			}
		],
		festivals: [{
			name: '豫园元宵灯会',
			date: '正月十五',
			desc: '传统民俗灯会',
			img: 'img/Shanghai/yuyuanyuanxiaodengghui.jfif'
		}],
		heritage: [{
				name: '沪剧',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Shanghai/huju.webp'
			},
			{
				name: '江南丝竹',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Shanghai/jiangnansizu.jfif'
			}
		],
		foods: [{
				name: '小笼包',
				desc: '南翔小笼，汤汁鲜美',
				img: 'img/Shanghai/xiaolongbao.jpg'
			},
			{
				name: '生煎馒头',
				desc: '上海特色小吃',
				img: 'img/Shanghai/shengjianmantou.webp'
			}
		],
		architecture: [{
			name: '石库门',
			desc: '上海特色民居',
			img: 'img/Shanghai/shikumen.webp'
		}],
		crafts: [{
			name: '嘉定竹刻',
			desc: '竹刻艺术',
			img: 'img/Shanghai/jiadingzhuke.webp'
		}],
		music: [{
			name: '沪剧',
			desc: '上海地方戏曲',
			img: 'img/Shanghai/hujuerhao.webp'
		}],
		distribution: '全市散居，沪西清真寺周边回族聚居',
		costume: ['回族服饰'],
		unityMessage: '海纳百川，追求卓越，各民族在上海这座国际化大都市共同发展。'
	},
	'江苏省': {
		region: '华东',
		ethnicGroups: [{
				name: '汉族',
				population: '约8300万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '回族',
				population: '约25万',
				img: 'img/huizu.jpg',
				desc: '南京、扬州散居'
			},
			{
				name: '满族',
				population: '约2万',
				img: 'img/manzu.jfif',
				desc: '散居'
			}
		],
		minorityPopulation: '约30万',
		ethnicCount: 55,
		carouselImages: [{
				url: 'img/Jiangsu/suzhouyuanlin.jpeg',
				caption: '苏州园林'
			},
			{
				url: 'img/Jiangsu/fuzimiao.jfif',
				caption: '南京夫子庙'
			}
		],
		festivals: [{
			name: '秦淮灯会',
			date: '春节至元宵',
			desc: '南京传统灯会',
			img: 'img/Jiangsu/qinhuaidenghui.jpg'
		}],
		heritage: [{
				name: '昆曲',
				level: '人类非遗',
				year: '2001',
				img: 'img/Jiangsu/kunqu.jpg'
			},
			{
				name: '苏绣',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Jiangsu/suxiu.jfif'
			},
			{
				name: '南京云锦',
				level: '人类非遗',
				year: '2009',
				img: 'img/Jiangsu/nanjingyunjin.jfif'
			}
		],
		foods: [{
				name: '盐水鸭',
				desc: '南京特产',
				img: 'img/Jiangsu/yanshuiya.webp'
			},
			{
				name: '扬州炒饭',
				desc: '扬州美食代表',
				img: 'img/Jiangsu/yangzhouchaoifan.webp'
			},
			{
				name: '阳澄湖大闸蟹',
				desc: '蟹中极品',
				img: 'img/Jiangsu/dazhaxie.webp'
			}
		],
		architecture: [{
			name: '苏州园林',
			desc: '世界文化遗产，江南园林典范',
			img: 'img/Jiangsu/suzhouyuanlinerhao.jfif'
		}],
		crafts: [{
				name: '苏绣',
				desc: '中国四大名绣之一',
				img: 'img/Jiangsu/suxiu.jfif'
			},
			{
				name: '南京云锦',
				desc: '寸锦寸金',
				img: 'img/Jiangsu/nanjingyunjin.jfif'
			},
			{
				name: '宜兴紫砂',
				desc: '陶艺瑰宝',
				img: 'img/Jiangsu/zisha.webp',
			}
		],
		music: [{
				name: '昆曲',
				desc: '百戏之祖',
				img: 'img/Jiangsu/kunquerhao.webp'
			},
			{
				name: '苏州评弹',
				desc: '吴侬软语',
				img: 'img/Jiangsu/suzhoupingtan.jpg'
			}
		],
		distribution: '南京、扬州、苏州等地散居',
		costume: ['回族服饰', '汉族传统服饰'],
		unityMessage: '吴韵汉风，水韵江苏，各民族共同创造灿烂的江南文化。'
	},
	'浙江省': {
		region: '华东',
		ethnicGroups: [{
				name: '汉族',
				population: '约5700万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '畲族',
				population: '约17万',
				img: 'img/shezu.webp',
				desc: '景宁畲族自治县'
			},
			{
				name: '回族',
				population: '约4万',
				img: 'img/huizu.jpg',
				desc: '杭州、宁波散居'
			},
			{
				name: '满族',
				population: '约2万',
				img: 'img/manzu.jfif',
				desc: '散居'
			}
		],
		minorityPopulation: '约25万',
		ethnicCount: 54,
		carouselImages: [{
				url: 'img/Zhejiang/xihu.jpg',
				caption: '杭州西湖'
			},
			{
				url: 'img/Zhejiang/sanyuesan.jif',
				caption: '畲族三月三'
			}
		],
		festivals: [{
			name: '畲族三月三',
			date: '农历三月初三',
			desc: '畲族传统节日，乌饭节',
			img: 'img/Zhejiang/sanyuesan.jfif'
		}],
		heritage: [{
				name: '畲族民歌',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Zhejiang/minge.jfif'
			},
			{
				name: '越剧',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Zhejiang/yueju.jpeg'
			}
		],
		foods: [{
				name: '西湖醋鱼',
				desc: '杭州名菜',
				img: 'img/Zhejiang/xihucuyu.webp'
			},
			{
				name: '宁波汤圆',
				desc: '传统小吃',
				img: 'img/Zhejiang/tangyuan.webp'
			},
			{
				name: '畲族乌米饭',
				desc: '畲族传统美食',
				img: 'img/Zhejiang/wumifan.jpeg'
			}
		],
		architecture: [{
			name: '畲族吊脚楼',
			desc: '依山而建',
			img: 'img/Zhejiang/diaojiaolou.png'
		}],
		crafts: [{
				name: '畲族彩带',
				desc: '编织工艺',
				img: 'img/Zhejiang/caidai.webp'
			},
			{
				name: '龙泉青瓷',
				desc: '青瓷之都',
				img: 'img/Zhejiang/qingci.webp'
			}
		],
		music: [{
			name: '越剧',
			desc: '江南戏曲代表',
			img: 'img/Zhejiang/yuejuerhao.webp'
		}],
		distribution: '主要分布于丽水景宁畲族自治县，全省各地散居',
		costume: ['畲族凤凰装', '汉族传统服饰'],
		unityMessage: '诗画浙江，畲乡风情，各民族共建美好家园。'
	},
	'安徽省': {
		region: '华东',
		ethnicGroups: [{
				name: '汉族',
				population: '约6100万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '回族',
				population: '约30万',
				img: 'img/huizu.jpg',
				desc: '阜阳、亳州、滁州'
			},
			{
				name: '畲族',
				population: '约0.2万',
				img: 'img/shezu.webp',
				desc: '宁国畲族乡'
			}
		],
		minorityPopulation: '约32万',
		ethnicCount: 52,
		carouselImages: [{
				url: 'img/Anhui/yinkesong.jpg',
				caption: '黄山迎客松'
			},
			{
				url: 'img/Anhui/gucunluo.jpg',
				caption: '宏村古村落'
			}
		],
		festivals: [{
			name: '畲族三月三',
			date: '农历三月初三',
			desc: '畲族传统节日',
			img: 'img/Anhui/sanyuesan.jfif'
		}],
		heritage: [{
				name: '黄梅戏',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Anhui/huangmeixi.jfif'
			},
			{
				name: '徽剧',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Anhui/huiju.jpg'
			}
		],
		foods: [{
				name: '臭鳜鱼',
				desc: '徽菜代表',
				img: 'img/Anhui/chouguiyu.jfif'
			},
			{
				name: '毛豆腐',
				desc: '徽州特色',
				img: 'img/Anhui/maodoufu.jfif'
			}
		],
		architecture: [{
			name: '徽派建筑',
			desc: '白墙黛瓦，马头墙',
			img: 'img/Anhui/huipaijianzhu.jfif'
		}],
		crafts: [{
				name: '歙砚',
				desc: '中国四大名砚',
				img: 'img/Anhui/sheyan.jpg'
			},
			{
				name: '徽墨',
				desc: '文房四宝',
				img: 'img/Anhui/huimo.webp'
			}
		],
		music: [{
			name: '黄梅戏',
			desc: '安徽地方戏曲',
			img: 'img/Anhui/huangmeixierhao.jpg'
		}],
		distribution: '主要分布于阜阳、亳州、滁州等地',
		costume: ['回族服饰'],
		unityMessage: '徽风皖韵，江淮大地，各民族共同谱写美好安徽新篇章。'
	},
	'福建省': {
		region: '华东',
		ethnicGroups: [{
				name: '汉族',
				population: '约3900万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '畲族',
				population: '约37万',
				img: 'img/shezu.webp',
				desc: '宁德、福州、漳州'
			},
			{
				name: '回族',
				population: '约12万',
				img: 'img/huizu.jpg',
				desc: '泉州、厦门'
			},
			{
				name: '满族',
				population: '约0.5万',
				img: 'img/manzu.jfif',
				desc: '散居'
			}
		],
		minorityPopulation: '约50万',
		ethnicCount: 54,
		carouselImages: [{
				url: 'img/Fujian/tulou.jpg',
				caption: '福建土楼'
			},
			{
				url: 'img/Fujian/shezufenghuangzhuang.webp',
				caption: '畲族凤凰装'
			}
		],
		festivals: [{
			name: '畲族三月三',
			date: '农历三月初三',
			desc: '畲族传统节日',
			img: 'img/Fujian/sanyuesan.jfif'
		}],
		heritage: [{
				name: '畲族民歌',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Fujian/minge.jfif'
			},
			{
				name: '福建南音',
				level: '人类非遗',
				year: '2009',
				img: 'img/Fujian/fujiannanyin.webp'
			}
		],
		foods: [{
				name: '佛跳墙',
				desc: '闽菜代表',
				img: 'img/Fujian/fotiaoqiang.webp'
			},
			{
				name: '沙县小吃',
				desc: '国民小吃',
				img: 'img/Fujian/shaxianxiaochi.jpg'
			}
		],
		architecture: [{
			name: '福建土楼',
			desc: '世界文化遗产，客家民居',
			img: 'img/Fujian/fujiantulouerhao.jfif'
		}],
		crafts: [{
				name: '德化白瓷',
				desc: '中国白瓷之都',
				img: 'img/Fujian/dehuabaici.webp'
			},
			{
				name: '畲族彩带',
				desc: '畲族传统编织',
				img: 'img/Fujian/caidai.webp'
			}
		],
		music: [{
			name: '南音',
			desc: '中国音乐活化石',
			img: 'img/Fujian/nanyin.jpg'
		}],
		distribution: '主要分布于宁德、福州、漳州、泉州等地',
		costume: ['畲族凤凰装', '回族服饰'],
		unityMessage: '八闽大地，山海交融，各民族共同守护多彩福建。'
	},
	'江西省': {
		region: '华东',
		ethnicGroups: [{
				name: '汉族',
				population: '约4500万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '畲族',
				population: '约8万',
				img: 'img/shezu.webp',
				desc: '赣州、吉安、上饶'
			},
			{
				name: '回族',
				population: '约2万',
				img: 'img/huizu.jpg',
				desc: '南昌、九江散居'
			}
		],
		minorityPopulation: '约12万',
		ethnicCount: 53,
		carouselImages: [{
				url: 'img/Jiangxi/lushan.jpg',
				caption: '庐山'
			},
			{
				url: 'img/Jiangxi/jingdezhenciqi.jfif',
				caption: '景德镇陶瓷'
			}
		],
		festivals: [{
			name: '畲族三月三',
			date: '农历三月初三',
			desc: '畲族传统节日',
			img: 'img/Jiangxi/sanyuesan.jfif'
		}],
		heritage: [{
				name: '景德镇手工制瓷技艺',
				level: '人类非遗',
				year: '2006',
				img: 'img/Jiangxi/jingdezhenshougong.webp'
			},
			{
				name: '赣剧',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Jiangxi/ganju.webp'
			}
		],
		foods: [{
				name: '南昌瓦罐汤',
				desc: '江西特色',
				img: 'img/Jiangxi/waguantang.webp'
			},
			{
				name: '赣南脐橙',
				desc: '中国名果',
				img: 'img/Jiangxi/qicheng.jfif'
			}
		],
		architecture: [{
			name: '婺源徽派建筑',
			desc: '最美乡村',
			img: 'img/Jiangxi/jianzhu.jfif'
		}],
		crafts: [{
			name: '景德镇瓷器',
			desc: '千年瓷都',
			img: 'img/Jiangxi/ciqi.jpg'
		}],
		music: [{
			name: '赣剧',
			desc: '江西地方戏曲',
			img: 'img/Jiangxi/ganjuerhao.jfif'
		}],
		distribution: '主要分布于赣州、吉安、上饶、抚州等地',
		costume: ['畲族服饰'],
		unityMessage: '红色江西，陶瓷之乡，各民族共同书写赣鄱文化新篇章。'
	},
	'山东省': {
		region: '华东',
		ethnicGroups: [{
				name: '汉族',
				population: '约9900万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '回族',
				population: '约50万',
				img: 'img/huizu.jpg',
				desc: '德州、济南、菏泽'
			},
			{
				name: '满族',
				population: '约2万',
				img: 'img/manzu.jfif',
				desc: '散居'
			}
		],
		minorityPopulation: '约54万',
		ethnicCount: 55,
		carouselImages: [{
				url: 'img/Shandong/taishan.jpg',
				caption: '泰山'
			},
			{
				url: 'img/Shandong/kongmiao.jpg',
				caption: '曲阜孔庙'
			}
		],
		festivals: [{
				name: '开斋节',
				date: '伊斯兰教历十月一日',
				desc: '回族传统节日',
				img: 'img/Shandong/kaizaijie.jfif'
			},
			{
				name: '孔子文化节',
				date: '9月',
				desc: '祭孔大典',
				img: 'img/Shandong/kongziwenhuajie.webp'
			}
		],
		heritage: [{
				name: '祭孔大典',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Shandong/jikongdadian.webp'
			},
			{
				name: '山东快书',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Shandong/kuaishu.webp'
			}
		],
		foods: [{
				name: '煎饼卷大葱',
				desc: '山东特色',
				img: 'img/Shandong/jianbingjuandacong.png'
			},
			{
				name: '德州扒鸡',
				desc: '山东名产',
				img: 'img/Shandong/baji.webp'
			}
		],
		architecture: [{
				name: '曲阜三孔',
				desc: '世界文化遗产，儒家圣地',
				img: 'img/Shandong/qufusankong.jpg'
			},
			{
				name: '泰山',
				desc: '五岳独尊',
				img: 'img/Shandong/taishan.jfif'
			}
		],
		crafts: [{
				name: '潍坊风筝',
				desc: '风筝之都',
				img: 'img/Shandong/fengzheng.webp'
			},
			{
				name: '杨家埠年画',
				desc: '木板年画',
				img: 'img/Shandong/nianhua.webp'
			}
		],
		music: [{
			name: '山东快书',
			desc: '曲艺艺术',
			img: 'img/Shandong/kuaishu.jfif'
		}],
		distribution: '主要分布于德州、济南、菏泽、济宁等地',
		costume: ['回族服饰'],
		unityMessage: '孔孟之乡，礼仪之邦，各民族共同传承齐鲁文化。'
	},
	'河南省': {
		region: '华中',
		ethnicGroups: [{
				name: '汉族',
				population: '约9800万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '回族',
				population: '约95万',
				img: 'img/huizu.jpg',
				desc: '郑州、洛阳、开封、周口'
			},
			{
				name: '蒙古族',
				population: '约8万',
				img: 'img/mengguzu.jpg',
				desc: '散居'
			},
			{
				name: '满族',
				population: '约1万',
				img: 'img/manzu.jfif',
				desc: '散居'
			}
		],
		minorityPopulation: '约105万',
		ethnicCount: 55,
		carouselImages: [{
				url: 'img/Henan/shaolinsi.jpg',
				caption: '少林寺'
			},
			{
				url: 'img/Henan/longmenshiku.jpg',
				caption: '龙门石窟'
			}
		],
		festivals: [{
			name: '开斋节',
			date: '伊斯兰教历十月一日',
			desc: '回族传统节日',
			img: 'img/Henan/kaizaijie.jpg'
		}],
		heritage: [{
				name: '豫剧',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Henan/yujuerhao.jpg'
			},
			{
				name: '少林功夫',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Henan/shaolingongfu.jpg'
			}
		],
		foods: [{
				name: '胡辣汤',
				desc: '河南早餐代表',
				img: 'img/Henan/hulatang.png'
			},
			{
				name: '烩面',
				desc: '河南面食代表',
				img: 'img/Henan/huimian.jpg'
			}
		],
		architecture: [{
				name: '少林寺',
				desc: '禅宗祖庭',
				img: 'img/Henan/shaolinsierhao.jpg'
			},
			{
				name: '龙门石窟',
				desc: '世界文化遗产',
				img: 'img/Henan/longmenshiku erhao.jpg'
			}
		],
		crafts: [{
				name: '唐三彩',
				desc: '唐代陶瓷艺术',
				img: 'img/Henan/tangsancai.jpg'
			},
			{
				name: '朱仙镇木版年画',
				desc: '中国木版年画之源',
				img: 'img/Henan/zhuxianzhenmubannianhua.jpg'
			}
		],
		music: [{
			name: '豫剧',
			desc: '河南地方戏曲',
			img: 'img/Henan/yuju.webp'
		}],
		distribution: '主要分布于郑州、洛阳、开封、周口等地',
		costume: ['回族服饰'],
		unityMessage: '老家河南，华夏之源，各民族共同守护中原文化根脉。'
	},
	'湖北省': {
		region: '华中',
		ethnicGroups: [{
				name: '汉族',
				population: '约5700万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '土家族',
				population: '约230万',
				img: 'img/tujiazu.webp',
				desc: '恩施土家族苗族自治州'
			},
			{
				name: '苗族',
				population: '约20万',
				img: 'img/miaozu.jpg',
				desc: '恩施州'
			},
			{
				name: '回族',
				population: '约8万',
				img: 'img/huizu.jpg',
				desc: '武汉、襄阳散居'
			},
			{
				name: '侗族',
				population: '约5万',
				img: 'img/dongzu.webp',
				desc: '恩施州'
			}
		],
		minorityPopulation: '约270万',
		ethnicCount: 53,
		carouselImages: [{
				url: 'img/Hubei/enshidaxiagu.jpg',
				caption: '恩施大峡谷'
			},
			{
				url: 'img/Hubei/tujiabaishouwu.jpg',
				caption: '土家摆手舞'
			}
		],
		festivals: [{
				name: '土家族摆手舞节',
				date: '正月',
				desc: '土家族传统舞蹈',
				img: 'img/Hubei/tujiabaishouwujie.jpg'
			},
			{
				name: '苗族姊妹节',
				date: '农历三月',
				desc: '苗族情人节',
				img: 'img/Hubei/miaozijiemei.jpg'
			}
		],
		heritage: [{
				name: '土家族摆手舞',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Hubei/tujiazubaishouwu.jpg'
			},
			{
				name: '土家织锦西兰卡普',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Hubei/zhijin.webp'
			}
		],
		foods: [{
				name: '热干面',
				desc: '武汉特色',
				img: 'img/Hubei/regamian.jpg'
			},
			{
				name: '土家腊肉',
				desc: '土家族传统美食',
				img: 'img/Hubei/tujialarou.jpg'
			}
		],
		architecture: [{
			name: '土家吊脚楼',
			desc: '土家族传统民居',
			img: 'img/Hubei/tujiadiaojiaolou.jpg'
		}],
		crafts: [{
			name: '西兰卡普',
			desc: '土家织锦',
			img: 'img/Hubei/xilankapu.jpg'
		}],
		music: [{
			name: '土家民歌',
			desc: '山歌对唱',
			img: 'img/Hubei/tujiaminge.jpg'
		}],
		distribution: '主要分布于恩施土家族苗族自治州，武汉、襄阳等地散居',
		costume: ['土家族服饰', '苗族服饰'],
		unityMessage: '荆楚大地，土苗风情，各民族共同书写湖北发展新篇章。'
	},
	'湖南省': {
		region: '华中',
		ethnicGroups: [{
				name: '汉族',
				population: '约6700万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '土家族',
				population: '约260万',
				img: 'img/tujiazu.webp',
				desc: '湘西土家族苗族自治州'
			},
			{
				name: '苗族',
				population: '约210万',
				img: 'img/miaozu.jpg',
				desc: '湘西州、怀化'
			},
			{
				name: '侗族',
				population: '约90万',
				img: 'img/dongzu.webp',
				desc: '怀化、邵阳'
			},
			{
				name: '瑶族',
				population: '约80万',
				img: 'img/yaozu.png',
				desc: '永州、郴州'
			},
			{
				name: '白族',
				population: '约13万',
				img: 'img/baizu.jpg',
				desc: '张家界'
			}
		],
		minorityPopulation: '约670万',
		ethnicCount: 54,
		carouselImages: [{
				url: 'img/Hunan/fenghuanggucheng.jpg',
				caption: '凤凰古城'
			},
			{
				url: 'img/Hunan/miaozuyinshi.webp',
				caption: '苗族银饰'
			}
		],
		festivals: [{
				name: '土家族摆手舞节',
				date: '正月',
				desc: '土家族传统舞蹈',
				img: 'img/Hunan/tujiabaishouwujie.jpg'
			},
			{
				name: '苗族赶秋节',
				date: '立秋',
				desc: '苗族丰收节',
				img: 'img/Hunan/miaozuganqiujie.jpg'
			},
			{
				name: '侗族大歌节',
				date: '农历八月',
				desc: '侗族大歌盛会',
				img: 'img/Hunan/dongzudagejie.jpg'
			}
		],
		heritage: [{
				name: '土家族摆手舞',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Hunan/tujiazubaishouwu.png'
			},
			{
				name: '苗族银饰锻制技艺',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Hunan/miaozuyinshiduanzhijiyi.jpg'
			},
			{
				name: '侗族大歌',
				level: '人类非遗',
				year: '2009',
				img: 'img/Hunan/dongzudage.jpg'
			}
		],
		foods: [{
				name: '臭豆腐',
				desc: '长沙特色',
				img: 'img/Hunan/choudoufu.png'
			},
			{
				name: '湘西腊肉',
				desc: '土家族苗族传统',
				img: 'img/Hunan/xiangxilarou.webp'
			}
		],
		architecture: [{
				name: '凤凰古城',
				desc: '苗族土家族建筑',
				img: 'img/Hunan/fenghuangguchengerhao.jpg'
			},
			{
				name: '侗族风雨桥',
				desc: '侗族建筑瑰宝',
				img: 'img/Hunan/dongzufengyuqiao.jpg'
			}
		],
		crafts: [{
				name: '苗族银饰',
				desc: '银饰艺术',
				img: 'img/Hunan/miaozuyinshi.jpg'
			},
			{
				name: '土家织锦',
				desc: '西兰卡普',
				img: 'img/Hunan/tujiazhijin.jpg'
			}
		],
		music: [{
			name: '侗族大歌',
			desc: '天籁之音',
			img: 'img/Hunan/dongzudageerhao.jpg'
		}],
		distribution: '主要分布于湘西州、怀化、永州、张家界等地',
		costume: ['土家族服饰', '苗族服饰', '侗族服饰', '瑶族服饰'],
		unityMessage: '芙蓉国里，湘情浓郁，各民族共同绘就三湘大地锦绣画卷。'
	},
	'广东省': {
		region: '华南',
		ethnicGroups: [{
				name: '汉族',
				population: '约1.2亿',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '壮族',
				population: '约60万',
				img: 'img/zhuangzu.webp',
				desc: '清远、韶关'
			},
			{
				name: '瑶族',
				population: '约25万',
				img: 'img/yaozu.png',
				desc: '清远、韶关'
			},
			{
				name: '畲族',
				population: '约3万',
				img: 'img/shezu.webp',
				desc: '潮州、梅州'
			},
			{
				name: '回族',
				population: '约1.5万',
				img: 'img/huizu.jpg',
				desc: '广州、深圳'
			}
		],
		minorityPopulation: '约95万',
		ethnicCount: 56,
		carouselImages: [{
				url: 'img/Guangdong/guangzhouta.jpg',
				caption: '广州塔'
			},
			{
				url: 'img/Guangdong/yaozuchangguywu.webp',
				caption: '瑶族长鼓舞'
			}
		],
		festivals: [{
				name: '瑶族盘王节',
				date: '农历十月十六',
				desc: '瑶族祭祖大典',
				img: 'img/Guangdong/yaozupanwangjie.jpg'
			},
			{
				name: '畲族三月三',
				date: '农历三月初三',
				desc: '畲族传统节日',
				img: 'img/Guangdong/shezusanyuesan.jpg'
			}
		],
		heritage: [{
				name: '瑶族长鼓舞',
				level: '国家级非遗',
				year: '2008',
				img: 'img/Guangdong/yaozuchangguywu.jpg'
			},
			{
				name: '粤剧',
				level: '人类非遗',
				year: '2009',
				img: 'img/Guangdong/yueju.jpg'
			}
		],
		foods: [{
				name: '广式早茶',
				desc: '粤菜代表',
				img: 'img/Guangdong/guangshizaocha.jpg'
			},
			{
				name: '潮汕牛肉丸',
				desc: '潮汕美食',
				img: 'img/Guangdong/chaoshanniurouwan.png'
			}
		],
		architecture: [{
				name: '开平碉楼',
				desc: '世界文化遗产',
				img: 'img/Guangdong/kaipingdiaolou.jpg'
			},
			{
				name: '客家围屋',
				desc: '客家民居',
				img: 'img/Guangdong/kejiaweiwu.jpg'
			}
		],
		crafts: [{
				name: '广绣',
				desc: '岭南刺绣',
				img: 'img/Guangdong/guangxiu.jpg'
			},
			{
				name: '佛山陶艺',
				desc: '石湾公仔',
				img: 'img/Guangdong/foshantaoyi.jpg'
			}
		],
		music: [{
				name: '粤剧',
				desc: '南国红豆',
				img: 'img/Guangdong/yuejuerhao.jpg'
			},
			{
				name: '广东音乐',
				desc: '岭南丝竹',
				img: 'img/Guangdong/guangdongyinle.png'
			}
		],
		distribution: '主要分布于清远、韶关、潮州、梅州等地',
		costume: ['瑶族服饰', '畲族服饰', '壮族服饰'],
		unityMessage: '南粤大地，海丝起点，各民族共同书写改革开放新篇章。'
	},
	'广西壮族自治区': {
		region: '华南',
		ethnicGroups: [{
				name: '壮族',
				population: '约1570万',
				img: 'img/zhuangzu.webp',
				desc: '三月三歌圩、铜鼓文化'
			},
			{
				name: '汉族',
				population: '约3300万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '瑶族',
				population: '约150万',
				img: 'img/yaozu.png',
				desc: '盘王节、长鼓舞'
			},
			{
				name: '苗族',
				population: '约50万',
				img: 'img/miaozu.jpg',
				desc: '芦笙节'
			},
			{
				name: '侗族',
				population: '约32万',
				img: 'img/dongzu.webp',
				desc: '风雨桥、侗族大歌'
			},
			{
				name: '仫佬族',
				population: '约18万',
				img: 'img/mulaozu.jpg',
				desc: '依饭节'
			},
			{
				name: '毛南族',
				population: '约11万',
				img: 'img/maonanzu.webp',
				desc: '分龙节'
			}
		],
		minorityPopulation: '约1900万',
		ethnicCount: 12,
		carouselImages: [{
				url: 'img/Guangxi/guilinshanshui.jpg',
				caption: '桂林山水'
			},
			{
				url: 'img/Guangxi/zhuangzusanyuesange.jpg',
				caption: '壮族三月三歌圩'
			}
		],
		festivals: [{
				name: '三月三',
				date: '农历三月初三',
				desc: '壮族歌节，山歌对唱',
				img: 'img/Guangxi/sanyuesan.jpg'
			},
			{
				name: '盘王节',
				date: '农历十月十六',
				desc: '瑶族盛大祭典',
				img: 'img/Guangxi/panwangjie.jpg'
			}
		],
		heritage: [{
				name: '壮族铜鼓习俗',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Guangxi/zhuangzutongguxisu.jpg'
			},
			{
				name: '瑶族长鼓舞',
				level: '国家级非遗',
				year: '2008',
				img: 'img/Guangxi/yaozuchangguywu.jpeg'
			},
			{
				name: '侗族大歌',
				level: '人类非遗',
				year: '2009',
				img: 'img/Guangxi/dongzudage.webp'
			}
		],
		foods: [{
				name: '桂林米粉',
				desc: '桂林特色小吃',
				img: 'img/Guangxi/guilinfen.jpg'
			},
			{
				name: '螺蛳粉',
				desc: '柳州特色，酸辣鲜香',
				img: 'img/Guangxi/luosifen.jpg'
			}
		],
		architecture: [{
				name: '侗族风雨桥',
				desc: '廊桥建筑，艺术瑰宝',
				img: 'img/Guangxi/dongzufengyuqiao.jpg'
			},
			{
				name: '壮族干栏式建筑',
				desc: '底层架空，防潮通风',
				img: 'img/Guangxi/zhuangzuganlanshijianzhu.webp'
			}
		],
		crafts: [{
			name: '壮族织锦',
			desc: '壮锦，中国四大名锦之一',
			img: 'img/Guangxi/zhuangzuzhijin.jpg'
		}],
		music: [{
			name: '壮族山歌',
			desc: '即兴对唱，抒情达意',
			img: 'img/Guangxi/zhuangzushange.jpeg'
		}],
		distribution: '主要分布于桂西、桂北、桂中，百色、河池、柳州为民族聚居区',
		costume: ['壮族服饰', '瑶族服饰', '苗族服饰', '侗族服饰'],
		unityMessage: '壮美广西，山歌之乡。壮族与各族兄弟姐妹共唱团结歌，共建幸福家。'
	},
	'海南省': {
		region: '华南',
		ethnicGroups: [{
				name: '汉族',
				population: '约900万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '黎族',
				population: '约120万',
				img: 'img/lizu.png',
				desc: '海南岛中南部'
			},
			{
				name: '苗族',
				population: '约8万',
				img: 'img/miaozu.jpg',
				desc: '海南中西部'
			},
			{
				name: '回族',
				population: '约1.2万',
				img: 'img/huizu.jpg',
				desc: '三亚凤凰镇'
			}
		],
		minorityPopulation: '约130万',
		ethnicCount: 48,
		carouselImages: [{
				url: 'img/Hainan/tianyahaijiao.jpg',
				caption: '天涯海角'
			},
			{
				url: 'img/Hainan/lizuzhijin.webp',
				caption: '黎族织锦'
			}
		],
		festivals: [{
				name: '黎族三月三',
				date: '农历三月初三',
				desc: '黎族传统节日',
				img: 'img/Hainan/lizusanyuesan.jpg'
			},
			{
				name: '苗族花山节',
				date: '农历正月',
				desc: '苗族传统节日',
				img: 'img/Hainan/miaozuhuashanjie.jpg'
			}
		],
		heritage: [{
				name: '黎族传统纺染织绣技艺',
				level: '人类非遗',
				year: '2009',
				img: 'img/Hainan/lizuchuantongfangranzhixiujiyi.jpg'
			},
			{
				name: '黎族打柴舞',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Hainan/lizudachaiwu.jpg'
			}
		],
		foods: [{
				name: '海南鸡饭',
				desc: '海南名菜',
				img: 'img/Hainan/hainanjiifan.jpg'
			},
			{
				name: '黎族竹筒饭',
				desc: '黎族传统美食',
				img: 'img/Hainan/lizuzhutongfan.jpg'
			}
		],
		architecture: [{
			name: '黎族船型屋',
			desc: '黎族传统民居',
			img: 'img/Hainan/lizuchuanxingwu.png'
		}],
		crafts: [{
			name: '黎族织锦',
			desc: '黎锦，中国纺织活化石',
			img: 'img/Hainan/lizuzhijin.webp'
		}],
		music: [{
			name: '黎族竹木器乐',
			desc: '竹木乐器演奏',
			img: 'img/Hainan/lizuzhumuqiyue.webp'
		}],
		distribution: '主要分布于五指山、琼中、白沙、乐东、三亚等地',
		costume: ['黎族服饰', '苗族服饰', '回族服饰'],
		unityMessage: '阳光海南，黎苗风情，各民族共同建设国际旅游岛。'
	},
	'香港特别行政区': {
		region: '华南',
		ethnicGroups: [{
				name: '汉族',
				population: '约740万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '回族',
				population: '约2万',
				img: 'img/huizu.jpg',
				desc: '全港散居'
			},
			{
				name: '满族',
				population: '约0.3万',
				img: 'img/manzu.jfif',
				desc: '散居'
			}
		],
		minorityPopulation: '约3万',
		ethnicCount: 55,
		carouselImages: [{
				url: 'img/Hongkong/weiduoliagang.jpg',
				caption: '维多利亚港'
			},
			{
				url: 'img/Hongkong/weiduoliagang.jpg',
				caption: '香港文化'
			}
		],
		festivals: [{
			name: '佛诞节',
			date: '农历四月初八',
			desc: '佛教节日',
			img: 'img/Hongkong/fodanjie.png'
		}],
		heritage: [{
				name: '粤剧',
				level: '人类非遗',
				year: '2009',
				img: 'img/Hongkong/yueju.webp'
			},
			{
				name: '长洲太平清醮',
				level: '国家级非遗',
				year: '2011',
				img: 'img/Hongkong/changzhoutaipingqingjiao.jpg'
			}
		],
		foods: [{
			name: '港式茶餐厅',
			desc: '香港特色',
			img: 'img/Hongkong/gangshichacanting.png'
		}],
		architecture: [{
			name: '中环历史建筑',
			desc: '中西合璧',
			img: 'img/Hongkong/zhonghuanlishijianzhu.webp'
		}],
		crafts: [{
			name: '香港花牌',
			desc: '传统扎作',
			img: 'img/Hongkong/xiangganghuapai.jpg'
		}],
		music: [{
			name: '粤剧',
			desc: '广东大戏',
			img: 'img/Hongkong/yuejuerhao.png'
		}],
		distribution: '全港散居',
		costume: ['汉族传统服饰'],
		unityMessage: '东方之珠，中外文化交融，香港同胞与内地各族人民血脉相连。'
	},
	'澳门特别行政区': {
		region: '华南',
		ethnicGroups: [{
				name: '汉族',
				population: '约68万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '土生葡人',
				population: '约0.8万',
				img: 'img/tushengpuren.png',
				desc: '葡萄牙后裔'
			}
		],
		minorityPopulation: '约1万',
		ethnicCount: 52,
		carouselImages: [{
				url: 'img/Macau/dasanbapaifang.jpg',
				caption: '大三巴牌坊'
			},
			{
				url: 'img/Macau/mazuwenghua.jpg',
				caption: '澳门妈祖文化'
			}
		],
		festivals: [{
			name: '妈祖诞',
			date: '农历三月廿三',
			desc: '妈祖信仰节日',
			img: 'img/Macau/mazudan.webp'
		}],
		heritage: [{
				name: '粤剧',
				level: '人类非遗',
				year: '2009',
				img: 'img/Macau/yueju.jpg'
			},
			{
				name: '澳门妈祖信俗',
				level: '国家级非遗',
				year: '2011',
				img: 'img/Macau/aomenmazuxinsu.webp'
			}
		],
		foods: [{
			name: '葡式蛋挞',
			desc: '澳门特色',
			img: 'img/Macau/pushidanta.jpg'
		}],
		architecture: [{
				name: '大三巴牌坊',
				desc: '澳门地标',
				img: 'img/Macau/dasanbapaifangerhao.webp'
			},
			{
				name: '妈阁庙',
				desc: '澳门最古老庙宇',
				img: 'img/Macau/magemiao.jpg'
			}
		],
		crafts: [],
		music: [{
			name: '粤剧',
			desc: '广东大戏',
			img: 'img/Macau/yuejuerhao.webp'
		}],
		distribution: '全澳散居',
		costume: ['汉族传统服饰'],
		unityMessage: '莲花宝地，中西合璧，澳门与祖国同心同行。'
	},
	'台湾省': {
		region: '华东',
		ethnicGroups: [{
				name: '汉族',
				population: '约2300万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '高山族',
				population: '约55万',
				img: 'img/gaoshanzu.webp',
				desc: '阿美、泰雅、排湾、布农等16族'
			}
		],
		minorityPopulation: '约55万',
		ethnicCount: 16,
		carouselImages: [{
				url: 'img/Taiwan/alishan.jpg',
				caption: '阿里山'
			},
			{
				url: 'img/Taiwan/gaoshanzufengnianji.jpg',
				caption: '高山族丰年祭'
			}
		],
		festivals: [{
				name: '阿美族丰年祭',
				date: '七八月',
				desc: '阿美族丰收庆典',
				img: 'img/Taiwan/ameizufengnianji.webp'
			},
			{
				name: '泰雅族祖灵祭',
				date: '七月',
				desc: '泰雅族祭祖',
				img: 'img/Taiwan/taiyazuzulingji.webp'
			}
		],
		heritage: [{
			name: '高山族传统歌谣',
			level: '国家级非遗',
			year: '2008',
			img: 'img/Taiwan/gaoshanzuchuantonggeyao.webp'
		}],
		foods: [{
			name: '台湾小吃',
			desc: '蚵仔煎、担仔面',
			img: 'img/Taiwan/taiwanxiaochi.webp'
		}],
		architecture: [{
			name: '高山族石板屋',
			desc: '传统民居',
			img: 'img/Taiwan/shibanwu.webp'
		}],
		crafts: [{
			name: '高山族编织',
			desc: '传统编织工艺',
			img: 'img/Taiwan/gaoshanzubianzhi.webp'
		}],
		music: [{
			name: '高山族民歌',
			desc: '原住民音乐',
			img: 'img/Taiwan/gaoshanzuminge.jpg'
		}],
		distribution: '主要分布于东部山区、兰屿、屏东、花莲等地',
		costume: ['高山族服饰', '阿美族服饰', '排湾族服饰'],
		unityMessage: '宝岛台湾，高山族与汉族同胞一家亲，两岸血脉相连，共盼团圆。'
	},
	'重庆市': {
		region: '西南',
		ethnicGroups: [{
				name: '汉族',
				population: '约3200万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '土家族',
				population: '约150万',
				img: 'img/tujiazu.webp',
				desc: '摆手舞、西兰卡普'
			},
			{
				name: '苗族',
				population: '约80万',
				img: 'img/miaozu.jpg',
				desc: '银饰、芦笙舞'
			},
			{
				name: '回族',
				population: '约13万',
				img: 'img/huizu.jpg',
				desc: '清真饮食文化'
			},
			{
				name: '满族',
				population: '约2万',
				img: 'img/manzu.jfif',
				desc: '满族文化传承'
			}
		],
		minorityPopulation: '约250万',
		ethnicCount: 49,
		carouselImages: [{
				url: 'img/Chongqing/chongqinghongyadong.jpg',
				caption: '重庆洪崖洞'
			},
			{
				url: 'img/Chongqing/tujiazubaishouwu.webp',
				caption: '土家族摆手舞'
			},
			{
				url: 'img/Chongqing/chongqinghuoguo.webp',
				caption: '重庆火锅'
			}
		],
		festivals: [{
				name: '土家族摆手舞节',
				date: '正月',
				desc: '土家族传统祭祀舞蹈',
				img: 'img/Chongqing/tujiazubaishouwujie.jpg'
			},
			{
				name: '苗族赶秋节',
				date: '立秋',
				desc: '苗族丰收庆典',
				img: 'img/Chongqing/miaozuganqiujie.jpg'
			},
			{
				name: '开斋节',
				date: '伊斯兰教历十月一日',
				desc: '回族传统节日',
				img: 'img/Chongqing/kaizaijie.jpeg'
			}
		],
		heritage: [{
				name: '土家族摆手舞',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Chongqing/tujiazubaishouwuerhao.webp'
			},
			{
				name: '土家织锦西兰卡普',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Chongqing/tujiazhijinxilankapu.webp'
			},
			{
				name: '苗族银饰锻制技艺',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Chongqing/miaozuyinshiduanzhijiyi.jpg'
			},
			{
				name: '川江号子',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Chongqing/chuanjianghaozi.webp'
			}
		],
		foods: [{
				name: '重庆火锅',
				desc: '麻辣鲜香，重庆名片',
				img: 'img/Chongqing/chongqinghuoguo.gif'
			},
			{
				name: '重庆小面',
				desc: '重庆早餐代表',
				img: 'img/Chongqing/chongqingxiaomian.jpg'
			},
			{
				name: '土家腊肉',
				desc: '土家族传统美食',
				img: 'img/Chongqing/tujialarou.jpg'
			}
		],
		architecture: [{
				name: '土家吊脚楼',
				desc: '依山而建，吊脚楼群',
				img: 'img/Chongqing/tujiadiaojiaolou.webp'
			},
			{
				name: '磁器口古镇',
				desc: '千年古镇，巴渝文化',
				img: 'img/Chongqing/ciqikouguzhen.webp'
			}
		],
		crafts: [{
				name: '土家织锦',
				desc: '西兰卡普，五彩斑斓',
				img: 'img/Chongqing/tujiazhijin.png'
			},
			{
				name: '苗族刺绣',
				desc: '针尖上的艺术',
				img: 'img/Chongqing/miaozucixiu.png'
			},
			{
				name: '荣昌夏布',
				desc: '千年夏布，非物质文化遗产',
				img: 'img/Chongqing/rongchangxiabu.jpg'
			}
		],
		music: [{
				name: '川江号子',
				desc: '船工号子，江河记忆',
				img: 'img/Chongqing/chuanjianghaozi erhao.webp'
			},
			{
				name: '土家山歌',
				desc: '山歌对唱，情意绵绵',
				img: 'img/Chongqing/tujiashange.jpg'
			}
		],
		distribution: '主要分布于黔江、石柱、秀山、酉阳、彭水等土家族苗族自治县',
		costume: ['土家族服饰', '苗族服饰', '回族服饰'],
		unityMessage: '山水重庆，巴渝风情。土家苗寨与各族人民携手共进，建设内陆开放高地。'
	},
	'四川省': {
		region: '西南',
		ethnicGroups: [{
				name: '汉族',
				population: '约7800万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '彝族',
				population: '约270万',
				img: 'img/yizu.webp',
				desc: '火把节、毕摩文化'
			},
			{
				name: '藏族',
				population: '约150万',
				img: 'img/zangzu.png',
				desc: '藏传佛教、唐卡'
			},
			{
				name: '羌族',
				population: '约30万',
				img: 'img/qiangzu.jpg',
				desc: '羌笛、羌绣、碉楼'
			},
			{
				name: '苗族',
				population: '约20万',
				img: 'img/miaozu.jpg',
				desc: '芦笙舞、银饰'
			},
			{
				name: '回族',
				population: '约11万',
				img: 'img/huizu.jpg',
				desc: '清真饮食'
			}
		],
		minorityPopulation: '约490万',
		ethnicCount: 53,
		carouselImages: [{
				url: 'img/Sichuan/jiuzhaigou.jpg',
				caption: '九寨沟'
			},
			{
				url: 'img/Sichuan/yizuhuobajie.jpg',
				caption: '彝族火把节'
			},
			{
				url: 'img/Sichuan/qiangzudiaolou.jpg',
				caption: '羌族碉楼'
			}
		],
		festivals: [{
				name: '彝族火把节',
				date: '农历六月廿四',
				desc: '点火把、赛马、摔跤',
				img: 'img/Sichuan/yizuhuobajieerhao.jpg'
			},
			{
				name: '藏族雪顿节',
				date: '藏历六月底',
				desc: '晒佛节、酸奶节',
				img: 'img/Sichuan/zangzuxuedunjie.jpg'
			},
			{
				name: '羌族瓦尔俄足节',
				date: '农历五月初五',
				desc: '羌族妇女节',
				img: 'img/Sichuan/qiangzuwaerezhujie.webp'
			}
		],
		heritage: [{
				name: '彝族火把节',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Sichuan/yizuhuobajie.jpg'
			},
			{
				name: '羌族羌笛',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Sichuan/qiangzuqiangdi.jpeg'
			},
			{
				name: '藏族唐卡',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Sichuan/zangzutangka.jpg'
			},
			{
				name: '蜀锦织造技艺',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Sichuan/shujinzhizaojiyi.jpg'
			}
		],
		foods: [{
				name: '火锅',
				desc: '四川火锅，麻辣鲜香',
				img: 'img/Sichuan/huoguo.jpg'
			},
			{
				name: '担担面',
				desc: '四川名小吃',
				img: 'img/Sichuan/dandanmian.jpg'
			},
			{
				name: '彝族坨坨肉',
				desc: '彝族传统美食',
				img: 'img/Sichuan/yizutuotuorou.png'
			}
		],
		architecture: [{
				name: '羌族碉楼',
				desc: '石砌碉楼，防御功能',
				img: 'img/Sichuan/qiangzudiaolou.jpg'
			},
			{
				name: '藏族碉房',
				desc: '藏式民居',
				img: 'img/Sichuan/zangzudiaofang.jpeg'
			},
			{
				name: '彝族土掌房',
				desc: '平顶土墙',
				img: 'img/Sichuan/yizutuzhangfang.webp'
			}
		],
		crafts: [{
				name: '蜀锦',
				desc: '中国四大名锦之一',
				img: 'img/Sichuan/shujin.jpg'
			},
			{
				name: '羌族刺绣',
				desc: '羌绣，国家级非遗',
				img: 'img/Sichuan/qiangzucixiu.jpg'
			},
			{
				name: '彝族漆器',
				desc: '红黑黄三色漆器',
				img: 'img/Sichuan/yizuqiqi.jpg'
			}
		],
		music: [{
				name: '羌笛',
				desc: '古老乐器，音色独特',
				img: 'img/Sichuan/qiangdi.webp'
			},
			{
				name: '彝族口弦',
				desc: '弹拨乐器',
				img: 'img/Sichuan/yizukouxian.jpg'
			},
			{
				name: '藏族锅庄舞',
				desc: '圆圈舞蹈，欢快热烈',
				img: 'img/Sichuan/zangzuguzhuangwu.webp'
			}
		],
		distribution: '主要分布于凉山彝族自治州、甘孜藏族自治州、阿坝藏族羌族自治州',
		costume: ['彝族服饰', '藏族服饰', '羌族服饰', '苗族服饰'],
		unityMessage: '天府之国，多彩四川。彝族、藏族、羌族与各族同胞共创美好生活。'
	},
	'贵州省': {
		region: '西南',
		ethnicGroups: [{
				name: '苗族',
				population: '约430万',
				img: 'img/miaozu.jpg',
				desc: '银饰、苗绣、芦笙舞'
			},
			{
				name: '汉族',
				population: '约2200万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '布依族',
				population: '约280万',
				img: 'img/buyizu.bmp',
				desc: '蜡染、六月六'
			},
			{
				name: '侗族',
				population: '约160万',
				img: 'img/dongzu.webp',
				desc: '侗族大歌、鼓楼'
			},
			{
				name: '土家族',
				population: '约143万',
				img: 'img/tujiazu.webp',
				desc: '摆手舞'
			},
			{
				name: '彝族',
				population: '约84万',
				img: 'img/yizu.jfif',
				desc: '火把节'
			},
			{
				name: '仡佬族',
				population: '约55万',
				img: 'img/mulaozu.jpg',
				desc: '吃新节'
			},
			{
				name: '水族',
				population: '约36万',
				img: 'img/shuizu.jfif',
				desc: '水书、端节'
			}
		],
		minorityPopulation: '约1250万',
		ethnicCount: 49,
		carouselImages: [{
				url: 'img/Guizhou/xijiangqianhumiaozhai.jpg',
				caption: '西江千户苗寨'
			},
			{
				url: 'img/Guizhou/miaozuyinshi.jpeg',
				caption: '苗族银饰'
			},
			{
				url: 'img/Guizhou/dongzugulou.jpg',
				caption: '侗族鼓楼'
			}
		],
		festivals: [{
				name: '苗年节',
				date: '农历十月',
				desc: '苗族最隆重节日',
				img: 'img/Guizhou/miaonianjie.jpg'
			},
			{
				name: '姊妹节',
				date: '农历三月十五',
				desc: '东方情人节',
				img: 'img/Guizhou/ziimeijie.webp'
			},
			{
				name: '侗族大歌节',
				date: '农历八月',
				desc: '侗族大歌盛会',
				img: 'img/Guizhou/dongzudagejie.webp'
			},
			{
				name: '六月六',
				date: '农历六月初六',
				desc: '布依族传统节日',
				img: 'img/Guizhou/liuyueliu.webp'
			}
		],
		heritage: [{
				name: '侗族大歌',
				level: '人类非遗',
				year: '2009',
				img: 'img/Guizhou/dongzudage.jpg'
			},
			{
				name: '苗族银饰锻制技艺',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Guizhou/miaozuyinshiduanzhijiyi.jpg'
			},
			{
				name: '苗族蜡染',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Guizhou/miaozularan.webp'
			},
			{
				name: '水书习俗',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Guizhou/shuishuxisu.webp'
			}
		],
		foods: [{
				name: '酸汤鱼',
				desc: '苗族传统美食，酸辣开胃',
				img: 'img/Guizhou/suantangyu.jpg'
			},
			{
				name: '肠旺面',
				desc: '贵阳特色小吃',
				img: 'img/Guizhou/changwangmian.jpg'
			},
			{
				name: '丝娃娃',
				desc: '素菜春卷，清爽可口',
				img: 'img/Guizhou/siwawa.jpg'
			}
		],
		architecture: [{
				name: '侗族鼓楼',
				desc: '侗族标志性建筑，议事场所',
				img: 'img/Guizhou/dongzugulouerhao.jpg'
			},
			{
				name: '苗族吊脚楼',
				desc: '依山而建，通风防潮',
				img: 'img/Guizhou/miaozudiaojiaolou.jpeg'
			},
			{
				name: '布依族石头寨',
				desc: '石墙石瓦，古朴自然',
				img: 'img/Guizhou/buyizushitouzhai.webp'
			}
		],
		crafts: [{
				name: '苗族银饰',
				desc: '工艺精湛，纹样丰富',
				img: 'img/Guizhou/miaozuyinshi.webp'
			},
			{
				name: '苗族蜡染',
				desc: '蓝白相间，图案精美',
				img: 'img/Guizhou/miaozularanerhao.webp'
			},
			{
				name: '布依族织锦',
				desc: '色彩艳丽，民族特色',
				img: 'img/Guizhou/buyizuzhijin.webp'
			}
		],
		music: [{
				name: '侗族大歌',
				desc: '多声部无伴奏合唱，天籁之音',
				img: 'img/Guizhou/dongzudageerhao.jpeg'
			},
			{
				name: '苗族芦笙舞',
				desc: '欢快热烈，喜庆节日',
				img: 'img/Guizhou/miaozulushengwu.jpg'
			}
		],
		distribution: '主要分布于黔东南、黔南、黔西南，苗族侗族布依族聚居区',
		costume: ['苗族银饰盛装', '侗族服饰', '布依族服饰', '水族服饰'],
		unityMessage: '多彩贵州，民族之州。49个民族在这片土地上创造了丰富多彩的文化，共同谱写着民族团结的华章。'
	},
	'云南省': {
		region: '西南',
		ethnicGroups: [{
				name: '彝族',
				population: '约500万',
				img: 'img/yizu.jfif',
				desc: '火把节、十月太阳历'
			},
			{
				name: '汉族',
				population: '约3150万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '白族',
				population: '约156万',
				img: 'img/baizu.webp',
				desc: '三月街、扎染技艺'
			},
			{
				name: '哈尼族',
				population: '约163万',
				img: 'img/hanizu.jpg',
				desc: '梯田文化、长街宴'
			},
			{
				name: '傣族',
				population: '约122万',
				img: 'img/daizu.webp',
				desc: '泼水节、孔雀舞'
			},
			{
				name: '壮族',
				population: '约121万',
				img: 'img/zhuangzu.jpg',
				desc: '三月三歌圩'
			},
			{
				name: '苗族',
				population: '约120万',
				img: 'img/miaozu.jpg',
				desc: '银饰、芦笙舞'
			},
			{
				name: '回族',
				population: '约69万',
				img: 'img/huizu.jpg',
				desc: '清真饮食文化'
			},
			{
				name: '傈僳族',
				population: '约66万',
				img: 'img/lisuzu.webp',
				desc: '刀杆节、三弦舞'
			},
			{
				name: '拉祜族',
				population: '约47万',
				img: 'img/lahuzu.webp',
				desc: '葫芦节'
			},
			{
				name: '佤族',
				population: '约38万',
				img: 'img/wazu.webp',
				desc: '木鼓节'
			}
		],
		minorityPopulation: '约1530万',
		ethnicCount: 25,
		carouselImages: [{
				url: 'img/Yunnan/daligucheng.jpeg',
				caption: '大理古城'
			},
			{
				url: 'img/Yunnan/daizuposhuijie.jpg',
				caption: '傣族泼水节'
			},
			{
				url: 'img/Yunnan/hanititian.jpg',
				caption: '哈尼梯田'
			}
		],
		festivals: [{
				name: '泼水节',
				date: '公历4月13-15日',
				desc: '傣族新年，相互泼水祝福',
				img: 'img/Yunnan/poshuijie.jpg'
			},
			{
				name: '火把节',
				date: '农历六月廿四',
				desc: '彝族最盛大节日，点火把、赛马',
				img: 'img/Yunnan/huobajie.jpg'
			},
			{
				name: '三月街',
				date: '农历三月十五',
				desc: '白族传统盛会，商贸文化',
				img: 'img/Yunnan/sanyuejie.webp'
			},
			{
				name: '目瑙纵歌',
				date: '正月十五',
				desc: '景颇族万人舞蹈节',
				img: 'img/Yunnan/munaozongge.jpg'
			}
		],
		heritage: [{
				name: '傣族泼水节',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Yunnan/daizuposhuijieerhao.png'
			},
			{
				name: '彝族火把节',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Yunnan/yizuhuobajie.jpg'
			},
			{
				name: '白族扎染技艺',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Yunnan/baizuzaranjiyi.jpg'
			},
			{
				name: '哈尼梯田文化',
				level: '世界遗产',
				year: '2013',
				img: 'img/Yunnan/hanititianwenhua.webp'
			}
		],
		foods: [{
				name: '过桥米线',
				desc: '云南特色小吃，汤鲜味美',
				img: 'img/Yunnan/guoqiaomixian.png'
			},
			{
				name: '汽锅鸡',
				desc: '建水特产，汤汁鲜美',
				img: 'img/Yunnan/qiguoji.webp'
			},
			{
				name: '傣味手抓饭',
				desc: '傣族传统美食',
				img: 'img/Yunnan/daweishouzhuafan.webp'
			},
			{
				name: '宣威火腿',
				desc: '中国三大名腿之一',
				img: 'img/Yunnan/xuanweihuotui.png'
			}
		],
		architecture: [{
				name: '傣族竹楼',
				desc: '干栏式建筑，通风防潮',
				img: 'img/Yunnan/daizuzhulou.png'
			},
			{
				name: '彝族土掌房',
				desc: '平顶土墙，冬暖夏凉',
				img: 'img/Yunnan/yizutuzhangfang.png'
			},
			{
				name: '白族三坊一照壁',
				desc: '白族传统民居',
				img: 'img/Yunnan/baizusanfangyizhaobi.jpeg'
			}
		],
		crafts: [{
				name: '白族扎染',
				desc: '周城扎染，图案精美',
				img: 'img/Yunnan/baizuzaran.jpg'
			},
			{
				name: '彝族漆器',
				desc: '黑红黄三色，古朴典雅',
				img: 'img/Yunnan/yizuqiqi.jpg'
			},
			{
				name: '傣族织锦',
				desc: '色彩艳丽，纹样丰富',
				img: 'img/Yunnan/daizuzhijin.jpg'
			}
		],
		music: [{
				name: '纳西古乐',
				desc: '唐宋音乐活化石',
				img: 'img/Yunnan/naxiguyue.jpg'
			},
			{
				name: '彝族海菜腔',
				desc: '高亢嘹亮，国家级非遗',
				img: 'img/Yunnan/yizuhaicaiqiang.jpg'
			},
			{
				name: '傣族孔雀舞',
				desc: '优美灵动，民族瑰宝',
				img: 'img/Yunnan/daizukongquewu.webp'
			}
		],
		distribution: '主要分布于滇西、滇南、滇中地区，大理、楚雄、红河、西双版纳为民族自治州',
		costume: ['彝族服饰', '白族服饰', '傣族服饰', '哈尼族服饰'],
		unityMessage: '七彩云南，民族之乡。25个世居民族和睦共处，共同绘就民族团结进步的美丽画卷。'
	},
	'西藏自治区': {
		region: '西南',
		ethnicGroups: [{
				name: '藏族',
				population: '约300万',
				img: 'img/zangzu.png',
				desc: '藏传佛教、唐卡、藏戏'
			},
			{
				name: '汉族',
				population: '约40万',
				img: 'img/hanzu.png',
				desc: '援藏建设者'
			},
			{
				name: '门巴族',
				population: '约1.1万',
				img: 'img/menbazu.webp',
				desc: '藏东南独特文化'
			},
			{
				name: '珞巴族',
				population: '约0.4万',
				img: 'img/luobazu.jpg',
				desc: '原始狩猎文化'
			}
		],
		minorityPopulation: '约320万',
		ethnicCount: 6,
		carouselImages: [{
				url: 'img/Tibet/budalagong.jpeg',
				caption: '布达拉宫'
			},
			{
				url: 'img/Tibet/zangzutangka.jpg',
				caption: '藏族唐卡'
			},
			{
				url: 'img/Tibet/xuedunjieshaifo.webp',
				caption: '雪顿节晒佛'
			}
		],
		festivals: [{
				name: '藏历新年',
				date: '藏历正月初一',
				desc: '藏族最隆重庆典',
				img: 'img/Tibet/zanglixinnian.webp'
			},
			{
				name: '雪顿节',
				date: '藏历六月底',
				desc: '酸奶节、晒佛节',
				img: 'img/Tibet/xuedunjie.jpg'
			},
			{
				name: '望果节',
				date: '藏历八月',
				desc: '丰收节庆',
				img: 'img/Tibet/wangguojie.jpg'
			}
		],
		heritage: [{
				name: '藏戏',
				level: '人类非遗',
				year: '2009',
				img: 'img/Tibet/zangxi.webp'
			},
			{
				name: '唐卡',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Tibet/tangka.webp'
			},
			{
				name: '格萨尔史诗',
				level: '人类非遗',
				year: '2009',
				img: 'img/Tibet/gesaershishi.webp'
			}
		],
		foods: [{
				name: '糌粑',
				desc: '青稞炒面，藏族主食',
				img: 'img/Tibet/zanba.jpg'
			},
			{
				name: '酥油茶',
				desc: '藏族传统饮品',
				img: 'img/Tibet/suyoucha.jpg'
			},
			{
				name: '牦牛肉干',
				desc: '高原特产',
				img: 'img/Tibet/maoniurougan.webp'
			}
		],
		architecture: [{
				name: '布达拉宫',
				desc: '世界文化遗产，藏式建筑巅峰',
				img: 'img/Tibet/budalagongerhao.jpeg'
			},
			{
				name: '藏式碉房',
				desc: '石砌碉楼，坚固美观',
				img: 'img/Tibet/zangshidiaofang.jpeg'
			},
			{
				name: '大昭寺',
				desc: '藏传佛教圣地',
				img: 'img/Tibet/dazhaosi.jpg'
			}
		],
		crafts: [{
				name: '唐卡',
				desc: '藏族卷轴画，宗教艺术',
				img: 'img/Tibet/tangkaerhao.jpeg'
			},
			{
				name: '藏毯',
				desc: '手工编织，图案精美',
				img: 'img/Tibet/zangtan.webp'
			},
			{
				name: '藏刀',
				desc: '藏族传统工艺品',
				img: 'img/Tibet/zangdao.webp'
			}
		],
		music: [{
				name: '藏戏',
				desc: '面具舞蹈，史诗故事',
				img: 'img/Tibet/zangxierhao.webp'
			},
			{
				name: '藏族民歌',
				desc: '高亢悠扬，抒发情感',
				img: 'img/Tibet/zangzuminge.webp'
			},
			{
				name: '锅庄舞',
				desc: '圆圈舞，欢快热烈',
				img: 'img/Tibet/guozhuangwu.jpg'
			}
		],
		distribution: '主要分布于拉萨、日喀则、昌都、山南、林芝、那曲、阿里等地',
		costume: ['藏族服饰', '门巴族服饰', '珞巴族服饰'],
		unityMessage: '雪域高原，圣洁西藏。藏族同胞与各族人民一起，守护着这片神圣的土地，共同迈向美好未来。'
	},
	'陕西省': {
		region: '西北',
		ethnicGroups: [{
				name: '汉族',
				population: '约3900万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '回族',
				population: '约15万',
				img: 'img/huizu.jpg',
				desc: '西安、宝鸡、咸阳'
			},
			{
				name: '满族',
				population: '约1.5万',
				img: 'img/manzu.jfif',
				desc: '散居'
			}
		],
		minorityPopulation: '约18万',
		ethnicCount: 54,
		carouselImages: [{
				url: 'img/Shanxi/xianzhonglou.png',
				caption: '西安钟楼'
			},
			{
				url: 'img/Shanxi/bingmayong.jpg',
				caption: '兵马俑'
			},
			{
				url: 'img/Shanxi/huiminjie.jpg',
				caption: '回民街'
			}
		],
		festivals: [{
				name: '开斋节',
				date: '伊斯兰教历十月一日',
				desc: '回族传统节日',
				img: 'img/Shanxi/kaizaijie.webp'
			},
			{
				name: '春节社火',
				date: '春节期间',
				desc: '关中地区传统民俗',
				img: 'img/Shanxi/chunjieshehuo.jpg'
			}
		],
		heritage: [{
				name: '秦腔',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Shanxi/qinqiang.jpeg'
			},
			{
				name: '安塞腰鼓',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Shanxi/ansaiyaogu.jpg'
			},
			{
				name: '皮影戏',
				level: '人类非遗',
				year: '2011',
				img: 'img/Shanxi/piyingxi.webp'
			}
		],
		foods: [{
				name: '羊肉泡馍',
				desc: '西安名吃',
				img: 'img/Shanxi/yangroupaomo.jpg'
			},
			{
				name: '肉夹馍',
				desc: '陕西特色',
				img: 'img/Shanxi/roujiamo.jpg'
			},
			{
				name: '凉皮',
				desc: '陕西小吃',
				img: 'img/Shanxi/liangpi.jpeg'
			}
		],
		architecture: [{
				name: '兵马俑',
				desc: '世界第八大奇迹',
				img: 'img/Shanxi/bingmayongerhao.webp'
			},
			{
				name: '大雁塔',
				desc: '唐代佛塔',
				img: 'img/Shanxi/dayanta.jpg'
			},
			{
				name: '钟楼',
				desc: '西安地标',
				img: 'img/Shanxi/zhonglou.jpg'
			}
		],
		crafts: [{
				name: '凤翔泥塑',
				desc: '民间泥塑艺术',
				img: 'img/Shanxi/fengxiangnisu.webp'
			},
			{
				name: '陕北剪纸',
				desc: '剪纸艺术',
				img: 'img/Shanxi/shanbeijianzhi.jpg'
			}
		],
		music: [{
				name: '秦腔',
				desc: '西北戏曲，慷慨激昂',
				img: 'img/Shanxi/qinqiangerhao.png'
			},
			{
				name: '安塞腰鼓',
				desc: '陕北民间鼓舞',
				img: 'img/Shanxi/ansaiyaoguerhao.jpg'
			}
		],
		distribution: '主要分布于西安、宝鸡、咸阳等地',
		costume: ['回族服饰'],
		unityMessage: '三秦大地，千年古都。各民族共同守护华夏文明根脉。'
	},
	'甘肃省': {
		region: '西北',
		ethnicGroups: [{
				name: '汉族',
				population: '约2200万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '回族',
				population: '约130万',
				img: 'img/huizu.jpg',
				desc: '临夏回族自治州'
			},
			{
				name: '藏族',
				population: '约50万',
				img: 'img/zangzu.png',
				desc: '甘南藏族自治州'
			},
			{
				name: '东乡族',
				population: '约55万',
				img: 'img/dongxiangzu.jpg',
				desc: '东乡族自治县'
			},
			{
				name: '保安族',
				population: '约2万',
				img: 'img/baoanzi.webp',
				desc: '保安腰刀'
			},
			{
				name: '裕固族',
				population: '约1.4万',
				img: 'img/yuguzu.jfif',
				desc: '祁连山下'
			},
			{
				name: '蒙古族',
				population: '约1.5万',
				img: 'img/mengguzu.jpg',
				desc: '肃北蒙古族自治县'
			}
		],
		minorityPopulation: '约240万',
		ethnicCount: 45,
		carouselImages: [{
				url: 'img/Gansu/dunhuangmogaoaku.jpeg',
				caption: '敦煌莫高窟'
			},
			{
				url: 'img/Gansu/yueyaquan.jpeg',
				caption: '月牙泉'
			},
			{
				url: 'img/Gansu/ganancaoyuan.jpg',
				caption: '甘南草原'
			}
		],
		festivals: [{
				name: '开斋节',
				date: '伊斯兰教历十月一日',
				desc: '回族、东乡族等节日',
				img: 'img/Gansu/kaizaijie.webp'
			},
			{
				name: '香浪节',
				date: '农历六月',
				desc: '藏族传统节日',
				img: 'img/Gansu/xianglangjie.jpg'
			}
		],
		heritage: [{
				name: '敦煌莫高窟',
				level: '世界遗产',
				year: '1987',
				img: 'img/Gansu/dunhuangmogaoaku erhao.jpg'
			},
			{
				name: '花儿',
				level: '人类非遗',
				year: '2009',
				img: 'img/Gansu/huaer.jpg'
			},
			{
				name: '保安族腰刀锻制技艺',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Gansu/baoanizuyaodaoduanzhijiyi.jpg'
			}
		],
		foods: [{
				name: '兰州牛肉面',
				desc: '兰州美食名片',
				img: 'img/Gansu/lanzhouniuroumian.jpg'
			},
			{
				name: '手抓羊肉',
				desc: '甘肃特色',
				img: 'img/Gansu/shouzhuayangrou.jpg'
			}
		],
		architecture: [{
				name: '敦煌莫高窟',
				desc: '东方艺术宝库',
				img: 'img/Gansu/dunhuangmogaoaku sanhao.webp'
			},
			{
				name: '嘉峪关',
				desc: '天下第一雄关',
				img: 'img/Gansu/jiayuguan.jpg'
			}
		],
		crafts: [{
				name: '保安族腰刀',
				desc: '传统刀剑工艺',
				img: 'img/Gansu/baoanizuyaodao.jpg'
			},
			{
				name: '洮砚',
				desc: '中国四大名砚之一',
				img: 'img/Gansu/taoyan.jpg'
			}
		],
		music: [{
			name: '花儿',
			desc: '西北民歌，高亢嘹亮',
			img: 'img/Gansu/huaer erhao.webp'
		}],
		distribution: '主要分布于临夏、甘南、张掖、酒泉等地',
		costume: ['回族服饰', '藏族服饰', '东乡族服饰', '裕固族服饰'],
		unityMessage: '如意甘肃，丝路走廊。各民族在河西走廊上书写交流交融的壮丽诗篇。'
	},
	'青海省': {
		region: '西北',
		ethnicGroups: [{
				name: '汉族',
				population: '约300万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '藏族',
				population: '约150万',
				img: 'img/zangzu.png',
				desc: '玉树、果洛、海南'
			},
			{
				name: '回族',
				population: '约80万',
				img: 'img/huizu.jpg',
				desc: '西宁、化隆'
			},
			{
				name: '土族',
				population: '约21万',
				img: 'img/tuzu.webp',
				desc: '互助土族自治县'
			},
			{
				name: '撒拉族',
				population: '约12万',
				img: 'img/salazu.webp',
				desc: '循化撒拉族自治县'
			},
			{
				name: '蒙古族',
				population: '约10万',
				img: 'img/mengguzu.jpg',
				desc: '河南蒙古族自治县'
			}
		],
		minorityPopulation: '约280万',
		ethnicCount: 48,
		carouselImages: [{
				url: 'img/Qinghai/qinghaihu.jpg',
				caption: '青海湖'
			},
			{
				url: 'img/Qinghai/taersi.jpg',
				caption: '塔尔寺'
			},
			{
				url: 'img/Qinghai/tuzunadunjie.jpg',
				caption: '土族纳顿节'
			}
		],
		festivals: [{
				name: '藏历新年',
				date: '藏历正月初一',
				desc: '藏族传统节日',
				img: 'img/Qinghai/zanglixinnian.webp'
			},
			{
				name: '纳顿节',
				date: '农历七月',
				desc: '土族传统节日',
				img: 'img/Qinghai/nadunjie.webp'
			}
		],
		heritage: [{
				name: '热贡艺术',
				level: '人类非遗',
				year: '2009',
				img: 'img/Qinghai/regongyishu.webp'
			},
			{
				name: '土族盘绣',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Qinghai/tuzupanxiu.jpg'
			}
		],
		foods: [{
				name: '青海酸奶',
				desc: '青海特色',
				img: 'img/Qinghai/qinghaisuanai.jpg'
			},
			{
				name: '手抓羊肉',
				desc: '草原美食',
				img: 'img/Qinghai/shouzhuayangrou.png'
			}
		],
		architecture: [{
				name: '塔尔寺',
				desc: '藏传佛教圣地',
				img: 'img/Qinghai/taersi.jpg'
			},
			{
				name: '土族庄廓',
				desc: '土族传统民居',
				img: 'img/Qinghai/tuzuzhuangkuo.png'
			}
		],
		crafts: [{
				name: '热贡唐卡',
				desc: '青海唐卡艺术',
				img: 'img/Qinghai/regongtangka.webp'
			},
			{
				name: '土族盘绣',
				desc: '土族刺绣',
				img: 'img/Qinghai/tuzupanxiuerhao.jpg'
			}
		],
		music: [{
			name: '藏族民歌',
			desc: '高亢悠扬',
			img: 'img/Qinghai/zangzuminge.webp'
		}],
		distribution: '主要分布于西宁、海东、海北、黄南、海南、果洛、玉树、海西等地',
		costume: ['藏族服饰', '土族服饰', '撒拉族服饰', '蒙古族服饰'],
		unityMessage: '大美青海，三江之源。各族儿女共同守护中华水塔。'
	},
	'宁夏回族自治区': {
		region: '西北',
		ethnicGroups: [{
				name: '回族',
				population: '约250万',
				img: 'img/huizu.jpg',
				desc: '全国最大的回族聚居区'
			},
			{
				name: '汉族',
				population: '约430万',
				img: 'img/hanzu.png',
				desc: '主体民族'
			},
			{
				name: '满族',
				population: '约1万',
				img: 'img/manzu.jfif',
				desc: '散居'
			}
		],
		minorityPopulation: '约255万',
		ethnicCount: 35,
		carouselImages: [{
				url: 'img/Ningxia/shahu.jpg',
				caption: '沙湖'
			},
			{
				url: 'img/Ningxia/xiwawangling.jpg',
				caption: '西夏王陵'
			},
			{
				url: 'img/Ningxia/huizuqingzhensi.jpg',
				caption: '回族清真寺'
			}
		],
		festivals: [{
				name: '开斋节',
				date: '伊斯兰教历十月一日',
				desc: '回族最重要的节日',
				img: 'img/Ningxia/kaizaijie.png'
			},
			{
				name: '古尔邦节',
				date: '伊斯兰教历十二月十日',
				desc: '宰牲节',
				img: 'img/Ningxia/gurbangjie.jpg'
			}
		],
		heritage: [{
				name: '回族花儿',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Ningxia/huizuhuaer.webp'
			},
			{
				name: '回族剪纸',
				level: '国家级非遗',
				year: '2008',
				img: 'img/Ningxia/huizujianzhi.jpg'
			}
		],
		foods: [{
				name: '手抓羊肉',
				desc: '宁夏特色美食',
				img: 'img/Ningxia/shouzhuayangrou.jpg'
			},
			{
				name: '羊肉臊子面',
				desc: '宁夏面食',
				img: 'img/Ningxia/yangrou saozi mian.png'
			},
			{
				name: '馓子',
				desc: '回族传统食品',
				img: 'img/Ningxia/sanzi.png'
			}
		],
		architecture: [{
				name: '西夏王陵',
				desc: '西夏王朝陵墓',
				img: 'img/Ningxia/xiwawangling erhao.jpg'
			},
			{
				name: '南关清真寺',
				desc: '银川清真寺',
				img: 'img/Ningxia/nanguanqingzhensi.jpg'
			}
		],
		crafts: [{
				name: '回族剪纸',
				desc: '回族传统剪纸艺术',
				img: 'img/Ningxia/huizujianzhi.jpg'
			},
			{
				name: '贺兰石砚',
				desc: '宁夏名砚',
				img: 'img/Ningxia/helanshiyan.png'
			}
		],
		music: [{
			name: '回族花儿',
			desc: '回族民歌，高亢婉转',
			img: 'img/Ningxia/huizuhuaer erhao.webp'
		}],
		distribution: '全区分布，吴忠、固原、银川等地回族聚居',
		costume: ['回族服饰'],
		unityMessage: '塞上江南，回乡风情。回汉各族同胞携手共建美丽新宁夏。'
	},
	'新疆维吾尔自治区': {
		region: '西北',
		ethnicGroups: [{
				name: '维吾尔族',
				population: '约1120万',
				img: 'img/weiwuerzu.webp',
				desc: '木卡姆、麦西热甫'
			},
			{
				name: '汉族',
				population: '约850万',
				img: 'img/hanzu.png',
				desc: '主体民族之一'
			},
			{
				name: '哈萨克族',
				population: '约140万',
				img: 'img/hasakezu.jpg',
				desc: '阿肯弹唱、冬不拉'
			},
			{
				name: '回族',
				population: '约98万',
				img: 'img/huizu.jpg',
				desc: '开斋节'
			},
			{
				name: '柯尔克孜族',
				population: '约18万',
				img: 'img/keerkezizu.jfif',
				desc: '玛纳斯史诗'
			},
			{
				name: '蒙古族',
				population: '约16万',
				img: 'img/mengguzu.jpg',
				desc: '那达慕'
			},
			{
				name: '塔吉克族',
				population: '约5万',
				img: 'img/tajikezu.jpeg',
				desc: '鹰舞、帕米尔高原'
			},
			{
				name: '锡伯族',
				population: '约4万',
				img: 'img/xibozu.webp',
				desc: '西迁节'
			},
			{
				name: '满族',
				population: '约2万',
				img: 'img/manzu.jfif',
				desc: '散居'
			},
			{
				name: '乌孜别克族',
				population: '约1.2万',
				img: 'img/wuzibiekezu.jpg',
				desc: '传统歌舞'
			},
			{
				name: '俄罗斯族',
				population: '约0.8万',
				img: 'img/eluosizu.webp',
				desc: '俄罗斯族风情'
			},
			{
				name: '达斡尔族',
				population: '约0.5万',
				img: 'img/dawoerzu.jpg',
				desc: '曲棍球'
			},
			{
				name: '塔塔尔族',
				population: '约0.3万',
				img: 'img/tataerzu.webp',
				desc: '传统音乐'
			}
		],
		minorityPopulation: '约1450万',
		ethnicCount: 47,
		carouselImages: [{
				url: 'img/Xinjiang/kanasihu.png',
				caption: '喀纳斯湖'
			},
			{
				url: 'img/Xinjiang/tianshantianchi.jpg',
				caption: '天山天池'
			},
			{
				url: 'img/Xinjiang/weiwuermukamu.jpg',
				caption: '维吾尔木卡姆'
			}
		],
		festivals: [{
				name: '肉孜节',
				date: '伊斯兰教历十月一日',
				desc: '开斋节',
				img: 'img/Xinjiang/rouzijie.jpg'
			},
			{
				name: '古尔邦节',
				date: '伊斯兰教历十二月十日',
				desc: '宰牲节',
				img: 'img/Xinjiang/gurbangjie.webp'
			},
			{
				name: '诺鲁孜节',
				date: '春分',
				desc: '新春佳节',
				img: 'img/Xinjiang/nuoluzijie.webp'
			}
		],
		heritage: [{
				name: '维吾尔木卡姆',
				level: '人类非遗',
				year: '2005',
				img: 'img/Xinjiang/weiwuermukamuerhao.jpg'
			},
			{
				name: '柯尔克孜族玛纳斯',
				level: '人类非遗',
				year: '2009',
				img: 'img/Xinjiang/keerkezizumanasi.jpg'
			},
			{
				name: '哈萨克族阿肯弹唱',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Xinjiang/hasakezuakentanchang.jpg'
			}
		],
		foods: [{
				name: '烤羊肉串',
				desc: '新疆特色美食',
				img: 'img/Xinjiang/kaoyangrouchuan.jpg'
			},
			{
				name: '大盘鸡',
				desc: '沙湾特色',
				img: 'img/Xinjiang/dapanji.webp'
			},
			{
				name: '手抓饭',
				desc: '维吾尔族传统主食',
				img: 'img/Xinjiang/shouzhuafan.webp'
			},
			{
				name: '馕',
				desc: '维吾尔族主食',
				img: 'img/Xinjiang/nang.webp'
			}
		],
		architecture: [{
				name: '艾提尕尔清真寺',
				desc: '新疆最大清真寺',
				img: 'img/Xinjiang/aitigaerqingzhensi.jpg'
			},
			{
				name: '维吾尔族民居',
				desc: '土坯建筑，庭院式布局',
				img: 'img/Xinjiang/weiwuerzuminju.webp'
			},
			{
				name: '喀什老城',
				desc: '维吾尔古城',
				img: 'img/Xinjiang/kashilaocheng.jpg'
			}
		],
		crafts: [{
				name: '维吾尔族刺绣',
				desc: '图案精美，色彩艳丽',
				img: 'img/Xinjiang/weiwuerzucixiu.jpg'
			},
			{
				name: '艾德莱斯绸',
				desc: '传统丝绸工艺',
				img: 'img/Xinjiang/aidelaisichou.jpg'
			},
			{
				name: '哈萨克族毡绣',
				desc: '毡房装饰',
				img: 'img/Xinjiang/hasakezuzhanxiu.jpg'
			}
		],
		music: [{
				name: '十二木卡姆',
				desc: '音乐史诗，人类瑰宝',
				img: 'img/Xinjiang/shiermukamu.jpg'
			},
			{
				name: '冬不拉弹唱',
				desc: '哈萨克族民间艺术',
				img: 'img/Xinjiang/dongbulatanchang.webp'
			},
			{
				name: '塔吉克族鹰舞',
				desc: '模仿雄鹰的舞蹈',
				img: 'img/Xinjiang/tajikezuyingwu.jpg'
			}
		],
		distribution: '主要分布于南疆喀什、和田、阿克苏及北疆伊犁、阿勒泰、塔城等地',
		costume: ['维吾尔族服饰', '哈萨克族服饰', '柯尔克孜族服饰', '塔吉克族服饰'],
		unityMessage: '大美新疆，歌舞之乡。各民族手足相亲，守望相助，共同建设美好家园。'
	}
};

// 默认数据
const defaultEthnicData = {
	region: '华东',
	ethnicGroups: [{
		name: '汉族',
		population: '占多数',
		img: 'img/hanzu.png',
		desc: '中华民族主体民族'
	}],
	minorityPopulation: '数据待补充',
	ethnicCount: 1,
	carouselImages: [{
		url: 'https://picsum.photos/id/101/800/400',
		caption: '中华民族一家亲'
	}],
	festivals: [{
		name: '传统节日',
		date: '春节/中秋',
		desc: '中华传统佳节',
		img: 'https://picsum.photos/id/26/80/80'
	}],
	heritage: [{
		name: '非物质文化遗产',
		level: '各级名录',
		year: '待完善',
		img: 'https://picsum.photos/id/30/80/80'
	}],
	foods: [{
		name: '地方特色美食',
		desc: '风味独特',
		img: 'https://picsum.photos/id/127/80/80'
	}],
	architecture: [{
		name: '传统建筑',
		desc: '地域特色鲜明',
		img: 'https://picsum.photos/id/96/80/80'
	}],
	crafts: [{
		name: '民间手工艺',
		desc: '匠心传承',
		img: 'https://picsum.photos/id/20/80/80'
	}],
	music: [{
		name: '地方戏曲',
		desc: '文化瑰宝',
		img: 'https://picsum.photos/id/105/80/80'
	}],
	distribution: '全省各地均有分布',
	costume: ['汉族传统服饰'],
	unityMessage: '中华民族一家亲，同心共筑中国梦。'
};

// 轮播图管理
let currentSlide = 0;
let slides = [];

function initCarousel(images) {
	slides = images;
	const track = document.getElementById('carouselTrack');
	const dotsContainer = document.getElementById('carouselDots');
	const totalSpan = document.getElementById('totalCount');

	totalSpan.textContent = images.length;

	// 创建幻灯片
	const slidesContainer = document.createElement('div');
	slidesContainer.className = 'carousel-slides';
	slidesContainer.style.display = 'flex';
	slidesContainer.style.transition = 'transform 0.5s ease';

	images.forEach((img, idx) => {
		const slide = document.createElement('div');
		slide.className = 'carousel-slide';
		slide.style.flex = '0 0 100%';
		slide.style.position = 'relative';
		slide.innerHTML = `
            <img src="${img.url}" alt="${img.caption}" class="carousel-img" onerror="this.src='https://picsum.photos/id/101/800/400'">
            <div class="carousel-caption">${img.caption}</div>
        `;
		slidesContainer.appendChild(slide);
	});

	track.innerHTML = '';
	track.appendChild(slidesContainer);

	// 创建圆点
	dotsContainer.innerHTML = images.map((_, idx) => `
        <div class="carousel-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}"></div>
    `).join('');

	// 绑定圆点点击事件
	document.querySelectorAll('.carousel-dot').forEach(dot => {
		dot.addEventListener('click', () => {
			const idx = parseInt(dot.dataset.index);
			goToSlide(idx);
		});
	});

	updateCarousel();
}

function goToSlide(index) {
	currentSlide = index;
	updateCarousel();
}

function nextSlide() {
	currentSlide = (currentSlide + 1) % slides.length;
	updateCarousel();
}

function prevSlide() {
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	updateCarousel();
}

function updateCarousel() {
	const slidesContainer = document.querySelector('.carousel-slides');
	const dots = document.querySelectorAll('.carousel-dot');
	const indexSpan = document.getElementById('carouselIndex');

	if (slidesContainer) {
		slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
	}

	dots.forEach((dot, idx) => {
		if (idx === currentSlide) {
			dot.classList.add('active');
		} else {
			dot.classList.remove('active');
		}
	});

	if (indexSpan) {
		indexSpan.innerHTML = `${currentSlide + 1} / <span id="totalCount">${slides.length}</span>`;
	}
}

// 获取URL参数
function getUrlParameter(name) {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get(name);
}

function goBack() {
	window.location.href = 'ethnicMAP.html';
}

function toggleFullscreen() {
	if (!document.fullscreenElement) {
		document.documentElement.requestFullscreen();
	} else {
		document.exitFullscreen();
	}
}

function updateTime() {
	const now = new Date();
	document.getElementById('currentTime').textContent =
		now.toLocaleString('zh-CN', {
			hour12: false
		});
}

function loadProvinceData() {
	const provinceName = getUrlParameter('province');
	if (!provinceName) {
		alert('缺少省份参数');
		goBack();
		return;
	}

	const data = provinceEthnicData[provinceName] || defaultEthnicData;

	document.title = `${provinceName} - 民族风情 | 中华锦绣民族地理信息平台`;
	document.getElementById('breadcrumbProvince').textContent = provinceName;
	document.getElementById('provinceName').textContent = provinceName;

	const regionBadge = document.getElementById('regionBadge');
	regionBadge.textContent = data.region;

	document.getElementById('ethnicCount').textContent = `${data.ethnicCount}+`;
	document.getElementById('populationCount').textContent = data.minorityPopulation;
	document.getElementById('heritageCount').textContent = data.heritage.length;
	document.getElementById('festivalCount').textContent = data.festivals.length;

	// 初始化轮播图
	if (data.carouselImages && data.carouselImages.length > 0) {
		initCarousel(data.carouselImages);
	} else {
		initCarousel([{
			url: 'https://picsum.photos/id/101/800/400',
			caption: `${provinceName}民族风情`
		}]);
	}

	renderEthnicList(data.ethnicGroups);
	renderDistribution(data.distribution);
	renderFestivalList(data.festivals);
	renderHeritageList(data.heritage);
	renderFoodList(data.foods);
	renderArchitectureList(data.architecture);
	renderCraftList(data.crafts);
	renderMusicList(data.music);

	document.getElementById('unityMessage').innerHTML = data.unityMessage;
}

function renderEthnicList(groups) {
	const container = document.getElementById('ethnicList');
	container.innerHTML = groups.map(g => `
        <div class="ethnic-item">
            <img src="${g.img || 'https://picsum.photos/id/101/48/48'}" class="item-img" alt="${g.name}" onerror="this.src='https://picsum.photos/id/101/48/48'">
            <div class="item-content">
                <div class="item-name">${g.name}</div>
                <div class="item-desc">${g.population} · ${g.desc}</div>
            </div>
        </div>
    `).join('');
}

function renderDistribution(text) {
	const container = document.getElementById('distributionText');
	container.textContent = text;
}

function renderCostumeGallery(costumes) {
	const container = document.getElementById('costumeGallery');
	container.innerHTML = costumes.map(c => `
        <div class="costume-item">
            <img src="https://picsum.photos/id/101/100/100" class="costume-img" alt="${c}" onerror="this.style.display='none'">
            <div class="costume-name">${c}</div>
        </div>
    `).join('');
}

function renderFestivalList(festivals) {
	const container = document.getElementById('festivalList');
	container.innerHTML = festivals.map(f => `
        <div class="festival-item">
            <img src="${f.img || 'https://picsum.photos/id/104/48/48'}" class="item-img" alt="${f.name}" onerror="this.src='https://picsum.photos/id/104/48/48'">
            <div class="item-content">
                <div class="item-name">${f.name}</div>
                <div class="item-desc">📅 ${f.date} · ${f.desc}</div>
            </div>
        </div>
    `).join('');
}

function renderHeritageList(heritage) {
	const container = document.getElementById('heritageList');
	container.innerHTML = heritage.map(h => `
        <div class="heritage-item">
            <img src="${h.img || 'https://picsum.photos/id/30/48/48'}" class="item-img" alt="${h.name}" onerror="this.src='https://picsum.photos/id/30/48/48'">
            <div class="item-content">
                <div class="item-name">${h.name}</div>
                <div class="item-desc">🏛️ ${h.level} · ${h.year}</div>
            </div>
        </div>
    `).join('');
}

function renderFoodList(foods) {
	const container = document.getElementById('foodList');
	container.innerHTML = foods.map(f => `
        <div class="food-item">
            <img src="${f.img || 'https://picsum.photos/id/127/48/48'}" class="item-img" alt="${f.name}" onerror="this.src='https://picsum.photos/id/127/48/48'">
            <div class="item-content">
                <div class="item-name">${f.name}</div>
                <div class="item-desc">${f.desc}</div>
            </div>
        </div>
    `).join('');
}

function renderArchitectureList(architecture) {
	const container = document.getElementById('architectureList');
	container.innerHTML = architecture.map(a => `
        <div class="architecture-item">
            <img src="${a.img || 'https://picsum.photos/id/96/48/48'}" class="item-img" alt="${a.name}" onerror="this.src='https://picsum.photos/id/96/48/48'">
            <div class="item-content">
                <div class="item-name">${a.name}</div>
                <div class="item-desc">${a.desc}</div>
            </div>
        </div>
    `).join('');
}

function renderCraftList(crafts) {
	const container = document.getElementById('craftList');
	container.innerHTML = crafts.map(c => `
        <div class="craft-item">
            <img src="${c.img || 'https://picsum.photos/id/20/48/48'}" class="item-img" alt="${c.name}" onerror="this.src='https://picsum.photos/id/20/48/48'">
            <div class="item-content">
                <div class="item-name">${c.name}</div>
                <div class="item-desc">${c.desc}</div>
            </div>
        </div>
    `).join('');
}

function renderMusicList(music) {
	const container = document.getElementById('musicList');
	container.innerHTML = music.map(m => `
        <div class="music-item">
            <img src="${m.img || 'https://picsum.photos/id/105/48/48'}" class="item-img" alt="${m.name}" onerror="this.src='https://picsum.photos/id/105/48/48'">
            <div class="item-content">
                <div class="item-name">${m.name}</div>
                <div class="item-desc">${m.desc}</div>
            </div>
        </div>
    `).join('');
}

function initParticles() {
	const canvas = document.getElementById('particleCanvas');
	if (!canvas) return;

	const ctx = canvas.getContext('2d');
	let width = window.innerWidth;
	let height = window.innerHeight;

	canvas.width = width;
	canvas.height = height;

	const particles = [];
	for (let i = 0; i < 50; i++) {
		particles.push({
			x: Math.random() * width,
			y: Math.random() * height,
			size: Math.random() * 2 + 1,
			speedX: (Math.random() - 0.5) * 0.5,
			speedY: (Math.random() - 0.5) * 0.5,
			opacity: Math.random() * 0.5 + 0.2
		});
	}

	function animate() {
		ctx.clearRect(0, 0, width, height);
		particles.forEach(p => {
			p.x += p.speedX;
			p.y += p.speedY;
			if (p.x > width) p.x = 0;
			if (p.x < 0) p.x = width;
			if (p.y > height) p.y = 0;
			if (p.y < 0) p.y = height;
			ctx.fillStyle = `rgba(212, 76, 47, ${p.opacity})`;
			ctx.beginPath();
			ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
			ctx.fill();
		});
		requestAnimationFrame(animate);
	}

	animate();

	window.addEventListener('resize', () => {
		width = window.innerWidth;
		height = window.innerHeight;
		canvas.width = width;
		canvas.height = height;
	});
}

function initAnimations() {
	const cards = document.querySelectorAll('.data-card, .province-overview, .culture-carousel');
	cards.forEach((card, index) => {
		card.style.opacity = '0';
		card.style.transform = 'translateY(20px)';
		setTimeout(() => {
			card.style.transition = 'all 0.6s ease';
			card.style.opacity = '1';
			card.style.transform = 'translateY(0)';
		}, index * 80);
	});
}

// 绑定轮播按钮事件
function bindCarouselEvents() {
	const prevBtn = document.getElementById('prevBtn');
	const nextBtn = document.getElementById('nextBtn');

	if (prevBtn) prevBtn.addEventListener('click', () => prevSlide());
	if (nextBtn) nextBtn.addEventListener('click', () => nextSlide());
}

document.addEventListener('DOMContentLoaded', function() {
	loadProvinceData();
	updateTime();
	setInterval(updateTime, 1000);
	initParticles();
	setTimeout(() => {
		initAnimations();
		bindCarouselEvents();
	}, 100);
});

window.toggleFullscreen = toggleFullscreen;
window.goBack = goBack;
window.prevSlide = prevSlide;
window.nextSlide = nextSlide;