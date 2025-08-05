/**
 * Adds a relative during the booking process.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Relation_RelationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The date/time of the session to check for booking availability.
   *
   * @get get
   * @type {string}
   */
  this.dtu_date = "";

  /**
   * Day of birthday.
   * `null` if birthday is not entered.
   *
   * @post post
   * @type {?number}
   */
  this.i_day = null;

  /**
   * Month of birthday.
   * `null` if birthday is not entered.
   *
   * @post post
   * @type {?number}
   */
  this.i_month = null;

  /**
   * Year of birthday.
   * `null` if birthday is not entered.
   *
   * @post post
   * @type {?number}
   */
  this.i_year = null;

  /**
   * The mode type.
   * One of the {@link Wl_Mode_ModeSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * The relation type.
   * One of the {@link Wl_Family_Relation_RelationSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_relation = 0;

  /**
   * Checking whether the client has a credit card (if configured in the business) will be skipped if this flag is set to `false`.
   *
   * Use this field with caution.
   * The final booking will not use this flag and the check will still be performed.
   *
   * @get get
   * @type {boolean}
   */
  this.is_credit_card_check = true;

  /**
   * `true` - the new relative uses the email from <var>uid_from</var>.
   *
   * `false` - the new relative has their own email.
   *
   * @post post
   * @type {boolean}
   */
  this.is_mail_inherit = false;

  /**
   * `true` - the new relative pays for themself.
   *
   * `false` - <var>uid_from</var> pays for the new relative.
   *
   * @post post
   * @type {boolean}
   */
  this.is_pay_self = false;

  /**
   * The business where <var>uid_from</var> creates the new relative.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The key of the session to check for booking availability.
   *
   * @get get
   * @type {string}
   */
  this.k_class_period = "0";

  /**
   * The new relative's email.
   *
   * @post post
   * @type {string}
   */
  this.text_mail = "";

  /**
   * The new relative's first name.
   *
   * @post post
   * @type {string}
   */
  this.text_name_first = "";

  /**
   * The new relative's last name.
   *
   * @post post
   * @type {string}
   */
  this.text_name_last = "";

  /**
   * The newly added relative.
   *
   * @post result
   * @type {string}
   */
  this.uid_create = undefined;

  /**
   * UID of already existed in another business user.
   *
   * @post post
   * @type {string}
   */
  this.uid_existed = "";

  /**
   * The user who's adding the new relative.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid_from = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Relation_RelationModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Relation_RelationModel.prototype.config=function()
{
  return {"a_field": {"dtu_date": {"get": {"get": true}},"i_day": {"post": {"post": true}},"i_month": {"post": {"post": true}},"i_year": {"post": {"post": true}},"id_mode": {"post": {"post": true}},"id_relation": {"post": {"post": true}},"is_credit_card_check": {"get": {"get": true}},"is_mail_inherit": {"post": {"post": true}},"is_pay_self": {"post": {"post": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_class_period": {"get": {"get": true}},"text_mail": {"post": {"post": true}},"text_name_first": {"post": {"post": true}},"text_name_last": {"post": {"post": true}},"uid_create": {"post": {"result": true}},"uid_existed": {"post": {"post": true}},"uid_from": {"get": {"get": true},"post": {"get": true}}}};
};