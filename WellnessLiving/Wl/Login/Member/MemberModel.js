/**
 * Returns the list of businesses where the specified user is an active member.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Member_MemberModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid";

  /**
   * @typedef {{}} Wl_Login_Member_MemberModel_a_business
   * @property {boolean} can_enter `true` if the user is allowed to sign in into this business; `false` otherwise.
   * @property {boolean} is_franchisee If `true`, then the business is a franchisee. Otherwise, this will be `false`.
   * @property {boolean} is_franchisor If `true`, then the business is a franchisor. Otherwise, this will be `false`.
   * @property {string} k_business The business key.
   * @property {string} k_business_franchisor The business key of the Enterprise Headquarters account (if applicable).
   * @property {string} text_title The title of the business.
   */

  /**
   * A list of businesses where the client is present. Every element is an array with the following keys:
   *
   * @get result
   * @type {Wl_Login_Member_MemberModel_a_business[]}
   */
  this.a_business = undefined;

  /**
   * Primary key of the business to add the user into.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * The user's key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Member_MemberModel);

/**
 * @inheritDoc
 */
Wl_Login_Member_MemberModel.prototype.config=function()
{
  return {"a_field":{"a_business":{"get":{"result":true}},"k_business":{"post":{"post":true}},"uid":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Login_Member_MemberModel.instanceGet
 * @param {string} uid The user's key.
 * @returns {Wl_Login_Member_MemberModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns the list of businesses where the specified user is an active member.
 *
 * Accepts a user key and returns all active businesses where that user has a membership, including franchise
 * relationship flags, business title, and whether the user is allowed to sign in to each business. Forwards the
 * request to other data centers in multi-region deployments and merges the results.
 *
 * @function
 * @name Wl_Login_Member_MemberModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Adds a user into a business.
 *
 * Validates that the current user has profile access, then registers the specified user as a member of the given
 * business without sending a registration email.
 *
 * @function
 * @name Wl_Login_Member_MemberModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
