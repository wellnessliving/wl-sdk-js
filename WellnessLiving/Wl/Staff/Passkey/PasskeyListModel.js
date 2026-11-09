/**
 * Lists the passkeys of the active staff members of the business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Staff_Passkey_PasskeyListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Staff_Passkey_PasskeyListModel_a_staff_a_passkey
   * @property {string} dtu_create Date and time when the passkey was registered.
   * @property {?string} dtu_last_use Date and time when the passkey was last used to sign in, or `null` if it was never used.
   * @property {string} k_passkey_credential Passkey key.
   * @property {string} text_device Name of the passkey.
   */

  /**
   * @typedef {{}} Wl_Staff_Passkey_PasskeyListModel_a_staff
   * @property {Wl_Staff_Passkey_PasskeyListModel_a_staff_a_passkey} a_passkey Active passkeys of the staff member, in the order of creation:
   * @property {boolean} can_remove Whether the signed-in user may remove the passkeys of this staff member. The same rule is applied by the removal itself.
   * @property {string} text_name Full name of the staff member.
   * @property {string} text_role Business role of the staff member, or an empty string if no role is assigned.
   * @property {string} uid Staff member key.
   */

  /**
   * Active staff members of the business who have at least one active passkey, sorted by name.
   *
   * @get result
   * @type {Wl_Staff_Passkey_PasskeyListModel_a_staff[]}
   */
  this.a_staff = undefined;

  /**
   * Key of the business whose staff passkeys to list.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Staff_Passkey_PasskeyListModel);

/**
 * @inheritDoc
 */
Wl_Staff_Passkey_PasskeyListModel.prototype.config=function()
{
  return {"a_field":{"a_staff":{"get":{"result":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Staff_Passkey_PasskeyListModel.instanceGet
 * @param {string} k_business Key of the business whose staff passkeys to list.
 * @returns {Wl_Staff_Passkey_PasskeyListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Lists the passkeys of the active staff members of the business.
 *
 * Only staff members who have passkeys are listed. The list does not depend on whether passkey sign-in is enabled
 * for the business: the passkeys that exist stay visible and removable after the option is turned off. The staff members whose passkeys the signed-in user may not
 * remove are listed too, with `can_remove` set to `false`: the user sees that they exist, and the removal stays
 * refused by `delete()`.
 *
 * @function
 * @name Wl_Staff_Passkey_PasskeyListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
