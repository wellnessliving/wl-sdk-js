/**
 * Loads unpaid appointments data for the multiple payment panel.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Attendance_Schedule_PaymentMultipleModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "dtl_date,k_business,k_location,k_visit,uid,is_simple";

  /**
   * List of appointment keys for which to load unpaid data.
   *
   * When specified, appointments are looked up directly by these keys, instead of by all unpaid
   *  appointments booked for {@link Wl_Profile_Attendance_Schedule_PaymentMultipleModel.uid} on the day specified in
   *  {@link Wl_Profile_Attendance_Schedule_PaymentMultipleModel.dtl_date}.
   *
   * @get get
   * @type {string[]}
   */
  this.a_appointment = undefined;

  /**
   * @typedef {{}} Wl_Profile_Attendance_Schedule_PaymentMultipleModel_a_client_a_relation
   * @property {number} id_family_relation Relation type between two relatives.
   * @property {string} uid_payer Payer UID.
   */

  /**
   * @typedef {{}} Wl_Profile_Attendance_Schedule_PaymentMultipleModel_a_client_a_service_a_addon
   * @property {string} html_price Formatted product price
   * @property {number} i_count Number of the product.
   * @property {boolean} is_paid `true` if the product is paid, otherwise `false`.
   * @property {string} m_price Product price.
   * @property {string} text_title Product title.
   */

  /**
   * @typedef {{}} Wl_Profile_Attendance_Schedule_PaymentMultipleModel_a_client_a_service_a_promotion_applicable
   * @property {number} i_order Sort order.
   * @property {string} m_price Promotion price.
   * @property {string} text_key Promotion key.
   * @property {string} text_price Promotion price.
   * @property {string} text_title Promotion title.
   */

  /**
   * @typedef {{}} Wl_Profile_Attendance_Schedule_PaymentMultipleModel_a_client_a_service_a_promotion_owned
   * @property {number} i_limit Limit of visits.
   * @property {number} i_order Sort order.
   * @property {number} i_remain The number of the remaining visits.
   * @property {string} text_key Promotion key.
   * @property {string} text_price Promotion price.
   * @property {string} text_title Promotion title.
   * @property {string} text_title_remain Promotion title with number of remaining sessions.
   */

  /**
   * @typedef {{}} Wl_Profile_Attendance_Schedule_PaymentMultipleModel_a_client_a_service
   * @property {Wl_Profile_Attendance_Schedule_PaymentMultipleModel_a_client_a_service_a_addon} a_addon List of add-ons:
   * @property {Wl_Profile_Attendance_Schedule_PaymentMultipleModel_a_client_a_service_a_promotion_applicable} a_promotion_applicable Promotions that can be used to pay for appointment:
   * @property {Wl_Profile_Attendance_Schedule_PaymentMultipleModel_a_client_a_service_a_promotion_owned} a_promotion_owned Promotions owned by the client, which can be used to pay for appointment:
   * @property {boolean} has_unpaid_addon `true` if appointment has unpaid add-ons, otherwise `false`.
   * @property {boolean} is_pay_need `true` if the appointment is not free and not paid, otherwise `false`.
   * @property {boolean} is_required `true` if the payment is required, otherwise `false`.
   * @property {string} k_appointment Appointment key.
   * @property {string} text_date Appointment date.
   * @property {string} text_service Appointment title.
   * @property {?string} text_staff Name of the staff leading the appointment. `null` for asset.
   * @property {string} text_time Appointment time.
   * @property {string} text_timezone_abbr Appointment timezone abbreviation.
   * @property {string} uid_staff Appointment staff user key, primary key in PassportLoginSql table.
   */

  /**
   * @typedef {{}} Wl_Profile_Attendance_Schedule_PaymentMultipleModel_a_client
   * @property {?Wl_Profile_Attendance_Schedule_PaymentMultipleModel_a_client_a_relation} a_relation Information about relation. `null` if there is no relation, in particular when appointments  are loaded by {@link Wl_Profile_Attendance_Schedule_PaymentMultipleModel.a_appointment}.
   * @property {Wl_Profile_Attendance_Schedule_PaymentMultipleModel_a_client_a_service} a_service Unpaid appointments data.
   * @property {string} uid The user for whom the appointment is booked.
   */

  /**
   * Clients' data.
   * Clients with unpaid appointments data, each element has next structure:
   *
   * @get result
   * @type {Wl_Profile_Attendance_Schedule_PaymentMultipleModel_a_client}
   */
  this.a_client = undefined;

  /**
   * List of available staff members for tips.
   *
   * @get result
   * @type {*}
   */
  this.a_staff_list = undefined;

  /**
   * @typedef {{}} Wl_Profile_Attendance_Schedule_PaymentMultipleModel_a_visit_pay
   * @property {string[]} a_shop_product_option Selected for payment products options keys.
   * @property {string} k_visit The visit key.
   * @property {string} text_key Selected pay option to apply. The key has structure {@link Wl_Visit_Pay_PayChangeModel.text_key}.
   * @property {string} uid The user key.
   */

  /**
   * Visits payment data.
   *
   * Visits payment data to apply:
   *
   * @post get
   * @type {Wl_Profile_Attendance_Schedule_PaymentMultipleModel_a_visit_pay[]}
   */
  this.a_visit_pay = undefined;

  /**
   * Local date and time for which visit is booked in MySQL format.
   *
   * @get get
   * @type {string}
   */
  this.dtl_date = "";

  /**
   * Total number of unpaid appointments.
   *
   * @get result
   * @type {number}
   */
  this.i_unpaid_number = undefined;

  /**
   * Determines for which store page the redirection url should be generated.
   * `true` if to the checkout page.
   * `false` if to the cart page.
   *
   * @post get
   * @type {boolean}
   */
  this.is_checkout = false;

  /**
   * When set to `true` it's mean that need load full information about unpaid visits:
   *  * List of available/existing POs.
   *  * List of unpaid addons.
   *  When set to `false` loaded only general information about visits on passed day.
   *
   * @get get
   * @type {boolean}
   */
  this.is_simple = false;

  /**
   * Whether tips are accepted.
   *
   * @get result
   * @type {boolean}
   */
  this.is_tip = undefined;

  /**
   * The business key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * Last booked visit key.
   *
   * @get get
   * @type {string}
   */
  this.k_visit = "";

  /**
   * The user's key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "";

  /**
   * Url for redirect after applying existing purchase options.
   *
   * @post result
   * @type {string}
   */
  this.url_redirect = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Attendance_Schedule_PaymentMultipleModel);

