import ArrayRandomIterator from "./ArrayRandomIterator.js";
import lista from "./br-utf8.js";
import SearchIt from "./buscaIt.js";
import GeraBuscaView from "./geraBuscaView.js";
import ConfigParser from "./uRLParamConfigParser.js"


function main() {
    const configParser = new ConfigParser();
    const config = configParser.config;
    if(!config) return;
    const listaIt = new ArrayRandomIterator(lista,config.max)
    const buscaIt = new SearchIt(config.url, listaIt);
    const geraBuscaView = new GeraBuscaView(buscaIt);
    geraBuscaView.run();
}

main();