import jwt from 'jsonwebtoken'
declare class JsonWebToken {
  constructor(privateKey: string, publicKey: string)
  privateKey: string
  publicKey: string
  signToken: (payload: any, expire?: string) => string
  verifyToken: (token: string) => string | jwt.JwtPayload
  payload: any
  expire: string
  token: string
}
export default JsonWebToken
