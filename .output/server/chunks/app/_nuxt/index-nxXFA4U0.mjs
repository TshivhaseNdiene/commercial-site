import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { useSSRContext, mergeProps } from 'vue';
import { _ as _export_sfc } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0$4 = "" + buildAssetsURL("img_3.EGl8p9W3.png");
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-slate-100 pt-44" }, _attrs))}><div class="container font-serif mx-auto flex px-5 py-24 md:flex-row flex-col items-center"><div class="lg:flex-grow md:w-1/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mx-auto"><h1 class="title-font sm:text-5xl text-5xl mb-4 font-bold text-[#3dbbb5]">New Arrivals</h1><p class="mb-5 leading-relaxed">The Nike Air Max Prodigy is a stylish and versatile sneaker designed for optimal comfort and performance.</p><div class="flex justify-center"><a href="" class="inline-flex font-serif text-[#3dbbb5] border-0 py-2 text-sm"> View collection <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path></svg></a></div></div><div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"><img class="object-cover object-center rounded" alt="hero"${ssrRenderAttr("src", _imports_0$4)}></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _imports_0$3 = "" + buildAssetsURL("img_1.h195q55h.png");
const _imports_1$1 = "" + buildAssetsURL("img_2.O1eM8tNP.png");
const _imports_2$1 = "" + buildAssetsURL("img_9.J8KLZK9B.png");
const _imports_3 = "" + buildAssetsURL("img_4.M4Dxudns.png");
const _imports_4 = "" + buildAssetsURL("img_5.6rvEGyE9.png");
const _imports_5 = "" + buildAssetsURL("img_6.7p9e9MuB.png");
const _imports_6 = "" + buildAssetsURL("img_11.T_Du3Bwp.png");
const _imports_7 = "" + buildAssetsURL("img_8.vL91xo_y.png");
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(_attrs)}><div class="container mx-auto mt-8"><div class="mt-5 mb-10"><h4 class="text-6xl mb-3 font-serif text-gray-700 capitalize md:text-5xl text-center">Our Collections</h4><p class="text-center">Lorem ipsum dolor sit amet, ut aliquip ex ea commodo consequat</p></div><div class="py-5 mb-10"><div class="container mx-auto flex flex-col items-center justify-between sm:flex-row"><div class="flex items-center mb-4 sm:mb-0"><svg class="w-6 h-6 text-gray-700 hover:text-gray-900 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h18M3 8h18m-15 4h15M3 16h18"></path></svg> FLTER <div class="hidden space-x-4 ml-4"><button class="text-gray-700 hover:text-gray-900 font-semibold">All</button><button class="text-gray-700 hover:text-gray-900 font-semibold">Category 1</button><button class="text-gray-700 hover:text-gray-900 font-semibold">Category 2</button></div></div><div class="relative"><button class="text-gray-700 hover:text-gray-900 font-serif border border-l">Default Sorting</button><div class="absolute z-10 mt-2 bg-white border rounded-md shadow-lg hidden"><ul class="py-1"><li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">Option 1</a></li><li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">Option 2</a></li></ul></div></div></div></div><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center font-serif"><div class="bg-white p-6 rounded-md transition-transform transform hover:scale-105 hover:shadow-lg text-center"><img${ssrRenderAttr("src", _imports_0$3)} alt="Product 1" class="w-full h-48 object-contain mb-4"><div class="font-semibold mb-2">Product 1</div><div class="text-[#3dbbb5]">$29.99</div><div class="text-yellow-300 mb-2">\u2B50\u2B50\u2B50\u2B50\u2B50</div></div><div class="bg-white p-6 rounded-md transition-transform transform hover:scale-105 hover:shadow-lg text-center"><img${ssrRenderAttr("src", _imports_1$1)} alt="Product 2" class="w-full h-48 object-contain mb-4"><div class="font-semibold mb-2">Product 2</div><div class="text-[#3dbbb5]">$39.99</div><div class="text-yellow-500 mb-2">\u2B50\u2B50\u2B50\u2B50</div></div><div class="bg-white p-6 rounded-md transition-transform transform hover:scale-105 hover:shadow-lg text-center"><img${ssrRenderAttr("src", _imports_2$1)} alt="Product 3" class="w-full h-48 object-contain mb-4"><div class="font-semibold mb-2">Product 3</div><div class="text-[#3dbbb5] font-semibold">$49.99</div><div class="text-yellow-500 mb-2">\u2B50\u2B50\u2B50\u2B50\u2B50</div></div><div class="bg-white p-6 rounded-md transition-transform transform hover:scale-105 hover:shadow-lg text-center"><img${ssrRenderAttr("src", _imports_3)} alt="Product 4" class="w-full h-48 object-contain mb-4"><div class="font-semibold mb-2">Product 4</div><div class="text-[#3dbbb5] font-semibold">$59.99</div><div class="text-yellow-500 mb-2">\u2B50\u2B50\u2B50\u2B50</div></div><div class="bg-white p-6 rounded-md transition-transform transform hover:scale-105 hover:shadow-lg text-center"><img${ssrRenderAttr("src", _imports_4)} alt="Product 5" class="w-full h-48 object-contain mb-4"><div class="font-semibold mb-2">Product 5</div><div class="text-[#3dbbb5] font-semibold">$29.99</div><div class="text-yellow-300 mb-2">\u2B50\u2B50\u2B50\u2B50\u2B50</div></div><div class="bg-white p-6 rounded-md transition-transform transform hover:scale-105 hover:shadow-lg text-center"><img${ssrRenderAttr("src", _imports_5)} alt="Product 6" class="w-full h-48 object-contain mb-4"><div class="font-semibold mb-2">Product 6</div><div class="text-[#3dbbb5] font-semibold">$39.99</div><div class="text-yellow-500 mb-2">\u2B50\u2B50\u2B50\u2B50</div></div><div class="bg-white p-6 rounded-md transition-transform transform hover:scale-105 hover:shadow-lg text-center"><img${ssrRenderAttr("src", _imports_6)} alt="Product 7" class="w-full h-48 object-contain mb-4"><div class="font-semibold mb-2">Product 7</div><div class="text-[#3dbbb5] font-semibold">$49.99</div><div class="text-yellow-500 mb-2">\u2B50\u2B50\u2B50\u2B50\u2B50</div></div><div class="bg-white p-6 rounded-md transition-transform transform hover:scale-105 hover:shadow-lg text-center"><img${ssrRenderAttr("src", _imports_7)} alt="Product 8" class="w-full h-48 object-contain mb-4"><div class="font-semibold mb-2">Product 8</div><div class="text-[#3dbbb5] font-semibold">$59.99</div><div class="text-yellow-500 mb-2">\u2B50\u2B50\u2B50\u2B50</div></div></div><div class="flex justify-center flex-col w-full sm:w-auto sm:flex-row p-4"><a href="" class="flex items-center justify-center w-full px-2 py-2 text-sm font-bold leading-6 capitalize duration-100 transform border-2 rounded-sm cursor-pointer border-green-300 focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:w-auto sm:px-6 border-text hover:shadow-lg hover:-translate-y-1"> View all Products </a></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OurCollection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const OurCollection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0$2 = "" + buildAssetsURL("img_12.yQU5KuPt.png");
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-slate-100" }, _attrs))}><div class="container font-serif mx-auto flex px-5 py-24 md:flex-row flex-col items-center"><div class="lg:flex-grow md:w-1/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mx-auto"><h1 class="title-font sm:text-4xl text-4xl mb-4 font-bold text-[#ff4444]">2016 Nike<span><br> The Best Classical</span></h1><p class="mb-5 leading-relaxed">The Nike Air Max Prodigy is a stylish and versatile sneaker designed for optimal comfort and performance.</p><div class="flex justify-center text-white"><a href="" class="inline-flex font-serif items-center justify-center w-full px-2 py-2 text-sm font-bold leading-6 capitalize duration-100 transform border-2 rounded-sm cursor-pointer bg-[#ff3a3a] focus:ring-4 focus:ring-[#e65858] focus:ring-opacity-50 focus:outline-none sm:w-auto sm:px-6 border-text hover:shadow-lg hover:-translate-y-1"> Buy Now </a></div></div><div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"><img class="object-cover object-center rounded" alt="hero"${ssrRenderAttr("src", _imports_0$2)}></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/aboutNewPro.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const AboutNewPro = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0$1 = "" + buildAssetsURL("img_14jpg.19hKFo3L.jpg");
const _imports_1 = "" + buildAssetsURL("img_13.MM5NSUFN.jpg");
const _imports_2 = "" + buildAssetsURL("img_15.Gl3XEyEx.jpg");
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "p-4 sm:p-8" }, _attrs))}><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"><div class="relative p-4 rounded-lg overflow-hidden"><div class="absolute top-0 left-0 bg-blue-500 text-white text-xs uppercase font-semibold px-2 py-1 rounded-full m-2">Mar 4</div><img${ssrRenderAttr("src", _imports_0$1)} alt="Card Image" class="w-full h-48 object-cover mb-4 rounded-md"><p class="text-gray-700 mb-4"> Your description goes here. Write a brief and interesting description of the image or content you are showcasing. </p><a href="#" class="text-blue-500 hover:underline">Read more..</a></div><div class="relative p-4 rounded-lg overflow-hidden"><div class="absolute top-0 left-0 bg-blue-500 text-white text-xs uppercase font-semibold px-2 py-1 rounded-full m-2">Mar 4</div><img${ssrRenderAttr("src", _imports_1)} alt="Card Image" class="w-full h-48 object-cover mb-4 rounded-md"><p class="text-gray-700 mb-4"> Your description goes here. Write a brief and interesting description of the image or content you are showcasing. </p><a href="#" class="text-blue-500 hover:underline">Read more..</a></div><div class="relative p-4 rounded-lg overflow-hidden"><div class="absolute top-0 left-0 bg-blue-500 text-white text-xs uppercase font-semibold px-2 py-1 rounded-full m-2">Mar 4</div><img${ssrRenderAttr("src", _imports_2)} alt="Card Image" class="w-full h-48 object-cover mb-4 rounded-md"><p class="text-gray-700 mb-4"> Your description goes here. Write a brief and interesting description of the image or content you are showcasing. </p><a href="#" class="text-blue-500 hover:underline">Read more..</a></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/more.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const More = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + buildAssetsURL("img_13.9BvZAo04.png");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-slate-100" }, _attrs))}><div class="container font-serif mx-auto flex px-5 py-24 md:flex-row flex-col items-center"><div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"><img class="object-cover object-center rounded" alt="hero"${ssrRenderAttr("src", _imports_0)}></div><div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mx-auto"><h1 class="title-font sm:text-4xl text-4xl mb-4 font-bold text-[#ff4444]"> Nike Air Max </h1><p class="mb-5 leading-normal"> The Nike Air Max Prodigy is a stylish and versatile sneaker designed for optimal comfort and performance. </p><div class="flex justify-end items-center mb-4 space-x-2"><div class="w-6 h-6 rounded-full bg-red-500 cursor-pointer"></div><div class="w-6 h-6 rounded-full bg-blue-500 cursor-pointer"></div><div class="w-6 h-6 rounded-full bg-green-500 cursor-pointer"></div></div><div class="flex justify-end text-white"><a href="" class="relative inline-flex font-serif items-center justify-center w-full md:w-auto px-2 py-2 text-sm font-bold leading-6 capitalize duration-100 transform border-2 rounded-sm cursor-pointer bg-[#ff3a3a] focus:ring-4 focus:ring-[#e65858] focus:ring-opacity-50 focus:outline-none sm:px-6 border-text hover:shadow-lg hover:-translate-y-1"> Buy Now </a></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/newsection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Newsection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Home, null, null, _parent));
      _push(ssrRenderComponent(OurCollection, null, null, _parent));
      _push(ssrRenderComponent(AboutNewPro, null, null, _parent));
      _push(ssrRenderComponent(More, null, null, _parent));
      _push(ssrRenderComponent(Newsection, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-nxXFA4U0.mjs.map
