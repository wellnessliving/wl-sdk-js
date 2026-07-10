/**
 * Deletes saved ACH.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Thoth_WlPay_Bank_Ach_Add_AddModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_location,k_pay_owner,id_locale,is_new";

  /**
   * @typedef {{}} Thoth_WlPay_Bank_Ach_Add_AddModel_a_card_detail_a_pay_address
   * @property {boolean} is_new `true` - add new address; `false` - use existing address.
   * @property {string} k_geo_country Country ID.
   * @property {string} k_geo_region Region ID.
   * @property {string} k_pay_address Chosen payment address ID. It will be set even if user decided to add new address.
   * @property {string} s_city City name.
   * @property {string} s_name User name.
   * @property {string} s_phone Phone number.
   * @property {string} s_postal Postal code.
   * @property {string} s_street1 First address line.
   * @property {string} s_street2 Second address line.
   */

  /**
   * @typedef {{}} Thoth_WlPay_Bank_Ach_Add_AddModel_a_card_detail
   * @property {Thoth_WlPay_Bank_Ach_Add_AddModel_a_card_detail_a_pay_address} a_pay_address Payment address:
   * @property {?number} id_pay_actor Payment actors (staff member, user or business owner).
   * @property {number} id_pay_bank_ach_holder A list of account holder types which can be chosen.
   * @property {number} id_pay_bank_ach_sec A list of SEC codes which can be chosen.
   * @property {number} id_pay_bank_ach_type A list of account types which can be chosen.
   * @property {boolean} is_default `true` - if a payment method is set as default, `false` - otherwise.
   * @property {string} k_pay_bank Key of existing payment source in case of editing.  Empty if new pay source is being added.
   * @property {string} s_aban ABA number.
   * @property {string} s_account Account number.
   * @property {string} s_name Bank account nickname.
   * @property {string} s_number Part of bank account number.
   * @property {string} s_owner Name of bank account owner.
   */

  /**
   * Array with ACH details from ACH widget.
   *
   * @post post
   * @type {Thoth_WlPay_Bank_Ach_Add_AddModel_a_card_detail}
   */
  this.a_card_detail = undefined;

  /**
   * @typedef {{}} Thoth_WlPay_Bank_Ach_Add_AddModel_a_pay_bank
   * @property {boolean} can_remove Whether current user can remove payment method. `true` if user can remove payment methods. `false` if user cannot remove payment methods.
   * @property {number} id_pay_bank A list of bank account types.
   * @property {number} id_pay_bank_ach_holder A list of account holder types which can be chosen.
   * @property {number} id_pay_bank_ach_type A list of account types which can be chosen.
   * @property {boolean} is_default `true` - this account is default payment method; `false` - otherwise.
   * @property {string} k_pay_address Billing address.
   * @property {string} k_pay_bank ID of bank account.
   * @property {string} k_region Region ID.
   * @property {string} text_city Name of city.
   * @property {string} text_country Name of country.
   * @property {string} text_name Account nickname.
   * @property {string} text_name_account Account name.
   * @property {string} text_name_holder Account holder name.
   * @property {string} text_number ACH account number.
   * @property {string} text_phone Phone number.
   * @property {string} text_postal Postal code.
   * @property {string} text_region Name of region.
   * @property {string} text_street1 Street address line 1.
   * @property {string} text_street2 Street address line 2.
   */

  /**
   * ACH account information:
   *
   * @post result
   * @type {Thoth_WlPay_Bank_Ach_Add_AddModel_a_pay_bank}
   */
  this.a_pay_bank = undefined;

  /**
   * The HTML form containing the fields required to add a card.
   *
   * @get result
   * @type {string}
   */
  this.html_widget = undefined;

  /**
   * Locale ID.
   * `null` - if it is not set.
   *
   * @get get
   * @see Core_Locale_LocaleSid
   * @type {?number}
   */
  this.id_locale = null;

  /**
   * Transaction processor ID.
   *
   * @get result
   * @see Thoth_PayProcessor_PayProcessorSid
   * @type {number}
   */
  this.id_pay_processor = undefined;

  /**
   * Determines if the set of configs of the new payment form design is used.
   * `true` - if it is the new payment form design.
   * `false` - if it is the old payment form design.
   *
   * @get get
   * @type {boolean}
   */
  this.is_new = false;

  /**
   * Business key.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Location key.
   *
   * If empty, user's home location will be used.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_location = "";

  /**
   * Pay bank key to delete.
   *
   * @delete get
   * @type {string}
   */
  this.k_pay_bank = "";

  /**
   * Pay owner key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_pay_owner = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Thoth_WlPay_Bank_Ach_Add_AddModel);

/**
 * @inheritDoc
 */
Thoth_WlPay_Bank_Ach_Add_AddModel.prototype.config=function()
{
  return {"a_field":{"a_card_detail":{"post":{"post":true}},"a_pay_bank":{"post":{"result":true}},"html_widget":{"get":{"result":true}},"id_locale":{"get":{"get":true}},"id_pay_processor":{"get":{"result":true}},"is_new":{"get":{"get":true}},"k_business":{"delete":{"get":true},"get":{"get":true},"post":{"get":true}},"k_location":{"get":{"get":true},"post":{"get":true}},"k_pay_bank":{"delete":{"get":true}},"k_pay_owner":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * @function
 * @name Thoth_WlPay_Bank_Ach_Add_AddModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} k_location Location key. If empty, user's home location will be used.
 * @param {string} k_pay_owner Pay owner key.
 * @param {?number} id_locale Locale ID. `null` - if it is not set.
 * @param {boolean} is_new Determines if the set of configs of the new payment form design is used. `true` - if it is the new payment form design. `false` - if it is the old payment form design.
 * @returns {Thoth_WlPay_Bank_Ach_Add_AddModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Deletes saved ACH.
 *
 * Removes the ACH bank account identified by `k_pay_bank` from the pay owner's saved payment methods
 * for the given business.
 *
 * @function
 * @name Thoth_WlPay_Bank_Ach_Add_AddModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Gets widget for ACH account add.
 *
 * Validates the locale, business, and pay owner, then determines whether to use Direct Entry (Australia and New
 * Zealand) or ACH as the payment method. Returns the rendered widget HTML and the processor ID for the
 * resolved merchant.
 *
 * @function
 * @name Thoth_WlPay_Bank_Ach_Add_AddModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Saves new ACH pay method.
 *
 * Processes the submitted ACH widget data, saves the bank account under the given pay owner and business,
 * and optionally marks it as the default payment method. Returns the saved account details including billing
 * address information.
 *
 * @function
 * @name Thoth_WlPay_Bank_Ach_Add_AddModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
