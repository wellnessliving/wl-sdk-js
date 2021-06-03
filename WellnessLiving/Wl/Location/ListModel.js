/**
 * List of business locations.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Location_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * Primary keys of businesses in {@link \RsBusinessSql} table.
   * You can specify it instead of <var>$k_business</var> to load data for a lot of businesses by 1 query.
   *
   * @get get
   * @type {string[]}
   */
  this.a_business = [];

  /**
   * @typedef {{}} Wl_Location_ListModel_a_location
   * @property {number} f_latitude Location latitude.
   * @property {number} f_longitude Location longitude.
   * @property {string} k_business Business key.
   * @property {string} k_location Location key.
   * @property {string} s_title Location title.
   * @property {string} text_address Location full address.
   * @property {*} url_logo Location logo URL. Is set only if location has logo.
   */

  /**
   * List of locations of business {@link \Wl\Location\ListApi::$k_business}. Keys - location keys; primary keys in {@link RsLocationSql} table. Values - sub array with next keys:
   * <dl>
   *   <dt>
   *     float <var>f_latitude</var>
   *   </dt>
   *   <dd>
   *     Location latitude.
   *   </dd>
   *   <dt>
   *     float <var>f_longitude</var>
   *   </dt>
   *   <dd>
   *     Location longitude.
   *   </dd>
   *   <dt>
   *     string <var>k_business</var>
   *   </dt>
   *   <dd>
   *     Business key.
   *   </dd>
   *   <dt>
   *     string <var>k_location</var>
   *   </dt>
   *   <dd>
   *     Location key.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     Location title.
   *   </dd>
   *   <dt>
   *     string <var>text_address</var>
   *   </dt>
   *   <dd>
   *     Location full address.
   *   </dd>
   *   <dt>
   *     string [<var>url_logo</var>]
   *   </dt>
   *   <dd>
   *     Location logo URL. Is set only if location has logo.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Location_ListModel_a_location}
   */
  this.a_location = undefined;

  /**
   * Primary key of business in {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Primary keys of businesses in {@link \RsBusinessSql} table.
   * You can specify it instead of <var>$k_business</var> to load data for a lot of businesses by 1 query.
   *
   * The same as <var>$a_business</var>, but serialized with JSON (to make URL shorter).
   *
   * @get get
   * @type {string}
   */
  this.s_business = "";

  /**
   * Whether removed locations should be returned.
   *
   * @get get
   * @type {boolean}
   */
  this.show_remove = false;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Location_ListModel);

/**
 * @inheritDoc
 */
Wl_Location_ListModel.prototype.config=function()
{
  return {"a_field": {"a_business": {"get": {"get": true}},"a_location": {"get": {"result": true}},"k_business": {"get": {"get": true}},"s_business": {"get": {"get": true}},"show_remove": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Location_ListModel.instanceGet
 * @param {string} k_business Primary key of business in {@link \RsBusinessSql} table.
 * @returns {Wl_Location_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */