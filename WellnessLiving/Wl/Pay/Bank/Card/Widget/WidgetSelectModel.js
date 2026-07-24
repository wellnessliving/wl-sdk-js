/**
 * Gets a list of saved bank cards.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Bank_Card_Widget_WidgetSelectModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "id_pay_method,id_pay_owner,k_id,k_business,k_currency,k_location,id_pay_mode";

  /**
   * @typedef {{}} Wl_Pay_Bank_Card_Widget_WidgetSelectModel_a_pay_card
   * @property {?number} eid_card_type Payment card type enum case. `null` if card type is not set.
   * @property {number} i_month Card expiration month.
   * @property {number} i_year Card expiration year.
   * @property {number} id_card_system Card system ID. One of {@link Wl_Card_CardSystemSid} constants.
   * @property {?number} id_card_type Payment card type ID. One of {@link Thoth_WlPay_Bank_Card_CardTypeEnum} constants as int.
   * @property {number} id_pay_processor Payment processor ID. One of {@link Thoth_PayProcessor_PayProcessorSid} constants.
   * @property {boolean} is_default `true` if this card is the default payment method; `false` otherwise.
   * @property {string} k_pay_address Billing address key.
   * @property {string} k_pay_bank Payment card key.
   * @property {string} k_pay_recurrent Recurrent payment token key.
   * @property {string} k_region Billing region key.
   * @property {string} s_name Card nickname. Auto-generated from card system and masked number if not explicitly set.
   * @property {string} s_number Partial card number.
   * @property {string} sid_card_system Card system SID. One of {@link Wl_Card_CardSystemSid} constants as string.
   * @property {string} text_city Billing city.
   * @property {string} text_country Country name resolved from the region's parent geo entity. Empty if region has no parent.
   * @property {string} text_holder Cardholder name.
   * @property {string} text_postal Billing postal code.
   * @property {string} text_public_token Public representation of the recurrent payment token, safe for browser output.
   * @property {string} text_region Region name resolved from the region key. Empty if no region is set.
   * @property {string} text_street_1 Billing street address line 1.
   * @property {string} text_street_2 Billing street address line 2.
   */

  /**
   * List of saved bank cards.
   *
   * @get result
   * @type {Wl_Pay_Bank_Card_Widget_WidgetSelectModel_a_pay_card}
   */
  this.a_pay_card = undefined;

  /**
   * Payment method.
   *
   * @get get
   * @see RsPayMethodSid
   * @type {?number}
   */
  this.id_pay_method = null;

  /**
   * Payment mode.
   *
   * @get get
   * @see RsPayModeSid
   * @type {number}
   */
  this.id_pay_mode = 0;

  /**
   * Payment owner kind.
   * Must be {@link RsPayOwnerSid} or {@link RsPayOwnerSid}.
   *
   * @get get
   * @see RsPayOwnerSid
   * @type {number}
   */
  this.id_pay_owner = 0;

  /**
   * Business key.
   * `null` if use system business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Currency key.
   *
   * @get get
   * @type {string}
   */
  this.k_currency = "";

  /**
   * Payment owner.
   * Must be primary key of a business or a user.
   *
   * @get get
   * @type {string}
   */
  this.k_id = "";

  /**
   * Location key.
   * `null` to use system-wide merchant.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Bank_Card_Widget_WidgetSelectModel);

/**
 * @inheritDoc
 */
Wl_Pay_Bank_Card_Widget_WidgetSelectModel.prototype.config=function()
{
  return {"a_field":{"a_pay_card":{"get":{"result":true}},"id_pay_method":{"get":{"get":true}},"id_pay_mode":{"get":{"get":true}},"id_pay_owner":{"get":{"get":true}},"k_business":{"get":{"get":true}},"k_currency":{"get":{"get":true}},"k_id":{"get":{"get":true}},"k_location":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Pay_Bank_Card_Widget_WidgetSelectModel.instanceGet
 * @param {?number} id_pay_method Payment method.
 * @param {number} id_pay_owner Payment owner kind. Must be {@link RsPayOwnerSid} or {@link RsPayOwnerSid}.
 * @param {string} k_id Payment owner. Must be primary key of a business or a user.
 * @param {string} k_business Business key. `null` if use system business.
 * @param {string} k_currency Currency key.
 * @param {string} k_location Location key. `null` to use system-wide merchant.
 * @param {number} id_pay_mode Payment mode.
 * @returns {Wl_Pay_Bank_Card_Widget_WidgetSelectModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets a list of saved bank cards.
 *
 * Validates the payment method, currency, business, location, and pay owner type, then loads the configured
 * merchant and returns the list of saved cards available to the given owner. For business owners, a system-wide
 * merchant must be configured; for users, a business-specific merchant is required.
 *
 * @function
 * @name Wl_Pay_Bank_Card_Widget_WidgetSelectModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
