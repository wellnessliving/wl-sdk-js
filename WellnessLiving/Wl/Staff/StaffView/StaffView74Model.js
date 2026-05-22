/**
 * Returns information about a specified staff member.
 *
 * This method can accept one staff UID {@link Wl_Staff_StaffView_StaffView74Model.uid_staff} or a staff UID list
 * {@link Wl_Staff_StaffView_StaffView74Model.a_uid_staff_list} but not both an exception would be thrown.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Staff_StaffView_StaffView74Model()
{
    WlSdk_ModelAbstract.apply(this);

    /**
     * @inheritDoc
     */
    this._s_key = "k_business,uid_staff";

    /**
     * @typedef {{}} Wl_Staff_StaffView_StaffView74Model_a_class_day_a_class_period
     * @property {string} dt_time The session start time in MySQL format.
     * @property {number} i_duration The session duration in seconds.
     * @property {string} s_title The class name.
     * @property {string} url_book Direct book URL of this class.
     */
    /**
     * @typedef {{}} Wl_Staff_StaffView_StaffView74Model_a_class_day
     * @property {Wl_Staff_StaffView_StaffView74Model_a_class_day_a_class_period} a_class_period A list of sessions in the day:
     * <dl>
     *   <dt>string <tt>dt_time</tt></dt>
     *   <dd>The session start time in MySQL format.</dd>
     *   <dt>int <tt>i_duration</tt></dt>
     *   <dd>The session duration in seconds.</dd>
     *   <dt>string <tt>s_title</tt></dt>
     *   <dd>The class name.</dd>
     *   <dt>string <tt>url_book</tt></dt>
     *   <dd>Direct book URL of this class.</dd>
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
     *       <dt>string <var>url_book</var></dt>
     *       <dd>Direct book URL of this class.</dd>
     *     </dl>
     *   </dd>
     *   <dt>int <var>i_day</var></dt>
     *   <dd>The day of week. One of {@link ADateWeekSid} constants.</dd>
     * </dl>
     *
     * @get result
     * @type {Wl_Staff_StaffView_StaffView74Model_a_class_day[]}
     */
    this.a_class_day = undefined;

    /**
     * @typedef {{}} Wl_Staff_StaffView_StaffView74Model_a_result_list
     * @property {{}} a_class_day Contains a schedule of classes per day.
     * Each element has a structure like in {@link Wl_Staff_StaffView_StaffViewModel.a_class_day} property.
     * @property {{}} a_staff Staff information.
     * Each element has a structure like in {@link Wl_Staff_StaffView_StaffViewModel.a_staff} property.
     */

    /**
     * An array listing the class sessions the staff member provides at each location.
     *
     * <dl>
     *   <dt>array <var>a_class_day</var></dt>
     *   <dd>
     *     Contains a schedule of classes per day.
     *     Each element has a structure like in {@link Wl_Staff_StaffView_StaffViewModel.a_class_day} property.
     *   </dd>
     *   <dt>array <var>a_staff</var></dt>
     *   <dd>
     *     Staff information.
     *     Each element has a structure like in {@link Wl_Staff_StaffView_StaffViewModel.a_staff} property.
     *   </dd>
     * </dl>
     *
     * @get result
     * @type {Wl_Staff_StaffView_StaffView74Model_a_result_list[]}
     */
    this.a_result_list = undefined;

    /**
     * @typedef {{}} Wl_Staff_StaffView_StaffView74Model_a_staff
     * @property {{}} a_location_work A list of locations keys where staff works.
     * @property {{}} a_photo Staff`s photo. See {@link RsStaffImage::dataUid()}.</dd>
     *   <dt>string &lt;var&gt;html_biography&lt;/var&gt;&lt;/dt&gt;
     *   <dd>
     * A description of the staff member. This description can include HTML tags.
     * Same as `s_biography` offset.
     *   </dd>
     *   <dt>string &lt;var&gt;html_first&lt;/var&gt;&lt;/dt&gt;
     *   <dd>The first name of the staff.</dd>
     *   <dt>string &lt;var&gt;html_last&lt;/var&gt;&lt;/dt&gt;
     *   <dd>The last name of the staff.</dd>
     *   <dt>string &lt;var&gt;html_location_title&lt;/var&gt;&lt;/dt&gt;
     *   <dd>Name of the current staff location.</dd>
     *   <dt>int &lt;var&gt;id_gender&lt;/var&gt;&lt;/dt&gt;
     *   <dd>The staff member's gender. One of the {@link AGenderSid} constants.</dd>
     *   <dt>bool &lt;var&gt;is_classes_events&lt;/var&gt;&lt;/dt&gt;
     *   <dd>`true` in case when staff provides classes/events in home location, `false` otherwise.</dd>
     *   <dt>bool &lt;var&gt;is_publish_business_page&lt;/var&gt;&lt;/dt&gt;
     *   <dd>Whether staff member should be published on business pages.</dd>
     *   <dt>bool &lt;var&gt;is_schedule_enabled&lt;/var&gt;&lt;/dt&gt;
     *   <dd>`true` in case when for schedule exists for staff, `false` otherwise.</dd>
     *   <dt>string &lt;var&gt;k_location&lt;/var&gt;&lt;/dt&gt;
     *   <dd>Staff`s current location.
     * @property {string} s_biography A description of the staff member. This description can include HTML tags.
     * <b>Deprecated</b> use `html_biography` instead of this.
     * @property {string} s_family The staff member surname. If there are rights, the full surname, if not, then depending on the business settings.
     * @property {string} s_name The staff member first name. If there are rights, the full first name, if not, then depending on the business settings.
     * @property {string} s_position The staff member position in the organization.
     * @property {string} text_business_role Name of the staff role.
     * @property {string} text_full_name Full name of the staff according to business settings.
     * @property {string} uid The user ID. Each staff member in WellnessLiving can also access the system as a client of their business.
     * This is the ID number used to represent the staff member as a client.
     * @property {string} uid_staff The staff user ID.
     * @property {string} url_schedule URL to the schedule with this staff.
     */

    /**
     * An array containing information about the staff member.
     *
     * <dl>
     *   <dt>array <var>a_location_work</var></dt>
     *   <dd>A list of locations keys where staff works.</dd>
     *   <dt>array <var>a_photo</var></dt>
     *   <dd>Staff`s photo. See {@link RsStaffImage::dataUid()}.</dd>
     *   <dt>string &lt;var&gt;html_biography&lt;/var&gt;&lt;/dt&gt;
     *   <dd>
     *     A description of the staff member. This description can include HTML tags.
     *     Same as `s_biography` offset.
     *   </dd>
     *   <dt>string &lt;var&gt;html_first&lt;/var&gt;&lt;/dt&gt;
     *   <dd>The first name of the staff.</dd>
     *   <dt>string &lt;var&gt;html_last&lt;/var&gt;&lt;/dt&gt;
     *   <dd>The last name of the staff.</dd>
     *   <dt>string &lt;var&gt;html_location_title&lt;/var&gt;&lt;/dt&gt;
     *   <dd>Name of the current staff location.</dd>
     *   <dt>int &lt;var&gt;id_gender&lt;/var&gt;&lt;/dt&gt;
     *   <dd>The staff member&#039;s gender. One of the {@link AGenderSid} constants.</dd>
     *   <dt>bool &lt;var&gt;is_classes_events&lt;/var&gt;&lt;/dt&gt;
     *   <dd>`true` in case when staff provides classes/events in home location, `false` otherwise.</dd>
     *   <dt>bool &lt;var&gt;is_publish_business_page&lt;/var&gt;&lt;/dt&gt;
     *   <dd>Whether staff member should be published on business pages.</dd>
     *   <dt>bool &lt;var&gt;is_schedule_enabled&lt;/var&gt;&lt;/dt&gt;
     *   <dd>`true` in case when for schedule exists for staff, `false` otherwise.</dd>
     *   <dt>string &lt;var&gt;k_location&lt;/var&gt;&lt;/dt&gt;
     *   <dd>Staff`s current location.</dd>
     *   <dt>string <var>s_biography</var></dt>
     *   <dd>
     *     A description of the staff member. This description can include HTML tags.
     *     <b>Deprecated</b> use `html_biography` instead of this.
     *   </dd>
     *   <dt>string <var>s_family</var></dt>
     *   <dd>The staff member surname. If there are rights, the full surname, if not, then depending on the business settings.</dd>
     *   <dt>string <var>s_name</var></dt>
     *   <dd>The staff member first name. If there are rights, the full first name, if not, then depending on the business settings.</dd>
     *   <dt>string <var>s_position</var></dt>
     *   <dd>The staff member position in the organization.</dd>
     *   <dt>string <var>text_business_role</var></dt>
     *   <dd>Name of the staff role.</dd>
     *   <dt>string <var>text_full_name</var></dt>
     *   <dd>Full name of the staff according to business settings.</dd>
     *   <dt>string <var>uid</var></dt>
     *   <dd>
     *     The user ID. Each staff member in WellnessLiving can also access the system as a client of their business.
     *     This is the ID number used to represent the staff member as a client.
     *   </dd>
     *   <dt>string <var>uid_staff</var></dt>
     *   <dd>
     *     The staff user ID.
     *   </dd>
     *   <dt>string <var>url_schedule</var></dt>
     *   <dd>
     *     URL to the schedule with this staff.
     *   </dd>
     * </dl>
     *
     * @get result
     * @type {Wl_Staff_StaffView_StaffView74Model_a_staff}
     */
    this.a_staff = undefined;

    /**
     * A list of staff user IDs.
     *
     * @get get
     * @type {?string[]}
     */
    this.a_uid_staff_list = null;

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
     * The staff member user ID.
     * A staff member can work for more than one business.
     * This key can be found using the {@link Wl_Staff_StaffList_StaffListModel} endpoint.
     *
     * @get get
     * @type {string}
     */
    this.uid_staff = "0";

    this.changeInit();
}

Core_Spa_Model.extend(Wl_Staff_StaffView_StaffView74ModelAbstract);

/**
 * @inheritDoc
 */
Wl_Staff_StaffView_StaffView74ModelAbstract.prototype.config=function()
{
    return {"a_field": {"a_class_day": {"get": {"result": true}},"a_result_list": {"get": {"result": true}},"a_staff": {"get": {"result": true}},"a_uid_staff_list": {"get": {"get": true}},"i_image_height": {"get": {"get": true}},"i_image_width": {"get": {"get": true}},"k_business": {"get": {"get": true}},"uid_staff": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Staff_StaffView_StaffView74Model.instanceGet
 * @param {string} k_business The key of the business to show information for.
 * @param {string} uid_staff The staff member user ID. A staff member can work for more than one business. This key can be found using the {@link Wl_Staff_StaffList_StaffListModel} endpoint.
 * @returns {Wl_Staff_StaffView_StaffView74Model}
 * @see WlSdk_ModelAbstract.instanceGet()
 */
