/**
 * Returns information about current session environment (business ID, user information, etc).
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Session_EnvironmentModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of businesses which are available in given application. Primary keys in {@link \RsBusinessSql} table. <tt>null</tt> for default application.
   *
   * @get result
   * @type {?string[]}
   */
  this.a_business = null;

  /**
   * @typedef {{}} Wl_Session_EnvironmentModel_a_splash_screen
   * @property {{}} a_background Background image.
   * @property {{}} a_gradient Background color.
   * @property {{}} a_image Logo image.
   */

  /**
   * Settings of splash screen customization for business {@link Wl_Session_EnvironmentModel.k_business}:
   * <dl>
   *   <dt>
   *     array <var>a_background</var>
   *   </dt>
   *   <dd>
   *     Background image.
   *   </dd>
   *   <dt>
   *     array <var>a_gradient</var>
   *   </dt>
   *   <dd>
   *     Background color.
   *   </dd>
   *   <dt>
   *     array <var>a_image</var>
   *   </dt>
   *   <dd>
   *     Logo image.
   *   </dd>
   * </dl><tt>null</tt> if splash screen in not customized for business.
   *
   * @get result
   * @type {?Wl_Session_EnvironmentModel_a_splash_screen}
   */
  this.a_splash_screen = null;

  /**
   * Local date with time now in current location @see \Wl\Session\EnvironmentApi::$k_location.
   *
   * @get result
   * @type {string}
   */
  this.dtl_now = undefined;

  /**
   * Business account ID. Constant from {@link \RsBusinessAccountSid}.
   *
   * @get result
   * @type {number}
   */
  this.id_business_account = undefined;

  /**
   * Business account application ID. Constant from {@link \Wl\Business\Account\ApplicationSid}.
   *
   * @get result
   * @type {number}
   */
  this.id_business_account_application = undefined;

  /**
   * Currency ID. One of {@link \RsCurrencySid} constants.
   *
   * @get result
   * @type {string}
   */
  this.id_currency = undefined;

  /**
   * Business locale. One of {@link \Core\Locale\LocaleSid} constants.
   *
   * @get result
   * @type {number}
   */
  this.id_locale = undefined;

  /**
   * Current place ID. One of {@link RsPlaceSid} constants. For the Application is determined by the template. For the Web version of the site is determined by the current session.
   *
   * @get result
   * @type {number}
   */
  this.id_place = undefined;

  /**
   * Determines current business has custom application. If <tt>true</tt> application has custom application, <tt>false</tt> otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_application_custom = undefined;

  /**
   * <tt>true</tt> if user must be redirected to billing page to enter credit card; <tt>false</tt> otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_billing_required = undefined;

  /**
   * <tt>true</tt> if user must be redirected from booking page to billing page to enter credit card;
   *   <tt>false</tt> otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_booking_required_billing = undefined;

  /**
   * Determines if a business has multiple locations. See {@link \rs_business_location_multiple()}.
   *
   * @get result
   * @type {number}
   */
  this.is_business_location_multiple = undefined;

  /**
   * <tt>true</tt> - user has unassigned contract(s); <tt>false</tt> - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_contract = undefined;

  /**
   * <tt>true</tt> to use page of geographical search of locations (possible for franchise case only); <tt>false</tt> to use simple select of locations from list.
   *
   * @get result
   * @type {boolean}
   */
  this.is_location_geo = undefined;

  /**
   * <tt>true</tt> - in backend application user must be redirected to location selection; <tt>false</tt> - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_location_redirect = undefined;

  /**
   * <tt>true</tt> if user must be redirected to profile page to enter mandatory fields; <tt>false</tt> otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_profile_required = undefined;

  /**
   * Indicates whether to obtain customer required information such as required profile data and waiver. Mostly used for selenium tests running purposes to avoid creating profile filled with required
   * information. If <tt>true</tt> all required information must be obtained before client will be allowed to use application, <tt>false</tt> otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_request_required_information = undefined;

  /**
   * <tt>true</tt> if user is traveller; <tt>false</tt> otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_traveller = undefined;

  /**
   * <tt>true</tt> if it is required to sign online waiver, <tt>false</tt> otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_waiver_required = undefined;

  /**
   * Key of business to be set as current. Primary key in table {@link RsBusinessSql}.
   *
   * @get result
   * @put post
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Not <tt>null</tt> for franchise application only.
   *
   * @get result
   * @type {?string}
   */
  this.k_business_franchisor = null;

  /**
   * Currency key.
   * Primary key in the {@link \RsCurrencySql} table.
   *
   * @get result
   * @type {string}
   */
  this.k_currency = undefined;

  /**
   * Key of location to be set as current. Primary key in table {@link RsLocationSql}.
   *
   * @get result
   * @put post
   * @type {string}
   */
  this.k_location = "0";

  /**
   * Application ID.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.s_application_id = "0";

  /**
   * Current user key. <tt>null</tt> if user is not signed in.
   *
   * @get result
   * @type {?string}
   */
  this.uid = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Session_EnvironmentModel);

/**
 * @inheritDoc
 */
Wl_Session_EnvironmentModel.prototype.config=function()
{
  return {"a_field": {"a_business": {"get": {"result": true}},"a_splash_screen": {"get": {"result": true}},"dtl_now": {"get": {"result": true}},"id_business_account": {"get": {"result": true}},"id_business_account_application": {"get": {"result": true}},"id_currency": {"get": {"result": true}},"id_locale": {"get": {"result": true}},"id_place": {"get": {"result": true}},"is_application_custom": {"get": {"result": true}},"is_billing_required": {"get": {"result": true}},"is_booking_required_billing": {"get": {"result": true}},"is_business_location_multiple": {"get": {"result": true}},"is_contract": {"get": {"result": true}},"is_location_geo": {"get": {"result": true}},"is_location_redirect": {"get": {"result": true}},"is_profile_required": {"get": {"result": true}},"is_request_required_information": {"get": {"result": true}},"is_traveller": {"get": {"result": true}},"is_waiver_required": {"get": {"result": true}},"k_business": {"get": {"result": true},"put": {"post": true}},"k_business_franchisor": {"get": {"result": true}},"k_currency": {"get": {"result": true}},"k_location": {"get": {"result": true},"put": {"post": true}},"s_application_id": {"get": {"get": true},"put": {"get": true}},"uid": {"get": {"result": true}}}};
};