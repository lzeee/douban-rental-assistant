# 豆瓣租房帖筛选插件

## 功能演示
<img src="README-images/plugin-site.gif" alt="Example GIF" width="600" height="400">

## 如何安装并使用？
1. 下载插件压缩包

2. Chrome浏览器安装插件

3. 关注感兴趣的租房小组

4. 浏览我的小组页面


## 为什么有这个插件？
租房就像面对一个不可能三角：方便、物美、价廉。如果你选有名的大中介，就意味着付出更多的经济成本，在中间人的帮助下快速找到大量且相对靠谱的房源；如果你选择野鸡中介，就意味着你既不想付出太多金钱，又想快速获取房源信息，看似是多方面兼顾，实则结果可能是价格又高、服务又差、房子又拉跨；如果你选择自己寻找房主、二房东，就意味着你选择节约一部分金钱成本，付出更多时间成本，需要从海量信息中筛选出珍贵的真实信息。

就个人来说，时间紧急的情况我会选第一条路，时间充裕的情况我会选第三条路。豆瓣小组是一个备受推崇的信息集散地，其中有无数个租房小组，虽然鱼龙混杂，但是也真实存在着一些用心经营的个人房东。在单个小组内可以进行搜索，但是无法在多个小组中快速搜索信息。为了方便快速筛选出目标地理位置附近的潜在房源，我开发了这个浏览器插件，功能相对简陋，但是够用。希望帮助偏好选第三条路的朋友，走的更方便一些。

在租房时，我曾经用过一些有趣的工具，比如这个[租房搜索助手](http://uz.yurixu.com/manage/beijing.php)，不过由于豆瓣部分已经停更，又由于业余时间有限，没精力复刻一套类似的爬虫+展示系统，先用插件解决吧。

## 租房的经验和教训
1. 需要考虑的要素

类型 | 具体要素 | 注意事项
---- | --- | ---
签约 | 房东、二房东、中介 | 市场上会有大量冒充房东的二房东、中介。查验身份最保险的方法是查看正规手续，比如房产证、租赁合同等。另外，刚毕业的学生，一个常见特点就是倾向于相信别人，租房被坑可能是走入社会后经历的第一步，不过最好还是保持警惕，never trust a broker。
房租费用 | 方式、中介费或服务费 | 在北京一般会要求1个月房租作为押金，之后每次付3个月房租，一定要有正规的押金条；至于中介、服务费，有些是一次性缴纳一个月或半个月房租，有些是每个月额外10%的费用，有些是不收服务费。同一套房子，房租可能会随着月份波动，毕业季、五一小长假等一定是水涨船高，价格敏感人群可以想办法避开高峰期。
日常费用 | 水费、电费、网费、维修费等 | 如果是整租一套，那可能只需要注意维修费是否包含在日常的服务费中；如果是与人合租，并且没有单独的水表、电表，则在入住时需要和合租的室友明确如何分摊相关费用，虽然这份钱不多，一个月几十块，但是要做好约定、避免扯皮。
交通 | 单位、地铁、公交、超市、商场、医院 | 要考虑清楚自己偏好的通勤时长、方式等，比如可以划定在单位周边地铁通勤半小时以内的房源，然后再从其中挑选，周边配套符合需求的小区。比如说如果偏好地铁，就找一个地铁站周围的；如果不太喜欢做饭，可以找一个周边有商场，出门吃饭方便的，相信我门口有一个商场和点外卖完全不同；如果有慢性病那就找一个离医院近的。
家电 | 洗衣机、空调、冰箱、热水器、灯具等 | 最好每种电器都检查一遍，看能不能正常使用，比如老旧马桶可能容易堵、即热型的热水器可能不能支持几个人先后洗澡等。如果有问题，在签约之前一定让房东或者中介处理好，你会发现大家的热情和笑脸是有开关的，在你签约完成的下一秒，这些客套往往就会荡然无存。
供暖 | 效果、费用 | 供暖的效果会非常影响你在冬天的幸福感，如果租的是一个老旧小区，房子还在整栋楼的外边缘，暖气不给力，并且窗户还是单层的，那你只能天天冻得擦鼻子，不要问我怎么知道的。明确供暖的方式，如果是烧天然气供暖，可能是一笔不小的费用。
采光 | 晾衣服、心情、采光、厨房、卫生间 | 有人曾说，北京的阳光是明码标价的，此言不虚。朝南的卧室一定会比同条件但朝北的卧室贵上几百块，但是如果为了方便的晾干衣服，为了享受更多的光照，可以对自己大方一些。另外，如果你做饭，那么明厨一定是比狭小阴暗的厨房好得多。
隔音 | 临街、窗户、地铁、楼梯间、邻居 | 如果你对声音比较敏感，那要观察环境了。最好不要临街或者在地铁旁边，窗户最好是双层，卧室不要靠近楼梯间。邻居和上下楼层则没法过早预判了，如果隔壁刚好生了小孩，为了避免听到无休止的哭闹和吵架，还是准备一些3M耳塞吧。
卫生 | 蟑螂、蟑螂、蟑螂 | 明确是否会提供定期的卫生清洁。作为一个来北京后才知道蟑螂是什么的人，建议你远离用完厨房不收拾垃圾的舍友，看房时最好去厨房、各个犄角旮旯检查，如果有类似小黑盒、蟑螂粘板之类的用品，火速逃离，不要幻想靠一管拜耳杀虫剂能搞定蟑螂，毕竟你也不想睁开眼在枕头上和蟑螂先生say hi吧？

2. 租房的整个流程

环节 | 注意事项
---- | ---
找房 | 一定要重视第一个环节，多花一些时间，就像找工作面试一样，态度认真。在真正看房前先根据地理位置、价格预期等划定范围，决定好是要找大中介、野鸡中介还是真房东，然后在对应的信息渠道获取相关信息。要坚信10句话里9句假，因为中介只希望你尽快签约，你签一单他就拿一单的提成，所以他一定不会跟你说房子的缺点，这个时候就需要自己去认真思考。始终记住，无论什么租房渠道，都有海量的、温情脉脉的骗子在等着你入套。
签约 | 确认签约方的身份，有没有相关的正式证件，可以上网查询中介公司是否有大量的投诉和诉讼。明确合同上的起止时间、支付方式、设备维修责任、退租条件、违约责任。最好用政府提供的标准租房模板，比如说北京市政府就提供了模板。最后，一定要理性消费，不要相信价格明显低于市场价的房源，不要让中介带你贷款付钱，不要做超出个人承受能力的消费。
居住 | 不同人对于租房态度不同，考虑到经常换租，我的原则是尽量少买东西，省的搬家太麻烦；不过也有人认为租房时就应该享受生活，甚至也有推崇租房要装修的，对此不予置评。此外，如果遇到噪音、房屋损坏、丢快递等体验问题，要理性、依法维权，保护好自己。以北京为例，有12345等众多的投诉热线，虽然处理效果差强人意。
退租 | 退租时，要遵循合同中的规范，把该结清的水电费等结清，不给中介留下坑你的把柄。很多中介会趁这个时候狠狠讹一把，反正你都要走了，此时不坑何时坑，最常见的手段是磨磨蹭蹭不给退押金，这种情况下，一定要保持理性直接报警，等警察来了据理力争，拿回属于自己的押金，确保全身而退。