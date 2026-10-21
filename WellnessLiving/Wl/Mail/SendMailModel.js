/**
 * Sends email.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Mail_SendMailModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Additional data for the notification.
   *
   * The structure depends on the notification type specified in {@link Wl_Mail_SendMailModel.id_mail}.
   *
   * @post post
   * @type {*[]}
   */
  this.a_data = undefined;

  /**
   * The mail type ID.
   *
   * One of the {@link RsMailSid} constants.
   * If not provided, {@link RsMailSid} is used.
   *
   * @post post
   * @see RsMailSid
   * @type {number}
   */
  this.id_mail = 22;

  /**
   * The business key.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The business's mailing address.
   *
   * @post post
   * @type {string}
   */
  this.s_business_mail = "";

  /**
   * The business name.
   *
   * @post post
   * @type {string}
   */
  this.s_business_name = "";

  /**
   * The business's reply.
   *
   * @post post
   * @type {string}
   */
  this.s_business_reply = "";

  /**
   * The campaign name.
   *
   * @post post
   * @type {string}
   */
  this.s_campaign = "";

  /**
   * The message uncompressed content.
   *
   * @post post
   * @type {string}
   */
  this.s_html = "";

  /**
   * The message recipient's address.
   *
   * @post post
   * @type {string}
   */
  this.s_mail = "";

  /**
   * The message's subject line.
   *
   * @post post
   * @type {string}
   */
  this.s_subject = "";

  /**
   * The receiver user key.
   * `null` if the email should not be linked to a specific user's contact history.
   *
   * @post post
   * @type {?string}
   */
  this.uid = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Mail_SendMailModel);

/**
 * @inheritDoc
 */
Wl_Mail_SendMailModel.prototype.config=function()
{
  return {"a_field":{"a_data":{"post":{"post":true}},"id_mail":{"post":{"post":true}},"k_business":{"post":{"get":true}},"s_business_mail":{"post":{"post":true}},"s_business_name":{"post":{"post":true}},"s_business_reply":{"post":{"post":true}},"s_campaign":{"post":{"post":true}},"s_html":{"post":{"post":true}},"s_mail":{"post":{"post":true}},"s_subject":{"post":{"post":true}},"uid":{"post":{"post":true}}}};
};

/**
 * Sends email.
 *
 * Validates the recipient address, business email, subject, and HTML content, then saves the email pattern
 * and dispatches the message to the specified recipient. Rate limiting is applied per hour and per minute.
 *
 * @function
 * @name Wl_Mail_SendMailModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
