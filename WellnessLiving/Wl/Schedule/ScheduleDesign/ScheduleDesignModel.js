/**
 * This method is called to process GET query.
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
   * Schedule time interval in minutes. One of {@link Wl_Schedule_Design_IntervalSid} constants. 0 if not set yet.
   *
   * @get result
   * @post post
   * @see Wl_Schedule_Design_IntervalSid
   * @type {number}
   */
  this.i_interval = 0;

  /**
   * Cell size. One of {@link Wl_Schedule_Design_CellSid} constants. 0 if not set yet.
   *
   * @get result
   * @post post
   * @see Wl_Schedule_Design_CellSid
   * @type {number}
   */
  this.id_cell = 0;

  /**
   * Option of appointments display. One of {@link Wl_Schedule_Design_OptionSid} constants. 0 if not set yet.
   *
   * @get result
   * @post post
   * @see Wl_Schedule_Design_OptionSid
   * @type {number}
   */
  this.id_option = 0;

  /**
   * Day ID of the start week.
   *
   * Constant from {@link Wl_Schedule_Design_WeekDaySid}. 0 if not set yet.
   *
   * @get result
   * @post post
   * @see Wl_Schedule_Design_WeekDaySid
   * @type {number}
   */
  this.id_start_week = 0;

  /**
   * Determines whether to show the first profile alert on the schedule.
   *
   * `true` - to show the first profile alert on the schedule.
   * `false` not to show. `null` if not set.
   *
   * @get result
   * @post post
   * @type {?boolean}
   */
  this.is_appointment_alert = null;

  /**
   * `true` - If needed to show recurring canceled appointments on schedule. `false` - otherwise.
   * Current setting from business schedule design. `null` if not set.
   *
   * @get result
   * @post post
   * @type {?boolean}
   */
  this.is_appointment_cancel_recurring = null;

  /**
   * `true` - If needed to show single canceled appointments on schedule. `false` - otherwise.
   * Current setting from business schedule design. `null` if not set.
   *
   * @get result
   * @post post
   * @type {?boolean}
   */
  this.is_appointment_cancel_single = null;

  /**
   * `true` - If needed to show canceled classes on schedule. `false` - otherwise.
   * Current setting from business schedule design. `null` if not set.
   *
   * @get result
   * @post post
   * @type {?boolean}
   */
  this.is_class_cancel = null;

  /**
   * `true` If needed to show staff unavailable times with diagonal lines, `false` - otherwise.
   * `null` if not set.
   *
   * @get result
   * @post post
   * @type {?boolean}
   */
  this.is_diagonal_staff_busy = null;

  /**
   * Whether sessions can be dragged and dropped on the schedule. `true` if sessions can be dragged and dropped,
   * `false` otherwise. `null` if not set.
   *
   * @get result
   * @post post
   * @type {?boolean}
   */
  this.is_drag_and_drop = null;

  /**
   * Determines whether to show the forms icon on the schedule.
   *
   * `true` means to show the forms icon on the schedule, `false` not to show. `null` if not set.
   *
   * @get result
   * @post post
   * @type {?boolean}
   */
  this.is_form_icon = null;

  /**
   * Determines whether to show icon in the corner.
   *
   * `true` means to show icon in the corner, `false` otherwise. `null` if not set.
   *
   * @get result
   * @post post
   * @type {?boolean}
   */
  this.is_service_icon = null;

  /**
   * Determines whether to show QUICK and SOAP notes preview on the schedule.
   *
   * `true` means to show QUICK and SOAP notes preview on the schedule, `false` not to show. `null` if not set.
   *
   * @get result
   * @post post
   * @type {?boolean}
   */
  this.is_visit_note = null;

  /**
   * `true` - if need to show work note, `false` - otherwise. `null` if not set.
   *
   * @get result
   * @post post
   * @type {?boolean}
   */
  this.is_work_note = null;

  /**
   * Whether only business hours should be shown on schedule. `true` if only business hours should be shown
   * on schedule. `false` otherwise. `null` if not set.
   *
   * @get result
   * @post post
   * @type {?boolean}
   */
  this.is_work_only = null;

  /**
   * Business key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Cell background color when staff member is available. `null` if not set.
   *
   * @get result
   * @post post
   * @type {?string}
   */
  this.s_color_staff_available = null;

  /**
   * Cell background color when staff member is not available. `null` if not set.
   *
   * @get result
   * @post post
   * @type {?string}
   */
  this.s_color_staff_busy = null;

  /**
   * Color of staff name when staff was substituted. `null` if not set.
   *
   * @get result
   * @post post
   * @type {?string}
   */
  this.s_color_staff_substitute = null;

  /**
   * Whether to scroll schedule to last booked service. `true` to scroll, `false` otherwise. `null` if not set.
   *
   * @get result
   * @post post
   * @type {?boolean}
   */
  this.show_booking_after_book = null;

  /**
   * User key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_ScheduleDesign_ScheduleDesignModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ScheduleDesign_ScheduleDesignModel.prototype.config=function()
{
  return {"a_field":{"i_interval":{"get":{"result":true},"post":{"post":true}},"id_cell":{"get":{"result":true},"post":{"post":true}},"id_option":{"get":{"result":true},"post":{"post":true}},"id_start_week":{"get":{"result":true},"post":{"post":true}},"is_appointment_alert":{"get":{"result":true},"post":{"post":true}},"is_appointment_cancel_recurring":{"get":{"result":true},"post":{"post":true}},"is_appointment_cancel_single":{"get":{"result":true},"post":{"post":true}},"is_class_cancel":{"get":{"result":true},"post":{"post":true}},"is_diagonal_staff_busy":{"get":{"result":true},"post":{"post":true}},"is_drag_and_drop":{"get":{"result":true},"post":{"post":true}},"is_form_icon":{"get":{"result":true},"post":{"post":true}},"is_service_icon":{"get":{"result":true},"post":{"post":true}},"is_visit_note":{"get":{"result":true},"post":{"post":true}},"is_work_note":{"get":{"result":true},"post":{"post":true}},"is_work_only":{"get":{"result":true},"post":{"post":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"s_color_staff_available":{"get":{"result":true},"post":{"post":true}},"s_color_staff_busy":{"get":{"result":true},"post":{"post":true}},"s_color_staff_substitute":{"get":{"result":true},"post":{"post":true}},"show_booking_after_book":{"get":{"result":true},"post":{"post":true}},"uid":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Schedule_ScheduleDesign_ScheduleDesignModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} uid User key.
 * @returns {Wl_Schedule_ScheduleDesign_ScheduleDesignModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * This method is called to process GET query.
 *
 * Loads the schedule design settings configured for the business, including cell size, time
 * interval, first day of week, and the colors and toggles that control what is shown on the
 * staff schedule (staff busy diagonal lines, drag-and-drop, cancelled appointments/classes,
 * notes, and icons). Access is public when no user key is given, because the schedule design
 * also drives public schedule widgets that guests can view; when a user key is given, the
 * user's profile access to the business is checked.
 *
 * @function
 * @name Wl_Schedule_ScheduleDesign_ScheduleDesignModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Saves schedule design settings including schedule config settings.
 *
 * Validates that the current user has permission to edit the business schedule design, then
 * merges the given fields into the existing schedule design and schedule config records for
 * the business and user, creating them when they do not exist yet. Saves the updated schedule
 * design row and the schedule config's serialized settings, refreshes the related caches,
 * marks the config as the user's default filter when requested, and logs the change when any
 * setting was actually modified.
 *
 * @function
 * @name Wl_Schedule_ScheduleDesign_ScheduleDesignModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
