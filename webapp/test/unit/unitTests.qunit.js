/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"oupotc.zotcebookupld./z_otc_ebook_upld/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
