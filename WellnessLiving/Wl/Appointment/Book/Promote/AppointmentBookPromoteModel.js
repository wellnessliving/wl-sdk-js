/**
 * Promotes a waitlisted visit to an active list for an appointment or asset.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Promote_AppointmentBookPromoteModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * ID of the source where a visit was promoted, one of {@link Wl_Mode_ModeSid} constants.
   *
   * `null` if not initialized yet.
   *
   * @post post
   * @see Wl_Mode_ModeSid
   * @type {?number}
   */
  this.id_mode = null;

  /**
   * Whether is awaiting for user confirmation.
   *
   * @post result
   * @type {boolean}
   */
  this.is_wait_confirm = undefined;

  /**
   * Business key.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * Visit key.
   *
   * @post post
   * @type {string}
   */
  this.k_visit = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Promote_AppointmentBookPromoteModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Promote_AppointmentBookPromoteModel.prototype.config=function()
{
  return {"a_field":{"id_mode":{"post":{"post":true}},"is_wait_confirm":{"post":{"result":true}},"k_business":{"post":{"post":true}},"k_visit":{"post":{"post":true}}}};
};

/**
 * Promotes a waitlisted visit to an active list for an appointment or asset.
 *
 * Validates that the caller has access to the business and location, that the specified visit
 * is for an appointment book, and that its scheduled book slot is still available, then
 * promotes the visit from the wait list. Updates
 * {@link Wl_Appointment_Book_Promote_AppointmentBookPromoteModel.is_wait_confirm} with whether the promoted visit is still
 * awaiting client confirmation.
 *
 * @function
 * @name Wl_Appointment_Book_Promote_AppointmentBookPromoteModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
