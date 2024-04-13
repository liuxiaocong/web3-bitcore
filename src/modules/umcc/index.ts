import { BaseModule } from '..';
import { ETHStateProvider } from './api/csp';
import { EthRoutes } from './api/eth-routes';
import { EthVerificationPeer } from './p2p/EthVerificationPeer';
import { EthP2pWorker } from './p2p/p2p';

export default class ETHModule extends BaseModule {
  constructor(services: BaseModule['bitcoreServices']) {
    super(services);
    services.P2P.register('UMCC', EthP2pWorker);
    services.CSP.registerService('UMCC', new ETHStateProvider());
    services.Api.app.use(EthRoutes);
    services.Verification.register('UMCC', EthVerificationPeer);
  }
}
