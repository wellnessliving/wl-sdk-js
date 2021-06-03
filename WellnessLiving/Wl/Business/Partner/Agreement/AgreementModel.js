/**
 * Agreement API for partner program enrollment.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Partner_Agreement_AgreementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * Business key, primary key in the {@link \RsBusinessSql} table.
   *
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Agreement signature.
   *
   * @post post
   * @type {string}
   */
  this.s_signature = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Partner_Agreement_AgreementModel);

/**
 * @inheritDoc
 */
Wl_Business_Partner_Agreement_AgreementModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"post": {"get": true}},"s_signature": {"post": {"post": true}}}};
};

/**
 * @function
 * @name Wl_Business_Partner_Agreement_AgreementModel.instanceGet
 * @param {string} k_business Business key, primary key in the {@link \RsBusinessSql} table.
 * @returns {Wl_Business_Partner_Agreement_AgreementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */