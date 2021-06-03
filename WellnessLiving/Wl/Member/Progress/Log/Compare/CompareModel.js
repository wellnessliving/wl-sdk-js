/**
 * Member progress log compare data.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Member_Progress_Log_Compare_CompareModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * List of dates.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_date = undefined;

  /**
   * Key of business to get information for. Primary key in {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * User key to search dates for. Primary key in {@link \PassportLoginSql} table.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Member_Progress_Log_Compare_CompareModel);

/**
 * @inheritDoc
 */
Wl_Member_Progress_Log_Compare_CompareModel.prototype.config=function()
{
  return {"a_field": {"a_date": {"get": {"result": true}},"k_business": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Member_Progress_Log_Compare_CompareModel.instanceGet
 * @param {string} k_business Key of business to get information for. Primary key in {@link \RsBusinessSql} table.
 * @param {string} uid User key to search dates for. Primary key in {@link \PassportLoginSql} table.
 * @returns {Wl_Member_Progress_Log_Compare_CompareModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */