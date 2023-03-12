import{_ as a,W as e,X as t,$ as p,Y as s,Z as n,a0 as o}from"./framework-a443708f.js";const l="/vue/scss-deep/bg.jpg",c={},i=s("h1",{id:"vue3-0-深度选择器-和-deep-、-v-deep-被弃用",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vue3-0-深度选择器-和-deep-、-v-deep-被弃用","aria-hidden":"true"},"#"),n(" Vue3.0 深度选择器＞＞＞ 和 /deep/ 、 ::v-deep 被弃用")],-1),r=s("p",null,[s("strong",null,">>>"),n(" 和 **/deep/**在 vue3 中使用直接报错。")],-1),d=s("p",null,"[@vue/compiler-sfc] ::v-deep usage as a combinator has been deprecated. Use :deep() instead.",-1),u=s("p",null,"::v-deep 会警告组合符的用法已被弃用,改为:deep()",-1),v=o('<figure><img src="'+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//警告例子</span>
<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span> scoped<span class="token operator">&gt;</span>
<span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">deep</span><span class="token regex-delimiter">/</span></span> <span class="token punctuation">.</span>main<span class="token punctuation">{</span>
	<span class="token literal-property property">height</span><span class="token operator">:</span> 520px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;&gt;</span> <span class="token punctuation">.</span>main<span class="token punctuation">{</span>
	<span class="token literal-property property">height</span><span class="token operator">:</span> 520px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">:</span><span class="token operator">:</span>v<span class="token operator">-</span>deep <span class="token punctuation">.</span>main <span class="token punctuation">{</span>
	<span class="token literal-property property">height</span><span class="token operator">:</span> 520px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>


<span class="token comment">//正确例子</span>
<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span> scoped<span class="token operator">&gt;</span>
<span class="token operator">:</span><span class="token function">deep</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">.</span>main</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token literal-property property">height</span><span class="token operator">:</span> 520px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function k(m,g){return e(),t("div",null,[i,r,d,u,p(" more "),v])}const _=a(c,[["render",k],["__file","scss-deep.html.vue"]]);export{_ as default};
