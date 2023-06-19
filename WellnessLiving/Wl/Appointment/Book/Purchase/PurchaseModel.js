/**
 * An endpoint that retrieves information about available Purchase Options.
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
   * @property {number} i_count The login prize remaining quantity.
   * @property {string} k_login_prize The key of the login prize.
   * @property {string} text_description The user-friendly login prize description.
   */

  /**
   * Data about the login prize that can be used to pay for the service.
   * <dl>
   *   <dt>int <var>i_count</var></dt><dd>The login prize remaining quantity.</dd>
   *   <dt>string <var>k_login_prize</var></dt><dd>THe key of login prize.</dd>
   *   <dt>string <var>text_description</var></dt><dd>The user-friendly login prize description.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Purchase_PurchaseModel_a_login_prize}
   */
  this.a_login_prize = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_PurchaseModel_a_login_promotion_a_login_promotion_info_a_restrict_a_restrict_data
   * @property {number} i_book The number of future bookings that are paid using this Purchase Option.
   * @property {number} i_limit The limit of visits for the restriction period.
   * @property {number} i_remain The number of remaining visits for the restriction period.
   * @property {number} i_use The usage count of the Purchase Option.
   * @property {number} i_visit_past The number of attended sessions before the last renewal.
   * This will be `0` if there weren't any sessions renewed before the last renewal or if the Purchase is not set to auto-renew.
   * @property {string} text_restriction The description of the restriction period.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_PurchaseModel_a_login_promotion_a_login_promotion_info_a_restrict
   * @property {number} i_limit The limit of visits for the shortest restriction period.
   * @property {number} i_remain The number of remaining visits for the shortest restriction period.
   * @property {string} text_restriction The description of the shortest restriction period.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_PurchaseModel_a_login_promotion_a_login_promotion_info
   * @property {number} i_limit The number of visits permitted by the Purchase Option.
   * @property {?number} i_limit_duration The maximum number of minutes the Purchase Option can be used for.
   * @property {number} i_remain The remaining number of visits.
   * @property {?number} i_remain_duration The number of minutes left in the Purchase Option.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_PurchaseModel_a_login_promotion
   * @property {Wl_Appointment_Book_Purchase_PurchaseModel_a_login_promotion_a_login_promotion_info} a_login_promotion_info <dl>
   *    <dt>int <tt>i_limit</tt></dt>
   *    <dd>The number of visits permitted by the Purchase Option.</dd>
   *    <dt>int|null <tt>i_limit_duration</tt></dt>
   *    <dd>The maximum number of minutes the Purchase Option can be used for.</dd>
   *    <dt>int <tt>i_remain</tt></dt>
   *    <dd>The remaining number of visits.</dd>
   *    <dt>int|null <tt>i_remain_duration</tt></dt>
   *    <dd>The number of minutes left in the Purchase Option.</dd>
   *  </dl>
   * @property {string[]} a_visit_limit A list of calendar restrictions for the Purchase Option.
   * @property {Wl_Appointment_Book_Purchase_PurchaseModel_a_login_promotion_a_login_promotion_info_a_restrict} a_restrict Data about shortest restriction period:
   * <dl>
   *   <dt>int <tt>i_limit</tt></dt>
   *   <dd>The limit of visits for the shortest restriction period.</dd>
   *   <dt>int <tt>i_remain</tt></dt>
   *   <dd>The number of remaining visits for the shortest restriction period.</dd>
   *   <dt>string <tt>text_restriction</tt></dt>
   *   <dd>The description of the shortest restriction period.</dd>
   * </dl>
   * @property {Wl_Appointment_Book_Purchase_PurchaseModel_a_login_promotion_a_login_promotion_info_a_restrict_a_restrict_data[]} a_restrict_data Data about all restriction periods. Array, where each record has next structure:
   * <dl>
   *   <dt>int <tt>i_book</tt></dt>
   *   <dd>The number of future bookings that are paid using this Purchase Option.</dd>
   *   <dt>int <tt>i_limit</tt></dt>
   *   <dd>The limit of visits for the restriction period.</dd>
   *   <dt>int <tt>i_remain</tt></dt>
   *   <dd>The number of remaining visits for the restriction period.</dd>
   *   <dt>int <tt>i_use</tt></dt>
   *   <dd>The usage count of the Purchase Option.</dd>
   *   <dt>int <tt>i_visit_past</tt></dt>
   *   <dd>
   *     The number of attended sessions before the last renewal.
   *     This will be `0` if there weren't any sessions renewed before the last renewal or if the Purchase is not set to auto-renew.
   *   </dd>
   *   <dt>string <tt>text_restriction</tt></dt>
   *   <dd>The description of the restriction period.</dd>
   * </dl>
   * @property {number} i_limit The number of visits permitted by the Purchase Option.
   * @property {?number} i_limit_duration The maximum number of minutes the Purchase Option can be used for.
   * @property {number} id_program The program ID for Purchase Options from {@link \RsProgramSid}.
   * @property {string} k_login_promotion The login promotion key.
   * @property {string} s_class_include The list of included add-ons in the Purchase Option services.
   * @property {string} s_description The Purchase Option description.
   * @property {string} s_duration The Purchase Option duration.
   * @property {string} s_title The Purchase Option name.
   * @property {string} text_package_item Determines if this Purchase Option is a package.
   * This field contains a list of Purchsae Options contained in the package.
   */

  /**
   * A list of a client`s login promotions that can be applied to a given service.
   * <dl>
   *   <dt>array <var>a_login_promotion_info</var></dt>
   *   <dd>
   *      <dl>
   *        <dt>int <var>i_limit</var></dt>
   *        <dd>The number of visits permitted by the Purchase Option.</dd>
   *        <dt>int|null <var>i_limit_duration</var></dt>
   *        <dd>The maximum number of minutes the Purchase Option can be used for.</dd>
   *        <dt>int <var>i_remain</var></dt>
   *        <dd>The remaining number of visits.</dd>
   *        <dt>int|null <var>i_remain_duration</var></dt>
   *        <dd>The number of minutes left in the Purchase Option.</dd>
   *      </dl>
   *   </dd>
   *   <dt>string[] <var>a_visit_limit</var></dt>
   *   <dd>A list of the Purchase Option's calendar restrictions.</dd>
   *   <dt>array <var>a_restrict</var></dt>
   *   <dd>Information about the shortest restriction period:
   *     <dl>
   *       <dt>int <var>i_limit</var></dt>
   *       <dd>The limit of visits for the shortest restriction period.</dd>
   *       <dt>int <var>i_remain</var></dt>
   *       <dd>The number of remaining visits for the shortest restriction period.</dd>
   *       <dt>string <var>text_restriction</var></dt>
   *       <dd>The description of the shortest restriction period."</dd>
   *     </dl>
   *   </dd>
   *   <dt>array[] <var>a_restrict_data</var></dt>
   *   <dd>Information about all restriction periods, formatted as an array where each record has the next structure:
   *     <dl>
   *       <dt>int <var>i_book</var></dt>
   *       <dd>The number of future booking that are paid using the Purchase Option.</dd>
   *       <dt>int <var>i_limit</var></dt>
   *       <dd>The limit of visits for the restriction period.</dd>
   *       <dt>int <var>i_remain</var></dt>
   *       <dd>The number of remaining visits for the restriction period.</dd>
   *       <dt>int <var>i_use</var></dt>
   *       <dd>The usage count of the Purchsae Option.</dd>
   *       <dt>int <var>i_visit_past</var></dt>
   *       <dd>
   *         The number of attended sessions before the last renewal.
   *         This will be `0` if there weren't any sessions renewed before the last renewal or if the Purchase is not set to auto-renew.
   *       </dd>
   *       <dt>string <var>text_restriction</var></dt>
   *       <dd>The description of the restriction period.</dd>
   *     </dl>
   *   </dd>
   *   <dt>int <var>i_limit</var></dt>
   *   <dd>The number of visits permitted by the Purchase Option.</dd>
   *   <dt>int|null <var>i_limit_duration</var></dt>
   *   <dd>The maximum number of minutes the Purchase Option can be used for.</dd>
   *   <dt>int <var>id_program</var></dt>
   *   <dd>The program ID for Purchase Options from {@link \RsProgramSid}.</dd>
   *   <dt>string <var>k_login_promotion</var></dt>
   *   <dd>The login promotion key.</dd>
   *   <dt>string <var>s_class_include</var></dt>
   *   <dd>The list of included add-ons in the Purchase Option services.</dd>
   *   <dt>string <var>s_description</var></dt>
   *   <dd>The description of the Purchase Option.</dd>
   *   <dt>string <var>s_duration</var></dt>
   *   <dd>The Purchase Option duration.</dd>
   *   <dt>string <var>s_title</var></dt>
   *   <dd>The Purchase Option name.</dd>
   *   <dt>string <var>text_package_item</var></dt>
   *   <dd>Determines if this Purchase Option is a package. This field contains list of Purchase Options contained in the package.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Purchase_PurchaseModel_a_login_promotion[]}
   */
  this.a_login_promotion = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_PurchaseModel_a_purchase
   * @property {{}} a_image The Purchase Option logo.
   * @property {string[]} a_visit_limit A list of calendar restrictions of the Purchase Options.
   * @property {string} dt_expire The Purchase Option expiration date.
   * @property {string} dt_start The Purchase Option start date.
   * @property {number} i The order number of the Purchase Option in the list.
   * @property {number} i_limit The number of visits permitted by the Purchase Option.
   * @property {?number} i_limit_duration The maximum number of minutes the Purchase Option can be used for.
   * @property {number} i_payment_period The number of calendar periods (weeks, months, or years) between payments for the membership.
   * @property {number} id_duration The duration ID. One of the {@link \ADurationSid} constants.
   * @property {number} id_program The program ID for Purchase Options from {@link \RsProgramSid}.
   * @property {number} id_program_type The program type ID. One of the {@link \RsProgramTypeSid} constants.
   * @property {number} id_purchase_item The ID of the purchase item from {@link \RsPurchaseItemSid}.
   * @property {boolean} is_description This will be `true` if the Purchase Option has a description. Otherwise, this will be `false`.
   * @property {boolean} is_introductory This will be `true` if the Purchase Option is an introductory offer. Otherwise, this will be `false`.
   * @property {number} k_id The primary ID of the element in its table.
   * @property {string} m_price_old The price of a single session purchase before the online discount. This will be `null`
   * if the service doesn't have an online discount. This is only set if the Purchase Option is the purchase of a single visit.
   * @property {string} s_activation The Purchase Option activation settings.
   * @property {string} s_class The CSS class used to identify the Purchase Option with an icon.
   * @property {string} s_class_include The list of included CSS classes.
   * @property {string} s_description The Purchase Option description.
   * @property {string} s_duration The Purchase Option duration.
   * @property {string} s_payment_duration The period between payments for memberships.
   * @property {string} sid_program_category The category of the program for Purchase Options from {@link \RsProgramCategorySid}.
   * @property {string} s_title The Purchase Option name.
   * @property {string} s_value The Purchase Option in the format [<tt>purchase_item_id</tt>]::[<tt>k_id</tt>].
   * @property {string} text_package_item Determines if this Purchase Option is a package. This field contains a list of Purchase Options contained in the package.
   */

  /**
   * A list of the Purchase Options:
   * <dl>
   *   <dt>
   *     array <var>a_image</var>
   *   </dt>
   *   <dd>
   *     The Purchase Option logo.
   *   </dd>
   *   <dt>
   *     string[] <var>a_visit_limit</var>
   *   </dt>
   *   <dd>
   *     A list of calendar restrictions of the Purchase Options.
   *   </dd>
   *   <dt>
   *     string <var>dt_expire</var>
   *   </dt>
   *   <dd>
   *     The Purchase Option expiration date.
   *   </dd>
   *   <dt>
   *     string <var>dt_start</var>
   *   </dt>
   *   <dd>
   *     The Purchase Option start date.
   *   </dd>
   *   <dt>
   *     int <var>i</var>
   *   </dt>
   *   <dd>
   *     The order number of the Purchase Option in the list.
   *   </dd>
   *   <dt>
   *     int <var>i_limit</var>
   *   </dt>
   *   <dd>
   *     The number of visits permitted by the Purchase Option.
   *   </dd>
   *   <dt>
   *     int|null <var>i_limit_duration</var>
   *   </dt>
   *   <dd>
   *     The maximum number of minutes the Purchase Option can be used for.
   *   </dd>
   *   <dt>
   *     int <var>i_payment_period</var>
   *   </dt>
   *   <dd>
   *     The number of calendar periods (weeks, months, or years) between payments for the membership.
   *   </dd>
   *   <dt>
   *     int <var>id_duration</var>
   *   </dt>
   *   <dd>
   *     The duration ID. One of the {@link \ADurationSid} constants.
   *   </dd>
   *   <dt>
   *     int <var>id_program</var>
   *   </dt>
   *   <dd>
   *     The program ID for Purchase Options from {@link \RsProgramSid}.
   *   </dd>
   *   <dt>
   *     int <var>id_program_type</var>
   *   </dt>
   *   <dd>
   *     The program type ID. One of the {@link \RsProgramTypeSid} constants.
   *   </dd>
   *   <dt>
   *     int <var>id_purchase_item</var>
   *   </dt>
   *   <dd>
   *     The ID of the purchase item from {@link \RsPurchaseItemSid}.
   *   </dd>
   *   <dt>
   *     bool <var>is_description</var>
   *   </dt>
   *   <dd>
   *     This will be `true` if the Purchase Option has a description. Otherwise, this will be `false`.
   *   </dd>
   *   <dt>
   *     bool <var>is_introductory</var>
   *   </dt>
   *   <dd>
   *     This will be `true` if the Purchase Option is an introductory offer. Otherwise, this will be `false`.
   *   </dd>
   *   <dt>
   *     int <var>k_id</var>
   *   </dt>
   *   <dd>
   *     The primary ID of the element in its table.
   *   </dd>
   *   <dt>
   *     string|null [<var>m_price_old</var>]
   *   </dt>
   *   <dd>
   *     The price of a single session purchase before the online discount. This will be `null` if the service doesn't have an online discount.
   *     This is only set if the Purchase Option is the purchase of a single visit.
   *   </dd>
   *   <dt>
   *     string <var>s_activation</var>
   *   </dt>
   *   <dd>
   *     The Purchase Option activation settings.
   *   </dd>
   *   <dt>
   *     string <var>s_class</var>
   *   </dt>
   *   <dd>
   *     The CSS class used to identify the Purchase Option with an icon.
   *   </dd>
   *   <dt>
   *     string <var>s_class_include</var>
   *   </dt>
   *   <dd>
   *     The list of included CSS classes.
   *   </dd>
   *   <dt>
   *     string <var>s_description</var>
   *   </dt>
   *   <dd>
   *     The Purchase Option description.
   *   </dd>
   *   <dt>
   *     string <var>s_duration</var>
   *   </dt>
   *   <dd>
   *     The Purchase Option duration.
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
   *     The category of the program for Purchase Options from {@link \RsProgramCategorySid}.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     The Purchase Option name.
   *   </dd>
   *   <dt>
   *     string <var>s_value</var>
   *   </dt>
   *   <dd>
   *     The Purchase Option key in the format [<var>purchase_item_id</var>]::[<var>k_id</var>].
   *   </dd>
   *   <dt>
   *     string <var>text_package_item</var>
   *   </dt>
   *   <dd>
   *     Determines if this Purchase Option is a package. This field contains a list of Purchase Options contained in the package.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Purchase_PurchaseModel_a_purchase[]}
   */
  this.a_purchase = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_PurchaseModel_a_reward_prize
   * @property {number} i_score The prize price in points.
   * @property {string} k_reward_prize The prize key.
   * @property {string} text_description The user-friendly prize description.
   */

  /**
   * A list of redeemable prizes that can be used to pay for service.
   * <dl>
   *   <dt>int <var>i_score</var></dt><dd>The prize price in points.</dd>
   *   <dt>string <var>k_reward_prize</var></dt><dd>The prize key.</dd>
   *   <dt>string <var>text_description</var></dt><dd>The user-friendly prize description.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Purchase_PurchaseModel_a_reward_prize}
   */
  this.a_reward_prize = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_PurchaseModel_a_service_a_purchase
   * @property {number} id_purchase_item The purchase item ID. One of the {@link \RsPurchaseItemSid} constants.
   * @property {string} k_id The purchase item key.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_PurchaseModel_a_service
   * @property {Wl_Appointment_Book_Purchase_PurchaseModel_a_service_a_purchase} a_purchase A list of Purchase Options selected for the service.
   *    This should be set in cases where a new Purchase Option is selected for the service.
   *    <dl>
   *  <dt>int <tt>id_purchase_item</tt></dt>
   *  <dd>The purchase item ID. One of the {@link \RsPurchaseItemSid} constants.</dd>
   *  <dt>string <tt>k_id</tt></dt>
   *  <dd>The purchase item key.</dd>
   *    </dl>
   * @property {string} dt_date The local date/time used for checking the Purchase Option's expiration.
   * @property {?string} k_login_prize The login prize key.
   * This will be `null` if no login prize used to pay for this service.
   * @property {?string} k_login_promotion The login promotion key.
   * This should be set if the login promotion is selected for this service.
   * @property {string} k_service The service key.
   */

  /**
   * A list of selected services excluding the current selected service ({@link Wl_Appointment_Book_Purchase_PurchaseModel.k_service}).
   *
   * The list of these services directly affects the list of selected Purchase Options.
   * Results may vary depending on the number and order of the services.
   *
   * The current {@link Wl_Appointment_Book_Purchase_PurchaseModel.k_service} will be added to the end of this list.
   * This list can be considered a list of previously selected services.
   *
   * Each element has the following structure:
   * <dl>
   *  <dt>array <var>a_purchase</var></dt>
   *  <dd>
   *    A list of Purchase Options selected for the service.
   *    This should be set if a new Purchase Option is selected for the service.
   *    <dl>
   *      <dt>int <var>id_purchase_item</var></dt>
   *      <dd>The purchase item ID. One of the {@link \RsPurchaseItemSid} constants.</dd>
   *      <dt>string <var>k_id</var></dt>
   *      <dd>The purchase item key.</dd>
   *    </dl>
   *  </dd>
   *  <dt>string <var>dt_date</var></dt>
   *  <dd>The local date/time used for checking the Purchase Option's expiration.</dd>
   *  <dt>string|null <var>k_login_prize</var></dt>
   *  <dd>
   *    The login prize key.
   *    This will be `null` if no login prize used to pay for this service.
   *  </dd>
   *  <dt>string|null <var>k_login_promotion</var></dt>
   *  <dd>
   *    The login promotion key.
   *    This should be set if the login promotion is selected for this service.
   *  </dd>
   *  <dt>string <var>k_service</var></dt>
   *  <dd>The service key.</dd>
   * </dl>
   *
   * @get get
   * @type {Wl_Appointment_Book_Purchase_PurchaseModel_a_service[]}
   */
  this.a_service = [];

  /**
   * Information about the session pass in cases where a client books the same appointment a second time and already
   * has a drop-in on their attendance history.
   *
   * @get result
   * @type {{}}
   */
  this.a_session_pass = [];

  /**
   * A list of user keys for booking appointments.
   * Empty values in this list represent walk-ins.
   *
   * @get get
   * @post get
   * @type {string[]}
   */
  this.a_uid = [];

  /**
   * The local date/time used for checking the Purchase Option's expiration.
   *
   * @get get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * The resource duration in minutes.
   *
   * @get get
   * @type {number}
   */
  this.i_duration = 0;

  /**
   * The image height in pixels. This value must be specified if you need the image to be returned in a specific size.
   * In cases where this value isn't specified, the returned image will have the default thumbnail size {@link RsLoginLogo.THUMBNAIL_HEIGHT}.
   *
   * @get get
   * @type {?number}
   */
  this.i_height = 0;

  /**
   * The image width in pixels.This value must be specified if you need the image to be returned in a specific size.
   * In cases where this value isn't specified, the returned image will have the default thumbnail size {@link RsLoginLogo.THUMBNAIL_WIDTH}.
   *
   * @get get
   * @type {?number}
   */
  this.i_width = 0;

  /**
   * `true` - gets all Purchase Options suitable for the appointment.
   * `false` - gets only Purchase Options available for the client.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * This will be `true` if the client is a walk-in. Otherwise, this will be `false`.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_walk_in = false;

  /**
   * The location used for showing the available appointment booking schedule.
   *
   * @get get,result
   * @post get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The login promotion key that can be applied to a given service.
   *
   * If it comes from the client, it will be used to check whether it fits the given service or not.
   *
   * @get get,result
   * @type {string}
   */
  this.k_login_promotion = undefined;

  /**
   * The resource key used for selecting available Purchase Options.
   *
   * @get get
   * @type {string}
   */
  this.k_resource = "0";

  /**
   * The service key used for selecting available Purchase Options and login promotions.
   *
   * If multiple services are selected,
   * they should be specified in the {@link Wl_Appointment_Book_Purchase_PurchaseModel.a_service} array.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "0";

  /**
   * The time zone key.
   *
   * This will be `null` if not set yet. In such cases, use the client's default time zone.
   *
   * @get get
   * @type {?string}
   */
  this.k_timezone = null;

  /**
   * The login promotion title suitable for paying for the services.
   *
   * @get result
   * @type {string}
   */
  this.text_login_promotion = "";

  /**
   * The client to get information for.
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
  return {"a_field": {"a_login_prize": {"get": {"result": true}},"a_login_promotion": {"get": {"result": true}},"a_purchase": {"get": {"result": true}},"a_reward_prize": {"get": {"result": true}},"a_service": {"get": {"get": true}},"a_session_pass": {"get": {"result": true}},"a_uid": {"get": {"get": true},"post": {"get": true}},"dt_date": {"get": {"get": true}},"i_duration": {"get": {"get": true}},"i_height": {"get": {"get": true}},"i_width": {"get": {"get": true}},"is_backend": {"get": {"get": true}},"is_walk_in": {"get": {"get": true},"post": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"k_login_promotion": {"get": {"get": true,"result": true}},"k_resource": {"get": {"get": true}},"k_service": {"get": {"get": true}},"k_timezone": {"get": {"get": true}},"text_login_promotion": {"get": {"result": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Purchase_PurchaseModel.instanceGet
 * @param {string} dt_date Local date/time to check purchase options expiration.
 * @param {string} k_location Location to show available appointment booking schedule.
 * @param {string} k_service Service key to select available purchase options and login promotions. If multiple services are selected, they should be specified in {@link Wl_Appointment_Book_Purchase_PurchaseModel.a_service} array.
 * @param {string} k_resource Resource key to select available purchase options.
 * @param {number} i_duration Duration of the resource in minutes.
 * @param {boolean} is_backend `true` - get all promotions suitable for appointment; `false` - get only promotions available for client.
 * @param {string} uid User to get information for.
 * @param {?string} k_timezone Key of timezone. `null` if not set then use default client timezone.
 * @returns {Wl_Appointment_Book_Purchase_PurchaseModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */