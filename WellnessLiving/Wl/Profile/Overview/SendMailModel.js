/**
 * This method is called to process POST query.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Overview_SendMailModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "id_mail,k_business,uid";

  /**
   * ID of the email.
   *
   * @post get
   * @see RsMailSid
   * @type {number}
   */
  this.id_mail = 0;

  /**
   * Business key.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * UID of a user for whom an email should be sent.
   *
   * @post get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Overview_SendMailModel);

/**
 * @inheritDoc
 */
Wl_Profile_Overview_SendMailModel.prototype.config=function()
{
  return {"a_field":{"id_mail":{"post":{"get":true}},"k_business":{"post":{"get":true}},"uid":{"post":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Profile_Overview_SendMailModel.instanceGet
 * @param {number} id_mail ID of the email.
 * @param {string} k_business Business key.
 * @param {string} uid UID of a user for whom an email should be sent.
 * @returns {Wl_Profile_Overview_SendMailModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * This method is called to process POST query.
 *
 * Validates the mail id, business, and target user, checks that the current staff member has access to
 * the user and permission to send mail, builds any additional data required for the selected mail (for
 * example, a password reset link), and sends the notification.
 *
 * @function
 * @name Wl_Profile_Overview_SendMailModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
