/**
 * Returns configuration for the Attendance Kiosk.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Reception_Roster_Design_ReceptionRosterDesignModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Reception_Roster_Design_ReceptionRosterDesignModel_a_image
   * @property {number} i_height Requested image height.
   * @property {number} i_height_src Original image height.
   * @property {number} i_width Requested image width.
   * @property {number} i_width_src Original image width.
   * @property {number} id_type_src List of image types.
   * @property {boolean} is-resize Whether image was resized to satisfy specified  `i_width` and `i_height`.
   * @property {string} url-thumbnail Url to requested image.
   * @property {string} url-view Url to original image.
   */

  /**
   * Image data for image which will be displayed in attendance web app page.
   *
   * @get result
   * @type {Wl_Reception_Roster_Design_ReceptionRosterDesignModel_a_image}
   */
  this.a_image = undefined;

  /**
   * Whether to hide client profile images.
   * `true` if client profile images should be hidden, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.hide_profile_images = undefined;

  /**
   * Number of seconds of inactivity before automatic redirect.
   *
   * @get result
   * @type {number}
   */
  this.i_attendance_direct_delay = 15;

  /**
   * Number of minutes for the client check-in window after session has started.
   *
   * @get result
   * @type {number}
   */
  this.i_book_open = undefined;

  /**
   * Units of time for the look ahead window for attendance app.
   *
   * @get result
   * @type {number}
   */
  this.i_book_quick_app = undefined;

  /**
   * Delay in seconds on attendance web app confirmation screen before redirect to login screen.
   *
   * @get result
   * @type {number}
   */
  this.i_confirm_delay = undefined;

  /**
   * ID of the action to take when automatically redirecting.
   * One of {@link Wl_Reception_Roster_DirectSid} constants.
   *
   * @get result
   * @see Wl_Reception_Roster_DirectSid
   * @type {number}
   */
  this.id_attendance_direct = 1;

  /**
   * Unit of time for the look ahead window for attendance app.
   *
   * @get result
   * @see ADurationSid
   * @type {number}
   */
  this.id_book_quick_app = undefined;

  /**
   * `true` if clients are allowed to check-in unpaid, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_attend_free = undefined;

  /**
   * Whether to allow sign-ins to classes in progress.
   *
   * @get result
   * @type {boolean}
   */
  this.is_book_open = undefined;

  /**
   * `true` if clients are allowed to check-in without booking prior,
   * `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_book_optional = undefined;

  /**
   * `true` if clients are allowed to sign in before session is started.,
   * `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_book_quick_app = undefined;

  /**
   * Key of the business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * `true` - show business name on attendance web app; `false` - do not show.
   *
   * @get result
   * @type {boolean}
   */
  this.show_business_name = undefined;

  /**
   * `true` - show confirm screen on attendance web app;
   * `false` - do not show.
   *
   * @get result
   * @type {boolean}
   */
  this.show_confirm_screen = undefined;

  /**
   * Name of the business to display in the attendance web app.
   *
   * @get result
   * @type {string}
   */
  this.text_business_name = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reception_Roster_Design_ReceptionRosterDesignModel);

/**
 * @inheritDoc
 */
Wl_Reception_Roster_Design_ReceptionRosterDesignModel.prototype.config=function()
{
  return {"a_field":{"a_image":{"get":{"result":true}},"hide_profile_images":{"get":{"result":true}},"i_attendance_direct_delay":{"get":{"result":true}},"i_book_open":{"get":{"result":true}},"i_book_quick_app":{"get":{"result":true}},"i_confirm_delay":{"get":{"result":true}},"id_attendance_direct":{"get":{"result":true}},"id_book_quick_app":{"get":{"result":true}},"is_attend_free":{"get":{"result":true}},"is_book_open":{"get":{"result":true}},"is_book_optional":{"get":{"result":true}},"is_book_quick_app":{"get":{"result":true}},"k_business":{"get":{"get":true}},"show_business_name":{"get":{"result":true}},"show_confirm_screen":{"get":{"result":true}},"text_business_name":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Reception_Roster_Design_ReceptionRosterDesignModel.instanceGet
 * @param {string} k_business Key of the business.
 * @returns {Wl_Reception_Roster_Design_ReceptionRosterDesignModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns configuration for the Attendance Kiosk.
 *
 * Returns kiosk display settings including custom image, logo, direction mode, background color,
 * and business name for the specified business.
 *
 * @function
 * @name Wl_Reception_Roster_Design_ReceptionRosterDesignModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
