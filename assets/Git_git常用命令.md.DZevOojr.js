import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.Bt9cqVig.js";const E=JSON.parse('{"title":".gitignore文件","description":"","frontmatter":{},"headers":[],"relativePath":"Git/git常用命令.md","filePath":"Git/git常用命令.md"}'),l={name:"Git/git常用命令.md"},p=n(`<h1 id="gitignore文件" tabindex="-1">.gitignore文件 <a class="header-anchor" href="#gitignore文件" aria-label="Permalink to &quot;.gitignore文件&quot;">​</a></h1><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.gitignore文件是用来告诉Git哪些文件或目录不需要被版本控制的。当你在项目中创建</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gitignore文件并列出需要被忽略的文件或目录时，Git就会在进行版本控制时自动忽略这些文</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">件，不会将它们包含在提交中。这对于排除编译生成的文件、临时文件、日志文件、依赖库等非</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">必要文件非常有用，可以保持代码仓库的整洁性和减少不必要的提交。通常.gitignore文件的</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">语法规则包括使用通配符（如*和?）来匹配文件名、使用斜杠（/）来指定路径、使用感叹号</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">（!）来取反匹配等。通过.gitignore文件，可以有效管理Git仓库中的文件和目录，确保只提</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">交和跟踪必要的内容。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><hr><h1 id="git的基本使用" tabindex="-1">git的基本使用 <a class="header-anchor" href="#git的基本使用" aria-label="Permalink to &quot;git的基本使用&quot;">​</a></h1><div class="language-git vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">git</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git init</span></span>
<span class="line"><span>git add -A</span></span>
<span class="line"><span>git commit -m &quot;msg&quot;</span></span>
<span class="line"><span>git push -f url master:分支名   //直接推会覆盖指定分支</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>git log   //查看所有commit</span></span>
<span class="line"><span>git checkout &lt;commit&gt;   //切换commit</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h1 id="git分支" tabindex="-1">git分支 <a class="header-anchor" href="#git分支" aria-label="Permalink to &quot;git分支&quot;">​</a></h1><div class="language-git vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">git</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git branch -a  //查看所有分支</span></span>
<span class="line"><span>git branch 分支名  //创建分支</span></span>
<span class="line"><span>git checkout 分支名  //切换分支</span></span>
<span class="line"><span>git merge 分支名  //合并分支</span></span>
<span class="line"><span>git branch -d 分支名  //删除分支</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><hr><h1 id="git-tag" tabindex="-1">git tag <a class="header-anchor" href="#git-tag" aria-label="Permalink to &quot;git tag&quot;">​</a></h1><div class="language-git vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">git</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git tag -a 标签名 -m &quot;msg&quot;  //创建标签</span></span>
<span class="line"><span>git tag -d 标签名  //删除标签</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><h1 id="设置-查看远程仓库" tabindex="-1">设置/查看远程仓库 <a class="header-anchor" href="#设置-查看远程仓库" aria-label="Permalink to &quot;设置/查看远程仓库&quot;">​</a></h1><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> E:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">earning</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">y_blo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         //展示远程仓库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Blog</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">origin</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> E:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">earning</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">y_blo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Blog</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    //展示Blog仓库的url</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> remote Blog</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  Fetch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> URL:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@github.com:dudaiqi12/Blog.git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  Push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  URL:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@github.com:dudaiqi12/Blog.git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  HEAD</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  Remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tracked</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> E:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">earning</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">y_blo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">           //查看所有远程仓库</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Blog</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    git@github.com:dudaiqi12/Blog.git</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (fetch)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Blog</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    git@github.com:dudaiqi12/Blog.git</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (push)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  https://github.com/dudaiqi12/my_blog.git</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (fetch)     </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  https://github.com/dudaiqi12/my_blog.git</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (push)      </span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> E:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">earning</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">y_blo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 测试</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 地址</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //添加远程仓库</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> E:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">earning</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">y_blo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Blog</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    git@github.com:dudaiqi12/Blog.git</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (fetch)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Blog</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    git@github.com:dudaiqi12/Blog.git</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (push)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  https://github.com/dudaiqi12/my_blog.git</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (fetch)     </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  https://github.com/dudaiqi12/my_blog.git</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (push)      </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">测试</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    地址</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (fetch)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">测试</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    地址</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (push)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> E:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">earning</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">y_blo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><hr>`,14),t=[p];function h(e,k,r,g,d,F){return a(),i("div",null,t)}const b=s(l,[["render",h]]);export{E as __pageData,b as default};
