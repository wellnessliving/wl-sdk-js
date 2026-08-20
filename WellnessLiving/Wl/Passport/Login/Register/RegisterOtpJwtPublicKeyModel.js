/**
 * Returns public key material for OTP registration JWT verification.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Passport_Login_Register_RegisterOtpJwtPublicKeyModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Public key in JWK format.
   *
   * Each array item is one JWK with the following structure:
   *
   * @get result
   * @type {{}[]}
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
 * Returns public key material for OTP registration JWT verification.
 *
 * @function
 * @name Wl_Passport_Login_Register_RegisterOtpJwtPublicKeyModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
