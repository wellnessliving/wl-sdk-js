/**
 * Retrieves a list of alerts and warnings to show in user's profile.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Alert_AlertModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business";

  /**
   * @typedef {{}} Wl_Profile_Alert_AlertModel_a_alert
   * @property {?string} dt_date Date and time in MySQL format in local time when alert was last modified. <tt>null</tt> if date is not available for this alert.
   * @property {boolean} is_today <tt>true</tt> - if alert added today; <tt>false</tt> - otherwise.
   * @property {*} k_pay_account ID of user's account. Primary key in {@link RsPayAccountSql} table.
   * @property {*} k_purchase_item ID of purchase item. Primary key in {@link RsPurchaseItemSql} table.
   * @property {string} s_text Text of alert.
   */

  /**
   * List of alerts. Every element array with keys:
   * <dl>
   *   <dt>
   *     string|null <var>dt_date</var>
   *   </dt>
   *   <dd>
   *     Date and time in MySQL format in local time when alert was last modified. <tt>null</tt> if date is not available for this alert.
   *   </dd>
   *   <dt>
   *     bool <var>is_today</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - if alert added today; <tt>false</tt> - otherwise.
   *   </dd>
   *   <dt>
   *     string [<var>k_pay_account</var>]
   *   </dt>
   *   <dd>
   *     ID of user's account. Primary key in {@link RsPayAccountSql} table.
   *   </dd>
   *   <dt>
   *     string [<var>k_purchase_item</var>]
   *   </dt>
   *   <dd>
   *     ID of purchase item. Primary key in {@link RsPurchaseItemSql} table.
   *   </dd>
   *   <dt>
   *     string <var>s_text</var>
   *   </dt>
   *   <dd>
   *     Text of alert.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Profile_Alert_AlertModel_a_alert[]}
   */
  this.a_alert = undefined;

  /**
   * @typedef {{}} Wl_Profile_Alert_AlertModel_a_warning
   * @property {boolean} dt_date Date and time in MySQL format in local time when warning was last modified.
   * @property {boolean} is_flag <tt>true</tt> - is flagged; <tt>false</tt> - is not flagged.
   * @property {boolean} is_today <tt>true</tt> - if warning added today; <tt>false</tt> - otherwise.
   * @property {string} s_text Text of warning.
   */

  /**
   * List of warnings. Every element array with keys:
   * <dl>
   *   <dt>
   *     bool <var>dt_date</var>
   *   </dt>
   *   <dd>
   *     Date and time in MySQL format in local time when warning was last modified.
   *   </dd>
   *   <dt>
   *     bool <var>is_flag</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - is flagged; <tt>false</tt> - is not flagged.
   *   </dd>
   *   <dt>
   *     bool <var>is_today</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - if warning added today; <tt>false</tt> - otherwise.
   *   </dd>
   *   <dt>
   *     string <var>s_text</var>
   *   </dt>
   *   <dd>
   *     Text of warning.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Profile_Alert_AlertModel_a_warning[]}
   */
  this.a_warning = undefined;

  /**
   * Key of current business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Key of a user to show information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Alert_AlertModel);

/**
 * @inheritDoc
 */
Wl_Profile_Alert_AlertModel.prototype.config=function()
{
  return {"a_field": {"a_alert": {"get": {"result": true}},"a_warning": {"get": {"result": true}},"k_business": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Profile_Alert_AlertModel.instanceGet
 * @param {string} uid Key of a user to show information for.
 * @param {string} k_business Key of current business.
 * @returns {Wl_Profile_Alert_AlertModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */