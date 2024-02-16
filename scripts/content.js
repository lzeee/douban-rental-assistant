// 数据
const subwayData = {
	'1号线': ['古城', '八角游乐园', '八宝山', '玉泉路', '五棵松', '万寿路', '公主坟', '军事博物馆', '木樨地', '南礼士路', '复兴门', '西单', '天安门西', '天安门东', '王府井', '东单', '建国门', '永安里', '国贸', '大望路', '四惠'],
	'2号线': ['西直门', '车公庄', '阜成门', '复兴门', '长椿街', '宣武门', '和平门', '前门', '崇文门', '北京站', '建国门', '朝阳门', '东四十条', '东直门', '雍和宫', '安定门', '鼓楼大街'],
	'4号线': ['安河桥北', '北宫门', '西苑', '圆明园', '北京大学东门', '中关村', '海淀黄庄', '人民大学', '魏公村', '国家图书馆', '动物园', '西直门', '新街口', '平安里', '西四', '灵境胡同', '西单', '宣武门', '菜市口', '陶然亭', '北京南站', '马家堡', '角门西'],
	'5号线': ['天通苑', '天通苑南', '立水桥', '立水桥南', '北苑路北', '大屯路东', '惠新西街北口', '惠新西街南口', '和平西桥', '和平里北街', '雍和宫', '北新桥', '张自忠路', '东四', '灯市口', '东单', '崇文门', '磁器口', '天坛东门', '蒲黄榆', '刘家窑', '宋家庄'],
	'6号线': ['金安桥', '苹果园', '杨庄', '西黄村', '廖公庄', '田村', '海淀五路居', '慈寿寺', '花园桥', '白石桥南', '车公庄西', '车公庄', '平安里', '北海北', '南锣鼓巷', '东四', '朝阳门', '东大桥', '呼家楼', '金台路', '十里堡', '青年路', '褡裢坡', '黄渠', '常营', '草房', '物资学院路', '通州北关', '北运河西', '北运河东', '郝家府', '东夏园'],
	'7号线': ['北京西站', '湾子', '达官营', '广安门内', '菜市口', '虎坊桥', '珠市口', '桥湾', '磁器口', '广渠门内', '广渠门外', '双井', '九龙山', '大郊亭', '百子湾', '化工', '南楼梓庄', '欢乐谷景区', '垡头', '双合', '焦化厂', '黄厂', '郎辛庄', '黑庄户', '万盛西', '万盛东', '群芳', '高楼金', '花庄'],
	'8号线': ['育知路', '平西府', '回龙观东大街', '霍营', '育新', '西小口', '永泰庄', '林萃桥', '森林公园南门', '奥林匹克公园', '奥体中心', '北土城', '安华桥', '安德里北街', '鼓楼大街', '什刹海', '南锣鼓巷', '中国美术馆', '金鱼胡同', '王府井', '前门', '珠市口', '天桥', '永定门外', '木樨园', '海户屯', '大红门南', '和义', '东高地', '火箭万源', '五福堂', '德茂', '瀛海 德茂'],
	'9号线': ['白石桥南', '白堆子', '军事博物馆', '北京西站', '六里桥东', '六里桥', '七里庄', '丰台东大街', '丰台南路', '科怡路', '丰台科技园', '郭公庄'],
	'10号线': ['巴沟', '苏州街', '海淀黄庄', '知春里', '知春路', '西土城', '牡丹园', '健德门', '北土城', '安贞门', '惠新西街南口', '芍药居', '太阳宫', '三元桥', '亮马桥', '农业展览馆', '团结湖', '呼家楼', '金台夕照', '国贸', '双井', '劲松', '潘家园', '十里河', '分钟寺', '成寿寺', '宋家庄', '石榴庄', '大红门', '角门东', '角门西', '草桥', '纪家庙', '首经贸', '丰台站', '泥洼', '西局', '六里桥', '莲花桥', '公主坟', '西钓鱼台', '慈寿寺', '车道沟', '长春桥', '火器营'],
	'11号线': ['金安桥', '北辛安'], '13号线': ['大钟寺', '知春路', '五道口', '上地', '清河站', '西二旗', '龙泽', '回龙观', '霍营', '立水桥', '北苑', '望京西', '芍药居', '光熙门', '柳芳', '东直门'],
	'14号线': ['张郭庄', '园博园', '大瓦窑', '郭庄子', '大井', '七里庄', '西局', '东管头', '丽泽商务区', '菜户营', '西铁营', '景风门', '北京南站', '陶然桥', '永定门外', '景泰', '蒲黄榆', '方庄', '十里河', '南八里庄', '北工大西门', '平乐园', '九龙山', '大望路', '红庙', '金台路', '朝阳公园', '枣营', '东风北桥', '将台', '高家园', '望京南', '阜通', '望京', '东湖渠', '来广营'],
	'15号线': ['清华东路西口', '六道口', '北沙滩', '奥林匹克公园', '安立路', '大屯路东', '关庄', '望京西', '望京', '望京东', '崔各庄', '马泉营', '孙河', '国展', '花梨坎', '后沙峪', '南法信', '石门', '顺义'], '16号线': ['北安河', '温阳路', '稻香湖路', '屯佃', '永丰', '永丰南', '西北旺', '马连洼', '农大南路'],
	'S1线': ['石厂', '小园', '栗园庄', '上岸', '桥户营', '四道桥', '金安桥'],
	'燕房线': ['燕山', '房山城关', '饶乐府', '马各庄', '大石河东', '星城', '阎村', '紫草坞'],
	'大兴线': ['公益西桥', '新宫', '西红门', '高米店北', '高米店南', '枣园', '清源路', '黄村西大街', '黄村火车站', '义和庄', '生物医药基地'],
	'昌平线': ['十三陵景区', '昌平', '昌平东关', '北邵洼', '南邵', '沙河高教园', '沙河', '巩华城', '朱辛庄', '生命科学园', '西二旗', '清河站'],
	'房山线': ['首经贸', '花乡东桥', '白盆窑', '郭公庄', '大葆台', '稻田', '长阳', '篱笆房', '广阳城', '良乡大学城北', '良乡大学城', '良乡大学城西', '良乡南关', '苏庄', '阎村东'],
	'亦庄线': ['肖村', '小红门', '旧宫', '亦庄桥', '亦庄文化园', '万源街', '荣京东街', '荣昌东街', '同济南路', '经海路', '次渠南', '次渠', '亦庄火车站'],
	'八通线': ['四惠', '四惠东', '高碑店', '传媒大学', '双桥', '管庄', '八里桥', '通州北苑', '果园', '九棵树', '梨园', '临河里', '土桥', '花庄'],
	'17号线': ['十里河', '周家庄', '十八里店', '北神树', '次渠北', '次渠']
};

