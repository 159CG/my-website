// 中国34个省级行政区民族数据（完整版）
const provinceEthnicData = {
	'北京市': {
		region: '华北',
		ethnicGroups: [{
				name: '汉族',
				population: '约2100万',
				img: 'img/汉族.png',
				desc: '主体民族，多元文化融合'
			},
			{
				name: '满族',
				population: '约33万',
				img: 'img/满族.jfif',
				desc: '清代文化遗存'
			},
			{
				name: '回族',
				population: '约25万',
				img: 'img/回族.jpg',
				desc: '牛街清真文化'
			},
			{
				name: '蒙古族',
				population: '约8万',
				img: 'img/蒙古族.jpg',
				desc: '草原文化传承'
			}
		],
		minorityPopulation: '约80万',
		ethnicCount: 56,
		carouselImages: [{
				url: 'img/Beijing/故宫.jpg',
				caption: '北京故宫 - 中华文化瑰宝'
			},
			{
				url: 'img/Beijing/牛街.jpg',
				caption: '牛街清真寺 - 伊斯兰文化'
			},
			{
				url: 'img/Beijing/颐和园二号.jpg',
				caption: '颐和园 - 皇家园林艺术'
			}
		],
		festivals: [{
				name: '春节庙会',
				date: '农历正月初一至十五',
				desc: '北京传统庙会，民俗活动',
				img: 'img/Beijing/北京庙会.jpg'
			},
			{
				name: '中秋赏月',
				date: '农历八月十五',
				desc: '中秋传统文化活动',
				img: 'img/Beijing/中秋.jpg'
			}
		],
		heritage: [{
				name: '京剧',
				level: '人类非遗',
				year: '2010',
				img: 'img/Beijing/京剧.jpg'
			},
			{
				name: '北京皮影戏',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Beijing/皮影戏.jpg'
			}
		],
		foods: [{
				name: '北京烤鸭',
				desc: '中华名菜，外酥里嫩',
				img: 'img/Beijing/北京烤鸭.jpg'
			},
			{
				name: '涮羊肉',
				desc: '老北京火锅，鲜美滋补',
				img: 'img/Beijing/老北京涮羊肉.jpg'
			},
			{
				name: '豆汁焦圈',
				desc: '北京传统小吃',
				img: 'img/Beijing/豆汁.jpg'
			}
		],
		architecture: [{
				name: '故宫',
				desc: '世界文化遗产，明清皇家宫殿',
				img: 'img/Beijing/故宫二号.jpg'
			},
			{
				name: '四合院',
				desc: '北京传统民居建筑',
				img: 'img/Beijing/四合院.jpg'
			}
		],
		crafts: [{
				name: '景泰蓝',
				desc: '北京传统工艺品，铜胎掐丝珐琅',
				img: 'img/Beijing/景泰蓝.jpg'
			},
			{
				name: '玉雕',
				desc: '北京玉雕技艺精湛',
				img: 'img/Beijing/玉雕.jpg'
			}
		],
		music: [{
				name: '京剧',
				desc: '国粹艺术，唱念做打',
				img: 'img/Beijing/京剧二号.jpg'
			},
			{
				name: '相声',
				desc: '传统曲艺，幽默风趣',
				img: 'img/Beijing/相声.jpg'
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
				img: 'img/汉族.png',
				desc: '主体民族'
			},
			{
				name: '回族',
				population: '约17万',
				img: 'img/回族.jpg',
				desc: '西北角回族聚居区'
			},
			{
				name: '满族',
				population: '约8万',
				img: 'img/满族.jfif',
				desc: '满族文化传承'
			}
		],
		minorityPopulation: '约30万',
		ethnicCount: 48,
		carouselImages: [{
				url: 'img/Tianjin/版画.jpg',
				caption: '天津杨柳青年画'
			},
			{
				url: 'img/Tianjin/天津相声.jpg',
				caption: '天津相声文化'
			}
		],
		festivals: [{
			name: '杨柳青庙会',
			date: '农历正月',
			desc: '传统民俗活动',
			img: 'img/Tianjin/杨柳青庙会.jpg'
		}],
		heritage: [{
				name: '杨柳青木版年画',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Tianjin/版画.jpg'
			},
			{
				name: '泥人张彩塑',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Tianjin/泥塑.jpg'
			}
		],
		foods: [{
				name: '狗不理包子',
				desc: '天津三绝之一',
				img: 'img/Tianjin/狗不理包子.jpg'
			},
			{
				name: '十八街麻花',
				desc: '酥脆香甜',
				img: 'img/Tianjin/麻花.jpg'
			}
		],
		architecture: [{
			name: '五大道洋楼',
			desc: '万国建筑博览',
			img: 'img/Tianjin/五大道洋楼.jpg'
		}],
		crafts: [{
			name: '泥人张',
			desc: '泥塑艺术，栩栩如生',
			img: 'img/Tianjin/泥人张.jpg'
		}],
		music: [{
			name: '天津时调',
			desc: '天津地方曲艺',
			img: 'img/Tianjin/天津时调.jpg'
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
				img: 'img/汉族.png',
				desc: '主体民族'
			},
			{
				name: '满族',
				population: '约210万',
				img: 'img/满族.jfif',
				desc: '承德、秦皇岛聚居'
			},
			{
				name: '回族',
				population: '约55万',
				img: 'img/回族.jpg',
				desc: '沧州、保定散居'
			},
			{
				name: '蒙古族',
				population: '约18万',
				img: 'img/蒙古族.jpg',
				desc: '围场满蒙自治县'
			}
		],
		minorityPopulation: '约300万',
		ethnicCount: 55,
		carouselImages: [{
				url: 'img/Hebei/避暑山庄.jpg',
				caption: '承德避暑山庄'
			},
			{
				url: 'img/Hebei/山海关.jpg',
				caption: '山海关长城'
			}
		],
		festivals: [{
			name: '满族颁金节',
			date: '农历十月十三',
			desc: '满族命名日庆典',
			img: 'img/Hebei/满族颁金节.jpg'
		}],
		heritage: [{
				name: '河北梆子',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Hebei/河北梆子.jpg'
			},
			{
				name: '吴桥杂技',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Hebei/吴桥杂技.jpg'
			}
		],
		foods: [{
				name: '驴肉火烧',
				desc: '保定特色小吃',
				img: 'img/Hebei/驴肉火烧.jpg'
			},
			{
				name: '承德满族八大碗',
				desc: '满族传统宴席',
				img: 'img/Hebei/八大件.jpg'
			}
		],
		architecture: [{
				name: '承德避暑山庄',
				desc: '世界文化遗产，清代皇家园林',
				img: 'img/Hebei/避暑山庄.jpg'
			},
			{
				name: '山海关',
				desc: '天下第一关',
				img: 'img/Hebei/山海关.jpg'
			}
		],
		crafts: [{
			name: '蔚县剪纸',
			desc: '窗花艺术，刀工细腻',
			img: 'img/Hebei/剪纸.jpg'
		}],
		music: [{
			name: '河北梆子',
			desc: '慷慨激越，燕赵之声',
			img: 'img/Hebei/河北梆子.jpg'
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
				img: 'img/汉族.png',
				desc: '主体民族'
			},
			{
				name: '回族',
				population: '约6万',
				img: 'img/回族.jpg',
				desc: '太原、大同散居'
			}
		],
		minorityPopulation: '约7万',
		ethnicCount: 53,
		carouselImages: [{
				url: 'img/Shanxi/平遥古城二号.jpg',
				caption: '平遥古城'
			},
			{
				url: 'img/Shanxi/云冈石窟.jpg',
				caption: '云冈石窟'
			}
		],
		festivals: [{
			name: '平遥中国年',
			date: '春节期间',
			desc: '古城民俗活动',
			img: 'img/Shanxi/中国年.jpg'
		}],
		heritage: [{
				name: '晋剧',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Shanxi/晋剧.jpg'
			},
			{
				name: '平遥推光漆器',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Shanxi/漆器.jpg'
			}
		],
		foods: [{
				name: '刀削面',
				desc: '山西面食代表',
				img: 'img/Shanxi/刀削面.jpg'
			},
			{
				name: '过油肉',
				desc: '传统晋菜',
				img: 'img/Shanxi/过油肉.jpg'
			}
		],
		architecture: [{
				name: '平遥古城',
				desc: '世界文化遗产，保存最完整的古城',
				img: 'img/Shanxi/平遥古城.jpg'
			},
			{
				name: '乔家大院',
				desc: '晋商文化代表',
				img: 'img/Shanxi/乔家大院.jpg'
			}
		],
		crafts: [{
			name: '平遥推光漆器',
			desc: '漆艺瑰宝，光泽照人',
			img: 'img/Shanxi/漆器二号.jpg'
		}],
		music: [{
			name: '晋剧',
			desc: '山西地方戏曲',
			img: 'img/Shanxi/晋剧二号.jfif'
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
				img: 'img/蒙古族.jpg',
				desc: '那达慕、马头琴、长调'
			},
			{
				name: '汉族',
				population: '约2000万',
				img: 'img/汉族.png',
				desc: '主体民族'
			},
			{
				name: '满族',
				population: '约45万',
				img: 'img/满族.jfif',
				desc: '满族剪纸'
			},
			{
				name: '回族',
				population: '约21万',
				img: 'img/回族.jpg',
				desc: '清真饮食'
			}
		],
		minorityPopulation: '约500万',
		ethnicCount: 49,
		carouselImages: [{
				url: 'img/InnerMongolia/那达慕大会.jpg',
				caption: '那达慕大会 - 草原盛会'
			},
			{
				url: 'img/InnerMongolia/马头琴.jpg',
				caption: '马头琴 - 草原之音'
			},
			{
				url: 'img/InnerMongolia/草原.jpg',
				caption: '呼伦贝尔草原'
			}
		],
		festivals: [{
				name: '那达慕大会',
				date: '七八月',
				desc: '赛马、摔跤、射箭',
				img: 'img/InnerMongolia/那达慕二号.jpg'
			},
			{
				name: '祭敖包',
				date: '农历五月',
				desc: '蒙古族传统祭祀',
				img: 'img/InnerMongolia/敖包.webp'
			}
		],
		heritage: [{
				name: '蒙古族长调民歌',
				level: '人类非遗',
				year: '2005',
				img: 'img/InnerMongolia/长调民歌.jfif'
			},
			{
				name: '蒙古族呼麦',
				level: '人类非遗',
				year: '2009',
				img: 'img/InnerMongolia/呼麦.jpg'
			},
			{
				name: '马头琴音乐',
				level: '国家级非遗',
				year: '2006',
				img: 'img/InnerMongolia/马头琴二号.jpg'
			}
		],
		foods: [{
				name: '手把肉',
				desc: '蒙古族传统美食',
				img: 'img/InnerMongolia/手把肉.jfif'
			},
			{
				name: '奶茶',
				desc: '咸奶茶，待客佳品',
				img: 'img/InnerMongolia/奶茶.jfif'
			},
			{
				name: '烤全羊',
				desc: '盛大宴席主菜',
				img: 'img/InnerMongolia/烤全羊.jpg'
			}
		],
		architecture: [{
				name: '蒙古包',
				desc: '传统毡房，便于迁徙',
				img: 'img/InnerMongolia/蒙古包.jfif'
			},
			{
				name: '藏传佛教寺庙',
				desc: '蒙藏建筑风格融合',
				img: 'img/InnerMongolia/寺庙.png'
			}
		],
		crafts: [{
				name: '蒙古族刺绣',
				desc: '精美图案，民族特色',
				img: 'img/InnerMongolia/刺绣.jpg'
			},
			{
				name: '银器制作',
				desc: '蒙古族传统工艺',
				img: 'img/InnerMongolia/银器.webp'
			}
		],
		music: [{
				name: '马头琴',
				desc: '蒙古族传统乐器',
				img: 'img/InnerMongolia/马头琴.jpg'
			},
			{
				name: '呼麦',
				desc: '喉音艺术，天籁之声',
				img: 'img/InnerMongolia/呼麦.jpg'
			},
			{
				name: '长调民歌',
				desc: '悠扬高亢，草原之魂',
				img: 'img/InnerMongolia/长调民歌.jfif'
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
				img: 'img/满族.jfif',
				desc: '旗袍发源地，满族文化'
			},
			{
				name: '汉族',
				population: '约3500万',
				img: 'img/汉族.png',
				desc: '主体民族'
			},
			{
				name: '蒙古族',
				population: '约70万',
				img: 'img/蒙古族.jpg',
				desc: '阜新蒙古族自治县'
			},
			{
				name: '回族',
				population: '约25万',
				img: 'img/回族.jpg',
				desc: '沈阳、大连散居'
			},
			{
				name: '朝鲜族',
				population: '约24万',
				img: 'img/朝鲜族.jfif',
				desc: '沈阳、丹东聚居'
			},
			{
				name: '锡伯族',
				population: '约13万',
				img: 'img/锡伯族.webp',
				desc: '沈北新区锡伯族聚居'
			}
		],
		minorityPopulation: '约670万',
		ethnicCount: 51,
		carouselImages: [{
				url: 'img/Liaoning/沈阳故宫.jfif',
				caption: '沈阳故宫 - 满清文化'
			},
			{
				url: 'img/Liaoning/西迁节.jpg',
				caption: '锡伯族西迁节'
			}
		],
		festivals: [{
				name: '满族颁金节',
				date: '农历十月十三',
				desc: '满族命名日',
				img: 'img/Liaoning/满族颁金节.jpg'
			},
			{
				name: '锡伯族西迁节',
				date: '农历四月十八',
				desc: '纪念西迁戍边',
				img: 'img/Liaoning/西迁节二号.webp'
			}
		],
		heritage: [{
				name: '满族剪纸',
				level: '国家级非遗',
				year: '2008',
				img: 'img/Liaoning/满族剪纸.jpg'
			},
			{
				name: '朝鲜族农乐舞',
				level: '国家级非遗',
				year: '2008',
				img: 'img/Liaoning/农乐舞.webp'
			}
		],
		foods: [{
				name: '满族八大碗',
				desc: '满族传统宴席',
				img: 'img/Liaoning/八大件.jpg'
			},
			{
				name: '朝鲜族冷面',
				desc: '酸辣爽口',
				img: 'img/Liaoning/冷面.webp'
			}
		],
		architecture: [{
				name: '沈阳故宫',
				desc: '清朝入关前皇宫',
				img: 'img/Liaoning/沈阳故宫二号.jpg'
			},
			{
				name: '满族民居',
				desc: '口袋房，万字炕',
				img: 'img/Liaoning/满族民居.jpg'
			}
		],
		crafts: [{
				name: '满族刺绣',
				desc: '精美绣品，民族特色',
				img: 'img/Liaoning/满族刺绣.jpg'
			},
			{
				name: '锡伯族刺绣',
				desc: '独特纹样',
				img: 'img/Liaoning/锡伯族刺绣.jpg'
			}
		],
		music: [{
			name: '满族萨满音乐',
			desc: '原始宗教音乐',
			img: 'img/Liaoning/萨满.webp'
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
				img: 'img/汉族.png',
				desc: '主体民族'
			},
			{
				name: '朝鲜族',
				population: '约115万',
				img: 'img/朝鲜族.jfif',
				desc: '延边朝鲜族自治州'
			},
			{
				name: '满族',
				population: '约87万',
				img: 'img/满族.jpg',
				desc: '吉林市、四平'
			},
			{
				name: '蒙古族',
				population: '约15万',
				img: 'img/蒙古族.jpg',
				desc: '前郭尔罗斯蒙古族自治县'
			}
		],
		minorityPopulation: '约220万',
		ethnicCount: 48,
		carouselImages: [{
				url: 'img/Jilin/天池.jpg',
				caption: '长白山天池'
			},
			{
				url: 'img/Jilin/农乐舞.jpg',
				caption: '朝鲜族农乐舞'
			}
		],
		festivals: [{
				name: '朝鲜族农乐舞节',
				date: '农历七月十五',
				desc: '丰收庆典',
				img: 'img/Jilin/农乐舞.webp'
			},
			{
				name: '满族颁金节',
				date: '农历十月十三',
				desc: '满族命名日',
				img: 'img/Jilin/满族颁金节.jpg'
			}
		],
		heritage: [{
				name: '朝鲜族农乐舞',
				level: '人类非遗',
				year: '2009',
				img: 'img/Jilin/农乐舞.webp'
			},
			{
				name: '朝鲜族泡菜制作',
				level: '国家级非遗',
				year: '2008',
				img: 'img/Jilin/泡菜.jpg'
			}
		],
		foods: [{
				name: '朝鲜族泡菜',
				desc: '韩国泡菜发源地',
				img: 'img/Jilin/泡菜二号.webp'
			},
			{
				name: '打糕',
				desc: '朝鲜族传统食品',
				img: 'img/Jilin/打糕.webp'
			}
		],
		architecture: [{
			name: '朝鲜族民居',
			desc: '火炕文化，温突',
			img: 'img/Jilin/朝鲜族民居.jpg'
		}],
		crafts: [{
			name: '朝鲜族服饰',
			desc: '白色象征纯洁',
			img: 'img/Jilin/朝鲜族服饰.webp'
		}],
		music: [{
			name: '朝鲜族农乐舞',
			desc: '丰收舞蹈，欢快热烈',
			img: 'img/Jilin/农乐舞二号.webp'
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
				img: 'img/汉族.png',
				desc: '主体民族'
			},
			{
				name: '满族',
				population: '约80万',
				img: 'img/满族.jfif',
				desc: '哈尔滨、齐齐哈尔'
			},
			{
				name: '朝鲜族',
				population: '约45万',
				img: 'img/朝鲜族.jfif',
				desc: '牡丹江、鸡西'
			},
			{
				name: '蒙古族',
				population: '约15万',
				img: 'img/蒙古族.jpg',
				desc: '杜尔伯特蒙古族自治县'
			},
			{
				name: '鄂伦春族',
				population: '约0.4万',
				img: 'img/鄂伦春族.jpeg',
				desc: '狩猎文化，桦皮工艺'
			},
			{
				name: '赫哲族',
				population: '约0.5万',
				img: 'img/赫哲族.png',
				desc: '鱼皮衣，渔猎文化'
			},
			{
				name: '达斡尔族',
				population: '约4万',
				img: 'img/达斡尔族.jpg',
				desc: '曲棍球之乡'
			}
		],
		minorityPopulation: '约150万',
		ethnicCount: 53,
		carouselImages: [{
				url: 'img/Heilongjiang/冰雪大世界.jfif',
				caption: '冰雪大世界'
			},
			{
				url: 'img/Heilongjiang/鱼皮衣.jpg',
				caption: '赫哲族鱼皮衣'
			}
		],
		festivals: [{
				name: '鄂伦春族篝火节',
				date: '农历六月',
				desc: '篝火晚会，歌舞表演',
				img: 'img/Heilongjiang/篝火节.webp'
			},
			{
				name: '赫哲族乌日贡节',
				date: '农历五月',
				desc: '渔猎文化节庆',
				img: 'img/Heilongjiang/乌日贡节.webp'
			}
		],
		heritage: [{
				name: '赫哲族鱼皮制作技艺',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Heilongjiang/鱼皮技艺.webp'
			},
			{
				name: '鄂伦春族桦皮制作',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Heilongjiang/桦皮.jfif'
			}
		],
		foods: [{
				name: '赫哲族刹生鱼',
				desc: '生鱼片美食',
				img: 'img/Heilongjiang/刹生鱼.webp'
			},
			{
				name: '小鸡炖蘑菇',
				desc: '东北名菜',
				img: 'img/Heilongjiang/小鸡炖蘑菇.jpg'
			}
		],
		architecture: [{
			name: '鄂伦春族撮罗子',
			desc: '桦树皮帐篷',
			img: 'img/Heilongjiang/撮罗子.jpg'
		}],
		crafts: [{
				name: '赫哲族鱼皮衣',
				desc: '世界唯一鱼皮服饰',
				img: 'img/Heilongjiang/鱼皮衣.jpg'
			},
			{
				name: '鄂伦春族桦皮盒',
				desc: '桦树皮工艺',
				img: 'img/Heilongjiang/桦皮盒.webp'
			}
		],
		music: [{
			name: '赫哲族伊玛堪',
			desc: '说唱史诗',
			img: 'img/Heilongjiang/伊玛堪.jpg'
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
				img: 'img/汉族.png',
				desc: '主体民族'
			},
			{
				name: '回族',
				population: '约7万',
				img: 'img/回族.jpg',
				desc: '沪西清真寺'
			},
			{
				name: '满族',
				population: '约2万',
				img: 'img/满族.jfif',
				desc: '散居'
			}
		],
		minorityPopulation: '约10万',
		ethnicCount: 55,
		carouselImages: [{
				url: 'img/Shanghai/外滩.jfif',
				caption: '上海外滩'
			},
			{
				url: 'img/Shanghai/豫园灯会.jpg',
				caption: '豫园灯会'
			}
		],
		festivals: [{
			name: '豫园元宵灯会',
			date: '正月十五',
			desc: '传统民俗灯会',
			img: 'img/Shanghai/豫园元宵灯会.jfif'
		}],
		heritage: [{
				name: '沪剧',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Shanghai/沪剧.webp'
			},
			{
				name: '江南丝竹',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Shanghai江南丝竹.jfif'
			}
		],
		foods: [{
				name: '小笼包',
				desc: '南翔小笼，汤汁鲜美',
				img: 'img/Shanghai/小笼包.jpg'
			},
			{
				name: '生煎馒头',
				desc: '上海特色小吃',
				img: 'img/Shanghai/生煎馒头.webp'
			}
		],
		architecture: [{
			name: '石库门',
			desc: '上海特色民居',
			img: 'img/Shanghai/石库门.webp'
		}],
		crafts: [{
			name: '嘉定竹刻',
			desc: '竹刻艺术',
			img: 'img/Shanghai/嘉定竹刻.webp'
		}],
		music: [{
			name: '沪剧',
			desc: '上海地方戏曲',
			img: 'img/Shanghai/沪剧二号.webp'
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
				img: 'img/汉族.png',
				desc: '主体民族'
			},
			{
				name: '回族',
				population: '约25万',
				img: 'img/回族.jpg',
				desc: '南京、扬州散居'
			},
			{
				name: '满族',
				population: '约2万',
				img: 'img/满族.jfif',
				desc: '散居'
			}
		],
		minorityPopulation: '约30万',
		ethnicCount: 55,
		carouselImages: [{
				url: 'img/Jiangsu/苏州园林.jpeg',
				caption: '苏州园林'
			},
			{
				url: 'img/Jiangsu/夫子庙.jfif',
				caption: '南京夫子庙'
			}
		],
		festivals: [{
			name: '秦淮灯会',
			date: '春节至元宵',
			desc: '南京传统灯会',
			img: 'img/Jiangsu/秦淮灯会.jpg'
		}],
		heritage: [{
				name: '昆曲',
				level: '人类非遗',
				year: '2001',
				img: 'img/Jiangsu/昆曲.jpg'
			},
			{
				name: '苏绣',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Jiangsu/苏绣.jfif'
			},
			{
				name: '南京云锦',
				level: '人类非遗',
				year: '2009',
				img: 'img/Jiangsu/南京云锦.jfif'
			}
		],
		foods: [{
				name: '盐水鸭',
				desc: '南京特产',
				img: 'img/Jiangsu/盐水鸭.webp'
			},
			{
				name: '扬州炒饭',
				desc: '扬州美食代表',
				img: 'img/Jiangsu/扬州炒饭.webp'
			},
			{
				name: '阳澄湖大闸蟹',
				desc: '蟹中极品',
				img: 'img/Jiangsu/大闸蟹.webp'
			}
		],
		architecture: [{
			name: '苏州园林',
			desc: '世界文化遗产，江南园林典范',
			img: 'img/Jiangsu/苏州园林二号.jfif'
		}],
		crafts: [{
				name: '苏绣',
				desc: '中国四大名绣之一',
				img: 'img/Jiangsu/苏绣.jfif'
			},
			{
				name: '南京云锦',
				desc: '寸锦寸金',
				img: 'img/Jiangsu/南京云锦.jfif'
			},
			{
				name: '宜兴紫砂',
				desc: '陶艺瑰宝',
				img: 'img/Jiangsu/紫砂.webp',
			}
		],
		music: [{
				name: '昆曲',
				desc: '百戏之祖',
				img: 'img/Jiangsu/昆曲二号.webp'
			},
			{
				name: '苏州评弹',
				desc: '吴侬软语',
				img: 'img/Jiangsu/苏州评弹.jpg'
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
				img: 'img/汉族.png',
				desc: '主体民族'
			},
			{
				name: '畲族',
				population: '约17万',
				img: 'img/畲族.webp',
				desc: '景宁畲族自治县'
			},
			{
				name: '回族',
				population: '约4万',
				img: 'img/回族.jpg',
				desc: '杭州、宁波散居'
			},
			{
				name: '满族',
				population: '约2万',
				img: 'img/满族.jfif',
				desc: '散居'
			}
		],
		minorityPopulation: '约25万',
		ethnicCount: 54,
		carouselImages: [{
				url: 'img/Zhejiang/西湖.jpg',
				caption: '杭州西湖'
			},
			{
				url: 'img/Zhejiang/三月三.jif',
				caption: '畲族三月三'
			}
		],
		festivals: [{
			name: '畲族三月三',
			date: '农历三月初三',
			desc: '畲族传统节日，乌饭节',
			img: 'img/Zhejiang/三月三.jfif'
		}],
		heritage: [{
				name: '畲族民歌',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Zhejiang/民歌.jfif'
			},
			{
				name: '越剧',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Zhejiang/越剧.jpeg'
			}
		],
		foods: [{
				name: '西湖醋鱼',
				desc: '杭州名菜',
				img: 'img/Zhejiang/西湖醋鱼.webp'
			},
			{
				name: '宁波汤圆',
				desc: '传统小吃',
				img: 'img/Zhejiang/汤圆.webp'
			},
			{
				name: '畲族乌米饭',
				desc: '畲族传统美食',
				img: 'img/Zhejiang/乌米饭.jpeg'
			}
		],
		architecture: [{
			name: '畲族吊脚楼',
			desc: '依山而建',
			img: 'img/Zhejiang/吊脚楼.png'
		}],
		crafts: [{
				name: '畲族彩带',
				desc: '编织工艺',
				img: 'img/Zhejiang/彩带.webp'
			},
			{
				name: '龙泉青瓷',
				desc: '青瓷之都',
				img: 'img/Zhejiang/青瓷.webp'
			}
		],
		music: [{
			name: '越剧',
			desc: '江南戏曲代表',
			img: 'img/Zhejiang/越剧二号.webp'
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
				img: 'img/汉族.png',
				desc: '主体民族'
			},
			{
				name: '回族',
				population: '约30万',
				img: 'img/回族.jpg',
				desc: '阜阳、亳州、滁州'
			},
			{
				name: '畲族',
				population: '约0.2万',
				img: 'img/畲族.webp',
				desc: '宁国畲族乡'
			}
		],
		minorityPopulation: '约32万',
		ethnicCount: 52,
		carouselImages: [{
				url: 'img/Anhui/迎客松.jpg',
				caption: '黄山迎客松'
			},
			{
				url: 'img/Anhui/古村落.webp',
				caption: '宏村古村落'
			}
		],
		festivals: [{
			name: '畲族三月三',
			date: '农历三月初三',
			desc: '畲族传统节日',
			img: 'img/Anhui/三月三.jfif'
		}],
		heritage: [{
				name: '黄梅戏',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Anhui/黄梅戏.jfif'
			},
			{
				name: '徽剧',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Anhui/徽剧.jpg'
			}
		],
		foods: [{
				name: '臭鳜鱼',
				desc: '徽菜代表',
				img: 'img/Anhui/臭鳜鱼.jfif'
			},
			{
				name: '毛豆腐',
				desc: '徽州特色',
				img: 'img/Anhui/毛豆腐.jfif'
			}
		],
		architecture: [{
			name: '徽派建筑',
			desc: '白墙黛瓦，马头墙',
			img: 'img/Anhui/徽派建筑.jfif'
		}],
		crafts: [{
				name: '歙砚',
				desc: '中国四大名砚',
				img: 'img/Anhui/歙砚.jpg'
			},
			{
				name: '徽墨',
				desc: '文房四宝',
				img: 'img/Anhui/徽墨.webp'
			}
		],
		music: [{
			name: '黄梅戏',
			desc: '安徽地方戏曲',
			img: 'img/Anhui/黄梅戏二号.jpg'
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
				img: 'img/汉族.png',
				desc: '主体民族'
			},
			{
				name: '畲族',
				population: '约37万',
				img: 'img/畲族.webp',
				desc: '宁德、福州、漳州'
			},
			{
				name: '回族',
				population: '约12万',
				img: 'img/回族.jpg',
				desc: '泉州、厦门'
			},
			{
				name: '满族',
				population: '约0.5万',
				img: 'img/满族.jfif',
				desc: '散居'
			}
		],
		minorityPopulation: '约50万',
		ethnicCount: 54,
		carouselImages: [{
				url: 'img/Fujian/土楼.jpg',
				caption: '福建土楼'
			},
			{
				url: 'img/Fujian/畲族凤凰装.webp',
				caption: '畲族凤凰装'
			}
		],
		festivals: [{
			name: '畲族三月三',
			date: '农历三月初三',
			desc: '畲族传统节日',
			img: 'img/Fujian/三月三.jfif'
		}],
		heritage: [{
				name: '畲族民歌',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Fujian/民歌.jfif'
			},
			{
				name: '福建南音',
				level: '人类非遗',
				year: '2009',
				img: 'img/Fujian/福建男音.webp'
			}
		],
		foods: [{
				name: '佛跳墙',
				desc: '闽菜代表',
				img: 'img/Fujian/佛跳墙.webp'
			},
			{
				name: '沙县小吃',
				desc: '国民小吃',
				img: 'img/Fujian/沙县小吃.jpg'
			}
		],
		architecture: [{
			name: '福建土楼',
			desc: '世界文化遗产，客家民居',
			img: 'img/Fujian/福建土楼二号.jfif'
		}],
		crafts: [{
				name: '德化白瓷',
				desc: '中国白瓷之都',
				img: 'img/Fujian/白瓷.webp'
			},
			{
				name: '畲族彩带',
				desc: '畲族传统编织',
				img: 'img/Fujian/彩带.webp'
			}
		],
		music: [{
			name: '南音',
			desc: '中国音乐活化石',
			img: 'img/Fujian/南音.jpg'
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
				img: 'img/汉族.png',
				desc: '主体民族'
			},
			{
				name: '畲族',
				population: '约8万',
				img: 'img/畲族.webp',
				desc: '赣州、吉安、上饶'
			},
			{
				name: '回族',
				population: '约2万',
				img: 'img/回族.jpg',
				desc: '南昌、九江散居'
			}
		],
		minorityPopulation: '约12万',
		ethnicCount: 53,
		carouselImages: [{
				url: 'img/Jiangxi/庐山.jpg',
				caption: '庐山'
			},
			{
				url: 'img/Jiangxi/景德镇陶瓷.jfif',
				caption: '景德镇陶瓷'
			}
		],
		festivals: [{
			name: '畲族三月三',
			date: '农历三月初三',
			desc: '畲族传统节日',
			img: 'img/Jiangxi/三月三.jfif'
		}],
		heritage: [{
				name: '景德镇手工制瓷技艺',
				level: '人类非遗',
				year: '2006',
				img: 'img/Jiangxi/景德镇手工.webp'
			},
			{
				name: '赣剧',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Jiangxi/赣剧.webp'
			}
		],
		foods: [{
				name: '南昌瓦罐汤',
				desc: '江西特色',
				img: 'img/Jiangxi/瓦罐汤.webp'
			},
			{
				name: '赣南脐橙',
				desc: '中国名果',
				img: 'img/Jiangxi/脐橙.jfif'
			}
		],
		architecture: [{
			name: '婺源徽派建筑',
			desc: '最美乡村',
			img: 'img/Jiangxi/建筑.jfif'
		}],
		crafts: [{
			name: '景德镇瓷器',
			desc: '千年瓷都',
			img: 'img/Jiangxi/瓷器.jpg'
		}],
		music: [{
			name: '赣剧',
			desc: '江西地方戏曲',
			img: 'img/Jiangxi/赣剧二号.jfif'
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
				img: 'img/汉族.png',
				desc: '主体民族'
			},
			{
				name: '回族',
				population: '约50万',
				img: 'img/回族.jpg',
				desc: '德州、济南、菏泽'
			},
			{
				name: '满族',
				population: '约2万',
				img: 'img/满族.jfif',
				desc: '散居'
			}
		],
		minorityPopulation: '约54万',
		ethnicCount: 55,
		carouselImages: [{
				url: 'img/Shandong/泰山.jpg',
				caption: '泰山'
			},
			{
				url: 'img/Shandong/孔庙.jpg',
				caption: '曲阜孔庙'
			}
		],
		festivals: [{
				name: '开斋节',
				date: '伊斯兰教历十月一日',
				desc: '回族传统节日',
				img: 'img/Shandong/开斋节.jfif'
			},
			{
				name: '孔子文化节',
				date: '9月',
				desc: '祭孔大典',
				img: 'img/Shandong/孔子文化节.webp'
			}
		],
		heritage: [{
				name: '祭孔大典',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Shandong/祭孔大典.webp'
			},
			{
				name: '山东快书',
				level: '国家级非遗',
				year: '2006',
				img: 'img/Shandong/快书.webp'
			}
		],
		foods: [{
				name: '煎饼卷大葱',
				desc: '山东特色',
				img: 'img/Shandong/煎饼卷大葱.png'
			},
			{
				name: '德州扒鸡',
				desc: '山东名产',
				img: 'img/Shandong/扒鸡.webp'
			}
		],
		architecture: [{
				name: '曲阜三孔',
				desc: '世界文化遗产，儒家圣地',
				img: 'img/Shandong/曲阜三孔.jpg'
			},
			{
				name: '泰山',
				desc: '五岳独尊',
				img: 'img/Shandong/泰山.jfif'
			}
		],
		crafts: [{
				name: '潍坊风筝',
				desc: '风筝之都',
				img: 'img/Shandong/风筝.webp'
			},
			{
				name: '杨家埠年画',
				desc: '木板年画',
				img: 'img/Shandong/年画.webp'
			}
		],
		music: [{
			name: '山东快书',
			desc: '曲艺艺术',
			img: 'img/Shandong/快书.jfif'
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
				img: 'https://picsum.photos/id/26/100/100',
				desc: '主体民族'
			},
			{
				name: '回族',
				population: '约95万',
				img: 'https://picsum.photos/id/28/100/100',
				desc: '郑州、洛阳、开封、周口'
			},
			{
				name: '蒙古族',
				population: '约8万',
				img: 'https://picsum.photos/id/29/100/100',
				desc: '散居'
			},
			{
				name: '满族',
				population: '约1万',
				img: 'https://picsum.photos/id/27/100/100',
				desc: '散居'
			}
		],
		minorityPopulation: '约105万',
		ethnicCount: 55,
		carouselImages: [{
				url: 'https://picsum.photos/id/193/800/400',
				caption: '少林寺'
			},
			{
				url: 'https://picsum.photos/id/194/800/400',
				caption: '龙门石窟'
			}
		],
		festivals: [{
			name: '开斋节',
			date: '伊斯兰教历十月一日',
			desc: '回族传统节日',
			img: 'https://picsum.photos/id/28/80/80'
		}],
		heritage: [{
				name: '豫剧',
				level: '国家级非遗',
				year: '2006',
				img: 'https://picsum.photos/id/195/80/80'
			},
			{
				name: '少林功夫',
				level: '国家级非遗',
				year: '2006',
				img: 'https://picsum.photos/id/193/80/80'
			}
		],
		foods: [{
				name: '胡辣汤',
				desc: '河南早餐代表',
				img: 'https://picsum.photos/id/196/80/80'
			},
			{
				name: '烩面',
				desc: '河南面食代表',
				img: 'https://picsum.photos/id/197/80/80'
			}
		],
		architecture: [{
				name: '少林寺',
				desc: '禅宗祖庭',
				img: 'https://picsum.photos/id/193/80/80'
			},
			{
				name: '龙门石窟',
				desc: '世界文化遗产',
				img: 'https://picsum.photos/id/194/80/80'
			}
		],
		crafts: [{
				name: '唐三彩',
				desc: '唐代陶瓷艺术',
				img: 'https://picsum.photos/id/198/80/80'
			},
			{
				name: '朱仙镇木版年画',
				desc: '中国木版年画之源',
				img: 'https://picsum.photos/id/199/80/80'
			}
		],
		music: [{
			name: '豫剧',
			desc: '河南地方戏曲',
			img: 'https://picsum.photos/id/195/80/80'
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
				img: 'https://picsum.photos/id/26/100/100',
				desc: '主体民族'
			},
			{
				name: '土家族',
				population: '约230万',
				img: 'https://picsum.photos/id/36/100/100',
				desc: '恩施土家族苗族自治州'
			},
			{
				name: '苗族',
				population: '约20万',
				img: 'https://picsum.photos/id/37/100/100',
				desc: '恩施州'
			},
			{
				name: '回族',
				population: '约8万',
				img: 'https://picsum.photos/id/28/100/100',
				desc: '武汉、襄阳散居'
			},
			{
				name: '侗族',
				population: '约5万',
				img: 'https://picsum.photos/id/38/100/100',
				desc: '恩施州'
			}
		],
		minorityPopulation: '约270万',
		ethnicCount: 53,
		carouselImages: [{
				url: 'https://picsum.photos/id/200/800/400',
				caption: '恩施大峡谷'
			},
			{
				url: 'https://picsum.photos/id/201/800/400',
				caption: '土家摆手舞'
			}
		],
		festivals: [{
				name: '土家族摆手舞节',
				date: '正月',
				desc: '土家族传统舞蹈',
				img: 'https://picsum.photos/id/36/80/80'
			},
			{
				name: '苗族姊妹节',
				date: '农历三月',
				desc: '苗族情人节',
				img: 'https://picsum.photos/id/37/80/80'
			}
		],
		heritage: [{
				name: '土家族摆手舞',
				level: '国家级非遗',
				year: '2006',
				img: 'https://picsum.photos/id/201/80/80'
			},
			{
				name: '土家织锦西兰卡普',
				level: '国家级非遗',
				year: '2006',
				img: 'https://picsum.photos/id/202/80/80'
			}
		],
		foods: [{
				name: '热干面',
				desc: '武汉特色',
				img: 'https://picsum.photos/id/203/80/80'
			},
			{
				name: '土家腊肉',
				desc: '土家族传统美食',
				img: 'https://picsum.photos/id/204/80/80'
			}
		],
		architecture: [{
			name: '土家吊脚楼',
			desc: '土家族传统民居',
			img: 'https://picsum.photos/id/205/80/80'
		}],
		crafts: [{
			name: '西兰卡普',
			desc: '土家织锦',
			img: 'https://picsum.photos/id/202/80/80'
		}],
		music: [{
			name: '土家民歌',
			desc: '山歌对唱',
			img: 'https://picsum.photos/id/206/80/80'
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
				img: 'https://picsum.photos/id/26/100/100',
				desc: '主体民族'
			},
			{
				name: '土家族',
				population: '约260万',
				img: 'https://picsum.photos/id/36/100/100',
				desc: '湘西土家族苗族自治州'
			},
			{
				name: '苗族',
				population: '约210万',
				img: 'https://picsum.photos/id/37/100/100',
				desc: '湘西州、怀化'
			},
			{
				name: '侗族',
				population: '约90万',
				img: 'https://picsum.photos/id/38/100/100',
				desc: '怀化、邵阳'
			},
			{
				name: '瑶族',
				population: '约80万',
				img: 'https://picsum.photos/id/39/100/100',
				desc: '永州、郴州'
			},
			{
				name: '白族',
				population: '约13万',
				img: 'https://picsum.photos/id/40/100/100',
				desc: '张家界'
			}
		],
		minorityPopulation: '约670万',
		ethnicCount: 54,
		carouselImages: [{
				url: 'https://picsum.photos/id/207/800/400',
				caption: '凤凰古城'
			},
			{
				url: 'https://picsum.photos/id/208/800/400',
				caption: '苗族银饰'
			}
		],
		festivals: [{
				name: '土家族摆手舞节',
				date: '正月',
				desc: '土家族传统舞蹈',
				img: 'https://picsum.photos/id/36/80/80'
			},
			{
				name: '苗族赶秋节',
				date: '立秋',
				desc: '苗族丰收节',
				img: 'https://picsum.photos/id/37/80/80'
			},
			{
				name: '侗族大歌节',
				date: '农历八月',
				desc: '侗族大歌盛会',
				img: 'https://picsum.photos/id/38/80/80'
			}
		],
		heritage: [{
				name: '土家族摆手舞',
				level: '国家级非遗',
				year: '2006',
				img: 'https://picsum.photos/id/201/80/80'
			},
			{
				name: '苗族银饰锻制技艺',
				level: '国家级非遗',
				year: '2006',
				img: 'https://picsum.photos/id/208/80/80'
			},
			{
				name: '侗族大歌',
				level: '人类非遗',
				year: '2009',
				img: 'https://picsum.photos/id/209/80/80'
			}
		],
		foods: [{
				name: '臭豆腐',
				desc: '长沙特色',
				img: 'https://picsum.photos/id/210/80/80'
			},
			{
				name: '湘西腊肉',
				desc: '土家族苗族传统',
				img: 'https://picsum.photos/id/211/80/80'
			}
		],
		architecture: [{
				name: '凤凰古城',
				desc: '苗族土家族建筑',
				img: 'https://picsum.photos/id/207/80/80'
			},
			{
				name: '侗族风雨桥',
				desc: '侗族建筑瑰宝',
				img: 'https://picsum.photos/id/212/80/80'
			}
		],
		crafts: [{
				name: '苗族银饰',
				desc: '银饰艺术',
				img: 'https://picsum.photos/id/208/80/80'
			},
			{
				name: '土家织锦',
				desc: '西兰卡普',
				img: 'https://picsum.photos/id/202/80/80'
			}
		],
		music: [{
			name: '侗族大歌',
			desc: '天籁之音',
			img: 'https://picsum.photos/id/209/80/80'
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
				img: 'https://picsum.photos/id/26/100/100',
				desc: '主体民族'
			},
			{
				name: '壮族',
				population: '约60万',
				img: 'https://picsum.photos/id/41/100/100',
				desc: '清远、韶关'
			},
			{
				name: '瑶族',
				population: '约25万',
				img: 'https://picsum.photos/id/39/100/100',
				desc: '清远、韶关'
			},
			{
				name: '畲族',
				population: '约3万',
				img: 'https://picsum.photos/id/35/100/100',
				desc: '潮州、梅州'
			},
			{
				name: '回族',
				population: '约1.5万',
				img: 'https://picsum.photos/id/28/100/100',
				desc: '广州、深圳'
			}
		],
		minorityPopulation: '约95万',
		ethnicCount: 56,
		carouselImages: [{
				url: 'https://picsum.photos/id/213/800/400',
				caption: '广州塔'
			},
			{
				url: 'https://picsum.photos/id/214/800/400',
				caption: '瑶族长鼓舞'
			}
		],
		festivals: [{
				name: '瑶族盘王节',
				date: '农历十月十六',
				desc: '瑶族祭祖大典',
				img: 'https://picsum.photos/id/39/80/80'
			},
			{
				name: '畲族三月三',
				date: '农历三月初三',
				desc: '畲族传统节日',
				img: 'https://picsum.photos/id/35/80/80'
			}
		],
		heritage: [{
				name: '瑶族长鼓舞',
				level: '国家级非遗',
				year: '2008',
				img: 'https://picsum.photos/id/214/80/80'
			},
			{
				name: '粤剧',
				level: '人类非遗',
				year: '2009',
				img: 'https://picsum.photos/id/215/80/80'
			}
		],
		foods: [{
				name: '广式早茶',
				desc: '粤菜代表',
				img: 'https://picsum.photos/id/216/80/80'
			},
			{
				name: '潮汕牛肉丸',
				desc: '潮汕美食',
				img: 'https://picsum.photos/id/217/80/80'
			}
		],
		architecture: [{
				name: '开平碉楼',
				desc: '世界文化遗产',
				img: 'https://picsum.photos/id/218/80/80'
			},
			{
				name: '客家围屋',
				desc: '客家民居',
				img: 'https://picsum.photos/id/219/80/80'
			}
		],
		crafts: [{
				name: '广绣',
				desc: '岭南刺绣',
				img: 'https://picsum.photos/id/220/80/80'
			},
			{
				name: '佛山陶艺',
				desc: '石湾公仔',
				img: 'https://picsum.photos/id/221/80/80'
			}
		],
		music: [{
				name: '粤剧',
				desc: '南国红豆',
				img: 'https://picsum.photos/id/215/80/80'
			},
			{
				name: '广东音乐',
				desc: '岭南丝竹',
				img: 'https://picsum.photos/id/222/80/80'
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
				img: 'https://picsum.photos/id/41/100/100',
				desc: '三月三歌圩、铜鼓文化'
			},
			{
				name: '汉族',
				population: '约3300万',
				img: 'https://picsum.photos/id/26/100/100',
				desc: '主体民族'
			},
			{
				name: '瑶族',
				population: '约150万',
				img: 'https://picsum.photos/id/39/100/100',
				desc: '盘王节、长鼓舞'
			},
			{
				name: '苗族',
				population: '约50万',
				img: 'https://picsum.photos/id/37/100/100',
				desc: '芦笙节'
			},
			{
				name: '侗族',
				population: '约32万',
				img: 'https://picsum.photos/id/38/100/100',
				desc: '风雨桥、侗族大歌'
			},
			{
				name: '仫佬族',
				population: '约18万',
				img: 'https://picsum.photos/id/42/100/100',
				desc: '依饭节'
			},
			{
				name: '毛南族',
				population: '约11万',
				img: 'https://picsum.photos/id/43/100/100',
				desc: '分龙节'
			}
		],
		minorityPopulation: '约1900万',
		ethnicCount: 12,
		carouselImages: [{
				url: 'https://picsum.photos/id/223/800/400',
				caption: '桂林山水'
			},
			{
				url: 'https://picsum.photos/id/224/800/400',
				caption: '壮族三月三歌圩'
			}
		],
		festivals: [{
				name: '三月三',
				date: '农历三月初三',
				desc: '壮族歌节，山歌对唱',
				img: 'https://picsum.photos/id/41/80/80'
			},
			{
				name: '盘王节',
				date: '农历十月十六',
				desc: '瑶族盛大祭典',
				img: 'https://picsum.photos/id/39/80/80'
			}
		],
		heritage: [{
				name: '壮族铜鼓习俗',
				level: '国家级非遗',
				year: '2006',
				img: 'https://picsum.photos/id/225/80/80'
			},
			{
				name: '瑶族长鼓舞',
				level: '国家级非遗',
				year: '2008',
				img: 'https://picsum.photos/id/214/80/80'
			},
			{
				name: '侗族大歌',
				level: '人类非遗',
				year: '2009',
				img: 'https://picsum.photos/id/209/80/80'
			}
		],
		foods: [{
				name: '桂林米粉',
				desc: '桂林特色小吃',
				img: 'https://picsum.photos/id/226/80/80'
			},
			{
				name: '螺蛳粉',
				desc: '柳州特色，酸辣鲜香',
				img: 'https://picsum.photos/id/227/80/80'
			}
		],
		architecture: [{
				name: '侗族风雨桥',
				desc: '廊桥建筑，艺术瑰宝',
				img: 'https://picsum.photos/id/212/80/80'
			},
			{
				name: '壮族干栏式建筑',
				desc: '底层架空，防潮通风',
				img: 'https://picsum.photos/id/228/80/80'
			}
		],
		crafts: [{
			name: '壮族织锦',
			desc: '壮锦，中国四大名锦之一',
			img: 'https://picsum.photos/id/229/80/80'
		}],
		music: [{
			name: '壮族山歌',
			desc: '即兴对唱，抒情达意',
			img: 'https://picsum.photos/id/230/80/80'
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
				img: 'https://picsum.photos/id/26/100/100',
				desc: '主体民族'
			},
			{
				name: '黎族',
				population: '约120万',
				img: 'https://picsum.photos/id/44/100/100',
				desc: '海南岛中南部'
			},
			{
				name: '苗族',
				population: '约8万',
				img: 'https://picsum.photos/id/37/100/100',
				desc: '海南中西部'
			},
			{
				name: '回族',
				population: '约1.2万',
				img: 'https://picsum.photos/id/28/100/100',
				desc: '三亚凤凰镇'
			}
		],
		minorityPopulation: '约130万',
		ethnicCount: 48,
		carouselImages: [{
				url: 'https://picsum.photos/id/231/800/400',
				caption: '天涯海角'
			},
			{
				url: 'https://picsum.photos/id/232/800/400',
				caption: '黎族织锦'
			}
		],
		festivals: [{
				name: '黎族三月三',
				date: '农历三月初三',
				desc: '黎族传统节日',
				img: 'https://picsum.photos/id/44/80/80'
			},
			{
				name: '苗族花山节',
				date: '农历正月',
				desc: '苗族传统节日',
				img: 'https://picsum.photos/id/37/80/80'
			}
		],
		heritage: [{
				name: '黎族传统纺染织绣技艺',
				level: '人类非遗',
				year: '2009',
				img: 'https://picsum.photos/id/232/80/80'
			},
			{
				name: '黎族打柴舞',
				level: '国家级非遗',
				year: '2006',
				img: 'https://picsum.photos/id/233/80/80'
			}
		],
		foods: [{
				name: '海南鸡饭',
				desc: '海南名菜',
				img: 'https://picsum.photos/id/234/80/80'
			},
			{
				name: '黎族竹筒饭',
				desc: '黎族传统美食',
				img: 'https://picsum.photos/id/235/80/80'
			}
		],
		architecture: [{
			name: '黎族船型屋',
			desc: '黎族传统民居',
			img: 'https://picsum.photos/id/236/80/80'
		}],
		crafts: [{
			name: '黎族织锦',
			desc: '黎锦，中国纺织活化石',
			img: 'https://picsum.photos/id/232/80/80'
		}],
		music: [{
			name: '黎族竹木器乐',
			desc: '竹木乐器演奏',
			img: 'https://picsum.photos/id/237/80/80'
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
				img: 'https://picsum.photos/id/26/100/100',
				desc: '主体民族'
			},
			{
				name: '回族',
				population: '约2万',
				img: 'https://picsum.photos/id/28/100/100',
				desc: '全港散居'
			},
			{
				name: '满族',
				population: '约0.3万',
				img: 'https://picsum.photos/id/27/100/100',
				desc: '散居'
			}
		],
		minorityPopulation: '约3万',
		ethnicCount: 55,
		carouselImages: [{
				url: 'https://picsum.photos/id/238/800/400',
				caption: '维多利亚港'
			},
			{
				url: 'https://picsum.photos/id/239/800/400',
				caption: '香港文化'
			}
		],
		festivals: [{
			name: '佛诞节',
			date: '农历四月初八',
			desc: '佛教节日',
			img: 'https://picsum.photos/id/240/80/80'
		}],
		heritage: [{
				name: '粤剧',
				level: '人类非遗',
				year: '2009',
				img: 'https://picsum.photos/id/215/80/80'
			},
			{
				name: '长洲太平清醮',
				level: '国家级非遗',
				year: '2011',
				img: 'https://picsum.photos/id/241/80/80'
			}
		],
		foods: [{
			name: '港式茶餐厅',
			desc: '香港特色',
			img: 'https://picsum.photos/id/242/80/80'
		}],
		architecture: [{
			name: '中环历史建筑',
			desc: '中西合璧',
			img: 'https://picsum.photos/id/243/80/80'
		}],
		crafts: [{
			name: '香港花牌',
			desc: '传统扎作',
			img: 'https://picsum.photos/id/244/80/80'
		}],
		music: [{
			name: '粤剧',
			desc: '广东大戏',
			img: 'https://picsum.photos/id/215/80/80'
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
				img: 'https://picsum.photos/id/26/100/100',
				desc: '主体民族'
			},
			{
				name: '土生葡人',
				population: '约0.8万',
				img: 'https://picsum.photos/id/245/100/100',
				desc: '葡萄牙后裔'
			}
		],
		minorityPopulation: '约1万',
		ethnicCount: 52,
		carouselImages: [{
				url: 'https://picsum.photos/id/246/800/400',
				caption: '大三巴牌坊'
			},
			{
				url: 'https://picsum.photos/id/247/800/400',
				caption: '澳门妈祖文化'
			}
		],
		festivals: [{
			name: '妈祖诞',
			date: '农历三月廿三',
			desc: '妈祖信仰节日',
			img: 'https://picsum.photos/id/248/80/80'
		}],
		heritage: [{
				name: '粤剧',
				level: '人类非遗',
				year: '2009',
				img: 'https://picsum.photos/id/215/80/80'
			},
			{
				name: '澳门妈祖信俗',
				level: '国家级非遗',
				year: '2011',
				img: 'https://picsum.photos/id/248/80/80'
			}
		],
		foods: [{
			name: '葡式蛋挞',
			desc: '澳门特色',
			img: 'https://picsum.photos/id/249/80/80'
		}],
		architecture: [{
				name: '大三巴牌坊',
				desc: '澳门地标',
				img: 'https://picsum.photos/id/246/80/80'
			},
			{
				name: '妈阁庙',
				desc: '澳门最古老庙宇',
				img: 'https://picsum.photos/id/250/80/80'
			}
		],
		crafts: [],
		music: [{
			name: '粤剧',
			desc: '广东大戏',
			img: 'https://picsum.photos/id/215/80/80'
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
				img: 'https://picsum.photos/id/26/100/100',
				desc: '主体民族'
			},
			{
				name: '高山族',
				population: '约55万',
				img: 'https://picsum.photos/id/251/100/100',
				desc: '阿美、泰雅、排湾、布农等16族'
			}
		],
		minorityPopulation: '约55万',
		ethnicCount: 16,
		carouselImages: [{
				url: 'https://picsum.photos/id/252/800/400',
				caption: '阿里山'
			},
			{
				url: 'https://picsum.photos/id/253/800/400',
				caption: '高山族丰年祭'
			}
		],
		festivals: [{
				name: '阿美族丰年祭',
				date: '七八月',
				desc: '阿美族丰收庆典',
				img: 'https://picsum.photos/id/251/80/80'
			},
			{
				name: '泰雅族祖灵祭',
				date: '七月',
				desc: '泰雅族祭祖',
				img: 'https://picsum.photos/id/254/80/80'
			}
		],
		heritage: [{
			name: '高山族传统歌谣',
			level: '国家级非遗',
			year: '2008',
			img: 'https://picsum.photos/id/255/80/80'
		}],
		foods: [{
			name: '台湾小吃',
			desc: '蚵仔煎、担仔面',
			img: 'https://picsum.photos/id/256/80/80'
		}],
		architecture: [{
			name: '高山族石板屋',
			desc: '传统民居',
			img: 'https://picsum.photos/id/257/80/80'
		}],
		crafts: [{
			name: '高山族编织',
			desc: '传统编织工艺',
			img: 'https://picsum.photos/id/258/80/80'
		}],
		music: [{
			name: '高山族民歌',
			desc: '原住民音乐',
			img: 'https://picsum.photos/id/255/80/80'
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
				img: 'https://picsum.photos/id/26/100/100',
				desc: '主体民族'
			},
			{
				name: '土家族',
				population: '约150万',
				img: 'https://picsum.photos/id/36/100/100',
				desc: '摆手舞、西兰卡普'
			},
			{
				name: '苗族',
				population: '约80万',
				img: 'https://picsum.photos/id/37/100/100',
				desc: '银饰、芦笙舞'
			},
			{
				name: '回族',
				population: '约13万',
				img: 'https://picsum.photos/id/28/100/100',
				desc: '清真饮食文化'
			},
			{
				name: '满族',
				population: '约2万',
				img: 'https://picsum.photos/id/27/100/100',
				desc: '满族文化传承'
			}
		],
		minorityPopulation: '约250万',
		ethnicCount: 49,
		carouselImages: [{
				url: 'https://picsum.photos/id/259/800/400',
				caption: '重庆洪崖洞'
			},
			{
				url: 'https://picsum.photos/id/260/800/400',
				caption: '土家族摆手舞'
			},
			{
				url: 'https://picsum.photos/id/261/800/400',
				caption: '重庆火锅'
			}
		],
		festivals: [{
				name: '土家族摆手舞节',
				date: '正月',
				desc: '土家族传统祭祀舞蹈',
				img: 'https://picsum.photos/id/36/80/80'
			},
			{
				name: '苗族赶秋节',
				date: '立秋',
				desc: '苗族丰收庆典',
				img: 'https://picsum.photos/id/37/80/80'
			},
			{
				name: '开斋节',
				date: '伊斯兰教历十月一日',
				desc: '回族传统节日',
				img: 'https://picsum.photos/id/28/80/80'
			}
		],
		heritage: [{
				name: '土家族摆手舞',
				level: '国家级非遗',
				year: '2006',
				img: 'https://picsum.photos/id/260/80/80'
			},
			{
				name: '土家织锦西兰卡普',
				level: '国家级非遗',
				year: '2006',
				img: 'https://picsum.photos/id/202/80/80'
			},
			{
				name: '苗族银饰锻制技艺',
				level: '国家级非遗',
				year: '2006',
				img: 'https://picsum.photos/id/208/80/80'
			},
			{
				name: '川江号子',
				level: '国家级非遗',
				year: '2006',
				img: 'https://picsum.photos/id/262/80/80'
			}
		],
		foods: [{
				name: '重庆火锅',
				desc: '麻辣鲜香，重庆名片',
				img: 'https://picsum.photos/id/261/80/80'
			},
			{
				name: '重庆小面',
				desc: '重庆早餐代表',
				img: 'https://picsum.photos/id/263/80/80'
			},
			{
				name: '土家腊肉',
				desc: '土家族传统美食',
				img: 'https://picsum.photos/id/204/80/80'
			}
		],
		architecture: [{
				name: '土家吊脚楼',
				desc: '依山而建，吊脚楼群',
				img: 'https://picsum.photos/id/205/80/80'
			},
			{
				name: '磁器口古镇',
				desc: '千年古镇，巴渝文化',
				img: 'https://picsum.photos/id/264/80/80'
			}
		],
		crafts: [{
				name: '土家织锦',
				desc: '西兰卡普，五彩斑斓',
				img: 'https://picsum.photos/id/202/80/80'
			},
			{
				name: '苗族刺绣',
				desc: '针尖上的艺术',
				img: 'https://picsum.photos/id/265/80/80'
			},
			{
				name: '荣昌夏布',
				desc: '千年夏布，非物质文化遗产',
				img: 'https://picsum.photos/id/266/80/80'
			}
		],
		music: [{
				name: '川江号子',
				desc: '船工号子，江河记忆',
				img: 'https://picsum.photos/id/262/80/80'
			},
			{
				name: '土家山歌',
				desc: '山歌对唱，情意绵绵',
				img: 'https://picsum.photos/id/267/80/80'
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
				img: 'https://picsum.photos/id/26/100/100',
				desc: '主体民族'
			},
			{
				name: '彝族',
				population: '约270万',
				img: 'https://picsum.photos/id/268/100/100',
				desc: '火把节、毕摩文化'
			},
			{
				name: '藏族',
				population: '约150万',
				img: 'https://picsum.photos/id/115/100/100',
				desc: '藏传佛教、唐卡'
			},
			{
				name: '羌族',
				population: '约30万',
				img: 'https://picsum.photos/id/269/100/100',
				desc: '羌笛、羌绣、碉楼'
			},
			{
				name: '苗族',
				population: '约20万',
				img: 'https://picsum.photos/id/37/100/100',
				desc: '芦笙舞、银饰'
			},
			{
				name: '回族',
				population: '约11万',
				img: 'https://picsum.photos/id/28/100/100',
				desc: '清真饮食'
			}
		],
		minorityPopulation: '约490万',
		ethnicCount: 53,
		carouselImages: [{
				url: 'https://picsum.photos/id/270/800/400',
				caption: '九寨沟'
			},
			{
				url: 'https://picsum.photos/id/271/800/400',
				caption: '彝族火把节'
			},
			{
				url: 'https://picsum.photos/id/272/800/400',
				caption: '羌族碉楼'
			}
		],
		festivals: [{
				name: '彝族火把节',
				date: '农历六月廿四',
				desc: '点火把、赛马、摔跤',
				img: 'https://picsum.photos/id/268/80/80'
			},
			{
				name: '藏族雪顿节',
				date: '藏历六月底',
				desc: '晒佛节、酸奶节',
				img: 'https://picsum.photos/id/115/80/80'
			},
			{
				name: '羌族瓦尔俄足节',
				date: '农历五月初五',
				desc: '羌族妇女节',
				img: 'https://picsum.photos/id/269/80/80'
			}
		],
		heritage: [{
				name: '彝族火把节',
				level: '国家级非遗',
				year: '2006',
				img: 'https://picsum.photos/id/271/80/80'
			},
			{
				name: '羌族羌笛',
				level: '国家级非遗',
				year: '2006',
				img: 'https://picsum.photos/id/273/80/80'
			},
			{
				name: '藏族唐卡',
				level: '国家级非遗',
				year: '2006',
				img: 'https://picsum.photos/id/116/80/80'
			},
			{
				name: '蜀锦织造技艺',
				level: '国家级非遗',
				year: '2006',
				img: 'https://picsum.photos/id/274/80/80'
			}
		],
		foods: [{
				name: '火锅',
				desc: '四川火锅，麻辣鲜香',
				img: 'https://picsum.photos/id/275/80/80'
			},
			{
				name: '担担面',
				desc: '四川名小吃',
				img: 'https://picsum.photos/id/276/80/80'
			},
			{
				name: '彝族坨坨肉',
				desc: '彝族传统美食',
				img: 'https://picsum.photos/id/277/80/80'
			}
		],
		architecture: [{
				name: '羌族碉楼',
				desc: '石砌碉楼，防御功能',
				img: 'https://picsum.photos/id/272/80/80'
			},
			{
				name: '藏族碉房',
				desc: '藏式民居',
				img: 'https://picsum.photos/id/278/80/80'
			},
			{
				name: '彝族土掌房',
				desc: '平顶土墙',
				img: 'https://picsum.photos/id/279/80/80'
			}
		],
		crafts: [{
				name: '蜀锦',
				desc: '中国四大名锦之一',
				img: 'https://picsum.photos/id/274/80/80'
			},
			{
				name: '羌族刺绣',
				desc: '羌绣，国家级非遗',
				img: 'https://picsum.photos/id/280/80/80'
			},
			{
				name: '彝族漆器',
				desc: '红黑黄三色漆器',
				img: 'https://picsum.photos/id/281/80/80'
			}
		],
		music: [{
				name: '羌笛',
				desc: '古老乐器，音色独特',
				img: 'https://picsum.photos/id/273/80/80'
			},
			{
				name: '彝族口弦',
				desc: '弹拨乐器',
				img: 'https://picsum.photos/id/282/80/80'
			},
			{
				name: '藏族锅庄舞',
				desc: '圆圈舞蹈，欢快热烈',
				img: 'https://picsum.photos/id/283/80/80'
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
				img: 'https://picsum.photos/id/107/100/100',
				desc: '银饰、苗绣、芦笙舞'
			},
			{
				name: '汉族',
				population: '约2200万',
				img: 'https://picsum.photos/id/26/100/100',
				desc: '主体民族'
			},
			{
				name: '布依族',
				population: '约280万',
				img: 'https://picsum.photos/id/284/100/100',
				desc: '蜡染、六月六'
			},
			{
				name: '侗族',
				population: '约160万',
				img: 'https://picsum.photos/id/285/100/100',
				desc: '侗族大歌、鼓楼'
			},
			{
				name: '土家族',
				population: '约143万',
				img: 'https://picsum.photos/id/36/100/100',
				desc: '摆手舞'
			},
			{
				name: '彝族',
				population: '约84万',
				img: 'https://picsum.photos/id/268/100/100',
				desc: '火把节'
			},
			{
				name: '仡佬族',
				population: '约55万',
				img: 'https://picsum.photos/id/286/100/100',
				desc: '吃新节'
			},
			{
				name: '水族',
				population: '约36万',
				img: 'https://picsum.photos/id/287/100/100',
				desc: '水书、端节'
			}
		],
		minorityPopulation: '约1250万',
		ethnicCount: 49,
		carouselImages: [{
				url: 'https://picsum.photos/id/288/800/400',
				caption: '西江千户苗寨'
			},
			{
				url: 'https://picsum.photos/id/289/800/400',
				caption: '苗族银饰'
			},
			{
				url: 'https://picsum.photos/id/290/800/400',
				caption: '侗族鼓楼'
			}
		],
		festivals: [{
				name: '苗年节',
				date: '农历十月',
				desc: '苗族最隆重节日',
				img: 'https://picsum.photos/id/107/80/80'
			},
			{
				name: '姊妹节',
				date: '农历三月十五',
				desc: '东方情人节',
				img: 'https://picsum.photos/id/291/80/80'
			},
			{
				name: '侗族大歌节',
				date: '农历八月',
				desc: '侗族大歌盛会',
				img: 'https://picsum.photos/id/285/80/80'
			},
			{
				name: '六月六',
				date: '农历六月初六',
				desc: '布依族传统节日',
				img: 'https://picsum.photos/id/284/80/80'
			}
		],
		heritage: [{
				name: '侗族大歌',
				level: '人类非遗',
				year: '2009',
				img: 'https://picsum.photos/id/292/80/80'
			},
			{
				name: '苗族银饰锻制技艺',
				level: '国家级非遗',
				year: '2006',
				img: 'https://picsum.photos/id/289/80/80'
			},
			{
				name: '苗族蜡染',
				level: '国家级非遗',
				year: '2006',
				img: 'https://picsum.photos/id/293/80/80'
			},
			{
				name: '水书习俗',
				level: '国家级非遗',
				year: '2006',
				img: 'https://picsum.photos/id/287/80/80'
			}
		],
		foods: [{
				name: '酸汤鱼',
				desc: '苗族传统美食，酸辣开胃',
				img: 'https://picsum.photos/id/294/80/80'
			},
			{
				name: '肠旺面',
				desc: '贵阳特色小吃',
				img: 'https://picsum.photos/id/295/80/80'
			},
			{
				name: '丝娃娃',
				desc: '素菜春卷，清爽可口',
				img: 'https://picsum.photos/id/296/80/80'
			}
		],
		architecture: [{
				name: '侗族鼓楼',
				desc: '侗族标志性建筑，议事场所',
				img: 'https://picsum.photos/id/290/80/80'
			},
			{
				name: '苗族吊脚楼',
				desc: '依山而建，通风防潮',
				img: 'https://picsum.photos/id/297/80/80'
			},
			{
				name: '布依族石头寨',
				desc: '石墙石瓦，古朴自然',
				img: 'https://picsum.photos/id/298/80/80'
			}
		],
		crafts: [{
				name: '苗族银饰',
				desc: '工艺精湛，纹样丰富',
				img: 'https://picsum.photos/id/289/80/80'
			},
			{
				name: '苗族蜡染',
				desc: '蓝白相间，图案精美',
				img: 'https://picsum.photos/id/293/80/80'
			},
			{
				name: '布依族织锦',
				desc: '色彩艳丽，民族特色',
				img: 'https://picsum.photos/id/299/80/80'
			}
		],
		music: [{
				name: '侗族大歌',
				desc: '多声部无伴奏合唱，天籁之音',
				img: 'https://picsum.photos/id/292/80/80'
			},
			{
				name: '苗族芦笙舞',
				desc: '欢快热烈，喜庆节日',
				img: 'https://picsum.photos/id/300/80/80'
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
				img: 'https://picsum.photos/id/268/100/100',
				desc: '火把节、十月太阳历'
			},
			{
				name: '汉族',
				population: '约3150万',
				img: 'https://picsum.photos/id/26/100/100',
				desc: '主体民族'
			},
			{
				name: '白族',
				population: '约156万',
				img: 'https://picsum.photos/id/301/100/100',
				desc: '三月街、扎染技艺'
			},
			{
				name: '哈尼族',
				population: '约163万',
				img: 'https://picsum.photos/id/302/100/100',
				desc: '梯田文化、长街宴'
			},
			{
				name: '傣族',
				population: '约122万',
				img: 'https://picsum.photos/id/303/100/100',
				desc: '泼水节、孔雀舞'
			},
			{
				name: '壮族',
				population: '约121万',
				img: 'https://picsum.photos/id/41/100/100',
				desc: '三月三歌圩'
			},
			{
				name: '苗族',
				population: '约120万',
				img: 'https://picsum.photos/id/107/100/100',
				desc: '银饰、芦笙舞'
			},
			{
				name: '回族',
				population: '约69万',
				img: 'https://picsum.photos/id/28/100/100',
				desc: '清真饮食文化'
			},
			{
				name: '傈僳族',
				population: '约66万',
				img: 'https://picsum.photos/id/304/100/100',
				desc: '刀杆节、三弦舞'
			},
			{
				name: '拉祜族',
				population: '约47万',
				img: 'https://picsum.photos/id/305/100/100',
				desc: '葫芦节'
			},
			{
				name: '佤族',
				population: '约38万',
				img: 'https://picsum.photos/id/306/100/100',
				desc: '木鼓节'
			}
		],
		minorityPopulation: '约1530万',
		ethnicCount: 25,
		carouselImages: [{
				url: 'https://picsum.photos/id/307/800/400',
				caption: '大理古城'
			},
			{
				url: 'https://picsum.photos/id/308/800/400',
				caption: '傣族泼水节'
			},
			{
				url: 'https://picsum.photos/id/309/800/400',
				caption: '哈尼梯田'
			}
		],
		festivals: [{
				name: '泼水节',
				date: '公历4月13-15日',
				desc: '傣族新年，相互泼水祝福',
				img: 'https://picsum.photos/id/303/80/80'
			},
			{
				name: '火把节',
				date: '农历六月廿四',
				desc: '彝族最盛大节日，点火把、赛马',
				img: 'https://picsum.photos/id/268/80/80'
			},
			{
				name: '三月街',
				date: '农历三月十五',
				desc: '白族传统盛会，商贸文化',
				img: 'https://picsum.photos/id/301/80/80'
			},
			{
				name: '目瑙纵歌',
				date: '正月十五',
				desc: '景颇族万人舞蹈节',
				img: 'https://picsum.photos/id/310/80/80'
			}
		],
		heritage: [{
				name: '傣族泼水节',
				level: '国家级非遗',
				year: '2006',
				img: 'https://picsum.photos/id/308/80/80'
			},
			{
				name: '彝族火把节',
				level: '国家级非遗',
				year: '2006',
				img: 'https://picsum.photos/id/311/80/80'
			},
			{
				name: '白族扎染技艺',
				level: '国家级非遗',
				year: '2006',
				img: 'https://picsum.photos/id/312/80/80'
			},
			{
				name: '哈尼梯田文化',
				level: '世界遗产',
				year: '2013',
				img: 'https://picsum.photos/id/309/80/80'
			}
		],
		foods: [{
				name: '过桥米线',
				desc: '云南特色小吃，汤鲜味美',
				img: 'https://picsum.photos/id/313/80/80'
			},
			{
				name: '汽锅鸡',
				desc: '建水特产，汤汁鲜美',
				img: 'https://picsum.photos/id/314/80/80'
			},
			{
				name: '傣味手抓饭',
				desc: '傣族传统美食',
				img: 'https://picsum.photos/id/315/80/80'
			},
			{
				name: '宣威火腿',
				desc: '中国三大名腿之一',
				img: 'https://picsum.photos/id/316/80/80'
			}
		],
		architecture: [{
				name: '傣族竹楼',
				desc: '干栏式建筑，通风防潮',
				img: 'https://picsum.photos/id/317/80/80'
			},
			{
				name: '彝族土掌房',
				desc: '平顶土墙，冬暖夏凉',
				img: 'https://picsum.photos/id/279/80/80'
			},
			{
				name: '白族三坊一照壁',
				desc: '白族传统民居',
				img: 'https://picsum.photos/id/318/80/80'
			}
		],
		crafts: [{
				name: '白族扎染',
				desc: '周城扎染，图案精美',
				img: 'https://picsum.photos/id/312/80/80'
			},
			{
				name: '彝族漆器',
				desc: '黑红黄三色，古朴典雅',
				img: 'https://picsum.photos/id/281/80/80'
			},
			{
				name: '傣族织锦',
				desc: '色彩艳丽，纹样丰富',
				img: 'https://picsum.photos/id/319/80/80'
			}
		],
		music: [{
				name: '纳西古乐',
				desc: '唐宋音乐活化石',
				img: 'https://picsum.photos/id/320/80/80'
			},
			{
				name: '彝族海菜腔',
				desc: '高亢嘹亮，国家级非遗',
				img: 'https://picsum.photos/id/321/80/80'
			},
			{
				name: '傣族孔雀舞',
				desc: '优美灵动，民族瑰宝',
				img: 'https://picsum.photos/id/322/80/80'
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
				img: 'https://picsum.photos/id/115/100/100',
				desc: '藏传佛教、唐卡、藏戏'
			},
			{
				name: '汉族',
				population: '约40万',
				img: 'https://picsum.photos/id/26/100/100',
				desc: '援藏建设者'
			},
			{
				name: '门巴族',
				population: '约1.1万',
				img: 'https://picsum.photos/id/323/100/100',
				desc: '藏东南独特文化'
			},
			{
				name: '珞巴族',
				population: '约0.4万',
				img: 'https://picsum.photos/id/324/100/100',
				desc: '原始狩猎文化'
			}
		],
		minorityPopulation: '约320万',
		ethnicCount: 6,
		carouselImages: [{
				url: 'https://picsum.photos/id/325/800/400',
				caption: '布达拉宫'
			},
			{
				url: 'https://picsum.photos/id/326/800/400',
				caption: '藏族唐卡'
			},
			{
				url: 'https://picsum.photos/id/327/800/400',
				caption: '雪顿节晒佛'
			}
		],
		festivals: [{
				name: '藏历新年',
				date: '藏历正月初一',
				desc: '藏族最隆重庆典',
				img: 'https://picsum.photos/id/115/80/80'
			},
			{
				name: '雪顿节',
				date: '藏历六月底',
				desc: '酸奶节、晒佛节',
				img: 'https://picsum.photos/id/327/80/80'
			},
			{
				name: '望果节',
				date: '藏历八月',
				desc: '丰收节庆',
				img: 'https://picsum.photos/id/328/80/80'
			}
		],
		heritage: [{
				name: '藏戏',
				level: '人类非遗',
				year: '2009',
				img: 'https://picsum.photos/id/329/80/80'
			},
			{
				name: '唐卡',
				level: '国家级非遗',
				year: '2006',
				img: 'https://picsum.photos/id/326/80/80'
			},
			{
				name: '格萨尔史诗',
				level: '人类非遗',
				year: '2009',
				img: 'https://picsum.photos/id/330/80/80'
			}
		],
		foods: [{
				name: '糌粑',
				desc: '青稞炒面，藏族主食',
				img: 'https://picsum.photos/id/331/80/80'
			},
			{
				name: '酥油茶',
				desc: '藏族传统饮品',
				img: 'https://picsum.photos/id/332/80/80'
			},
			{
				name: '牦牛肉干',
				desc: '高原特产',
				img: 'https://picsum.photos/id/333/80/80'
			}
		],
		architecture: [{
				name: '布达拉宫',
				desc: '世界文化遗产，藏式建筑巅峰',
				img: 'https://picsum.photos/id/325/80/80'
			},
			{
				name: '藏式碉房',
				desc: '石砌碉楼，坚固美观',
				img: 'https://picsum.photos/id/334/80/80'
			},
			{
				name: '大昭寺',
				desc: '藏传佛教圣地',
				img: 'https://picsum.photos/id/335/80/80'
			}
		],
		crafts: [{
				name: '唐卡',
				desc: '藏族卷轴画，宗教艺术',
				img: 'https://picsum.photos/id/326/80/80'
			},
			{
				name: '藏毯',
				desc: '手工编织，图案精美',
				img: 'https://picsum.photos/id/336/80/80'
			},
			{
				name: '藏刀',
				desc: '藏族传统工艺品',
				img: 'https://picsum.photos/id/337/80/80'
			}
		],
		music: [{
				name: '藏戏',
				desc: '面具舞蹈，史诗故事',
				img: 'https://picsum.photos/id/329/80/80'
			},
			{
				name: '藏族民歌',
				desc: '高亢悠扬，抒发情感',
				img: 'https://picsum.photos/id/338/80/80'
			},
			{
				name: '锅庄舞',
				desc: '圆圈舞，欢快热烈',
				img: 'https://picsum.photos/id/339/80/80'
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
				img: 'https://picsum.photos/id/26/100/100',
				desc: '主体民族'
			},
			{
				name: '回族',
				population: '约15万',
				img: 'https://picsum.photos/id/28/100/100',
				desc: '西安、宝鸡、咸阳'
			},
			{
				name: '满族',
				population: '约1.5万',
				img: 'https://picsum.photos/id/27/100/100',
				desc: '散居'
			}
		],
		minorityPopulation: '约18万',
		ethnicCount: 54,
		carouselImages: [{
				url: 'https://picsum.photos/id/340/800/400',
				caption: '西安钟楼'
			},
			{
				url: 'https://picsum.photos/id/341/800/400',
				caption: '兵马俑'
			},
			{
				url: 'https://picsum.photos/id/342/800/400',
				caption: '回民街'
			}
		],
		festivals: [{
				name: '开斋节',
				date: '伊斯兰教历十月一日',
				desc: '回族传统节日',
				img: 'https://picsum.photos/id/28/80/80'
			},
			{
				name: '春节社火',
				date: '春节期间',
				desc: '关中地区传统民俗',
				img: 'https://picsum.photos/id/343/80/80'
			}
		],
		heritage: [{
				name: '秦腔',
				level: '国家级非遗',
				year: '2006',
				img: 'https://picsum.photos/id/344/80/80'
			},
			{
				name: '安塞腰鼓',
				level: '国家级非遗',
				year: '2006',
				img: 'https://picsum.photos/id/345/80/80'
			},
			{
				name: '皮影戏',
				level: '人类非遗',
				year: '2011',
				img: 'https://picsum.photos/id/346/80/80'
			}
		],
		foods: [{
				name: '羊肉泡馍',
				desc: '西安名吃',
				img: 'https://picsum.photos/id/347/80/80'
			},
			{
				name: '肉夹馍',
				desc: '陕西特色',
				img: 'https://picsum.photos/id/348/80/80'
			},
			{
				name: '凉皮',
				desc: '陕西小吃',
				img: 'https://picsum.photos/id/349/80/80'
			}
		],
		architecture: [{
				name: '兵马俑',
				desc: '世界第八大奇迹',
				img: 'https://picsum.photos/id/341/80/80'
			},
			{
				name: '大雁塔',
				desc: '唐代佛塔',
				img: 'https://picsum.photos/id/350/80/80'
			},
			{
				name: '钟楼',
				desc: '西安地标',
				img: 'https://picsum.photos/id/340/80/80'
			}
		],
		crafts: [{
				name: '凤翔泥塑',
				desc: '民间泥塑艺术',
				img: 'https://picsum.photos/id/351/80/80'
			},
			{
				name: '陕北剪纸',
				desc: '剪纸艺术',
				img: 'https://picsum.photos/id/352/80/80'
			}
		],
		music: [{
				name: '秦腔',
				desc: '西北戏曲，慷慨激昂',
				img: 'https://picsum.photos/id/344/80/80'
			},
			{
				name: '安塞腰鼓',
				desc: '陕北民间鼓舞',
				img: 'https://picsum.photos/id/345/80/80'
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
				img: 'https://picsum.photos/id/26/100/100',
				desc: '主体民族'
			},
			{
				name: '回族',
				population: '约130万',
				img: 'https://picsum.photos/id/28/100/100',
				desc: '临夏回族自治州'
			},
			{
				name: '藏族',
				population: '约50万',
				img: 'https://picsum.photos/id/115/100/100',
				desc: '甘南藏族自治州'
			},
			{
				name: '东乡族',
				population: '约55万',
				img: 'https://picsum.photos/id/353/100/100',
				desc: '东乡族自治县'
			},
			{
				name: '保安族',
				population: '约2万',
				img: 'https://picsum.photos/id/354/100/100',
				desc: '保安腰刀'
			},
			{
				name: '裕固族',
				population: '约1.4万',
				img: 'https://picsum.photos/id/355/100/100',
				desc: '祁连山下'
			},
			{
				name: '蒙古族',
				population: '约1.5万',
				img: 'https://picsum.photos/id/29/100/100',
				desc: '肃北蒙古族自治县'
			}
		],
		minorityPopulation: '约240万',
		ethnicCount: 45,
		carouselImages: [{
				url: 'https://picsum.photos/id/356/800/400',
				caption: '敦煌莫高窟'
			},
			{
				url: 'https://picsum.photos/id/357/800/400',
				caption: '月牙泉'
			},
			{
				url: 'https://picsum.photos/id/358/800/400',
				caption: '甘南草原'
			}
		],
		festivals: [{
				name: '开斋节',
				date: '伊斯兰教历十月一日',
				desc: '回族、东乡族等节日',
				img: 'https://picsum.photos/id/28/80/80'
			},
			{
				name: '香浪节',
				date: '农历六月',
				desc: '藏族传统节日',
				img: 'https://picsum.photos/id/115/80/80'
			}
		],
		heritage: [{
				name: '敦煌莫高窟',
				level: '世界遗产',
				year: '1987',
				img: 'https://picsum.photos/id/356/80/80'
			},
			{
				name: '花儿',
				level: '人类非遗',
				year: '2009',
				img: 'https://picsum.photos/id/359/80/80'
			},
			{
				name: '保安族腰刀锻制技艺',
				level: '国家级非遗',
				year: '2006',
				img: 'https://picsum.photos/id/360/80/80'
			}
		],
		foods: [{
				name: '兰州牛肉面',
				desc: '兰州美食名片',
				img: 'https://picsum.photos/id/361/80/80'
			},
			{
				name: '手抓羊肉',
				desc: '甘肃特色',
				img: 'https://picsum.photos/id/362/80/80'
			}
		],
		architecture: [{
				name: '敦煌莫高窟',
				desc: '东方艺术宝库',
				img: 'https://picsum.photos/id/356/80/80'
			},
			{
				name: '嘉峪关',
				desc: '天下第一雄关',
				img: 'https://picsum.photos/id/363/80/80'
			}
		],
		crafts: [{
				name: '保安族腰刀',
				desc: '传统刀剑工艺',
				img: 'https://picsum.photos/id/360/80/80'
			},
			{
				name: '洮砚',
				desc: '中国四大名砚之一',
				img: 'https://picsum.photos/id/364/80/80'
			}
		],
		music: [{
			name: '花儿',
			desc: '西北民歌，高亢嘹亮',
			img: 'https://picsum.photos/id/359/80/80'
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
				img: 'https://picsum.photos/id/26/100/100',
				desc: '主体民族'
			},
			{
				name: '藏族',
				population: '约150万',
				img: 'https://picsum.photos/id/115/100/100',
				desc: '玉树、果洛、海南'
			},
			{
				name: '回族',
				population: '约80万',
				img: 'https://picsum.photos/id/28/100/100',
				desc: '西宁、化隆'
			},
			{
				name: '土族',
				population: '约21万',
				img: 'https://picsum.photos/id/365/100/100',
				desc: '互助土族自治县'
			},
			{
				name: '撒拉族',
				population: '约12万',
				img: 'https://picsum.photos/id/366/100/100',
				desc: '循化撒拉族自治县'
			},
			{
				name: '蒙古族',
				population: '约10万',
				img: 'https://picsum.photos/id/29/100/100',
				desc: '河南蒙古族自治县'
			}
		],
		minorityPopulation: '约280万',
		ethnicCount: 48,
		carouselImages: [{
				url: 'https://picsum.photos/id/367/800/400',
				caption: '青海湖'
			},
			{
				url: 'https://picsum.photos/id/368/800/400',
				caption: '塔尔寺'
			},
			{
				url: 'https://picsum.photos/id/369/800/400',
				caption: '土族纳顿节'
			}
		],
		festivals: [{
				name: '藏历新年',
				date: '藏历正月初一',
				desc: '藏族传统节日',
				img: 'https://picsum.photos/id/115/80/80'
			},
			{
				name: '纳顿节',
				date: '农历七月',
				desc: '土族传统节日',
				img: 'https://picsum.photos/id/365/80/80'
			}
		],
		heritage: [{
				name: '热贡艺术',
				level: '人类非遗',
				year: '2009',
				img: 'https://picsum.photos/id/370/80/80'
			},
			{
				name: '土族盘绣',
				level: '国家级非遗',
				year: '2006',
				img: 'https://picsum.photos/id/371/80/80'
			}
		],
		foods: [{
				name: '青海酸奶',
				desc: '青海特色',
				img: 'https://picsum.photos/id/372/80/80'
			},
			{
				name: '手抓羊肉',
				desc: '草原美食',
				img: 'https://picsum.photos/id/362/80/80'
			}
		],
		architecture: [{
				name: '塔尔寺',
				desc: '藏传佛教圣地',
				img: 'https://picsum.photos/id/368/80/80'
			},
			{
				name: '土族庄廓',
				desc: '土族传统民居',
				img: 'https://picsum.photos/id/373/80/80'
			}
		],
		crafts: [{
				name: '热贡唐卡',
				desc: '青海唐卡艺术',
				img: 'https://picsum.photos/id/370/80/80'
			},
			{
				name: '土族盘绣',
				desc: '土族刺绣',
				img: 'https://picsum.photos/id/371/80/80'
			}
		],
		music: [{
			name: '藏族民歌',
			desc: '高亢悠扬',
			img: 'https://picsum.photos/id/374/80/80'
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
				img: 'https://picsum.photos/id/28/100/100',
				desc: '全国最大的回族聚居区'
			},
			{
				name: '汉族',
				population: '约430万',
				img: 'https://picsum.photos/id/26/100/100',
				desc: '主体民族'
			},
			{
				name: '满族',
				population: '约1万',
				img: 'https://picsum.photos/id/27/100/100',
				desc: '散居'
			}
		],
		minorityPopulation: '约255万',
		ethnicCount: 35,
		carouselImages: [{
				url: 'https://picsum.photos/id/375/800/400',
				caption: '沙湖'
			},
			{
				url: 'https://picsum.photos/id/376/800/400',
				caption: '西夏王陵'
			},
			{
				url: 'https://picsum.photos/id/377/800/400',
				caption: '回族清真寺'
			}
		],
		festivals: [{
				name: '开斋节',
				date: '伊斯兰教历十月一日',
				desc: '回族最重要的节日',
				img: 'https://picsum.photos/id/28/80/80'
			},
			{
				name: '古尔邦节',
				date: '伊斯兰教历十二月十日',
				desc: '宰牲节',
				img: 'https://picsum.photos/id/378/80/80'
			}
		],
		heritage: [{
				name: '回族花儿',
				level: '国家级非遗',
				year: '2006',
				img: 'https://picsum.photos/id/379/80/80'
			},
			{
				name: '回族剪纸',
				level: '国家级非遗',
				year: '2008',
				img: 'https://picsum.photos/id/380/80/80'
			}
		],
		foods: [{
				name: '手抓羊肉',
				desc: '宁夏特色美食',
				img: 'https://picsum.photos/id/381/80/80'
			},
			{
				name: '羊肉臊子面',
				desc: '宁夏面食',
				img: 'https://picsum.photos/id/382/80/80'
			},
			{
				name: '馓子',
				desc: '回族传统食品',
				img: 'https://picsum.photos/id/383/80/80'
			}
		],
		architecture: [{
				name: '西夏王陵',
				desc: '西夏王朝陵墓',
				img: 'https://picsum.photos/id/376/80/80'
			},
			{
				name: '南关清真寺',
				desc: '银川清真寺',
				img: 'https://picsum.photos/id/384/80/80'
			}
		],
		crafts: [{
				name: '回族剪纸',
				desc: '回族传统剪纸艺术',
				img: 'https://picsum.photos/id/380/80/80'
			},
			{
				name: '贺兰石砚',
				desc: '宁夏名砚',
				img: 'https://picsum.photos/id/385/80/80'
			}
		],
		music: [{
			name: '回族花儿',
			desc: '回族民歌，高亢婉转',
			img: 'https://picsum.photos/id/379/80/80'
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
				img: 'https://picsum.photos/id/386/100/100',
				desc: '木卡姆、麦西热甫'
			},
			{
				name: '汉族',
				population: '约850万',
				img: 'https://picsum.photos/id/26/100/100',
				desc: '主体民族之一'
			},
			{
				name: '哈萨克族',
				population: '约140万',
				img: 'https://picsum.photos/id/387/100/100',
				desc: '阿肯弹唱、冬不拉'
			},
			{
				name: '回族',
				population: '约98万',
				img: 'https://picsum.photos/id/28/100/100',
				desc: '开斋节'
			},
			{
				name: '柯尔克孜族',
				population: '约18万',
				img: 'https://picsum.photos/id/388/100/100',
				desc: '玛纳斯史诗'
			},
			{
				name: '蒙古族',
				population: '约16万',
				img: 'https://picsum.photos/id/29/100/100',
				desc: '那达慕'
			},
			{
				name: '塔吉克族',
				population: '约5万',
				img: 'https://picsum.photos/id/389/100/100',
				desc: '鹰舞、帕米尔高原'
			},
			{
				name: '锡伯族',
				population: '约4万',
				img: 'https://picsum.photos/id/390/100/100',
				desc: '西迁节'
			},
			{
				name: '满族',
				population: '约2万',
				img: 'https://picsum.photos/id/27/100/100',
				desc: '散居'
			},
			{
				name: '乌孜别克族',
				population: '约1.2万',
				img: 'https://picsum.photos/id/391/100/100',
				desc: '传统歌舞'
			},
			{
				name: '俄罗斯族',
				population: '约0.8万',
				img: 'https://picsum.photos/id/392/100/100',
				desc: '俄罗斯族风情'
			},
			{
				name: '达斡尔族',
				population: '约0.5万',
				img: 'https://picsum.photos/id/34/100/100',
				desc: '曲棍球'
			},
			{
				name: '塔塔尔族',
				population: '约0.3万',
				img: 'https://picsum.photos/id/393/100/100',
				desc: '传统音乐'
			}
		],
		minorityPopulation: '约1450万',
		ethnicCount: 47,
		carouselImages: [{
				url: 'https://picsum.photos/id/394/800/400',
				caption: '喀纳斯湖'
			},
			{
				url: 'https://picsum.photos/id/395/800/400',
				caption: '天山天池'
			},
			{
				url: 'https://picsum.photos/id/396/800/400',
				caption: '维吾尔木卡姆'
			}
		],
		festivals: [{
				name: '肉孜节',
				date: '伊斯兰教历十月一日',
				desc: '开斋节',
				img: 'https://picsum.photos/id/28/80/80'
			},
			{
				name: '古尔邦节',
				date: '伊斯兰教历十二月十日',
				desc: '宰牲节',
				img: 'https://picsum.photos/id/378/80/80'
			},
			{
				name: '诺鲁孜节',
				date: '春分',
				desc: '新春佳节',
				img: 'https://picsum.photos/id/397/80/80'
			}
		],
		heritage: [{
				name: '维吾尔木卡姆',
				level: '人类非遗',
				year: '2005',
				img: 'https://picsum.photos/id/396/80/80'
			},
			{
				name: '柯尔克孜族玛纳斯',
				level: '人类非遗',
				year: '2009',
				img: 'https://picsum.photos/id/398/80/80'
			},
			{
				name: '哈萨克族阿肯弹唱',
				level: '国家级非遗',
				year: '2006',
				img: 'https://picsum.photos/id/399/80/80'
			}
		],
		foods: [{
				name: '烤羊肉串',
				desc: '新疆特色美食',
				img: 'https://picsum.photos/id/400/80/80'
			},
			{
				name: '大盘鸡',
				desc: '沙湾特色',
				img: 'https://picsum.photos/id/401/80/80'
			},
			{
				name: '手抓饭',
				desc: '维吾尔族传统主食',
				img: 'https://picsum.photos/id/402/80/80'
			},
			{
				name: '馕',
				desc: '维吾尔族主食',
				img: 'https://picsum.photos/id/403/80/80'
			}
		],
		architecture: [{
				name: '艾提尕尔清真寺',
				desc: '新疆最大清真寺',
				img: 'https://picsum.photos/id/404/80/80'
			},
			{
				name: '维吾尔族民居',
				desc: '土坯建筑，庭院式布局',
				img: 'https://picsum.photos/id/405/80/80'
			},
			{
				name: '喀什老城',
				desc: '维吾尔古城',
				img: 'https://picsum.photos/id/406/80/80'
			}
		],
		crafts: [{
				name: '维吾尔族刺绣',
				desc: '图案精美，色彩艳丽',
				img: 'https://picsum.photos/id/407/80/80'
			},
			{
				name: '艾德莱斯绸',
				desc: '传统丝绸工艺',
				img: 'https://picsum.photos/id/408/80/80'
			},
			{
				name: '哈萨克族毡绣',
				desc: '毡房装饰',
				img: 'https://picsum.photos/id/409/80/80'
			}
		],
		music: [{
				name: '十二木卡姆',
				desc: '音乐史诗，人类瑰宝',
				img: 'https://picsum.photos/id/396/80/80'
			},
			{
				name: '冬不拉弹唱',
				desc: '哈萨克族民间艺术',
				img: 'https://picsum.photos/id/399/80/80'
			},
			{
				name: '塔吉克族鹰舞',
				desc: '模仿雄鹰的舞蹈',
				img: 'https://picsum.photos/id/410/80/80'
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
		img: '',
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
	renderCostumeGallery(data.costume);
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