/**
 * Point for modify the reward action.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Reward_Action_ActionWriteModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Promotions' list. Each element is a primary key in {@link \RsPromotionSql} table.
   *
   * <tt>null</tt> if not set yet.
   *
   * @post post
   * @type {?string[]}
   */
  this.a_promotion = null;

  /**
   * Maximum count of score.
   *
   * <tt>null</tt> if not set yet.
   *
   * @post post
   * @type {?number}
   */
  this.i_cap = null;

  /**
   * Count of the duration period.
   *
   * <tt>null</tt> if not set yet.
   *
   * @post post
   * @type {?number}
   */
  this.i_count = null;

  /**
   * Score of the reward.
   *
   * <tt>null</tt> if not set yet.
   *
   * @post post
   * @type {?number}
   */
  this.i_score = null;

  /**
   * Period to apply maximum count of score.
   *
   * <tt>null</tt> if not set yet.
   *
   * @post post
   * @type {?number}
   */
  this.id_cap = null;

  /**
   * Type of a period.
   *
   * This field contains one of {@link ADurationSid} constants.
   *
   * <tt>null</tt> if not set yet.
   *
   * @post post
   * @type {?number}
   */
  this.id_duration = null;

  /**
   * Flag to define points type (account credits or points) in the 'Refer-a-Friend' section on the 'Enable Points' page.
   * <tt>true</tt>, if these are account credits.
   * <tt>false</tt>, if these are points.
   * <tt>null</tt> if field left unchanged.
   * <var>is_account_credit</var> field in the {@link \RsRewardActionSql} table.
   *
   * @post post
   * @type {?boolean}
   */
  this.is_account_credit = null;

  /**
   * Value of field `is_auto_renewal` for a {@link \RsRewardActionSql} table.
   *
   * @post post
   * @type {?boolean}
   */
  this.is_auto_renewal = null;

  /**
   * Business key.
   *
   * <tt>null</tt> if not set yet.
   *
   * @post post
   * @type {?string}
   */
  this.k_business = null;

  /**
   * Class ID.
   *
   * <tt>null</tt> if not set yet.
   *
   * @post post
   * @type {?string}
   */
  this.k_class = null;

  /**
   * Promotion key.
   *
   * <tt>null</tt> if not set yet.
   *
   * @post post
   * @type {?string}
   */
  this.k_promotion = null;

  /**
   * Reward action ID.
   *
   * <tt>null</tt> if not set yet.
   *
   * @post post
   * @type {?string}
   */
  this.k_reward_action = null;

  /**
   * Service key.
   *
   * <tt>null</tt> if not set yet.
   *
   * @post post
   * @type {?string}
   */
  this.k_service = null;

  /**
   * Shop product ID.
   *
   * <tt>null</tt> if not set yet.
   *
   * @post post
   * @type {?string}
   */
  this.k_shop_product = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reward_Action_ActionWriteModel);

/**
 * @inheritDoc
 */
Wl_Reward_Action_ActionWriteModel.prototype.config=function()
{
  return {"a_field": {"a_promotion": {"post": {"post": true}},"i_cap": {"post": {"post": true}},"i_count": {"post": {"post": true}},"i_score": {"post": {"post": true}},"id_cap": {"post": {"post": true}},"id_duration": {"post": {"post": true}},"is_account_credit": {"post": {"post": true}},"is_auto_renewal": {"post": {"post": true}},"k_business": {"post": {"post": true}},"k_class": {"post": {"post": true}},"k_promotion": {"post": {"post": true}},"k_reward_action": {"post": {"post": true}},"k_service": {"post": {"post": true}},"k_shop_product": {"post": {"post": true}}}};
};