/**
 * Entry point to save ACH pay method.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Bank_Ach_Add_AddModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_location,k_pay_owner";

  /**
   * @typedef {{}} Wl_Pay_Bank_Ach_Add_AddModel_a_card_detail_a_pay_address
   * @property {boolean} is_new <tt>true</tt> - add new address; <tt>false</tt> - use existing address.
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
   * @typedef {{}} Wl_Pay_Bank_Ach_Add_AddModel_a_card_detail
   * @property {Wl_Pay_Bank_Ach_Add_AddModel_a_card_detail_a_pay_address} a_pay_address Payment address for {@link RsPayAddressSelectWidget} address edit widget:
   * <dl>
   *   <dt>bool <tt>is_new</tt></dt>
   *   <dd><tt>true</tt> - add new address; <tt>false</tt> - use existing address.</dd>
   *   <dt>string <tt>k_geo_country</tt></dt>
   *   <dd>Country ID.</dd>
   *   <dt>string <tt>k_geo_region</tt></dt>
   *   <dd>Region ID.</dd>
   *   <dt>string <tt>k_pay_address</tt></dt>
   *   <dd>Chosen payment address ID. It will be set even if user decided to add new address.</dd>
   *   <dt>string <tt>s_city</tt></dt>
   *   <dd>City name.</dd>
   *   <dt>string <tt>s_name</tt></dt>
   *   <dd>User name.</dd>
   *   <dt>string <tt>s_phone</tt></dt>
   *   <dd>Phone number.</dd>
   *   <dt>string <tt>s_postal</tt></dt>
   *   <dd>Postal code.</dd>
   *   <dt>string <tt>s_street1</tt></dt>
   *   <dd>First address line.</dd>
   *   <dt>string <tt>s_street2</tt></dt>
   *   <dd>Second address line.</dd>
   * </dl>
   * @property {number} id_pay_bank_ach_holder Account holder type. One of {@link RsPayBankAchHolderSid} constants.
   * @property {number} id_pay_bank_ach_sec SEC code. One of {@link RsPayBankAchSecSid} constants.
   * @property {number} id_pay_bank_ach_type Account type. One of {@link RsPayBankAchTypeSid} constants.
   * @property {boolean} is_default <tt>true</tt> - if a payment method is set as default, <tt>false</tt> - otherwise.
   * @property {string} s_aban ABA number.
   * @property {string} s_account Account number.
   * @property {string} s_name Bank account nickname.
   * @property {string} s_number Part of bank account number.
   * @property {string} s_owner Name of bank account owner.
   */

  /**
   * Array with ACH details from ACH widget.
   * <dl>
   *   <dt>array <var>a_pay_address</var></dt>
   *   <dd>
   *     Payment address for {@link RsPayAddressSelectWidget} address edit widget:
   *     <dl>
   *       <dt>bool <var>is_new</var></dt>
   *       <dd><tt>true</tt> - add new address; <tt>false</tt> - use existing address.</dd>
   *       <dt>string <var>k_geo_country</var></dt>
   *       <dd>Country ID.</dd>
   *       <dt>string <var>k_geo_region</var></dt>
   *       <dd>Region ID.</dd>
   *       <dt>string <var>k_pay_address</var></dt>
   *       <dd>Chosen payment address ID. It will be set even if user decided to add new address.</dd>
   *       <dt>string <var>s_city</var></dt>
   *       <dd>City name.</dd>
   *       <dt>string <var>s_name</var></dt>
   *       <dd>User name.</dd>
   *       <dt>string <var>s_phone</var></dt>
   *       <dd>Phone number.</dd>
   *       <dt>string <var>s_postal</var></dt>
   *       <dd>Postal code.</dd>
   *       <dt>string <var>s_street1</var></dt>
   *       <dd>First address line.</dd>
   *       <dt>string <var>s_street2</var></dt>
   *       <dd>Second address line.</dd>
   *     </dl>
   *   </dd>
   *   <dt>int <var>id_pay_bank_ach_holder</var></dt>
   *   <dd>Account holder type. One of {@link RsPayBankAchHolderSid} constants.</dd>
   *   <dt>int <var>id_pay_bank_ach_sec</var></dt>
   *   <dd>SEC code. One of {@link RsPayBankAchSecSid} constants.</dd>
   *   <dt>int <var>id_pay_bank_ach_type</var></dt>
   *   <dd>Account type. One of {@link RsPayBankAchTypeSid} constants.</dd>
   *   <dt>bool <var>is_default</var></dt>
   *   <dd><tt>true</tt> - if a payment method is set as default, <tt>false</tt> - otherwise.</dd>
   *   <dt>string <var>s_aban</var></dt>
   *   <dd>ABA number.</dd>
   *   <dt>string <var>s_account</var></dt>
   *   <dd>Account number.</dd>
   *   <dt>string <var>s_name</var></dt>
   *   <dd>Bank account nickname.</dd>
   *   <dt>string <var>s_number</var></dt>
   *   <dd>Part of bank account number.</dd>
   *   <dt>string <var>s_owner</var></dt>
   *   <dd>Name of bank account owner.</dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Pay_Bank_Ach_Add_AddModel_a_card_detail}
   */
  this.a_card_detail = [];

  /**
   * Business key. Primary key in {@link \RsBusinessSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Location key. Primary key in {@link \RsLocationSql} table.
   *
   * If empty, user's home location will be used.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * Pay owner key. Primary key in {@link \RsPayOwnerSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_pay_owner = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Bank_Ach_Add_AddModel);

/**
 * @inheritDoc
 */
Wl_Pay_Bank_Ach_Add_AddModel.prototype.config=function()
{
  return {"a_field": {"a_card_detail": {"post": {"post": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_location": {"get": {"get": true},"post": {"get": true}},"k_pay_owner": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Pay_Bank_Ach_Add_AddModel.instanceGet
 * @param {string} k_business Business key. Primary key in {@link \RsBusinessSql} table.
 * @param {string} k_location Location key. Primary key in {@link \RsLocationSql} table. If empty, user's home location will be used.
 * @param {string} k_pay_owner Pay owner key. Primary key in {@link \RsPayOwnerSql} table.
 * @returns {Wl_Pay_Bank_Ach_Add_AddModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */