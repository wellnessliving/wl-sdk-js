/**
 * An endpoint that returns information about a specified staff member.
 *
 * This method can accept one staff key {@link Wl_Staff_StaffView_StaffViewModel.k_staff} or a staff list
 * {@link Wl_Staff_StaffView_StaffViewModel.a_staff_list} but not both (an exception would be thrown).
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
   * @property {string} dt_time The session start time in MySQL format.
   * @property {number} i_duration The session duration in seconds.
   * @property {string} s_title The class name.
   */
  /**
   * @typedef {{}} Wl_Staff_StaffView_StaffViewModel_a_class_day
   * @property {Wl_Staff_StaffView_StaffViewModel_a_class_day_a_class_period} a_class_period A list of sessions in the day:
   * <dl>
   *   <dt>string <tt>dt_time</tt></dt>
   *   <dd>The session start time in MySQL format.</dd>
   *   <dt>int <tt>i_duration</tt></dt>
   *   <dd>The session duration in seconds.</dd>
   *   <dt>string <tt>s_title</tt></dt>
   *   <dd>The class name.</dd>
   * </dl>
   * @property {number} i_day The day of week. One of {@link ADateWeekSid} constants.
   */

  /**
   * An array containing information about the classes this staff member is running.
   * Each element contains another array with three elements:
   *
   * <dl>
   *   <dt>
   *     array <var>a_class_period</var>
   *   </dt>
   *   <dd>
   *     A list of sessions in the day:
   *     <dl>
   *       <dt>string <var>dt_time</var></dt>
   *       <dd>The session start time in MySQL format.</dd>
   *       <dt>int <var>i_duration</var></dt>
   *       <dd>The session duration in seconds.</dd>
   *       <dt>string <var>s_title</var></dt>
   *       <dd>The class name.</dd>
   *     </dl>
   *   </dd>
   *   <dt>int <var>i_day</var></dt>
   *   <dd>The day of week. One of {@link ADateWeekSid} constants.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Staff_StaffView_StaffViewModel_a_class_day[]}
   */
  this.a_class_day = undefined;

  /**
   * @typedef {{}} Wl_Staff_StaffView_StaffViewModel_a_result_list_a_class_day_a_staff
   * @property {number} id_gender The staff member's gender. One of the {@link AGenderSid} constants.
   * @property {string} s_biography A description of the staff member. This description can include HTML tags.
   * @property {string} s_family The staff member surname.
   * @property {string} s_name The staff member first name.
   * @property {string} s_position The staff member position in the organization.
   * @property {string} uid The user ID. Each staff member in WellnessLiving can also access the system as a client of their business.
   *   This is the ID number used to represent the staff member as a client.
   */
  /**
   * @typedef {{}} Wl_Staff_StaffView_StaffViewModel_a_result_list_a_class_day_a_class_period
   * @property {string} dt_time The session start time in MySQL format.
   * @property {number} i_duration The session duration in seconds.
   * @property {string} s_title The class name.
   */
  /**
   * @typedef {{}} Wl_Staff_StaffView_StaffViewModel_a_result_list_a_class_day
   * @property {Wl_Staff_StaffView_StaffViewModel_a_result_list_a_class_day_a_class_period} a_class_period A list of sessions in the day:<dl>
   * <dt>string <tt>dt_time</tt></dt>
   * <dd>The session start time in MySQL format.</dd>
   * <dt>int <tt>i_duration</tt></dt>
   * <dd>The session duration in seconds.</dd>
   * <dt>string <tt>s_title</tt></dt>
   * <dd>The class name.</dd>
   *   </dl>
   * @property {number} i_day The day of week. One of {@link ADateWeekSid} constants.
   */
  /**
   * @typedef {{}} Wl_Staff_StaffView_StaffViewModel_a_result_list
   * @property {Wl_Staff_StaffView_StaffViewModel_a_result_list_a_class_day} a_class_day Contains a schedule of classes per day:
   * <dl>
   *   <dt>array <tt>a_class_period</tt></dt>
   *   <dd>A list of sessions in the day:<dl>
   *     <dt>string <tt>dt_time</tt></dt>
   *     <dd>The session start time in MySQL format.</dd>
   *     <dt>int <tt>i_duration</tt></dt>
   *     <dd>The session duration in seconds.</dd>
   *     <dt>string <tt>s_title</tt></dt>
   *     <dd>The class name.</dd>
   *   </dl></dd>
   *   <dt>int <tt>i_day</tt></dt>
   *   <dd>The day of week. One of {@link ADateWeekSid} constants.</dd>
   * </dl>
   * @property {Wl_Staff_StaffView_StaffViewModel_a_result_list_a_class_day_a_staff} a_staff Staff information:
   * <dl>
   *   <dt>int <tt>id_gender</tt></dt>
   *   <dd>The staff member's gender. One of the {@link AGenderSid} constants.</dd>
   *   <dt>string <tt>s_biography</tt></dt>
   *   <dd>A description of the staff member. This description can include HTML tags.</dd>
   *   <dt>string <tt>s_family</tt></dt>
   *   <dd>The staff member surname.</dd>
   *   <dt>string <tt>s_name</tt></dt>
   *   <dd>The staff member first name.</dd>
   *   <dt>string <tt>s_position</tt></dt>
   *   <dd>The staff member position in the organization.</dd>
   *   <dt>string <tt>uid</tt></dt>
   *   <dd>The user ID. Each staff member in WellnessLiving can also access the system as a client of their business.
   *   This is the ID number used to represent the staff member as a client.</dd>
   * </dl>
   */

  /**
   * An array listing the class sessions the staff member provides at each location.
   *
   * <dl>
   *   <dt>array <var>a_class_day</var></dt>
   *   <dd>
   *     Contains a schedule of classes per day:
   *     <dl>
   *       <dt>array <var>a_class_period</var></dt>
   *       <dd>A list of sessions in the day:<dl>
   *         <dt>string <var>dt_time</var></dt>
   *         <dd>The session start time in MySQL format.</dd>
   *         <dt>int <var>i_duration</var></dt>
   *         <dd>The session duration in seconds.</dd>
   *         <dt>string <var>s_title</var></dt>
   *         <dd>The class name.</dd>
   *       </dl></dd>
   *       <dt>int <var>i_day</var></dt>
   *       <dd>The day of week. One of {@link ADateWeekSid} constants.</dd>
   *     </dl>
   *   </dd>
   *   <dt>array <var>a_staff</var></dt>
   *   <dd>
   *     Staff information:
   *     <dl>
   *       <dt>int <var>id_gender</var></dt>
   *       <dd>The staff member's gender. One of the {@link AGenderSid} constants.</dd>
   *       <dt>string <var>s_biography</var></dt>
   *       <dd>A description of the staff member. This description can include HTML tags.</dd>
   *       <dt>string <var>s_family</var></dt>
   *       <dd>The staff member surname.</dd>
   *       <dt>string <var>s_name</var></dt>
   *       <dd>The staff member first name.</dd>
   *       <dt>string <var>s_position</var></dt>
   *       <dd>The staff member position in the organization.</dd>
   *       <dt>string <var>uid</var></dt>
   *       <dd>The user ID. Each staff member in WellnessLiving can also access the system as a client of their business.
   *       This is the ID number used to represent the staff member as a client.</dd>
   *     </dl>
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Staff_StaffView_StaffViewModel_a_result_list[]}
   */
  this.a_result_list = undefined;

  /**
   * @typedef {{}} Wl_Staff_StaffView_StaffViewModel_a_staff
   * @property {{}} a_photo Staff`s photo. See {@link RsStaffImage::data()}.
   * @property {number} id_gender The staff member's gender. One of the {@link AGenderSid} constants.
   * @property {string} k_location Staff`s current location.
   * @property {string} s_biography A description of the staff member. This description can include HTML tags.
   * @property {string} s_family The staff member surname.
   * @property {string} s_name The staff member first name.
   * @property {string} s_position The staff member position in the organization.
   * @property {string} uid The user ID. Each staff member in WellnessLiving can also access the system as a client of their business.
   * This is the ID number used to represent the staff member as a client.
   */

  /**
   * An array containing information about the staff member.
   *
   * <dl>
   *   <dt>array <var>a_photo</var></dt>
   *   <dd>Staff`s photo. See {@link RsStaffImage::data()}.</dd>
   *   <dt>int <var>id_gender</var></dt>
   *   <dd>The staff member's gender. One of the {@link AGenderSid} constants.</dd>
   *   <dt>string <var>k_location</var></dt>
   *   <dd>Staff`s current location.</dd>
   *   <dt>string <var>s_biography</var></dt>
   *   <dd>A description of the staff member. This description can include HTML tags.</dd>
   *   <dt>string <var>s_family</var></dt>
   *   <dd>The staff member surname.</dd>
   *   <dt>string <var>s_name</var></dt>
   *   <dd>The staff member first name.</dd>
   *   <dt>string <var>s_position</var></dt>
   *   <dd>The staff member position in the organization.</dd>
   *   <dt>string <var>uid</var></dt>
   *   <dd>
   *     The user ID. Each staff member in WellnessLiving can also access the system as a client of their business.
   *     This is the ID number used to represent the staff member as a client.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Staff_StaffView_StaffViewModel_a_staff}
   */
  this.a_staff = undefined;

  /**
   * A list of staff keys.
   *
   * @get get
   * @type {string[]}
   */
  this.a_staff_list = undefined;

  /**
   * Image height in pixels. Please specify this value if you need image to be returned in specific size.
   * In case this value is not specified returned image will have default thumbnail size.
   *
   * @get get
   * @type {number}
   */
  this.i_image_height = 0;

  /**
   * Image width in pixels. Please specify this value if you need image to be returned in specific size.
   * In case this value is not specified returned image will have default thumbnail size.
   *
   * @get get
   * @type {number}
   */
  this.i_image_width = 0;

  /**
   * The key of the business to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The staff member key.
   * A staff member can work for more than one business. This key can be found using the
   * {@link Wl_Staff_StaffList_StaffListModel} endpoint.
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
  return {"a_field": {"a_class_day": {"get": {"result": true}},"a_result_list": {"get": {"result": true}},"a_staff": {"get": {"result": true}},"a_staff_list": {"get": {"get": true}},"i_image_height": {"get": {"get": true}},"i_image_width": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_staff": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Staff_StaffView_StaffViewModel.instanceGet
 * @param {string} k_business The key of the business to show information for.
 * @param {string} k_staff The staff member key. A staff member can work for more than one business. This key can be found using the {@link Wl_Staff_StaffList_StaffListModel} endpoint.
 * @returns {Wl_Staff_StaffView_StaffViewModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */