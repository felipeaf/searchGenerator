import ArrayRandomIterator from "./ArrayRandomIterator.js";
import lista from "./br-utf8.js";
import BuscaIt from "./buscaIt.js";
import GeraBuscaView from "./geraBuscaView.js";
import View from "./uRLParamConfigParser.js"


function main() {
    const view = new View();
    const config = view.config;
    if(!config) return;
    const listaIt = new ArrayRandomIterator(lista,config.max)
    const buscaIt = new BuscaIt(config.url, listaIt);
    const geraBuscaView = new GeraBuscaView(buscaIt);
    geraBuscaView.run();
}

main();