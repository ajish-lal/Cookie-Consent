const Cookie = {
    setCookie : function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    getCookie : function (cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return null;
    },
    getAllCookies: function () {
        var cookies = {};
        if (document.cookie && document.cookie !== '') {
            var split = document.cookie.split(';');
            for (var i = 0; i < split.length; i++) {
                var name = split[i].substr(0, split[i].indexOf('=')).replace(/^\s+/g, '');
                var value = split[i].substr(split[i].indexOf('=')+1);
                cookies[decodeURIComponent(name)] = decodeURIComponent(value);
            }
        }
        return cookies;
    },
    deleteAllCookies: function() {
        var cookies = document.cookie.split(';');
        for (var i = 0 ; i < cookies.length; i++) {
            document.cookie = cookies[i].split('=')[0] + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
    }
}

export default Cookie;