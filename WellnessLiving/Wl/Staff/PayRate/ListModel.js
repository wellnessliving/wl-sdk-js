/**
 * Loads the list of staff pay rates for the business.
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
   * @property {number} id_staff_pay Pay rate type, one of {@link RsStaffPaySid} constants.
   * @property {boolean} is_commission_default Whether commission pay rate used as default for staff with `k_staff`.
   * @property {boolean} is_default Whether pay rate used as default for staff with `k_staff`.
   * @property {boolean} is_hour_default Whether hourly pay rate used as default for staff with `k_staff`.
   * @property {string} k_location Location key. Primary key from . This is a location where pay rate can be used for a staff staff load. If empty then pay rate can be used in any location. Used only for pay rates with `id_staff_pay`={@link RsStaffPaySid} and `is_report`=1.
   * @property {string} k_staff Staff key, primary key in . deprecated Returned only for applications from legacy allow-list. Use `uid_staff`.
   * @property {string} k_staff_pay Pay rate identifier, primary key in .
   * @property {string} text_staff Name of staff member.
   * @property {string} text_title Pay rate title.
   * @property {string} uid_staff Staff user ID. Primary key in .
   */

  /**
   * Pay rate list:
   *
   * @get result
   * @type {Wl_Staff_PayRate_ListModel_a_pay_rate[]}
   */
  this.a_pay_rate = undefined;

  /**
   * Pay rate type. One of {@link RsStaffPaySid} constants.
   *
   * @get get
   * @see RsStaffPaySid
   * @type {number}
   */
  this.id_staff_pay = 0;

  /**
   * ID of business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Location key to get list of pay rates for special location.
   *
   * Empty value if list of pay rates for all locations should be returned.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * Staff key.
   *
   * @deprecated It's necessary to use `uid_staff`.
   * @get get
   * @type {string}
   */
  this.k_staff = "";

  /**
   * Staff user ID.
   *
   * @get get
   * @type {string}
   */
  this.uid_staff = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Staff_PayRate_ListModel);

/**
 * @inheritDoc
 */
Wl_Staff_PayRate_ListModel.prototype.config=function()
{
  return {"a_field":{"a_pay_rate":{"get":{"result":true}},"id_staff_pay":{"get":{"get":true}},"k_business":{"get":{"get":true}},"k_location":{"get":{"get":true}},"k_staff":{"get":{"get":true}},"uid_staff":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Staff_PayRate_ListModel.instanceGet
 * @param {string} k_business ID of business.
 * @returns {Wl_Staff_PayRate_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Loads the list of staff pay rates for the business.
 *
 * When both `uid_staff` and `id_staff_pay` are given, returns the pay rates of that type
 * available to the specified staff member at the given location. Otherwise, returns the
 * full business pay-rate list. Applications outside the legacy allow-list do not receive
 * the `k_staff` field in the result.
 *
 * @function
 * @name Wl_Staff_PayRate_ListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
