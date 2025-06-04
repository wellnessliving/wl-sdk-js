/**
 * Endpoint to get JWT token.
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
  this.s_token = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Passport_Enter_Jwt_JwtTokenModel);

/**
 * @inheritDoc
 */
Core_Passport_Enter_Jwt_JwtTokenModel.prototype.config=function()
{
  return {"a_field": {"s_token": {"get": {"result": true}}}};
};