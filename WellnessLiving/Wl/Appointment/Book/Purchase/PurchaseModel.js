/**
 * An endpoint that retrieves information about service categories.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Purchase_PurchaseModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "dt_date,k_location,k_service,k_resource,i_duration,is_backend,uid,k_timezone";

  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_PurchaseModel_a_login_prize
   * @property {number} i_count Login prize remaining quantity.
   * @property {string} k_login_prize Key of login prize.
   * @property {string} text_description User friendly login prize description.
   */

  /**
   * Data about login prize which can be used to pay for service.
   * <dl>
   *   <dt>int <var>i_count</var></dt><dd>Login prize remaining quantity.</dd>
   *   <dt>string <var>k_login_prize</var></dt><dd>Key of login prize.</dd>
   *   <dt>string <var>text_description</var></dt><dd>User friendly login prize description.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Purchase_PurchaseModel_a_login_prize}
   */
  this.a_login_prize = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_PurchaseModel_a_login_promotion_a_login_promotion_info_a_restrict_a_restrict_data
   * @property {number} i_book The count of future sessions that are paid with this Purchase Option.
   * @property {number} i_limit The limit of visits for the restriction period.
   * @property {number} i_remain The number of remaining visits for the restriction period.
   * @property {number} i_use The usage count of the Purchase Option.
   * @property {number} i_visit_past The count of attended sessions before the last renewal.
   * This will be `0` if no sessions before the last renewal or if the Purchase Option doesn't auto-renew.
   * @property {string} text_restriction The description of restriction period. For example, "this week" or "for a four-day period".
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_PurchaseModel_a_login_promotion_a_login_promotion_info_a_restrict
   * @property {number} i_limit The limit of visits for the shortest restriction period.
   * @property {number} i_remain The number of remaining visits for the shortest restriction period.
   * @property {string} text_restriction The description of the shortest restriction period. For example "this week" or "for a four-day period".
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_PurchaseModel_a_login_promotion_a_login_promotion_info
   * @property {number} i_limit The count of visits that the Purchase Option allows the client to make.
   * @property {?number} i_limit_duration The maximum number of minutes that current Purchase Option can be used for.
   * @property {number} i_remain The count of the remaining visits.
   * @property {?number} i_remain_duration The number of minutes left in this Purchase Option.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_PurchaseModel_a_login_promotion
   * @property {Wl_Appointment_Book_Purchase_PurchaseModel_a_login_promotion_a_login_promotion_info} a_login_promotion_info Information about the Purchase Option. It contains the following information:
   *  <dl>
   *    <dt>int <tt>i_limit</tt></dt>
   *    <dd>The count of visits that the Purchase Option allows the client to make.</dd>
   *    <dt>int|null <tt>i_limit_duration</tt></dt>
   *    <dd>The maximum number of minutes that current Purchase Option can be used for.</dd>
   *    <dt>int <tt>i_remain</tt></dt>
   *    <dd>The count of the remaining visits.</dd>
   *    <dt>int|null <tt>i_remain_duration</tt></dt>
   *    <dd>The number of minutes left in this Purchase Option.</dd>
   *  </dl>
   * @property {string[]} a_visit_limit The list of calendar restrictions of the Purchase Option. For example, four per week.
   * @property {Wl_Appointment_Book_Purchase_PurchaseModel_a_login_promotion_a_login_promotion_info_a_restrict} a_restrict Data about the shortest restriction period:
   * <dl>
   *   <dt>int <tt>i_limit</tt></dt>
   *   <dd>The limit of visits for the shortest restriction period.</dd>
   *   <dt>int <tt>i_remain</tt></dt>
   *   <dd>The number of remaining visits for the shortest restriction period.</dd>
   *   <dt>string <tt>text_restriction</tt></dt>
   *   <dd>The description of the shortest restriction period. For example "this week" or "for a four-day period".</dd>
   * </dl>
   * @property {Wl_Appointment_Book_Purchase_PurchaseModel_a_login_promotion_a_login_promotion_info_a_restrict_a_restrict_data[]} a_restrict_data Data about all restriction periods. Given as an array, where each record has the following structure:
   * <dl>
   *   <dt>int <tt>i_book</tt></dt>
   *   <dd>The count of future sessions that are paid with this Purchase Option.</dd>
   *   <dt>int <tt>i_limit</tt></dt>
   *   <dd>The limit of visits for the restriction period.</dd>
   *   <dt>int <tt>i_remain</tt></dt>
   *   <dd>The number of remaining visits for the restriction period.</dd>
   *   <dt>int <tt>i_use</tt></dt>
   *   <dd>The usage count of the Purchase Option.</dd>
   *   <dt>int <tt>i_visit_past</tt></dt>
   *   <dd>
   *     The count of attended sessions before the last renewal.
   *     This will be `0` if no sessions before the last renewal or if the Purchase Option doesn't auto-renew.
   *   </dd>
   *   <dt>string <tt>text_restriction</tt></dt>
   *   <dd>The description of restriction period. For example, "this week" or "for a four-day period".</dd>
   * </dl>
   * @property {number} i_limit The count of visits that the Purchase Option allows the client to make.
   * @property {?number} i_limit_duration The maximum number of minutes that current Purchase Option can be used for.
   * @property {number} id_program The program ID for promotions. One of the {@link RsProgramSid} constants.
   * @property {string} k_login_promotion The Purchase Option login key.
   * @property {string} s_class_include The list of services provided by this Purchase Option.
   * @property {string} s_description The Purchase Option description.
   * @property {string} s_duration The Purchase Option duration.
   * @property {string} s_title The Purchase Option name.
   * @property {string} text_package_item If this Purchase Option is a package, then this field contains a list of Purchase Options contained in the package.
   */

  /**
   * A list of the client`s login promotions that can be applied to a given service.
   * <dl>
   *   <dt>array <var>a_login_promotion_info</var></dt>
   *   <dd>
   *      Information about the Purchase Option. It contains the following information:
   *      <dl>
   *        <dt>int <var>i_limit</var></dt>
   *        <dd>The count of visits that the Purchase Option allows the client to make.</dd>
   *        <dt>int|null <var>i_limit_duration</var></dt>
   *        <dd>The maximum number of minutes that current Purchase Option can be used for.</dd>
   *        <dt>int <var>i_remain</var></dt>
   *        <dd>The count of the remaining visits.</dd>
   *        <dt>int|null <var>i_remain_duration</var></dt>
   *        <dd>The number of minutes left in this Purchase Option.</dd>
   *      </dl>
   *   </dd>
   *   <dt>string[] <var>a_visit_limit</var></dt>
   *   <dd>The list of calendar restrictions of the Purchase Option. For example, four per week.</dd>
   *   <dt>array <var>a_restrict</var></dt>
   *   <dd>Data about the shortest restriction period:
   *     <dl>
   *       <dt>int <var>i_limit</var></dt>
   *       <dd>The limit of visits for the shortest restriction period.</dd>
   *       <dt>int <var>i_remain</var></dt>
   *       <dd>The number of remaining visits for the shortest restriction period.</dd>
   *       <dt>string <var>text_restriction</var></dt>
   *       <dd>The description of the shortest restriction period. For example "this week" or "for a four-day period".</dd>
   *     </dl>
   *   </dd>
   *   <dt>array[] <var>a_restrict_data</var></dt>
   *   <dd>Data about all restriction periods. Given as an array, where each record has the following structure:
   *     <dl>
   *       <dt>int <var>i_book</var></dt>
   *       <dd>The count of future sessions that are paid with this Purchase Option.</dd>
   *       <dt>int <var>i_limit</var></dt>
   *       <dd>The limit of visits for the restriction period.</dd>
   *       <dt>int <var>i_remain</var></dt>
   *       <dd>The number of remaining visits for the restriction period.</dd>
   *       <dt>int <var>i_use</var></dt>
   *       <dd>The usage count of the Purchase Option.</dd>
   *       <dt>int <var>i_visit_past</var></dt>
   *       <dd>
   *         The count of attended sessions before the last renewal.
   *         This will be `0` if no sessions before the last renewal or if the Purchase Option doesn't auto-renew.
   *       </dd>
   *       <dt>string <var>text_restriction</var></dt>
   *       <dd>The description of restriction period. For example, "this week" or "for a four-day period".</dd>
   *     </dl>
   *   </dd>
   *   <dt>int <var>i_limit</var></dt>
   *   <dd>The count of visits that the Purchase Option allows the client to make.</dd>
   *   <dt>int|null <var>i_limit_duration</var></dt>
   *   <dd>The maximum number of minutes that current Purchase Option can be used for.</dd>
   *   <dt>int <var>id_program</var></dt>
   *   <dd>The program ID for promotions. One of the {@link RsProgramSid} constants.</dd>
   *   <dt>string <var>k_login_promotion</var></dt>
   *   <dd>The Purchase Option login key.</dd>
   *   <dt>string <var>s_class_include</var></dt>
   *   <dd>The list of services provided by this Purchase Option.</dd>
   *   <dt>string <var>s_description</var></dt>
   *   <dd>The Purchase Option description.</dd>
   *   <dt>string <var>s_duration</var></dt>
   *   <dd>The Purchase Option duration.</dd>
   *   <dt>string <var>s_title</var></dt>
   *   <dd>The Purchase Option name.</dd>
   *   <dt>string <var>text_package_item</var></dt>
   *   <dd>If this Purchase Option is a package, then this field contains a list of Purchase Options contained in the package.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Purchase_PurchaseModel_a_login_promotion[]}
   */
  this.a_login_promotion = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_PurchaseModel_a_purchase
   * @property {{}} a_image Logo of the purchase option. Result of the {@link RsPromotionImageLogo::image()} method.
   * @property {string[]} a_visit_limit List of calendar restrictions of the promotion, for example, 4 per week.
   * @property {string} dt_expire Date, when promotion expires.
   * @property {string} dt_start Date, when promotion starts.
   * @property {number} i Order number of the purchase option in the list.
   * @property {number} i_limit Count of visits that purchase option allows to make.
   * @property {?number} i_limit_duration Maximum number of minutes that current promotion can be used.
   * @property {number} i_payment_period Count of calendar periods (weeks, months, years) between payment for membership.
   * @property {number} id_duration Duration ID. Constant from {@link ADurationSid}.
   * @property {number} id_program Program ID for promotions from {@link RsProgramSid}.
   * @property {number} id_program_type Program type ID. Constant from {@link RsProgramTypeSid}.
   * @property {number} id_purchase_item ID of the purchase item from {@link RsPurchaseItemSid}
   * @property {boolean} is_description `true` if purchase option has description.
   * @property {boolean} is_introductory `true` if promotion is introductory offer, `false` otherwise.
   * @property {number} k_id Primary ID of the element in it's table.
   * @property {string} m_price_old Price of single session purchase before online discount. `null` if service does not have online discount.
   * Is set only if this purchase option is purchase of single visit.
   * @property {string} s_activation Activation settings of the promotion.
   * @property {string} s_class Class for designer to mark purchase options with different icons.
   * @property {string} s_class_include List of included in the promotion services.
   * @property {string} s_description Description of the purchase option.
   * @property {string} s_duration Duration of the promotion.
   * @property {string} s_payment_duration Period between payments for memberships.
   * @property {string} sid_program_category Category of the program for promotions from {@link RsProgramCategorySid}.
   * @property {string} s_title Name of the purchase option.
   * @property {string} s_value Key of the purchase option in the format [<tt>purchase_item_id</tt>]::[<tt>k_id</tt>]
   * @property {string} text_package_item If this promotion is a package. This field contains list of promotions contained in the package.
   */

  /**
   * An array with information about available Purchase Options.
   * <dl>
   *   <dt>
   *     array <var>a_image</var>
   *   </dt>
   *   <dd>
   *     Logo of the purchase option. Result of the {@link RsPromotionImageLogo::image()} method.
   *   </dd>
   *   <dt>
   *     string[] <var>a_visit_limit</var>
   *   </dt>
   *   <dd>
   *     List of calendar restrictions of the promotion, for example, 4 per week.
   *   </dd>
   *   <dt>
   *     string <var>dt_expire</var>
   *   </dt>
   *   <dd>
   *     Date, when promotion expires.
   *   </dd>
   *   <dt>
   *     string <var>dt_start</var>
   *   </dt>
   *   <dd>
   *     Date, when promotion starts.
   *   </dd>
   *   <dt>
   *     int <var>i</var>
   *   </dt>
   *   <dd>
   *     Order number of the purchase option in the list.
   *   </dd>
   *   <dt>
   *     int <var>i_limit</var>
   *   </dt>
   *   <dd>
   *     Count of visits that purchase option allows to make.
   *   </dd>
   *   <dt>
   *     int|null <var>i_limit_duration</var>
   *   </dt>
   *   <dd>
   *     Maximum number of minutes that current promotion can be used.
   *   </dd>
   *   <dt>
   *     int <var>i_payment_period</var>
   *   </dt>
   *   <dd>
   *     Count of calendar periods (weeks, months, years) between payment for membership.
   *   </dd>
   *   <dt>
   *     int <var>id_duration</var>
   *   </dt>
   *   <dd>
   *     Duration ID. Constant from {@link ADurationSid}.
   *   </dd>
   *   <dt>
   *     int <var>id_program</var>
   *   </dt>
   *   <dd>
   *     Program ID for promotions from {@link RsProgramSid}.
   *   </dd>
   *   <dt>
   *     int <var>id_program_type</var>
   *   </dt>
   *   <dd>
   *     Program type ID. Constant from {@link RsProgramTypeSid}.
   *   </dd>
   *   <dt>
   *     int <var>id_purchase_item</var>
   *   </dt>
   *   <dd>
   *     ID of the purchase item from {@link RsPurchaseItemSid}
   *   </dd>
   *   <dt>
   *     bool <var>is_description</var>
   *   </dt>
   *   <dd>
   *     `true` if purchase option has description.
   *   </dd>
   *   <dt>
   *     bool <var>is_introductory</var>
   *   </dt>
   *   <dd>
   *     `true` if promotion is introductory offer, `false` otherwise.
   *   </dd>
   *   <dt>
   *     int <var>k_id</var>
   *   </dt>
   *   <dd>
   *     Primary ID of the element in it's table.
   *   </dd>
   *   <dt>
   *     string|null [<var>m_price_old</var>]
   *   </dt>
   *   <dd>
   *     Price of single session purchase before online discount. `null` if service does not have online discount.
   *     Is set only if this purchase option is purchase of single visit.
   *   </dd>
   *   <dt>
   *     string <var>s_activation</var>
   *   </dt>
   *   <dd>
   *     Activation settings of the promotion.
   *   </dd>
   *   <dt>
   *     string <var>s_class</var>
   *   </dt>
   *   <dd>
   *     Class for designer to mark purchase options with different icons.
   *   </dd>
   *   <dt>
   *     string <var>s_class_include</var>
   *   </dt>
   *   <dd>
   *     List of included in the promotion services.
   *   </dd>
   *   <dt>
   *     string <var>s_description</var>
   *   </dt>
   *   <dd>
   *     Description of the purchase option.
   *   </dd>
   *   <dt>
   *     string <var>s_duration</var>
   *   </dt>
   *   <dd>
   *     Duration of the promotion.
   *   </dd>
   *   <dt>
   *     string <var>s_payment_duration</var>
   *   </dt>
   *   <dd>
   *     Period between payments for memberships.
   *   </dd>
   *   <dt>
   *     string <var>sid_program_category</var>
   *   </dt>
   *   <dd>
   *     Category of the program for promotions from {@link RsProgramCategorySid}.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     Name of the purchase option.
   *   </dd>
   *   <dt>
   *     string <var>s_value</var>
   *   </dt>
   *   <dd>
   *     Key of the purchase option in the format [<var>purchase_item_id</var>]::[<var>k_id</var>]
   *   </dd>
   *   <dt>
   *     string <var>text_package_item</var>
   *   </dt>
   *   <dd>
   *     If this promotion is a package. This field contains list of promotions contained in the package.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Purchase_PurchaseModel_a_purchase[]}
   */
  this.a_purchase = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_PurchaseModel_a_reward_prize
   * @property {number} i_score Prize price in points.
   * @property {string} k_reward_prize Key of redeemable prize..
   * @property {string} text_description User friendly prize description.
   */

  /**
   * List of redeemable prizes which can be used to pay for service.
   * <dl>
   *   <dt>int <var>i_score</var></dt><dd>Prize price in points.</dd>
   *   <dt>string <var>k_reward_prize</var></dt><dd>Key of redeemable prize..</dd>
   *   <dt>string <var>text_description</var></dt><dd>User friendly prize description.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Purchase_PurchaseModel_a_reward_prize}
   */
  this.a_reward_prize = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_PurchaseModel_a_service_a_purchase
   * @property {number} id_purchase_item Purchase item ID. Constant from {@link RsPurchaseItemSid}.
   * @property {string} k_id Purchase item key.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_PurchaseModel_a_service
   * @property {Wl_Appointment_Book_Purchase_PurchaseModel_a_service_a_purchase} a_purchase List of purchase options selected for the service.
   *    Should be set if a new purchase option is selected for this service.
   *    <dl>
   *  <dt>int <tt>id_purchase_item</tt></dt>
   *  <dd>Purchase item ID. Constant from {@link RsPurchaseItemSid}.</dd>
   *  <dt>string <tt>k_id</tt></dt>
   *  <dd>Purchase item key.</dd>
   *    </dl>
   * @property {string} dt_date Local date/time to check purchase options expiration.
   * @property {?string} k_login_prize Login prize key.
   *    `null` if no login prize used to pay for this service.
   * @property {?string} k_login_promotion Login promotion key.
   *    Should be set if login promotion selected for this service.
   * @property {string} k_service Service key from {@link \RsServiceSql}.
   */

  /**
   * List of selected services without current {@link Wl_Appointment_Book_Purchase_PurchaseModel.k_service}.
   *
   * The list of these services directly affects the list of selected promotions.
   * Depending on the number and order of services, there may be different results.
   *
   * The current {@link Wl_Appointment_Book_Purchase_PurchaseModel.k_service} will be added to the end of this list.
   * It is worth considering this list as a list of previously selected services.
   *
   * Each element has the following structure:
   * <dl>
   *  <dt>array <var>a_purchase</var></dt>
   *  <dd>
   *    List of purchase options selected for the service.
   *    Should be set if a new purchase option is selected for this service.
   *    <dl>
   *      <dt>int <var>id_purchase_item</var></dt>
   *      <dd>Purchase item ID. Constant from {@link RsPurchaseItemSid}.</dd>
   *      <dt>string <var>k_id</var></dt>
   *      <dd>Purchase item key.</dd>
   *    </dl>
   *  </dd>
   *  <dt>string <var>dt_date</var></dt>
   *  <dd>Local date/time to check purchase options expiration.</dd>
   *  <dt>string|null <var>k_login_prize</var></dt>
   *  <dd>
   *    Login prize key.
   *    `null` if no login prize used to pay for this service.
   *  </dd>
   *  <dt>string|null <var>k_login_promotion</var></dt>
   *  <dd>
   *    Login promotion key.
   *    Should be set if login promotion selected for this service.
   *  </dd>
   *  <dt>string <var>k_service</var></dt>
   *  <dd>Service key from {@link \RsServiceSql}.</dd>
   * </dl>
   *
   * @get get
   * @type {Wl_Appointment_Book_Purchase_PurchaseModel_a_service[]}
   */
  this.a_service = [];

  /**
   * Session pass information in a case if user books same appointment second time and already has Drop-in.
   *
   * @get result
   * @type {{}}
   */
  this.a_session_pass = [];

  /**
   * List of user keys to book appointments - primary keys in {@link \PassportLoginSql}.
   * There may be empty values in this list, which means that this is a walk-in.
   *
   * @get get
   * @post get
   * @type {string[]}
   */
  this.a_uid = [];

  /**
   * The date to use to check for expiration of Purchase Options.
   *
   * @get get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * The asset booking duration.
   *
   * @get get
   * @type {number}
   */
  this.i_duration = 0;

  /**
   * Image height in pixels. Please specify this value if you need image to be returned in specific size.
   * In case this value is not specified returned image will have default thumbnail size {@link RsLoginLogo::THUMBNAIL_HEIGHT}.
   *
   * @get get
   * @type {?number}
   */
  this.i_height = 0;

  /**
   * Image width in pixels. Please specify this value if you need image to be returned in specific size.
   * In case this value is not specified returned image will have default thumbnail size {@link RsLoginLogo::THUMBNAIL_WIDTH}.
   *
   * @get get
   * @type {?number}
   */
  this.i_width = 0;

  /**
   * `true` - get all Purchase Options suitable for appointment.
   * `false` - get only Purchase Options available for the client.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * Indicates if drop-in rate should be the default purchase option.
   *
   * @get result
   * @var {boolean}
   */
  this.is_single_default = false;

  /**
   * `true` if client is walk-in, otherwise `false`.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_walk_in = false;

  /**
   * Location to show available appointment booking schedule.
   *
   * @get get,result
   * @post get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The Purchase Option ID used to pay for the appointment.
   *
   * This will be `null` if the client doesn't have a suitable Purchase Option.
   *
   * @get get,result
   * @type {string}
   */
  this.k_login_promotion = undefined;

  /**
   * Default promotion key.
   * Empty if the appointment has no default promotion.
   *
   * @get result
   * @type {string}
   */
  this.k_promotion_default = "";

  /**
   * The resource key.
   *
   * @get get
   * @type {string}
   */
  this.k_resource = "0";

  /**
   * The service key used to select available Purchase Options.
   * If multiple services are selected, they should be specified in {@link Wl_Appointment_Book_Purchase_PurchaseModel.a_service} array.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "0";

  /**
   * Key of timezone.
   *
   * `null` if not set then use default client timezone {@link Wl\Profile\Timezone\ProfileTimezone::createInBusiness()}.
   *
   * @get get
   * @type {?string}
   */
  this.k_timezone = null;

  /**
   * Login promotion title suitable to pay for the services.
   *
   * @get result
   * @type {string}
   */
  this.text_login_promotion = "";

  /**
   * User to get information for.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Purchase_PurchaseModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Purchase_PurchaseModel.prototype.config=function()
{
  return {"a_field": {"a_login_prize": {"get": {"result": true}},"a_login_promotion": {"get": {"result": true}},"a_purchase": {"get": {"result": true}},"a_reward_prize": {"get": {"result": true}},"a_service": {"get": {"get": true}},"a_session_pass": {"get": {"result": true}},"a_uid": {"get": {"get": true},"post": {"get": true}},"dt_date": {"get": {"get": true}},"i_duration": {"get": {"get": true}},"i_height": {"get": {"get": true}},"i_width": {"get": {"get": true}},"is_backend": {"get": {"get": true}},"is_single_default": {"get": {"result": true}},"is_walk_in": {"get": {"get": true},"post": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"k_login_promotion": {"get": {"get": true,"result": true}},"k_promotion_default": {"get": {"result": true}},"k_resource": {"get": {"get": true}},"k_service": {"get": {"get": true}},"k_timezone": {"get": {"get": true}},"text_login_promotion": {"get": {"result": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Purchase_PurchaseModel.instanceGet
 * @param {string} dt_date The date to use to check for expiration of Purchase Options.
 * @param {string} k_location Location to show available appointment booking schedule.
 * @param {string} k_service The service key used to select available Purchase Options. If multiple services are selected, they should be specified in {@link Wl_Appointment_Book_Purchase_PurchaseModel.a_service} array.
 * @param {string} k_resource The resource key.
 * @param {number} i_duration The asset booking duration.
 * @param {boolean} is_backend `true` - get all Purchase Options suitable for appointment. `false` - get only Purchase Options available for the client.
 * @param {string} uid User to get information for.
 * @param {?string} k_timezone Key of timezone. `null` if not set then use default client timezone {@link Wl\Profile\Timezone\ProfileTimezone::createInBusiness()}.
 * @returns {Wl_Appointment_Book_Purchase_PurchaseModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */