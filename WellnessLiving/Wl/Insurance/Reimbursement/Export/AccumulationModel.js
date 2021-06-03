/**
 * Api for Curves data files.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Insurance_Reimbursement_Export_AccumulationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * Business key.
   * Primary key in the {@link \RsBusinessSql} table.
   *
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Partner key.
   *
   * @post get
   * @type {string}
   */
  this.k_partner = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Insurance_Reimbursement_Export_AccumulationModel);

/**
 * @inheritDoc
 */
Wl_Insurance_Reimbursement_Export_AccumulationModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"post": {"get": true}},"k_partner": {"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Insurance_Reimbursement_Export_AccumulationModel.instanceGet
 * @param {string} k_business Business key. Primary key in the {@link \RsBusinessSql} table.
 * @returns {Wl_Insurance_Reimbursement_Export_AccumulationModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */