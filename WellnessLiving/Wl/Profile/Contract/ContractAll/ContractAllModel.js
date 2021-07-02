/**
 * Entry point to get list of subscribed or required contracts of user.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Contract_ContractAll_ContractAllModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * @typedef {{}} Wl_Profile_Contract_ContractAll_ContractAllModel_a_contract
   * @property {string} dt_agree_local Agreement date in business timezone.
   * @property {string} dt_agree_utc Agreement date in UTC.
   * @property {string} html_contract Contract text.
   * @property {string} html_title Purchase item title.
   * @property {string} ip_agree IP address from which agreement was done.
   * @property {string} k_purchase_item Purchase item primary key in {@link \RsPurchaseItemSql} table.
   * @property {string} url_signature URL to agreement signature.
   */

  /**
   * List of contacts. Every element has next keys:
   * <dl>
   *   <dt>
   *     string <var>dt_agree_local</var>
   *   </dt>
   *   <dd>
   *     Agreement date in business timezone.
   *   </dd>
   *   <dt>
   *     string <var>dt_agree_utc</var>
   *   </dt>
   *   <dd>
   *     Agreement date in UTC.
   *   </dd>
   *   <dt>
   *     string <var>html_contract</var>
   *   </dt>
   *   <dd>
   *     Contract text.
   *   </dd>
   *   <dt>
   *     string <var>html_title</var>
   *   </dt>
   *   <dd>
   *     Purchase item title.
   *   </dd>
   *   <dt>
   *     string <var>ip_agree</var>
   *   </dt>
   *   <dd>
   *     IP address from which agreement was done.
   *   </dd>
   *   <dt>
   *     string <var>k_purchase_item</var>
   *   </dt>
   *   <dd>
   *     Purchase item primary key in {@link \RsPurchaseItemSql} table.
   *   </dd>
   *   <dt>
   *     string <var>url_signature</var>
   *   </dt>
   *   <dd>
   *     URL to agreement signature.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Profile_Contract_ContractAll_ContractAllModel_a_contract[]}
   */
  this.a_contract = undefined;

  /**
   * Business to get information for. Primary key in {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * User to get information for. Primary key in {@link \PassportLoginSql} table.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Contract_ContractAll_ContractAllModel);

/**
 * @inheritDoc
 */
Wl_Profile_Contract_ContractAll_ContractAllModel.prototype.config=function()
{
  return {"a_field": {"a_contract": {"get": {"result": true}},"k_business": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Profile_Contract_ContractAll_ContractAllModel.instanceGet
 * @param {string} k_business Business to get information for. Primary key in {@link \RsBusinessSql} table.
 * @param {string} uid User to get information for. Primary key in {@link \PassportLoginSql} table.
 * @returns {Wl_Profile_Contract_ContractAll_ContractAllModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */