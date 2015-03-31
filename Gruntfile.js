var appconfig = require('./appconfig.json');

module.exports = function (grunt) {
	grunt.initConfig({
		pagespeed: {
			options: {
				nokey: true,
		    	url: appconfig.host
		  	},
		  	prod: {
		    	options: {
		      		url: appconfig.host,
		      		locale: "en",
		      		strategy: appconfig.strategy,
		      		threshold: appconfig.threshold
		    	}
		  	},
		  	paths: {
		    	options: {
		      		paths: appconfig.paths,
		      		locale: "en",
		      		strategy: appconfig.strategy,
		      		threshold: appconfig.threshold
		    	}
		  	}
		}
	});

	grunt.loadNpmTasks('grunt-pagespeed');
};