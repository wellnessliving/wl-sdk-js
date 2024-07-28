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
  this.dtl_promotion_date = null;

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
   * Login rank key.
   * Can be empty. In this case promotion date will be set for currently promoted belt and belts in all franchisees
   * a belt was pushed to.
   *
   * @post get
   * @type {string}
   */
  this.k_login_rank = undefined;

  /**
   * Rank key.
   * Promotion date on which to be changed.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_rank = undefined;

  /**
   * User ID.
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
  return {"a_field": {"dtl_promotion_date": {"get": {"result": true},"post": {"get": true}},"dtu_promotion_date": {"get": {"result": true},"post": {"get": true}},"k_login_rank": {"post": {"get": true}},"k_rank": {"get": {"get": true},"post": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};