const http = require('http');
http.get('http://127.0.0.1:9000/json/list', res => {
    let d=''; res.on('data', c=>d+=c);
    res.on('end', () => {
        const list = JSON.parse(d);
        const t = list.find(x => x.type === 'page' && !x.url.includes('devtools'));
        if (!t) return console.log('no target');
        const WebSocket = require('D:/02Projects/ag2r/node_modules/ws');
        const ws = new WebSocket(t.webSocketDebuggerUrl);
        ws.on('open', () => {
            ws.send(JSON.stringify({
                id: 1, method: 'Runtime.evaluate', params: {
                    expression: `(() => { 
                        const divs = Array.from(document.querySelectorAll('.bg-sidebar')); 
                        return divs.map(d => ({ class: d.className, html: d.outerHTML.substring(0, 200) })); 
                    })()`,
                    returnByValue: true
                }
            }));
        });
        ws.on('message', m => {
            const r = JSON.parse(m);
            if (r.id === 1) {
                console.log(JSON.stringify(r.result.result.value, null, 2));
                process.exit(0);
            }
        });
    });
});
