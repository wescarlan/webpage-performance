var appconfig = require('./appconfig.json'),
	fs = require('fs'),
	util = require('util'),
	phantomPath,
	command,
	child,
	report,
	reportStats,
	resources,
	externalResources = [],
	totalExternalSize = 0,
	externalObj = {};

require('shelljs/global');

phantomPath = 'phantomjs';
command = 'sh load.sh ' + appconfig.host + ' 1 ' + phantomPath;

child = exec(command, {silent:true}, function (code, output) {
	// Parse the load report for the resources
	fs.exists('./reports/loadreport-wip.json', function (exists) {
		if (!exists) {
			console.log('Report failed. Try again');
			return;
		}

		do {
			reportStats = fs.statSync('./reports/loadreport-wip.json');
			if (reportStats.size > 0) {
				report = require('./reports/loadreport-wip.json');
				resources = report.resource;

				if (!resources) {
					console.log('Report failed. Try again');
					return
				}
				else {
					// Determine external resources and total size
					resources.forEach(function (r) {
						if (r.url.indexOf('cnn') < 0 && r.url.indexOf('turner') < 0) {
							externalResources.push(r);
						}
					});
					externalResources.forEach(function(r) {
						totalExternalSize += r.size;
					});
					totalExternalSize = totalExternalSize;

					// Write data to a json file
					externalObj.totalResources = externalResources.length;
					externalObj.totalSize = totalExternalSize;
					externalObj.resources = externalResources;
					fs.writeFile('./reports/externalResources.json', JSON.stringify(externalObj, null, 4));
					console.log('done');
				}
			}
		} while (reportStats.size < 1);
	});
});