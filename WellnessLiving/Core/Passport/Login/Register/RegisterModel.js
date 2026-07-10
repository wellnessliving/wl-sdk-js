/**
 * Validates the new user's data and sends a confirmation email to complete registration.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Passport_Login_Register_RegisterModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Core_Passport_Login_Register_RegisterModel_a_data
   * @property {string} k_business The key of the business for the WellnessLiving project to register the user in.
   */

  /**
   * The additional data about new users.
   *
   * @post post
   * @type {Core_Passport_Login_Register_RegisterModel_a_data}
   */
  this.a_data = undefined;

  /**
   * ID of source mode.
   *
   * One of {@link Wl_Mode_ModeSid} constants.
   * `null` if not initialized or the api is not called in the Wellnessliving project.
   *
   * @post post
   * @see Wl_Mode_ModeSid
   * @type {?number}
   */
  this.id_mode = null;

  /**
   * JSON configuration for confirmation email.
   *
   * @post result
   * @type {string}
   */
  this.json_confirm_config = undefined;

  /**
   * The application ID. This is a business specific ID required to register clients.
   *
   * @post post
   * @type {string}
   */
  this.s_application = "";

  /**
   * The new client email address.
   *
   * @post post
   * @type {string}
   */
  this.s_mail = "";

  /**
   * The new client given name.
   *
   * @post post
   * @type {string}
   */
  this.s_name_first = "";

  /**
   * The new client surname.
   *
   * @post post
   * @type {string}
   */
  this.s_name_last = "";

  /**
   * The new client password.
   *
   * @post post
   * @type {string}
   */
  this.s_password = "";

  /**
   * The URL to the confirmation page. This link is used in a confirmation email.
   *
   * If empty, URL to default page is used.
   *
   * @post post,result
   * @type {string}
   */
  this.url_confirm = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Passport_Login_Register_RegisterModel);

/**
 * @inheritDoc
 */
Core_Passport_Login_Register_RegisterModel.prototype.config=function()
{
  return {"a_field":{"a_data":{"post":{"post":true}},"id_mode":{"post":{"post":true}},"json_confirm_config":{"post":{"result":true}},"s_application":{"post":{"post":true}},"s_mail":{"post":{"post":true}},"s_name_first":{"post":{"post":true}},"s_name_last":{"post":{"post":true}},"s_password":{"post":{"post":true}},"url_confirm":{"post":{"post":true,"result":true}}}};
};

/**
 * Validates the new user's data and sends a confirmation email to complete registration.
 *
 * Accepts the new user's name, email, and password, validates each field, stores the pending registration,
 * and sends a confirmation email with a link to complete registration via {@link Core_Passport_Login_Register_RegisterConfirmModel}.
 * An optional application ID and custom confirmation URL may be provided.
 *
 * @function
 * @name Core_Passport_Login_Register_RegisterModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
