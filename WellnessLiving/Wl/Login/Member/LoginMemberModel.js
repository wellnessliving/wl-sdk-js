/**
 * Gets client ID for a specific client in a business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Member_LoginMemberModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * The date when client became a member.
   *
   * @post result
   * @type {string}
   */
  this.dt_member = undefined;

  /**
   * The business key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The user's ID to get/set.
   *
   * @get result
   * @post get
   * @type {string}
   */
  this.s_member = "";

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

WlSdk_ModelAbstract.extend(Wl_Login_Member_LoginMemberModel);

/**
 * @inheritDoc
 */
Wl_Login_Member_LoginMemberModel.prototype.config=function()
{
  return {"a_field":{"dt_member":{"post":{"result":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"s_member":{"get":{"result":true},"post":{"get":true}},"uid":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Login_Member_LoginMemberModel.instanceGet
 * @param {string} k_business The business key.
 * @param {string} uid The user's key.
 * @returns {Wl_Login_Member_LoginMemberModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets client ID for a specific client in a business.
 *
 * Validates the business key and user key, checks profile access, and returns the member ID string assigned to
 * the client in the specified business. Returns an empty string if the user has no member ID set.
 *
 * @function
 * @name Wl_Login_Member_LoginMemberModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Updates client ID for a specific client in a business.
 *
 * Validates and saves the new member ID for the given client in the specified business, reindexes the user for
 * search, and returns the date the user originally became a member.
 *
 * @function
 * @name Wl_Login_Member_LoginMemberModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
