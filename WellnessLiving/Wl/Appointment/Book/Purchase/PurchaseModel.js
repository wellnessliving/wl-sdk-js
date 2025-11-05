/**
 * Retrieves information about Purchase Options that can be used to pay for an appointment.
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
   * Data about the login prize which can be used to pay for service.
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
   * This will be '0' if no sessions before the last renewal or if the Purchase Option doesn't auto-renew.
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
   *     This will be '0' if no sessions before the last renewal or if the Purchase Option doesn't auto-renew.
   *   </dd>
   *   <dt>string <tt>text_restriction</tt></dt>
   *   <dd>The description of restriction period. For example, "this week" or "for a four-day period".</dd>
   * </dl>
   * @property {number} i_limit The count of visits that the Purchase Option allows the client to make.
   * @property {?number} i_limit_duration The maximum number of minutes that current Purchase Option can be used for.
   * @property {number} i_promotion_priority Priority of this promotion. Result of {@link Wl_Appointment_Book_Purchase_PromotionPrioritySid.priorityGet()} method.
   * @property {number} id_program The program ID for promotions. One of the {@link Wl_WlProgramSid} constants.
   * @property {boolean} is_share `true` if this purchase option is shared from another user.
   * `false` if this purchase option belongs to the user for whom the request is made.
   * @property {string} k_login_promotion The Purchase Option login key.
   * @property {string} s_class_include The list of services provided by this Purchase Option.
   * @property {string} s_description The Purchase Option description.
   * @property {string} s_duration The Purchase Option duration.
   * @property {string} s_title The Purchase Option name.
   * @property {string} text_package_item If this Purchase Option is a package, then this field contains a list of Purchase Options contained in the package.
   * @property {string} uid_owner The user key of the owner of the promotion.
   * Will be different from the user for whom the request is made if the promotion is shared.
   */

  /**
   * A list of the client's login promotions that can be applied to a given service.
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
   *         This will be '0' if no sessions before the last renewal or if the Purchase Option doesn't auto-renew.
   *       </dd>
   *       <dt>string <var>text_restriction</var></dt>
   *       <dd>The description of restriction period. For example, "this week" or "for a four-day period".</dd>
   *     </dl>
   *   </dd>
   *   <dt>int <var>i_limit</var></dt>
   *   <dd>The count of visits that the Purchase Option allows the client to make.</dd>
   *   <dt>int|null <var>i_limit_duration</var></dt>
   *   <dd>The maximum number of minutes that current Purchase Option can be used for.</dd>
   *   <dt>int <var>i_promotion_priority</var></dt>
   *   <dd>Priority of this promotion. Result of {@link Wl_Appointment_Book_Purchase_PromotionPrioritySid.priorityGet()} method.</dd>
   *   <dt>int <var>id_program</var></dt>
   *   <dd>The program ID for promotions. One of the {@link Wl_WlProgramSid} constants.</dd>
   *   <dt>bool <var>is_share</var></dt>
   *   <dd>
   *     `true` if this purchase option is shared from another user.
   *     `false` if this purchase option belongs to the user for whom the request is made.
   *   </dd>
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
   *   <dt>string <var>uid_owner</var></dt>
   *   <dd>
   *     The user key of the owner of the promotion.
   *     Will be different from the user for whom the request is made if the promotion is shared.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Purchase_PurchaseModel_a_login_promotion[]}
   */
  this.a_login_promotion = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_PurchaseModel_a_purchase_a_image_a_payment
   * @property {string} m_discount The amount of the whole discount of one purchase item.
   * @property {string} m_discount_login The discount amount for the client type of one purchase item.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_PurchaseModel_a_purchase_a_image
   * @property {number} i_height Actual height of thumbnail image.
   * @property {number} i_height_src Height of original image.
   * @property {number} i_rotate Angle on which image was rotated compared to the original.
   * @property {number} i_width Actual width of thumbnail image.
   * @property {number} i_width_src Width of original image.
   * @property {boolean} is-resize Whether thumbnail is a resized variant of original image. If set to <tt>false</tt>
   * value returned in <tt>url-thumbnail</tt> equals value in <tt>url-view</tt>.
   * @property {string} url-view Url to original image in file storage.
   * @property {string} url-thumbnail Url to resized and rotated image in file storage. If size of original image is larger then specified by
   * arguments, image thumbnail as created, and a link to this thumbnail is returned. Otherwise link to
   * original image is returned here.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_PurchaseModel_a_purchase
   * @property {Wl_Appointment_Book_Purchase_PurchaseModel_a_purchase_a_image} a_image Information describing the logo of the purchase option. This value can be false if there is no logo described.
   * Image information will have the following fields:
   * <dl>
   *   <dt>
   *     int <tt>i_height</tt>
   *   </dt>
   *   <dd>
   *     Actual height of thumbnail image.
   *   </dd>
   *   <dt>
   *     int <tt>i_height_src</tt>
   *   </dt>
   *   <dd>
   *     Height of original image.
   *   </dd>
   *   <dt>
   *     int <tt>i_rotate</tt>
   *   </dt>
   *   <dd>
   *     Angle on which image was rotated compared to the original.
   *   </dd>
   *   <dt>
   *     int <tt>i_width</tt>
   *   </dt>
   *   <dd>
   *     Actual width of thumbnail image.
   *   </dd>
   *   <dt>
   *     int <tt>i_width_src</tt>
   *   </dt>
   *   <dd>
   *     Width of original image.
   *   </dd>
   *   <dt>
   *     bool <tt>is-resize</tt>
   *   </dt>
   *   <dd>
   *     Whether thumbnail is a resized variant of original image. If set to <tt>false</tt>
   *     value returned in <tt>url-thumbnail</tt> equals value in <tt>url-view</tt>.
   *   </dd>
   *   <dt>
   *     string <tt>url-view</tt>
   *   </dt>
   *   <dd>
   *     Url to original image in file storage.
   *   </dd>
   *   <dt>
   *     string <tt>url-thumbnail</tt>
   *   </dt>
   *   <dd>
   *     Url to resized and rotated image in file storage. If size of original image is larger then specified by
   *     arguments, image thumbnail as created, and a link to this thumbnail is returned. Otherwise link to
   *     original image is returned here.
   *   </dd>
   * </dl>
   * @property {Wl_Appointment_Book_Purchase_PurchaseModel_a_purchase_a_image_a_payment} a_payment The set of calculated values for payment:
   * <dl>
   *   <dt>
   *     string <tt>m_discount</tt>
   *   </dt>
   *   <dd>
   *     The amount of the whole discount of one purchase item.
   *   </dd>
   *   <dt>
   *     string <tt>m_discount_login</tt>
   *   </dt>
   *   <dd>
   *     The discount amount for the client type of one purchase item.
   *   </dd>
   * </dl>
   * @property {string[]} a_visit_limit A list of calendar restrictions of the Purchase Option in a human readable format, for example: '4 per week'.
   * @property {string} dt_expire Date, when promotion expires.
   * @property {string} dt_start Date, when promotion starts.
   * @property {string} f_price The price of the Purchase Option.
   * @property {number} i Order number of the purchase option in the list.
   * @property {number} i_limit Count of visits that purchase option allows to make.
   * @property {?number} i_limit_duration Maximum number of minutes that current promotion can be used.
   * @property {number} i_payment_period Count of calendar periods (weeks, months, years) between payment for membership.
   * @property {number} id_duration Duration ID. Constant from {@link ADurationSid}.
   * @property {number} id_program Program ID for promotions from {@link Wl_WlProgramSid}.
   * @property {number} id_program_type Program type ID. Constant from {@link Wl_WlProgramTypeSid}.
   * @property {number} id_promotion_price How the Purchase Item price is specified. One of the {@link Wl_WlProgramTypeSid} constants.
   * @property {number} id_purchase_item ID of the purchase item from {@link Wl_Purchase_Item_ItemSid}
   * @property {boolean} is_contract This will be `true` if the Purchase Option is a contract. It will `false` otherwise.
   * @property {boolean} is_description `true` if purchase option has description.
   * @property {boolean} is_introductory `true` if promotion is introductory offer, `false` otherwise.
   * @property {boolean} is_renew This will be `true` if the Purchase Option will auto-renew. It will be `false` otherwise.
   * @property {boolean} is_renew_check If `true` - the Purchase Option is renewable and the "auto-renew" option should be turned on by default.
   *    `This will be `false` otherwise.
   * @property {boolean} is_start This will be `true` if the Purchase Option has a duration that begins on purchase. It will be `false` otherwise.
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
   *     Information describing the logo of the purchase option. This value can be false if there is no logo described.
   *     Image information will have the following fields:
   *     <dl>
   *       <dt>
   *         int <var>i_height</var>
   *       </dt>
   *       <dd>
   *         Actual height of thumbnail image.
   *       </dd>
   *       <dt>
   *         int <var>i_height_src</var>
   *       </dt>
   *       <dd>
   *         Height of original image.
   *       </dd>
   *       <dt>
   *         int <var>i_rotate</var>
   *       </dt>
   *       <dd>
   *         Angle on which image was rotated compared to the original.
   *       </dd>
   *       <dt>
   *         int <var>i_width</var>
   *       </dt>
   *       <dd>
   *         Actual width of thumbnail image.
   *       </dd>
   *       <dt>
   *         int <var>i_width_src</var>
   *       </dt>
   *       <dd>
   *         Width of original image.
   *       </dd>
   *       <dt>
   *         bool <var>is-resize</var>
   *       </dt>
   *       <dd>
   *         Whether thumbnail is a resized variant of original image. If set to <tt>false</tt>
   *         value returned in <var>url-thumbnail</var> equals value in <var>url-view</var>.
   *       </dd>
   *       <dt>
   *         string <var>url-view</var>
   *       </dt>
   *       <dd>
   *         Url to original image in file storage.
   *       </dd>
   *       <dt>
   *         string <var>url-thumbnail</var>
   *       </dt>
   *       <dd>
   *         Url to resized and rotated image in file storage. If size of original image is larger then specified by
   *         arguments, image thumbnail as created, and a link to this thumbnail is returned. Otherwise link to
   *         original image is returned here.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     array <var>a_payment</var>
   *   </dt>
   *   <dd>
   *     The set of calculated values for payment:
   *     <dl>
   *       <dt>
   *         string <var>m_discount</var>
   *       </dt>
   *       <dd>
   *         The amount of the whole discount of one purchase item.
   *       </dd>
   *       <dt>
   *         string <var>m_discount_login</var>
   *       </dt>
   *       <dd>
   *         The discount amount for the client type of one purchase item.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     string[] <var>a_visit_limit</var>
   *   </dt>
   *   <dd>
   *     A list of calendar restrictions of the Purchase Option in a human readable format, for example: '4 per week'.
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
   *     string <var>f_price</var>
   *   </dt>
   *   <dd>
   *     The price of the Purchase Option.
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
   *     Program ID for promotions from {@link Wl_WlProgramSid}.
   *   </dd>
   *   <dt>
   *     int <var>id_program_type</var>
   *   </dt>
   *   <dd>
   *     Program type ID. Constant from {@link Wl_WlProgramTypeSid}.
   *   </dd>
   *   <dt>
   *     int <var>id_promotion_price</var>
   *   </dt>
   *   <dd>
   *     How the Purchase Item price is specified. One of the {@link Wl_WlProgramTypeSid} constants.
   *   </dd>
   *   <dt>
   *     int <var>id_purchase_item</var>
   *   </dt>
   *   <dd>
   *     ID of the purchase item from {@link Wl_Purchase_Item_ItemSid}
   *   </dd>
   *   <dt>
   *     bool <var>is_contract</var>
   *   </dt>
   *   <dd>
   *     This will be `true` if the Purchase Option is a contract. It will `false` otherwise.
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
   *     bool <var>is_renew</var>
   *   </dt>
   *   <dd>
   *     This will be `true` if the Purchase Option will auto-renew. It will be `false` otherwise.
   *   </dd>
   *   <dt>
   *     bool <var>is_renew_check</var>
   *   </dt>
   *   <dd>
   *     If `true` - the Purchase Option is renewable and the "auto-renew" option should be turned on by default.
   *    `This will be `false` otherwise.
   *   </dd>
   *   <dt>
   *     bool <var>is_start</var>
   *   </dt>
   *   <dd>
   *     This will be `true` if the Purchase Option has a duration that begins on purchase. It will be `false` otherwise.
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
   * @property {number} id_purchase_item Purchase item ID. Constant from {@link Wl_Purchase_Item_ItemSid}.
   * @property {string} k_id Purchase item key.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_PurchaseModel_a_service
   * @property {Wl_Appointment_Book_Purchase_PurchaseModel_a_service_a_purchase} a_purchase List of purchase options selected for the service.
   *    Should be set if a new purchase option is selected for this service.
   *    <dl>
   *  <dt>int <tt>id_purchase_item</tt></dt>
   *  <dd>Purchase item ID. Constant from {@link Wl_Purchase_Item_ItemSid}.</dd>
   *  <dt>string <tt>k_id</tt></dt>
   *  <dd>Purchase item key.</dd>
   *    </dl>
   * @property {string} dt_date Local date/time to check purchase options expiration.
   * @property {?string} k_login_prize Login prize key.
   *    `null` if no login prize used to pay for this service.
   * @property {?string} k_login_promotion Login promotion key.
   *    Should be set if login promotion selected for this service.
   * @property {string} k_service Service key. See table {@link \RsServiceSql}.
   * @property {string} k_timezone The timezone key for `dt_date` field.
   *
   *    Can be `null` if timezone is not selected.
   *    If not selected, the default client timezone will be used {@link Wl\Profile\Timezone\ProfileTimezone::createInBusiness()}.
   *
   *    In any case, the timezone will be used if the business allows client timezones.
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
   *      <dd>Purchase item ID. Constant from {@link Wl_Purchase_Item_ItemSid}.</dd>
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
   *  <dd>Service key. See table {@link \RsServiceSql}.</dd>
   *  <dt>string <var>k_timezone</var></dt>
   *  <dd>
   *    The timezone key for `dt_date` field.
   *
   *    Can be `null` if timezone is not selected.
   *    If not selected, the default client timezone will be used {@link Wl\Profile\Timezone\ProfileTimezone::createInBusiness()}.
   *
   *    In any case, the timezone will be used if the business allows client timezones.
   *  </dd>
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
   * List of user keys to book appointments.
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
   * The mode type. One of the {@link Wl_Mode_ModeSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_mode = 0;

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
   * @type {boolean}
   */
  this.is_single_default = false;

  /**
   * If `true`, the client is a walk-in. Otherwise, this will be `false`.
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
   * @type {?string}
   */
  this.k_login_promotion = null;

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
   * The timezone key for {@link Wl_Appointment_Book_Purchase_PurchaseModel.dt_date}.
   *
   * Can be `null` if timezone is not selected.
   * If not selected, the default client timezone will be used {@link Wl\Profile\Timezone\ProfileTimezone::createInBusiness()}.
   *
   * In any case, the timezone will be used if the business allows client timezones.
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
   * The user key.
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
  return {"a_field": {"a_login_prize": {"get": {"result": true}},"a_login_promotion": {"get": {"result": true}},"a_purchase": {"get": {"result": true}},"a_reward_prize": {"get": {"result": true}},"a_service": {"get": {"get": true}},"a_session_pass": {"get": {"result": true}},"a_uid": {"get": {"get": true},"post": {"get": true}},"dt_date": {"get": {"get": true}},"i_duration": {"get": {"get": true}},"i_height": {"get": {"get": true}},"i_width": {"get": {"get": true}},"id_mode": {"get": {"get": true}},"is_backend": {"get": {"get": true}},"is_single_default": {"get": {"result": true}},"is_walk_in": {"get": {"get": true},"post": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"k_login_promotion": {"get": {"get": true,"result": true}},"k_promotion_default": {"get": {"result": true}},"k_resource": {"get": {"get": true}},"k_service": {"get": {"get": true}},"k_timezone": {"get": {"get": true}},"text_login_promotion": {"get": {"result": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
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
 * @param {string} uid The user key.
 * @param {?string} k_timezone The timezone key for {@link Wl_Appointment_Book_Purchase_PurchaseModel.dt_date}. Can be `null` if timezone is not selected. If not selected, the default client timezone will be used {@link Wl\Profile\Timezone\ProfileTimezone::createInBusiness()}. In any case, the timezone will be used if the business allows client timezones.
 * @returns {Wl_Appointment_Book_Purchase_PurchaseModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */