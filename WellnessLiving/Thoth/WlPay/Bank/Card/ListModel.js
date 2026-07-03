/**
 * Retrieves information about user's bank cards.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Thoth_WlPay_Bank_Card_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business,k_location";

  /**
   * @typedef {{}} Thoth_WlPay_Bank_Card_ListModel_a_bank_card
   * @property {number} i_month The month when the payment card expires, represented by a number (1=January and 12=December).
   * @property {number} i_year The last two digits of the year when the payment card expires.
   * @property {?number} id_card_system A class for a list of card systems.
   * @property {boolean} is_default If `true`, then this card is the user default card. If `false`, then this isn't the user default card.
   * @property {string} k_pay_address The payment address ID. This refers to a physical address associated with a payment card.
   * @property {string} k_pay_bank The payment method ID. Each payment card for each user will have its own ID.
   * @property {string} text_name_card The payment card descriptor. This is typically the company name and the last 4 digits of the card (for example, visa-5903).
   * @property {string} text_name_holder The name of the card owner as it appears on the card.
   * @property {string} text_number A portion of the payment card number, used to identify the card. This is typically the last 4 digits of the card number.
   */

  /**
   * A list of bank cards.
   * The array keys are the card `k_pay_bank` IDs.
   * Each element has the following keys:
   *
   * @get result
   * @type {Thoth_WlPay_Bank_Card_ListModel_a_bank_card}
   */
  this.a_bank_card = undefined;

  /**
   * @typedef {{}} Thoth_WlPay_Bank_Card_ListModel_a_list
   * @property {number} i_month The month when the payment card expires, represented by a number (1=January and 12=December).
   * @property {number} i_year The last two digits of the year when the payment card expires.
   * @property {?number} id_card_system A class for a list of card systems.
   * @property {boolean} is_default If `true`, then this card is the user default card. If `false`, then this isn't the user default card.
   * @property {string} k_pay_address The payment address ID. This refers to a physical address associated with a payment card.
   * @property {string} k_pay_bank The payment method ID. Each payment card for each user will have its own ID.
   * @property {string} text_name_card The payment card descriptor. This is typically the company name and the last 4 digits of the card (for example, visa-5903).
   * @property {string} text_name_holder The name of the card owner as it appears on the card.
   * @property {string} text_number A portion of the payment card number, used to identify the card. This is typically the last 4 digits of the card number.
   */

  /**
   * List of bank cards.
   * Duplicate of {@link Thoth_WlPay_Bank_Card_ListModel} as a flat indexed array.
   *
   * @get result
   * @type {Thoth_WlPay_Bank_Card_ListModel_a_list[]}
   */
  this.a_list = undefined;

  /**
   * Whether new card can be added.
   *
   * `true` if new cards can be added.
   * `false` if new cards can not be added.
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

WlSdk_ModelAbstract.extend(Thoth_WlPay_Bank_Card_ListModel);

/**
 * @inheritDoc
 */
Thoth_WlPay_Bank_Card_ListModel.prototype.config=function()
{
  return {"a_field":{"a_bank_card":{"get":{"result":true}},"a_list":{"get":{"result":true}},"can_add":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_location":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Thoth_WlPay_Bank_Card_ListModel.instanceGet
 * @param {string} uid ID of a user to show information for.
 * @param {string} k_business ID of current business.
 * @param {string} k_location Location to show information for. `0` to use user's home location.
 * @returns {Thoth_WlPay_Bank_Card_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves information about user's bank cards.
 *
 * Returns the list of saved payment cards for the specified user and business, including card number fragment,
 * expiry date, card system, holder name, and default status. Also returns whether new cards can be added.
 *
 * @function
 * @name Thoth_WlPay_Bank_Card_ListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
