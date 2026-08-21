/**
 * Gets the public key material for OTP registration JWT verification.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Passport_Login_Register_RegisterOtpJwtPublicKeyModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Passport_Login_Register_RegisterOtpJwtPublicKeyModel_a_keys
   * @property {string} alg Signing algorithm. Always 'RS256'.
   * @property {string} e RSA public exponent in base64url format.
   * @property {string} kid Key identifier for JWT header matching.
   * @property {string} kty Key type. Always 'RSA'.
   * @property {string} n RSA modulus in base64url format.
   * @property {string} use Public key usage. Always 'sig'.
   */

  /**
   * Public key in JWK format.
   *
   * Each array item is one JWK with the following structure:
   *
   * @get result
   * @type {Wl_Passport_Login_Register_RegisterOtpJwtPublicKeyModel_a_keys[]}
   */
  this.a_keys = undefined;

  /**
   * Public key in PEM format.
   *
   * @get result
   * @type {string}
   */
  this.s_public_key = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Passport_Login_Register_RegisterOtpJwtPublicKeyModel);

/**
 * @inheritDoc
 */
Wl_Passport_Login_Register_RegisterOtpJwtPublicKeyModel.prototype.config=function()
{
  return {"a_field":{"a_keys":{"get":{"result":true}},"s_public_key":{"get":{"result":true}}}};
};

/**
 * Gets the public key material for OTP registration JWT verification.
 *
 * The public key is used to verify a JWT token.
 *
 * @function
 * @name Wl_Passport_Login_Register_RegisterOtpJwtPublicKeyModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
