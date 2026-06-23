/**
 * Checks required profile fields and, if complete, registers the existing user in the specified business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Add_MailUseOkModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Login_Add_MailUseOkModel_a_error_list
   * @property {string} html_message The error message.
   * @property {string} s_field The name of the field missing information. Given in the format `k_field.name`.
   */

  /**
   * The list of fields with missing information.
   * Each element is an array containing the following data:
   *
   * @post result
   * @type {Wl_Login_Add_MailUseOkModel_a_error_list}
   */
  this.a_error_list = undefined;

  /**
   * This value is `true` if this user is a lead. `false` if otherwise.
   *
   * @post post
   * @type {boolean}
   */
  this.is_lead = false;

  /**
   * The business key used internally by WellnessLiving.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * The Lead Capture Widget skin key. This is used only if a lead was added.
   *
   * @post post
   * @type {string}
   */
  this.k_skin = "";

  /**
   * The result code of the request.
   *
   * @post result
   * @type {string}
   */
  this.s_code = undefined;

  /**
   * The result message of the request.
   *
   * @post result
   * @type {string}
   */
  this.text_message = undefined;

  /**
   * The user key.
   *
   * @post post
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Add_MailUseOkModel);

/**
 * @inheritDoc
 */
Wl_Login_Add_MailUseOkModel.prototype.config=function()
{
  return {"a_field":{"a_error_list":{"post":{"result":true}},"is_lead":{"post":{"post":true}},"k_business":{"post":{"post":true}},"k_skin":{"post":{"post":true}},"s_code":{"post":{"result":true}},"text_message":{"post":{"result":true}},"uid":{"post":{"post":true}}}};
};

/**
 * Checks required profile fields and, if complete, registers the existing user in the specified business.
 *
 * Validates the user's profile for any missing required fields and, if all fields are complete, adds the user as
 * a member of the business. Returns a status code and a list of any fields that still need to be filled in.
 *
 * @function
 * @name Wl_Login_Add_MailUseOkModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