// 筛选高亮目标帖子
function filterAndHighlightPosts() {
	// 原始颜色
	const originalWordColor = "#666666";
	const originalBackgroundColor = 'white';
	const originalLinkColor = '#3377aa';

	// 高亮颜色
	const highlightWordColor = "white";
	const highlightBackgroundColor = 'green';
	
	const postElements = getPostElements();	
	// 筛选并高亮新的满足条件的帖子
	const selectedLine = document.getElementById('subway-line').value;
	const selectedStations = Array.from(document.getElementById('subway-station').selectedOptions).map(option => option.value);
	for(const postElement of postElements){
		if(isPostValid(postElement, selectedLine, selectedStations)){
			highlightPost(postElement);
		}else{
			resetPost(postElement);
		}
	}
	
	// 获取当前页面的帖子列表
	function getPostElements() {
		// 根据类型选出帖子
		return document.querySelectorAll(".pl");
	}
	
	// 判断是否为目标帖子
	function isPostValid(postElement, selectedLine, selectedStations){
		// 获取帖子信息
		const firstTdElement = postElement.querySelector('td');
		const aElement = firstTdElement.querySelector('a');
		const title = aElement.getAttribute('title');
		// 检查帖子的标题(title.includes(selectedLine)
		let isTitleValid = selectedStations.some(station => title.includes(station));
		// todo：检查帖子的具体内容
		let isContentValid;
		// 确定帖子是否有效
		return isTitleValid || isContentValid;
	}

	
	// 高亮帖子
	function highlightPost(postElement) {
		// 整体设置颜色
		postElement.style.backgroundColor = highlightBackgroundColor;
		// 设置文字为白色
		setWordColor(postElement, highlightWordColor);
	}

	// 复原帖子
	function resetPost(postElement) {
		// 整体设置颜色
		postElement.style.backgroundColor = originalBackgroundColor;
		// 设置文字为黑色
		setWordColor(postElement, originalWordColor);
	}

	// 递归设置颜色
	function setWordColor(element, color) {
		if(element.href && color == originalWordColor){
			element.style.color = originalLinkColor;
		}else{
			element.style.color = color;
		}
		var children = element.children;
		for (var i = 0; i < children.length; i++) {
			setWordColor(children[i], color); 
		}
	}
}

