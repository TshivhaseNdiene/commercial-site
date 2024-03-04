import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-kpaqSJk0.mjs';
import { useSSRContext, resolveComponent, withCtx, createVNode, createTextVNode, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
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

const _imports_0 = "" + buildAssetsURL("ol.ox_yG_tK.png");
const _sfc_main$2 = {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><nav class="fixed top-0 z-50 flex w-full items-center justify-between bg-black p-4">`);
  _push(ssrRenderComponent(_component_router_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Logo" class="w-[96px]"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "Logo",
            class: "w-[96px]"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="hidden space-x-4 font-semibold text-white lg:flex"><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/home",
    onClick: ($event) => _ctx.$scrollTo("#home-section"),
    class: "hover:text-[#DAC558]"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/about",
    onClick: ($event) => _ctx.$scrollTo("#about-section"),
    class: "hover:text-[#DAC558]"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/services",
    onClick: ($event) => _ctx.$scrollTo("#services-section"),
    class: "hover:text-[#DAC558]"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Services`);
      } else {
        return [
          createTextVNode("Services")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/programs",
    onClick: ($event) => _ctx.$scrollTo("#programs-section"),
    class: "hover:text-[#DAC558]"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Programs`);
      } else {
        return [
          createTextVNode("Programs")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/ourwork",
    onClick: ($event) => _ctx.$scrollTo("#ourwork-section"),
    class: "hover:text-[#DAC558]"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Our Work`);
      } else {
        return [
          createTextVNode("Our Work")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><button class="block bg-black px-4 py-2 text-[#DAC558] focus:text-white focus:outline-none lg:hidden"><svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">`);
  if (!$data.isOpen) {
    _push(`<path fill-rule="evenodd" clip-rule="evenodd" d="M4 6h16a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zM4 11h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zM4 16h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>`);
  } else {
    _push(`<path fill-rule="evenodd" clip-rule="evenodd" d="M3 18.75h18a1.5 1.5 0 1 1 0 3H3a1.5 1.5 0 1 1 0-3zm0-5h18a1.5 1.5 0 1 1 0 3H3a1.5 1.5 0 1 1 0-3zm0-5h18a1.5 1.5 0 1 1 0 3H3a1.5 1.5 0 1 1 0-3z"></path>`);
  }
  _push(`</svg></button></nav><div style="${ssrRenderStyle($data.isOpen ? null : { display: "none" })}" class="fixed inset-y-0 right-0 z-50 w-[300px] bg-black shadow-lg lg:relative lg:z-auto lg:bg-transparent lg:shadow-none"><div class="flex items-center justify-between px-4 py-3 lg:hidden"><button type="button" class="flex size-7 items-center justify-center rounded-full border border-transparent text-sm font-semibold hover:bg-[#DAC558] disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-[#dfd397] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"><span class="sr-only">Close modal</span><svg class="size-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button></div><div class="p-5"><ul class="space-y-3 font-semibold text-white lg:hidden"><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "hover:text-[#DAC558]",
    onClick: $options.toggleSidebar
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/about",
    class: "hover:text-[#DAC558]",
    onClick: $options.toggleSidebar
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/services",
    class: "hover:text-[#DAC558]",
    onClick: $options.toggleSidebar
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Service `);
      } else {
        return [
          createTextVNode("Service ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/programs",
    class: "hover:text-[#DAC558]",
    onClick: $options.toggleSidebar
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Programs `);
      } else {
        return [
          createTextVNode("Programs ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/ourwork",
    class: "hover:text-[#DAC558]",
    onClick: $options.toggleSidebar
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Our-Work `);
      } else {
        return [
          createTextVNode("Our-Work ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/web-header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "w-full bg-black max-w-[rem] py-10 px-4 sm:px-6 lg:px-3 mx-auto" }, _attrs))}><div class="w-full max-w-screen-xl mx-auto p-4 md:py-8"><div class="sm:flex sm:items-center sm:justify-between"><a href="https://preline.com" class="flex items-center mb-4 sm:mb-0 space-x-37 rtl:space-x-reverse"><img${ssrRenderAttr("src", _imports_0)} alt="Logo" class="h-27 w-40"></a><form class="max-w-sm mx-auto sm:justify-between"><h1 class="mb-4 text-3xl font-Sofia Pro leading-none tracking-tight text-white-100 md:text-5xl lg:text-3xl dark:text-white underline underline-offset-8"> Stay In Touch</h1><div class="mb-3"><label for="email" class="block mb-2 text-sm font-medium text-white-400 dark:text-white">To be updated with all the latest news, offers and special annoucements. </label><input type="email" id="email" class="bg-gray-50 border border-gray-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email" required></div><button type="Subscribe" class="text-white bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-12 py-2.5 text-center dark:bg-yellow-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</button></form></div><ul class="flex justify-left mt-5 space-x-5 text-white"><button type="button" data-te-ripple-init data-te-ripple-color="light" class="mb-2 inline-block rounded px-3 py-2.5 text-xs rounded-full font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" style="${ssrRenderStyle({ "background-color": "#1877f2" })}"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></button><button type="button" data-te-ripple-init data-te-ripple-color="light" class="mb-2 inline-block rounded px-3 py-2.5 text-xs rounded-full font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" style="${ssrRenderStyle({ "background-color": "#1da1f2" })}"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></button><button type="button" data-te-ripple-init data-te-ripple-color="light" class="mb-2 inline-block rounded px-3 py-2.5 text-xs rounded-full font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" style="${ssrRenderStyle({ "background-color": "#c13584" })}"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg></button><button type="button" data-te-ripple-init data-te-ripple-color="light" class="mb-2 inline-block rounded px-3 py-2.5 text-xs rounded-full font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" style="${ssrRenderStyle({ "background-color": "#ff0000" })}"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></button></ul></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/web-footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_web_header = __nuxt_component_0;
  const _component_web_footer = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_web_header, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_web_footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-_cItKsFU.mjs.map
