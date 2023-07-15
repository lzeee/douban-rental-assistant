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
function isPostValid(postElement){
	// 获取帖子信息
	const firstTdElement = postElement.querySelector('td');
	const aElement = firstTdElement.querySelector('a');
	const title = aElement.getAttribute('title');
	// 检查帖子的标题
	
	// todo 检查帖子的内容
	
	// 确定帖子是否有效
	return title.includes("地铁");
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
	const postElements = getPostElements();
	for(const postElement of postElements){
		if(isPostValid(postElement)){
			highlightPost(postElement);
		}
	}
}

// 创建筛选菜单
function createFilterMenu() {
	const filterMenu = document.createElement('div');
	filterMenu.id = 'filter-menu';
	filterMenu.innerHTML = `
		<h3>筛选菜单</h3>
		<button id="filter-btn">筛选</button>
	`;
	
	// 将菜单插入到页面左侧
	const targetElement = document.getElementById('wrapper');
	targetElement.insertBefore(filterMenu, targetElement.firstChild);
	
	// 绑定过滤操作
	document.getElementById('filter-menu').addEventListener('click', () => {filterAndHighlightPosts()});
}


if (checkPageCondition()) {
    createFilterMenu();
}