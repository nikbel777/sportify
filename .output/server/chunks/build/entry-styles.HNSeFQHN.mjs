import { a as buildAssetsURL } from '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import 'vue';
import '@unhead/shared';

const index = "@font-face{font-family:DelaGothicOne;font-style:normal;font-weight:400;src:url(" + buildAssetsURL("DelaGothicOne-Regular.DSnQo5kF.woff2") + ') format("woff2")}@font-face{font-family:ProximaNova;font-style:normal;font-weight:400;src:url(' + buildAssetsURL("ProximaNova-Regular.45mnJ3qM.ttf") + ")}@font-face{font-family:Raleway;font-style:normal;font-weight:400;src:url(" + buildAssetsURL("Raleway-Regular.CAQxzyjJ.ttf") + ")}@font-face{font-family:Raleway;font-style:normal;font-weight:500;src:url(" + buildAssetsURL("Raleway-Medium.4W2ZnHd2.ttf") + ")}@font-face{font-family:Raleway;font-style:normal;font-weight:600;src:url(" + buildAssetsURL("Raleway-SemiBold.B3GRkFLp.ttf") + ")}@font-face{font-family:Raleway;font-style:normal;font-weight:700;src:url(" + buildAssetsURL("Raleway-Bold.Dym08uol.ttf") + ")}@font-face{font-family:Bluu Next Cyrillic;font-style:normal;font-weight:700;src:url(" + buildAssetsURL("Bluu_Next_Cyrillic_700.BuaF89D-.woff2") + ') format("woff2"),url(' + buildAssetsURL("Bluu_Next_Cyrillic_700.Cx8pxLnu.ttf") + ') format("truetype")}';

const main = ":root{--inline-offset:max(40px,calc(50% - 700px))}@media (max-width:1170px){:root{--inline-offset:max(30px,calc(50% - 700px))}}@media (max-width:740px){:root{--inline-offset:max(15px,calc(50% - 700px))}}*{box-sizing:border-box;margin:0;outline:0;padding:0}img{display:block}a{text-decoration:none}";

const entryStyles_HNSeFQHN = [index, main];

export { entryStyles_HNSeFQHN as default };
//# sourceMappingURL=entry-styles.HNSeFQHN.mjs.map
