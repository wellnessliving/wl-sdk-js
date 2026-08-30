/**
 * Deletes saved card.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @deprecated Make card widget in client side using `RsPayBankCardEditWidget` class.
 */
function Wl_Pay_Bank_Card_Add_AddModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_location,k_pay_owner";

  /**
   * @typedef {{}} Wl_Pay_Bank_Card_Add_AddModel_a_card_detail_a_pay_address
   * @property {boolean} is_new `true` - add new address. `false` - use existing address.
   * @property {string} k_geo_country The country key.
   * @property {string} k_geo_region The region key.
   * @property {string} k_pay_address The chosen payment address ID. THis will be set even if the user decided to add a new address.
   * @property {string} s_city The city name.
   * @property {string} s_name The user's name.
   * @property {string} s_phone The phone number.
   * @property {string} s_postal The postal code.
   * @property {string} s_street1 The first address line.
   * @property {string} s_street2 The second address line.
   */

  /**
   * @typedef {{}} Wl_Pay_Bank_Card_Add_AddModel_a_card_detail
   * @property {Wl_Pay_Bank_Card_Add_AddModel_a_card_detail_a_pay_address} a_pay_address Address information:
   * @property {number} i_csc The payment card security code, also known as the CVC or CVV.
   * @property {number} i_month The number of the month when the payment card expires. 1=January and 12=December.
   * @property {number} i_year The last two digits of the year when the payment card expires.
   * @property {number} id_pay_actor Pay actor id. One of {@link RsPayActorSid} constants.
   * @property {string} k_pay_bank Key of existing payment source in case of editing.  Empty if new pay source is being added.
   * @property {string} s_name The name as it appears on the payment card.
   * @property {string} s_number The payment card number with no spaces or dashes.
   */

  /**
   * An array containing payment card information with the following fields:
   *
   * @post post
   * @type {Wl_Pay_Bank_Card_Add_AddModel_a_card_detail}
   */
  this.a_card_detail = undefined;

  /**
   * The HTML form containing the fields required to add a card.
   *
   * @get result
   * @type {string}
   */
  this.html_widget = undefined;

  /**
   * The business key number used internally by WellnessLiving.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The location key.
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
   * The payment owner ID. This is different from the user ID. It can be found with
   * the {@link Thoth_WlPay_Owner_OwnerModel}.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_pay_owner = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Bank_Card_Add_AddModel);

/**
 * @inheritDoc
 */
Wl_Pay_Bank_Card_Add_AddModel.prototype.config=function()
{
  return {"a_field":{"a_card_detail":{"post":{"post":true}},"html_widget":{"get":{"result":true}},"k_business":{"delete":{"get":true},"get":{"get":true},"post":{"get":true}},"k_location":{"get":{"get":true},"post":{"get":true}},"k_pay_bank":{"delete":{"get":true}},"k_pay_owner":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Pay_Bank_Card_Add_AddModel.instanceGet
 * @param {string} k_business The business key number used internally by WellnessLiving.
 * @param {string} k_location The location key.
 * @param {string} k_pay_owner The payment owner ID. This is different from the user ID. It can be found with the {@link Thoth_WlPay_Owner_OwnerModel}.
 * @returns {Wl_Pay_Bank_Card_Add_AddModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Deletes saved card.
 *
 * Removes the payment card identified by `$k_pay_bank` from the specified business, permanently deleting
 * the stored card record.
 *
 * @function
 * @name Wl_Pay_Bank_Card_Add_AddModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Gets code of bank card widget.
 *
 * Returns an HTML snippet containing the card entry form rendered by the server-side widget for the given
 * payment owner. This method is deprecated; prefer building the card widget on the client side.
 *
 * @function
 * @name Wl_Pay_Bank_Card_Add_AddModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Saves new bank card.
 *
 * Validates the payment owner and business, then saves the new card details provided in `$a_card_detail`
 * and optionally sets the card as the default recurring payment source.
 *
 * @function
 * @name Wl_Pay_Bank_Card_Add_AddModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
