/**
 * Returns data for a single attendance list row.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Attendance_Row_RowModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_visit";

  /**
   * @typedef {{}} Wl_Login_Attendance_Row_RowModel_a_row_a_quiz_a_quiz_status
   * @property {boolean} can_amend `true` if the current staff member may amend the completed form.
   * @property {boolean} can_complete `true` if the current staff member may complete the form.
   * @property {boolean} can_view `true` if the current staff member may view the form response.
   * @property {number} id_render Render mode for the form. One of {@link Core_Quiz_RenderModeSid} constants.
   * @property {number} id_status Response status. One of {@link Core_Quiz_Response_ResponseStatusSid} constants.
   * @property {boolean} is_private `true` if the form is private.
   * @property {string} k_business Business key.
   * @property {string} k_quiz Quiz key.
   * @property {string} k_quiz_login Quiz login key.
   * @property {string} k_quiz_response Quiz response key.
   * @property {string} text_title Form title.
   * @property {string} url_csv URL to export the completed form as CSV. Empty string if not available.
   * @property {string} url_direct Direct URL to fill in the outstanding form. Empty string if not available.
   * @property {string} url_pdf URL to export the completed form as PDF. Empty string if not available.
   * @property {string} url_print URL to print the form. Empty string if not available.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_Row_RowModel_a_row_a_quiz
   * @property {Wl_Login_Attendance_Row_RowModel_a_row_a_quiz_a_quiz_status} a_quiz_status Status and action data for a single form:
   * @property {string} html_quiz_status Rendered HTML of the form status badge, as shown in the attendance list.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_Row_RowModel_a_row
   * @property {Wl_Login_Attendance_Row_RowModel_a_row_a_quiz} a_quiz Map of form quiz key to form data. Each value is:
   * @property {string} dtu_date Visit date and time in UTC, MySQL format.
   * @property {string} html_icon Rendered HTML of the client info icon, as shown in the attendance list. Empty string if the visit has no client.
   * @property {string} html_remain Rendered HTML of the promotion progress bar, as shown in the attendance list.
   * @property {string} html_visit_note Rendered HTML of the visit note, as shown in the attendance list.
   * @property {boolean} is_quiz_subscription_active `true` if the business has an active quiz subscription.
   * @property {string} k_business Business key.
   * @property {string} k_visit Visit key.
   * @property {string} sid_list_type String identifier of the attendance list view type. Corresponds to a {@link Wl_Login_Attendance_Design_ListTypeSid} constant.
   * @property {string} uid Client user key.
   */

  /**
   * Data for a single attendance list row.
   *
   * @get result
   * @type {Wl_Login_Attendance_Row_RowModel_a_row}
   */
  this.a_row = undefined;

  /**
   * Visit date and time in UTC, MySQL format.
   *
   * @get get
   * @type {string}
   */
  this.dtu_date = "";

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Visit key.
   *
   * @get get
   * @type {string}
   */
  this.k_visit = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Attendance_Row_RowModel);

/**
 * @inheritDoc
 */
Wl_Login_Attendance_Row_RowModel.prototype.config=function()
{
  return {"a_field":{"a_row":{"get":{"result":true}},"dtu_date":{"get":{"get":true}},"k_business":{"get":{"get":true}},"k_visit":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Login_Attendance_Row_RowModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} k_visit Visit key.
 * @returns {Wl_Login_Attendance_Row_RowModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns data for a single attendance list row.
 *
 * Loads the visit, its form statuses and the action URLs for each form
 * that is linked to the visit. The render mode and the URLs follow the
 * same gates as the legacy appointment panel.
 *
 * @function
 * @name Wl_Login_Attendance_Row_RowModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
