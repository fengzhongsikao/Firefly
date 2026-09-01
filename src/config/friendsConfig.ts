import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
  // 页面标题，如果留空则使用 i18n 中的翻译
  title: "",

  // 页面描述文本，如果留空则使用 i18n 中的翻译
  description: "",

  // 是否显示底部自定义内容（friends.mdx 中的内容）
  showCustomContent: true,

  // 是否显示评论区，需要先在commentConfig.ts启用评论系统
  showComment: true,

  // 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
  randomizeSort: false,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
  {
    title: "夏夜流萤",
    imgurl:
      "https://weavatar.com/avatar/d252655d40d6874417a720bad0a6c5f77f8f6a1fd2f882f8f338402dc37e4190?s=640",
    desc: "飞萤之火自无梦的长夜亮起，绽放在终竟的明天。",
    siteurl: "https://blog.cuteleaf.cn",
    tags: ["Blog"],
    weight: 10, // 权重，数字越大排序越靠前
    enabled: true, // 是否启用
  },
  {
    title: "暗雨冥的花田",
    imgurl: "https://dkrain.com/assets/home/home.webp",
    desc: "喵喵喵喵喵喵",
    siteurl: "https://dkrain.com/",
    tags: ["Blog"],
    weight: 10, // 权重，数字越大排序越靠前
    enabled: true, // 是否启用
  },
  {
    title: "atdunbg",
    imgurl: "https://atdunbg.github.io/_astro/demo-avatar.CxcI0ivM_1nbuVe.webp",
    desc: "一个又菜又爱学的技术小白",
    siteurl: "https://atdunbg.github.io/",
    tags: ["Blog"],
    weight: 9, // 权重，数字越大排序越靠前
    enabled: true, // 是否启用
  },
  {
    title: "番茄主理人",
    imgurl: "https://q1.qlogo.cn/g?b=qq&nk=20447289&s=640",
    desc: "坐而言不如起而行.",
    siteurl: "https://fqzlr.com/",
    tags: ["Blog"],
    weight: 9, // 权重，数字越大排序越靠前
    enabled: true, // 是否启用
  },
  {
    title: "QgxsのBlog",
    imgurl: "https://www.20210701.xyz/icon.jpeg",
    desc: "放松心情，漫游四处，处处美景。",
    siteurl: "https://www.20210701.xyz/",
    tags: ["Blog"],
    weight: 9, // 权重，数字越大排序越靠前
    enabled: true, // 是否启用
  },
  {
    title: "atticus",
    imgurl: "https://www.atticus0723.top/avatar.png",
    desc: "探索空间数据与现代前端的交汇",
    siteurl: "https://www.atticus0723.top/",
    tags: ["Blog"],
    weight: 9, // 权重，数字越大排序越靠前
    enabled: true, // 是否启用
  },
  {
    title: "upxuu",
    imgurl: "https://upxuu.com/images/20260214145619.jpg",
    desc: "逐光而上",
    siteurl: "https://upxuu.com/",
    tags: ["Blog"],
    weight: 9, // 权重，数字越大排序越靠前
    enabled: true, // 是否启用
  },
  {
    title: "雨祁小窝",
    imgurl: "https://yqamm.cc.cd/_astro/avatar.DsloLJ2B_Z2ceESW.webp",
    desc: "生命绚烂，别被黑暗压垮",
    siteurl: "https://yqamm.cc.cd/",
    tags: ["Blog"],
    weight: 9, // 权重，数字越大排序越靠前
    enabled: true, // 是否启用
  },
  {
    title: "tianhw",
    imgurl: "https://image.tianhw.top/avatar.webp",
    desc: "前途似海，来日方长",
    siteurl: "https://blog.tianhw.top/",
    tags: ["Blog"],
    weight: 9, // 权重，数字越大排序越靠前
    enabled: true, // 是否启用
  },
  {
    title: "北に向かう",
    imgurl: "https://ignorant.top/_astro/avatar.DT3z3YNN_TwrwT.webp",
    desc: "孩儿立志出乡关，学不成名誓不还",
    siteurl: "https://ignorant.top/",
    tags: ["Blog"],
    weight: 9, // 权重，数字越大排序越靠前
    enabled: true, // 是否启用
  },
  {
    title: "辰渊尘站",
    imgurl: "https://blog.mcxiaochen.top/images/congyu/touxiang.webp",
    desc: "有志不在年高，无志空活百岁。",
    siteurl: "https://blog.mcxiaochen.top/",
    tags: ["Blog"],
    weight: 9, // 权重，数字越大排序越靠前
    enabled: true, // 是否启用
  },
  {
    title: "晓林的博客",
    imgurl: "https://image.peterjxl.com/blog/re0.jpg",
    desc: "程序猿，自由职业者，博主，英语爱好者，健身达人",
    siteurl: "https://www.peterjxl.com/",
    tags: ["Blog"],
    weight: 9, // 权重，数字越大排序越靠前
    enabled: true, // 是否启用
  },
  {
    title: "十三",
    imgurl: "https://blog.nw177.cn/assets/avatar.webp",
    desc: "欲买桂花同载酒，终不似，少年游。",
    siteurl: "https://blog.nw177.cn",
    tags: ["Blog"],
    weight: 9, // 权重，数字越大排序越靠前
    enabled: true, // 是否启用
  },
  {
    title: "喵栈",
    imgurl: "https://www.stackmeow.tech/favicon/favicon-1.png",
    desc: "人生是层层堆叠的经历，而内心永远保有一只自在小猫。",
    siteurl: "https://www.stackmeow.tech/",
    tags: ["Blog"],
    weight: 9, // 权重，数字越大排序越靠前
    enabled: true, // 是否启用
  },
  {
    title: "furinafans",
    imgurl: "https://furinafans.com/_astro/avatar.CmRtaOLc_Z4qUwo.webp",
    desc: "欢唱,以我之名",
    siteurl: "https://furinafans.com/",
    tags: ["Blog"],
    weight: 9, // 权重，数字越大排序越靠前
    enabled: true, // 是否启用
  },
  {
    title: "Firefly Docs",
    imgurl: "https://docs-firefly.cuteleaf.cn/logo.png",
    desc: "Firefly主题模板文档",
    siteurl: "https://docs-firefly.cuteleaf.cn",
    tags: ["Docs"],
    weight: 9,
    enabled: true,
  },
  {
    title: "Duala",
    imgurl: "https://moe.blog/content/templates/NULL/images/tx.jpg",
    desc: "我喜欢天空的颜色",
    siteurl: "https://blog.ma/",
    tags: ["Blog"],
    weight: 9,
    enabled: true,
  },
  {
    title: "HY",
    imgurl: "https://9ll.uk/_astro/avatar.CjtmSIpt_2u00ph.webp",
    desc: "World And Life",
    siteurl: "https://9ll.uk/",
    tags: ["Blog"],
    weight: 9,
    enabled: true,
  },
  {
    title: "SliverCode",
    imgurl: "https://cdn.replow.org/replow-org/images/tx.jpg",
    desc: "浮萍无存",
    siteurl: "https://4z.ink/",
    tags: ["Blog"],
    weight: 9,
    enabled: true,
  },
  {
    title: "风起导航",
    imgurl: "https://www.windtop.top/xiao.webp",
    desc: "风起导航",
    siteurl: "https://www.windtop.top/",
    tags: ["Navigation"],
    weight: 9,
    enabled: true,
  },
  {
    title: "Astro",
    imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
    desc: "The web framework for content-driven websites. ⭐️ Star to support our work!",
    siteurl: "https://github.com/withastro/astro",
    tags: ["Framework"],
    weight: 8,
    enabled: true,
  },
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
  const friends = friendsConfig.filter((friend) => friend.enabled);

  if (friendsPageConfig.randomizeSort) {
    return friends.sort(() => Math.random() - 0.5);
  }

  return friends.sort((a, b) => b.weight - a.weight);
};
