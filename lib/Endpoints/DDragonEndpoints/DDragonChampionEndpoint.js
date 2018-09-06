import DDragonRequest, {
    DDragonRequestTypes,
} from 'RequestClient/DDragonRequest'
import METHOD_NAMES from 'Enums/method-names'

class DDragonChampionEndpoint {
    constructor(config) {
        this.config = config

        this.get = this.get.bind(this)
        this.list = this.list.bind(this)
        this.listFull = this.listFull.bind(this)
    }

    get(championName) {
        return new DDragonRequest(
            this.config,
            `champion/${championName}.json`,
            DDragonRequestTypes.CDN.DATA,
            METHOD_NAMES.DDRAGON.CHAMPION_GET,
        )
    }

    list() {
        return new DDragonRequest(
            this.config,
            'champion.json',
            DDragonRequestTypes.CDN.DATA,
            METHOD_NAMES.DDRAGON.CHAMPION_LIST,
        )
    }

    // Own method to make it explicit that they are cached differently.
    listFull() {
        return new DDragonRequest(
            this.config,
            'championFull.json',
            DDragonRequestTypes.CDN.DATA,
            METHOD_NAMES.DDRAGON.CHAMPION_LIST_FULL,
        )
    }
}

export default DDragonChampionEndpoint