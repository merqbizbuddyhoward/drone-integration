webpackJsonp([35783957827783],{161:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(1),f=o(c),p=n(2),d=o(p),h=n(19),y=n(4),v=o(y),_=n(13),b=o(_),m=n(18),g=o(m),w=n(32),O=n(11),T=o(O),x=n(167),P=o(x),j=n(33),E=o(j),k=n(15),N=o(k),C=n(164),S=o(C),R=n(165),M=o(R),z=n(166),I=o(z),L=n(38),D=o(L),B=n(3),W=o(B),H=W.default.ARTICLE,A=1e4,X=function(e){function t(e,n){i(this,t);var o=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));o._onScroll=o._onScroll.bind(o),o._onWheel=o._onWheel.bind(o),o._onTouchStart=o._onTouchStart.bind(o),o._onTouchMove=o._onTouchMove.bind(o),o._onResize=o._onResize.bind(o),o._onNext=o._onNext.bind(o),o._onPrevious=o._onPrevious.bind(o),o._onTogglePlay=o._onTogglePlay.bind(o),o._onSelect=o._onSelect.bind(o),o._checkControls=o._checkControls.bind(o),o._checkPreviousNextControls=o._checkPreviousNextControls.bind(o),o._onResponsive=o._onResponsive.bind(o),o._updateHiddenElements=o._updateHiddenElements.bind(o),o._updateProgress=o._updateProgress.bind(o);var r="undefined"!=typeof navigator&&navigator.userAgent.indexOf("Firefox")===-1&&navigator.userAgent.indexOf("Edge")===-1;return o.state={selectedIndex:e.selected||0,playing:!1,accessibilityTabbingCompatible:r},o}return a(t,e),u(t,[{key:"componentDidMount",value:function(){this._propsSetup(this.props),this.state.selectedIndex&&this._onSelect(this.state.selectedIndex)}},{key:"componentWillReceiveProps",value:function(e){!e.scrollStep&&this.props.scrollStep&&(g.default.stopListeningToKeyboard(this,this._keys),document.removeEventListener("wheel",this._onWheel),window.removeEventListener("resize",this._onResize)),!e.onProgress&&this.props.onProgress&&(this._responsive&&this._responsive.stop(),this.props.onProgress&&window.removeEventListener("scroll",this._updateProgress)),this._propsSetup(e),"undefined"!=typeof e.selected&&null!==e.selected&&e.selected!==this.state.selectedIndex&&this._onSelect(e.selected)}},{key:"componentWillUnmount",value:function(){this.props.scrollStep&&(g.default.stopListeningToKeyboard(this,this._keys),document.removeEventListener("wheel",this._onWheel),window.removeEventListener("resize",this._onResize)),this._responsive&&this._responsive.stop(),this.props.onProgress&&window.removeEventListener("scroll",this._updateProgress)}},{key:"_propsSetup",value:function(e){var t=e.direction,n=e.full,o=e.onProgress,r=e.scrollStep;r&&(n&&console.warn("Article cannot use `scrollStep` with `full`."),this._keys={up:this._onPrevious,down:this._onNext},"row"===t&&(this._keys={left:this._onPrevious,right:this._onNext},this.state.accessibilityTabbingCompatible&&this._updateHiddenElements()),g.default.startListeningToKeyboard(this,this._keys),document.addEventListener("wheel",this._onWheel),window.addEventListener("resize",this._onResize),this._checkControls(),"row"===t&&(this._responsive=E.default.start(this._onResponsive))),o&&(window.addEventListener("scroll",this._updateProgress),"row"===t&&(this._responsive=E.default.start(this._onResponsive)))}},{key:"_childDOMNode",value:function(e){var t=(0,h.findDOMNode)(this._componentRef);return t.children[e]}},{key:"_checkPreviousNextControls",value:function(e,t,n){var o=this.state.selectedIndex;if(e>0){var r=this._childDOMNode(o+1),i=this._childDOMNode(o-1);if(r){var l=r.getBoundingClientRect()[t]*(o+1);e>l&&this.setState({selectedIndex:o+1})}if(i){var a=i.getBoundingClientRect()[n]*o;e<a&&this.setState({selectedIndex:o-1})}}}},{key:"_checkControls",value:function(){var e=this.props.direction;if("row"===e){var t=this._componentRef.boxContainerRef.scrollLeft;this._checkPreviousNextControls(t,"left","right")}else{var n=this._componentRef.boxContainerRef.scrollTop;this._checkPreviousNextControls(n,"top","bottom")}}},{key:"_visibleIndexes",value:function(){for(var e=this.props,t=e.children,n=e.direction,o=[],r=f.default.Children.count(t),i="row"===n?window.innerWidth:window.innerHeight,l=0;l<r;l+=1){var a=this._childDOMNode(l),s=a.getBoundingClientRect();if("row"===n){if(s.right>10&&s.left<i-10)o.push(l);else if(o.length>0)break}else if(s.bottom>10&&s.top<i-10)o.push(l);else if(o.length>0)break}return o}},{key:"_shortTimer",value:function(e,t){var n=this;this[e]||(this[e]=!0);var o=this[e]+"Timer";clearTimeout(this[o]),this[o]=setTimeout(function(){n[e]=!1},t)}},{key:"_onWheel",value:function(e){var t=this,n=this.props.direction;if("row"===n)this._scrollingHorizontally||this._scrollingVertically||Math.abs(2*e.deltaY)>Math.abs(e.deltaX)&&this._shortTimer("_scrollingVertically",1e3);else{var o=e.deltaY;Math.abs(o)>100?(clearInterval(this._wheelTimer),clearInterval(this._wheelLongTimer),this._wheelLongTimer=setTimeout(function(){t._wheelLongTimer=void 0},2e3)):this._wheelLongTimer||(o>10?(clearInterval(this._wheelTimer),this._wheelTimer=setTimeout(this._onNext,200)):o<-10?(clearInterval(this._wheelTimer),this._wheelTimer=setTimeout(this._onPrevious,200)):(clearInterval(this._controlTimer),this._controlTimer=setTimeout(this._checkControls,200)))}}},{key:"_onScroll",value:function(e){var t=this,n=this.props.direction;if("row"===n){var o=this.state.selectedIndex,r=(0,h.findDOMNode)(this._componentRef),i=this._childDOMNode(o),l=i.getBoundingClientRect();if(e.target===r)if(this._scrollingVertically)r.scrollLeft+=l.left;else{var a=this._priorScrollLeft<r.scrollLeft;clearTimeout(this._scrollTimer),this._scrollTimer=setTimeout(function(){if(!t._resizing){var e=t._visibleIndexes();e.length>1&&a?t._onSelect(e[1]):t._onSelect(e[0])}},100),this._priorScrollLeft=r.scrollLeft}else if(e.target.parentNode===r){if(this.state.accessibilityTabbingCompatible){var s=e.target.children,u=s[s.length-1];l=u.getBoundingClientRect()}l.bottom<=window.innerHeight+24?this.setState({atBottom:!0}):this.setState({atBottom:!1})}}}},{key:"_onTouchStart",value:function(e){var t=e.changedTouches[0];this._touchStartX=t.clientX,this._touchStartY=t.clientY}},{key:"_onTouchMove",value:function(e){var t=e.changedTouches[0],n=t.clientX-this._touchStartX,o=t.clientY-this._touchStartY;Math.abs(o)<Math.abs(2*n)&&(n<0?this._onNext():this._onPrevious())}},{key:"_onResize",value:function(){var e=this;clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(function(){e._onSelect(e.state.selectedIndex),e._shortTimer("_resizing",1e3)},50)}},{key:"_onNext",value:function(e,t){if(!(0,w.isFormElement)(document.activeElement)){var n=this.props.children,o=this.state.selectedIndex,r=f.default.Children.count(n);e&&(this._stop(),e.preventDefault());var i=this._visibleIndexes()[0]+1;i!==o&&(i<r?this._onSelect(Math.min(r-1,i)):t&&this._onSelect(1))}}},{key:"_onPrevious",value:function(e){if(!(0,w.isFormElement)(document.activeElement)){var t=this.state.selectedIndex;e&&(this._stop(),e.preventDefault());var n=this._visibleIndexes()[0]-1;n!==t&&this._onSelect(Math.max(0,n))}}},{key:"_start",value:function(){var e=this;this._playTimer=setInterval(function(){e._onNext(null,!0)},A),this.setState({playing:!0})}},{key:"_stop",value:function(){clearInterval(this._playTimer),this.setState({playing:!1})}},{key:"_onTogglePlay",value:function(e){e.preventDefault(),this.state.playing?this._stop():this._start()}},{key:"_onSelect",value:function(e){var t=this,n=this.props,o=n.direction,r=n.onSelect,i=(0,h.findDOMNode)(this._componentRef),l=this._childDOMNode(e),a=window.innerHeight+24;if(l){if(e!==this.state.selectedIndex){var s=l.parentNode,u=Math.round(s.scrollTop)>=s.scrollHeight-s.clientHeight;l.scrollTop=0,this.setState({selectedIndex:e,atBottom:u},function(){r&&r(e),"row"===o&&t.state.accessibilityTabbingCompatible&&(t._anchorStepRef.focus(),t._updateHiddenElements())})}else l.scrollHeight<=a&&this.setState({atBottom:!0});var c=l.getBoundingClientRect();"row"===o?0!==c.left&&(this._scrollingHorizontally=!0,P.default.scrollBy(i,"scrollLeft",c.left,function(){t._scrollingHorizontally=!1})):0!==c.top&&(this._scrollingVertically=!0,P.default.scrollBy(i,"scrollTop",c.top,function(){t._scrollingVertically=!1}))}}},{key:"_onResponsive",value:function(e){this.setState({narrow:e})}},{key:"_toggleDisableChapter",value:function(e,t){var n=(0,w.filterByFocusable)(e.getElementsByTagName("*"));n&&n.forEach(function(e){t?e.setAttribute("disabled","disabled"):e.removeAttribute("disabled"),e.setAttribute("tabindex",t?"-1":"0")})}},{key:"_updateHiddenElements",value:function(){for(var e=(0,h.findDOMNode)(this._componentRef),t=e.children,n=0;n<t.length;n++){var o=t[n];o.getAttribute("aria-hidden")?this._toggleDisableChapter(o,!0):this._toggleDisableChapter(o,!1)}}},{key:"_updateProgress",value:function(e){var t=this.props,n=t.direction,o=t.responsive,r=this.state.narrow,i=(0,h.findDOMNode)(this._componentRef),l=i.getBoundingClientRect(),a="column"===n?Math.abs(l.top):Math.abs(l.left),s="column"===n?window.innerHeight:this._getChildrenWidth(this._componentRef.boxContainerRef.childNodes),u="column"===n?l.height:l.width;"row"===n&&r&&o!==!1&&(a=Math.abs(l.top),s=window.innerHeight,u=l.height);var c=Math.abs(a/(u-s)),f=Math.round(100*c);this.props.onProgress(f)}},{key:"_renderControls",value:function(){var e=this.props.direction,t=this.state,n=t.atBottom,o=t.narrow,r=t.selectedIndex,i=H+"__control "+H+"__control",l=f.default.Children.count(this.props.children),a=[],s=this.props.a11yTitle||{};return"row"===e?o&&!n||(r>0&&a.push(f.default.createElement(N.default,{key:"previous",plain:!0,a11yTitle:s.previous,className:i+"-left",onClick:this._onPrevious,icon:f.default.createElement(M.default,{a11yTitle:"article-previous-title",size:"large"})})),r<l-1&&a.push(f.default.createElement(N.default,{key:"next",plain:!0,a11yTitle:s.next,className:i+"-right",onClick:this._onNext,icon:f.default.createElement(S.default,{size:"large",a11yTitle:"article-next-title"})}))):(r>0&&a.push(f.default.createElement(N.default,{key:"previous",plain:!0,a11yTitle:s.previous,className:i+"-up",onClick:this._onPrevious},f.default.createElement(I.default,null))),r<l-1&&a.push(f.default.createElement(N.default,{key:"next",plain:!0,a11yTitle:s.next,className:i+"-down",onClick:this._onNext},f.default.createElement(D.default,{a11yTitle:"article-down"})))),a}},{key:"render",value:function(){var e=this,n=this.props,o=n.className,i=n.primary,l=n.scrollStep,a=this.state.selectedIndex,u=(0,v.default)(H,r({},H+"--scroll-step",l),o),p=T.default.pick(this.props,Object.keys(b.default.propTypes)),d=T.default.omit(this.props,Object.keys(t.propTypes)),h=void 0;this.props.controls&&(h=this._renderControls());var y=void 0;this.state.accessibilityTabbingCompatible&&(y=f.default.createElement("a",{tabIndex:"-1","aria-hidden":"true",ref:function(t){return e._anchorStepRef=t}}));var _=this.props.children;return(l||h)&&(_=c.Children.map(this.props.children,function(t,n){if(t){if(h){var o=void 0;a!==n&&e.state.accessibilityTabbingCompatible&&(o="true"),t=f.default.createElement("div",{"aria-hidden":o},t)}return t}},this)),delete p.a11yTitle,f.default.createElement(b.default,s({},d,p,{ref:function(t){return e._componentRef=t},tag:"article",className:u,primary:i,onScroll:this._onScroll,onTouchStart:this._onTouchStart,onTouchMove:this._onTouchMove}),_,h,y)}}]),t}(c.Component);X.displayName="Article",t.default=X,X.propTypes=s({controls:d.default.bool},b.default.propTypes,{a11yTitle:d.default.shape({next:d.default.string,previous:d.default.string}),onProgress:d.default.func,onSelect:d.default.func,scrollStep:d.default.bool,selected:d.default.number}),X.defaultProps={pad:"none",direction:"column"},e.exports=t.default},162:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(1),f=o(c),p=n(4),d=o(p),h=n(13),y=o(h),v=n(3),_=o(v),b=_.default.SECTION,m=function(e){function t(){return i(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=r(e,["className"]),o=(0,d.default)(b,t);return f.default.createElement(y.default,s({},n,{tag:"section",className:o}))}}]),t}(c.Component);m.displayName="Section",t.default=m,m.propTypes=s({},y.default.propTypes),m.defaultProps={pad:{vertical:"medium"}},e.exports=t.default},419:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=n(1),p=o(f),d=n(2),h=o(d),y=n(4),v=o(y),_=n(13),b=o(_),m=n(3),g=o(m),w=g.default.SIDEBAR,O=function(e){function t(){return l(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),c(t,[{key:"render",value:function(){var e,t=this.props,n=t.children,o=t.className,l=t.fixed,a=t.full,s=t.size,c=i(t,["children","className","fixed","full","size"]),f=(0,v.default)(w,(e={},r(e,w+"--fixed",l),r(e,w+"--full",a),r(e,w+"--"+s,s),e),o);return p.default.createElement(b.default,u({},c,{className:f}),n)}}]),t}(f.Component);O.displayName="Sidebar",t.default=O,O.propTypes=u({fixed:h.default.bool,size:h.default.oneOf(["xsmall","small","medium","large"]),full:h.default.bool},b.default.propTypes),O.defaultProps={direction:"column",full:!0},e.exports=t.default},163:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=n(1),p=o(f),d=n(2),h=o(d),y=n(4),v=o(y),_=n(3),b=o(_),m=n(33),g=b.default.SPLIT,w=function(e){function t(e,n){l(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return o._onResize=o._onResize.bind(o),o._layout=o._layout.bind(o),o.state={responsive:void 0},o}return s(t,e),c(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this._onResize),this._layout()}},{key:"componentWillReceiveProps",value:function(e){this._nonNullChildCount(e)!==this._nonNullChildCount(this.props)&&(clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(function(){var e=document.createEvent("HTMLEvents");e.initEvent("resize",!0,!1),window.dispatchEvent(e)},500)),this.setState({relayout:!0})}},{key:"componentDidUpdate",value:function(){this.state.relayout&&(this.setState({relayout:!1}),this._layout())}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._onResize)}},{key:"_nonNullChildCount",value:function(e){var t=0;return p.default.Children.forEach(e.children,function(e){e&&(t+=1)}),t}},{key:"_onResize",value:function(){clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(this._layout,50)}},{key:"_setResponsive",value:function(e){this.state.responsive!==e&&(this.setState({responsive:e}),this.props.onResponsive&&this.props.onResponsive(e))}},{key:"_layout",value:function(){var e=this.splitRef;e&&(e.offsetWidth<=(0,m.smallSize)()&&"priority"===this.props.showOnResponsive?this._setResponsive("single"):this._setResponsive("multiple"))}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,o=t.className,l=t.fixed,a=t.flex,s=t.priority,c=t.separator,f=i(t,["children","className","fixed","flex","priority","separator"]);delete f.onResponsive,delete f.showOnResponsive;var d=this.state.responsive,h=(0,v.default)(g,o),y=Array.isArray(n)?n.map(function(e,t){var o;if(e){var i=t===n.length-1,u=void 0,f=!0;"single"===d&&("left"===s&&t>0||"right"===s&&0===t&&n.length>1)?u=!0:f=!(n.length>1&&("right"===a&&0===t||"left"===a&&i));var h=(0,v.default)(g+"__column",(o={},r(o,g+"__column--fixed",l),r(o,g+"__column--hidden",u),r(o,g+"__column--flex",f),r(o,g+"__column--separator",c&&!i),o));return p.default.createElement("div",{key:t,className:h},e)}}):n;return p.default.createElement("div",u({ref:function(t){return e.splitRef=t}},f,{className:h}),y)}}]),t}(f.Component);w.displayName="Split",t.default=w,w.propTypes={children:h.default.arrayOf(h.default.node).isRequired,fixed:h.default.bool,flex:h.default.oneOf(["left","right","both"]),onResponsive:h.default.func,priority:h.default.oneOf(["left","right"]),separator:h.default.bool,showOnResponsive:h.default.oneOf(["priority","both"])},w.defaultProps={fixed:!0,flex:"both",priority:"right",showOnResponsive:"priority"},e.exports=t.default},420:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),c=o(u),f=n(2),p=o(f),d=n(4),h=o(d),y=n(3),v=o(y),_=n(6),b=o(_),m=v.default.LOGO_ICON,g=function(e){function t(){return i(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){var e,t=this.props,n=t.a11yTitle,o=t.className,i=t.invert,l=t.large,a=t.size,s=t.small,u=this.context.intl,f=(0,h.default)(m,(e={},r(e,m+"--small",s),r(e,m+"--large",l),r(e,m+"--"+a,a),e),o),p=i?"#fff":"#865CD6";return c.default.createElement("svg",{className:f,viewBox:"0 0 182 182",width:"182",height:"182",version:"1.1",role:"img","aria-label":b.default.getMessage(u,n)},c.default.createElement("path",{role:"presentation",strokeWidth:"18",stroke:p,fill:"none",d:"M 91,91 m 0,-82 a 82,82 0 1,1 0,164 a 82,82 0 1,1 0,-164"}))}}]),t}(u.Component);g.displayName="Grommet",t.default=g,g.contextTypes={intl:p.default.object},g.defaultProps={a11yTitle:"Grommet"},g.propTypes={a11yTitle:p.default.string,invert:p.default.bool,size:p.default.oneOf(["small","medium","large","xlarge"])},e.exports=t.default},38:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(1),f=o(c),p=n(2),d=o(p),h=n(4),y=o(h),v=n(3),_=o(v),b=n(6),m=o(b),g=n(11),w=o(g),O=_.default.CONTROL_ICON,T=_.default.COLOR_INDEX,x=function(e){function t(){return i(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){var e,n=this.props,o=n.className,i=n.colorIndex,l=this.props,a=l.a11yTitle,u=l.size,c=l.responsive,p=this.context.intl,d=(0,y.default)(O,O+"-down",o,(e={},r(e,O+"--"+u,u),r(e,O+"--responsive",c),r(e,T+"-"+i,i),e));a=a||m.default.getMessage(p,"down");var h=w.default.omit(this.props,Object.keys(t.propTypes));return f.default.createElement("svg",s({},h,{version:"1.1",viewBox:"0 0 24 24",width:"24px",height:"24px",role:"img",className:d,"aria-label":a}),f.default.createElement("polyline",{fill:"none",stroke:"#000",strokeWidth:"2",points:"7.086 3.174 17.086 13.174 7.086 23.174",transform:"scale(1 -1) rotate(-89 -1.32 0)"}))}}]),t}(c.Component);x.displayName="Icon",t.default=x,x.contextTypes={intl:d.default.object},x.defaultProps={responsive:!0},x.displayName="Down",x.icon=!0,x.propTypes={a11yTitle:d.default.string,colorIndex:d.default.string,size:d.default.oneOf(["xsmall","small","medium","large","xlarge","huge"]),responsive:d.default.bool},e.exports=t.default},164:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(1),f=o(c),p=n(2),d=o(p),h=n(4),y=o(h),v=n(3),_=o(v),b=n(6),m=o(b),g=n(11),w=o(g),O=_.default.CONTROL_ICON,T=_.default.COLOR_INDEX,x=function(e){function t(){return i(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){var e,n=this.props,o=n.className,i=n.colorIndex,l=this.props,a=l.a11yTitle,u=l.size,c=l.responsive,p=this.context.intl,d=(0,y.default)(O,O+"-link-next",o,(e={},r(e,O+"--"+u,u),r(e,O+"--responsive",c),r(e,T+"-"+i,i),e));a=a||m.default.getMessage(p,"link-next");var h=w.default.omit(this.props,Object.keys(t.propTypes));return f.default.createElement("svg",s({},h,{version:"1.1",viewBox:"0 0 24 24",width:"24px",height:"24px",role:"img",className:d,"aria-label":a}),f.default.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"2",d:"M2,12 L22,12 M13,3 L22,12 L13,21"}))}}]),t}(c.Component);x.displayName="Icon",t.default=x,x.contextTypes={intl:d.default.object},x.defaultProps={responsive:!0},x.displayName="LinkNext",x.icon=!0,x.propTypes={a11yTitle:d.default.string,colorIndex:d.default.string,size:d.default.oneOf(["xsmall","small","medium","large","xlarge","huge"]),responsive:d.default.bool},e.exports=t.default},165:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(1),f=o(c),p=n(2),d=o(p),h=n(4),y=o(h),v=n(3),_=o(v),b=n(6),m=o(b),g=n(11),w=o(g),O=_.default.CONTROL_ICON,T=_.default.COLOR_INDEX,x=function(e){function t(){return i(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){var e,n=this.props,o=n.className,i=n.colorIndex,l=this.props,a=l.a11yTitle,u=l.size,c=l.responsive,p=this.context.intl,d=(0,y.default)(O,O+"-link-previous",o,(e={},r(e,O+"--"+u,u),r(e,O+"--responsive",c),r(e,T+"-"+i,i),e));a=a||m.default.getMessage(p,"link-previous");var h=w.default.omit(this.props,Object.keys(t.propTypes));return f.default.createElement("svg",s({},h,{version:"1.1",viewBox:"0 0 24 24",width:"24px",height:"24px",role:"img",className:d,"aria-label":a}),f.default.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"2",d:"M2,12 L22,12 M13,3 L22,12 L13,21",transform:"matrix(-1 0 0 1 24 0)"}))}}]),t}(c.Component);x.displayName="Icon",t.default=x,x.contextTypes={intl:d.default.object},x.defaultProps={responsive:!0},x.displayName="LinkPrevious",x.icon=!0,x.propTypes={a11yTitle:d.default.string,colorIndex:d.default.string,size:d.default.oneOf(["xsmall","small","medium","large","xlarge","huge"]),responsive:d.default.bool},e.exports=t.default},166:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(1),f=o(c),p=n(2),d=o(p),h=n(4),y=o(h),v=n(3),_=o(v),b=n(6),m=o(b),g=n(11),w=o(g),O=_.default.CONTROL_ICON,T=_.default.COLOR_INDEX,x=function(e){function t(){return i(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){var e,n=this.props,o=n.className,i=n.colorIndex,l=this.props,a=l.a11yTitle,u=l.size,c=l.responsive,p=this.context.intl,d=(0,y.default)(O,O+"-up",o,(e={},r(e,O+"--"+u,u),
r(e,O+"--responsive",c),r(e,T+"-"+i,i),e));a=a||m.default.getMessage(p,"up");var h=w.default.omit(this.props,Object.keys(t.propTypes));return f.default.createElement("svg",s({},h,{version:"1.1",viewBox:"0 0 24 24",width:"24px",height:"24px",role:"img",className:d,"aria-label":a}),f.default.createElement("polyline",{fill:"none",stroke:"#000",strokeWidth:"2",points:"7.086 1.174 17.086 11.174 7.086 21.174",transform:"rotate(-89 12.086 11.174)"}))}}]),t}(c.Component);x.displayName="Icon",t.default=x,x.contextTypes={intl:d.default.object},x.defaultProps={responsive:!0},x.displayName="Up",x.icon=!0,x.propTypes={a11yTitle:d.default.string,colorIndex:d.default.string,size:d.default.oneOf(["xsmall","small","medium","large","xlarge","huge"]),responsive:d.default.bool},e.exports=t.default},33:function(e,t){"use strict";function n(){var e="16px";return window.getComputedStyle&&(e=window.getComputedStyle(document.documentElement).fontSize),o*parseFloat(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.smallSize=n;var o=44.9375;t.default={start:function(e){var t={func:e,timer:void 0,small:void 0,smallSize:this.smallSize()};return t.onResize=this._onResize.bind(this,t),t.layout=this._check.bind(this,t),t.stop=this._stop.bind(this,t),window.addEventListener("resize",t.onResize),t.layout(),t},_stop:function(e){clearTimeout(e.timer),window.removeEventListener("resize",e.onResize)},_onResize:function(e){e.layout()},_check:function(e){window.innerWidth<=e.smallSize?e.small||(e.small=!0,e.func(!0)):!1!==e.small&&(e.small=!1,e.func(!1))},smallSize:n}},167:function(e,t){"use strict";function n(e){return e<.5?2*e*e:-1+(4-2*e)*e}Object.defineProperty(t,"__esModule",{value:!0});var o=25;t.default={scrollBy:function(e,t,r,i){var l=this;clearInterval(this._scrollToTimer);var a=e[t],s=a+r,u=1;this._scrollToTimer=setInterval(function(){var r=e[t],c=void 0,f=n(u/o);c=s>a?Math.min(s,Math.max(r,Math.round(a+(s-a)*f))):Math.max(s,Math.min(r,Math.round(a-(a-s)*f))),e[t]=c,u+=1,u>o&&(clearInterval(l._scrollToTimer),l._scrollToTimer=setTimeout(function(){e[t]=c,i&&i()},200))},8)}},e.exports=t.default},271:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=n(1),s=o(a),u=n(163),c=o(u),f=n(419),p=o(f),d=n(73),h=o(d),y=n(161),v=o(y),_=n(162),b=o(_),m=n(42),g=o(m),w=n(43),O=o(w),T=n(221),x=o(T),P=n(420),j=o(P),E=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return s.default.createElement(c.default,{flex:"left",separator:!0},s.default.createElement(v.default,null,s.default.createElement(b.default,{full:!0,colorIndex:"brand",pad:"large",justify:"center",align:"center"},s.default.createElement(g.default,{tag:"h1"},s.default.createElement("strong",null,"Welcome")),s.default.createElement(O.default,null,"Please log in"))),s.default.createElement(p.default,{justify:"between",align:"center",pad:"none",size:"large"},s.default.createElement("span",null),s.default.createElement(h.default,{align:"start",logo:s.default.createElement(j.default,{className:"logo",colorIndex:"brand"}),title:"Grommet Starter"}),s.default.createElement(x.default,{direction:"row",size:"small",pad:{horizontal:"medium",vertical:"small"}},s.default.createElement("span",{className:"secondary"},"Some footer copy"))))},t}(s.default.PureComponent);t.default=E,e.exports=t.default},272:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(271);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(r).default}}),e.exports=t.default},282:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=n(1),s=o(a),u=n(272),c=o(u),f=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return s.default.createElement("div",null,s.default.createElement(c.default,null))},t}(s.default.Component);t.default=f,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-855b80fec3a902dc4140.js.map