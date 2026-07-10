/**
 * Refills the user account balance by the specified payment amount or adjusts it manually.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Thoth_WlPay_Account_Charge_ChargeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Thoth_WlPay_Account_Charge_ChargeModel_a_pay_form_a_pay_card_a_pay_address
   * @property {boolean} is_new Set this value to `1` to add a new payment address or to `0` to use a saved payment address.
   * @property {string} k_geo_country The key of the country used for the payment address. Specify this to add a new address.
   * @property {string} k_geo_region The key of the region for the payment address. Specify this to add a new address.
   * @property {string} k_pay_address The key of the saved payment address. Specify this to use a saved address.
   * @property {string} s_city The city used for the payment address. Specify this to add a new address.
   * @property {string} s_name The card name. Specify this to add a new address.
   * @property {string} s_phone The payment phone. Specify this to add a new address.
   * @property {string} s_postal The postal code for the payment address. Specify this to add a new address.
   * @property {string} s_street1 The payment address. Specify this to add a new address.
   * @property {string} s_street2 The optional payment address. Specify this to add a new address.
   */

  /**
   * @typedef {{}} Thoth_WlPay_Account_Charge_ChargeModel_a_pay_form_a_pay_card
   * @property {Thoth_WlPay_Account_Charge_ChargeModel_a_pay_form_a_pay_card_a_pay_address} a_pay_address The payment address:
   * @property {number} i_csc The credit card CSC. Specify this to add a new card.
   * @property {number} i_month The credit card expiration month. Specify this to add a new card.
   * @property {number} i_year The credit card expiration year. Specify this to add a new card.
   * @property {boolean} is_new Specify `1` to add a new card, or `0` to use a saved card.
   * @property {string} k_pay_bank The key of the credit card. Specify this to use saved card.
   * @property {string} s_comment Optional comment(s). Specify this to add a new card.
   * @property {string} s_number The card number. Specify this to add a new card.
   */

  /**
   * @typedef {{}} Thoth_WlPay_Account_Charge_ChargeModel_a_pay_form
   * @property {Thoth_WlPay_Account_Charge_ChargeModel_a_pay_form_a_pay_card} a_pay_card The payment card information:
   * @property {string} f_amount The amount of money to withdraw with this payment source.
   * @property {boolean} is_hide Determines whether this payment method is hidden.
   * @property {boolean} is_save Whether payment method should be saved to user's account.
   * @property {boolean} is_success Identifies whether this source was successfully charged.
   * @property {string} m_surcharge The client-side calculated surcharge.
   * @property {string} s_index The index of this form (optional).
   * @property {string} sid_pay_method The payment method ID.
   */

  /**
   * A list of payment sources to pay with.
   *
   * Each element has next keys:
   *
   * @post post
   * @type {Thoth_WlPay_Account_Charge_ChargeModel_a_pay_form[]}
   */
  this.a_pay_form = undefined;

  /**
   * The source mode key. One of the {@link Wl_Mode_ModeSid} constants.
   *
   * @post post
   * @see Wl_Mode_ModeSid
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * The account charge mode.
   *
   * One of the {@link RsPayAccountChargeSid} constants.
   *
   * @post get
   * @see RsPayAccountChargeSid
   * @type {number}
   */
  this.id_pay_account_charge = 0;

  /**
   * If `true`, the account is filled by a staff member in the backend. Otherwise, this will be `false`.
   *
   * @post get
   * @type {boolean}
   */
  this.is_staff = false;

  /**
   * The ID of the business the user account belongs to.
   *
   * This shouldn't be passed if a user account has already been created.
   * In such cases, {@link Thoth_WlPay_Account_Charge_ChargeModel.k_pay_account} should be passed instead.
   *
   * If both the business ID and account ID passed, the system checks if the given business is the owner of the specified account.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The ID of the user account to refill.
   *
   * This may be 0 if a user account hasn't been created yet.
   * In such cases, {@link Thoth_WlPay_Account_Charge_ChargeModel.k_business} and {@link Thoth_WlPay_Account_Charge_ChargeModel.uid} should be passed instead.
   *
   * If not passed, the currency of account equals the default business currency.
   *
   * @post get
   * @type {string}
   */
  this.k_pay_account = "";

  /**
   * The ID of the purchase that was created during payment.
   * This value is only returned in cases where a purchase was created.
   * A new purchase is created when {@link Thoth_WlPay_Account_Charge_ChargeModel.id_pay_account_charge} equals {@link RsPayAccountChargeSid}.
   *
   * @post result
   * @type {string}
   */
  this.k_purchase = undefined;

  /**
   * The payment amount.
   *
   * @post post
   * @type {string}
   */
  this.m_amount = "0.00";

  /**
   * The transaction comment.
   *
   * @post post
   * @type {string}
   */
  this.s_comment = "";

  /**
   * The ID of the user whose account is being refilled.
   *
   * This shouldn't be passed if a user account has already been created.
   * In such cases, {@link Thoth_WlPay_Account_Charge_ChargeModel.k_pay_account} should be passed instead.
   *
   * If both the user ID and account ID passed, the system checks if the given user is the owner of the specified account.
   *
   * @post get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Thoth_WlPay_Account_Charge_ChargeModel);

/**
 * @inheritDoc
 */
Thoth_WlPay_Account_Charge_ChargeModel.prototype.config=function()
{
  return {"a_field":{"a_pay_form":{"post":{"post":true}},"id_mode":{"post":{"post":true}},"id_pay_account_charge":{"post":{"get":true}},"is_staff":{"post":{"get":true}},"k_business":{"post":{"get":true}},"k_pay_account":{"post":{"get":true}},"k_purchase":{"post":{"result":true}},"m_amount":{"post":{"post":true}},"s_comment":{"post":{"post":true}},"uid":{"post":{"get":true}}}};
};

/**
 * Refills the user account balance by the specified payment amount or adjusts it manually.
 *
 * Accepts the payment amount, account key or user-and-business identifiers, charge mode, and payment form
 * data. Processes the payment through the configured payment environment and returns the purchase key
 * when a new purchase is created (for the automatic charge mode).
 *
 * @function
 * @name Thoth_WlPay_Account_Charge_ChargeModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
