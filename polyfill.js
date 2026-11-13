// if the browser has  no fetch 
// build one using XMLHttpRequest that works the same way.
if (!window.fetch) {
    window.fetch = function (url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url);

            //hand back an object shaped like a real Response
            xhr.onload = function () {
                resolve({
                    ok: xhr.status >= 200 && xhr.status < 300,
                    status: xhr.status,
                    json: function () {
                        return Promise.resolve(JSON.parse(xhr.responseText));
                    },
                    text: function () {
                        return Promise.resolve(xhr.responseText);
                    }
                });
            };

            // Couldn't connect at all 
            xhr.onerror = function () {
                reject(new TypeError("Network request failed"));
            };

            xhr.send();
        });
    };
}