/**
 * Information about business of given staff member.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_BusinessAccessModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Businesses where giver user is a staff member.
   * Leaving this field for backwards compatibility.
   *
   * @get result
   * @type {string[]}
   */
  this.a_business = [];

  /**
   * @typedef {{}} Wl_Business_BusinessAccessModel_a_business_data
   * @property {number} id_region Business region, one of {@link Core_Amazon_Region_AmazonRegionSid} constants, `null` if no regions are set as current.
   * @property {string} k_business Business key, primary key in table {@link \RsBusinessSql}.
   * @property {string} text_office_address Business address.
   * @property {string} text_title Business title.
   * @property {string} url_logo Business logo url. Empty if there is no logo in business.
   */

  /**
   * The list of accessible businesses with their corresponding data, each value is an array of structure:
   * <dl>
   *   <dt>int <var>id_region</var></dt>
   *   <dd>Business region, one of {@link Core_Amazon_Region_AmazonRegionSid} constants, `null` if no regions are set as current.</dd>
   *   <dt>string <var>k_business</var></dt>
   *   <dd>Business key, primary key in table {@link \RsBusinessSql}.</dd>
   *   <dt>string <var>text_office_address</var></dt>
   *   <dd>Business address.</dd>
   *   <dt>string <var>text_title</var></dt>
   *   <dd>Business title.</dd>
   *   <dt>string <var>url_logo</var></dt>
   *   <dd>Business logo url. Empty if there is no logo in business.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Business_BusinessAccessModel_a_business_data[]}
   */
  this.a_business_data = [];

  /**
   * `true` if API is being used from backend, `false` otherwise.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = true;

  /**
   * User Facebook id. Not empty if user is logging with facebook.
   * Empty if uid is already known or user is logging in another way.
   *
   * @get get
   * @type {string}
   */
  this.s_facebook_id = "";

  /**
   * Key of Microsoft user.
   * Not empty if user is logging with Microsoft.
   *
   * @get get
   * @type {string}
   */
  this.s_microsoft_id = "";

  /**
   * User apple authorization code. Not empty if user is logging with apple.
   * Empty if uid is already known or user is logging in another way.
   *
   * @get get
   * @type {string}
   */
  this.text_authorization_apple = "";

  /**
   * Google plus user id. Not empty if user is logging with Google.
   * Empty if uid is already known or user is logging in another way.
   *
   * @get get
   * @type {string}
   */
  this.text_google_plus = "";

  /**
   * User's email to determine uid. Not empty if user is logging with email or with Google.
   * Empty if uid is already known or user is logging in another way.
   *
   * @get get
   * @type {string}
   */
  this.text_mail = "";

  /**
   * User key. Empty if user is not logged in, but their authorization data is known.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  /**
   * User key, determined by user email. Empty if uid is not empty.
   *
   * @get result
   * @type {string}
   */
  this.uid_mail = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_BusinessAccessModel);

/**
 * @inheritDoc
 */
Wl_Business_BusinessAccessModel.prototype.config=function()
{
  return {"a_field": {"a_business": {"get": {"result": true}},"a_business_data": {"get": {"result": true}},"is_backend": {"get": {"get": true}},"s_facebook_id": {"get": {"get": true}},"s_microsoft_id": {"get": {"get": true}},"text_authorization_apple": {"get": {"get": true}},"text_google_plus": {"get": {"get": true}},"text_mail": {"get": {"get": true}},"uid": {"get": {"get": true}},"uid_mail": {"get": {"result": true}}}};
};