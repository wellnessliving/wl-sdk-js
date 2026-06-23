/**
 * Returns a jwt token that can be used to log user.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Passport_Enter_Jwt_JwtTokenModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Jwt token that allows to authenticate user.
   *
   * @get result
   * @type {string}
   */
  this.s_token = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Passport_Enter_Jwt_JwtTokenModel);

/**
 * @inheritDoc
 */
Core_Passport_Enter_Jwt_JwtTokenModel.prototype.config=function()
{
  return {"a_field":{"s_token":{"get":{"result":true}}}};
};

/**
 * Returns a jwt token that can be used to log user.
 *
 * Requires the user to be signed in. Generates a signed JWT token tied to the current authorization
 * header and user ID that can be passed to other services to authenticate the user without sharing session cookies.
 *
 * @function
 * @name Core_Passport_Enter_Jwt_JwtTokenModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
