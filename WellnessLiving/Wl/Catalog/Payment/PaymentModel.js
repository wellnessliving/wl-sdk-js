/**
 * Purchases an item and performs the payment in the store.
 *
 * This endpoint uses a CAPTCHA check. To pass the CAPTCHA, consult the CAPTCHA API documentation.
 * The documentation specifies that a captcha must be sent for a specific action.
 *
 * For this API an action is `1064`.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Catalog_Payment_PaymentModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Catalog_Payment_PaymentModel_a_commission
   * @property {string} k_staff The staff key.
   * @property {string} k_staff_pay The payment schema key.
   */

  /**
   * The staff commission earned for this purchase. If this isn't empty, it has the next fields: <dl>
   *   <dt>string <var>k_staff</var></dt>
   *   <dd>The staff key.</dd>
   *   <dt>string <var>k_staff_pay</var></dt>
   *   <dd>The payment schema key.</dd>
   * </dl>
   *
   * @post get
   * @type {Wl_Catalog_Payment_PaymentModel_a_commission}
   */
  this.a_commission = [];

  /**
   * @typedef {{}} Wl_Catalog_Payment_PaymentModel_a_item_a_config_a_tax_custom
   * @property {string} f_tax The tax amount.
   * @property {string} k_tax The tax key.
   */
  /**
   * @typedef {{}} Wl_Catalog_Payment_PaymentModel_a_item_a_config_a_quick_gift_a_wellness_program
   * @property {{}} a_account See {@link Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel.a_account} for a full description.
   * @property {{}} a_field See {@link Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel.a_field} for a full description.
   */
  /**
   * @typedef {{}} Wl_Catalog_Payment_PaymentModel_a_item_a_config_a_quick_gift
   * @property {number} i_count The quantity of elements.
   * @property {number} id_purchase_item The purchase type of the element. One of the {@link RsPurchaseItemSid} constants.
   * @property {string} k_id The primary key of the element, depending on the element type.
   */
  /**
   * @typedef {{}} Wl_Catalog_Payment_PaymentModel_a_item_a_config
   * @property {Wl_Catalog_Payment_PaymentModel_a_item_a_config_a_quick_gift[]} a_quick_gift A list of components to be added to the client. For quick gift cards only: <dl>
   * <dt>int <tt>i_count</tt></dt>
   * <dd>The quantity of elements.</dd>
   * <dt>int <tt>id_purchase_item</tt></dt>
   * <dd>The purchase type of the element. One of the {@link RsPurchaseItemSid} constants.</dd>
   * <dt>string <tt>k_id</tt></dt>
   * <dd>The primary key of the element, depending on the element type.</dd></dl>
   * @property {*} a_uid_share An array of UIDs representing the client's relatives that share the Purchase Option.
   * @property {Wl_Catalog_Payment_PaymentModel_a_item_a_config_a_quick_gift_a_wellness_program[]} a_wellness_program "Wellness Program" fields.
   *
   *  <tt>k_wellness_program</tt> must be passed along with this array. See the description below.
   *
   *  <dl>
   *    <dt>array <tt>a_account</tt></dt>
   *    <dd>See {@link Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel.a_account} for a full description.</dd>
   *    <dt>array <tt>a_field</tt></dt>
   *    <dd>See {@link Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel.a_field} for a full description.</dd>
   *  </dl>
   *
   *  It's recommended to validate the fields using the POST method of the {@link Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel} model.
   * @property {*} dt_prorate The prorate date, used only for memberships.
   * @property {*} dt_send_local The date when the gift card will be sent. This is only used for gift cards.
   * @property {*} dt_start The start date, used only for memberships.
   * @property {*} is_pay_when_start If `true`, the client won't be charged for this item until its start date. Otherwise, this will be `false`.
   * The Purchase Option must have a specified start date.
   * @property {*} is_prorate If this is set to `1`, this purchase will use the prorate rule. Otherwise, set this to `0`. This is only used for memberships.
   * @property {*} is_prorate_fix If this is set to `1`, the custom prorate amount will be used. Otherwise, set this to `0`. This is only used for memberships.
   * @property {*} is_prorate_only If this is set to `1`, this purchase is prorate only. Otherwise, set this to `0`. This is only used for memberships.
   * @property {*} is_renew If this is set to `1`, auto-renew will be enabled for the item. Otherwise, set this to `0`. This is only used for memberships.
   * @property {*} k_appointment The appointment key, used only for appointment add-ons.
   * @property {*} k_coupon_amount The key of the gift card amount, used only for gift cards.
   * @property {*} k_staff The "Wellness Program" key. Set this for the insurance membership promotion.
   *
   *  <tt>a_wellness_program</tt> array must be passed along with the key. See the array description above.
   *
   *  <p>Use the following models to work with this type of promotion:</p>
   *  <ul>
   *    <li>{@link Wl_Insurance_Catalog_ProgramListModel} to obtain list of active programs.</li>
   *    <li>{@link Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel} to get and validate fields for a given program.</li>
   *  </ul>
   * @property {*} k_wellness_program The staff member key, used only for appointment tips.
   * @property {*} m_prorate_custom The custom prorate price, used only memberships only. This is only used if <tt>is_prorate_fix</tt> is <tt>true</tt>.
   * @property {*} s_code The gift card code. This is required for gift cards.
   * @property {*} s_image The key of the image for the gift card. If empty, the business's first gift card image will be used. Specify this only for gift cards.
   * @property {*} s_mail The gift card receiver email. This is required for gift cards.
   * @property {*} s_recipient The gift card receiver name. This is required for gift cards.
   * @property {*} s_sender The gift card sender name. This is required for gift cards.
   * @property {string} [uid_to] Specifies the recipient of a transfer Purchase Option.
   */
  /**
   * @typedef {{}} Wl_Catalog_Payment_PaymentModel_a_item
   * @property {Wl_Catalog_Payment_PaymentModel_a_item_a_config[]} a_config Additional configuration information. This may contain the next keys:
   * <dl>
   *   <dt>
   *     array [<tt>a_quick_gift</tt>]
   *   </dt>
   *   <dd>
   *     A list of components to be added to the client. For quick gift cards only: <dl>
   *     <dt>int <tt>i_count</tt></dt>
   *     <dd>The quantity of elements.</dd>
   *     <dt>int <tt>id_purchase_item</tt></dt>
   *     <dd>The purchase type of the element. One of the {@link RsPurchaseItemSid} constants.</dd>
   *     <dt>string <tt>k_id</tt></dt>
   *     <dd>The primary key of the element, depending on the element type.</dd></dl>
   *   </dd>
   *   <dt>
   *     array [<tt>a_uid_share</tt>]
   *   </dt>
   *   <dd>
   *     An array of UIDs representing the client's relatives that share the Purchase Option.
   *   </dd>
   *   <dt>
   *     array [<tt>a_wellness_program</tt>]
   *   </dt>
   *   <dd>
   *      "Wellness Program" fields.
   *
   *      <tt>k_wellness_program</tt> must be passed along with this array. See the description below.
   *
   *      <dl>
   *        <dt>array <tt>a_account</tt></dt>
   *        <dd>See {@link Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel.a_account} for a full description.</dd>
   *        <dt>array <tt>a_field</tt></dt>
   *        <dd>See {@link Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel.a_field} for a full description.</dd>
   *      </dl>
   *
   *      It's recommended to validate the fields using the POST method of the {@link Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel} model.
   *   </dd>
   *   <dt>
   *     string [<tt>dt_prorate</tt>]
   *   </dt>
   *   <dd>
   *     The prorate date, used only for memberships.
   *   </dd>
   *   <dt>
   *     string [<tt>dt_send_local</tt>]
   *   </dt>
   *   <dd>
   *     The date when the gift card will be sent. This is only used for gift cards.
   *   </dd>
   *   <dt>
   *     string [<tt>dt_start</tt>]
   *   </dt>
   *   <dd>
   *     The start date, used only for memberships.
   *   </dd>
   *   <dt>
   *     bool [<tt>is_pay_when_start</tt>]
   *   </dt>
   *   <dd>
   *     If `true`, the client won't be charged for this item until its start date. Otherwise, this will be `false`.
   *     The Purchase Option must have a specified start date.
   *   </dd>
   *   <dt>
   *     bool [<tt>is_prorate</tt>]
   *   </dt>
   *   <dd>
   *     If this is set to `1`, this purchase will use the prorate rule. Otherwise, set this to `0`. This is only used for memberships.
   *   </dd>
   *   <dt>
   *     bool [<tt>is_prorate_fix</tt>]
   *   </dt>
   *   <dd>
   *     If this is set to `1`, the custom prorate amount will be used. Otherwise, set this to `0`. This is only used for memberships.
   *   </dd>
   *   <dt>
   *     bool [<tt>is_prorate_only</tt>]
   *   </dt>
   *   <dd>
   *     If this is set to `1`, this purchase is prorate only. Otherwise, set this to `0`. This is only used for memberships.
   *   </dd>
   *   <dt>
   *     bool [<tt>is_renew</tt>]
   *   </dt>
   *   <dd>
   *     If this is set to `1`, auto-renew will be enabled for the item. Otherwise, set this to `0`. This is only used for memberships.
   *   </dd>
   *   <dt>
   *     string [<tt>k_appointment</tt>]
   *   </dt>
   *   <dd>
   *     The appointment key, used only for appointment add-ons.
   *   </dd>
   *   <dt>
   *     string [<tt>k_coupon_amount</tt>]
   *   </dt>
   *   <dd>
   *     The key of the gift card amount, used only for gift cards.
   *   </dd>
   *   <dt>
   *     string [<tt>k_staff</tt>]
   *   </dt>
   *   <dt>
   *     string [<tt>k_wellness_program</tt>]
   *   </dt>
   *   <dd>
   *      The "Wellness Program" key. Set this for the insurance membership promotion.
   *
   *      <tt>a_wellness_program</tt> array must be passed along with the key. See the array description above.
   *
   *      <p>Use the following models to work with this type of promotion:</p>
   *      <ul>
   *        <li>{@link Wl_Insurance_Catalog_ProgramListModel} to obtain list of active programs.</li>
   *        <li>{@link Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel} to get and validate fields for a given program.</li>
   *      </ul>
   *   </dd>
   *   <dd>
   *     The staff member key, used only for appointment tips.
   *   </dd>
   *   <dt>
   *     string [<tt>m_prorate_custom</tt>]
   *   </dt>
   *   <dd>
   *     The custom prorate price, used only memberships only. This is only used if <tt>is_prorate_fix</tt> is <tt>true</tt>.
   *   </dd>
   *   <dt>
   *     string [<tt>s_code</tt>]
   *   </dt>
   *   <dd>
   *     The gift card code. This is required for gift cards.
   *   </dd>
   *   <dt>
   *     string [<tt>s_image</tt>]
   *   </dt>
   *   <dd>
   *     The key of the image for the gift card. If empty, the business's first gift card image will be used. Specify this only for gift cards.
   *   </dd>
   *   <dt>
   *     string [<tt>s_mail</tt>]
   *   </dt>
   *   <dd>
   *     The gift card receiver email. This is required for gift cards.
   *   </dd>
   *   <dt>
   *     string [<tt>s_recipient</tt>]
   *   </dt>
   *   <dd>
   *     The gift card receiver name. This is required for gift cards.
   *   </dd>
   *   <dt>
   *     string [<tt>s_sender</tt>]
   *   </dt>
   *   <dd>
   *     The gift card sender name. This is required for gift cards.
   *   </dd>
   *   <dt>
   *     string <tt>[uid_to]</tt>
   *   </dt>
   *   <dd>
   *     Specifies the recipient of a transfer Purchase Option.
   *   </dd>
   * </dl>
   * @property {Wl_Catalog_Payment_PaymentModel_a_item_a_config_a_tax_custom[]} a_tax_custom Customer taxes (optional). Every element must contain the following keys:
   * <dl><dt>string <tt>f_tax</tt></dt><dd>The tax amount.</dd>
   * <dt>string <tt>k_tax</tt></dt><dd>The tax key.</dd></dl>
   * @property {*} html_contract The contract text. This is only required for items that require contract signing.
   * @property {number} i_quantity The item quantity.
   * @property {number} id_sale The item type ID. One of the {@link RsSaleSid} constants.
   * @property {string} k_id The item key.
   * @property {*} k_shop_product_option The product option key, required only for products.
   * @property {*} m_price_custom The custom price (optional).
   * @property {string} [s_signature] The client signature, used for items that require a signed contract.
   */

  /**
   * The list of items in the cart.
   *
   * This parameter is required.
   *
   * Every element must have the following keys:
   * <dl>
   *   <dt>
   *     array [<var>a_config</var>]
   *   </dt>
   *   <dd>
   *     Additional configuration information. This may contain the next keys:
   *     <dl>
   *       <dt>
   *         array [<var>a_quick_gift</var>]
   *       </dt>
   *       <dd>
   *         A list of components to be added to the client. For quick gift cards only: <dl>
   *         <dt>int <var>i_count</var></dt>
   *         <dd>The quantity of elements.</dd>
   *         <dt>int <var>id_purchase_item</var></dt>
   *         <dd>The purchase type of the element. One of the {@link RsPurchaseItemSid} constants.</dd>
   *         <dt>string <var>k_id</var></dt>
   *         <dd>The primary key of the element, depending on the element type.</dd></dl>
   *       </dd>
   *       <dt>
   *         array [<var>a_uid_share</var>]
   *       </dt>
   *       <dd>
   *         An array of UIDs representing the client's relatives that share the Purchase Option.
   *       </dd>
   *       <dt>
   *         array [<var>a_wellness_program</var>]
   *       </dt>
   *       <dd>
   *          "Wellness Program" fields.
   *
   *          <var>k_wellness_program</var> must be passed along with this array. See the description below.
   *
   *          <dl>
   *            <dt>array <var>a_account</var></dt>
   *            <dd>See {@link Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel.a_account} for a full description.</dd>
   *            <dt>array <var>a_field</var></dt>
   *            <dd>See {@link Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel.a_field} for a full description.</dd>
   *          </dl>
   *
   *          It's recommended to validate the fields using the POST method of the {@link Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel} model.
   *       </dd>
   *       <dt>
   *         string [<var>dt_prorate</var>]
   *       </dt>
   *       <dd>
   *         The prorate date, used only for memberships.
   *       </dd>
   *       <dt>
   *         string [<var>dt_send_local</var>]
   *       </dt>
   *       <dd>
   *         The date when the gift card will be sent. This is only used for gift cards.
   *       </dd>
   *       <dt>
   *         string [<var>dt_start</var>]
   *       </dt>
   *       <dd>
   *         The start date, used only for memberships.
   *       </dd>
   *       <dt>
   *         bool [<var>is_pay_when_start</var>]
   *       </dt>
   *       <dd>
   *         If `true`, the client won't be charged for this item until its start date. Otherwise, this will be `false`.
   *         The Purchase Option must have a specified start date.
   *       </dd>
   *       <dt>
   *         bool [<var>is_prorate</var>]
   *       </dt>
   *       <dd>
   *         If this is set to `1`, this purchase will use the prorate rule. Otherwise, set this to `0`. This is only used for memberships.
   *       </dd>
   *       <dt>
   *         bool [<var>is_prorate_fix</var>]
   *       </dt>
   *       <dd>
   *         If this is set to `1`, the custom prorate amount will be used. Otherwise, set this to `0`. This is only used for memberships.
   *       </dd>
   *       <dt>
   *         bool [<var>is_prorate_only</var>]
   *       </dt>
   *       <dd>
   *         If this is set to `1`, this purchase is prorate only. Otherwise, set this to `0`. This is only used for memberships.
   *       </dd>
   *       <dt>
   *         bool [<var>is_renew</var>]
   *       </dt>
   *       <dd>
   *         If this is set to `1`, auto-renew will be enabled for the item. Otherwise, set this to `0`. This is only used for memberships.
   *       </dd>
   *       <dt>
   *         string [<var>k_appointment</var>]
   *       </dt>
   *       <dd>
   *         The appointment key, used only for appointment add-ons.
   *       </dd>
   *       <dt>
   *         string [<var>k_coupon_amount</var>]
   *       </dt>
   *       <dd>
   *         The key of the gift card amount, used only for gift cards.
   *       </dd>
   *       <dt>
   *         string [<var>k_staff</var>]
   *       </dt>
   *       <dt>
   *         string [<var>k_wellness_program</var>]
   *       </dt>
   *       <dd>
   *          The "Wellness Program" key. Set this for the insurance membership promotion.
   *
   *          <var>a_wellness_program</var> array must be passed along with the key. See the array description above.
   *
   *          <p>Use the following models to work with this type of promotion:</p>
   *          <ul>
   *            <li>{@link Wl_Insurance_Catalog_ProgramListModel} to obtain list of active programs.</li>
   *            <li>{@link Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel} to get and validate fields for a given program.</li>
   *          </ul>
   *       </dd>
   *       <dd>
   *         The staff member key, used only for appointment tips.
   *       </dd>
   *       <dt>
   *         string [<var>m_prorate_custom</var>]
   *       </dt>
   *       <dd>
   *         The custom prorate price, used only memberships only. This is only used if <var>is_prorate_fix</var> is <tt>true</tt>.
   *       </dd>
   *       <dt>
   *         string [<var>s_code</var>]
   *       </dt>
   *       <dd>
   *         The gift card code. This is required for gift cards.
   *       </dd>
   *       <dt>
   *         string [<var>s_image</var>]
   *       </dt>
   *       <dd>
   *         The key of the image for the gift card. If empty, the business's first gift card image will be used. Specify this only for gift cards.
   *       </dd>
   *       <dt>
   *         string [<var>s_mail</var>]
   *       </dt>
   *       <dd>
   *         The gift card receiver email. This is required for gift cards.
   *       </dd>
   *       <dt>
   *         string [<var>s_recipient</var>]
   *       </dt>
   *       <dd>
   *         The gift card receiver name. This is required for gift cards.
   *       </dd>
   *       <dt>
   *         string [<var>s_sender</var>]
   *       </dt>
   *       <dd>
   *         The gift card sender name. This is required for gift cards.
   *       </dd>
   *       <dt>
   *         string <var>[uid_to]</var>
   *       </dt>
   *       <dd>
   *         Specifies the recipient of a transfer Purchase Option.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     array[] [<var>a_tax_custom</var>]
   *   </dt>
   *   <dd>
   *     Customer taxes (optional). Every element must contain the following keys:
   *     <dl><dt>string <var>f_tax</var></dt><dd>The tax amount.</dd>
   *     <dt>string <var>k_tax</var></dt><dd>The tax key.</dd></dl>
   *   </dd>
   *   <dt>
   *     string [<var>html_contract</var>]
   *   </dt>
   *   <dd>
   *     The contract text. This is only required for items that require contract signing.
   *   </dd>
   *   <dt>
   *     int <var>i_quantity</var>
   *   </dt>
   *   <dd>
   *     The item quantity.
   *   </dd>
   *   <dt>
   *     int <var>id_sale</var>
   *   </dt>
   *   <dd>
   *     The item type ID. One of the {@link RsSaleSid} constants.
   *   </dd>
   *   <dt>
   *     string <var>k_id</var>
   *   </dt>
   *   <dd>
   *     The item key.
   *   </dd>
   *   <dt>
   *     string [<var>k_shop_product_option</var>]
   *   </dt>
   *   <dd>
   *     The product option key, required only for products.
   *   </dd>
   *   <dt>
   *     string [<var>m_price_custom</var>]
   *   </dt>
   *   <dd>
   *     The custom price (optional).
   *   </dd>
   *   <dt>
   *     string <var>[s_signature]</var>
   *   </dt>
   *   <dd>
   *     The client signature, used for items that require a signed contract.
   *   </dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Catalog_Payment_PaymentModel_a_item[]}
   */
  this.a_item = [];

  /**
   * @typedef {{}} Wl_Catalog_Payment_PaymentModel_a_pay_form_a_pay_card_a_pay_address
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
   * @typedef {{}} Wl_Catalog_Payment_PaymentModel_a_pay_form_a_pay_card
   * @property {Wl_Catalog_Payment_PaymentModel_a_pay_form_a_pay_card_a_pay_address} a_pay_address The payment address:
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
   * @typedef {{}} Wl_Catalog_Payment_PaymentModel_a_pay_form
   * @property {Wl_Catalog_Payment_PaymentModel_a_pay_form_a_pay_card[]} a_pay_card The payment card information:
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
   * @type {Wl_Catalog_Payment_PaymentModel_a_pay_form[]}
   */
  this.a_pay_form = [];

  /**
   * The list of quiz response keys.
   * Keys refer to quiz keys.
   * And values refer to responses.
   * Or special values from the {@link Wl\Quiz\Response\QuizResponse::RESPONSE_SKIP} constant.
   *
   * @post post
   * @type {{}}
   */
  this.a_quiz_response = [];

  /**
   * The percentage discount (optional).
   *
   * @post post
   * @type {number}
   */
  this.f_discount_percent = 0;

  /**
   * The WellnessLiving mode type (required). One of the {@link Wl_Mode_ModeSid} constants.
   *
   * @post get
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * Determines if the payment owner is an anonymous user (optional).
   *
   * @post get
   * @type {boolean}
   */
  this.is_guest = false;

  /**
   * Specify this if operations are performed by the staff member (optional).
   *
   * @post get
   * @type {boolean}
   */
  this.is_staff = false;

  /**
   * The business key (required).
   *
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The location key (required).
   *
   * @post get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The key of login activity.
   *
   * This will be `null` if not set yet.
   *
   * @post result
   * @type {?string}
   */
  this.k_login_activity = null;

  /**
   * The installment template key (optional).
   * This will be `null` if the installment plan doesn't exist or isn't set for the purchased item.
   *
   * @post post
   * @type {string}
   */
  this.k_pay_installment_template = undefined;

  /**
   * The purchase key created during payment.
   *
   * @post result
   * @type {string}
   */
  this.k_purchase = undefined;

  /**
   * The visit key to be paid (optional).
   *
   * @post post
   * @type {string}
   */
  this.k_visit = "0";

  /**
   * The amount to discount (optional).
   *
   * @post post
   * @type {string}
   */
  this.m_discount_flat = "0";

  /**
   * The manual surcharge amount.
   *
   * An empty string represents an automatic surcharge amount.
   *
   * @post post
   * @type {string}
   */
  this.m_surcharge = undefined;

  /**
   * The tip amount (optional).
   *
   * @post post
   * @type {string}
   */
  this.m_tip = "0";

  /**
   * The discount code (optional).
   *
   * @post post
   * @type {string}
   */
  this.text_discount_code = "";

  /**
   * The custom receipt note.
   *
   * @post post
   * @type {string}
   */
  this.text_receipt_note = "";

  /**
   * The user's key (required).
   *
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_Payment_PaymentModel);

/**
 * @inheritDoc
 */
Wl_Catalog_Payment_PaymentModel.prototype.config=function()
{
  return {"a_field": {"a_commission": {"post": {"get": true}},"a_item": {"post": {"post": true}},"a_pay_form": {"post": {"post": true}},"a_quiz_response": {"post": {"post": true}},"f_discount_percent": {"post": {"post": true}},"id_mode": {"post": {"get": true}},"is_guest": {"post": {"get": true}},"is_staff": {"post": {"get": true}},"k_business": {"post": {"get": true}},"k_location": {"post": {"get": true}},"k_login_activity": {"post": {"result": true}},"k_pay_installment_template": {"post": {"post": true}},"k_purchase": {"post": {"result": true}},"k_visit": {"post": {"post": true}},"m_discount_flat": {"post": {"post": true}},"m_surcharge": {"post": {"post": true}},"m_tip": {"post": {"post": true}},"text_discount_code": {"post": {"post": true}},"text_receipt_note": {"post": {"post": true}},"uid": {"post": {"get": true}}}};
};