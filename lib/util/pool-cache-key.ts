import { Protocol } from '@miljan9602/router-sdk'
import { ChainId } from '@miljan9602/sdk-core'

export const S3_POOL_CACHE_KEY = (baseKey: string, chain: ChainId, protocol: Protocol) =>
  `${baseKey}-${chain}-${protocol}`
