/**
 * Schedule design data.
 *
 * This API is not located in Wl\Schedule\Design because in this case core does not recognize URL correctly.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_ScheduleDesign_ScheduleDesignModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * Cell size. One of {@link Wl_Schedule_CellSid} constants. 0 if not set yet.
   *
   * @get result
   * @post get
   * @var int
   */
  this.id_cell = 0;

  /**
   * Schedule time interval in minutes. One of {@link Wl_Schedule_IntervalSid} constants. 0 if not set yet.
   *
   * @get result
   * @post get
   * @type {number}
   */
  this.id_interval = 0;

  /**
   * Option of appointments display. One of {@link Wl_Schedule_OptionSid} constants. 0 if not set yet.
   *
   * @get result
   * @post get
   * @type {number}
   */
  this.id_option = 0;

  /**
   * Day ID of the start week.
   *
   * Constant from {@link Wl_Schedule_WeekDaySid}. 0 if not set yet.
   *
   * @get result
   * @post get
   * @type {number}
   */
  this.id_start_week = 0;

  /**
   * Determines whether to show the first profile alert on the schedule.
   *
   * `true` means to show the first profile alert on the schedule, `false` otherwise.
   *
   * @get result
   * @post get
   * @type {boolean}
   */
  this.is_appointment_alert = false;

  /**
   * <tt>true</tt> - If needed to show recurring canceled appointments on schedule. <tt>false</tt> - otherwise.
   * Current setting from business schedule design.
   *
   * @get result
   * @post get
   * @type {boolean}
   */
  this.is_appointment_cancel_recurring = false;

  /**
   * <tt>true</tt> - If needed to show single canceled appointments on schedule. <tt>false</tt> - otherwise.
   * Current setting from business schedule design.
   *
   * @get result
   * @post get
   * @type {boolean}
   */
  this.is_appointment_cancel_single = false;

  /**
   * <tt>true</tt> - If needed to show canceled classes on schedule. <tt>false</tt> - otherwise.
   * Current setting from business schedule design.
   *
   * @get result
   * @post get
   * @type {boolean}
   */
  this.is_class_cancel = false;

  /**
   * <tt>true</tt> - if need to show staff unavailable times with diagonal lines, <tt>false</tt> - otherwise.
   *
   * @get result
   * @post get
   * @type {boolean}
   */
  this.is_diagonal_staff_busy = undefined;

  /**
   * Whether sessions can be dragged and dropped on the schedule. `true` if sessions can be dragged and dropped,
   * `false` otherwise.
   *
   * @get result
   * @post get
   * @var bool
   */
  this.is_drag_and_drop = false;

  /**
   * Determines whether to show the forms icon on the schedule.
   *
   * `true` means to show the forms icon on the schedule, `false` otherwise.
   *
   * @get result
   * @post get
   * @type {boolean}
   */
  this.is_form_icon = false;

  /**
   * Determines whether to show icon in the corner.
   *
   * `true` means to show icon in the corner, `false` otherwise.
   *
   * @get result
   * @post get
   * @type {boolean}
   */
  this.is_service_icon = false;

  /**
   * Determines whether to show QUICK and SOAP notes preview on the schedule.
   *
   * `true` means to show QUICK and SOAP notes preview on the schedule, `false` otherwise.
   *
   * @get result
   * @post get
   * @type {boolean}
   */
  this.is_visit_note = false;

  /**
   * <tt>true</tt> - if need to show work note, <tt>false</tt> - otherwise.
   *
   * @get result
   * @post get
   * @type {boolean}
   */
  this.is_work_note = undefined;

  /**
   * Whether only business hours should be shown on schedule. `true` if only business hours should be shown
   * on schedule. `false` otherwise.
   *
   * @get result
   * @post get
   * @type {boolean}
   */
  this.is_work_only = false;

  /**
   * Business key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Cell background color when staff member is available.
   *
   * @get result
   * @post get
   * @type {?string}
   */
  this.s_color_staff_available = null;

  /**
   * Cell background color when staff member is not available.
   *
   * @get result
   * @post get
   * @type {?string}
   */
  this.s_color_staff_busy = null;

  /**
   * Color of staff name when staff was substituted.
   *
   * @get result
   * @post get
   * @type {?string}
   */
  this.s_color_staff_substitute = null;

  /**
   * Whether need to scroll schedule to last booked service.
   *
   * @get result
   * @post get
   * @type {boolean}
   */
  this.show_booking_after_book = false;

  /**
   * User key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extends(Wl_Schedule_ScheduleDesign_ScheduleDesignModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ScheduleDesign_ScheduleDesignModel.prototype.config=function()
{
  return {
    "a_field": {
      "i_interval": {"get": {"result": true}, "post": {"get": true}},
      "id_cell": {"get": {"result": true}, "post": {"get": true}},
      "id_option": {"get": {"result": true}, "post": {"get": true}},
      "id_start_week": {"get": {"result": true}, "post": {"get": true}},
      "is_appointment_alert": {"get": {"result": true}, "post": {"get": true}},
      "is_appointment_cancel_recurring": {"get": {"result": true}, "post": {"get": true}},
      "is_appointment_cancel_single": {"get": {"result": true}, "post": {"get": true}},
      "is_class_cancel": {"get": {"result": true}, "post": {"get": true}},
      "is_diagonal_staff_busy": {"get": {"result": true}, "post": {"get": true}},
      "is_drag_and_drop": {"get": {"result": true}, "post": {"get": true}},
      "is_form_icon": {"get": {"result": true}, "post": {"get": true}},
      "is_service_icon": {"get": {"result": true}, "post": {"get": true}},
      "is_visit_note": {"get": {"result": true}, "post": {"get": true}},
      "is_work_note": {"get": {"result": true}, "post": {"get": true}},
      "is_work_only": {"get": {"result": true}, "post": {"get": true}},
      "k_business": {"get": {"get": true}, "post": {"get": true}},
      "s_color_staff_available": {"get": {"result": true}, "post": {"get": true}},
      "s_color_staff_busy": {"get": {"result": true}, "post": {"get": true}},
      "s_color_staff_substitute": {"get": {"result": true}, "post": {"get": true}},
      "show_booking_after_book": {"get": {"result": true}, "post": {"get": true}},
      "uid": {"get": {"get": true}}, "post": {"get": true}}
  };
};

/**
 * @function
 * @name Wl_Schedule_ScheduleDesign_ScheduleDesignModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} uid User key.
 * @returns {Wl_Schedule_ScheduleDesign_ScheduleDesignModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */