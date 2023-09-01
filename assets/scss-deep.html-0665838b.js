import{aQ as a,S as e,U as t,ac as p,V as s,ad as n,aR as c}from"./framework-c3f43f5f.js";const l={},o=s("h1",{id:"vue3-0-深度选择器-和-deep-、-v-deep-被弃用",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vue3-0-深度选择器-和-deep-、-v-deep-被弃用","aria-hidden":"true"},"#"),n(" Vue3.0 深度选择器＞＞＞ 和 /deep/ 、 ::v-deep 被弃用")],-1),i=s("p",null,[s("strong",null,">>>"),n(" 和 **/deep/**在 vue3 中使用直接报错。")],-1),u=s("p",null,"[@vue/compiler-sfc] ::v-deep usage as a combinator has been deprecated. Use :deep() instead.",-1),d=s("p",null,"::v-deep 会警告组合符的用法已被弃用,改为:deep()",-1),r=c(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>//警告例子
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function v(k,m){return e(),t("div",null,[o,i,u,d,p(" more "),r])}const b=a(l,[["render",v],["__file","scss-deep.html.vue"]]);export{b as default};
