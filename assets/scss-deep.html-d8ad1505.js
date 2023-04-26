import{_ as a,X as e,Y as t,a4 as p,Z as s,$ as n,a5 as c}from"./framework-8b166872.js";const l="/vue/scss-deep/bg.jpg",o={},i=s("h1",{id:"vue3-0-深度选择器-和-deep-、-v-deep-被弃用",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vue3-0-深度选择器-和-deep-、-v-deep-被弃用","aria-hidden":"true"},"#"),n(" Vue3.0 深度选择器＞＞＞ 和 /deep/ 、 ::v-deep 被弃用")],-1),u=s("p",null,[s("strong",null,">>>"),n(" 和 **/deep/**在 vue3 中使用直接报错。")],-1),d=s("p",null,"[@vue/compiler-sfc] ::v-deep usage as a combinator has been deprecated. Use :deep() instead.",-1),r=s("p",null,"::v-deep 会警告组合符的用法已被弃用,改为:deep()",-1),v=c('<figure><img src="'+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>//警告例子
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">/deep/ .main</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 520px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">&gt;&gt;&gt; .main</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 520px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">::v-deep .main</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 520px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

//正确例子
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">:deep(.main)</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 520px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function k(m,g){return e(),t("div",null,[i,u,d,r,p(" more "),v])}const _=a(o,[["render",k],["__file","scss-deep.html.vue"]]);export{_ as default};
