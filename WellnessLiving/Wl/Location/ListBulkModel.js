/**
 * Point to get location lists for a bulk of business.
 *
 * Hack for a franchise with a lot of businesses.
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
   * @property {number} f_latitude Coordinate latitude.
   * @property {number} f_longitude Coordinate longitude.
   * @property {number} f_rate Location rate.
   * @property {number} i_order Order number.
   * @property {string} k_business Business primary key.
   * @property {string} k_location Location primary key.
   * @property {string} s_title Location title.
   * @property {string} text_address Full location address.
   * @property {*} url_logo Location logo.
   */

  /**
   * Location list. Keys - location primary keys; values - sub arrays with keys:
   * <dl>
   *   <dt>
   *     float <var>f_latitude</var>
   *   </dt>
   *   <dd>
   *     Coordinate latitude.
   *   </dd>
   *   <dt>
   *     float <var>f_longitude</var>
   *   </dt>
   *   <dd>
   *     Coordinate longitude.
   *   </dd>
   *   <dt>
   *     float <var>f_rate</var>
   *   </dt>
   *   <dd>
   *     Location rate.
   *   </dd>
   *   <dt>
   *     int <var>i_order</var>
   *   </dt>
   *   <dd>
   *     Order number.
   *   </dd>
   *   <dt>
   *     string <var>k_business</var>
   *   </dt>
   *   <dd>
   *     Business primary key.
   *   </dd>
   *   <dt>
   *     string <var>k_location</var>
   *   </dt>
   *   <dd>
   *     Location primary key.
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
   *     Full location address.
   *   </dd>
   *   <dt>
   *     string [<var>url_logo</var>]
   *   </dt>
   *   <dd>
   *     Location logo.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Location_ListBulkModel_a_location}
   */
  this.a_location = undefined;

  /**
   * Bulk of businesses. Business primary keys serialized with JSON.
   *
   * @get get
   * @type {string}
   */
  this.s_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Location_ListBulkModel);

/**
 * @inheritDoc
 */
Wl_Location_ListBulkModel.prototype.config=function()
{
  return {"a_field": {"a_location": {"get": {"result": true}},"s_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Location_ListBulkModel.instanceGet
 * @param {string} s_business Bulk of businesses. Business primary keys serialized with JSON.
 * @returns {Wl_Location_ListBulkModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */