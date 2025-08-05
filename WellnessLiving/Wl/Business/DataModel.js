/**
 * Displays information for a specified business.
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
   * A list of all business services and their availability data.
   * This is presented as an array, where keys are SIDs from {@link Wl_Service_ServiceSid} and values are Boolean.
   * If `true`, at least one service is enabled in the business. Otherwise, this will be `false`.
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
   * The maximum height of the business image (in pixels).
   *
   * @get get
   * @type {number}
   */
  this.i_logo_height = 100;

  /**
   * The maximum width of the business image (in pixels).
   *
   * @get get
   * @type {number}
   */
  this.i_logo_width = 220;

  /**
   * The business category ID of the business.
   *
   * @get result
   * @see RsBusinessCategorySid
   * @type {number}
   */
  this.id_category = undefined;

  /**
   * Business status for managing claim request behavior.
   *
   * Constant from {@link Wl_Business_Create_BusinessClaimStatusSid}.
   *
   * @get result
   * @type {number}
   */
  this.id_claim_status = undefined;

  /**
   * The currency ID of the given business (or the system currency ID if the business didn't pass).
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
   * The rank type ID of the business.
   *
   * One of the {@link RsRankTypeSid} constants.
   *
   * This will be `null` if the business doesn't have a rank type.
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
   * Determines whether surcharges to client payments are enabled in the business.
   *
   * @get result
   * @type {boolean}
   */
  this.is_apply_surcharge = false;

  /**
   * `true` if business is a franchisor or franchisee.
   *
   * @get result
   * @type {boolean}
   */
  this.is_franchise = false;

  /**
   * Determines whether the business has multiple locations (including inactive locations).
   *
   * @get result
   * @type {boolean}
   */
  this.is_location_multiple = undefined;

  /**
   * `true` - clients of the business can select a custom time zone in their profile.
   *
   * `false` - the location or business time zone is used.
   *
   * @get result
   * @type {boolean}
   */
  this.is_profile_timezone = undefined;

  /**
   * If `true`, clients can enter the progress log. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_progress_client = undefined;

  /**
   * If `true`, verification of the progress log by a staff member is required. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_progress_verify = undefined;

  /**
   * Determines whether quizzes are available in the business.
   *
   * @get result
   * @type {boolean}
   */
  this.is_quiz_available = false;

  /**
   * Determines if the business operates in testing mode.
   *
   * @get result
   * @type {boolean}
   */
  this.is_test = false;

  /**
   * If `true`, tips are available in the business. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_tip = undefined;

  /**
   * If `true`, the business has the "No tip" option displayed. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_tip_deny = undefined;

  /**
   * If `true`, the client must sign after selecting the tip. Otherwise, this will be `false`.
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
   * The franchisor business key. This will be empty if this business is the franchisor or not in a franchise.
   *
   * @get result
   * @type {string}
   */
  this.k_business_franchisor = "";

  /**
   * The business key obtained by the security token {@link Wl_Business_DataModel.text_token}.
   * This can be used on the client side if authorization token should be used instead of the business key
   * (the business key isn't available).
   *
   * @get result
   * @type {string}
   */
  this.k_business_token = undefined;

  /**
   * Key of the business type.
   *
   * @get result
   * @type {string}
   */
  this.k_business_type = "0";

  /**
   * The currency key of the given business, or the system currency if the business didn't pass.
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
   * URL of the home tour page related to the business type.
   *
   * @get result
   * @type {string}
   */
  this.url_home_tour = "";

  /**
   * The Instagram page.
   *
   * @get result
   * @type {string}
   */
  this.url_instagram = "";

  /**
   * The `LinkedIn` profile.
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
   * The image stub (in cases where the business logo isn't loaded).
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
   * The business website.
   *
   * @get result
   * @type {string}
   */
  this.url_website = undefined;

  /**
   * The YouTube website.
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
  return {"a_field": {"a_service_list": {"get": {"result": true}},"a_tip_predefine": {"get": {"result": true}},"i_logo_height": {"get": {"get": true}},"i_logo_width": {"get": {"get": true}},"id_category": {"get": {"result": true}},"id_claim_status": {"get": {"result": true}},"id_currency": {"get": {"result": true}},"id_locale": {"get": {"result": true}},"id_rank_type": {"get": {"result": true}},"id_region": {"get": {"result": true}},"is_apply_surcharge": {"get": {"result": true}},"is_franchise": {"get": {"result": true}},"is_location_multiple": {"get": {"result": true}},"is_profile_timezone": {"get": {"result": true}},"is_progress_client": {"get": {"result": true}},"is_progress_verify": {"get": {"result": true}},"is_quiz_available": {"get": {"result": true}},"is_test": {"get": {"result": true}},"is_tip": {"get": {"result": true}},"is_tip_deny": {"get": {"result": true}},"is_tip_sign": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_business_franchisor": {"get": {"result": true}},"k_business_token": {"get": {"result": true}},"k_business_type": {"get": {"result": true}},"k_currency": {"get": {"result": true}},"s_reply_mail": {"get": {"result": true}},"s_reply_name": {"get": {"result": true}},"text_office_address": {"get": {"result": true}},"text_title": {"get": {"result": true}},"text_token": {"get": {"get": true}},"url_facebook": {"get": {"result": true}},"url_google": {"get": {"result": true}},"url_home_tour": {"get": {"result": true}},"url_instagram": {"get": {"result": true}},"url_linkedin": {"get": {"result": true}},"url_logo": {"get": {"result": true}},"url_logo_empty": {"get": {"result": true}},"url_twitter": {"get": {"result": true}},"url_website": {"get": {"result": true}},"url_youtube": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Business_DataModel.instanceGet
 * @param {string} k_business The business key.
 * @returns {Wl_Business_DataModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */