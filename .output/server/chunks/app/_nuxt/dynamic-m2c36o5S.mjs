import { S as Slider } from './slider-9ay7U5xe.mjs';
import { A as Aboutus } from './aboutus-RcZOcglg.mjs';
import { ssrRenderAttrs, ssrRenderVNode } from 'vue/server-renderer';
import { useSSRContext, createVNode, resolveDynamicComponent } from 'vue';
import { _ as _export_sfc } from '../server.mjs';
import { P as Programs } from './ourprogram-IRXnOLe7.mjs';
import { O as OurWork } from './ourwork-sNgeVLmx.mjs';
import { S as Service } from './services-3LChe4ve.mjs';
import '../../handlers/renderer.mjs';
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
import 'swiper/modules';
import 'swiper/vue';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}> contact us body </div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contactus.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    Home: Slider,
    About: Aboutus,
    Contact,
    Programs,
    OurWork,
    Service
  },
  computed: {
    selectedComponent() {
      return this.$route.params.component || "default";
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent($options.selectedComponent), null, null), _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dynamic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dynamic = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { dynamic as default };
//# sourceMappingURL=dynamic-m2c36o5S.mjs.map
