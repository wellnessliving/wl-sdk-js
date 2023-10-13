/**
 * Information for a specified business.
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
   * List of all business services and their availability data.
   * Array, where keys are sids from {@link Wl_Service_ServiceSid} and values are boolean:
   * <tt>true</tt> - if service is enabled in the business, <tt>false</tt> otherwise.
   *
   * @get result
   * @type {{}}
   */
  this.a_service_list = undefined;

  /**
   * The list of predefined tips in percentages.
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
   * Business category ID of the business.
   *
   * @get result
   * @see RsBusinessCategorySid
   * @type {number}
   */
  this.id_category = undefined;

  /**
   * Currency ID of the given business or system currency ID if the business didn't pass.
   *
   * @get result
   * @see Core_Locale_CurrencySid
   * @type {number}
   */
  this.id_currency = undefined;

  /**
   * The Locale ID, used to search geo items.
   *
   * @get result
   * @see Core_Locale_LocaleSid
   * @type {number}
   */
  this.id_locale = undefined;

  /**
   * Rank type ID of the business.
   *
   * Constant from {@link RsRankTypeSid}.
   *
   * <tt>null</tt> if business does not have a rank type.
   *
   * @get result
   * @type {?number}
   */
  this.id_rank_type = null;

  /**
   * The region ID. This indicates the data center where the information about the business is stored.
   * One of the {@link Core_Amazon_Region_AmazonRegionSid} constants.
   *
   * Requests made to different regions can lead to known issues such as responses indicating that the
   * business (or its elements) doesn't exist. This is because databases on different data centers are
   * independent. For example, performing a request to the US cluster for a list of classes for an AU
   * cluster business will return an empty list.
   *
   * @get result
   * @type {number}
   */
  this.id_region = undefined;

  /**
   * Whether surcharges to client payments are enabled in the business.
   *
   * @get result
   * @type {boolean}
   */
  this.is_apply_surcharge = false;

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
   * <tt>true</tt> if verification of the progress log by a staff member is required; <tt>false</tt> otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_progress_verify = undefined;

  /**
   * Whether quizzes available in the business.
   *
   * @get result
   * @type {boolean}
   */
  this.is_quiz_available = false;

  /**
   * <tt>true</tt> if tips are available in the business; <tt>false</tt> otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_tip = undefined;

  /**
   * <tt>true</tt> if the business has the "No tip" option displayed; <tt>false</tt> otherwise.
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
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The business key obtained by the security token {@link Wl_Business_DataModel.text_token}.
   * Client side can use this way if it does not know business key but knows authorization token.
   *
   * @get result
   * @type {string}
   */
  this.k_business_token = undefined;

  /**
   * The currency key of the given business or system currency if the business didn't pass.
   *
   * @deprecated Use {@link Wl_Business_DataModel.id_currency} instead.
   * @get result
   * @type {string}
   */
  this.k_currency = undefined;

  /**
   * The reply-to email address.
   *
   * @get result
   * @type {string}
   */
  this.s_reply_mail = undefined;

  /**
   * The reply-to business name.
   *
   * @get result
   * @type {string}
   */
  this.s_reply_name = undefined;

  /**
   * The business address.
   *
   * @get result
   * @type {string}
   */
  this.text_office_address = undefined;

  /**
   * The business title.
   *
   * @get result
   * @type {string}
   */
  this.text_title = undefined;

  /**
   * The authorization token.
   * This may be used instead of {@link Wl_Business_DataModel.k_business} to
   * identify a business.
   *
   * @get get
   * @type {string}
   */
  this.text_token = "";

  /**
   * The Facebook page.
   *
   * @get result
   * @type {string}
   */
  this.url_facebook = undefined;

  /**
   * The Google+ page.
   *
   * @get result
   * @type {string}
   */
  this.url_google = undefined;

  /**
   * Instagram page.
   * {@link Wl\Business\BusinessInfo::$url_instagram}.
   *
   * @get result
   * @type {string}
   */
  this.url_instagram = "";

  /**
   * Linkedin profile.
   * {@link Wl\Business\BusinessInfo::$url_linkedin}.
   *
   * @get result
   * @type {string}
   */
  this.url_linkedin = "";

  /**
   * The logo URL.
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
   * The Twitter page.
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

  /**
   * YouTube website.
   * {@link Wl\Business\BusinessInfo::$url_youtube}.
   *
   * @get result
   * @type {string}
   */
  this.url_youtube = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_DataModel);

/**
 * @inheritDoc
 */
Wl_Business_DataModel.prototype.config=function()
{
  return {"a_field": {"a_service_list": {"get": {"result": true}},"a_tip_predefine": {"get": {"result": true}},"i_logo_height": {"get": {"get": true}},"i_logo_width": {"get": {"get": true}},"id_category": {"get": {"result": true}},"id_currency": {"get": {"result": true}},"id_locale": {"get": {"result": true}},"id_rank_type": {"get": {"result": true}},"id_region": {"get": {"result": true}},"is_apply_surcharge": {"get": {"result": true}},"is_location_multiple": {"get": {"result": true}},"is_progress_client": {"get": {"result": true}},"is_progress_verify": {"get": {"result": true}},"is_quiz_available": {"get": {"result": true}},"is_tip": {"get": {"result": true}},"is_tip_deny": {"get": {"result": true}},"is_tip_sign": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_business_token": {"get": {"result": true}},"k_currency": {"get": {"result": true}},"s_reply_mail": {"get": {"result": true}},"s_reply_name": {"get": {"result": true}},"text_office_address": {"get": {"result": true}},"text_title": {"get": {"result": true}},"text_token": {"get": {"get": true}},"url_facebook": {"get": {"result": true}},"url_google": {"get": {"result": true}},"url_instagram": {"get": {"result": true}},"url_linkedin": {"get": {"result": true}},"url_logo": {"get": {"result": true}},"url_logo_empty": {"get": {"result": true}},"url_twitter": {"get": {"result": true}},"url_website": {"get": {"result": true}},"url_youtube": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Business_DataModel.instanceGet
 * @param {string} k_business The business key.
 * @returns {Wl_Business_DataModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */