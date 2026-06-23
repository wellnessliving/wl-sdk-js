/**
 * Retrieves information about reward action item.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Reward_Action_ElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business,k_reward_action";

  /**
   * Points amount that will be added to user account after successful accomplishment of reward action.
   *
   * @get result
   * @type {number}
   */
  this.i_score = undefined;

  /**
   * Types of reward actions.
   *
   * Last used ID: 32
   *
   * Values:
   * - 16 (`BIRTHDAY`): Customer Birthday earns X points.
   * - 14 (`BOOK`): Book a class online.
   * - 2 (`BOOK_FACEBOOK`): Book a class and share on Facebook.
   * - 3 (`BOOK_TWITTER`): Book a class and share on Twitter.
   * - 26 (`CUSTOM`): Custom action.
   * - 7 (`LOGIN_FACEBOOK`): Connect profile to Facebook.
   * - 15 (`PAY`): Each Dollar spent earns customers X points.
   * - 28 (`PURCHASE_PRODUCT`): The reward for the purchase of some product.
   * - 27 (`PURCHASE_PROMOTION`): The reward for the purchase of some promotion.
   * - 22 (`PURCHASE_SHARE_FACEBOOK`): Share to facebook purchased item.
   * - 23 (`PURCHASE_SHARE_TWITTER`): Share to twitter purchased item.
   * - 30 (`REFER_PURCHASE`): Referral purchase.
   * - 31 (`REFER_REGISTER`): Referral registration.
   * - 20 (`REGISTRATION`): User registration.
   * - 25 (`RESET`): Record to reset all-time earned user points. This points will be always negative.
   * - 32 (`RESET_AVAILABLE`): Record to reset current available user points. This points will be always negative.
   * - 11 (`REVIEW`): Write a review on microsite.
   * - 9 (`REVIEW_FACEBOOK`): Write a review on microsite and share on Facebook.
   * - 10 (`REVIEW_TWITTER`): Write a review on microsite and share on Twitter.
   * - 12 (`VISIT`): Visit classes on the same location.
   * - 29 (`VISIT_APPOINTMENT`): Attending a specific appointment earns customers X points.
   * - 18 (`VISIT_CLASS`): Attending a specific class earns customers X points.
   * - 19 (`VISIT_ENROLLMENT`): Attending a specific Workshop/Enrollment/Event earns customers X points.
   *
   * @get result
   * @type {?number}
   */
  this.id_reward_score = null;

  /**
   * `true` if user has requested points for action accomplishment, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_request = undefined;

  /**
   * Business to show information for.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Reward action to show information for.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_reward_action = "";

  /**
   * User friendly reward action description.
   *
   * @get result
   * @type {string}
   */
  this.s_description = undefined;

  /**
   * User to retrieve information about.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reward_Action_ElementModel);

/**
 * @inheritDoc
 */
Wl_Reward_Action_ElementModel.prototype.config=function()
{
  return {"a_field":{"i_score":{"get":{"result":true}},"id_reward_score":{"get":{"result":true}},"is_request":{"get":{"result":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_reward_action":{"get":{"get":true},"post":{"get":true}},"s_description":{"get":{"result":true}},"uid":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Reward_Action_ElementModel.instanceGet
 * @param {string} uid User to retrieve information about.
 * @param {string} k_business Business to show information for.
 * @param {string} k_reward_action Reward action to show information for.
 * @returns {Wl_Reward_Action_ElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves information about reward action item.
 *
 * Returns the point value, score type, description, and whether the user has already submitted a points request
 * for the specified reward action.
 *
 * @function
 * @name Wl_Reward_Action_ElementModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Requests points earning.
 *
 * Submits a custom reward points request for the specified action on behalf of the given user and records
 * the pending approval request.
 *
 * @function
 * @name Wl_Reward_Action_ElementModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
