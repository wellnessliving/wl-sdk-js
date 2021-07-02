/**
 * Retrieves information about belt rank categories.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Rank_SearchDataModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * Belt rank categories.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_rank_category_list = undefined;

  /**
   * Business key from {@link \RsBusinessSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Rank_SearchDataModel);

/**
 * @inheritDoc
 */
Wl_Rank_SearchDataModel.prototype.config=function()
{
  return {"a_field": {"a_rank_category_list": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Rank_SearchDataModel.instanceGet
 * @param {string} k_business Business key from {@link \RsBusinessSql}.
 * @returns {Wl_Rank_SearchDataModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */