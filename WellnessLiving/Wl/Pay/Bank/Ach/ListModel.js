/**
 * Retrieves information about user's ACH accounts.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Bank_Ach_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business,k_location";

  /**
   * @typedef {{}} Wl_Pay_Bank_Ach_ListModel_a_list
   * @property {number} id_pay_bank_ach_holder A list of account holder types which can be chosen.
   * @property {number} id_pay_bank_ach_type A list of account types which can be chosen.
   * @property {boolean} is_default `true` - this account is default payment method; `false` - otherwise.
   * @property {string} k_pay_bank ID of bank account.
   * @property {string} text_name_account Account name.
   * @property {string} text_name_holder Account holder name.
   * @property {string} text_number ACH account number.
   */

  /**
   * List of ACH accounts:
   *
   * @get result
   * @type {Wl_Pay_Bank_Ach_ListModel_a_list[]}
   */
  this.a_list = undefined;

  /**
   * Whether new ACH account can be added.
   *
   * `true` if new ACH account can be added.
   * `false` if new ACH account can not be added.
   *
   * @get result
   * @type {boolean}
   */
  this.can_add = undefined;

  /**
   * ID of current business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Location to show information for.
   *
   * `0` to use user's home location.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * ID of a user to show information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Bank_Ach_ListModel);

/**
 * @inheritDoc
 */
Wl_Pay_Bank_Ach_ListModel.prototype.config=function()
{
  return {"a_field":{"a_list":{"get":{"result":true}},"can_add":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_location":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Pay_Bank_Ach_ListModel.instanceGet
 * @param {string} uid ID of a user to show information for.
 * @param {string} k_business ID of current business.
 * @param {string} k_location Location to show information for. `0` to use user's home location.
 * @returns {Wl_Pay_Bank_Ach_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves information about user's ACH accounts.
 *
 * Validates the user, business, and location, then retrieves all saved ACH accounts for the resolved merchant.
 * Also reports whether the current owner is allowed to add a new ACH account.
 *
 * @function
 * @name Wl_Pay_Bank_Ach_ListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
