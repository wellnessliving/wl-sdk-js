/**
 * Retrieves a list of information about available purchase options.
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
  this._s_key = "dt_date,k_location,k_service,k_resource,i_duration,is_backend,uid";

  /**
   * @typedef {{}} Wl_Appointment_Book_Purchase_PurchaseModel_a_purchase
   * @property {string} a_image Logo of the purchase option. Result of the {@link \RsPromotionImageLogo::image()}.
   * @property {string[]} a_visit_limit List of calendar restrictions of the promotion, for example, 4 per week.
   * @property {string} dt_expire Date, when promotion expires.
   * @property {string} dt_start Date, when promotion starts.
   * @property {number} i Order number of the purchase option in the list.
   * @property {number} i_limit Count of visits that purchase option allows to make.
   * @property {number} i_payment_period Count of calendar periods (weeks, months, years) between payment for membership.
   * @property {number} id_program Program ID for promotions from {@link RsProgramSid}.
   * @property {number} id_purchase_item ID of the purchase item from {@link RsPurchaseItemSid}
   * @property {boolean} is_description <tt>true</tt> if purchase option has description.
   * @property {boolean} is_introductory <tt>true</tt> if promotion is introductory offer, <tt>false</tt> otherwise.
   * @property {number} k_id Primary ID of the element in it's table.
   * @property {string} m_price_old Price of single session purchase before online discount. <tt>null</tt> if service does not have online discount. Is set only if this purchase option is purchase of single visit.
   * @property {string} s_activation Activation settings of the promotion.
   * @property {string} s_class Class for designer to mark purchase options with different icons.
   * @property {string} s_class_include List of included in the promotion services.
   * @property {string} s_description Description of the purchase option.
   * @property {string} s_duration Duration of the promotion.
   * @property {string} s_payment_duration Period between payments for memberships.
   * @property {string} sid_program_category Category of the program for promotions from {@link \RsProgramCategorySid}.
   * @property {string} s_title Name of the purchase option.
   * @property {string} s_value Key of the purchase option in the format [<tt>purchase_item_id</tt>]::[<tt>k_id</tt>]
   */

  /**
   * List of the purchase options:
   * <dl>
   *   <dt>
   *     string <var>a_image</var>
   *   </dt>
   *   <dd>
   *     Logo of the purchase option. Result of the {@link \RsPromotionImageLogo::image()}.
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
   *     int <var>i_payment_period</var>
   *   </dt>
   *   <dd>
   *     Count of calendar periods (weeks, months, years) between payment for membership.
   *   </dd>
   *   <dt>
   *     int <var>id_program</var>
   *   </dt>
   *   <dd>
   *     Program ID for promotions from {@link RsProgramSid}.
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
   *     <tt>true</tt> if purchase option has description.
   *   </dd>
   *   <dt>
   *     bool <var>is_introductory</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if promotion is introductory offer, <tt>false</tt> otherwise.
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
   *     Price of single session purchase before online discount. <tt>null</tt> if service does not have online discount. Is set only if this purchase option is purchase of single visit.
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
   *     Category of the program for promotions from {@link \RsProgramCategorySid}.
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
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Purchase_PurchaseModel_a_purchase[]}
   */
  this.a_purchase = undefined;

  /**
   * Date/time to check purchase options expiration (in UTC).
   *
   * @get get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * Duration of the service in minutes.
   *
   * @get get
   * @type {number}
   */
  this.i_duration = 0;

  /**
   * <tt>true</tt> - get all promotions suitable for appointment;
   * <tt>false</tt> - get only promotions available for client.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * Location to show available appointment booking schedule.
   *
   * Primary key in {@link \RsLocationSql} table.
   *
   * @get get,result
   * @post get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * Login promotion key suitable to pay for the appointment.
   *
   * @get result
   * @type {string}
   */
  this.k_login_promotion = undefined;

  /**
   * Resource key to select available purchase options.
   *
   * @get get
   * @type {string}
   */
  this.k_resource = "0";

  /**
   * Service key to select available purchase options.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "0";

  /**
   * User to get information for.
   *
   * Primary key in {@link \PassportLoginSql} table.
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
  return {"a_field": {"a_purchase": {"get": {"result": true}},"dt_date": {"get": {"get": true}},"i_duration": {"get": {"get": true}},"is_backend": {"get": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"k_login_promotion": {"get": {"result": true}},"k_resource": {"get": {"get": true}},"k_service": {"get": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Purchase_PurchaseModel.instanceGet
 * @param {string} dt_date Date/time to check purchase options expiration (in UTC).
 * @param {string} k_location Location to show available appointment booking schedule. Primary key in {@link \RsLocationSql} table.
 * @param {string} k_service Service key to select available purchase options.
 * @param {string} k_resource Resource key to select available purchase options.
 * @param {number} i_duration Duration of the service in minutes.
 * @param {boolean} is_backend <tt>true</tt> - get all promotions suitable for appointment; <tt>false</tt> - get only promotions available for client.
 * @param {string} uid User to get information for. Primary key in {@link \PassportLoginSql} table.
 * @returns {Wl_Appointment_Book_Purchase_PurchaseModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */