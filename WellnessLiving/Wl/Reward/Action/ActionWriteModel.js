/**
 * Updates configuration fields for the specified reward action.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Reward_Action_ActionWriteModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Promotions' list.
   *
   * `null` if not set yet.
   *
   * @post post
   * @type {?string[]}
   */
  this.a_promotion = null;

  /**
   * Maximum count of score.
   *
   * `null` if not set yet.
   *
   * @post post
   * @type {?number}
   */
  this.i_cap = null;

  /**
   * Count of the duration period.
   *
   * `null` if not set yet.
   *
   * @post post
   * @type {?number}
   */
  this.i_count = null;

  /**
   * Score of the reward.
   *
   * `null` if not set yet.
   *
   * @post post
   * @type {?number}
   */
  this.i_score = null;

  /**
   * A class for managing time intervals.
   * Last ID: 9.
   *
   * Values:
   * - 4 (`DAY`): Days.
   * - 3 (`HOUR`): Hours.
   * - 2 (`MINUTE`): Minutes.
   * - 5 (`MONTH`): Months.
   * - 1 (`SECOND`): Seconds.
   * - 7 (`WEEK`): Weeks (7 days).
   * - 9 (`WEEK2`): Two weeks (14 days).
   * - 8 (`WEEK4`): Foursome of weeks (28 days).
   * - 6 (`YEAR`): Years.
   *
   * @post post
   * @see ADurationSid
   * @type {?number}
   */
  this.id_cap = null;

  /**
   * A class for managing time intervals.
   * Last ID: 9.
   *
   * Values:
   * - 4 (`DAY`): Days.
   * - 3 (`HOUR`): Hours.
   * - 2 (`MINUTE`): Minutes.
   * - 5 (`MONTH`): Months.
   * - 1 (`SECOND`): Seconds.
   * - 7 (`WEEK`): Weeks (7 days).
   * - 9 (`WEEK2`): Two weeks (14 days).
   * - 8 (`WEEK4`): Foursome of weeks (28 days).
   * - 6 (`YEAR`): Years.
   *
   * @post post
   * @see ADurationSid
   * @type {?number}
   */
  this.id_duration = null;

  /**
   * Flag to define points type (account credits or points) in the 'Refer-a-Friend' section on the 'Enable Points' page.
   * `true`, if these are account credits.
   * `false`, if these are points.
   * `null` if field left unchanged.
   *
   * @post post
   * @type {?boolean}
   */
  this.is_account_credit = null;

  /**
   * Whether auto-renewal is enabled for this reward action.
   *
   * @post post
   * @type {?boolean}
   */
  this.is_auto_renewal = null;

  /**
   * Business key.
   *
   * `null` if not set yet.
   *
   * @post post
   * @type {?string}
   */
  this.k_business = null;

  /**
   * Class ID.
   *
   * `null` if not set yet.
   *
   * @post post
   * @type {?string}
   */
  this.k_class = null;

  /**
   * Promotion key.
   *
   * `null` if not set yet.
   *
   * @post post
   * @type {?string}
   */
  this.k_promotion = null;

  /**
   * Reward action ID.
   *
   * `null` if not set yet.
   *
   * @post post
   * @type {?string}
   */
  this.k_reward_action = null;

  /**
   * Service key.
   *
   * `null` if not set yet.
   *
   * @post post
   * @type {?string}
   */
  this.k_service = null;

  /**
   * Shop product ID.
   *
   * `null` if not set yet.
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
  return {"a_field":{"a_promotion":{"post":{"post":true}},"i_cap":{"post":{"post":true}},"i_count":{"post":{"post":true}},"i_score":{"post":{"post":true}},"id_cap":{"post":{"post":true}},"id_duration":{"post":{"post":true}},"is_account_credit":{"post":{"post":true}},"is_auto_renewal":{"post":{"post":true}},"k_business":{"post":{"post":true}},"k_class":{"post":{"post":true}},"k_promotion":{"post":{"post":true}},"k_reward_action":{"post":{"post":true}},"k_service":{"post":{"post":true}},"k_shop_product":{"post":{"post":true}}}};
};

/**
 * Updates configuration fields for the specified reward action.
 *
 * Accepts changes to fields such as auto-renewal flag, point cap, point value, and linked promotions, and
 * persists only the provided fields while logging the changes.
 *
 * @function
 * @name Wl_Reward_Action_ActionWriteModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
