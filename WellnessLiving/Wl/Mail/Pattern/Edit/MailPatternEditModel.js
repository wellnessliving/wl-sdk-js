/**
 * API to check for clients who will be affected after the change of mail pattern.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Mail_Pattern_Edit_MailPatternEditModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of client and member types. Each element is primary key in the {@link \Wl\Login\Type\Sql} table.
   *
   * @get get
   * @type {string[]}
   */
  this.a_login_type = [];

  /**
   * List of member groups. Each element is primary key in the {@link \Wl\Member\Group\Sql} table.
   *
   * @get get
   * @type {string[]}
   */
  this.a_member_group = [];

  /**
   * Whether or not to stop sending review requests after <var>i_max_review_request</var> is reached.
   *
   * <tt>null</tt> if not set.
   *
   * @get get
   * @type {?boolean}
   */
  this.has_max_review_request = null;

  /**
   * The amount for the new delay before sending mail.
   *
   * <tt>null</tt> if not loaded.
   *
   * @get get
   * @type {?number}
   */
  this.i_after = null;

  /**
   * Count of the duration unit after change.
   *
   * <tt>null</tt> if not loaded.
   *
   * @get get
   * @type {?number}
   */
  this.i_delay = null;

  /**
   * Maximum number of review requests that can be sent.
   *
   * <tt>null</tt> if not set.
   *
   * @get get
   * @type {?number}
   */
  this.i_max_review_request = null;

  /**
   * Type of the duration unit after change. One of constants {@link ADurationSid}.
   *
   * <tt>null</tt> if not set.
   *
   * @get get
   * @type {?number}
   */
  this.id_duration_delay = null;

  /**
   * Whether some clients will be affected after the change of mail pattern.
   *
   * @get result
   * @type {boolean}
   */
  this.is_affected_client = undefined;

  /**
   * If <tt>true</tt> then mail for all visits will be rescheduled.
   * If <tt>false</tt> then only first will be rescheduled.
   *
   * After change.
   *
   * <tt>null</tt> if not set.
   *
   * @get get
   * @type {?boolean}
   */
  this.is_after_every = null;

  /**
   * Whether mail will be sent after the client has made a review.
   * <tt>true</tt> to send the mail, <tt>false</tt> to disable sending the mail. <tt>null</tt> if not set.
   *
   * @get get
   * @type {?boolean}
   */
  this.is_disable_review_request_after_review = null;

  /**
   * Whether need to prevent sending email without fulfilling a certain condition.
   * For example, for email {@link \RaMailSid::PROMOTION_PURCHASE} and {@link \RaMailSid::LEAD_CAPTURE}
   * <tt>true</tt> means that mail will not be sent to clients who make any new purchase, <tt>false</tt> otherwise.
   * After change.
   *
   * <tt>null</tt> if not set.
   *
   * @get get
   * @type {?boolean}
   */
  this.is_prevent = null;

  /**
   * Key of retention location. Primary key in {@link \RsLocationSql} table.
   *
   * <tt>null</tt> if not set.
   *
   * @get get
   * @type {?string}
   */
  this.k_location_retention = null;

  /**
   * Key of the mail pattern. Primary key in {@link \RsMailPatternSql} table.
   *
   * <tt>null</tt> if not loaded.
   *
   * @get get
   * @type {?string}
   */
  this.k_mail_pattern = null;

  /**
   * Object identifier.
   * Some mails related only with specific promotion, product or service.
   *
   * <tt>null</tt> if not set.
   *
   * @get get
   * @type {?string}
   */
  this.s_object = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Mail_Pattern_Edit_MailPatternEditModel);

/**
 * @inheritDoc
 */
Wl_Mail_Pattern_Edit_MailPatternEditModel.prototype.config=function()
{
  return {"a_field": {"a_login_type": {"get": {"get": true}},"a_member_group": {"get": {"get": true}},"has_max_review_request": {"get": {"get": true}},"i_after": {"get": {"get": true}},"i_delay": {"get": {"get": true}},"i_max_review_request": {"get": {"get": true}},"id_duration_delay": {"get": {"get": true}},"is_affected_client": {"get": {"result": true}},"is_after_every": {"get": {"get": true}},"is_disable_review_request_after_review": {"get": {"get": true}},"is_prevent": {"get": {"get": true}},"k_location_retention": {"get": {"get": true}},"k_mail_pattern": {"get": {"get": true}},"s_object": {"get": {"get": true}}}};
};