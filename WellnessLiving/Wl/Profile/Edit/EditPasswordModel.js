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
   * Checks if the current password is required or not to update the password.
   *
   * @post post
   * @type {boolean}
   */
  this.is_old_password_required = true;

  /**
   * ID of business where actions take place.
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
  return {"a_field": {"is_old_password_required": {"post": {"post": true}},"k_business": {"post": {"post": true}},"s_password_confirm": {"post": {"post": true}},"s_password_new": {"post": {"post": true}},"s_password_old": {"post": {"post": true}},"uid": {"post": {"post": true}}}};
};