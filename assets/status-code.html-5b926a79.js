import{_ as a,X as r,Y as t,a4 as i,Z as e,$ as d,a5 as n}from"./framework-8b166872.js";const h="/http/bg1.jpg",o="/http/bg2.jpg",p="/http/bg3.png",s="/http/bg4.png",c="/http/bg5.jpg",l={},u=e("h1",{id:"http-状态码-http-status-code",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#http-状态码-http-status-code","aria-hidden":"true"},"#"),d(" HTTP 状态码（HTTP Status Code）")],-1),x=e("p",null,"了解 HTTP 经常出现的状态码",-1),f=n('<figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_1xx-临时响应" tabindex="-1"><a class="header-anchor" href="#_1xx-临时响应" aria-hidden="true">#</a> 1xx（临时响应）</h2><p>这一类型的状态码，代表请求已被接受，需要继续处理。这类响应是临时响应，只包含状态行和某些可选的响应头信息，并以空行结束。由于 HTTP/1.0 协议中没有定义任何 1xx 状态码，所以除非在某些试验条件下，服务器禁止向此类客户端发送 1xx 响应。</p><h3 id="_100-continue" tabindex="-1"><a class="header-anchor" href="#_100-continue" aria-hidden="true">#</a> 100 Continue</h3><p>客户端应当继续发送请求。这个临时响应是用来通知客户端它的部分请求已经被服务器接收，且仍未被拒绝。客户端应当继续发送请求的剩余部分，或者如果请求已经完成，忽略这个响应。服务器必须在请求完成后向客户端发送一个最终响应。</p><h3 id="_101-switching-protocols" tabindex="-1"><a class="header-anchor" href="#_101-switching-protocols" aria-hidden="true">#</a> 101 Switching Protocols</h3><p>服务器已经理解了客户端的请求，并将通过 Upgrade 消息头通知客户端采用不同的协议来完成这个请求。在发送完这个响应最后的空行后，服务器将会切换到在 Upgrade 消息头中定义的那些协议。</p><p>只有在切换新的协议更有好处的时候才应该采取类似措施。例如，切换到新的 HTTP 版本比旧版本更有优势，或者切换到一个实时且同步的协议以传送利用此类特性的资源。</p><h3 id="_102-processing" tabindex="-1"><a class="header-anchor" href="#_102-processing" aria-hidden="true">#</a> 102 Processing</h3><p>由 WebDAV 扩展的状态码，代表处理将被继续执行。</p><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_2xx-成功" tabindex="-1"><a class="header-anchor" href="#_2xx-成功" aria-hidden="true">#</a> 2xx（成功）</h2><p>这一类型的状态码，代表请求已成功被服务器接收、理解、并接受。</p><h3 id="⭐-200-ok" tabindex="-1"><a class="header-anchor" href="#⭐-200-ok" aria-hidden="true">#</a> ⭐ 200 OK</h3><p>请求已成功，请求所希望的响应头或数据体将随此响应返回。出现此状态码是表示正常状态。</p><h3 id="_201-created" tabindex="-1"><a class="header-anchor" href="#_201-created" aria-hidden="true">#</a> 201 Created</h3><p>请求已经被实现，而且有一个新的资源已经依据请求的需要而建立，且其 URI 已经随 Location 头信息返回。假如需要的资源无法及时建立的话，应当返回 &#39;202 Accepted&#39;。</p><h3 id="_202-accepted" tabindex="-1"><a class="header-anchor" href="#_202-accepted" aria-hidden="true">#</a> 202 Accepted</h3><p>服务器已接受请求，但尚未处理。正如它可能被拒绝一样，最终该请求可能会也可能不会被执行。在异步操作的场合下，没有比发送这个状态码更方便的做法了。</p><p>返回 202 状态码的响应的目的是允许服务器接受其他过程的请求（例如某个每天只执行一次的基于批处理的操作），而不必让客户端一直保持与服务器的连接直到批处理操作全部完成。在接受请求处理并返回 202 状态码的响应应当在返回的实体中包含一些指示处理当前状态的信息，以及指向处理状态监视器或状态预测的指针，以便用户能够估计操作是否已经完成。</p><h3 id="_203-non-authoritative-information" tabindex="-1"><a class="header-anchor" href="#_203-non-authoritative-information" aria-hidden="true">#</a> 203 Non-Authoritative Information</h3><p>服务器已成功处理了请求，但返回的实体头部元信息不是在原始服务器上有效的确定集合，而是来自本地或者第三方的拷贝。当前的信息可能是原始版本的子集或者超集。例如，包含资源的元数据可能导致原始服务器知道元信息的超集。使用此状态码不是必须的，而且只有在响应不使用此状态码便会返回 200 OK 的情况下才是合适的。</p><h3 id="_204-no-content" tabindex="-1"><a class="header-anchor" href="#_204-no-content" aria-hidden="true">#</a> 204 No Content</h3><p>服务器成功处理了请求，但不需要返回任何实体内容，并且希望返回更新了的元信息。响应可能通过实体头部的形式，返回新的或更新后的元信息。如果存在这些头部信息，则应当与所请求的变量相呼应。</p><p>如果客户端是浏览器的话，那么用户浏览器应保留发送了该请求的页面，而不产生任何文档视图上的变化，即使按照规范新的或更新后的元信息应当被应用到用户浏览器活动视图中的文档。</p><p>由于 204 响应被禁止包含任何消息体，因此它始终以消息头后的第一个空行结尾。</p><h3 id="_205-reset-content" tabindex="-1"><a class="header-anchor" href="#_205-reset-content" aria-hidden="true">#</a> 205 Reset Content</h3><p>服务器成功处理了请求，且没有返回任何内容。但是与 204 响应不同，返回此状态码的响应要求请求者重置文档视图。该响应主要是被用于接受用户输入后，立即重置表单，以便用户能够轻松地开始另一次输入。</p><p>与 204 响应一样，该响应也被禁止包含任何消息体，且以消息头后的第一个空行结束。</p><h3 id="_206-partial-content" tabindex="-1"><a class="header-anchor" href="#_206-partial-content" aria-hidden="true">#</a> 206 Partial Content</h3><p>服务器已经成功处理了部分 GET 请求。类似于 FlashGet 或者迅雷这类的 HTTP 下载工具都是使用此类响应实现断点续传或者将一个大文档分解为多个下载段同时下载。</p><p>该请求必须包含 Range 头信息来指示客户端希望得到的内容范围，并且可能包含 If-Range 来作为请求条件。 响应必须包含如下的头部域：</p><p>Content-Range 用以指示本次响应中返回的内容的范围；如果是 Content-Type 为 multipart/byteranges 的多段下载，则每一 multipart 段中都应包含 Content-Range 域用以指示本段的内容范围。假如响应中包含 Content-Length，那么它的数值必须匹配它返回的内容范围的真实字节数。</p><p>Date</p><p>ETag 和/或 Content-Location，假如同样的请求本应该返回 200 响应。</p><p>Expires, Cache-Control，和/或 Vary，假如其值可能与之前相同变量的其他响应对应的值不同的话。</p><p>假如本响应请求使用了 If-Range 强缓存验证，那么本次响应不应该包含其他实体头；假如本响应的请求使用了 If-Range 弱缓存验证，那么本次响应禁止包含其他实体头；这避免了缓存的实体内容和更新了的实体头信息之间的不一致。否则，本响应就应当包含所有本应该返回 200 响应中应当返回的所有实体头部域。</p><p>假如 ETag 或 Last-Modified 头部不能精确匹配的话，则客户端缓存应禁止将 206 响应返回的内容与之前任何缓存过的内容组合在一起。</p><h3 id="_207-multi-status" tabindex="-1"><a class="header-anchor" href="#_207-multi-status" aria-hidden="true">#</a> 207 Multi-Status</h3><p>由 WebDAV 扩展的状态码，代表之后的消息体将是一个 XML 消息，并且可能依照之前子请求数量的不同，包含一系列独立的响应代码。</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_3xx-重定向" tabindex="-1"><a class="header-anchor" href="#_3xx-重定向" aria-hidden="true">#</a> 3xx（重定向）</h2><p>这类状态码代表需要客户端采取进一步的操作才能完成请求。通常，这些状态码用来重定向，后续的请求地址（重定向目标）在本次响应的 Location 域中指明。</p><p>当且仅当后续的请求所使用的方法是 GET 或者 HEAD 时，用户浏览器才可以在没有用户介入的情况下自动提交所需要的后续请求。客户端应当自动监测无限循环重定向（例如：A-&gt;A，或者 A-&gt;B-&gt;C-&gt;A），因为这会导致服务器和客户端大量不必要的资源消耗。按照 HTTP/1.0 版规范的建议，浏览器不应自动访问超过 5 次的重定向。</p><h3 id="_300-multiple-choices" tabindex="-1"><a class="header-anchor" href="#_300-multiple-choices" aria-hidden="true">#</a> 300 Multiple Choices</h3><p>被请求的资源有一系列可供选择的回馈信息，每个都有自己特定的地址和浏览器驱动的商议信息。用户或浏览器能够自行选择一个首选的地址进行重定向。</p><p>除非这是一个 HEAD 请求，否则该响应应当包括一个资源特性及地址的列表的实体，以便用户或浏览器从中选择最合适的重定向地址。这个实体的格式由 Content-Type 定义的格式所决定。浏览器可能根据响应的格式以及浏览器自身能力，自动作出最合适的选择。当然，规范并没有规定这样的自动选择该如何进行。</p><p>如果服务器本身已经有了首选的回馈选择，那么在 Location 中应当指明这个回馈的 URI；浏览器可能会将这个 Location 值作为自动重定向的地址。此外，除非额外指定，否则这个响应也是可缓存的。</p><h3 id="⭐-301-moved-permanently" tabindex="-1"><a class="header-anchor" href="#⭐-301-moved-permanently" aria-hidden="true">#</a> ⭐ 301 Moved Permanently</h3><p>被请求的资源已永久移动到新位置，并且将来任何对此资源的引用都应该使用本响应返回的若干个 URI 之一。如果可能，拥有链接编辑功能的客户端应当自动把请求的地址修改为从服务器反馈回来的地址。除非额外指定，否则这个响应也是可缓存的。</p><p>新的永久性的 URI 应当在响应的 Location 域中返回。除非这是一个 HEAD 请求，否则响应的实体中应当包含指向新的 URI 的超链接及简短说明。</p><p>如果这不是一个 GET 或者 HEAD 请求，因此浏览器禁止自动进行重定向，除非得到用户的确认，因为请求的条件可能因此发生变化。 注意：对于某些使用 HTTP/1.0 协议的浏览器，当它们发送的 POST 请求得到了一个 301 响应的话，接下来的重定向请求将会变成 GET 方式。</p><h3 id="⭐-302-move-temporarily" tabindex="-1"><a class="header-anchor" href="#⭐-302-move-temporarily" aria-hidden="true">#</a> ⭐ 302 Move Temporarily</h3><p>请求的资源临时从不同的 URI 响应请求。由于这样的重定向是临时的，客户端应当继续向原有地址发送以后的请求。只有在 Cache-Control 或 Expires 中进行了指定的情况下，这个响应才是可缓存的。</p><p>上文有提及。</p><p>如果这不是一个 GET 或者 HEAD 请求，那么浏览器禁止自动进行重定向，除非得到用户的确认，因为请求的条件可能因此发生变化。</p><h3 id="_303-see-other" tabindex="-1"><a class="header-anchor" href="#_303-see-other" aria-hidden="true">#</a> 303 See Other</h3><p>对应当前请求的响应可以在另一个 URL 上被找到，而且客户端应当采用 GET 的方式访问那个资源。这个方法的存在主要是为了允许由脚本激活的 POST 请求输出重定向到一个新的资源。这个新的 URI 不是原始资源的替代引用。同时，303 响应禁止被缓存。当然，第二个请求（重定向）可能被缓存。</p><p>注意：许多 HTTP/1.1 版以前的浏览器不能正确理解 303 状态。如果需要考虑与这些浏览器之间的互动，302 状态码应该可以胜任，因为大多数的浏览器处理 302 响应时的方式恰恰就是上述规范要求客户端处理 303 响应时应当做的。</p><h3 id="⭐-304-not-modified" tabindex="-1"><a class="header-anchor" href="#⭐-304-not-modified" aria-hidden="true">#</a> ⭐ 304 Not Modified</h3><p>如果客户端发送了一个带条件的 GET 请求且该请求已被允许，而文档的内容（自上次访问以来或者根据请求的条件）并没有改变，则服务器应当返回这个状态码。304 响应禁止包含消息体，因此始终以消息头后的第一个空行结尾。</p><p>该响应必须包含以下的头信息：</p><p>Date，除非这个服务器没有时钟。假如没有时钟的服务器也遵守这些规则，那么代理服务器以及客户端可以自行将 Date 字段添加到接收到的响应头中去，缓存机制将会正常工作。</p><p>ETag 和/或 Content-Location，假如同样的请求本应返回 200 响应。</p><p>Expires, Cache-Control，和/或 Vary，假如其值可能与之前相同变量的其他响应对应的值不同的话。</p><p>假如本响应请求使用了强缓存验证，那么本次响应不应该包含其他实体头；否则（例如，某个带条件的 GET 请求使用了弱缓存验证），本次响应禁止包含其他实体头；这避免了缓存了的实体内容和更新了的实体头信息之间的不一致。</p><p>假如某个 304 响应指明了当前某个实体没有缓存，那么缓存系统必须忽视这个响应，并且重复发送不包含限制条件的请求。</p><p>假如接收到一个要求更新某个缓存条目的 304 响应，那么缓存系统必须更新整个条目以反映所有在响应中被更新的字段的值。</p><h3 id="_305-use-proxy" tabindex="-1"><a class="header-anchor" href="#_305-use-proxy" aria-hidden="true">#</a> 305 Use Proxy</h3><p>被请求的资源必须通过指定的代理才能被访问。Location 域中将给出指定的代理所在的 URI 信息，接收者需要重复发送一个单独的请求，通过这个代理才能访问相应资源。只有原始服务器才能建立 305 响应。</p><h3 id="_306-switch-proxy" tabindex="-1"><a class="header-anchor" href="#_306-switch-proxy" aria-hidden="true">#</a> 306 Switch Proxy</h3><p>在最新版的规范中，306 状态码已经不再被使用。</p><h3 id="_307-temporary-redirect" tabindex="-1"><a class="header-anchor" href="#_307-temporary-redirect" aria-hidden="true">#</a> 307 Temporary Redirect</h3><p>请求的资源临时从不同的 URI 响应请求。</p><p>新的临时性的 URI 应当在响应的 Location 域中返回。除非这是一个 HEAD 请求，否则响应的实体中应当包含指向新的 URI 的超链接及简短说明。因为部分浏览器不能识别 307 响应，因此需要添加上述必要信息以便用户能够理解并向新的 URI 发出访问请求。</p><p>如果这不是一个 GET 或者 HEAD 请求，那么浏览器禁止自动进行重定向，除非得到用户的确认，因为请求的条件可能因此发生变化。</p><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_4xx-请求错误" tabindex="-1"><a class="header-anchor" href="#_4xx-请求错误" aria-hidden="true">#</a> 4xx（请求错误）</h2><p>这类的状态码代表了客户端看起来可能发生了错误，妨碍了服务器的处理。除非响应的是一个 HEAD 请求，否则服务器就应该返回一个解释当前错误状况的实体，以及这是临时的还是永久性的状况。这些状态码适用于任何请求方法。浏览器应当向用户显示任何包含在此类错误响应中的实体内容。</p><p>如果错误发生时客户端正在传送数据，那么使用 TCP 的服务器实现应当仔细确保在关闭客户端与服务器之间的连接之前，客户端已经收到了包含错误信息的数据包。如果客户端在收到错误信息后继续向服务器发送数据，服务器的 TCP 栈将向客户端发送一个重置数据包，以清除该客户端所有还未识别的输入缓冲，以免这些数据被服务器上的应用程序读取并干扰后者。</p><h3 id="⭐-400-bad-request" tabindex="-1"><a class="header-anchor" href="#⭐-400-bad-request" aria-hidden="true">#</a> ⭐ 400 Bad Request</h3><ol><li>语义有误，当前请求无法被服务器理解。除非进行修改，否则客户端不应该重复提交这个请求。</li><li>请求参数有误。</li></ol><h3 id="⭐-401-unauthorized" tabindex="-1"><a class="header-anchor" href="#⭐-401-unauthorized" aria-hidden="true">#</a> ⭐ 401 Unauthorized</h3><p>当前请求需要用户验证。该响应必须包含一个适用于被请求资源的 WWW-Authenticate 信息头用以询问用户信息。客户端可以重复提交一个包含恰当的 Authorization 头信息的请求。如果当前请求已经包含了 Authorization 证书，那么 401 响应代表着服务器验证已经拒绝了那些证书。如果 401 响应包含了与前一个响应相同的身份验证询问，且浏览器已经至少尝试了一次验证，那么浏览器应当向用户展示响应中包含的实体信息，因为这个实体信息中可能包含了相关诊断信息。</p><h3 id="_402-payment-required" tabindex="-1"><a class="header-anchor" href="#_402-payment-required" aria-hidden="true">#</a> 402 Payment Required</h3><p>该状态码是为了将来可能的需求而预留的。</p><h3 id="⭐-403-forbidden" tabindex="-1"><a class="header-anchor" href="#⭐-403-forbidden" aria-hidden="true">#</a> ⭐ 403 Forbidden</h3><p>服务器已经理解请求，但是拒绝执行它。与 401 响应不同的是，身份验证并不能提供任何帮助，而且这个请求也不应该被重复提交。</p><p>如果这不是一个 HEAD 请求，而且服务器希望能够讲清楚为何请求不能被执行，那么就应该在实体内描述拒绝的原因。当然服务器也可以返回一个 404 响应，假如它不希望让客户端获得任何信息。</p><h3 id="⭐-404-not-found" tabindex="-1"><a class="header-anchor" href="#⭐-404-not-found" aria-hidden="true">#</a> ⭐ 404 Not Found</h3><p>请求失败，请求所希望得到的资源未被在服务器上发现。没有信息能够告诉用户这个状况到底是暂时的还是永久的。假如服务器知道情况的话，应当使用 410 状态码来告知旧资源因为某些内部的配置机制问题，已经永久的不可用，而且没有任何可以跳转的地址。404 这个状态码被广泛应用于当服务器不想揭示到底为何请求被拒绝或者没有其他适合的响应可用的情况下。出现这个错误的最有可能的原因是服务器端没有这个页面。</p><h3 id="_405-method-not-allowed" tabindex="-1"><a class="header-anchor" href="#_405-method-not-allowed" aria-hidden="true">#</a> 405 Method Not Allowed</h3><p>请求行中指定的请求方法不能被用于请求相应的资源。该响应必须返回一个 Allow 头信息用以表示出当前资源能够接受的请求方法的列表。</p><p>鉴于 PUT，DELETE 方法会对服务器上的资源进行写操作，因而绝大部分的网页服务器都不支持或者在默认配置下不允许上述请求方法，对于此类请求均会返回 405 错误。</p><h3 id="_406-not-acceptable" tabindex="-1"><a class="header-anchor" href="#_406-not-acceptable" aria-hidden="true">#</a> 406 Not Acceptable</h3><p>请求的资源的内容特性无法满足请求头中的条件，因而无法生成响应实体。</p><p>除非这是一个 HEAD 请求，否则该响应就应当返回一个包含可以让用户或者浏览器从中选择最合适的实体特性以及地址列表的实体。实体的格式由 Content-Type 头中定义的媒体类型决定。浏览器可以根据格式及自身能力自行作出最佳选择。但是，规范中并没有定义任何作出此类自动选择的标准。</p><h3 id="_407-proxy-authentication-required" tabindex="-1"><a class="header-anchor" href="#_407-proxy-authentication-required" aria-hidden="true">#</a> 407 Proxy Authentication Required</h3><p>与 401 响应类似，只不过客户端必须在代理服务器上进行身份验证。代理服务器必须返回一个 Proxy-Authenticate 用以进行身份询问。客户端可以返回一个 Proxy-Authorization 信息头用以验证。</p><h3 id="_408-request-timeout" tabindex="-1"><a class="header-anchor" href="#_408-request-timeout" aria-hidden="true">#</a> 408 Request Timeout</h3><p>请求超时。客户端没有在服务器预备等待的时间内完成一个请求的发送。客户端可以随时再次提交这一请求而无需进行任何更改。</p><h3 id="_409-conflict" tabindex="-1"><a class="header-anchor" href="#_409-conflict" aria-hidden="true">#</a> 409 Conflict</h3><p>由于和被请求的资源的当前状态之间存在冲突，请求无法完成。这个代码只允许用在这样的情况下才能被使用：用户被认为能够解决冲突，并且会重新提交新的请求。该响应应当包含足够的信息以便用户发现冲突的源头。 冲突通常发生于对 PUT 请求的处理中。例如，在采用版本检查的环境下，某次 PUT 提交的对特定资源的修改请求所附带的版本信息与之前的某个（第三方）请求向冲突，那么此时服务器就应该返回一个 409 错误，告知用户请求无法完成。此时，响应实体中很可能会包含两个冲突版本之间的差异比较，以便用户重新提交归并以后的新版本。</p><h3 id="_410-gone" tabindex="-1"><a class="header-anchor" href="#_410-gone" aria-hidden="true">#</a> 410 Gone</h3><p>被请求的资源在服务器上已经不再可用，而且没有任何已知的转发地址。这样的状况应当被认为是永久性的。如果可能，拥有链接编辑功能的客户端应当在获得用户许可后删除所有指向这个地址的引用。如果服务器不知道或者无法确定这个状况是否是永久的，那么就应该使用 404 状态码。除非额外说明，否则这个响应是可缓存的。</p><p>410 响应的目的主要是帮助网站管理员维护网站，通知用户该资源已经不再可用，并且服务器拥有者希望所有指向这个资源的远端连接也被删除。这类事件在限时、增值服务中很普遍。同样，410 响应也被用于通知客户端在当前服务器站点上，原本属于某个个人的资源已经不再可用。当然，是否需要把所有永久不可用的资源标记为&#39;410 Gone&#39;，以及是否需要保持此标记多长时间，完全取决于服务器拥有者。</p><h3 id="_411-length-required" tabindex="-1"><a class="header-anchor" href="#_411-length-required" aria-hidden="true">#</a> 411 Length Required</h3><p>服务器拒绝在没有定义 Content-Length 头的情况下接受请求。在添加了表明请求消息体长度的有效 Content-Length 头之后，客户端可以再次提交该请求。</p><h3 id="_412-precondition-failed" tabindex="-1"><a class="header-anchor" href="#_412-precondition-failed" aria-hidden="true">#</a> 412 Precondition Failed</h3><p>服务器在验证在请求的头字段中给出先决条件时，没能满足其中的一个或多个。这个状态码允许客户端在获取资源时在请求的元信息（请求头字段数据）中设置先决条件，以此避免该请求方法被应用到其希望的内容以外的资源上。</p><h3 id="_413-request-entity-too-large" tabindex="-1"><a class="header-anchor" href="#_413-request-entity-too-large" aria-hidden="true">#</a> 413 Request Entity Too Large</h3><p>服务器拒绝处理当前请求，因为该请求提交的实体数据大小超过了服务器愿意或者能够处理的范围。此种情况下，服务器可以关闭连接以免客户端继续发送此请求。 如果这个状况是临时的，服务器应当返回一个 Retry-After 的响应头，以告知客户端可以在多少时间以后重新尝试。</p><h3 id="_414-request-uri-too-long" tabindex="-1"><a class="header-anchor" href="#_414-request-uri-too-long" aria-hidden="true">#</a> 414 Request-URI Too Long</h3><p>请求的 URI 长度超过了服务器能够解释的长度，因此服务器拒绝对该请求提供服务。这比较少见，通常的情况包括：</p><p>本应使用 POST 方法的表单提交变成了 GET 方法，导致查询字符串（Query String）过长。</p><p>重定向 URI “黑洞”，例如每次重定向把旧的 URI 作为新的 URI 的一部分，导致在若干次重定向后 URI 超长。</p><p>客户端正在尝试利用某些服务器中存在的安全漏洞攻击服务器。这类服务器使用固定长度的缓冲读取或操作请求的 URI，当 GET 后的参数超过某个数值后，可能会产生缓冲区溢出，导致任意代码被执行[1]。没有此类漏洞的服务器，应当返回 414 状态码。</p><h3 id="_415-unsupported-media-type" tabindex="-1"><a class="header-anchor" href="#_415-unsupported-media-type" aria-hidden="true">#</a> 415 Unsupported Media Type</h3><p>对于当前请求的方法和所请求的资源，请求中提交的实体并不是服务器中所支持的格式，因此请求被拒绝。</p><h3 id="_416-requested-range-not-satisfiable" tabindex="-1"><a class="header-anchor" href="#_416-requested-range-not-satisfiable" aria-hidden="true">#</a> 416 Requested Range Not Satisfiable</h3><p>如果请求中包含了 Range 请求头，并且 Range 中指定的任何数据范围都与当前资源的可用范围不重合，同时请求中又没有定义 If-Range 请求头，那么服务器就应当返回 416 状态码。</p><p>假如 Range 使用的是字节范围，那么这种情况就是指请求指定的所有数据范围的首字节位置都超过了当前资源的长度。服务器也应当在返回 416 状态码的同时，包含一个 Content-Range 实体头，用以指明当前资源的长度。这个响应也被禁止使用 multipart/byteranges 作为其 Content-Type。</p><h3 id="_417-expectation-failed" tabindex="-1"><a class="header-anchor" href="#_417-expectation-failed" aria-hidden="true">#</a> 417 Expectation Failed</h3><p>在请求头 Expect 中指定的预期内容无法被服务器满足，或者这个服务器是一个代理服务器，它有明显的证据证明在当前路由的下一个节点上，Expect 的内容无法被满足。</p><h3 id="_418-i-m-a-teapot" tabindex="-1"><a class="header-anchor" href="#_418-i-m-a-teapot" aria-hidden="true">#</a> 418 I&#39;m a teapot</h3><h3 id="_421-misdirected-request" tabindex="-1"><a class="header-anchor" href="#_421-misdirected-request" aria-hidden="true">#</a> 421 Misdirected Request</h3><p>请求被指向到无法生成响应的服务器（比如由于连接重复使用）</p><h3 id="_422-unprocessable-entity" tabindex="-1"><a class="header-anchor" href="#_422-unprocessable-entity" aria-hidden="true">#</a> 422 Unprocessable Entity</h3><p>请求格式正确，但是由于含有语义错误，无法响应。</p><h3 id="_423-locked" tabindex="-1"><a class="header-anchor" href="#_423-locked" aria-hidden="true">#</a> 423 Locked</h3><p>当前资源被锁定。</p><h3 id="_424-failed-dependency" tabindex="-1"><a class="header-anchor" href="#_424-failed-dependency" aria-hidden="true">#</a> 424 Failed Dependency</h3><p>由于之前的某个请求发生的错误，导致当前请求失败，例如 PROPPATCH。</p><h3 id="_425-too-early" tabindex="-1"><a class="header-anchor" href="#_425-too-early" aria-hidden="true">#</a> 425 Too Early</h3><p>状态码 425 Too Early 代表服务器不愿意冒风险来处理该请求，原因是处理该请求可能会被“重放”，从而造成潜在的重放攻击。</p><h3 id="_426-upgrade-required" tabindex="-1"><a class="header-anchor" href="#_426-upgrade-required" aria-hidden="true">#</a> 426 Upgrade Required</h3><p>客户端应当切换到 TLS/1.0。</p><h3 id="_449-retry-with" tabindex="-1"><a class="header-anchor" href="#_449-retry-with" aria-hidden="true">#</a> 449 Retry With</h3><p>由微软扩展，代表请求应当在执行完适当的操作后进行重试。</p><h3 id="_451-unavailable-for-legal-reasons" tabindex="-1"><a class="header-anchor" href="#_451-unavailable-for-legal-reasons" aria-hidden="true">#</a> 451 Unavailable For Legal Reasons</h3><p>该请求因法律原因不可用。</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_5xx-服务器错误" tabindex="-1"><a class="header-anchor" href="#_5xx-服务器错误" aria-hidden="true">#</a> 5xx（服务器错误）</h2><p>这类状态码代表了服务器在处理请求的过程中有错误或者异常状态发生，也有可能是服务器意识到以当前的软硬件资源无法完成对请求的处理。除非这是一个 HEAD 请求，否则服务器应当包含一个解释当前错误状态以及这个状况是临时的还是永久的解释信息实体。浏览器应当向用户展示任何在当前响应中被包含的实体。</p><p>这些状态码适用于任何响应方法。</p><h3 id="⭐-500-internal-server-error" tabindex="-1"><a class="header-anchor" href="#⭐-500-internal-server-error" aria-hidden="true">#</a> ⭐ 500 Internal Server Error</h3><p>服务器遇到了一个未曾预料的状况，导致了它无法完成对请求的处理。一般来说，这个问题都会在服务器端的源代码出现错误时出现。</p><h3 id="⭐-501-not-implemented" tabindex="-1"><a class="header-anchor" href="#⭐-501-not-implemented" aria-hidden="true">#</a> ⭐ 501 Not Implemented</h3><p>服务器不支持当前请求所需要的某个功能。当服务器无法识别请求的方法，并且无法支持其对任何资源的请求。</p><h3 id="⭐-502-bad-gateway" tabindex="-1"><a class="header-anchor" href="#⭐-502-bad-gateway" aria-hidden="true">#</a> ⭐ 502 Bad Gateway</h3><p>作为网关或者代理工作的服务器尝试执行请求时，从上游服务器接收到无效的响应。</p><h3 id="⭐-503-service-unavailable" tabindex="-1"><a class="header-anchor" href="#⭐-503-service-unavailable" aria-hidden="true">#</a> ⭐ 503 Service Unavailable</h3><p>由于临时的服务器维护或者过载，服务器当前无法处理请求。这个状况是临时的，并且将在一段时间以后恢复。如果能够预计延迟时间，那么响应中可以包含一个 Retry-After 头用以标明这个延迟时间。如果没有给出这个 Retry-After 信息，那么客户端应当以处理 500 响应的方式处理它。</p><p>注意：503 状态码的存在并不意味着服务器在过载的时候必须使用它。某些服务器只不过是希望拒绝客户端的连接。</p><h3 id="⭐-504-gateway-timeout" tabindex="-1"><a class="header-anchor" href="#⭐-504-gateway-timeout" aria-hidden="true">#</a> ⭐ 504 Gateway Timeout</h3><p>作为网关或者代理工作的服务器尝试执行请求时，未能及时从上游服务器（URI 标识出的服务器，例如 HTTP、FTP、LDAP）或者辅助服务器（例如 DNS）收到响应。</p><p>注意：某些代理服务器在 DNS 查询超时时会返回 400 或者 500 错误</p><h3 id="_505-http-version-not-supported" tabindex="-1"><a class="header-anchor" href="#_505-http-version-not-supported" aria-hidden="true">#</a> 505 HTTP Version Not Supported</h3><p>服务器不支持，或者拒绝支持在请求中使用的 HTTP 版本。这暗示着服务器不能或不愿使用与客户端相同的版本。响应中应当包含一个描述了为何版本不被支持以及服务器支持哪些协议的实体。</p><h3 id="_506-variant-also-negotiates" tabindex="-1"><a class="header-anchor" href="#_506-variant-also-negotiates" aria-hidden="true">#</a> 506 Variant Also Negotiates</h3><p>由《透明内容协商协议》扩展，代表服务器存在内部配置错误：被请求的协商变元资源被配置为在透明内容协商中使用自己，因此在一个协商处理中不是一个合适的重点。</p><h3 id="_507-insufficient-storage" tabindex="-1"><a class="header-anchor" href="#_507-insufficient-storage" aria-hidden="true">#</a> 507 Insufficient Storage</h3><p>服务器无法存储完成请求所必须的内容。这个状况被认为是临时的。WebDAV</p><h3 id="_509-bandwidth-limit-exceeded" tabindex="-1"><a class="header-anchor" href="#_509-bandwidth-limit-exceeded" aria-hidden="true">#</a> 509 Bandwidth Limit Exceeded</h3><p>服务器达到带宽限制。这不是一个官方的状态码，但是仍被广泛使用。</p><h3 id="_510-not-extended" tabindex="-1"><a class="header-anchor" href="#_510-not-extended" aria-hidden="true">#</a> 510 Not Extended</h3><p>获取资源所需要的策略并没有被满足。</p><h3 id="_600-unparseable-response-headers" tabindex="-1"><a class="header-anchor" href="#_600-unparseable-response-headers" aria-hidden="true">#</a> 600 Unparseable Response Headers</h3><p>源站没有返回响应头部，只返回实体内容。</p>',169);function _(b,g){return r(),t("div",null,[u,x,i(" more "),f])}const y=a(l,[["render",_],["__file","status-code.html.vue"]]);export{y as default};
