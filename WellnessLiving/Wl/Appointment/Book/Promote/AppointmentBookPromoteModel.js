/**
 * API to promote visits from a wait list to an active list for appointment/asset.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */

function Wl_Appointment_Book_Promote_AppointmentBookPromoteModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Response source. One of {@link Wl_Quiz_Response_SourceSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * Whether is awaiting for user confirmation.
   *
   * @post result
   * @type {boolean}
   */
  this.is_wait_confirm = false;

  /**
   * The business ID.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The visit ID to promote.
   *
   * @post post
   * @type {string}
   */
  this.k_visit = "0";
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Promote_AppointmentBookPromoteModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Promote_AppointmentBookPromoteModel.prototype.config=function()
{
  return {"a_field": {"id_mode": {"post": {"post": true}},"is_wait_confirm": {"post": {"result": true}},"k_business": {"post": {"post": true}},"k_visit": {"post": {"post": true}}}};
};