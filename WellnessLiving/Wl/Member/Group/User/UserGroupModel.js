/**
 * Deletes the user from the group.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Member_Group_User_UserGroupModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * All groups to which the specified user belongs.
   *
   * @get result
   * @type {string[]}
   */
  this.a_group_info = undefined;

  /**
   * Whether the user is in the quick group or not.
   *
   * @get result
   * @type {boolean}
   */
  this.is_quick_group = undefined;

  /**
   * Key of the business.
   *
   * @delete get
   * @get get
   * @post get
   * @type {?string}
   */
  this.k_business = null;

  /**
   * Member group key. Use special value 'quick' to add/remove the user to/from the quick group.
   *
   * @delete post
   * @post post
   * @type {?string}
   */
  this.k_member_group = null;

  /**
   * UID of a user.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.uid_user = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Member_Group_User_UserGroupModel);

/**
 * @inheritDoc
 */
Wl_Member_Group_User_UserGroupModel.prototype.config=function()
{
  return {"a_field":{"a_group_info":{"get":{"result":true}},"is_quick_group":{"get":{"result":true}},"k_business":{"delete":{"get":true},"get":{"get":true},"post":{"get":true}},"k_member_group":{"delete":{"post":true},"post":{"post":true}},"uid_user":{"delete":{"get":true},"get":{"get":true},"post":{"get":true}}}};
};

/**
 * Deletes the user from the group.
 *
 * Removes the specified user from the given member group within the business after verifying access rights
 * and that the group key is valid.
 *
 * @function
 * @name Wl_Member_Group_User_UserGroupModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Gets information about all groups to which the specified user belongs.
 *
 * Returns the list of member group keys for the given user within the specified business, populating
 * `$a_group_info` with those keys after access validation.
 *
 * @function
 * @name Wl_Member_Group_User_UserGroupModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Adds a user to a group.
 *
 * Assigns the specified user to the given member group within the business after verifying access rights
 * and that the group key is valid.
 *
 * @function
 * @name Wl_Member_Group_User_UserGroupModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
