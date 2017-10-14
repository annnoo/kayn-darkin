import SpectatorSuperclass from './SpectatorSuperclass';
import Request from 'RequestClient/Request';
import METHOD_NAMES from 'Enums/method-names';

class CurrentGameEndpoint extends SpectatorSuperclass {
  constructor(config) {
    super();

    this.config = config;

    this.by = {
      summonerID: this.summonerID.bind(this),
    };
  }

  summonerID(summonerID) {
    return new Request(
      this.config,
      this.serviceName,
      `active-games/by-summoner/${summonerID}`,
      METHOD_NAMES.SPECTATOR.GET_CURRENT_GAME_INFO_BY_SUMMONER,
    );
  }
}

export default CurrentGameEndpoint;