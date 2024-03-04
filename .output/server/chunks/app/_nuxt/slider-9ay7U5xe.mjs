import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, ref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';

const _imports_0 = "" + buildAssetsURL("slide1.t-lM7S1-.jfif");
const _imports_1 = "" + buildAssetsURL("slide2.T1MD4Nfo.jfif");
const _sfc_main = {
  __name: "slider",
  __ssrInlineRender: true,
  setup(__props) {
    const activeSlide = ref(0);
    const indicators = [
      { position: 0, active: true },
      { position: 1, active: false }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "indicators-carousel home-section",
        class: "relative w-full",
        "data-carousel": "static"
      }, _attrs))}><div class="relative overflow-hidden rounded-lg bg-black min-h-screen"><div class="${ssrRenderClass([{ "hidden": activeSlide.value !== 0 }, "duration-700 ease-in-out"])}" data-carousel-item="active"><img${ssrRenderAttr("src", _imports_0)} class="absolute -translate-x-1/3 -translate-y-1/2 top-1/2 left-1/2" alt="slide_1"><div class="relative transform overflow-hidden px-4 py-40 md:px-24"><h1 class="text-3xl font-bold text-[#4D4D4D] md:text-4xl lg:text-5xl xl:text-6xl">OL Afrika<br><span class="bg-gradient-to-r from-[#DAC558] to-[#35301a] bg-clip-text text-transparent">Media Foundation</span></h1><p class="mt-3 font-light text-white">Explore Our Creative Work</p><a class="mt-3 inline-flex items-center justify-center gap-x-3 rounded bg-[#DAC558] px-4 py-3 text-center text-sm font-medium text-black hover:text-[#5e531f]" href="#">Get Started</a></div></div><div class="${ssrRenderClass([{ "hidden": activeSlide.value !== 1 }, "duration-700 ease-in-out"])}" data-carousel-item><img${ssrRenderAttr("src", _imports_1)} class="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="slide_2"><div class="relative transform overflow-hidden px-4 py-40 md:px-24"><h1 class="text-3xl font-bold text-[#4D4D4D] md:text-4xl lg:text-5xl xl:text-6xl"> OL Afrika<br><span class="bg-gradient-to-r from-[#DAC558] to-[#35301a] bg-clip-text text-transparent">Media Foundation</span></h1><p class="mt-3 font-light text-white">Explore Our Creative Work</p><a class="mt-3 inline-flex items-center justify-center gap-x-3 rounded bg-[#DAC558] px-4 py-3 text-center text-sm font-medium text-black hover:text-[#5e531f]" href="#">Get Started</a></div></div></div><div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2"><!--[-->`);
      ssrRenderList(indicators, (indicator, index) => {
        _push(`<button type="button" class="${ssrRenderClass({
          "w-3 h-3 rounded-full": true,
          "bg-[#DAC558] dark:bg-[#DAC558]": indicator.active,
          "bg-[#DAC558]/50 dark:bg-[#DAC558]/50 hover:bg-[#DAC558] dark:bg-[#DAC558]": !indicator.active
        })}"${ssrRenderAttr("aria-current", indicator.active.toString())}${ssrRenderAttr("aria-label", "Slide " + (index + 1))} data-carousel-slide-to="index"></button>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/slider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Slider = _sfc_main;

export { Slider as S };
//# sourceMappingURL=slider-9ay7U5xe.mjs.map
