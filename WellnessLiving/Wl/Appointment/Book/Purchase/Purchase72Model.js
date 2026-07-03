/**
 * Retrieves a list of information about available purchase options.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Purchase_Purchase72Model()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "dt_date,k_location,k_service,k_resource,i_duration,is_backend,uid,k_timezone,k_appointment";

  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_Purchase72Model_a_login_prize
   * @property {number} i_count Login prize remaining quantity.
   * @property {string} k_login_prize Key of login prize.
   * @property {string} text_description User friendly login prize description.
   */

  /**
   * Data about the login prize which can be used to pay for service.
   *
   * @get result
   * @type {Wl_Appointment_Book_Purchase_Purchase72Model_a_login_prize}
   */
  this.a_login_prize = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_Purchase72Model_a_login_promotion_a_login_promotion_info
   * @property {number} i_limit The count of visits that the Purchase Option allows the client to make.
   * @property {?number} i_limit_duration The maximum number of minutes that current Purchase Option can be used for.
   * @property {number} i_remain The count of the remaining visits.
   * @property {?number} i_remain_duration The number of minutes left in this Purchase Option.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_Purchase72Model_a_login_promotion_a_restrict
   * @property {number} i_limit The limit of visits for the shortest restriction period.
   * @property {number} i_remain The number of remaining visits for the shortest restriction period.
   * @property {string} text_restriction The description of the shortest restriction period. For example "this week" or "for a four-day period".
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_Purchase72Model_a_login_promotion_a_restrict_data
   * @property {number} i_book The count of future sessions that are paid with this Purchase Option.
   * @property {number} i_limit The limit of visits for the restriction period.
   * @property {number} i_remain The number of remaining visits for the restriction period.
   * @property {number} i_use The usage count of the Purchase Option.
   * @property {number} i_visit_past The count of attended sessions before the last renewal. This will be '0' if no sessions before the last renewal or if the Purchase Option doesn't auto-renew.
   * @property {string} text_restriction The description of restriction period. For example, "this week" or "for a four-day period".
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_Purchase72Model_a_login_promotion
   * @property {Wl_Appointment_Book_Purchase_Purchase72Model_a_login_promotion_a_login_promotion_info} a_login_promotion_info Information about the Purchase Option. It contains the following information:
   * @property {Wl_Appointment_Book_Purchase_Purchase72Model_a_login_promotion_a_restrict} a_restrict Data about the shortest restriction period:
   * @property {Wl_Appointment_Book_Purchase_Purchase72Model_a_login_promotion_a_restrict_data} a_restrict_data Data about all restriction periods. Given as an array, where each record has the following structure:
   * @property {string[]} a_visit_limit The list of calendar restrictions of the Purchase Option. For example, four per week.
   * @property {number} i_limit The count of visits that the Purchase Option allows the client to make.
   * @property {?number} i_limit_duration The maximum number of minutes that current Purchase Option can be used for.
   * @property {number} i_promotion_priority Priority of this promotion. Result of {@link Wl_Promotion_Priority_PromotionPrioritySid} method.
   * @property {number} id_program Program types.
   * @property {boolean} is_share `true` if this purchase option is shared from another user. `false` if this purchase option belongs to the user for whom the request is made.
   * @property {string} k_login_promotion The Purchase Option login key.
   * @property {string} s_class_include The list of services provided by this Purchase Option.
   * @property {string} s_description The Purchase Option description.
   * @property {string} s_duration The Purchase Option duration.
   * @property {string} s_title The Purchase Option name.
   * @property {string} text_package_item If this Purchase Option is a package, then this field contains a list of Purchase Options contained in the package.
   * @property {string} uid_owner The user key of the owner of the promotion. Will be different from the user for whom the request is made if the promotion is shared.
   */

  /**
   * A list of the client's login promotions that can be applied to a given service.
   *
   * @get result
   * @type {Wl_Appointment_Book_Purchase_Purchase72Model_a_login_promotion[]}
   */
  this.a_login_promotion = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_Purchase72Model_a_purchase_a_image
   * @property {number} i_height Actual height of thumbnail image.
   * @property {number} i_height_src Height of original image.
   * @property {number} i_rotate Angle on which image was rotated compared to the original.
   * @property {number} i_width Actual width of thumbnail image.
   * @property {number} i_width_src Width of original image.
   * @property {boolean} is-resize Whether thumbnail is a resized variant of original image. If set to `false` value returned in `url-thumbnail` equals value in `url-view`.
   * @property {string} url-thumbnail Url to resized and rotated image in file storage. If size of original image is larger than specified by arguments, image thumbnail as created, and a link to this thumbnail is returned. Otherwise, link to original image is returned here.
   * @property {string} url-view Url to original image in file storage.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_Purchase72Model_a_purchase_a_payment
   * @property {string} m_discount The amount of the whole discount of one purchase item.
   * @property {string} m_discount_login The discount amount for the client type of one purchase item.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_Purchase72Model_a_purchase
   * @property {Wl_Appointment_Book_Purchase_Purchase72Model_a_purchase_a_image} a_image Information describing the logo of the purchase option. This value can be false if there is no logo described. Image information will have the following fields:
   * @property {Wl_Appointment_Book_Purchase_Purchase72Model_a_purchase_a_payment} a_payment The set of calculated values for payment:
   * @property {string[]} a_visit_limit A list of calendar restrictions of the Purchase Option in a human-readable format, for example: '4 per week'.
   * @property {string} dt_expire Date, when promotion expires.
   * @property {string} dt_start Date, when promotion starts.
   * @property {string} f_price The price of the Purchase Option.
   * @property {number} i Order number of the purchase option in the list.
   * @property {number} i_limit Count of visits that purchase option allows to make.
   * @property {?number} i_limit_duration Maximum number of minutes that current promotion can be used.
   * @property {number} i_payment_period Count of calendar periods (weeks, months, years) between payment for membership.
   * @property {number} id_duration A class for managing time intervals. Last ID: 9.
   * @property {number} id_program Program types.
   * @property {number} id_program_type Program types.
   * @property {number} id_promotion_price Program types.
   * @property {number} id_purchase_item A list of purchase types.
   * @property {boolean} is_contract This will be `true` if the Purchase Option is a contract. It will `false` otherwise.
   * @property {boolean} is_description `true` if purchase option has description.
   * @property {boolean} is_introductory `true` if promotion is introductory offer, `false` otherwise.
   * @property {boolean} is_renew This will be `true` if the Purchase Option will auto-renew. It will be `false` otherwise.
   * @property {boolean} is_renew_check Whether Purchase Option is renewable and the "auto-renew" option should be turned on by default.
   * @property {boolean} is_start This will be `true` if the Purchase Option has a duration that begins on purchase. It will be `false` otherwise.
   * @property {string} k_id Primary ID of the element in it's table.
   * @property {?string} m_price_old Price of single session purchase before online discount. `null` if service does not have online discount. Is set only if this purchase option is purchase of single visit.
   * @property {string} s_activation Activation settings of the promotion.
   * @property {string} s_class Class for designer to mark purchase options with different icons.
   * @property {string} s_class_include List of services included in the promotion.
   * @property {string} s_description Description of the purchase option.
   * @property {string} s_duration Duration of the promotion.
   * @property {string} s_payment_duration Period between payments for memberships.
   * @property {string} s_title Name of the purchase option.
   * @property {string} s_value Key of the purchase option in the format [`purchase_item_id`]::[`k_id`]
   * @property {string} sid_program_category Category of the program for promotions from {@link RsProgramCategorySid}.
   * @property {string} text_package_item If this promotion is a package. This field contains list of promotions contained in the package.
   */

  /**
   * An array with information about available Purchase Options.
   *
   * @get result
   * @type {Wl_Appointment_Book_Purchase_Purchase72Model_a_purchase[]}
   */
  this.a_purchase = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_Purchase72Model_a_reward_prize
   * @property {number} i_score Prize price in points.
   * @property {string} k_reward_prize Key of redeemable prize.
   * @property {string} text_description User friendly prize description.
   */

  /**
   * List of redeemable prizes which can be used to pay for service.
   *
   * @get result
   * @type {Wl_Appointment_Book_Purchase_Purchase72Model_a_reward_prize}
   */
  this.a_reward_prize = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_Purchase72Model_a_service_a_purchase
   * @property {number} id_purchase_item A list of purchase types.
   * @property {boolean} is_purchase_previous Should be `true` if this promotion is selected again, i.e. one that has already been applied to another appointment.  This is needed to correctly calculate the remaining quantity of promotions with limited uses.
   * @property {string} k_id Purchase item key.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_Purchase72Model_a_service
   * @property {Wl_Appointment_Book_Purchase_Purchase72Model_a_service_a_purchase} a_purchase List of purchase options selected for the service.    Should be set if a new purchase option is selected for this service.
   * @property {string} dt_date Local date/time to check purchase options expiration.
   * @property {?string} k_login_prize Login prize key.     `null` if no login prize used to pay for this service.
   * @property {?string} k_login_promotion Login promotion key.    Should be set if login promotion selected for this service.
   * @property {string} k_service Service key.
   * @property {string} k_timezone The timezone key for `dt_date` field.
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
   *
   * @get get
   * @type {Wl_Appointment_Book_Purchase_Purchase72Model_a_service[]}
   */
  this.a_service = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_Purchase72Model_a_session_pass
   * @property {number} i_remain Number of remaining visits on session pass.
   * @property {number} id_purchase_item A list of purchase types.
   * @property {string} k_session_pass Session pass key.
   * @property {string} s_title Session pass title.
   */

  /**
   * Session pass information in a case if user books same appointment second time and already has Drop-in.
   *
   * @get result
   * @type {Wl_Appointment_Book_Purchase_Purchase72Model_a_session_pass}
   */
  this.a_session_pass = undefined;

  /**
   * List of user keys to book appointments.
   * There may be empty values in this list, which means that this is a walk-in.
   *
   * @get get
   * @type {string[]}
   */
  this.a_uid = undefined;

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
   * In case this value is not specified returned image will have default thumbnail size.
   *
   * @get get
   * @type {?number}
   */
  this.i_height = null;

  /**
   * Image width in pixels. Please specify this value if you need image to be returned in specific size.
   * In case this value is not specified returned image will have default thumbnail size.
   *
   * @get get
   * @type {?number}
   */
  this.i_width = null;

  /**
   * The mode type. One of the {@link Wl_Mode_ModeSid} constants.
   *
   * @get get
   * @see Wl_Mode_ModeSid
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
  this.is_single_default = undefined;

  /**
   * If `true`, the client is a walk-in. Otherwise, this will be `false`.
   *
   * @get get
   * @type {boolean}
   */
  this.is_walk_in = false;

  /**
   * Appointment key. 
   * Not empty in case when we return payment options for rescheduling existing appointment.
   *
   * @get get
   * @type {?string}
   */
  this.k_appointment = null;

  /**
   * Location to show available appointment booking schedule.
   *
   * @get get,result
   * @type {string}
   */
  this.k_location = "";

  /**
   * The Purchase Option ID used to pay for the appointment.
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
  this.k_promotion_default = undefined;

  /**
   * The resource key.
   *
   * @get get
   * @type {string}
   */
  this.k_resource = "";

  /**
   * The service key used to select available Purchase Options.
   * If multiple services are selected, they should be specified in {@link Wl_Appointment_Book_Purchase_PurchaseModel.a_service} array.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "";

  /**
   * The timezone key for {@link Wl_Appointment_Book_Purchase_PurchaseModel.dt_date}.
   *
   * Can be `null` if timezone is not selected.
   * If not selected, the default client timezone will be used.
   *
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
  this.text_login_promotion = undefined;

  /**
   * The user key.
   *
   * This field is used if the client books for himself or for the relative.
   *
   * This field is incorrect to use for guest booking since in this case the client will be checked as a relative.
   *
   * In case of a group booking or a guest booking, the key of the client who is making the booking is set here.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Purchase_Purchase72Model);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Purchase_Purchase72Model.prototype.config=function()
{
  return {"a_field":{"a_login_prize":{"get":{"result":true}},"a_login_promotion":{"get":{"result":true}},"a_purchase":{"get":{"result":true}},"a_reward_prize":{"get":{"result":true}},"a_service":{"get":{"get":true}},"a_session_pass":{"get":{"result":true}},"a_uid":{"get":{"get":true}},"dt_date":{"get":{"get":true}},"i_duration":{"get":{"get":true}},"i_height":{"get":{"get":true}},"i_width":{"get":{"get":true}},"id_mode":{"get":{"get":true}},"is_backend":{"get":{"get":true}},"is_single_default":{"get":{"result":true}},"is_walk_in":{"get":{"get":true}},"k_appointment":{"get":{"get":true}},"k_location":{"get":{"get":true,"result":true}},"k_login_promotion":{"get":{"get":true,"result":true}},"k_promotion_default":{"get":{"result":true}},"k_resource":{"get":{"get":true}},"k_service":{"get":{"get":true}},"k_timezone":{"get":{"get":true}},"text_login_promotion":{"get":{"result":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Purchase_Purchase72Model.instanceGet
 * @param {string} dt_date The date to use to check for expiration of Purchase Options.
 * @param {string} k_location Location to show available appointment booking schedule.
 * @param {string} k_service The service key used to select available Purchase Options. If multiple services are selected, they should be specified in {@link Wl_Appointment_Book_Purchase_PurchaseModel.a_service} array.
 * @param {string} k_resource The resource key.
 * @param {number} i_duration The asset booking duration.
 * @param {boolean} is_backend `true` - get all Purchase Options suitable for appointment. `false` - get only Purchase Options available for the client.
 * @param {string} uid The user key. This field is used if the client books for himself or for the relative. This field is incorrect to use for guest booking since in this case the client will be checked as a relative. In case of a group booking or a guest booking, the key of the client who is making the booking is set here.
 * @param {?string} k_timezone The timezone key for {@link Wl_Appointment_Book_Purchase_PurchaseModel.dt_date}. Can be `null` if timezone is not selected. If not selected, the default client timezone will be used. In any case, the timezone will be used if the business allows client timezones.
 * @param {?string} k_appointment Appointment key. Not empty in case when we return payment options for rescheduling existing appointment.
 * @returns {Wl_Appointment_Book_Purchase_Purchase72Model}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves a list of information about available purchase options.
 *
 * Extends `get()` to also support rescheduling an existing appointment by
 * accepting an optional appointment key. When a key is provided, the existing appointment is
 * validated and its current Purchase Option usage is taken into account when calculating
 * eligibility for available options.
 *
 * @function
 * @name Wl_Appointment_Book_Purchase_Purchase72Model.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
