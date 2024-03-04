import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _imports_0 = "" + buildAssetsURL("img1.7hgRwO5f.jpg");
const _sfc_main = {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, A11y]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-black" }, _attrs))}><div class="py-16 bg-gradient-to-r from-[#DAC558] to-[#35301a] bg-clip-text text-transparent"><h1 class="text-4xl font-bold mb-1 text-center">Our Programs</h1></div><div class="min-h-screen"><div class="py-1 px-10 mb-28">`);
  _push(ssrRenderComponent(_component_swiper, {
    modules: $setup.modules,
    "slides-per-view": 4,
    "space-between": -20,
    navigation: "",
    pagination: { clickable: true },
    onSwiper: $setup.onSwiper,
    onSlideChange: $setup.onSlideChange,
    breakpoints: {
      320: { slidesPerView: 1, slidesPerGroup: 1 },
      480: { slidesPerView: 1, slidesPerGroup: 1 },
      640: { slidesPerView: 2, slidesPerGroup: 1 },
      768: { slidesPerView: 2, slidesPerGroup: 1 },
      1024: { slidesPerView: 3, slidesPerGroup: 1 },
      1280: { slidesPerView: 3, slidesPerGroup: 1 },
      1536: { slidesPerView: 4, slidesPerGroup: 1 }
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="p-20 text-white"${_scopeId2}><div class="pl-1.5"${_scopeId2}><div class="mb-5 text-center"${_scopeId2}><h1${_scopeId2}>2018</h1></div><img class="h-60 w-96 mb-2 rounded-full"${ssrRenderAttr("src", _imports_0)} alt="Image"${_scopeId2}><div class="text-center"${_scopeId2}><div class="mb-4 text-sm"${_scopeId2}></div><p${_scopeId2}>GFC SCRIPTWRITING SKILLS PROGRAM</p></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "p-20 text-white" }, [
                  createVNode("div", { class: "pl-1.5" }, [
                    createVNode("div", { class: "mb-5 text-center" }, [
                      createVNode("h1", null, "2018")
                    ]),
                    createVNode("img", {
                      class: "h-60 w-96 mb-2 rounded-full",
                      src: _imports_0,
                      alt: "Image"
                    }),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "mb-4 text-sm" }),
                      createVNode("p", null, "GFC SCRIPTWRITING SKILLS PROGRAM")
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="p-20 text-white"${_scopeId2}><div class="p-1.5"${_scopeId2}><div class="mb-5 text-center"${_scopeId2}><h1${_scopeId2}>2021</h1></div><img class="h-60 w-96 mb-2 rounded-full"${ssrRenderAttr("src", _imports_0)} alt="Image"${_scopeId2}><div class="text-center"${_scopeId2}><div class="mb-4 text-lg font-bold"${_scopeId2}></div><p${_scopeId2}>GFC SCRIPTWRITING SKILLS PROGRAM</p></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "p-20 text-white" }, [
                  createVNode("div", { class: "p-1.5" }, [
                    createVNode("div", { class: "mb-5 text-center" }, [
                      createVNode("h1", null, "2021")
                    ]),
                    createVNode("img", {
                      class: "h-60 w-96 mb-2 rounded-full",
                      src: _imports_0,
                      alt: "Image"
                    }),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "mb-4 text-lg font-bold" }),
                      createVNode("p", null, "GFC SCRIPTWRITING SKILLS PROGRAM")
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="max-w-md p-20 text-white"${_scopeId2}><div class="p-1.5"${_scopeId2}><div class="mb-5 text-center"${_scopeId2}><h1${_scopeId2}>2021</h1></div><img class="h-60 w-96 mb-2 rounded-full"${ssrRenderAttr("src", _imports_0)} alt="Image"${_scopeId2}><div class="text-center"${_scopeId2}><div class="mb-4 text-lg font-bold"${_scopeId2}></div><p${_scopeId2}>GFC SCRIPTWRITING SKILLS PROGRAM</p></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "max-w-md p-20 text-white" }, [
                  createVNode("div", { class: "p-1.5" }, [
                    createVNode("div", { class: "mb-5 text-center" }, [
                      createVNode("h1", null, "2021")
                    ]),
                    createVNode("img", {
                      class: "h-60 w-96 mb-2 rounded-full",
                      src: _imports_0,
                      alt: "Image"
                    }),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "mb-4 text-lg font-bold" }),
                      createVNode("p", null, "GFC SCRIPTWRITING SKILLS PROGRAM")
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="max-w-md p-20 text-white"${_scopeId2}><div class="p-1.5"${_scopeId2}><div class="mb-5 text-center"${_scopeId2}><h1${_scopeId2}>2021</h1></div><img class="h-60 w-96 mb-2 rounded-full"${ssrRenderAttr("src", _imports_0)} alt="Image"${_scopeId2}><div class="text-center"${_scopeId2}><div class="mb-4 text-lg font-bold"${_scopeId2}></div><p${_scopeId2}>NFVF PESP FILM &amp; TV INTERNSHIP</p></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "max-w-md p-20 text-white" }, [
                  createVNode("div", { class: "p-1.5" }, [
                    createVNode("div", { class: "mb-5 text-center" }, [
                      createVNode("h1", null, "2021")
                    ]),
                    createVNode("img", {
                      class: "h-60 w-96 mb-2 rounded-full",
                      src: _imports_0,
                      alt: "Image"
                    }),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "mb-4 text-lg font-bold" }),
                      createVNode("p", null, "NFVF PESP FILM & TV INTERNSHIP")
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="max-w-md p-20 text-white"${_scopeId2}><div class="p-1.5"${_scopeId2}><div class="mb-5 text-center"${_scopeId2}><h1${_scopeId2}>2022</h1></div><img class="h-60 w-96 mb-2 rounded-full"${ssrRenderAttr("src", _imports_0)} alt="Image"${_scopeId2}><div class="text-center"${_scopeId2}><div class="mb-4 text-lg font-bold"${_scopeId2}></div><p${_scopeId2}>NFVF SCRIPTWRITING SKILLS PROGRAM</p></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "max-w-md p-20 text-white" }, [
                  createVNode("div", { class: "p-1.5" }, [
                    createVNode("div", { class: "mb-5 text-center" }, [
                      createVNode("h1", null, "2022")
                    ]),
                    createVNode("img", {
                      class: "h-60 w-96 mb-2 rounded-full",
                      src: _imports_0,
                      alt: "Image"
                    }),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "mb-4 text-lg font-bold" }),
                      createVNode("p", null, "NFVF SCRIPTWRITING SKILLS PROGRAM")
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="max-w-md p-20 text-white"${_scopeId2}><div class="p-1.5"${_scopeId2}><div class="mb-5 text-center"${_scopeId2}><h1${_scopeId2}>2019/2020</h1></div><img class="h-60 w-96 mb-2 rounded-full"${ssrRenderAttr("src", _imports_0)} alt="Image"${_scopeId2}><div class="text-center"${_scopeId2}><div class="mb-4 text-lg font-bold"${_scopeId2}></div><p${_scopeId2}>MICTSETA FILM &amp; TV NQF 5 LEARNERSHIP</p></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "max-w-md p-20 text-white" }, [
                  createVNode("div", { class: "p-1.5" }, [
                    createVNode("div", { class: "mb-5 text-center" }, [
                      createVNode("h1", null, "2019/2020")
                    ]),
                    createVNode("img", {
                      class: "h-60 w-96 mb-2 rounded-full",
                      src: _imports_0,
                      alt: "Image"
                    }),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "mb-4 text-lg font-bold" }),
                      createVNode("p", null, "MICTSETA FILM & TV NQF 5 LEARNERSHIP")
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="max-w-md p-20 text-white"${_scopeId2}><div class="p-1.5"${_scopeId2}><div class="mb-5 text-center"${_scopeId2}><h1${_scopeId2}>2021</h1></div><img class="h-60 w-96 mb-2 rounded-full"${ssrRenderAttr("src", _imports_0)} alt="Image"${_scopeId2}><div class="text-center"${_scopeId2}><div class="mb-4 text-lg font-bold"${_scopeId2}></div><p${_scopeId2}>COJ WORK READINESS TRAINING</p></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "max-w-md p-20 text-white" }, [
                  createVNode("div", { class: "p-1.5" }, [
                    createVNode("div", { class: "mb-5 text-center" }, [
                      createVNode("h1", null, "2021")
                    ]),
                    createVNode("img", {
                      class: "h-60 w-96 mb-2 rounded-full",
                      src: _imports_0,
                      alt: "Image"
                    }),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "mb-4 text-lg font-bold" }),
                      createVNode("p", null, "COJ WORK READINESS TRAINING")
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="max-w-md p-20 text-white"${_scopeId2}><div class="p-1.5"${_scopeId2}><div class="mb-5 text-center"${_scopeId2}><h1${_scopeId2}>2022/2023</h1></div><img class="h-60 w-96 mb-2 rounded-full"${ssrRenderAttr("src", _imports_0)} alt="Image"${_scopeId2}><div class="text-center"${_scopeId2}><div class="mb-4 text-lg font-bold"${_scopeId2}></div><p${_scopeId2}>NYS (AFRIKA TIKKUN) SCRIPT DEVELOPMENT PROGRAM</p></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "max-w-md p-20 text-white" }, [
                  createVNode("div", { class: "p-1.5" }, [
                    createVNode("div", { class: "mb-5 text-center" }, [
                      createVNode("h1", null, "2022/2023")
                    ]),
                    createVNode("img", {
                      class: "h-60 w-96 mb-2 rounded-full",
                      src: _imports_0,
                      alt: "Image"
                    }),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "mb-4 text-lg font-bold" }),
                      createVNode("p", null, "NYS (AFRIKA TIKKUN) SCRIPT DEVELOPMENT PROGRAM")
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "p-20 text-white" }, [
                createVNode("div", { class: "pl-1.5" }, [
                  createVNode("div", { class: "mb-5 text-center" }, [
                    createVNode("h1", null, "2018")
                  ]),
                  createVNode("img", {
                    class: "h-60 w-96 mb-2 rounded-full",
                    src: _imports_0,
                    alt: "Image"
                  }),
                  createVNode("div", { class: "text-center" }, [
                    createVNode("div", { class: "mb-4 text-sm" }),
                    createVNode("p", null, "GFC SCRIPTWRITING SKILLS PROGRAM")
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "p-20 text-white" }, [
                createVNode("div", { class: "p-1.5" }, [
                  createVNode("div", { class: "mb-5 text-center" }, [
                    createVNode("h1", null, "2021")
                  ]),
                  createVNode("img", {
                    class: "h-60 w-96 mb-2 rounded-full",
                    src: _imports_0,
                    alt: "Image"
                  }),
                  createVNode("div", { class: "text-center" }, [
                    createVNode("div", { class: "mb-4 text-lg font-bold" }),
                    createVNode("p", null, "GFC SCRIPTWRITING SKILLS PROGRAM")
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "max-w-md p-20 text-white" }, [
                createVNode("div", { class: "p-1.5" }, [
                  createVNode("div", { class: "mb-5 text-center" }, [
                    createVNode("h1", null, "2021")
                  ]),
                  createVNode("img", {
                    class: "h-60 w-96 mb-2 rounded-full",
                    src: _imports_0,
                    alt: "Image"
                  }),
                  createVNode("div", { class: "text-center" }, [
                    createVNode("div", { class: "mb-4 text-lg font-bold" }),
                    createVNode("p", null, "GFC SCRIPTWRITING SKILLS PROGRAM")
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "max-w-md p-20 text-white" }, [
                createVNode("div", { class: "p-1.5" }, [
                  createVNode("div", { class: "mb-5 text-center" }, [
                    createVNode("h1", null, "2021")
                  ]),
                  createVNode("img", {
                    class: "h-60 w-96 mb-2 rounded-full",
                    src: _imports_0,
                    alt: "Image"
                  }),
                  createVNode("div", { class: "text-center" }, [
                    createVNode("div", { class: "mb-4 text-lg font-bold" }),
                    createVNode("p", null, "NFVF PESP FILM & TV INTERNSHIP")
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "max-w-md p-20 text-white" }, [
                createVNode("div", { class: "p-1.5" }, [
                  createVNode("div", { class: "mb-5 text-center" }, [
                    createVNode("h1", null, "2022")
                  ]),
                  createVNode("img", {
                    class: "h-60 w-96 mb-2 rounded-full",
                    src: _imports_0,
                    alt: "Image"
                  }),
                  createVNode("div", { class: "text-center" }, [
                    createVNode("div", { class: "mb-4 text-lg font-bold" }),
                    createVNode("p", null, "NFVF SCRIPTWRITING SKILLS PROGRAM")
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "max-w-md p-20 text-white" }, [
                createVNode("div", { class: "p-1.5" }, [
                  createVNode("div", { class: "mb-5 text-center" }, [
                    createVNode("h1", null, "2019/2020")
                  ]),
                  createVNode("img", {
                    class: "h-60 w-96 mb-2 rounded-full",
                    src: _imports_0,
                    alt: "Image"
                  }),
                  createVNode("div", { class: "text-center" }, [
                    createVNode("div", { class: "mb-4 text-lg font-bold" }),
                    createVNode("p", null, "MICTSETA FILM & TV NQF 5 LEARNERSHIP")
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "max-w-md p-20 text-white" }, [
                createVNode("div", { class: "p-1.5" }, [
                  createVNode("div", { class: "mb-5 text-center" }, [
                    createVNode("h1", null, "2021")
                  ]),
                  createVNode("img", {
                    class: "h-60 w-96 mb-2 rounded-full",
                    src: _imports_0,
                    alt: "Image"
                  }),
                  createVNode("div", { class: "text-center" }, [
                    createVNode("div", { class: "mb-4 text-lg font-bold" }),
                    createVNode("p", null, "COJ WORK READINESS TRAINING")
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "max-w-md p-20 text-white" }, [
                createVNode("div", { class: "p-1.5" }, [
                  createVNode("div", { class: "mb-5 text-center" }, [
                    createVNode("h1", null, "2022/2023")
                  ]),
                  createVNode("img", {
                    class: "h-60 w-96 mb-2 rounded-full",
                    src: _imports_0,
                    alt: "Image"
                  }),
                  createVNode("div", { class: "text-center" }, [
                    createVNode("div", { class: "mb-4 text-lg font-bold" }),
                    createVNode("p", null, "NYS (AFRIKA TIKKUN) SCRIPT DEVELOPMENT PROGRAM")
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ourprogram.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Programs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Programs as P };
//# sourceMappingURL=ourprogram-IRXnOLe7.mjs.map
