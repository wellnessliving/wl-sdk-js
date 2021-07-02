/**
 * Search referrer by query's string.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_User_Referrer_ReferrerModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "s_search,k_business";

  /**
   * @typedef {{}} Wl_User_Referrer_ReferrerModel_a_photo
   * @property {number} i_height The height of the photo.
   * @property {number} i_width The width of the photo.
   * @property {string} url_photo The URL of the photo.
   */

  /**
   * Information about the referrer's photo. Has next structure:
   * <dl>
   *   <dt>
   *     int <var>i_height</var>
   *   </dt>
   *   <dd>
   *     The height of the photo.
   *   </dd>
   *   <dt>
   *     int <var>i_width</var>
   *   </dt>
   *   <dd>
   *     The width of the photo.
   *   </dd>
   *   <dt>
   *     string <var>url_photo</var>
   *   </dt>
   *   <dd>
   *     The URL of the photo.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_User_Referrer_ReferrerModel_a_photo}
   */
  this.a_photo = undefined;

  /**
   * Current business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * The email of the referrer.
   *
   * @get result
   * @type {string}
   */
  this.s_email = undefined;

  /**
   * The business client ID of the referrer.
   *
   * @get result
   * @type {string}
   */
  this.s_member = undefined;

  /**
   * The first name of the referrer.
   *
   * @get result
   * @type {string}
   */
  this.s_name_first = undefined;

  /**
   * The last name of the referrer.
   *
   * @get result
   * @type {string}
   */
  this.s_name_last = undefined;

  /**
   * The phone of the referrer.
   *
   * @get result
   * @type {string}
   */
  this.s_phone = undefined;

  /**
   * A string for search a referrer.
   *
   * @get get
   * @type {string}
   */
  this.s_search = "";

  /**
   * Client's user key of the referrer.
   *
   * @get result
   * @type {string}
   */
  this.uid_referrer = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_User_Referrer_ReferrerModel);

/**
 * @inheritDoc
 */
Wl_User_Referrer_ReferrerModel.prototype.config=function()
{
  return {"a_field": {"a_photo": {"get": {"result": true}},"k_business": {"get": {"get": true}},"s_email": {"get": {"result": true}},"s_member": {"get": {"result": true}},"s_name_first": {"get": {"result": true}},"s_name_last": {"get": {"result": true}},"s_phone": {"get": {"result": true}},"s_search": {"get": {"get": true}},"uid_referrer": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_User_Referrer_ReferrerModel.instanceGet
 * @param {string} s_search A string for search a referrer.
 * @param {string} k_business Current business key.
 * @returns {Wl_User_Referrer_ReferrerModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */