/**
 * Returns information about user that is currently signed in.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Passport_Login_InfoModel()
{
  WlSdk_ModelAbstract.apply(this);

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

WlSdk_ModelAbstract.extend(Core_Passport_Login_InfoModel);

/**
 * @inheritDoc
 */
Core_Passport_Login_InfoModel.prototype.config=function()
{
  return {"a_field":{"uid":{"get":{"result":true}},"url_password_change":{"get":{"result":true}},"url_register":{"get":{"result":true}}}};
};

/**
 * Returns information about user that is currently signed in.
 *
 * Used to bootstrap the login widget: determines whether a session is active and provides the URLs needed
 * to redirect an unauthenticated visitor to the password reset or registration flows without hard-coding
 * those URLs on the frontend.
 *
 * @function
 * @name Core_Passport_Login_InfoModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
