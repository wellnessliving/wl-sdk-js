/**
 * Returns information about purchase.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Form_Complete_CompleteModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_purchase";

  /**
   * ID of purchase currency. Primary key in {@link RsCurrencySql} table.
   *
   * @get result
   * @type {string}
   */
  this.k_currency = undefined;

  /**
   * Purchase ID.
   *
   * @get get
   * @type {string}
   */
  this.k_purchase = "0";

  /**
   * Purchase cost.
   *
   * @get result
   * @type {string}
   */
  this.m_cost = undefined;

  /**
   * Number of receipt.
   *
   * @get result
   * @type {string}
   */
  this.s_purchase = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Form_Complete_CompleteModel);

/**
 * @inheritDoc
 */
Wl_Pay_Form_Complete_CompleteModel.prototype.config=function()
{
  return {"a_field": {"k_currency": {"get": {"result": true}},"k_purchase": {"get": {"get": true}},"m_cost": {"get": {"result": true}},"s_purchase": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Pay_Form_Complete_CompleteModel.instanceGet
 * @param {string} k_purchase Purchase ID.
 * @returns {Wl_Pay_Form_Complete_CompleteModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */