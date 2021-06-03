/**
 * Retrieves information about redeemable prize.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Reward_Prize_ElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business,k_reward_prize";

  /**
   * Prize price in wellnessliving points.
   *
   * @get result
   * @type {number}
   */
  this.i_score = undefined;

  /**
   * Business to show information for.
   *
   * Primary key in {@link \RsBusinessSql}.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Key of redeemable prize.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_reward_prize = "0";

  /**
   * User friendly prize description.
   *
   * @get result
   * @type {string}
   */
  this.s_description = undefined;

  /**
   * User to retrieve information about.
   *
   * Primary key in {@link \PassportLoginSql}.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reward_Prize_ElementModel);

/**
 * @inheritDoc
 */
Wl_Reward_Prize_ElementModel.prototype.config=function()
{
  return {"a_field": {"i_score": {"get": {"result": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_reward_prize": {"get": {"get": true},"post": {"get": true}},"s_description": {"get": {"result": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Reward_Prize_ElementModel.instanceGet
 * @param {string} uid User to retrieve information about. Primary key in {@link \PassportLoginSql}.
 * @param {string} k_business Business to show information for. Primary key in {@link \RsBusinessSql}.
 * @param {string} k_reward_prize Key of redeemable prize.
 * @returns {Wl_Reward_Prize_ElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */