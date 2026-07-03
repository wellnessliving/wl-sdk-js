/**
 * Retrieves information about staff.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @deprecated Use {@link _Wl_Staff_StaffView_StaffView74Model}
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
   * @property {string} url_book Direct book URL of this class.
   */

  /**
   * @typedef {{}} Wl_Staff_StaffView_StaffViewModel_a_class_day
   * @property {Wl_Staff_StaffView_StaffViewModel_a_class_day_a_class_period} a_class_period A list of sessions in the day:
   * @property {number} i_day The day of week. One of {@link ADateWeekSid} constants.
   */

  /**
   * An array containing information about the classes this staff member is running.
   * Each element contains another array with three elements:
   *
   * @get result
   * @type {Wl_Staff_StaffView_StaffViewModel_a_class_day[]}
   */
  this.a_class_day = undefined;

  /**
   * @typedef {{}} Wl_Staff_StaffView_StaffViewModel_a_result_list_a_class_day_a_class_period
   * @property {string} dt_time The session start time in MySQL format.
   * @property {number} i_duration The session duration in seconds.
   * @property {string} s_title The class name.
   * @property {string} url_book Direct book URL of this class.
   */

  /**
   * @typedef {{}} Wl_Staff_StaffView_StaffViewModel_a_result_list_a_class_day
   * @property {Wl_Staff_StaffView_StaffViewModel_a_result_list_a_class_day_a_class_period} a_class_period A list of sessions in the day:
   * @property {number} i_day The day of week. One of {@link ADateWeekSid} constants.
   */

  /**
   * @typedef {{}} Wl_Staff_StaffView_StaffViewModel_a_result_list_a_staff_a_photo_a_image
   * @property {number} i_height Actual height of thumbnail image.
   * @property {number} i_height_src Height of original image.
   * @property {number} i_rotate Angle on which image was rotated compared to the original.
   * @property {number} i_width Actual width of thumbnail image.
   * @property {number} i_width_src Width of original image.
   * @property {boolean} is-resize Whether thumbnail is a resized variant of original image. If `false`, `url-thumbnail` equals `url-view`.
   * @property {string} url-thumbnail URL to resized and rotated image in file storage. If the original is larger than the specified dimensions, a thumbnail is created and its link is returned. Otherwise, the link to the original image is returned here.
   * @property {string} url-view URL to original image in file storage.
   */

  /**
   * @typedef {{}} Wl_Staff_StaffView_StaffViewModel_a_result_list_a_staff_a_photo
   * @property {Wl_Staff_StaffView_StaffViewModel_a_result_list_a_staff_a_photo_a_image} a_image Image data.
   * @property {number} i_height Height of image.
   * @property {number} i_width Width of image.
   * @property {number} id_gender Class to work with gender string identifiers.
   * @property {boolean} is_empty Whether is empty.
   * @property {string} k_staff Staff key.
   * @property {string} s_url Path to image.
   * @property {string} text_name Staff name.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Staff_StaffView_StaffViewModel_a_result_list_a_staff
   * @property {string[]} a_location_work A list of locations keys where staff works.
   * @property {Wl_Staff_StaffView_StaffViewModel_a_result_list_a_staff_a_photo} a_photo Staff's photo.
   * @property {string} html_biography A description of the staff member. This description can include HTML tags. Same as `s_biography` offset.
   * @property {string} html_first The first name of the staff.
   * @property {string} html_last The last name of the staff.
   * @property {string} html_location_title Name of the current staff location.
   * @property {number} id_gender String identifiers for gender.
   * @property {boolean} is_classes_events `true` in case when staff provides classes/events in home location, `false` otherwise.
   * @property {boolean} is_publish_business_page Whether staff member should be published on business pages.
   * @property {boolean} is_schedule_enabled `true` in case when for schedule exists for staff, `false` otherwise.
   * @property {string} k_location Staff's current location.
   * @property {string} k_staff Staff key.  <b>Deprecated</b>, use `uid_staff` instead.
   * @property {string} s_biography A description of the staff member. This description can include HTML tags. <b>Deprecated</b> use `html_biography` instead of this.
   * @property {string} s_family The staff member surname. If there are rights, the full surname, if not, then depending on the business settings.
   * @property {string} s_name The staff member first name. If there are rights, the full first name, if not, then depending on the business settings.
   * @property {string} s_position The staff member position in the organization.
   * @property {string} text_business_role Name of the staff role.
   * @property {string} text_full_name Full name of the staff according to business settings.
   * @property {string} uid The user ID. Each staff member in WellnessLiving can also access the system as a client of their business. This is the ID number used to represent the staff member as a client.
   * @property {string} uid_staff The staff user ID.
   * @property {string} url_schedule URL to the schedule with this staff.
   */

  /**
   * @typedef {{}} Wl_Staff_StaffView_StaffViewModel_a_result_list
   * @property {Wl_Staff_StaffView_StaffViewModel_a_result_list_a_class_day} a_class_day Contains a schedule of classes per day. Each element has a structure like in [StaffViewApi](/Wl/Staff/StaffView/StaffView.json) property.
   * @property {Wl_Staff_StaffView_StaffViewModel_a_result_list_a_staff} a_staff Staff information. Each element has a structure like in [StaffViewApi](/Wl/Staff/StaffView/StaffView.json) property.
   */

  /**
   * An array listing the class sessions the staff member provides at each location.
   *
   * @get result
   * @type {Wl_Staff_StaffView_StaffViewModel_a_result_list[]}
   */
  this.a_result_list = undefined;

  /**
   * @typedef {{}} Wl_Staff_StaffView_StaffViewModel_a_staff_a_photo_a_image
   * @property {number} i_height Actual height of thumbnail image.
   * @property {number} i_height_src Height of original image.
   * @property {number} i_rotate Angle on which image was rotated compared to the original.
   * @property {number} i_width Actual width of thumbnail image.
   * @property {number} i_width_src Width of original image.
   * @property {boolean} is-resize Whether thumbnail is a resized variant of original image. If `false`, `url-thumbnail` equals `url-view`.
   * @property {string} url-thumbnail URL to resized and rotated image in file storage. If the original is larger than the specified dimensions, a thumbnail is created and its link is returned. Otherwise, the link to the original image is returned here.
   * @property {string} url-view URL to original image in file storage.
   */

  /**
   * @typedef {{}} Wl_Staff_StaffView_StaffViewModel_a_staff_a_photo
   * @property {Wl_Staff_StaffView_StaffViewModel_a_staff_a_photo_a_image} a_image Image data.
   * @property {number} i_height Height of image.
   * @property {number} i_width Width of image.
   * @property {number} id_gender Class to work with gender string identifiers.
   * @property {boolean} is_empty Whether is empty.
   * @property {string} k_staff Staff key.
   * @property {string} s_url Path to image.
   * @property {string} text_name Staff name.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Staff_StaffView_StaffViewModel_a_staff
   * @property {string[]} a_location_work A list of locations keys where staff works.
   * @property {Wl_Staff_StaffView_StaffViewModel_a_staff_a_photo} a_photo Staff's photo.
   * @property {string} html_biography A description of the staff member. This description can include HTML tags. Same as `s_biography` offset.
   * @property {string} html_first The first name of the staff.
   * @property {string} html_last The last name of the staff.
   * @property {string} html_location_title Name of the current staff location.
   * @property {number} id_gender String identifiers for gender.
   * @property {boolean} is_classes_events `true` in case when staff provides classes/events in home location, `false` otherwise.
   * @property {boolean} is_publish_business_page Whether staff member should be published on business pages.
   * @property {boolean} is_schedule_enabled `true` in case when for schedule exists for staff, `false` otherwise.
   * @property {string} k_location Staff's current location.
   * @property {string} k_staff Staff key.  <b>Deprecated</b>, use `uid_staff` instead.
   * @property {string} s_biography A description of the staff member. This description can include HTML tags. <b>Deprecated</b> use `html_biography` instead of this.
   * @property {string} s_family The staff member surname. If there are rights, the full surname, if not, then depending on the business settings.
   * @property {string} s_name The staff member first name. If there are rights, the full first name, if not, then depending on the business settings.
   * @property {string} s_position The staff member position in the organization.
   * @property {string} text_business_role Name of the staff role.
   * @property {string} text_full_name Full name of the staff according to business settings.
   * @property {string} uid The user ID. Each staff member in WellnessLiving can also access the system as a client of their business. This is the ID number used to represent the staff member as a client.
   * @property {string} uid_staff The staff user ID.
   * @property {string} url_schedule URL to the schedule with this staff.
   */

  /**
   * An array containing information about the staff member.
   *
   * @get result
   * @type {Wl_Staff_StaffView_StaffViewModel_a_staff}
   */
  this.a_staff = undefined;

  /**
   * A list of staff keys.
   *
   * @get get
   * @type {?string[]}
   */
  this.a_staff_list = null;

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
  this.k_business = "";

  /**
   * The staff member key.
   * A staff member can work for more than one business.
   * This key can be found using the [StaffListApi](/Wl/Staff/StaffList/StaffList.json) endpoint.
   *
   * @get get
   * @type {string}
   */
  this.k_staff = "";

  /**
   * The staff member user ID.
   * A staff member can work for more than one business.
   * This key can be found using the [StaffListApi](/Wl/Staff/StaffList/StaffList.json) endpoint.
   *
   * @get get
   * @type {string}
   */
  this.uid_staff = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Staff_StaffView_StaffViewModel);

/**
 * @inheritDoc
 */
Wl_Staff_StaffView_StaffViewModel.prototype.config=function()
{
  return {"a_field":{"a_class_day":{"get":{"result":true}},"a_result_list":{"get":{"result":true}},"a_staff":{"get":{"result":true}},"a_staff_list":{"get":{"get":true}},"a_uid_staff_list":{"get":{"get":true}},"i_image_height":{"get":{"get":true}},"i_image_width":{"get":{"get":true}},"k_business":{"get":{"get":true}},"k_staff":{"get":{"get":true}},"uid_staff":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Staff_StaffView_StaffViewModel.instanceGet
 * @param {string} k_business The key of the business to show information for.
 * @param {string} k_staff The staff member key. A staff member can work for more than one business. This key can be found using the [StaffListApi](/Wl/Staff/StaffList/StaffList.json) endpoint.
 * @returns {Wl_Staff_StaffView_StaffViewModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves information about staff.
 *
 * This method can accept or one staff key [StaffViewApi](/Wl/Staff/StaffView/StaffView.json) or staff list
 * [StaffViewApi](/Wl/Staff/StaffView/StaffView.json) but not both (exception would be thrown).
 *
 * @function
 * @name Wl_Staff_StaffView_StaffViewModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
