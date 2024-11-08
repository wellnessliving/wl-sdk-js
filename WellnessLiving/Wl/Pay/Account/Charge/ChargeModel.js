/**
 * Fills a user account with a specified payment.
 *
 * This endpoint uses a CAPTCHA check.
 * To pass the CAPTCHA, review the CAPTCHA API doumentation. where you'll find that you must send a CAPTCHA for a specific action.
 * For this endpoint, the action is `1064`.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Account_Charge_ChargeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Pay_Account_Charge_ChargeModel_a_pay_form_a_pay_card_a_pay_address
   * @property {*} is_new Set this value to <tt>1</tt> to add a new payment address or to <tt>0</tt> to use a saved payment address.
   * @property {*} k_geo_country The key of the country used for the payment address. Specify this to add a new address.
   * @property {*} k_geo_region The key of the region for the payment address. Specify this to add a new address.
   * @property {*} k_pay_address The key of the saved payment address. Specify this to use a saved address.
   * @property {*} s_city The city used for the payment address. Specify this to add a new address.
   * @property {*} s_name The card name. Specify this to add a new address.
   * @property {*} s_phone The payment phone. Specify this to add a new address.
   * @property {*} s_postal The postal code for the payment address. Specify this to add a new address.
   * @property {*} s_street1 The payment address. Specify this to add a new address.
   * @property {*} s_street2 The optional payment address. Specify this to add a new address.
   */
  /**
   * @typedef {{}} Wl_Pay_Account_Charge_ChargeModel_a_pay_form_a_pay_card
   * @property {Wl_Pay_Account_Charge_ChargeModel_a_pay_form_a_pay_card_a_pay_address} a_pay_address The payment address:
   * <dl>
   *   <dt>boolean <tt>is_new</tt></dt>
   *   <dd>Set this value to <tt>1</tt> to add a new payment address or to <tt>0</tt> to use a saved payment address.</dd>
   *   <dt>string [<tt>k_geo_country</tt>]</dt>
   *   <dd>The key of the country used for the payment address. Specify this to add a new address.</dd>
   *   <dt>string [<tt>k_geo_region</tt>]</dt>
   *   <dd>The key of the region for the payment address. Specify this to add a new address.</dd>
   *   <dt>string [<tt>k_pay_address</tt>]</dt>
   *   <dd>The key of the saved payment address. Specify this to use a saved address.</dd>
   *   <dt>string [<tt>s_city</tt>]</dt>
   *   <dd>The city used for the payment address. Specify this to add a new address.</dd>
   *   <dt>string [<tt>s_name</tt>]</dt>
   *   <dd>The card name. Specify this to add a new address.</dd>
   *   <dt>string [<tt>s_phone</tt>]</dt>
   *   <dd>The payment phone. Specify this to add a new address.</dd>
   *   <dt>string [<tt>s_postal</tt>]</dt>
   *   <dd>The postal code for the payment address. Specify this to add a new address.</dd>
   *   <dt>string [<tt>s_street1</tt>]</dt>
   *   <dd>The payment address. Specify this to add a new address.</dd>
   *   <dt>string [<tt>s_street2</tt>]</dt>
   *   <dd>The optional payment address. Specify this to add a new address.</dd>
   * </dl>
   * @property {*} i_csc The credit card CSC. Specify this to add a new card.
   * @property {*} i_month The credit card expiration month. Specify this to add a new card.
   * @property {*} i_year The credit card expiration year. Specify this to add a new card.
   * @property {*} is_new Specify <tt>1</tt> to add a new card, or <tt>0</tt> to use a saved card.
   * @property {*} k_pay_bank The key of the credit card. Specify this to use saved card.
   * @property {*} s_comment Optional comment(s). Specify this to add a new card.
   * @property {*} s_number The card number. Specify this to add a new card.
   */
  /**
   * @typedef {{}} Wl_Pay_Account_Charge_ChargeModel_a_pay_form
   * @property {Wl_Pay_Account_Charge_ChargeModel_a_pay_form_a_pay_card[]} a_pay_card The payment card information:
   * <dl>
   *   <dt>
   *     array <tt>a_pay_address</tt>
   *   </dt>
   *   <dd>
   *     The payment address:
   *     <dl>
   *       <dt>boolean <tt>is_new</tt></dt>
   *       <dd>Set this value to <tt>1</tt> to add a new payment address or to <tt>0</tt> to use a saved payment address.</dd>
   *       <dt>string [<tt>k_geo_country</tt>]</dt>
   *       <dd>The key of the country used for the payment address. Specify this to add a new address.</dd>
   *       <dt>string [<tt>k_geo_region</tt>]</dt>
   *       <dd>The key of the region for the payment address. Specify this to add a new address.</dd>
   *       <dt>string [<tt>k_pay_address</tt>]</dt>
   *       <dd>The key of the saved payment address. Specify this to use a saved address.</dd>
   *       <dt>string [<tt>s_city</tt>]</dt>
   *       <dd>The city used for the payment address. Specify this to add a new address.</dd>
   *       <dt>string [<tt>s_name</tt>]</dt>
   *       <dd>The card name. Specify this to add a new address.</dd>
   *       <dt>string [<tt>s_phone</tt>]</dt>
   *       <dd>The payment phone. Specify this to add a new address.</dd>
   *       <dt>string [<tt>s_postal</tt>]</dt>
   *       <dd>The postal code for the payment address. Specify this to add a new address.</dd>
   *       <dt>string [<tt>s_street1</tt>]</dt>
   *       <dd>The payment address. Specify this to add a new address.</dd>
   *       <dt>string [<tt>s_street2</tt>]</dt>
   *       <dd>The optional payment address. Specify this to add a new address.</dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     int [<tt>i_csc</tt>]
   *   </dt>
   *   <dd>
   *     The credit card CSC. Specify this to add a new card.
   *   </dd>
   *   <dt>
   *     int [<tt>i_month</tt>]
   *   </dt>
   *   <dd>
   *     The credit card expiration month. Specify this to add a new card.
   *   </dd>
   *   <dt>
   *     int [<tt>i_year</tt>]
   *   </dt>
   *   <dd>
   *     The credit card expiration year. Specify this to add a new card.
   *   </dd>
   *   <dt>
   *     boolean <tt>is_new</tt>
   *   </dt>
   *   <dd>
   *     Specify <tt>1</tt> to add a new card, or <tt>0</tt> to use a saved card.
   *   </dd>
   *   <dt>
   *     string [<tt>k_pay_bank</tt>]
   *   </dt>
   *   <dd>
   *     The key of the credit card. Specify this to use saved card.
   *   </dd>
   *   <dt>
   *     string [<tt>s_comment</tt>]
   *   </dt>
   *   <dd>
   *     Optional comment(s). Specify this to add a new card.
   *   </dd>
   *   <dt>
   *     string [<tt>s_number</tt>]
   *   </dt>
   *   <dd>
   *     The card number. Specify this to add a new card.
   *   </dd>
   * </dl>
   * @property {string} f_amount The amount of money to withdraw with this payment source.
   * @property {*} is_hide Whether payment method should be saved to user's account.
   * @property {*} is_save Determines whether this payment method is hidden.
   * @property {*} is_success Identifies whether this source was successfully charged.
   * @property {*} m_surcharge The client-side calculated surcharge.
   * @property {*} s_index The index of this form (optional).
   * @property {string} sid_pay_method The payment method ID.
   */

  /**
   * A list of payment sources to pay with.
   *
   * Each element has next keys:
   * <dl>
   *   <dt>
   *     array [<var>a_pay_card</var>]
   *   </dt>
   *   <dd>
   *     The payment card information:
   *     <dl>
   *       <dt>
   *         array <var>a_pay_address</var>
   *       </dt>
   *       <dd>
   *         The payment address:
   *         <dl>
   *           <dt>boolean <var>is_new</var></dt>
   *           <dd>Set this value to <tt>1</tt> to add a new payment address or to <tt>0</tt> to use a saved payment address.</dd>
   *           <dt>string [<var>k_geo_country</var>]</dt>
   *           <dd>The key of the country used for the payment address. Specify this to add a new address.</dd>
   *           <dt>string [<var>k_geo_region</var>]</dt>
   *           <dd>The key of the region for the payment address. Specify this to add a new address.</dd>
   *           <dt>string [<var>k_pay_address</var>]</dt>
   *           <dd>The key of the saved payment address. Specify this to use a saved address.</dd>
   *           <dt>string [<var>s_city</var>]</dt>
   *           <dd>The city used for the payment address. Specify this to add a new address.</dd>
   *           <dt>string [<var>s_name</var>]</dt>
   *           <dd>The card name. Specify this to add a new address.</dd>
   *           <dt>string [<var>s_phone</var>]</dt>
   *           <dd>The payment phone. Specify this to add a new address.</dd>
   *           <dt>string [<var>s_postal</var>]</dt>
   *           <dd>The postal code for the payment address. Specify this to add a new address.</dd>
   *           <dt>string [<var>s_street1</var>]</dt>
   *           <dd>The payment address. Specify this to add a new address.</dd>
   *           <dt>string [<var>s_street2</var>]</dt>
   *           <dd>The optional payment address. Specify this to add a new address.</dd>
   *         </dl>
   *       </dd>
   *       <dt>
   *         int [<var>i_csc</var>]
   *       </dt>
   *       <dd>
   *         The credit card CSC. Specify this to add a new card.
   *       </dd>
   *       <dt>
   *         int [<var>i_month</var>]
   *       </dt>
   *       <dd>
   *         The credit card expiration month. Specify this to add a new card.
   *       </dd>
   *       <dt>
   *         int [<var>i_year</var>]
   *       </dt>
   *       <dd>
   *         The credit card expiration year. Specify this to add a new card.
   *       </dd>
   *       <dt>
   *         boolean <var>is_new</var>
   *       </dt>
   *       <dd>
   *         Specify <tt>1</tt> to add a new card, or <tt>0</tt> to use a saved card.
   *       </dd>
   *       <dt>
   *         string [<var>k_pay_bank</var>]
   *       </dt>
   *       <dd>
   *         The key of the credit card. Specify this to use saved card.
   *       </dd>
   *       <dt>
   *         string [<var>s_comment</var>]
   *       </dt>
   *       <dd>
   *         Optional comment(s). Specify this to add a new card.
   *       </dd>
   *       <dt>
   *         string [<var>s_number</var>]
   *       </dt>
   *       <dd>
   *         The card number. Specify this to add a new card.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     string <var>f_amount</var>
   *   </dt>
   *   <dd>
   *     The amount of money to withdraw with this payment source.
   *   </dd>
   *   <dt>
   *     boolean [<var>is_hide</var>]
   *   </dt>
   *   <dt>
   *     bool [<var>is_save</var>=true]
   *   </dt>
   *   <dd>
   *     Whether payment method should be saved to user's account.
   *   </dd>
   *   <dd>
   *     Determines whether this payment method is hidden.
   *   </dd>
   *   <dt>
   *     boolean [<var>is_success</var>=<tt>false</tt>]
   *   </dt>
   *   <dd>
   *     Identifies whether this source was successfully charged.
   *   </dd>
   *   <dt>
   *     string [<var>m_surcharge</var>]
   *   </dt>
   *   <dd>
   *     The client-side calculated surcharge.
   *   </dd>
   *   <dt>
   *     string [<var>s_index</var>]
   *   </dt>
   *   <dd>
   *     The index of this form (optional).
   *   </dd>
   *   <dt>
   *     string <var>sid_pay_method</var>
   *   </dt>
   *   <dd>
   *     The payment method ID.
   *   </dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Pay_Account_Charge_ChargeModel_a_pay_form[]}
   */
  this.a_pay_form = [];

  /**
   * The source mode key. One of the {@link Wl_Mode_ModeSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * The account charge mode.
   *
   * One of the {@link RsPayAccountChargeSid} constants.
   *
   * @post get
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
   * In such cases, {@link Wl_Pay_Account_Charge_ChargeModel.k_pay_account} should be passed instead.
   *
   * If both the business ID and account ID passed, the system checks if the given business is the owner of the specified account.
   *
   * @post get
   * @type {string}
   */
  this.k_business = 0;

  /**
   * The ID of the user account to refill.
   *
   * This may be 0 if a user account hasn't been created yet.
   * In such cases, {@link Wl_Pay_Account_Charge_ChargeModel.k_business} and {@link Wl_Pay_Account_Charge_ChargeModel.uid} should be passed instead.
   *
   * If not passed, the currency of account equals the default business currency.
   *
   * @post get
   * @type {string}
   */
  this.k_pay_account = 0;

  /**
   * The ID of the purchase that was created during payment. This value is only returned in cases where a purchase was created.
   * A new purchase is created when {@link Wl_Pay_Account_Charge_ChargeModel.id_pay_account_charge} equals {@link RsPayAccountChargeSid.AUTO}.
   *
   * @post result
   * @type {*}
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
   * In such cases, {@link Wl_Pay_Account_Charge_ChargeModel.k_pay_account} should be passed instead.
   *
   * If both the user ID and account ID passed, the system checks if the given user is the owner of the specified account.
   *
   * @post get
   * @type {string}
   */
  this.uid = 0;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Account_Charge_ChargeModel);

/**
 * @inheritDoc
 */
Wl_Pay_Account_Charge_ChargeModel.prototype.config=function()
{
  return {"a_field": {"a_pay_form": {"post": {"post": true}},"id_mode": {"post": {"post": true}},"id_pay_account_charge": {"post": {"get": true}},"is_staff": {"post": {"get": true}},"k_business": {"post": {"get": true}},"k_pay_account": {"post": {"get": true}},"k_purchase": {"post": {"result": true}},"m_amount": {"post": {"post": true}},"s_comment": {"post": {"post": true}},"uid": {"post": {"get": true}}}};
};