/**
 * Returns the total reward points for the specified activity list or user.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Reward_Score_ScoreModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of login activity keys for which points should be added or returned.
   *
   * NOTE: Login activity might belong to different users. It is possible for ex if booking performed
   * for several users (usually family members) and required to retrieve sum of all scores for preformed activities.
   *
   * @get get
   * @post get
   * @type {string[]}
   */
  this.a_login_activity = undefined;

  /**
   * Depending on arguments specified during API request might be:
   * * Total number of points which were earned for each activity in a list provided in [ScoreApi](/Wl/Reward/Score/Score.json)
   *   in a case if it was provided.
   * * Total number of points user currently own in a cast if [ScoreApi](/Wl/Reward/Score/Score.json) specified.
   *
   * @get result
   * @put post
   * @type {number}
   */
  this.i_score = 0;

  /**
   * Business key within which score should be managed.
   *
   * @put post
   * @type {string}
   */
  this.k_business = "";

  /**
   * String to be added as a comment to manual reward points changes.
   *
   * @put post
   * @type {string}
   */
  this.text_comment = "";

  /**
   * User key for which score should be managed.
   *
   * @put post
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reward_Score_ScoreModel);

/**
 * @inheritDoc
 */
Wl_Reward_Score_ScoreModel.prototype.config=function()
{
  return {"a_field":{"a_login_activity":{"get":{"get":true},"post":{"get":true}},"i_score":{"get":{"result":true},"put":{"post":true}},"k_business":{"put":{"post":true}},"text_comment":{"put":{"post":true}},"uid":{"put":{"post":true}}}};
};

/**
 * Returns the total reward points for the specified activity list or user.
 *
 * If `a_login_activity` is provided, returns the total points earned across those activities; otherwise returns
 * the current point balance for the specified user in the given business.
 *
 * @function
 * @name Wl_Reward_Score_ScoreModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Gives user reward points for sharing of certain activity into Facebook.
 *
 * Validates the activity list, determines the appropriate reward score type per activity category, and schedules
 * reward point additions for each shareable activity.
 *
 * @function
 * @name Wl_Reward_Score_ScoreModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */

/**
 * Manually adjusts the reward points balance for the specified user.
 *
 * Requires the reward point reset privilege, creates a manual activity log entry, and applies the signed point
 * adjustment to the user's reward balance within a transaction.
 *
 * @function
 * @name Wl_Reward_Score_ScoreModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
