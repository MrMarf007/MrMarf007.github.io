const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.CZs3gvlg.js",app:"_app/immutable/entry/app.DFEb407g.js",imports:["_app/immutable/entry/start.CZs3gvlg.js","_app/immutable/chunks/CgRsP1ES.js","_app/immutable/chunks/CDwaHp4Y.js","_app/immutable/chunks/zCFnNTL3.js","_app/immutable/entry/app.DFEb407g.js","_app/immutable/chunks/CDwaHp4Y.js","_app/immutable/chunks/BlsOYjU0.js","_app/immutable/chunks/NV3ArIAD.js","_app/immutable/chunks/DIrzQbST.js","_app/immutable/chunks/zCFnNTL3.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-DNPzMHjt.js')),
			__memo(() => import('./chunks/1-B8uJrCOM.js')),
			__memo(() => import('./chunks/2-C2SyDHSN.js')),
			__memo(() => import('./chunks/3-DrFCzVxd.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/game",
				pattern: /^\/game\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
