
exports.format_url = function( config ) {
    return config.path + '?username=' + config.user_name + '&password=' + config.password + '&api=' + config.method_name;
}