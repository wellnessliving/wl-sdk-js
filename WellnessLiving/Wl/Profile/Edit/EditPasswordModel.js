/**
 * Model to change user's password.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Edit_EditPasswordModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * ID of business where actions take place.
   * Primary key in {@link \RsBusinessSql} table.
   * Business is necessary for mail sending only.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Confirmation of new password.
   *
   * @post post
   * @type {string}
   */
  this.s_password_confirm = "";

  /**
   * New password.
   *
   * @post post
   * @type {string}
   */
  this.s_password_new = "";

  /**
   * Old password.
   *
   * @post post
   * @type {string}
   */
  this.s_password_old = "";

  /**
   * User key.
   * Primary key in {@link \PassportLoginSql} table.
   *
   * @post post
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Edit_EditPasswordModel);

/**
 * @inheritDoc
 */
Wl_Profile_Edit_EditPasswordModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"post": {"post": true}},"s_password_confirm": {"post": {"post": true}},"s_password_new": {"post": {"post": true}},"s_password_old": {"post": {"post": true}},"uid": {"post": {"post": true}}}};
};