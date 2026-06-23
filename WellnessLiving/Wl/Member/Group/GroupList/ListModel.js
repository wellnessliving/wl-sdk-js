/**
 * Removes groups.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Member_Group_GroupList_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Member_Group_GroupList_ListModel_a_member_group
   * @property {string} k_member_group The key of the member group.
   * @property {string} text_title The name of the member group.
   */

  /**
   * Member groups list:
   *
   * @get result
   * @type {Wl_Member_Group_GroupList_ListModel_a_member_group[]}
   */
  this.a_member_group = undefined;

  /**
   * List of groups to be deleted.
   *
   * @delete post
   * @type {string[]}
   */
  this.a_member_group_delete = undefined;

  /**
   * List of groups in the order in which they will be saved.
   *
   * @put post
   * @type {string[]}
   */
  this.a_member_group_order = undefined;

  /**
   * List of groups for filtering groups of business.
   *
   * `null` in the case when need to return all groups of business.
   *
   * @get get
   * @type {?string[]}
   */
  this.a_member_group_select = null;

  /**
   * Whether include "Isaac Churn Risk" group.
   *
   * @get get
   * @type {boolean}
   */
  this.is_churn_risk = false;

  /**
   * Whether include a list of members of groups.
   *
   * @get get
   * @type {boolean}
   */
  this.is_return_members = false;

  /**
   * The business key.
   *
   * @delete get
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Member_Group_GroupList_ListModel);

/**
 * @inheritDoc
 */
Wl_Member_Group_GroupList_ListModel.prototype.config=function()
{
  return {"a_field":{"a_member_group":{"get":{"result":true}},"a_member_group_delete":{"delete":{"post":true}},"a_member_group_order":{"put":{"post":true}},"a_member_group_select":{"get":{"get":true}},"is_churn_risk":{"get":{"get":true}},"is_return_members":{"get":{"get":true}},"k_business":{"delete":{"get":true},"get":{"get":true},"put":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Member_Group_GroupList_ListModel.instanceGet
 * @param {string} k_business The business key.
 * @returns {Wl_Member_Group_GroupList_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Removes groups.
 *
 * Deletes specified groups and associated search templates.
 *
 * @function
 * @name Wl_Member_Group_GroupList_ListModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Returns all member groups list in the business if `$a_member_group_select` is empty,
otherwise filters result according to `$a_member_group_select`.
 *
 * If `is_return_members` is `true` includes in the result list of members of each groups.
 *
 * @function
 * @name Wl_Member_Group_GroupList_ListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Updates the order of groups in a list.
 *
 * Saves the display order of member groups for the business using the positions supplied in
 * `$a_member_group_order`, verifying that all specified group keys belong to the business before writing.
 *
 * @function
 * @name Wl_Member_Group_GroupList_ListModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
