import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _imports_0 = "" + buildAssetsURL("Big_zulu.ibWupspB.jpg");
const _imports_1 = "" + buildAssetsURL("moonlight.XfDmL8kj.jpg");
const _imports_2 = "" + buildAssetsURL("dondada.RYFZ7FZt.jpg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}><div class="container mx-auto flex flex-wrap justify-center"><div class="w-full px-6"><div class="mx-auto mb-12 max-w-[510px] text-center lg:mb-20"><h2 class="mb-3 text-3xl font-bold text-[#DAC558] sm:text-4xl md:text-[40px] drop-shadow-lg">Our Work</h2></div><div class="flex w-full items-center px-4 md:min-w-3 lg:min-w-3"><a href="https://www.youtube.com/watch?v=LfWCqZvimul" target="_blank"><div class="flex w-40 items-center justify-center overflow-hidden rounded-full shadow-lg shadow-gray-500"><img${ssrRenderAttr("src", _imports_0)} alt="Big Zulu Thumbnail" class="h-full w-full object-contain"></div></a><div class="ml-5"><a href="https://www.youtube.com/watch?v=LfWCqZvimul" target="_blank" class="font-bold text-blue-500">Watch Now</a><p class="mt-1">Big Zulu ft. Kwesta (Music Video)</p></div></div><div class="flex w-full items-center px-4 md:min-w-3 lg:min-w-3"><a href="https://www.youtube.com/watch?v=LfWCqZvimul" target="_blank"><div class="mt-8 flex w-40 items-center justify-center overflow-hidden rounded-full shadow-lg shadow-gray-500"><img${ssrRenderAttr("src", _imports_1)} alt="Moonlight Thumbnail" class="h-full w-full object-contain"></div></a><div class="ml-5"><a href="https://www.youtube.com./watch?v=G3r_R5lMOrQ&amp;t=6s" target="_blank" class="font-bold text-blue-500">Watch Now</a><p class="mt-1">Picture Perfect (Film Trailer) - To be Produced for Netflix 2023</p></div></div><div class="flex w-full items-center px-4 md:min-w-3 lg:min-w-3"><a href="https://www.youtube.com/watch?v=LfWCqZvimul" target="_blank"><div class="mt-8 flex w-40 items-center justify-center overflow-hidden rounded-full shadow-lg shadow-gray-500"><img${ssrRenderAttr("src", _imports_2)} alt="Don-Dada Thumbnail" class="h-full w-full object-contain"></div></a><div class="ml-5"><a href="https://www/youtube.com/watch?v=XhddBOgZKOc " target="_blank" class="font-bold text-blue-500">Watch Now</a><p class="mt-1">Don Dada (Music Video) - signed by Bob Marley Record Label Tuff Gong</p></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ourwork.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const OurWork = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { OurWork as O };
//# sourceMappingURL=ourwork-sNgeVLmx.mjs.map
