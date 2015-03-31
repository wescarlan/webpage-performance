# webpage-performance
Node.js application to determine webpage speed score and external resource hosts/size


Uses grunt-pagespeed (https://www.npmjs.com/package/grunt-pagespeed) and a load report shell script written by LoadFocus (https://loadfocus.com/blog/2013/07/performance-testing-and-measuring-the-page-load-time-of-web-aplications-using-phantomjs-and-google-charts/).


Before installing:

1. Make sure you have Node.js and npm installed


Installing:

1. $ git clone https://github.com/wescarlan/webpage-performance.git

2. $ cd webpage-performance

3. $ npm i


Running a webpage score test:

1. Update the appconfig.json file to reflect host, paths, strategy, and threshold

2. $ npm run speedtest

3. Information on your webpage speed tests are output on the command line


Running an external resource check:

1. Update the appconfig.json file to reflect host

2. $ npm run resources

3. If the script is successful, it will output "done". Otherwise, try running the test again

4. Data on the external resources used by the host website can be found in a json file contained in webpage-performance/reports/externalResources.json
