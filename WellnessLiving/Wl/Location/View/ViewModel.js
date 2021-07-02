/**
 * Information about purchases which allow to book given session(s).
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Location_View_ViewModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_location";

  /**
   * @typedef {{}} Wl_Location_View_ViewModel_a_logo
   * @property {number} i_height Height.
   * @property {number} i_width Width.
   * @property {string} s_url URL to image.
   */

  /**
   * Location logo:
   * <dl>
   *   <dt>
   *     int <var>i_height</var>
   *   </dt>
   *   <dd>
   *     Height.
   *   </dd>
   *   <dt>
   *     int <var>i_width</var>
   *   </dt>
   *   <dd>
   *     Width.
   *   </dd>
   *   <dt>
   *     string <var>s_url</var>
   *   </dt>
   *   <dd>
   *     URL to image.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Location_View_ViewModel_a_logo}
   */
  this.a_logo = undefined;

  /**
   * @typedef {{}} Wl_Location_View_ViewModel_a_slide
   * @property {number} i_height Height.
   * @property {number} i_width Width.
   * @property {string} url_preview URL to image preview.
   * @property {string} url_slide URL to full image.
   */

  /**
   * Images of location slider. Every element has next keys:
   * <dl>
   *   <dt>
   *     int <var>i_height</var>
   *   </dt>
   *   <dd>
   *     Height.
   *   </dd>
   *   <dt>
   *     int <var>i_width</var>
   *   </dt>
   *   <dd>
   *     Width.
   *   </dd>
   *   <dt>
   *     string <var>url_preview</var>
   *   </dt>
   *   <dd>
   *     URL to image preview.
   *   </dd>
   *   <dt>
   *     string <var>url_slide</var>
   *   </dt>
   *   <dd>
   *     URL to full image.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Location_View_ViewModel_a_slide}
   */
  this.a_slide = undefined;

  /**
   * @typedef {{}} Wl_Location_View_ViewModel_a_work
   * @property {string} s_end Time of day end. In MySQL format.
   * @property {string} s_start Time of day start. In MySQL format.
   */

  /**
   * Working days of location. Keys - numbers of days (1 is Monday, 7 is Sunday). Values - arrays with next keys:
   * <dl>
   *   <dt>
   *     string <var>s_end</var>
   *   </dt>
   *   <dd>
   *     Time of day end. In MySQL format.
   *   </dd>
   *   <dt>
   *     string <var>s_start</var>
   *   </dt>
   *   <dd>
   *     Time of day start. In MySQL format.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Location_View_ViewModel_a_work}
   */
  this.a_work = undefined;

  /**
   * Description of location. HTML code ready to putting on page.
   *
   * @get result
   * @type {string}
   */
  this.html_description_full = undefined;

  /**
   * Preview of <var>html_description_full</var>. HTML code ready to putting on page.
   *
   * @get result
   * @type {string}
   */
  this.html_description_preview = undefined;

  /**
   * Maximum location image height.
   *
   * @get get
   * @type {number}
   */
  this.i_logo_height = 100;

  /**
   * Maximum location image width.
   *
   * @get get
   * @type {number}
   */
  this.i_logo_width = 220;

  /**
   * Key of location.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * Address of location.
   *
   * @get result
   * @type {string}
   */
  this.s_address = undefined;

  /**
   * String to be used as address in programs-navigators.
   *
   * @get result
   * @type {string}
   */
  this.s_map = undefined;

  /**
   * Phone of location.
   *
   * @get result
   * @type {string}
   */
  this.s_phone = undefined;

  /**
   * System name of the timezone.
   *
   * @get result
   * @type {string}
   */
  this.s_timezone = undefined;

  /**
   * Title of location.
   *
   * @get result
   * @type {string}
   */
  this.s_title = undefined;

  /**
   * Adress of the location.
   *
   * @get result
   * @type {string}
   */
  this.text_address_individual = undefined;

  /**
   * City name of the location.
   *
   * @get result
   * @type {string}
   */
  this.text_city = undefined;

  /**
   * Country name of the location.
   *
   * @get result
   * @type {string}
   */
  this.text_country = undefined;

  /**
   * Email address.
   *
   * @get result
   * @type {string}
   */
  this.text_mail = undefined;

  /**
   * Postal code of the location.
   *
   * @get result
   * @type {string}
   */
  this.text_postal = undefined;

  /**
   * Region name of the location.
   *
   * @get result
   * @type {string}
   */
  this.text_region = undefined;

  /**
   * URL to load map, where location is marked.
   *
   * @get result
   * @type {string}
   */
  this.url_map = undefined;

  /**
   * URL to location site.
   *
   * @get result
   * @type {string}
   */
  this.url_microsite = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Location_View_ViewModel);

/**
 * @inheritDoc
 */
Wl_Location_View_ViewModel.prototype.config=function()
{
  return {"a_field": {"a_logo": {"get": {"result": true}},"a_slide": {"get": {"result": true}},"a_work": {"get": {"result": true}},"html_description_full": {"get": {"result": true}},"html_description_preview": {"get": {"result": true}},"i_logo_height": {"get": {"get": true}},"i_logo_width": {"get": {"get": true}},"k_location": {"get": {"get": true}},"s_address": {"get": {"result": true}},"s_map": {"get": {"result": true}},"s_phone": {"get": {"result": true}},"s_timezone": {"get": {"result": true}},"s_title": {"get": {"result": true}},"text_address_individual": {"get": {"result": true}},"text_city": {"get": {"result": true}},"text_country": {"get": {"result": true}},"text_mail": {"get": {"result": true}},"text_postal": {"get": {"result": true}},"text_region": {"get": {"result": true}},"url_map": {"get": {"result": true}},"url_microsite": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Location_View_ViewModel.instanceGet
 * @param {string} k_location Key of location.
 * @returns {Wl_Location_View_ViewModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */