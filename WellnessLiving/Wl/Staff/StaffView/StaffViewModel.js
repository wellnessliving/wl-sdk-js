/**
 * Retrieves information about staff.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Staff_StaffView_StaffViewModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_staff";

  /**
   * @typedef {{}} Wl_Staff_StaffView_StaffViewModel_a_class_day_a_class_period
   * @property {string} dt_time Session start time in MySQL format.
   * @property {number} i_duration Session duration in seconds.
   * @property {string} s_title Class name.
   */
  /**
   * @typedef {{}} Wl_Staff_StaffView_StaffViewModel_a_class_day
   * @property {Wl_Staff_StaffView_StaffViewModel_a_class_day_a_class_period} a_class_period List of sessions in day:
   * <dl>
   *   <dt>
   *     string <tt>dt_time</tt>
   *   </dt>
   *   <dd>
   *     Session start time in MySQL format.
   *   </dd>
   *   <dt>
   *     int <tt>i_duration</tt>
   *   </dt>
   *   <dd>
   *     Session duration in seconds.
   *   </dd>
   *   <dt>
   *     string <tt>s_title</tt>
   *   </dt>
   *   <dd>
   *     Class name.
   *   </dd>
   * </dl>
   * @property {number} i_day Day of week. One of {@link ADateWeekSid} constants.
   */

  /**
   * Contains first staff schedule of classes per day:
   * <dl>
   *   <dt>
   *     array <var>a_class_period</var>
   *   </dt>
   *   <dd>
   *     List of sessions in day:
   *     <dl>
   *       <dt>
   *         string <var>dt_time</var>
   *       </dt>
   *       <dd>
   *         Session start time in MySQL format.
   *       </dd>
   *       <dt>
   *         int <var>i_duration</var>
   *       </dt>
   *       <dd>
   *         Session duration in seconds.
   *       </dd>
   *       <dt>
   *         string <var>s_title</var>
   *       </dt>
   *       <dd>
   *         Class name.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     int <var>i_day</var>
   *   </dt>
   *   <dd>
   *     Day of week. One of {@link ADateWeekSid} constants.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Staff_StaffView_StaffViewModel_a_class_day}
   */
  this.a_class_day = undefined;

  /**
   * @typedef {{}} Wl_Staff_StaffView_StaffViewModel_a_result_list
   * @property {{}} a_class_day Contains schedule of classes per day
   * @property {{}} a_staff Staff information
   */

  /**
   * Staff list of staff data and class day
   * <dl>
   *   <dt>
   *     array <var>a_class_day</var>
   *   </dt>
   *   <dd>
   *     Contains schedule of classes per day
   *   </dd>
   *   <dt>
   *     array <var>a_staff</var>
   *   </dt>
   *   <dd>
   *     Staff information
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Staff_StaffView_StaffViewModel_a_result_list}
   */
  this.a_result_list = undefined;

  /**
   * @typedef {{}} Wl_Staff_StaffView_StaffViewModel_a_staff
   * @property {{}} a_photo Staff`s photo. See {@link \RsStaffImage::data()}.
   * @property {number} id_gender Staff member's gender. One of {@link \Wl\Gender\GenderSid} constants.
   * @property {string} k_location Staff`s current location.
   * @property {string} s_biography Staff biography.
   * @property {string} s_family 1st letter of surname.
   * @property {string} s_name Staff name.
   * @property {string} s_position Staff job name.
   * @property {string} text_business_role Staff`s business role name.
   * @property {string} uid Staff user ID.
   */

  /**
   * First staff information:
   * <dl>
   *   <dt>
   *     array <var>a_photo</var>
   *   </dt>
   *   <dd>
   *     Staff`s photo. See {@link \RsStaffImage::data()}.
   *   </dd>
   *   <dt>
   *     int <var>id_gender</var>
   *   </dt>
   *   <dd>
   *     Staff member's gender. One of {@link \Wl\Gender\GenderSid} constants.
   *   </dd>
   *   <dt>
   *     string <var>k_location</var>
   *   </dt>
   *   <dd>
   *     Staff`s current location.
   *   </dd>
   *   <dt>
   *     string <var>s_biography</var>
   *   </dt>
   *   <dd>
   *     Staff biography.
   *   </dd>
   *   <dt>
   *     string <var>s_family</var>
   *   </dt>
   *   <dd>
   *     1st letter of surname.
   *   </dd>
   *   <dt>
   *     string <var>s_name</var>
   *   </dt>
   *   <dd>
   *     Staff name.
   *   </dd>
   *   <dt>
   *     string <var>s_position</var>
   *   </dt>
   *   <dd>
   *     Staff job name.
   *   </dd>
   *   <dt>
   *     string <var>text_business_role</var>
   *   </dt>
   *   <dd>
   *     Staff`s business role name.
   *   </dd>
   *   <dt>
   *     string <var>uid</var>
   *   </dt>
   *   <dd>
   *     Staff user ID.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Staff_StaffView_StaffViewModel_a_staff}
   */
  this.a_staff = undefined;

  /**
   * List of staff keys.
   *
   * Primary key in {@link \RsStaffSql}.
   *
   * @get get
   * @type {string[]}
   */
  this.a_staff_list = undefined;

  /**
   * ID of a business to show information for.
   *
   * Primary key in {@link \RsBusinessSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Staff key.
   *
   * Primary key in {@link \RsStaffSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_staff = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Staff_StaffView_StaffViewModel);

/**
 * @inheritDoc
 */
Wl_Staff_StaffView_StaffViewModel.prototype.config=function()
{
  return {"a_field": {"a_class_day": {"get": {"result": true}},"a_result_list": {"get": {"result": true}},"a_staff": {"get": {"result": true}},"a_staff_list": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_staff": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Staff_StaffView_StaffViewModel.instanceGet
 * @param {string} k_business ID of a business to show information for. Primary key in {@link \RsBusinessSql}.
 * @param {string} k_staff Staff key. Primary key in {@link \RsStaffSql}.
 * @returns {Wl_Staff_StaffView_StaffViewModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */