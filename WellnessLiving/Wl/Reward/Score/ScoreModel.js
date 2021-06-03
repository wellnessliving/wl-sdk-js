/**
 * Information about points which are earned for certain activity.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Reward_Score_ScoreModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * IDs of activity. Primary keys in {@link RsLoginActivitySql} table.
   *
   * @get get
   * @post get
   * @type {string[]}
   */
  this.a_login_activity = [];

  /**
   * Points which are earned for activity {@link \Wl\Reward\Score\ScoreApi::$a_login_activity}.
   *
   * @get result
   * @type {number}
   */
  this.i_score = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reward_Score_ScoreModel);

/**
 * @inheritDoc
 */
Wl_Reward_Score_ScoreModel.prototype.config=function()
{
  return {"a_field": {"a_login_activity": {"get": {"get": true},"post": {"get": true}},"i_score": {"get": {"result": true}}}};
};