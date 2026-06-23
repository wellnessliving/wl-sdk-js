/**
 * Returns a paginated list of active member user keys for the specified business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Member_LoginMemberListAllModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * List of UIDs for all active clients that belong to the business.
   *
   * @get result
   * @type {string[]}
   */
  this.a_uid = undefined;

  /**
   * The maximum number of members to return in the list.
   *
   * Use with `uid_last` to get the next page of results.
   *
   * @get get
   * @type {number}
   */
  this.i_page_size = 0;

  /**
   * The key of the business to get a list of members for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The last member UID from the previous page.
   * Use with `i_page_size` to get the next page of results.
   * If empty, the first page of results is returned.
   *
   * @get get
   * @type {string}
   */
  this.uid_last = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Member_LoginMemberListAllModel);

/**
 * @inheritDoc
 */
Wl_Login_Member_LoginMemberListAllModel.prototype.config=function()
{
  return {"a_field":{"a_uid":{"get":{"result":true}},"i_page_size":{"get":{"get":true}},"k_business":{"get":{"get":true}},"uid_last":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Login_Member_LoginMemberListAllModel.instanceGet
 * @param {string} k_business The key of the business to get a list of members for.
 * @returns {Wl_Login_Member_LoginMemberListAllModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns a paginated list of active member user keys for the specified business.
 *
 * Accepts a business key, an optional page size, and an optional last-seen user key for cursor-based pagination,
 * then returns an ordered array of user keys for all active members of that business.
 *
 * @function
 * @name Wl_Login_Member_LoginMemberListAllModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
