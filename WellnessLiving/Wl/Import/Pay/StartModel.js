/**
 * Starts an import.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Import_Pay_StartModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business_merchant";

  /**
   * ID of a merchant for which import should be started.
   *
   * @post get
   * @type {string}
   */
  this.k_business_merchant = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Import_Pay_StartModel);

/**
 * @inheritDoc
 */
Wl_Import_Pay_StartModel.prototype.config=function()
{
  return {"a_field": {"k_business_merchant": {"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Import_Pay_StartModel.instanceGet
 * @param {string} k_business_merchant ID of a merchant for which import should be started.
 * @returns {Wl_Import_Pay_StartModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */