/**
 * Data of certain business.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_DataModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * List of predefined tips percentages.
   *
   * @get result
   * @type {number[]}
   */
  this.a_tip_predefine = undefined;

  /**
   * Maximum business image height.
   *
   * @get get
   * @type {number}
   */
  this.i_logo_height = 100;

  /**
   * Maximum business image width.
   *
   * @get get
   * @type {number}
   */
  this.i_logo_width = 220;

  /**
   * Locale ID, to search geo items in one of {@link \Core\Locale\LocaleSid}.
   *
   * @get result
   * @type {number}
   */
  this.id_locale = undefined;

  /**
   * Rank type ID of the business.
   *
   * Constant from {@link \RsRankTypeSid}.
   *
   * <tt>null</tt> if business does not have a rank type.
   *
   * @get result
   * @type {?number}
   */
  this.id_rank_type = null;

  /**
   * Whether business is multiple location.
   * Including inactive locations.
   *
   * @get result
   * @type {boolean}
   */
  this.is_location_multiple = undefined;

  /**
   * <tt>true</tt> if clients can enter progress log; <tt>false</tt> otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_progress_client = undefined;

  /**
   * <tt>true</tt> if verification of progress log by staff member is required; <tt>false</tt> otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_progress_verify = undefined;

  /**
   * Whether tips available in the business.
   *
   * @get result
   * @type {boolean}
   */
  this.is_tip = undefined;

  /**
   * <tt>true</tt> to show button "no tips" in backend application, <tt>false</tt> otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_tip_deny = undefined;

  /**
   * <tt>true</tt> if client must to sign after selecting the tip; <tt>false</tt> otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_tip_sign = undefined;

  /**
   * Business primary key in {@link RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Business primary key got from the {@link \Wl\Business\DataApi::$text_token}. Client side can use this way if it does not know business key but knows authorization token.
   *
   * @get result
   * @type {string}
   */
  this.k_business_token = undefined;

  /**
   * Currency key of the given business or system currency if business not passed.
   *
   * @get result
   * @type {string}
   */
  this.k_currency = undefined;

  /**
   * Reply-to email address.
   *
   * @get result
   * @type {string}
   */
  this.s_reply_mail = undefined;

  /**
   * Reply-to business name.
   *
   * @get result
   * @type {string}
   */
  this.s_reply_name = undefined;

  /**
   * Business address.
   *
   * @get result
   * @type {string}
   */
  this.text_office_address = undefined;

  /**
   * Business title.
   *
   * @get result
   * @type {string}
   */
  this.text_title = undefined;

  /**
   * Authorization token.
   * May be used instead of {@link \Wl\Business\DataApi::$k_business}.
   *
   * @get get
   * @type {string}
   */
  this.text_token = "";

  /**
   * Facebook page.
   *
   * @get result
   * @type {string}
   */
  this.url_facebook = undefined;

  /**
   * Google+ page.
   *
   * @get result
   * @type {string}
   */
  this.url_google = undefined;

  /**
   * Business logo.
   *
   * @get result
   * @type {string}
   */
  this.url_logo = undefined;

  /**
   * Image stub in case the business logo is not loaded.
   *
   * @get result
   * @type {string}
   */
  this.url_logo_empty = undefined;

  /**
   * Twitter page.
   *
   * @get result
   * @type {string}
   */
  this.url_twitter = undefined;

  /**
   * Business website.
   *
   * @get result
   * @type {string}
   */
  this.url_website = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_DataModel);

/**
 * @inheritDoc
 */
Wl_Business_DataModel.prototype.config=function()
{
  return {"a_field": {"a_tip_predefine": {"get": {"result": true}},"i_logo_height": {"get": {"get": true}},"i_logo_width": {"get": {"get": true}},"id_locale": {"get": {"result": true}},"id_rank_type": {"get": {"result": true}},"is_location_multiple": {"get": {"result": true}},"is_progress_client": {"get": {"result": true}},"is_progress_verify": {"get": {"result": true}},"is_tip": {"get": {"result": true}},"is_tip_deny": {"get": {"result": true}},"is_tip_sign": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_business_token": {"get": {"result": true}},"k_currency": {"get": {"result": true}},"s_reply_mail": {"get": {"result": true}},"s_reply_name": {"get": {"result": true}},"text_office_address": {"get": {"result": true}},"text_title": {"get": {"result": true}},"text_token": {"get": {"get": true}},"url_facebook": {"get": {"result": true}},"url_google": {"get": {"result": true}},"url_logo": {"get": {"result": true}},"url_logo_empty": {"get": {"result": true}},"url_twitter": {"get": {"result": true}},"url_website": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Business_DataModel.instanceGet
 * @param {string} k_business Business primary key in {@link RsBusinessSql} table.
 * @returns {Wl_Business_DataModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */