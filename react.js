const { base } = require("./.prettierrc.js");

module.exports = {
	...base,
	importOrder: [
		"^next/.*",
		"^next-.*",
		"^react.*",
		"^axios",
		"^@src/.*",
		"^@interfaces/.*",
		"^@models/.*",
		"^@utils/.*",
		"^@components/.*",
		".*scss$",
		".*css$",
		"^@svg/.*",
		"^./.*",
		"^../.*",
	],
};
