/**
 * Api for end meeting.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Virtual_MeetingEndModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this.ERROR_SILENT = true;

  /**
   * Business key.
   *
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Meeting id.
   *
   * @post post
   * @type {string}
   */
  this.s_meeting_id = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Virtual_MeetingEndModel);

/**
 * @inheritDoc
 */
Wl_Virtual_MeetingEndModel.prototype.config=function()
{
  return {
    "a_field": {
      "k_business": {
        "post": {
          "post": true
        }
      },
      "s_meeting_id": {
        "post": {
          "post": true
        }
      }
    }
  };
};