/**
 * Performs authorization based on the given authorization value and business settings.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Reception_Application_ReceptionAuthorizeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Reception_Application_ReceptionAuthorizeModel_a_select
   * @property {string} text_name_first First name of the user.
   * @property {string} text_name_last Last name of the user.
   * @property {string} uid Key of the user.
   * @property {string} url_image Link to the profile image.
   */

  /**
   * List of the users, which can be authorized.
   *
   * Can be set only this field or {@link Wl_Reception_Application_ReceptionAuthorizeModel}.
   * It depends, whether we found one user or multiple.
   *
   * @post result
   * @type {Wl_Reception_Application_ReceptionAuthorizeModel_a_select[]}
   */
  this.a_select = undefined;

  /**
   * Key of the business, where Check In application is started.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the location, where Check In application is started.
   *
   * @post get
   * @type {string}
   */
  this.k_location = "";

  /**
   * Key of the Check In application.
   *
   * @post get
   * @type {string}
   */
  this.s_secret = "";

  /**
   * Authorization value - it's a value, which client entered on authorization form.
   *
   * It can be client ID, email or phone number. Depends on the business settings.
   *
   * @post post
   * @type {string}
   */
  this.text_authorize = "";

  /**
   * Key of the authorized user.
   *
   * Can be set only this field or {@link Wl_Reception_Application_ReceptionAuthorizeModel}.
   * It depends, whether we found one user or multiple.
   *
   * @post result
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reception_Application_ReceptionAuthorizeModel);

/**
 * @inheritDoc
 */
Wl_Reception_Application_ReceptionAuthorizeModel.prototype.config=function()
{
  return {"a_field":{"a_select":{"post":{"result":true}},"k_business":{"post":{"get":true}},"k_location":{"post":{"get":true}},"s_secret":{"post":{"get":true}},"text_authorize":{"post":{"post":true}},"uid":{"post":{"result":true}}}};
};

/**
 * Performs authorization based on the given authorization value and business settings.
 *
 * Looks up clients by member ID, email address, or phone number and returns matching user records for selection
 * in the Self Check-In Web App.
 *
 * @function
 * @name Wl_Reception_Application_ReceptionAuthorizeModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
