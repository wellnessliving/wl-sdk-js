/**
 * Point to get a franchise group.
 * Group is all businesses bound by a franchise (both franchisor and franchisees).
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Franchise_FranchiseGroupModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * Keys of businesses of franchise group. Primary keys in {@link \RsBusinessSql} table.
   *
   * @get result
   * @type {string[]}
   */
  this.a_business = undefined;

  /**
   * Key of business to get data for. It may be both franchisor and franchisee.
   *
   * Primary key in {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Franchise_FranchiseGroupModel);

/**
 * @inheritDoc
 */
Wl_Business_Franchise_FranchiseGroupModel.prototype.config=function()
{
  return {"a_field": {"a_business": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Business_Franchise_FranchiseGroupModel.instanceGet
 * @param {string} k_business Key of business to get data for. It may be both franchisor and franchisee. Primary key in {@link \RsBusinessSql} table.
 * @returns {Wl_Business_Franchise_FranchiseGroupModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */