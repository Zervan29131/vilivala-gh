(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{546:function(t,e,s){"use strict";s.r(e);var a=s(20),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("这个教程是基于你一无所知的情况下编写的")])]),t._v(" "),s("h1",{attrs:{id:"部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),s("p",[t._v("接下来我们来将这个初始化的博客进行一下部署，放到 GitHub Pages 上面验证一下其可用性。成功之后我们可以再进行后续的修改，比如修改主题、修改页面配置等等。")]),t._v(" "),s("p",[t._v("我们可以通过 Hexo 提供给我们的一个命令直接将博客一键部署到 GitHub Pages 上面去，不需要手动去配置服务器或进行其他的各项配置。")]),t._v(" "),s("p",[t._v("部署命令如下：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("hexo deploy\n")])])]),s("p",[t._v("在部署之前，我们需要先知道博客的部署地址，它需要对应 GitHub 的一个 Repository 的地址，这个信息需要我们来配置一下。")]),t._v(" "),s("p",[t._v("打开根目录下的"),s("code",[t._v("_config.yml")]),t._v(" 文件，这是博客的配置文件，在这里你可以修改与博客相关的各种信息。")]),t._v(" "),s("p",[t._v("找到 "),s("code",[t._v("# Deployment")]),t._v("这个地方，")]),t._v(" "),s("blockquote",[s("p",[t._v("repository修改为你自己的github项目地址。")]),t._v(" "),s("p",[t._v("repo: {git repo ssh address}")])]),t._v(" "),s("p",[t._v("最终修改为如下内容：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# Deployment\n## Docs: https:/ /hexo.io/docs/deployment.html\ndeploy:\n  type: git\n  repo: https://github.com/Zervan29131/ZervanBlog.git\n  github-token: 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1\n  branch: master\n")])])]),s("blockquote",[s("p",[t._v("指定分支为branch: master")]),t._v(" "),s("p",[s("strong",[t._v("可能")]),t._v("需要更改为 branch: main")])]),t._v(" "),s("p",[t._v("需要获取taken")]),t._v(" "),s("p",[s("code",[t._v("github-token: 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")])]),t._v(" "),s("h1",{attrs:{id:"连接github与本地"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连接github与本地"}},[t._v("#")]),t._v(" 连接Github与本地")]),t._v(" "),s("p",[t._v("首先右键打开git bash，然后输入下面命令：")]),t._v(" "),s("p",[t._v("在本地计算机配置Git全局变量。 输入以下命令：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Zervan29131"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1162685484@qq.com"')]),t._v("\n")])])]),s("p",[t._v("用户名和邮箱根据你注册github的信息自行修改。位置位于"),s("code",[t._v("C:\\Users\\zervan\\.gitconfig")])]),t._v(" "),s("p",[t._v("然后生成密钥SSH key：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ ssh-keygen -t rsa -C "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1162685484@qq.com"')]),t._v("\n")])])]),s("p",[t._v("密钥类型可以用"),s("code",[t._v("-t")]),t._v("  选项指定。如果没有指定则默认生成用于SSH-2的RSA密钥。这里使用的是rsa。\n同时在密钥中有一个注释字段，用"),s("code",[t._v("-c")]),t._v("来指定所指定的注释，可以方便用户标识这个密钥，指出密钥的用途或其他有用的信息。所以在这里输入自己的邮箱或者其他都行,当然，如果不想要这些可以直接输入：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ ssh-keygen\n")])])]),s("p",[t._v("输入完毕后按回车，程序会要求输入一个密码，输入完密码后按回车会要求再确认一次密码，如果不想要密码可以在要求输入密码的时候按两次回车，表示密码为空，并且确认密码为空，此时**[c盘>用户>自己的用户名>.ssh]**目录下已经生成好了。")]),t._v(" "),s("p",[t._v("打开github，在头像下面点击"),s("code",[t._v("settings")]),t._v("，再点击"),s("code",[t._v("SSH and GPG keys")]),t._v("，新建一个SSH，名字随便。")]),t._v(" "),s("blockquote",[s("p",[t._v("这个ssh密钥不是必须要新建的，.ssh文件里面有之前创建好的也可以用，能连到github就行了")])]),t._v(" "),s("p",[t._v("添加SSH key到Github，git bash中输入")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" ~/.ssh/id_rsa.pub\n")])])]),s("p",[t._v("将输出的内容复制到Github的SSH框中，点击确定保存。")]),t._v(" "),s("p",[t._v("检测SSH key，输入"),s("code",[t._v("ssh -T git@github.com")]),t._v("，如果如下所示，出现你的用户名，那就成功了。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("weiya@weiyang MINGW64 /d/study/progr am/blog (master)\n$ ssh -T git@github. com \nwarning: Per manently added the RSA host key for IP address ' 52.74.223.119' to th\ne list of known hosts \nHi godweiyang! You ve successful ly autherticated. butdoes not provide sh\ne11 access.\n")])])]),s("h1",{attrs:{id:"支持-git-的部署插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支持-git-的部署插件"}},[t._v("#")]),t._v(" 支持 Git 的部署插件")]),t._v(" "),s("p",[t._v("另外我们还需要额外安装一个支持 Git 的部署插件，名字叫做 hexo-deployer-git，有了它我们才可以顺利将其部署到 GitHub 上面，如果不安装的话，在执行部署命令时会报如下错误：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Deployer not found: git\n")])])]),s("p",[t._v("好，那就让我们安装下这个插件，在项目目录下执行安装命令如下：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm install hexo-deployer-git --save\n")])])]),s("p",[t._v("安装成功之后，执行部署命令：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("hexo deploy\n")])])]),s("p",[t._v("运行结果类似如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("INFO Deploying: git\nINFO Clearing .deploy_ git folder...\nINFO Copying files from public folder...\nINFO Copying files from extend dirs...\nOn branch master\nnothing to commit, working directory clean\nCounting objects: 46，done.\nDelta compression using up to 8 threads.\nCompressing objects: 100% (36/36)， done.\nWriting objects: 100% (46/46)， 507.66 KiBI 0 bytes/s， done.\nTotal 46 (delta 3)， reused 0 (delta 0)\nremote: Resolving deltas: 100% (3/3)， done.\nTo git@github. com:NightTeam/ nightteam. github.io.git\n*  [new branch]\t\tHEAD -> master\nBranch master set up to track remote branch master from git@github. com:Night1\nINFO Deploy done: git\n")])])]),s("p",[t._v("这时我们的博客已经成功部署到 GitHub Pages 上面了，我们访问一下 GitHub Repository 同名的链接，就可以看到跟我们博客的内容了。")]),t._v(" "),s("p",[t._v("这时候我们去 GitHub 上面看看 Hexo 上传了什么内容，打开之后可以看到 master 分支是博客文件夹下面的 public 文件夹下的所有内容，Hexo 把编译之后的静态页面内容上传到 GitHub 的 master 分支上面去了。")]),t._v(" "),s("p",[t._v("如果你博客的源码也想放到 GitHub 上，我们可以新建一个 source 分支，代表博客源码的意思。")]),t._v(" "),s("p",[t._v("具体的添加过程就很简单了，参加如下命令：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('git init\ngit checkout -b source\ngit add -A\ngit commit -m "init blog"\ngit remote add origin git@github.com:{username}/{username}.github.io.git\ngit push origin source\n')])])]),s("p",[t._v("成功之后，可以到 GitHub 上再切换下默认分支，比如我就把默认的分支设置为了 source，当然不换也可以。")]),t._v(" "),s("p",[t._v("完成如上内容之后，实际上我们只完成了博客搭建的一小步，因为我们仅仅是把初始化的页面部署成功了，博客里面还没有设置任何有效的信息。")]),t._v(" "),s("h1",{attrs:{id:"配置站点信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置站点信息"}},[t._v("#")]),t._v(" 配置站点信息")]),t._v(" "),s("p",[t._v("下面就让我们来进行一下博客的基本配置，另外换一个好看的主题，配置一些其他的内容，让博客真正变成属于我们自己的博客。")]),t._v(" "),s("p",[t._v("下面我就需要修改一些基本的配置，比如站点名、站点描述等等。")]),t._v(" "),s("p",[t._v("修改根目录下的 ``_config.yml `文件，找到 Site 区域，这里面可以配置站点标题 title、副标题 subtitle 等内容、关键字 keywords 等内容，如下：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('# Site\ntitle: WaterMelon\nsubtitle: 一个专注技术的组织\ndescription: 涉猎的主要编程语言为 Python、Rust、C++、Go，领域涵盖爬虫、深度学习、服务研发和对象存储等。\nkeywords: "Python, Rust, C++, Go, 爬虫, 深度学习, 服务研发, 对象存储"\nauthor: zervan\n')])])]),s("p",[t._v("另外还可以设置一下语言，如果要设置为汉语的话可以将 language 的字段设置为 zh-CN，如下：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("language: zh-CN\n")])])]),s("p",[t._v("这样就完成了站点基本信息的配置。")]),t._v(" "),s("h1",{attrs:{id:"写文章、发布文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写文章、发布文章"}},[t._v("#")]),t._v(" 写文章、发布文章")]),t._v(" "),s("p",[t._v("首先在博客根目录下右键打开git bash，安装一个扩展"),s("code",[t._v("npm i hexo-deployer-git")]),t._v("。")]),t._v(" "),s("p",[t._v("然后输入"),s("code",[t._v('hexo new post "article title"')]),t._v("，新建一篇文章。")]),t._v(" "),s("p",[t._v("然后打开"),s("code",[t._v("D:\\study\\program\\blog\\source\\_posts")]),t._v("的目录，可以发现下面多了一个文件夹和一个"),s("code",[t._v(".md")]),t._v("文件，一个用来存放你的图片等数据，另一个就是你的文章文件啦。")]),t._v(" "),s("p",[t._v("编写完markdown文件后，根目录下输入"),s("code",[t._v("hexo g")]),t._v("生成静态网页，然后输入"),s("code",[t._v("hexo s")]),t._v("可以本地预览效果，最后 输入"),s("code",[t._v("hexo d")]),t._v("上传到github上。这时打开你的github.io主页就能看到发布的文章啦。")]),t._v(" "),s("h1",{attrs:{id:"绑定域名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#绑定域名"}},[t._v("#")]),t._v(" 绑定域名")]),t._v(" "),s("p",[t._v("现在默认的域名还是"),s("code",[t._v("xxx.github.io")]),t._v("，如果想弄一个专属域名，可以购买一个域名。")]),t._v(" "),s("p",[t._v("打开你的github博客项目，点击"),s("code",[t._v("settings")]),t._v("，拉到下面"),s("code",[t._v("Custom domain")]),t._v("处，填上你自己的域名，保存：")]),t._v(" "),s("p",[t._v("这时候你的项目根目录应该会出现一个名为"),s("code",[t._v("CNAME")]),t._v("的文件了。如果没有的话，打开你本地博客"),s("code",[t._v("/source")]),t._v("目录，我的是"),s("code",[t._v("D:\\study\\program\\blog\\source")]),t._v("，新建"),s("code",[t._v("CNAME")]),t._v("文件，注意没有后缀。然后在里面写上你的域名，保存。最后运行"),s("code",[t._v("hexo g")]),t._v("、"),s("code",[t._v("hexo d")]),t._v("上传到github。")]),t._v(" "),s("p",[t._v("#　备份博客源文件")]),t._v(" "),s("p",[t._v("如果我们想换一台电脑继续写博客，就可以将博客目录下的所有源文件都上传到github上面。")]),t._v(" "),s("p",[t._v("首先在github博客仓库下新建一个分支"),s("code",[t._v("hexo")]),t._v("，然后"),s("code",[t._v("git clone")]),t._v("到本地，把"),s("code",[t._v(".git")]),t._v("文件夹拿出来，放在博客根目录下。")]),t._v(" "),s("p",[t._v("然后"),s("code",[t._v("git branch -b hexo")]),t._v("切换到"),s("code",[t._v("hexo")]),t._v("分支，然后"),s("code",[t._v("git add .")]),t._v("，然后"),s("code",[t._v('git commit -m "xxx"')]),t._v("，最后"),s("code",[t._v("git push origin hexo")]),t._v("提交就行了。")]),t._v(" "),s("p",[t._v("当然我新建了一个仓库存放了源文件，具体效果可以看我的博客源文件仓库：")]),t._v(" "),s("p",[t._v("大家也可以先用下文hexo安装方法安装完hexo，然后直接"),s("code",[t._v("git clone git@github.com:godweiyang/hexo-matery-modified.git")]),t._v("克隆我的所有源文件，然后这是我修改完的基本没bug的定制化的博客，就可以直接拿来用啦。")]),t._v(" "),s("h1",{attrs:{id:"网站按照seo-优化-被谷歌和百度收录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网站按照seo-优化-被谷歌和百度收录"}},[t._v("#")]),t._v(" 网站按照seo 优化，被谷歌和百度收录")])])}),[],!1,null,null,null);e.default=v.exports}}]);