import { Protocol } from '@miljan9602/router-sdk'
import { V2SubgraphProvider } from '@miljan9602/smart-order-router'
import { ChainId } from '@miljan9602/sdk-core'

export const chainProtocols = [{
    protocol: Protocol.V2,
    chainId: ChainId.AVALANCHE,
    timeout: 90000,
    provider: new V2SubgraphProvider(43114, 3, 90000),
  }
]
