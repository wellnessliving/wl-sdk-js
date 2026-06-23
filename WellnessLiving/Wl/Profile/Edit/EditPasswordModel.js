/**
 * Saves new password for user.
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
  this.is_old_password_required = false;

  /**
   * The key ID of business where actions take place.
   * Business is necessary for mail sending only.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * The confirmation of new password.
   *
   * @post post
   * @type {string}
   */
  this.s_password_confirm = "";

  /**
   * The new password.
   *
   * @post post
   * @type {string}
   */
  this.s_password_new = "";

  /**
   * The old password.
   *
   * @post post
   * @type {string}
   */
  this.s_password_old = "";

  /**
   * The user key.
   *
   * @post post
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Edit_EditPasswordModel);

/**
 * @inheritDoc
 */
Wl_Profile_Edit_EditPasswordModel.prototype.config=function()
{
  return {"a_field":{"is_old_password_required":{"post":{"post":true}},"k_business":{"post":{"post":true}},"s_password_confirm":{"post":{"post":true}},"s_password_new":{"post":{"post":true}},"s_password_old":{"post":{"post":true}},"uid":{"post":{"post":true}}}};
};

/**
 * Saves new password for user.
 *
 * Changes the user's password after verifying the current one, enforcing complexity and
 * length rules, and sends a password-change notification email. The old password check can
 * be skipped by staff with the appropriate access level.
 *
 * @function
 * @name Wl_Profile_Edit_EditPasswordModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