// 恢复历史选择
function restoreSelection(subwayLineSelect, subwayStationSelect) {
	chrome.storage.local.get(['menuSelection'], (result) => {
		const savedSelection = result.menuSelection;
		// 如果有历史选择
		if (savedSelection) {
			const { line, station } = savedSelection;
			const selectedLine = line;
			const selectedStation = station;
			// 将地铁线路设置到下拉列表
			subwayLineSelect.value = selectedLine;
			// 根据线路选择加载地铁站点的下拉列表
			updateSubwayStationOptions(subwayLineSelect, subwayStationSelect);
			subwayStationSelect.value = selectedStation;
			// 执行一次过滤
			filterAndHighlightPosts();
		  }
	});
}

// 更新地铁站列表
function updateSubwayStationOptions(subwayLineSelect, subwayStationSelect) {
	// 清空原有选项
	subwayStationSelect.innerHTML = '';
	// 根据选择的线路，动态添加站点列表
	subwayData[subwayLineSelect.value].forEach(station => {
		const option = document.createElement('option');
		option.value = station;
		option.textContent = station;
		subwayStationSelect.appendChild(option);
	});
}

// 创建筛选菜单
function createFilterMenu() {
	// 地铁线路+站点数据
	const filterMenu = document.createElement('div');
	filterMenu.id = 'filter-menu';
	filterMenu.innerHTML = 
	`
		<h2>筛选</h2>
		<div class="filter-section">
			<div>
				<label for="subway-line">地铁线路：</label>
				<select id="subway-line">
					<!-- 这里的选项在后续通过js添加 -->
				</select>
			</div>
			<div>
				<label for="subway-station">地铁站点：</label>
				<select id="subway-station">
					<!-- 这里的选项在后续通过js添加 -->
				</select>
			</div>
		</div>
	`;
	
	// 将菜单插入到页面左侧
	const targetElement = document.getElementById('wrapper');
	targetElement.insertBefore(filterMenu, targetElement.firstChild);
	
	const subwayLineSelect = document.getElementById('subway-line');
	const subwayStationSelect = document.getElementById('subway-station');
	
	// 地铁线路选择事件
	subwayLineSelect.addEventListener('change', function() {
		updateSubwayStationOptions(subwayLineSelect, subwayStationSelect);
	});

	// 地铁站选择事件
	subwayStationSelect.addEventListener('change', function(){
		filterAndHighlightPosts();
		// 记录选择
		const selectedLine = subwayLineSelect.value;
		const selectedStation = subwayStationSelect.value;
		const selection = {
			line: selectedLine,
			station: selectedStation
		};
		chrome.storage.local.set({ menuSelection: selection });
	});
	
	// 初始化下拉列表
	Object.keys(subwayData).forEach(line => {
		const option = document.createElement('option');
		option.value = line;
		option.textContent = line;
		subwayLineSelect.appendChild(option);
	});
	updateSubwayStationOptions(subwayLineSelect, subwayStationSelect);
    return {
        line: subwayLineSelect,
        station: subwayStationSelect
    };
}

function setUp() {
	// 新建菜单
	menu = createFilterMenu();
	// 尝试恢复历史选择
	restoreSelection(menu.line, menu.station);
}

setUp();