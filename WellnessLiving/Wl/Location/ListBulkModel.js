/**
 * An endpoint that gets all locations for a list of businesses.
 *
 * This can be used to get all locations from all businesses. When using this endpoint, note that it will return
 * a list of all locations in the system, potentially using substantial system resources. Using this endpoint can
 * potentially result in larger API calls than average calls made for other endpoints.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Location_ListBulkModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "s_business";

  /**
   * @typedef {{}} Wl_Location_ListBulkModel_a_location
   * @property {number} f_latitude The latitude coordinate.
   * @property {number} f_longitude The longitude coordinate.
   * @property {number} f_rate The location rate.
   * @property {number} i_order The order number.
   * @property {string} k_business The business's primary key.
   * @property {string} k_location The location's primary key.
   * @property {string} s_title The location title.
   * @property {string} text_address The full location address.
   * @property {*} url_logo The location logo.
   */

  /**
   * Short-form information about locations.
   *
   * Keys refer to location primary keys. Values refer to sub-arrays with the next keys:
   * <dl>
   *   <dt>
   *     float <var>f_latitude</var>
   *   </dt>
   *   <dd>
   *     The latitude coordinate.
   *   </dd>
   *   <dt>
   *     float <var>f_longitude</var>
   *   </dt>
   *   <dd>
   *     The longitude coordinate.
   *   </dd>
   *   <dt>
   *     float <var>f_rate</var>
   *   </dt>
   *   <dd>
   *     The location rate.
   *   </dd>
   *   <dt>
   *     int <var>i_order</var>
   *   </dt>
   *   <dd>
   *     The order number.
   *   </dd>
   *   <dt>
   *     string <var>k_business</var>
   *   </dt>
   *   <dd>
   *     The business's primary key.
   *   </dd>
   *   <dt>
   *     string <var>k_location</var>
   *   </dt>
   *   <dd>
   *     The location's primary key.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     The location title.
   *   </dd>
   *   <dt>
   *     string <var>text_address</var>
   *   </dt>
   *   <dd>
   *     The full location address.
   *   </dd>
   *   <dt>
   *     string [<var>url_logo</var>]
   *   </dt>
   *   <dd>
   *     The location logo.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Location_ListBulkModel_a_location}
   */
  this.a_location = undefined;

  /**
   * A list of models with full information about each location.
   *
   * Every element is an object of the {@link Wl_Location_View_ViewModel}.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_location_full = [];

  /**
   * The ID of the directory if locations should be filtered by enabling directory integration.
   *
   * `0` if a directory filter isn't required.
   *
   * @get get
   * @see RsProjectSid
   * @type {number}
   */
  this.id_directory = 0;

  /**
   * A list of businesses. Business primary keys are serialized with JSON.
   *
   * Empty string if you need all locations in the system.
   *
   * @get get
   * @type {string}
   */
  this.s_business = "";

  /**
   * A list of locations. Location primary keys are serialized with JSON.
   *
   * @get get
   * @type {string}
   */
  this.s_location = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Location_ListBulkModel);

/**
 * @inheritDoc
 */
Wl_Location_ListBulkModel.prototype.config=function()
{
  return {"a_field": {"a_location": {"get": {"result": true}},"a_location_full": {"get": {"result": true}},"id_directory": {"get": {"get": true}},"s_business": {"get": {"get": true}},"s_location": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Location_ListBulkModel.instanceGet
 * @param {string} s_business A list of businesses. Business primary keys are serialized with JSON. Empty string if you need all locations in the system.
 * @returns {Wl_Location_ListBulkModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */