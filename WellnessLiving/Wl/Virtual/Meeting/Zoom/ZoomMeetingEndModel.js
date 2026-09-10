/**
 * Ends a virtual meeting.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Virtual_Meeting_Zoom_ZoomMeetingEndModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Business key.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * Meeting id.
   *
   * @post post
   * @type {string}
   */
  this.s_meeting_id = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Virtual_Meeting_Zoom_ZoomMeetingEndModel);

/**
 * @inheritDoc
 */
Wl_Virtual_Meeting_Zoom_ZoomMeetingEndModel.prototype.config=function()
{
  return {"a_field":{"k_business":{"post":{"post":true}},"s_meeting_id":{"post":{"post":true}}}};
};

/**
 * Ends a virtual meeting.
 *
 * Validates the business and, for requests made over http, checks that the current user has
 * access to it. Requires a meeting id, then delegates to the provider-specific `meetingEnd()`
 * implementation for the cleanup that actually ends the meeting.
 *
 * @function
 * @name Wl_Virtual_Meeting_Zoom_ZoomMeetingEndModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
