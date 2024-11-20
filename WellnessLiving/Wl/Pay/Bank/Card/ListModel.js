/**
 * An endpoint that gets information about any payment cards belonging to a user.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Bank_Card_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business,k_location";

  /**
   * @typedef {{}} Wl_Pay_Bank_Card_ListModel_a_bank_card
   * @property {number} i_month The month when the payment card expires, represented by a number (1=January and 12=December).
   * @property {number} i_year The last two digits of the year when the payment card expires.
   * @property {number} id_card_system The card system ID. This is one of the {@link ACardSystemSid} constants.
   * @property {boolean} is_default If `true`, then this card is the user default card.
   * If `false`, then this isn't the user default card.
   * @property {string} k_pay_address The payment address ID. This refers to a physical address associated with a payment card.
   * @property {string} k_pay_bank The payment method ID. Each payment card for each user will have its own ID.
   * @property {string} text_name_card The payment card descriptor. This is typically the company name and the last 4 digits of the card
   * (for example, visa-5903).
   * @property {string} text_name_holder The name of the card owner as it appears on the card.
   * @property {string} text_number A portion of the payment card number, used to identify the card.
   * This is typically the last 4 digits of the card number.
   */

  /**
   * A list of bank cards.
   * The array keys are the card `k_pay_bank` IDs.
   * Each element has the following keys:
   * <dl>
   *   <dt>int <var>i_month</var></dt>
   *   <dd>The month when the payment card expires, represented by a number (1=January and 12=December).</dd>
   *   <dt>int <var>i_year</var></dt>
   *   <dd>The last two digits of the year when the payment card expires.</dd>
   *   <dt>int <var>id_card_system</var></dt>
   *   <dd>The card system ID. This is one of the {@link ACardSystemSid} constants.</dd>
   *   <dt>bool <var>is_default</var></dt>
   *   <dd>
   *     If `true`, then this card is the user default card.
   *     If `false`, then this isn't the user default card.
   *   </dd>
   *   <dt>string <var>k_pay_address</var></dt>
   *   <dd>The payment address ID. This refers to a physical address associated with a payment card.</dd>
   *   <dt>string <var>k_pay_bank</var></dt>
   *   <dd>The payment method ID. Each payment card for each user will have its own ID.</dd>
   *   <dt>string <var>text_name_card</var></dt>
   *   <dd>
   *     The payment card descriptor. This is typically the company name and the last 4 digits of the card
   *     (for example, visa-5903).
   *   </dd>
   *   <dt>string <var>text_name_holder</var></dt>
   *   <dd>The name of the card owner as it appears on the card.</dd>
   *   <dt>string <var>text_number</var></dt>
   *   <dd>
   *     A portion of the payment card number, used to identify the card.
   *     This is typically the last 4 digits of the card number.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Pay_Bank_Card_ListModel_a_bank_card}
   */
  this.a_bank_card = [];

  /**
   * List of bank cards.
   * Duplicate of the {@link Wl_Pay_Bank_Card_ListModel.a_bank_card}.
   *
   * @get result
   * @type {{}}
   */
  this.a_list = [];

  /**
   * Whether new card can be added.
   *
   * `true` if new cards can be added.
   * `false` if new cards can not be added.
   *
   * @get result
   * @type {boolean}
   */
  this.can_add = false;

  /**
   * ID of current business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Location to show information for.
   *
   * <tt>0</tt> to use user's home location.
   *
   * @get get
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * ID of a user to show information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Bank_Card_ListModel);

/**
 * @inheritDoc
 */
Wl_Pay_Bank_Card_ListModel.prototype.config=function()
{
  return {"a_field": {"a_bank_card": {"get": {"result": true}},"a_list": {"get": {"result": true}},"can_add": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_location": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Pay_Bank_Card_ListModel.instanceGet
 * @param {string} uid ID of a user to show information for.
 * @param {string} k_business ID of current business.
 * @param {string} k_location Location to show information for. <tt>0</tt> to use user's home location.
 * @returns {Wl_Pay_Bank_Card_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */