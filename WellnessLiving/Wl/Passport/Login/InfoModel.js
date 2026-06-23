/**
 * Returns the current user's login information and password reset URL for the specified business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Passport_Login_InfoModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The current user key.
   *
   * This will be `null` if the user isn't signed in.
   *
   * @get result
   * @type {?string}
   */
  this.uid = null;

  /**
   * A URL that a user can visit to reset their password.
   *
   * @get result
   * @type {string}
   */
  this.url_password_change = undefined;

  /**
   * The URL to the registration page.
   *
   * @get result
   * @type {string}
   */
  this.url_register = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Passport_Login_InfoModel);

/**
 * @inheritDoc
 */
Wl_Passport_Login_InfoModel.prototype.config=function()
{
  return {"a_field":{"k_business":{"get":{"get":true}},"uid":{"get":{"result":true}},"url_password_change":{"get":{"result":true}},"url_register":{"get":{"result":true}}}};
};

/**
 * Returns the current user's login information and password reset URL for the specified business.
 *
 * Validates the business key, applies any business-specific redemption settings, then delegates to the parent
 * implementation to return the current user ID and password reset URL.
 *
 * @function
 * @name Wl_Passport_Login_InfoModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
