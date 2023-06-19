/**
 * An endpoint that retrieves information about client alert messages.
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
   * @property {?string} dt_date The date and time in MySQL format in local time when the alert was last modified.
   * This will be `null` if the date isn't available for this alert.
   * @property {boolean} is_today This will be `true` if the alert was added today. Otherwise, this will be `false`.
   * @property {number} id_profile_note ID of alert type. One of {@link RsProfileNoteSid} constants.
   * @property {*} k_pay_account The key of the client's account.
   * @property {*} k_purchase_item The key of the purchase item.
   * @property {string} s_text The alert's text.
   */

  /**
   * A list of alerts. Every element is an array with the following keys:
   * <dl>
   *   <dt>
   *     string|null <var>dt_date</var>
   *   </dt>
   *   <dd>
   *     The date and time in MySQL format in local time when the alert was last modified.
   *     This will be `null` if the date isn't available for this alert.
   *   </dd>
   *   <dt>
   *     bool <var>is_today</var>
   *   </dt>
   *   <dd>
   *     This will be `true` if the alert was added today. Otherwise, this will be `false`.
   *   </dd>
   *   <dt>
   *     int <var>id_profile_note</var>
   *   </dt>
   *   <dd>
   *     ID of alert type. One of {@link RsProfileNoteSid} constants.
   *   </dd>
   *   <dt>
   *     string [<var>k_pay_account</var>]
   *   </dt>
   *   <dd>
   *     The key of the client's account.
   *   </dd>
   *   <dt>
   *     string [<var>k_purchase_item</var>]
   *   </dt>
   *   <dd>
   *     The key of the purchase item.
   *   </dd>
   *   <dt>
   *     string <var>s_text</var>
   *   </dt>
   *   <dd>
   *     The alert's text.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Profile_Alert_AlertModel_a_alert[]}
   */
  this.a_alert = undefined;

  /**
   * @typedef {{}} Wl_Profile_Alert_AlertModel_a_warning
   * @property {string[]} a_location_flag The list of locations keys from {@link \RsLocationSql} table, where this note is flagged.
   * @property {boolean} dt_date The date and time in MySQL format in local time when the warning was last modified.
   * @property {boolean} is_flag This will be `true` if the client is flagged. Otherwise, this will be `false`.
   * @property {boolean} is_today This will be `true` if the warning was added today. Otherwise, this will be `false`.
   * @property {string} s_text The text of the warning.
   */

  /**
   * A list of warnings. Every element is an array with the following keys:
   * <dl>
   *   <dt>
   *     string[] <var>a_location_flag</var>
   *   </dt>
   *   <dd>
   *     The list of locations keys from {@link \RsLocationSql} table, where this note is flagged.
   *   </dd>
   *   <dt>
   *     bool <var>dt_date</var>
   *   </dt>
   *   <dd>
   *     The date and time in MySQL format in local time when the warning was last modified.
   *   </dd>
   *   <dt>
   *     bool <var>is_flag</var>
   *   </dt>
   *   <dd>
   *     This will be `true` if the client is flagged. Otherwise, this will be `false`.
   *   </dd>
   *   <dt>
   *     bool <var>is_today</var>
   *   </dt>
   *   <dd>
   *     This will be `true` if the warning was added today. Otherwise, this will be `false`.
   *   </dd>
   *   <dt>
   *     string <var>s_text</var>
   *   </dt>
   *   <dd>
   *     The text of the warning.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Profile_Alert_AlertModel_a_warning[]}
   */
  this.a_warning = undefined;

  /**
   * The key of the business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The key of the user to show information for.
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
 * @param {string} uid The key of the user to show information for.
 * @param {string} k_business The key of the business.
 * @returns {Wl_Profile_Alert_AlertModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */