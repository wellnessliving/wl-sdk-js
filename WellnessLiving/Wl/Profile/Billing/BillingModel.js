/**
 * Retrieves information about billing page display properties.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Billing_BillingModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business";

  /**
   * Whether to show account information.
   *
   * @get result
   * @type {boolean}
   */
  this.is_show_account = undefined;

  /**
   * Whether to show credit card and ACH account list.
   *
   * @get result
   * @type {boolean}
   */
  this.is_show_transaction = undefined;

  /**
   * ID of a business to show information for.
   *
   * Primary key in {@link \RsBusinessSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_business = 0;

  /**
   * Payer name in case if user is not self paid, <tt>null</tt> otherwise.
   *
   * @get result
   * @type {?string}
   */
  this.s_payer_name = null;

  /**
   * UID to retrieve information about.
   *
   * Primary key in {@link \PassportLoginSql}.
   *
   * @get get
   * @type {string}
   */
  this.uid = 0;

  /**
   * ID of a payer user to show logo for.
   *
   * @get result
   * @type {string}
   */
  this.uid_payer = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Billing_BillingModel);

/**
 * @inheritDoc
 */
Wl_Profile_Billing_BillingModel.prototype.config=function()
{
  return {"a_field": {"is_show_account": {"get": {"result": true}},"is_show_transaction": {"get": {"result": true}},"k_business": {"get": {"get": true}},"s_payer_name": {"get": {"result": true}},"uid": {"get": {"get": true}},"uid_payer": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Profile_Billing_BillingModel.instanceGet
 * @param {string} uid UID to retrieve information about. Primary key in {@link \PassportLoginSql}.
 * @param {string} k_business ID of a business to show information for. Primary key in {@link \RsBusinessSql}.
 * @returns {Wl_Profile_Billing_BillingModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */