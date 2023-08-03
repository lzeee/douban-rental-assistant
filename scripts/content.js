// 只影响豆瓣的“我的小组讨论”页面
const targetUrl = 'https://www.douban.com/group'
function checkPageCondition(){
	return location.href.startsWith(targetUrl)
}

// 获取当前页面的帖子列表
function getPostElements() {
	// 根据类型选出帖子
	return document.querySelectorAll(".pl");
}

// 判断帖子是否如何条件
function isPostValid(postElement, selectedLine, selectedStations){
	// 获取帖子信息
	const firstTdElement = postElement.querySelector('td');
	const aElement = firstTdElement.querySelector('a');
	const title = aElement.getAttribute('title');
	// 检查帖子的标题
	
	// 检查帖子的内容
	
	// 确定帖子是否有效
	return title.includes(selectedLine) || selectedStations.some(station => title.includes(station));;
}
	
// 高亮帖子
function highlightPost(postElement) {
	// 整体设置绿色
	postElement.style.backgroundColor = 'green';
	// 设置文字为白色
	setWordColor(postElement, "white");
}

// 递归设置子元素的字体颜色
function setWordColor(element, color) {
	element.style.color = color;
	var children = element.children;
	for (var i = 0; i < children.length; i++) {
		setWordColor(children[i], color); 
	}
}


// 筛选帖子列表并高亮
function filterAndHighlightPosts(){
	// 清空原有高亮帖子
	
	// 筛选并高亮新的满足条件的帖子
	const selectedLine = document.getElementById('subway-line').value;
	const selectedStations = Array.from(document.getElementById('subway-station').selectedOptions).map(option => option.value);
	const postElements = getPostElements();
	for(const postElement of postElements){
		if(isPostValid(postElement, selectedLine, selectedStations)){
			highlightPost(postElement);
		}
	}
}

// 创建筛选菜单
function createFilterMenu() {
	// 地铁线路+站点数据，人工维护
	const subwayData = {
		line1: ['北京交通大学', '金台路', '站点3'],
		line2: ['站点A', '站点B', '站点C'],
		};
	
	const filterMenu = document.createElement('div');
	filterMenu.id = 'filter-menu';
	filterMenu.innerHTML = 
	`
		<h2>筛选</h2>
		<div>
			<label for="subway-line">选择地铁线路：</label>
			<select id="subway-line">
				<!-- 这里选项通过js添加 -->
			</select>
		</div>
		<div>
			<label for="subway-station">选择地铁站点：</label>
			<select id="subway-station">
				<!-- 这里选项通过js添加 -->
			</select>
		</div>
		<br>
		<button id="filter-btn">筛选</button>
	`;
	
	
	// 将菜单插入到页面左侧
	const targetElement = document.getElementById('wrapper');
	targetElement.insertBefore(filterMenu, targetElement.firstChild);
	
	// 获取DOM元素
	const subwayLineSelect = document.getElementById('subway-line');
	const subwayStationSelect = document.getElementById('subway-station');
	const filterBtn = document.getElementById('filter-btn');
	
	// 初始化地铁线路的下拉列表
	Object.keys(subwayData).forEach(line => {
		const option = document.createElement('option');
		option.value = line;
		option.textContent = line;
		subwayLineSelect.appendChild(option);
	});
	
	// 更新地铁站下拉列表函数
	function updateSubwayStationOptions(selectedLine) {
		// 清空原有选项
		subwayStationSelect.innerHTML = '';
		// 根据选择的线路，动态添加站点选项
		subwayData[selectedLine].forEach(station => {
			const option = document.createElement('option');
			option.value = station;
			option.textContent = station;
			subwayStationSelect.appendChild(option);
		});
	}
		
	// 初始化站点下拉列表
	updateSubwayStationOptions(subwayLineSelect.value);

	// 添加地铁线路下拉列表变化事件处理程序
	subwayLineSelect.addEventListener('change', function () {
		updateSubwayStationOptions(subwayLineSelect.value);
	});
	
	// 绑定过滤操作
	filterBtn.addEventListener('click', () => {filterAndHighlightPosts()});
}


if (checkPageCondition()) {
    createFilterMenu();
}