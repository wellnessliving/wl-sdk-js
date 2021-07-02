/**
 * Api to change promotion date on belts.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Rank_ProfileRankModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Promotion date on belts.
   * <tt>null</tt> if not initialized yet.
   *
   * @get result
   * @post get
   * @type {?string}
   */
  this.dtu_promotion_date = null;

  /**
   * Rank key. Primary key in {@link \RsRankSql}.
   * Promotion date on which to be changed.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_rank = undefined;

  /**
   * User ID. Primary key in {@link \PassportLoginSql}.
   * Promotion date on belts of whom to be changed.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Rank_ProfileRankModel);

/**
 * @inheritDoc
 */
Wl_Profile_Rank_ProfileRankModel.prototype.config=function()
{
  return {"a_field": {"dtu_promotion_date": {"get": {"result": true},"post": {"get": true}},"k_rank": {"get": {"get": true},"post": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};