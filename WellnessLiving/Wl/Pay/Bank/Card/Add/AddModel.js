/**
 * An endpoint that adds a payment card to a user’s account.
 * The GET method retrieves an HTML code that contains the fields necessary to provide the information needed to
 * add the payment card.
 * The POST method will actually add the payment card.
 *
 * This endpoint using captcha check.
 * To pass captcha need study the documentation by captcha API, there you will find that you need to send a captcha for a specific action.
 * For this API an action is {@link Wl\Business\BusinessPaymentCaptcha::CID}.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
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
   * @property {string} k_pay_address The chosen payment address ID. THis will be set even if the user decided to add a new address.
   * @property {string} k_geo_country The country key.
   * @property {string} k_geo_region The region key.
   * @property {string} s_city The city name.
   * @property {string} s_name The user name.
   * @property {string} s_street1 The first address line.
   * @property {string} s_street2 The second address line.
   * @property {string} s_phone The phone number.
   * @property {string} s_postal The postal code.
   */
  /**
   * @typedef {{}} Wl_Pay_Bank_Card_Add_AddModel_a_card_detail
   * @property {Wl_Pay_Bank_Card_Add_AddModel_a_card_detail_a_pay_address} a_pay_address Address information:
   * <dl>
   *   <dt>bool <tt>is_new</tt></dt>
   *   <dd>`true` - add new address. `false` - use existing address.</dd>
   *   <dt>string <tt>k_pay_address</tt></dt>
   *   <dd>The chosen payment address ID. THis will be set even if the user decided to add a new address.</dd>
   *   <dt>string <tt>k_geo_country</tt></dt>
   *   <dd>The country key.</dd>
   *   <dt>string <tt>k_geo_region</tt></dt>
   *   <dd>The region key.</dd>
   *   <dt>string <tt>s_city</tt></dt>
   *   <dd>The city name.</dd>
   *   <dt>string <tt>s_name</tt></dt>
   *   <dd>The user name.</dd>
   *   <dt>string <tt>s_street1</tt></dt>
   *   <dd>The first address line.</dd>
   *   <dt>string <tt>s_street2</tt></dt>
   *   <dd>The second address line.</dd>
   *   <dt>string <tt>s_phone</tt></dt>
   *   <dd>The phone number.</dd>
   *   <dt>string <tt>s_postal</tt></dt>
   *   <dd>The postal code.</dd>
   * </dl>
   * @property {number} i_csc The payment card security code, also known as the CVC or CVV.
   * @property {number} i_month The number of the month when the payment card expires. 1=January and 12=December.
   * @property {number} i_year The last two digits of the year when the payment card expires.
   * @property {number} id_pay_actor Pay actor id. One of {@link RsPayActorSid} constants.
   * @property {string} k_pay_bank Key of existing payment source in case of editing.
   * Empty if new pay source is being added.
   * @property {string} s_name The name as it appears on the payment card.
   * @property {string} s_number The payment card number with no spaces or dashes.
   */

  /**
   * An array containing payment card information with the following fields:
   *
   * <dl>
   *   <dt>
   *     array <var>a_pay_address</var>
   *   </dt>
   *   <dd>
   *     Address information:
   *     <dl>
   *       <dt>bool <var>is_new</var></dt>
   *       <dd>`true` - add new address. `false` - use existing address.</dd>
   *       <dt>string <var>k_pay_address</var></dt>
   *       <dd>The chosen payment address ID. THis will be set even if the user decided to add a new address.</dd>
   *       <dt>string <var>k_geo_country</var></dt>
   *       <dd>The country key.</dd>
   *       <dt>string <var>k_geo_region</var></dt>
   *       <dd>The region key.</dd>
   *       <dt>string <var>s_city</var></dt>
   *       <dd>The city name.</dd>
   *       <dt>string <var>s_name</var></dt>
   *       <dd>The user name.</dd>
   *       <dt>string <var>s_street1</var></dt>
   *       <dd>The first address line.</dd>
   *       <dt>string <var>s_street2</var></dt>
   *       <dd>The second address line.</dd>
   *       <dt>string <var>s_phone</var></dt>
   *       <dd>The phone number.</dd>
   *       <dt>string <var>s_postal</var></dt>
   *       <dd>The postal code.</dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     int <var>i_csc</var>
   *   </dt>
   *   <dd>
   *     The payment card security code, also known as the CVC or CVV.
   *   </dd>
   *   <dt>
   *     int <var>i_month</var>
   *   </dt>
   *   <dd>
   *     The number of the month when the payment card expires. 1=January and 12=December.
   *   </dd>
   *   <dt>
   *     int <var>i_year</var>
   *   </dt>
   *   <dd>
   *     The last two digits of the year when the payment card expires.
   *   </dd>
   *   <dt>
   *     int <var>id_pay_actor</var>
   *   </dt>
   *   <dd>
   *     Pay actor id. One of {@link RsPayActorSid} constants.
   *   </dd>
   *   <dt>
   *     string <var>k_pay_bank</var>
   *   </dt>
   *   <dd>
   *     Key of existing payment source in case of editing.
   *     Empty if new pay source is being added.
   *   </dd>
   *   <dt>
   *     string <var>s_name</var>
   *   </dt>
   *   <dd>
   *     The name as it appears on the payment card.
   *   </dd>
   *   <dt>
   *     string <var>s_number</var>
   *   </dt>
   *   <dd>
   *     The payment card number with no spaces or dashes.
   *   </dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Pay_Bank_Card_Add_AddModel_a_card_detail}
   */
  this.a_card_detail = [];

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
  this.k_business = "0";

  /**
   * The location key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * Pay bank key to delete.
   *
   * @delete get
   * @type {string}
   */
  this.k_pay_bank = "0";

  /**
   * The payment owner ID. This is different from the user ID. It can be found with
   * the {@link Wl_Pay_Owner_OwnerModel}.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_pay_owner = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Bank_Card_Add_AddModel);

/**
 * @inheritDoc
 */
Wl_Pay_Bank_Card_Add_AddModel.prototype.config=function()
{
  return {"a_field": {"a_card_detail": {"post": {"post": true}},"html_widget": {"get": {"result": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}},"k_location": {"get": {"get": true},"post": {"get": true}},"k_pay_bank": {"delete": {"get": true}},"k_pay_owner": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Pay_Bank_Card_Add_AddModel.instanceGet
 * @param {string} k_business The business key number used internally by WellnessLiving.
 * @param {string} k_location The location key.
 * @param {string} k_pay_owner The payment owner ID. This is different from the user ID. It can be found with the {@link Wl_Pay_Owner_OwnerModel}.
 * @returns {Wl_Pay_Bank_Card_Add_AddModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */