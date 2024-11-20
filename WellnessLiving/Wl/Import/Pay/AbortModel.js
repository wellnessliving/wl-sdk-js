/**
 * Aborts a running import.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Import_Pay_AbortModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business_merchant";

  /**
   * ID of a merchant for which import should be aborted.
   *
   * @post get
   * @type {string}
   */
  this.k_business_merchant = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Import_Pay_AbortModel);

/**
 * @inheritDoc
 */
Wl_Import_Pay_AbortModel.prototype.config=function()
{
  return {"a_field": {"k_business_merchant": {"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Import_Pay_AbortModel.instanceGet
 * @param {string} k_business_merchant ID of a merchant for which import should be aborted.
 * @returns {Wl_Import_Pay_AbortModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */