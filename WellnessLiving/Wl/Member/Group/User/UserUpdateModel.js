/**
 * Manages the action of manual member group update, and also allows you to set automatic group update.
 *
 * In case of automatic update, a task {@link \Wl\Member\Group\User\UserUpdateTask} is scheduled.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Member_Group_User_UserUpdateModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Automatic group update flag.
   *
   * <tt>true</tt> to enable automatic update, <tt>false</tt> to disable.
   *
   * @put post
   * @type {boolean}
   */
  this.is_update = undefined;

  /**
   * Business to get information for.
   *
   * Primary key in {@link \RsBusinessSql} table.
   *
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * The member group key for which the action needs to be performed.
   *
   * @post post
   * @put post
   * @type {string}
   */
  this.k_member_group = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Member_Group_User_UserUpdateModel);

/**
 * @inheritDoc
 */
Wl_Member_Group_User_UserUpdateModel.prototype.config=function()
{
  return {"a_field": {"is_update": {"put": {"post": true}},"k_business": {"get": {"get": true},"post": {"get": true},"put": {"get": true}},"k_member_group": {"post": {"post": true},"put": {"post": true}}}};
};