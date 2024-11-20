/**
 * Adjusts remaining visits for given attendance restriction of the given purchased promotion.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Promotion_Rollup_AdjustModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Count of remaining visits that should be after adjustment.
   *
   * @post post
   * @type {number}
   */
  this.i_count = undefined;

  /**
   * ID of the calendar period attendance restriction is applied to.
   *
   * @post get
   * @type {string}
   */
  this.id_period = undefined;

  /**
   * ID of the purchased promotion.
   *
   * @post get
   * @type {string}
   */
  this.k_login_promotion = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Promotion_Rollup_AdjustModel);

/**
 * @inheritDoc
 */
Wl_Login_Promotion_Rollup_AdjustModel.prototype.config=function()
{
  return {"a_field": {"i_count": {"post": {"post": true}},"id_period": {"post": {"get": true}},"k_login_promotion": {"post": {"get": true}}}};
};