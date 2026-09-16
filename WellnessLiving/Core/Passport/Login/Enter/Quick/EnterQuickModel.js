/**
 * Generates secret key to verify legitimacy of the request.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Passport_Login_Enter_Quick_EnterQuickModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Core_Passport_Login_Enter_Quick_EnterQuickModel_a_data
   * @property {string} k_business_backend Business key to set as the current backend business after sign in.
   * @property {string} k_business_frontend Business key to set as the current frontend business after sign in.
   */

  /**
   * Additional data, which can be sent to the listeners of the event "user signed in".
   *
   * Known optional keys: 
   * Other listener-specific keys may also be included.
   *
   * @get get
   * @type {Core_Passport_Login_Enter_Quick_EnterQuickModel_a_data}
   */
  this.a_data = undefined;

  /**
   * Key of the user to be signed in.
   *
   * `null` to logout current user.
   *
   * @get get
   * @type {?string}
   */
  this.uid = null;

  /**
   * Protected link to sign in.
   *
   * @get result
   * @type {string}
   */
  this.url_enter = undefined;

  /**
   * Link to redirect user after sign in.
   *
   * @get get
   * @type {string}
   */
  this.url_redirect = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Passport_Login_Enter_Quick_EnterQuickModel);

/**
 * @inheritDoc
 */
Core_Passport_Login_Enter_Quick_EnterQuickModel.prototype.config=function()
{
  return {"a_field":{"a_data":{"get":{"get":true}},"uid":{"get":{"get":true}},"url_enter":{"get":{"result":true}},"url_redirect":{"get":{"get":true}}}};
};

/**
 * Generates secret key to verify legitimacy of the request.
 *
 * Verifies that the current session belongs to the requested user, then builds a protected
 * link that can be opened to sign the user in without further authorization.
 * The generated link expires after `900` seconds.
 *
 * @function
 * @name Core_Passport_Login_Enter_Quick_EnterQuickModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
