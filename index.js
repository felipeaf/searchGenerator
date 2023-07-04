import ArrayRandomIterator from "./ArrayRandomIterator.js";
import lista from "./br-utf8.js";
import BuscaIt from "./buscaIt.js";
import GeraBuscaView from "./geraBuscaView.js";
import configParser from "./uRLParamConfigParser.js"


function main() {
    const configParser = new configParser();
    const config = configParser.config;
    if(!config) return;
    const listaIt = new ArrayRandomIterator(lista,config.max)
    const buscaIt = new BuscaIt(config.url, listaIt);
    const geraBuscaView = new GeraBuscaView(buscaIt);
    geraBuscaView.run();
}

main();