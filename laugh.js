#!/usr/bin/env node

var program = require('commander');
var request = require('request');
var chalk = require('chalk');

program
    .version('0.0.1')
    .usage('Type smile')
    .option('Just type smile ...and smile')
    .parse(process.argv);

if (!program.args.length) {
    var url = 'http://api.icndb.com/jokes/random?firstName=Cyber&amp&&lastName=Rajni&&limitTo=nerdy';
    request({
        method: 'GET',
        headers: {},
        url: url
    }, function(error, response, body) {

        if (!error && response.statusCode == 200) {
            body = JSON.parse(body);
            console.log(chalk.green.bold.bgBlack(body.value.joke));
        } else if (error) {
            console.log(chalk.red('Error: ' + error));
        }
    });
} else {
    console.log(chalk.magenta.bold.underline("No Arguments Plz, just smile :)"));
}
