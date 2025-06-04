/**
 * An endpoint that adds a relationship to a client profile during the booking process.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Relation_RelationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of checks that must be skipped.
   * Each element must be a member of {@link Wl_Book_Process_ProcessCheckSid}.
   *
   * @get get
   * @type {number[]}
   */
  this.a_check_ignore = [];

  /**
   * The date/time to use for checking the session booking's availability.
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
  /**
   * The relationship type.
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
   * This will be `true` if the linked client profile (relationship) uses the email of <var>uid_from</var>.
   * Otherwise, this will be `false` if they have their own email.
   *
   * @post post
   * @type {boolean}
   */
  this.is_mail_inherit = false;

  /**
   * This will `true` if the linked client profile (relationship) pays for their own purchases.
   * Otherwise, this will be `false` if <var>uid_from</var> pays for the linked profile's purchases.
   *
   * @post post
   * @type {boolean}
   */
  this.is_pay_self = false;

  /**
   * The business in which <var>uid_from</var> records the new relationship.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The session booking to check availability for.
   *
   * @get get
   * @type {string}
   */
  this.k_class_period = "0";

  /**
   * The linked client profile's (relationship) email.
   *
   * @post post
   * @type {string}
   */
  this.text_mail = "";

  /**
   * The linked client profile's (relationship) first name.
   *
   * @post post
   * @type {string}
   */
  this.text_name_first = "";

  /**
   * The linked client profile's (relationship) last name.
   *
   * @post post
   * @type {string}
   */
  this.text_name_last = "";

  /**
   * The newly added relationship.
   *
   * @post result
   * @type {string}
   */
  this.uid_create = undefined;

  /**
   * The user (client profile) who's adding the linked client profile (relationship).
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
  return {"a_field": {"a_check_ignore": {"get": {"get": true}},"dtu_date": {"get": {"get": true}},"i_day": {"post": {"post": true}},"i_month": {"post": {"post": true}},"i_year": {"post": {"post": true}},"id_relation": {"post": {"post": true}},"is_credit_card_check": {"get": {"get": true}},"is_mail_inherit": {"post": {"post": true}},"is_pay_self": {"post": {"post": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_class_period": {"get": {"get": true}},"text_mail": {"post": {"post": true}},"text_name_first": {"post": {"post": true}},"text_name_last": {"post": {"post": true}},"uid_create": {"post": {"result": true}},"uid_from": {"get": {"get": true},"post": {"get": true}}}};
};