/**
 * @inheritDoc
 */
Wl_Profile_Attendance_Schedule_PaymentMultipleModel.prototype.config=function()
{
  return {"a_field":{"a_appointment":{"get":{"get":true}},"a_client":{"get":{"result":true}},"a_staff_list":{"get":{"result":true}},"a_visit_pay":{"post":{"get":true}},"dtl_date":{"get":{"get":true}},"i_unpaid_number":{"get":{"result":true}},"is_checkout":{"post":{"get":true}},"is_simple":{"get":{"get":true}},"is_tip":{"get":{"result":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_location":{"get":{"get":true}},"k_visit":{"get":{"get":true}},"uid":{"get":{"get":true},"post":{"get":true}},"url_redirect":{"post":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Profile_Attendance_Schedule_PaymentMultipleModel.instanceGet
 * @param {string} dtl_date Local date and time for which visit is booked in MySQL format.
 * @param {string} k_business The business key.
 * @param {string} k_location The location key.
 * @param {string} k_visit Last booked visit key.
 * @param {string} uid The user's key.
 * @param {boolean} is_simple When set to `true` it's mean that need load full information about unpaid visits: * List of available/existing POs. * List of unpaid addons. When set to `false` loaded only general information about visits on passed day.
 * @returns {Wl_Profile_Attendance_Schedule_PaymentMultipleModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Loads unpaid appointments data for the multiple payment panel.
 *
 * Loads unpaid appointments together with their addons, applicable purchase options, and
 * purchase options already owned by the client. Appointments are loaded either for a client
 * and their relatives on a specific day, or for an explicit list of appointments specified in
 * {@link Wl_Profile_Attendance_Schedule_PaymentMultipleModel.a_appointment}.
 *
 * @function
 * @name Wl_Profile_Attendance_Schedule_PaymentMultipleModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Applies existing purchase options for appointments pay and generates a link for payment in the store.
 *
 * Applies purchase options and session passes already owned by the client to the selected
 * visits. Redirects to the store cart or checkout page so the client can complete payment for
 * any remaining unpaid addons or newly purchased purchase options.
 *
 * @function
 * @name Wl_Profile_Attendance_Schedule_PaymentMultipleModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
