/**
 * List of staff pay rates for the business.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Staff_PayRate_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Staff_PayRate_ListModel_a_pay_rate
   * @property {number} id_staff_pay Pay rate type, one of {@link \RsStaffPaySid} constants.
   * @property {boolean} is_default Whether pay rate used as default for staff with <tt>k_staff</tt>.
   * @property {string} k_location Location key. Primary key from {@link RsLocationSql}. This is a location where pay rate can be used for a staff staff load. If empty then pay rate can be used in any location. Used only for pay
   * rates with <tt>id_staff_pay</tt>={@link RsStaffPaySid::HOUR} and <tt>is_report</tt>=1.
   * @property {string} k_staff Staff key, primary key in {@link \RsStaffSql}.
   * @property {string} k_staff_pay Pay rate identifier, primary key in {@link \RsStaffPaySql}.
   * @property {string} text_title Pay rate title.
   */

  /**
   * Pay rate list:
   * <dl>
   *   <dt>
   *     int <var>id_staff_pay</var>
   *   </dt>
   *   <dd>
   *     Pay rate type, one of {@link \RsStaffPaySid} constants.
   *   </dd>
   *   <dt>
   *     bool <var>is_default</var>
   *   </dt>
   *   <dd>
   *     Whether pay rate used as default for staff with <var>k_staff</var>.
   *   </dd>
   *   <dt>
   *     string <var>k_location</var>
   *   </dt>
   *   <dd>
   *     Location key. Primary key from {@link RsLocationSql}. This is a location where pay rate can be used for a staff staff load. If empty then pay rate can be used in any location. Used only for pay
   *     rates with <var>id_staff_pay</var>={@link RsStaffPaySid::HOUR} and <var>is_report</var>=1.
   *   </dd>
   *   <dt>
   *     string <var>k_staff</var>
   *   </dt>
   *   <dd>
   *     Staff key, primary key in {@link \RsStaffSql}.
   *   </dd>
   *   <dt>
   *     string <var>k_staff_pay</var>
   *   </dt>
   *   <dd>
   *     Pay rate identifier, primary key in {@link \RsStaffPaySql}.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     Pay rate title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Staff_PayRate_ListModel_a_pay_rate}
   */
  this.a_pay_rate = undefined;

  /**
   * ID of business. Primary key in {@link RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Staff_PayRate_ListModel);

/**
 * @inheritDoc
 */
Wl_Staff_PayRate_ListModel.prototype.config=function()
{
  return {"a_field": {"a_pay_rate": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Staff_PayRate_ListModel.instanceGet
 * @param {string} k_business ID of business. Primary key in {@link RsBusinessSql} table.
 * @returns {Wl_Staff_PayRate_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */