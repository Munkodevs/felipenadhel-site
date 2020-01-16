class Browser {
    //By: Felipe F.
    getInfo() {
        return {
            "id": "Browser",
            "name": "Browser",
            "blocks": [{
                "opcode": "jQuGet",
                "blockType": "command",
                "text": "go to url: [myURL]",
                "arguments": {
                    "myURL": {
                        "type": "string",
                        "defaultValue": "https://google.com.br"
                    }
                }
            }],
            "menus": {
                supermath: this._formatMenu(['+', '-', '/', '*', '^', 'sqrt']),
            }
        };
    }

    jQuGet({
        myURL
    }) {
        $.get(myURL, function(data) {
            window.open[myURL];
    }
    _formatMenu(menu) {
        const m = [];
        for (let i = 0; i < menu.length; i++) {
            const obj = {};
            obj.text = menu[i];
            obj.value = i.toString();
            m.push(obj);
        }
        return m;
    }
}
Scratch.extensions.register(new Browser());
