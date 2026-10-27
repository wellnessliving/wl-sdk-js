/**
 * Returns a list of login promotions with available guest passes for a visit.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Promotion_GuestPass_Apply_ApplyModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Login_Promotion_GuestPass_Apply_ApplyModel_a_login_promotion
   * @property {string} k_login_promotion Login promotion key.
   * @property {string} text_description Remaining guest pass balance description for this login promotion.
   * @property {string} text_title Name of the host member who owns this guest pass.
   * @property {string} uid Key of the host member who owns this guest pass.
   */

  /**
   * A list of login promotions with available guest passes for the given visit.
   *
   * Each element is an array with the following keys:
   *
   * @get result
   * @type {Wl_Login_Promotion_GuestPass_Apply_ApplyModel_a_login_promotion[]}
   */
  this.a_login_promotion = undefined;

  /**
   * The source of the visit change.
   * One of the {@link Wl_Mode_ModeSid} constants.
   * If you're unsure about the value to use, keep the default value `null`: the source is detected automatically.
   *
   * @post post
   * @see Wl_Mode_ModeSid
   * @type {?number}
   */
  this.id_mode = null;

  /**
   * Business key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Login promotion key of the host member's class membership whose guest pass
   * balance will be used.
   *
   * @post post
   * @type {string}
   */
  this.k_login_promotion = "";

  /**
   * Visit key of the attendee to whom the guest pass is applied.
   *
   * @post post
   * @type {string}
   */
  this.k_visit = "";

  /**
   * Visit key of the attendee for whom the list of guest passes is requested.
   *
   * @get get
   * @type {string}
   */
  this.k_visit_search = "";

  /**
   * Text to search guest pass hosts by (for example, a member name).
   *
   * Empty string means no search.
   *
   * @get get
   * @type {string}
   */
  this.text_search = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Promotion_GuestPass_Apply_ApplyModel);

/**
 * @inheritDoc
 */
Wl_Login_Promotion_GuestPass_Apply_ApplyModel.prototype.config=function()
{
  return {"a_field":{"a_login_promotion":{"get":{"result":true}},"id_mode":{"post":{"post":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_login_promotion":{"post":{"post":true}},"k_visit":{"post":{"post":true}},"k_visit_search":{"get":{"get":true}},"text_search":{"get":{"get":true}}}};
};

/**
 * Returns a list of login promotions with available guest passes for a visit.
 *
 * Searches for members who have active class memberships with guest pass balance
 * applicable to the class and location of the given visit. Each result item represents
 * one eligible login promotion, not one user: if a member has several qualifying memberships,
 * each appears as a separate item.
 *
 * @function
 * @name Wl_Login_Promotion_GuestPass_Apply_ApplyModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Applies the guest pass of the specified login promotion to the attendee's visit.
 *
 * If the visit is already paid (with a regular session pass or an existing guest pass),
 * the previous payment is unwound before the new guest pass is applied.
 *
 * @function
 * @name Wl_Login_Promotion_GuestPass_Apply_ApplyModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
